import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HiArrowRight, HiArrowUpRight } from "react-icons/hi2";

import workVid1 from "../assets/work-1.mp4";
import workVid2 from "../assets/work-2.mp4";
import workVid3 from "../assets/work-3.mp4";

const WORK_DATA = [
  {
    id: 1,
    title: "Van nul naar vol,\nbinnen 3 weken",
    tag: "Bullit",
    color: "#FF5E26",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    video: workVid1,
    mobileRotate: -3,
  },
  {
    id: 2,
    title: "Zacht in smaak,\nsterk in beeld",
    tag: "Roasta",
    color: "#0c82fb",
    image:
      "https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=800&auto=format&fit=crop",
    video: workVid2,
    mobileRotate: 3,
  },
  {
    id: 3,
    title: "Content die écht\nsmaakt (en raakt)",
    tag: "Loco",
    color: "#27ce85",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop",
    video: workVid3,
    mobileRotate: -2,
  },
];

const WorkCard = ({ data }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <motion.div
      animate={{ rotate: isMobile ? data.mobileRotate : 0 }}
      whileHover={{
        y: -12,
        rotate: isMobile ? -data.mobileRotate : -1.5,
        scale: 1.02,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="w-full aspect-[4/5] lg:aspect-[3/4.2] relative rounded-[40px] lg:rounded-[56px] border-[6px] lg:border-[8px] flex flex-col justify-end overflow-hidden group cursor-pointer shadow-xl"
      style={{
        borderColor: data.color,
        WebkitMaskImage: "-webkit-radial-gradient(white, black)",
      }}
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          src={data.video}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
      </div>

      <div className="absolute bottom-4 left-4 right-4 lg:bottom-6 lg:left-6 lg:right-6 z-10">
        {/* Floating Arrow Button */}
        <div className="absolute right-2 lg:right-2 top-0 -translate-y-[-16%] z-20 w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-110 overflow-hidden">
          <div className="relative w-6 h-6 flex items-center justify-center pointer-events-none">
            <span className="absolute transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) group-hover:translate-x-8 group-hover:-translate-y-8 group-hover:opacity-0 text-black">
              <HiArrowUpRight size={26} strokeWidth={1} />
            </span>
            <span className="absolute opacity-0 -translate-x-8 translate-y-8 transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 text-black text-bold">
              <HiArrowUpRight size={26} strokeWidth={2.5} />
            </span>
          </div>
        </div>

        {/* Slanted Content Hybrid Wrapper */}
        <div className="relative w-full px-7 py-8 pb-8 lg:px-10 lg:py-10 lg:pb-10 pt-14 lg:pt-16">
          <div className="absolute inset-0 -z-10 h-full w-full">
            <div
              className="absolute top-0 w-full h-[65%] rounded-[24px] lg:rounded-[32px]"
              style={{
                transform: "skewY(-5deg)",
                transformOrigin: "top right",
                backgroundColor: data.color,
              }}
            />
            <div
              className="absolute bottom-0 w-full h-[60%] rounded-[24px] lg:rounded-[32px]"
              style={{ backgroundColor: data.color }}
            />
          </div>

          <h3 className="text-white text-[24px] sm:text-2xl lg:text-[28px] xl:text-[34px] font-black leading-[1] tracking-tight mb-6 whitespace-pre-line relative z-10 drop-shadow-sm">
            {data.title}
          </h3>
          <span className="inline-block px-5 py-2.5 bg-white/30 text-white rounded-xl text-xs lg:text-[13px] font-extrabold uppercase tracking-widest backdrop-blur-md relative z-10 shadow-sm border border-white/20">
            {data.tag}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const WorkSection = () => {
  return (
    <section
      id="work"
      className="max-w-[1700px] mx-auto px-6 lg:px-12 py-24 lg:py-40 bg-[#F8F5F0]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-14 items-start">
        {/* Column 1: Text & Card 1 */}
        <div className="lg:col-span-4 flex flex-col">
          <div className="mb-20 lg:mb-32">
            <h2 className="text-[4rem] sm:text-[5rem] lg:text-[6rem] xl:text-[7.5rem] font-black tracking-[-0.04em] leading-[0.85] text-[#111] mb-10 whitespace-nowrap">
              Content
              <br />
              dat scoort.
            </h2>
            <p className="text-xl md:text-[22px] lg:text-[26px] font-bold leading-snug text-black max-w-[30rem] mb-12">
              Wij vertellen jouw verhaal. Op een manier die écht past bij jouw
              doelgroep. Met creatieve content die werkt en het verschil maakt.
            </p>

            <motion.button
              whileHover={{ scale: 1.05, rotate: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="group inline-flex items-center gap-4 border-[2px] border-black bg-white rounded-full py-1.5 pl-5 pr-1.5 hover:shadow-xl transition-all active:scale-95 origin-bottom-left"
            >
              <span className="font-extrabold text-[13px] lg:text-[15px] text-[#111] tracking-tight">
                Bekijk al ons werk
              </span>
              <div className="w-10 h-10 bg-[#111] text-white rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-105">
                <HiArrowRight
                  size={20}
                  className="transition-transform group-hover:translate-x-1"
                />
              </div>
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
          >
            <WorkCard data={WORK_DATA[0]} />
          </motion.div>
        </div>

        {/* Column 2: Card 2 - Offset downwards manually on large screens to reduce huge steps */}
        <div className="lg:col-span-4 mt-8 lg:mt-[28rem] xl:mt-[32rem]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <WorkCard data={WORK_DATA[1]} />
          </motion.div>
        </div>

        {/* Column 3: Card 3 - Offset slightly downwards on large screens */}
        <div className="lg:col-span-4 mt-8 lg:mt-[22rem] xl:mt-[25rem]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <WorkCard data={WORK_DATA[2]} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
