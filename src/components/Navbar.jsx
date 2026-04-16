import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BsFire } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import logo from "../assets/navar-logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 80) {
        setVisible(true); // Always show at top
      } else if (currentY > lastScrollY) {
        setVisible(false); // Scrolling DOWN → hide
      } else {
        setVisible(true); // Scrolling UP → show
      }
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = ["Expertises", "Work", "About", "Contact"];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <motion.nav
          animate={{ y: visible ? 0 : -120, opacity: visible ? 1 : 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 28 }}
          className="max-w-[1700px] mx-auto px-6 lg:px-10 pt-6 pb-2 flex items-center justify-between relative z-40"
        >
          {/* Real Logo - Larger for 100% zoom */}
          <div className="cursor-pointer">
            <img src={logo} alt="Get Hyped" className="h-12 w-auto" />
          </div>

          {/* Center Links - Desktop Only (Now LG+) */}
          <div className="hidden lg:flex items-center gap-2 bg-white px-2 py-1 rounded-2xl shadow-[0px_4px_25px_rgba(0,0,0,0.03)]">
            {navLinks.map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="relative text-[15px] font-bold transition-all px-6 py-3 rounded-xl flex items-center justify-center group overflow-hidden"
                initial="initial"
                whileHover="hover"
              >
                {/* Layer 1: Orange Sweep (Passes through) */}
                <motion.div
                  variants={{
                    initial: { y: "100%" },
                    hover: { y: "-100%" },
                  }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  className="absolute inset-0 z-0 bg-[#ff5e26]"
                />

                {/* Layer 2: Black Background (Stays) */}
                <motion.div
                  variants={{
                    initial: { y: "100%" },
                    hover: { y: 0 },
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.23, 1, 0.32, 1],
                    delay: 0.02,
                  }}
                  className="absolute inset-0 z-0 bg-[#111]"
                />

                <motion.span
                  variants={{
                    initial: { color: "#111" },
                    hover: { color: "#FFF" },
                  }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                  className="relative z-10"
                >
                  {link}
                </motion.span>
              </motion.a>
            ))}
          </div>

          {/* Right CTA - Desktop Only (Now LG+) */}
          <motion.div
            whileHover={{ y: -8, scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.97 }}
            className="hidden lg:flex cursor-pointer bg-gradient-to-r from-fuchsia-300 to-pink-300 rounded-xl px-6 py-3 items-center gap-3 shadow-md"
          >
            <span className="text-[15px] font-bold text-black whitespace-nowrap">
              Get Results
            </span>
            <span className="bg-white rounded-lg w-7 h-7 flex items-center justify-center shadow-sm">
              <BsFire size={16} color="#ff5e26" />
            </span>
          </motion.div>

          {/* Mobile/Tablet Hamburger Menu - Animates to Cross */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="flex lg:hidden cursor-pointer bg-[#FAD6FF] rounded-xl w-12 h-12 flex-col items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all relative z-[110]"
          >
            <motion.div
              animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-black rounded-full origin-center"
            />
            <motion.div
              animate={isOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-black rounded-full origin-center"
            />
          </div>
        </motion.nav>
      </div>

      {/* Mobile/Tablet Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-110%", rotate: -15, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, rotate: 0, opacity: 1, scale: 1 }}
            exit={{ y: "-110%", rotate: 15, opacity: 0, scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 22,
              mass: 1,
            }}
            className="fixed inset-4 bg-[#f7b8fa] z-[100] rounded-[32px] p-6 flex flex-col items-center shadow-2xl overflow-hidden origin-top-left"
          >
            {/* Top Bar inside Menu */}
            <div className="w-full flex justify-between items-start mb-12">
              <img src={logo} alt="Logo" className="h-10 w-auto" />
              <div
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 bg-white rounded-xl flex items-center justify-center cursor-pointer shadow-sm active:scale-90 transition-transform"
              >
                <IoClose size={22} className="text-black" />
              </div>
            </div>

            {/* Navigation Links Column */}
            <div className="flex flex-col gap-3 w-full flex-1 justify-center items-center">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.05 + i * 0.04 }}
                >
                  <a
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="inline-block bg-white text-black font-black text-center text-xl md:text-3xl px-8 py-3 md:px-12 md:py-4 rounded-xl md:rounded-2xl border-b-4 border-black/5 hover:bg-gray-50 transition-colors shadow-sm"
                  >
                    {link}
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-auto mb-4 w-full flex justify-center"
            >
              <div className="bg-[#111] text-white rounded-2xl md:rounded-3xl px-8 py-3 md:px-12 md:py-4 flex items-center gap-4 cursor-pointer hover:scale-105 transition-transform">
                <span className="text-lg md:text-2xl font-black italic tracking-tighter">
                  Get Results
                </span>
                <div className="bg-white rounded-xl w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-sm">
                  <BsFire size={24} color="#ff5e26" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
