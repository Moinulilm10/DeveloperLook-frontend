import { motion } from "framer-motion";
import { useState } from "react";
import { HiArrowDown, HiArrowRight } from "react-icons/hi2";
import orangeGirl from "../assets/orange-girl.webp";

const AboutSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="w-full py-24 lg:py-32 bg-[#F9F4EE] flex justify-start">
      <div className="w-full max-w-[1280px]">
        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-48 items-center justify-start relative px-10">
          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-auto flex-shrink-0"
          >
            <div className="relative overflow-hidden rounded-[20px] w-full max-w-[280px] mx-auto lg:mx-0 shadow-sm">
              <img
                src={orangeGirl}
                alt="Orange Girl"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Right Column: Text and Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:flex-1 flex flex-col justify-center max-w-[700px]"
          >
            <p className="text-xl md:text-[22px] lg:text-[23px] font-semibold leading-[1.45] text-[#222] mb-10 w-full tracking-[-0.01em]">
              We stoppen niet bij mooie plaatjes en
              <br className="hidden md:block" />
              vette beelden. We maken het meetbaar.
              <br className="hidden md:block" />
              Zo weet je precies wat werkt en wat niet.
              <br className="hidden md:block" />
              Nooit meer content zonder strategie.
              <br className="hidden md:block" />
              Nooit meer content zonder resultaat.
            </p>

            <div className="flex items-center justify-between w-full">
              {/* Button: Leer ons kennen */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 bg-transparent border border-black/20 rounded-full py-1 pl-4 pr-1 cursor-pointer hover:border-black/40 transition-colors"
                style={{ backgroundColor: "#F9F4EE" }}
              >
                <span className="text-[#222] font-semibold text-[13px] md:text-[14px]">
                  Leer ons kennen
                </span>
                <div className="bg-[#222] rounded-full w-8 h-8 flex items-center justify-center text-white">
                  <HiArrowRight size={15} />
                </div>
              </motion.div>

              {/* Scroll Down Indicator */}
              <motion.div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                animate={{ y: isHovered ? 4 : 0 }}
                onClick={() => {
                  const target = document.getElementById("expertise");
                  if (!target) return;
                  const start = window.scrollY;
                  const end =
                    target.getBoundingClientRect().top + window.scrollY;
                  const duration = 1400;
                  const startTime = performance.now();
                  const easeInOutCubic = (t) =>
                    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
                  const step = (now) => {
                    const elapsed = now - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    window.scrollTo(
                      0,
                      start + (end - start) * easeInOutCubic(progress),
                    );
                    if (progress < 1) requestAnimationFrame(step);
                  };
                  requestAnimationFrame(step);
                }}
                className="flex items-center justify-center w-10 h-10 rounded-[12px] border border-black/20 bg-transparent cursor-pointer hover:border-black/40 transition-all overflow-hidden"
              >
                {/* Inner Arrow */}
                <motion.div className="text-[#ff5e26]">
                  <HiArrowDown size={18} strokeWidth={1} />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
