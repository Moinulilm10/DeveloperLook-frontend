import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const defaultImage1 = "https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=800&auto=format&fit=crop"; // Car/lifestyle replacement
const defaultImage2 = "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800&auto=format&fit=crop"; // Garage replacement

import heroVideo1 from '../assets/hero-video-1.mp4';
import heroVideo2 from '../assets/hero-video-2.mp4';

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
        delayChildren: 0.2
      }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 20 } }
  };

  const cardVars = {
    hidden: { opacity: 0, scale: 0.8, y: 100 },
    show: (custom) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      rotate: custom.rotate,
      transition: {
        type: 'spring',
        stiffness: 60,
        damping: 15,
        delay: custom.delay
      }
    })
  };

  return (
    <main className="max-w-[1700px] mx-auto px-6 lg:px-12 mt-12 lg:mt-32 relative" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <motion.div
        variants={containerVars}
        initial="hidden"
        animate="show"
        className="max-w-[1700px]"
      >
        {/* Main Title - Fixed 2-Line Layout */}
        <div className="flex flex-col">
          <div className="overflow-hidden">
            <motion.h1
              variants={itemVars}
              className="text-[2.6rem] sm:text-[5.5rem] lg:text-[7rem] font-bold leading-[1] lg:leading-[0.85] tracking-[-0.04em] text-black"
            >
              Get Hyped.
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              variants={itemVars}
              className="text-[2.3rem] sm:text-[5.5rem] lg:text-[7rem] font-bold leading-[1.1] lg:leading-[0.85] tracking-[-0.04em] mb-4 lg:mb-8 text-black"
            >
              Get Noticed. <span className="block sm:inline">Get Results.</span>
            </motion.h1>
          </div>
        </div>

        <motion.p
          variants={itemVars}
          className="text-base lg:text-[32px] font-bold leading-tight max-w-[280px] lg:max-w-3xl mt-4 lg:mt-10 text-black"
        >
          Klaar met gokken op content<br />die niets oplevert?
        </motion.p>
      </motion.div>

      {/* Cards Section - Reduced Overlap & Fine-tuned Layering */}
      <motion.div
        style={{ x: containerX }}
        className="mt-12 lg:mt-24 flex flex-row justify-center items-end -space-x-16 md:-space-x-14 lg:-space-x-12 relative transition-all duration-300"
      >

        {/* Card 1: Blue */}
        <motion.div
          custom={{ delay: 0.6, rotate: -4 }}
          variants={cardVars}
          initial="hidden"
          animate="show"
          whileHover={{ rotate: 0, y: -30, x: -80, scale: 1.05, zIndex: 50 }}
          className="shrink-0 group relative z-0 w-[190px] h-[260px] md:w-[260px] md:h-[350px] lg:w-[420px] lg:h-[540px] bg-[#0c82fb] rounded-[40px] md:rounded-[48px] p-6 lg:p-12 flex flex-col justify-between shadow-none origin-bottom-right transition-shadow"
        >
          <h2 className="text-black font-black text-4xl lg:text-9xl tracking-tighter">10M+</h2>
          <div>
            <p className="text-black font-bold text-base lg:text-3xl transform group-hover:translate-x-2 transition-transform">Organische views</p>
            <hr className="border-black/30 my-4" />
            <p className="text-black text-[11px] lg:text-xl font-semibold opacity-80 leading-tight">Groei door slimme content</p>
          </div>
        </motion.div>

        {/* Card 2: Image */}
        <motion.div
          custom={{ delay: 0.7, rotate: 4 }}
          variants={cardVars}
          initial="hidden"
          animate="show"
          whileHover={{ rotate: 0, y: -30, x: -40, scale: 1.05, zIndex: 50 }}
          className="shrink-0 relative z-10 w-[190px] h-[260px] md:w-[260px] md:h-[350px] lg:w-[420px] lg:h-[540px] rounded-[40px] md:rounded-[48px] overflow-hidden shadow-none origin-bottom-left transition-shadow"
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

        {/* Card 3: Green - Shifted right slightly and layered on top */}
        <motion.div
          custom={{ delay: 0.8, rotate: 6 }}
          variants={cardVars}
          initial="hidden"
          animate="show"
          whileHover={{ rotate: 0, y: -30, x: 40, scale: 1.05, zIndex: 50 }}
          className="hidden md:flex snap-center shrink-0 group relative z-20 w-[260px] h-[350px] lg:w-[420px] lg:h-[540px] bg-[#27ce85] rounded-[48px] p-6 lg:p-12 md:ml-4 lg:ml-2 flex flex-col justify-between shadow-none origin-bottom-right transition-shadow"
        >
          <h2 className="text-black font-black text-5xl lg:text-9xl tracking-tighter">30+</h2>
          <div>
            <p className="text-black font-bold text-lg lg:text-3xl transform group-hover:translate-x-2 transition-transform">Merken geholpen</p>
            <hr className="border-black/30 my-5" />
            <p className="text-black text-xs lg:text-xl font-semibold opacity-80">Van start-up tot multinational</p>
          </div>
        </motion.div>

        {/* Card 4: Image with text - Pushed further to the right */}
        <motion.div
          custom={{ delay: 0.9, rotate: -3 }}
          variants={cardVars}
          initial="hidden"
          animate="show"
          whileHover={{ rotate: 0, y: -30, x: 80, scale: 1.05, zIndex: 50 }}
          className="hidden lg:flex snap-center shrink-0 relative z-10 w-[420px] h-[540px] rounded-[48px] overflow-hidden shadow-none origin-bottom-left transition-shadow lg:ml-2"
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
