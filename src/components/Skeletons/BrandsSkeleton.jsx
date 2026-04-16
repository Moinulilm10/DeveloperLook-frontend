import React from 'react';

const BrandsSkeleton = () => {
  return (
    <div className="w-full py-24">
      <div className="max-w-[1700px] mx-auto px-6 mb-14">
        <div className="skeleton w-[400px] h-[100px]" />
      </div>
      <div className="flex gap-5 px-10">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="skeleton w-[260px] h-[260px] rounded-[24px]" />
        ))}
      </div>
    </div>
  );
};

export default BrandsSkeleton;
