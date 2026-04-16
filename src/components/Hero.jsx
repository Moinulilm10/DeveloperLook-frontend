import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState } from "react";

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

  const [hoverIndex, setHoverIndex] = useState(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Dynamic card animation generator
  const getCardProps = (index, baseRotate, baseY, baseZ, defaultDelay) => {
    const isHovered = hoverIndex === index;

    let x = 0;
    let y = baseY;
    let rotate = baseRotate;
    let scale = 1;
    let zIndex = baseZ;

    // Hover state over THIS card
    if (isHovered) {
      rotate = 0; // Turn perfectly straight as requested
      scale = 1.05; // Slightly scaled to emphasize selection
      zIndex = 60; // Pull to absolute front
      y -= 25; // Pull out of the deck upwards

      // Edge compensation: lean the leftmost and rightmost cards outward
      // so the gap feels mathematically symmetrical.
      if (index === 0) x = -40; // Push first card left
      if (index === 3) x = 40;  // Push fourth card right
    }

    // "Part the sea" pushing logic that explicitly moves siblings left/right
    if (hoverIndex !== null && !isHovered) {
      if (index < hoverIndex) {
        x = -80; // Hard push left for preceding cards
      }
      if (index > hoverIndex) {
        x = 80; // Hard push right for succeeding cards
      }
      // Very slight drop for non-hovered to emphasize hovered
      y += 10; 
    }

    return {
      initial: { opacity: 0, scale: 0.8, y: baseY + 120 },
      animate: {
        opacity: 1,
        scale,
        y,
        x,
        rotate,
        zIndex,
      },
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        delay: hasInteracted ? 0 : defaultDelay,
      },
    };
  };

  const handleCardInteraction = () => {
    if (!hasInteracted) setHasInteracted(true);
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
        {/* Card 0: Blue (Front-most) */}
        <motion.div
          {...getCardProps(0, -5, -20, 40, 0.6)}
          onMouseEnter={() => {
            handleCardInteraction();
            setHoverIndex(0);
          }}
          onMouseLeave={() => setHoverIndex(null)}
          className="shrink-0 group cursor-pointer relative w-[170px] h-[230px] md:w-[220px] md:h-[300px] lg:w-[320px] lg:h-[410px] xl:w-[360px] xl:h-[460px] bg-[#009bf9] rounded-[24px] lg:rounded-[36px] p-5 lg:p-8 flex flex-col justify-between shadow-none origin-bottom-right transition-shadow"
        >
          <h2 className="text-black font-black text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] tracking-tighter leading-[0.9] mt-2 lg:mt-3 pointer-events-none">
            10M+
          </h2>
          <div className="flex flex-col w-fit pointer-events-none">
            <h3 className="text-black font-bold text-[15px] md:text-[18px] lg:text-[28px] tracking-[-0.02em] leading-tight mb-2">
              Organische views
            </h3>
            <div className="w-full h-[2px] bg-[#111] mb-2 lg:mb-3"></div>
            <p className="text-black text-[10px] md:text-[11px] lg:text-[14px] font-medium opacity-90 leading-tight pr-[5%]">
              Groei door slimme content
            </p>
          </div>
        </motion.div>

        {/* Card 1: Image */}
        <motion.div
          {...getCardProps(1, 6, 15, 30, 0.7)}
          onMouseEnter={() => {
            handleCardInteraction();
            setHoverIndex(1);
          }}
          onMouseLeave={() => setHoverIndex(null)}
          className="shrink-0 relative cursor-pointer w-[170px] h-[230px] md:w-[220px] md:h-[300px] lg:w-[320px] lg:h-[410px] xl:w-[360px] xl:h-[460px] rounded-[24px] lg:rounded-[36px] overflow-hidden shadow-none origin-bottom-left transition-shadow"
        >
          <video
            src={heroVideo1}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
        </motion.div>

        {/* Card 2: Green */}
        <motion.div
          {...getCardProps(2, 4, 45, 20, 0.8)}
          onMouseEnter={() => {
            handleCardInteraction();
            setHoverIndex(2);
          }}
          onMouseLeave={() => setHoverIndex(null)}
          className="hidden md:flex snap-center shrink-0 cursor-pointer group relative w-[220px] h-[300px] lg:w-[320px] lg:h-[410px] xl:w-[360px] xl:h-[460px] bg-[#2dce89] rounded-[24px] lg:rounded-[36px] p-5 lg:p-8 flex-col justify-between shadow-none origin-bottom-right transition-shadow"
        >
          <h2 className="text-black font-black text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] tracking-tighter leading-[0.9] mt-2 lg:mt-3 pointer-events-none">
            30+
          </h2>
          <div className="flex flex-col w-fit pointer-events-none">
            <h3 className="text-black font-bold text-[15px] md:text-[18px] lg:text-[28px] tracking-[-0.02em] leading-tight mb-2">
              Merken geholpen
            </h3>
            <div className="w-full h-[2px] bg-[#111] mb-2 lg:mb-3"></div>
            <p className="text-black text-[10px] md:text-[11px] lg:text-[14px] font-medium opacity-90 leading-tight pr-[5%]">
              Van start-up tot multinational
            </p>
          </div>
        </motion.div>

        {/* Card 3: Image with text */}
        <motion.div
          {...getCardProps(3, -6, -5, 10, 0.9)}
          onMouseEnter={() => {
            handleCardInteraction();
            setHoverIndex(3);
          }}
          onMouseLeave={() => setHoverIndex(null)}
          className="hidden lg:flex snap-center cursor-pointer shrink-0 relative w-[320px] h-[410px] xl:w-[360px] xl:h-[460px] rounded-[24px] lg:rounded-[36px] overflow-hidden shadow-none origin-bottom-left transition-shadow"
        >
          <video
            src={heroVideo2}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none"></div>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default Hero;
