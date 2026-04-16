import React from 'react';

import b1 from '../assets/b-1.svg';
import b2 from '../assets/b-2.svg';
import b3 from '../assets/b-3.svg';
import b4 from '../assets/b-4.svg';
import b5 from '../assets/b-5.svg';
import b6 from '../assets/b-6.svg';
import b7 from '../assets/b-7.svg';
import b8 from '../assets/b-8.svg';
import b9 from '../assets/b-9.svg';
import b10 from '../assets/b-10.svg';

const BRANDS = [
  { id: 1, src: b1, alt: 'Brand 1' },
  { id: 2, src: b2, alt: 'Brand 2' },
  { id: 3, src: b3, alt: 'Brand 3' },
  { id: 4, src: b4, alt: 'Brand 4' },
  { id: 5, src: b5, alt: 'Brand 5' },
  { id: 6, src: b6, alt: 'Brand 6' },
  { id: 7, src: b7, alt: 'Brand 7' },
  { id: 8, src: b8, alt: 'Brand 8' },
  { id: 9, src: b9, alt: 'Brand 9' },
  { id: 10, src: b10, alt: 'Brand 10' },
];

// Duplicate for seamless infinite loop
const DOUBLED = [...BRANDS, ...BRANDS];

const BrandsSection = () => {
  return (
    <section className="w-full bg-[#F8F5F0] py-24 lg:py-32 overflow-hidden">
      {/* Heading */}
      <div className="max-w-[1700px] mx-auto px-6 lg:px-12 mb-10 md:mb-14">
        <h2 className="text-[2.2rem] sm:text-[3rem] md:text-[3.8rem] lg:text-[4.5rem] font-black tracking-[-0.03em] leading-[1.05] text-[#111]">
          These brands<br />got hyped.
        </h2>
      </div>

      {/* Marquee Track */}
      <div className="relative w-full overflow-hidden">
        {/* Left fade ... */}
        <div
          className="absolute left-0 top-0 bottom-0 w-16 md:w-28 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #F8F5F0, transparent)' }}
        />
        {/* Right fade ... */}
        <div
          className="absolute right-0 top-0 bottom-0 w-16 md:w-28 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #F8F5F0, transparent)' }}
        />

        {/* Scrolling track */}
        <div className="brands-track flex gap-5 w-max mt-5 py-4">
          {DOUBLED.map((brand, i) => (
            <div
              key={i}
              className="shrink-0 w-[180px] h-[180px] md:w-[210px] md:h-[210px] lg:w-[260px] lg:h-[260px] rounded-[20px] md:rounded-[24px] border border-black/20 bg-[#F8F5F0] shadow-[0_2px_12px_rgba(0,0,0,0.07)] flex items-center justify-center p-7 lg:p-10"
            >
              <img
                src={brand.src}
                alt={brand.alt}
                className="w-full h-full object-contain select-none"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Horizontal Line */}
      <div className="max-w-[1700px] mx-auto px-6 lg:px-10 mt-12 md:mt-20">
        <div className="w-full h-[1px] bg-black/10"></div>
      </div>
    </section>
  );
};

export default BrandsSection;
