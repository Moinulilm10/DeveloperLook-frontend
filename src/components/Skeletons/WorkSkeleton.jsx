import React from 'react';

const WorkSkeleton = () => {
  return (
    <div className="max-w-[1700px] mx-auto px-6 lg:px-10 py-40">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-14 h-full">
        {/* Text Area */}
        <div className="lg:col-span-4 flex flex-col gap-10">
          <div className="skeleton w-full h-[150px]" />
          <div className="skeleton w-[80%] h-[80px]" />
          <div className="skeleton w-[200px] h-[55px] rounded-[14px]" />
          <div className="skeleton w-full aspect-[3/4.2] rounded-[48px] mt-10" />
        </div>
        
        {/* Column 2 */}
        <div className="lg:col-span-4 mt-[32rem]">
          <div className="skeleton w-full aspect-[3/4.2] rounded-[48px]" />
        </div>
        
        {/* Column 3 */}
        <div className="lg:col-span-4 mt-[25rem]">
          <div className="skeleton w-full aspect-[3/4.2] rounded-[48px]" />
        </div>
      </div>
    </div>
  );
};

export default WorkSkeleton;
