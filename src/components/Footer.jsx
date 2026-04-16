import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { BsFire } from 'react-icons/bs';
import { FaLinkedinIn, FaTiktok, FaInstagram, FaYoutube } from 'react-icons/fa';
import { HiEnvelope } from 'react-icons/hi2';
import footerLogo from '../assets/footer-logo.svg';

// Mouse Trail Images
import trail1 from '../assets/mouse-move-.svg';
import trail2 from '../assets/moue-move-2.svg';
import trail3 from '../assets/mouse-move-3.svg';

const TRAIL_IMAGES = [trail1, trail2, trail3];

const Footer = () => {
  const { scrollY } = useScroll();
  const rotateScroll = useTransform(scrollY, (y) => y * 0.4);

  const [trail, setTrail] = useState([]);
  const footerRef = useRef(null);
  const lastPos = useRef({ x: 0, y: 0 });
  const indexRef = useRef(0);
  const lastTime = useRef(0);

  const handleMouseMove = (e) => {
    if (!footerRef.current) return;

    const now = Date.now();
    const rect = footerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Check distance moved 
    const dist = Math.sqrt(
      Math.pow(x - lastPos.current.x, 2) + Math.pow(y - lastPos.current.y, 2)
    );

    // Throttle drop rate to 1 image every 150ms + minimum 150px distance
    if (dist > 150 && now - lastTime.current > 150) {
      const id = now;
      
      // Use images in order (0, 1, 2)
      const imgIndex = indexRef.current % TRAIL_IMAGES.length;
      indexRef.current += 1;

      setTrail((prev) => [...prev, { id, x, y, imgIndex }]);
      lastPos.current = { x, y };
      lastTime.current = now;

      // Remove after animation
      setTimeout(() => {
        setTrail((prev) => prev.filter((item) => item.id !== id));
      }, 800);
    }
  };

  return (
    <>
      {/* ===================== MOBILE FOOTER (< 768px only) ===================== */}
      <footer className="md:hidden bg-[#F0EBE3] flex flex-col items-center px-6 pt-8 pb-6 overflow-hidden">

        {/* Footer Logo Image */}
        <div className="w-full flex justify-center mb-6">
          <img
            src={footerLogo}
            alt="Get Hyped Logo"
            className="w-full max-w-[320px] h-auto"
          />
        </div>

        {/* Orange CTA Button */}
        <motion.button
          whileHover={{ y: -8, scale: 1.05, rotate: -2 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-3 bg-[#ff5e26] text-white font-bold text-[15px] rounded-2xl pl-5 pr-2 py-2 mb-6 shadow-md group"
        >
          <span>Get Hyped! Neem contact op</span>
          <div className="bg-white rounded-xl w-9 h-9 flex items-center justify-center shrink-0">
            <BsFire size={20} color="#ff5e26" />
          </div>
        </motion.button>

        {/* Nav Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {['Expertises', 'Work', 'About', 'Contact'].map((item) => (
            <motion.span
              key={item}
              initial="initial"
              whileHover="hover"
              className="relative bg-white rounded-[14px] px-5 py-2.5 text-[14px] font-bold text-black shadow-sm border border-gray-200 cursor-pointer overflow-hidden group"
            >
              {/* Layer 1: Orange Sweep */}
              <motion.div
                variants={{
                  initial: { y: '100%' },
                  hover: { y: '-100%' }
                }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="absolute inset-0 z-0 bg-[#ff5e26]"
              />

              {/* Layer 2: Black Background */}
              <motion.div
                variants={{
                  initial: { y: '100%' },
                  hover: { y: 0 }
                }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1], delay: 0.02 }}
                className="absolute inset-0 z-0 bg-[#111]"
              />

              <motion.span
                variants={{
                  initial: { color: '#111' },
                  hover: { color: '#FFF' }
                }}
                transition={{ duration: 0.2, delay: 0.1 }}
                className="relative z-10"
              >
                {item}
              </motion.span>
            </motion.span>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mb-8">
          <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-sm border border-gray-200">
            <FaLinkedinIn size={18} />
          </div>
          <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-sm border border-gray-200">
            <FaTiktok size={16} />
          </div>
          <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-sm border border-gray-200">
            <FaInstagram size={18} />
          </div>
          <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-sm border border-gray-200">
            <FaYoutube size={20} />
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center gap-1 mb-6 text-center text-[15px]">
          <p className="font-medium text-[#222] cursor-pointer hover:underline">info@gethyped.nl</p>
          <p className="font-medium text-[#222]">+31 6 1533 7496</p>
        </div>

        {/* Address */}
        <div className="flex flex-col items-center gap-0.5 mb-8 text-center text-[15px]">
          <p className="font-medium text-[#222]">Beltrumsestraat 6,</p>
          <p className="font-medium text-[#222]">7141 AL Groenlo</p>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-gray-300 mb-5" />

        {/* Legal / Bottom */}
        <div className="flex flex-col items-center gap-1.5 text-[13px] text-gray-500 font-medium">
          <span className="cursor-pointer hover:text-black transition-colors">Privacyvoorwaarden</span>
          <span>© 2025 Get Hyped</span>
          <span>© Design by Dylan</span>
        </div>
      </footer>

      {/* ===================== DESKTOP / TABLET FOOTER (≥ 768px) ===================== */}
      <footer
        ref={footerRef}
        onMouseMove={handleMouseMove}
        className="hidden md:flex h-screen min-h-[800px] relative flex-col overflow-hidden select-none"
      >
        {/* Mouse Trail Images */}
        <AnimatePresence>
          {trail.map((item) => (
            <motion.img
              key={item.id}
              src={TRAIL_IMAGES[item.imgIndex]}
              initial={{ opacity: 0, scale: 0, rotate: -20 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 1.5, rotate: 20 }}
              transition={{ duration: 0.4 }}
              style={{
                position: 'absolute',
                left: item.x,
                top: item.y,
                width: '200px',
                height: '200px',
                pointerEvents: 'none',
                zIndex: 2000,
                transform: 'translate(-50%, -50%)',
              }}
              alt=""
            />
          ))}
        </AnimatePresence>

        {/* Top Half: CTA Section centered dynamically above the slanted block */}
        <div className="flex-1 flex flex-col items-center justify-center z-10 px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[4rem] md:text-[6rem] lg:text-[7.5rem] font-bold text-black tracking-tight leading-none mb-10 text-center"
          >
            Let's Get Hyped!
          </motion.h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            {/* Email Button */}
            <motion.div
              whileHover={{ y: -8, scale: 1.05, rotate: -2 }}
              className="group inline-flex items-center gap-3 border-[2.5px] border-black rounded-2xl pl-5 pr-1.5 py-1.5 bg-[#F8F5F0] hover:shadow-lg transition-shadow cursor-pointer"
            >
              <span className="text-black font-extrabold text-[15px] pr-2">Mail ons direct</span>
              <div className="bg-[#111] rounded-xl w-10 h-10 flex items-center justify-center text-white shrink-0">
                <HiEnvelope size={20} />
              </div>
            </motion.div>

            {/* Get Results Button */}
            <motion.div
              whileHover={{ y: -8, scale: 1.05, rotate: -2 }}
              className="group inline-flex items-center gap-3 bg-[#ff5e26] border-[2.5px] border-[#ff5e26] rounded-2xl pl-5 pr-1.5 py-1.5 hover:shadow-lg transition-shadow cursor-pointer"
            >
              <span className="text-white font-extrabold text-[15px] pr-2">Get Results</span>
              <div className="bg-white rounded-xl w-10 h-10 flex items-center justify-center shrink-0">
                <BsFire size={20} color="#ff5e26" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Half: Slanted Footer Block - Now Centered as a "Batch" */}
        <div
          onMouseMove={(e) => e.stopPropagation()}
          className="relative w-full h-[650px] md:h-[500px] lg:h-[460px] z-20 px-6 lg:px-12"
        >
          {/* The Batch Container: both top corners smoothly rounded */}
          <div className="relative w-full h-full max-w-[1700px] mx-auto overflow-hidden bg-[#F8F5F0] rounded-t-[24px] md:rounded-t-[32px]">

            <div className="relative w-full h-full flex items-end">
              {/* The SVG Logo */}
              <div className="absolute left-0 bottom-0 pointer-events-none z-10 w-[60vw] md:w-[45vw] lg:w-[20vw] max-w-[550px]">
                <img
                  src={footerLogo}
                  alt="Get Hyped Logo Outline"
                  className="w-full h-auto"
                />
              </div>

              {/*
                BEIGE DIAGONAL OVERLAY:
                - Background (cream #F8F5F0) shows on the left / bottom-left (logo area)
                - Beige (#EAE4D8) fills from upper-right, coming down diagonally
              */}
              <div
                className="absolute inset-0 z-0"
                style={{
                  background: '#EAE4D8',
                  clipPath: 'polygon(-90% 140%, 100% 0%, 100% 100%, 0vw 100%)'
                }}
              />

              {/* Bottom strip: beige for the areas where logo height was cream */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[25%] z-0 bg-[#EAE4D8]"
              />

              {/* Content Wrapper inside the slanted card */}
              <div className="absolute inset-0 flex flex-col justify-end px-6 lg:px-16 overflow-hidden lg:overflow-visible pb-2 z-20 pointer-events-none">

                {/* Master Grid Wrapper for all text elements pushed to the far right */}
                <div className="flex flex-col lg:flex-row justify-end items-end w-full lg:w-auto ml-auto pt-[120px] pointer-events-auto mt-auto mb-3 gap-12 lg:gap-20">

                  {/* Left Cluster: Horizontal Nav Pills & Socials */}
                  <div className="flex flex-col items-start gap-6 lg:gap-[40px] lg:mb-0 mt-10 lg:mt-0">

                    {/* Row 1: Horizontal Pills */}
                    <div className="flex flex-wrap lg:flex-nowrap gap-3 lg:gap-4">
                      {['Expertises', 'Work', 'About', 'Contact'].map((item) => (
                        <motion.span
                          key={item}
                          initial="initial"
                          whileHover="hover"
                          className="relative bg-white rounded-[14px] px-5 py-2.5 text-[15px] font-bold text-black shadow-sm border-[2px] border-transparent transition-colors cursor-pointer overflow-hidden group"
                        >
                          {/* Layer 1: Orange Sweep */}
                          <motion.div
                            variants={{
                              initial: { y: '100%' },
                              hover: { y: '-100%' }
                            }}
                            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                            className="absolute inset-0 z-0 bg-[#ff5e26]"
                          />

                          {/* Layer 2: Black Background */}
                          <motion.div
                            variants={{
                              initial: { y: '100%' },
                              hover: { y: 0 }
                            }}
                            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1], delay: 0.02 }}
                            className="absolute inset-0 z-0 bg-[#111]"
                          />

                          <motion.span
                            variants={{
                              initial: { color: '#111' },
                              hover: { color: '#FFF' }
                            }}
                            transition={{ duration: 0.2, delay: 0.1 }}
                            className="relative z-10"
                          >
                            {item}
                          </motion.span>
                        </motion.span>
                      ))}
                    </div>

                    {/* Row 2: Follow Us */}
                    <div className="flex items-center gap-6">
                      <span className="font-extrabold text-black text-[18px]">Follow us</span>
                      <div className="flex gap-4">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-sm">
                          <FaLinkedinIn size={20} />
                        </div>
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-sm">
                          <FaTiktok size={18} />
                        </div>
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-sm">
                          <FaInstagram size={20} />
                        </div>
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-sm">
                          <FaYoutube size={22} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Cluster: Address Info */}
                  <div className="flex flex-col w-full lg:w-[13rem] gap-[45px] text-[15px] pt-12 lg:pt-0">
                    <div className="flex flex-col gap-1">
                      <h4 className="font-extrabold text-[19px] text-black mb-1.5">Contact</h4>
                      <p className="font-medium text-[#222] tracking-tight cursor-pointer hover:text-[#ff5e26] transition-colors">info@gethyped.nl</p>
                      <p className="font-medium text-[#222] tracking-tight cursor-pointer hover:text-[#ff5e26] transition-colors">+31 6 1533 7496</p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="font-extrabold text-[19px] text-black mb-1.5">Adres</h4>
                      <p className="font-medium text-[#222] tracking-tight cursor-pointer hover:text-[#ff5e26] transition-colors">Beltrumsestraat 6,</p>
                      <p className="font-medium text-[#222] tracking-tight cursor-pointer hover:text-[#ff5e26] transition-colors">7141 AL Groenlo</p>
                    </div>
                  </div>
                </div>

                {/* Legal Text Row natively aligned underneath corresponding columns */}
                <div className="flex flex-col lg:flex-row justify-end w-full lg:w-auto ml-auto gap-4 lg:gap-20 text-[14px] font-semibold text-gray-500 pointer-events-auto">

                  {/* Under Left Cluster */}
                  <div className="flex w-full lg:w-auto justify-between lg:justify-start lg:gap-24">
                    <span>© 2025 Get Hyped</span>
                    <span>© Design by Dylan</span>
                  </div>

                  {/* Under Right Cluster */}
                  <div className="w-full lg:w-[13rem] flex justify-start">
                    <span className="cursor-pointer hover:text-[#ff5e26] transition-colors block">Privacyvoorwaarden</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Floating Pink Badge - Moved outside the overflow-hidden container to prevent clipping */}
          <motion.div
            style={{ rotate: rotateScroll }}
            className="absolute top-[-30px] md:top-[-50px] right-[10%] lg:right-[8%] w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#f8b2f1] flex items-center justify-center shadow-md cursor-pointer z-[1000]"
          >
            {/* Circular Text via SVG Path */}
            <svg className="w-full h-full p-[6px] absolute inset-0" viewBox="0 0 100 100">
              <path id="curve" d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
              <text className="text-[12.5px] font-black fill-black uppercase tracking-[1px]">
                <textPath href="#curve" startOffset="0%">
                  • GET HYPED • GET RESULTS • GET NOTICED
                </textPath>
              </text>
            </svg>
            <span className="font-black text-4xl text-black tracking-tighter" style={{ transform: 'scaleY(1.3)' }}>GH</span>
          </motion.div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
