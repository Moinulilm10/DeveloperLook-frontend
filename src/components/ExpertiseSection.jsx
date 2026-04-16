import React, { useRef, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { HiArrowUpRight } from 'react-icons/hi2';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import expVid1 from '../assets/expertise-video-1.mp4';
import expVid2 from '../assets/expertise-video-2.mp4';
import expVid3 from '../assets/expertise-video-3.mp4';
import expVid4 from '../assets/expertise-video-4.mp4';

gsap.registerPlugin(ScrollTrigger);

const EXPERTISE_DATA = [
  {
    id: '01',
    title: 'Social strategy',
    subtitle: 'Slimme strategie. Sterke start.',
    desc: 'We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt.',
    cta: 'Meer over social strategie',
    bgColor: '#FDFBF7',
    textColor: '#111',
    numColor: 'rgba(0,0,0,0.05)',
    btnColor: '#FF5E26',
    borderColor: '#FF5E26',
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=800&auto=format&fit=crop',
    video: expVid1,
  },
  {
    id: '02',
    title: 'Content creation',
    subtitle: 'Content die opvalt en raakt.',
    desc: 'We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Creatief, snel en energiek. Altijd met het doel voor ogen.',
    cta: 'Meer over content creatie',
    bgColor: '#F7C1FF',
    textColor: '#111',
    numColor: 'rgba(255,255,255,0.4)',
    btnColor: '#111',
    borderColor: '#FFF',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop',
    video: expVid2,
  },
  {
    id: '03',
    title: 'Activation',
    subtitle: 'Zichtbaar waar en wanneer het telt.',
    desc: 'De juiste content verdient het om gezien te worden. We verspreiden de content waar jouw doelgroup is. Zo raakt jouw merk de juiste mensen, precies waar en wanneer het telt.',
    cta: 'Meer over activatie',
    bgColor: '#27CE85',
    textColor: '#111',
    numColor: 'rgba(255,255,255,0.4)',
    btnColor: '#111',
    borderColor: '#FFF',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=800&auto=format&fit=crop',
    video: expVid3,
  },
  {
    id: '04',
    title: 'Data',
    subtitle: 'Inzichten die impact maken.',
    desc: 'We duiken in de cijfers om te snappen wat écht werkt. En sturen jouw content scherp bij.',
    cta: 'Meer over data',
    bgColor: '#0C82FB',
    textColor: '#111',
    numColor: 'rgba(255,255,255,0.4)',
    btnColor: '#111',
    borderColor: '#FFF',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
    video: expVid4,
  }
];

const ExpertiseSection = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const cards = cardsRef.current;
      const totalCards = cards.length;
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: `+=${(totalCards - 1) * 100}%`,
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
          snap: {
            snapTo: 1 / (totalCards - 1),
            duration: { min: 0.4, max: 0.8 },
            delay: 0.1,
            ease: "power2.inOut"
          }
        }
      });

      cards.forEach((card, index) => {
        if (index > 0) {
          gsap.set(card, { yPercent: 100 });
        }
      });

      cards.forEach((card, index) => {
        if (index === 0) return;
        
        const currentCard = card;
        const previousCardInner = cards[index - 1].querySelector('.inner-card');
        
        tl.to(currentCard, {
          yPercent: 0,
          ease: "none",
          duration: 1
        }, index === 1 ? ">" : ">-0.1")
        
        .to(previousCardInner, {
          scale: 0.94,
          ease: "none",
          duration: 1
        }, "<");
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="expertise" ref={sectionRef} className="relative w-full mt-6 md:mt-16 overflow-hidden">
      <div ref={triggerRef} className="relative h-screen w-full bg-[#F8F5F0]">
        {EXPERTISE_DATA.map((card, i) => (
          <div
            key={card.id}
            ref={(el) => (cardsRef.current[i] = el)}
            className="absolute top-0 left-0 w-full h-screen flex items-center justify-center px-4 py-5 md:px-6 md:py-8 lg:px-10 origin-top will-change-transform"
            style={{ zIndex: i + 1 }}
          >
            <div
              className="inner-card max-w-[1700px] w-full h-[90vh] md:h-[88vh] rounded-[22px] md:rounded-[32px] relative overflow-hidden flex flex-col md:flex-row px-5 pt-5 pb-6 sm:px-7 md:px-14 md:pt-14 md:pb-8 lg:px-24 lg:pt-16 lg:pb-10 gap-0 md:gap-6 lg:gap-16"
              style={{ backgroundColor: card.bgColor }}
            >

              {/* ── MOBILE LAYOUT (hidden on md+) ── */}
              <div className="flex md:hidden flex-col h-full">

                {/* Row 1: Badge + Number */}
                <div className="flex items-center justify-between mb-3 shrink-0">
                  <span className="px-2.5 py-1 bg-[#F3F1ED] border border-black/5 rounded-md text-[10px] font-bold uppercase tracking-widest text-[#555]">
                    Expertise
                  </span>
                  <span className="text-[2.8rem] font-semibold leading-none opacity-20 text-[#111]">
                    {card.id}
                  </span>
                </div>

                {/* Row 2: Title */}
                <h2
                  className="text-[2rem] sm:text-[2.5rem] font-black tracking-[-0.04em] leading-[1.05] mb-4 shrink-0"
                  style={{ wordSpacing: '-0.1rem' }}
                >
                  {card.title}
                </h2>

                {/* Row 3: Image - full width */}
                <div
                  className="w-full flex-1 min-h-0 rounded-[14px] overflow-hidden border-[6px] mb-4 shrink-1"
                  style={{ borderColor: card.borderColor }}
                >
                  <video
                    src={card.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Row 4: Subtitle + Desc */}
                <div className="shrink-0">
                  <h3 className="text-[15px] sm:text-base font-bold mb-1">
                    {card.subtitle}
                  </h3>
                  <p className="text-[12px] sm:text-[13px] font-medium opacity-75 leading-snug mb-3">
                    {card.desc}
                  </p>

                  {/* Row 5: Wide CTA Button */}
                  <button
                    className="w-fit flex items-center justify-between gap-4 px-5 py-3 rounded-[14px] transition-all active:scale-[0.97] border-[1.5px] border-black text-black"
                  >
                    <span className="font-bold text-[13px] sm:text-[14px]">{card.cta}</span>
                    <div className="w-7 h-7 rounded-full flex items-center justify-center bg-black text-white shrink-0">
                      <HiArrowUpRight size={14} />
                    </div>
                  </button>
                </div>
              </div>

              {/* ── DESKTOP LAYOUT (hidden on mobile) ── */}

              {/* Expertise Badge - top left */}
              <div className="hidden md:block absolute top-10 left-14 lg:top-12 lg:left-20 z-20">
                <span className="px-4 py-2 lg:px-6 lg:py-3 bg-[#F3F1ED] border border-black/5 rounded-md text-xs lg:text-sm font-bold uppercase tracking-widest text-[#555]">
                  Expertise
                </span>
              </div>

              {/* LEFT: Title + Details */}
              <div className="hidden md:flex flex-1 flex-col justify-between min-w-0 pt-8">
                <h2
                  className="md:text-[3.2rem] lg:text-[4.2rem] xl:text-[7rem] font-black tracking-[-0.04em] leading-[1] md:leading-[0.9] whitespace-nowrap"
                  style={{ wordSpacing: '-0.15rem' }}
                >
                  {card.title}
                </h2>

                <div className="mt-auto pt-0">
                  <h3 className="md:text-lg lg:text-2xl xl:text-3xl font-bold mb-2 lg:mb-4">
                    {card.subtitle}
                  </h3>
                  <p className="md:text-sm lg:text-lg xl:text-xl font-medium opacity-80 leading-snug mb-4 lg:mb-8 max-w-lg">
                    {card.desc}
                  </p>
                  <motion.button
                    whileHover={{ y: -8, scale: 1.05, rotate: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-3 rounded-xl md:rounded-2xl px-4 py-2.5 transition-all w-fit group border-[1.5px] border-black text-black"
                  >
                    <span className="font-bold md:text-[13px] lg:text-[15px] ml-0.5">{card.cta}</span>
                    <div className="md:w-6 md:h-6 lg:w-8 lg:h-8 rounded-full flex items-center justify-center bg-black text-white shrink-0 transition-transform group-hover:rotate-12">
                      <HiArrowUpRight size={14} />
                    </div>
                  </motion.button>
                </div>
              </div>

              {/* RIGHT: Number + Image */}
              <div className="hidden md:flex flex-col items-end justify-between shrink-0 min-h-0 md:pt-0">
                <span
                  className="text-[4rem] lg:text-[6rem] xl:text-[7rem] font-semibold leading-none opacity-20 self-end shrink-0"
                  style={{ color: card.textColor || '#111' }}
                >
                  {card.id}
                </span>
                <div
                   className="flex-1 min-h-0 md:w-[190px] lg:w-[280px] xl:w-[330px] mt-2 lg:mt-3 rounded-[20px] lg:rounded-[24px] overflow-hidden border-[8px] md:border-[10px] transition-transform duration-700 hover:scale-105"
                  style={{ borderColor: card.borderColor }}
                >
                  <video
                    src={card.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertiseSection;