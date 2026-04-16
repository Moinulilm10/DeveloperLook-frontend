import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const defaultImage1 =
  "https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=800&auto=format&fit=crop"; // Car/lifestyle replacement
const defaultImage2 =
  "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800&auto=format&fit=crop"; // Garage replacement

import heroVideo1 from "../assets/hero-video-1.mp4";
import heroVideo2 from "../assets/hero-video-2.mp4";

const Hero = () => {
  // Mouse parallax tracking - refined for better sensitivity/smoothness
  const mouseX = useMotionValue(0);
  const mouseXSpring = useSpring(mouseX, { stiffness: 60, damping: 25 }); // Softer physics
  const containerX = useTransform(mouseXSpring, [-800, 800], [80, -80]); // Slightly wider range

  const handleMouseMove = (e) => {
    const { clientX } = e;
    const centerX = window.innerWidth / 2;
    // Normalized value for smoother tracking across varied screen widths
    mouseX.set(clientX - centerX);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
  };

  // Framer motion variants
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVars = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 20 },
    },
  };

  const cardVars = {
    hidden: { opacity: 0, scale: 0.8, y: 120 },
    show: (custom) => ({
      opacity: 1,
      scale: 1,
      y: custom.yOffset || 0,
      rotate: custom.rotate,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15,
        delay: custom.delay,
      },
    }),
  };

  return (
    <main
      className="max-w-[1700px] mx-auto px-6 lg:px-12 mt-12 lg:mt-32 relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        variants={containerVars}
        initial="hidden"
        animate="show"
        className="max-w-[1700px]"
      >
        {/* Main Title - Responsive 2-Line Layout */}
        <div className="flex flex-col">
          <div className="overflow-hidden">
            <motion.h1
              variants={itemVars}
              className="text-[2rem] sm:text-[3rem] lg:text-[5.5rem] font-semibold text-black tracking-[-0.05em]"
            >
              Get Hyped. Get
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              variants={itemVars}
              className="text-[2rem] sm:text-[3rem] lg:text-[5.5rem] font-semibold leading-[0.95] lg:leading-[0.85] tracking-[-0.05em] mb-2 lg:mb-4 text-black"
            >
              Noticed. <span className="inline-block">Get Results.</span>
            </motion.h1>
          </div>
        </div>

        <motion.p
          variants={itemVars}
          className="text-lg md:text-2xl lg:text-[24px] font-semibold leading-[1.2] max-w-[300px] md:max-w-xl lg:max-w-3xl mt-3 lg:mt-6 text-black/90"
        >
          Klaar met gokken op content
          <br />
          die niets oplevert?
        </motion.p>
      </motion.div>

      {/* Cards Section - Deck Array Fanned Out */}
      <motion.div
        style={{ x: containerX }}
        className="mt-12 lg:mt-20 flex flex-row justify-center items-center -space-x-6 md:-space-x-10 lg:-space-x-12 relative transition-all duration-300 h-auto md:h-[360px] lg:h-[520px] pb-8"
      >
        {/* Card 1: Blue (Front-most) */}
        <motion.div
          custom={{ delay: 0.6, rotate: -5, yOffset: -20 }}
          variants={cardVars}
          initial="hidden"
          animate="show"
          whileHover={{ rotate: 0, y: -40, x: -50, scale: 1.05, zIndex: 50 }}
          className="shrink-0 group relative z-40 w-[170px] h-[230px] md:w-[220px] md:h-[300px] lg:w-[320px] lg:h-[410px] xl:w-[360px] xl:h-[460px] bg-[#009bf9] rounded-[24px] lg:rounded-[36px] p-5 lg:p-8 flex flex-col justify-between shadow-none origin-bottom-right transition-shadow"
        >
          <h2 className="text-black font-black text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] tracking-tighter leading-[0.9] mt-2 lg:mt-3">
            10M+
          </h2>
          <div className="flex flex-col w-fit">
            <h3 className="text-black font-bold text-[15px] md:text-[18px] lg:text-[28px] tracking-[-0.02em] leading-tight mb-2">
              Organische views
            </h3>
            <div className="w-full h-[2px] bg-[#111] mb-2 lg:mb-3"></div>
            <p className="text-black text-[10px] md:text-[11px] lg:text-[14px] font-medium opacity-90 leading-tight pr-[5%]">
              Groei door slimme content
            </p>
          </div>
        </motion.div>

        {/* Card 2: Image */}
        <motion.div
          custom={{ delay: 0.7, rotate: 6, yOffset: 15 }}
          variants={cardVars}
          initial="hidden"
          animate="show"
          whileHover={{ rotate: 0, y: -30, x: -20, scale: 1.05, zIndex: 50 }}
          className="shrink-0 relative z-30 w-[170px] h-[230px] md:w-[220px] md:h-[300px] lg:w-[320px] lg:h-[410px] xl:w-[360px] xl:h-[460px] rounded-[24px] lg:rounded-[36px] overflow-hidden shadow-none origin-bottom-left transition-shadow"
        >
          <video
            src={heroVideo1}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </motion.div>

        {/* Card 3: Green */}
        <motion.div
          custom={{ delay: 0.8, rotate: 4, yOffset: 45 }}
          variants={cardVars}
          initial="hidden"
          animate="show"
          whileHover={{ rotate: 0, y: -20, x: 20, scale: 1.05, zIndex: 50 }}
          className="hidden md:flex snap-center shrink-0 group relative z-20 w-[220px] h-[300px] lg:w-[320px] lg:h-[410px] xl:w-[360px] xl:h-[460px] bg-[#2dce89] rounded-[24px] lg:rounded-[36px] p-5 lg:p-8 flex flex-col justify-between shadow-none origin-bottom-right transition-shadow"
        >
          <h2 className="text-black font-black text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] tracking-tighter leading-[0.9] mt-2 lg:mt-3">
            30+
          </h2>
          <div className="flex flex-col w-fit">
            <h3 className="text-black font-bold text-[15px] md:text-[18px] lg:text-[28px] tracking-[-0.02em] leading-tight mb-2">
              Merken geholpen
            </h3>
            <div className="w-full h-[2px] bg-[#111] mb-2 lg:mb-3"></div>
            <p className="text-black text-[10px] md:text-[11px] lg:text-[14px] font-medium opacity-90 leading-tight pr-[5%]">
              Van start-up tot multinational
            </p>
          </div>
        </motion.div>

        {/* Card 4: Image with text */}
        <motion.div
          custom={{ delay: 0.9, rotate: -6, yOffset: -5 }}
          variants={cardVars}
          initial="hidden"
          animate="show"
          whileHover={{ rotate: 0, y: -45, x: 50, scale: 1.05, zIndex: 50 }}
          className="hidden lg:flex snap-center shrink-0 relative z-10 w-[320px] h-[410px] xl:w-[360px] xl:h-[460px] rounded-[24px] lg:rounded-[36px] overflow-hidden shadow-none origin-bottom-left transition-shadow"
        >
          <video
            src={heroVideo2}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default Hero;
