import React from 'react';

const AboutSkeleton = () => {
  return (
    <div className="max-w-[1700px] mx-auto px-6 lg:px-10 pt-32 pb-16 md:pt-48 md:pb-24">
      <div className="skeleton w-[90%] md:w-[70%] h-[120px] md:h-[200px] mb-28" />
      <div className="flex flex-col lg:flex-row gap-20 lg:gap-40 items-start">
        <div className="skeleton w-full lg:w-[35%] aspect-[1/1.2] rounded-[36px]" />
        <div className="w-full lg:w-[65%] flex flex-col gap-6">
          <div className="skeleton w-full h-[150px]" />
          <div className="skeleton w-[250px] h-[60px] rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default AboutSkeleton;
