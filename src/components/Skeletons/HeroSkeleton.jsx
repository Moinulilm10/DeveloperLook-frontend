import React from 'react';

const HeroSkeleton = () => {
  return (
    <div className="max-w-[1700px] mx-auto px-6 lg:px-12 mt-12 lg:mt-32 relative">
      <div className="flex flex-col gap-4">
        <div className="skeleton w-[300px] h-[60px] md:w-[600px] md:h-[100px]" />
        <div className="skeleton w-[250px] h-[60px] md:w-[500px] md:h-[100px]" />
      </div>
      <div className="skeleton w-[200px] h-[32px] md:w-[400px] md:h-[48px] mt-10" />
      
      {/* Cards Skeleton */}
      <div className="mt-12 lg:mt-24 flex flex-row justify-center items-end -space-x-12 md:-space-x-14">
        {[...Array(4)].map((_, i) => (
          <div 
            key={i} 
            className="skeleton-dark w-[190px] h-[260px] md:w-[260px] md:h-[350px] lg:w-[420px] lg:h-[540px] rounded-[40px] md:rounded-[48px]" 
            style={{ transform: `rotate(${i % 2 === 0 ? -4 : 4}deg)` }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSkeleton;
