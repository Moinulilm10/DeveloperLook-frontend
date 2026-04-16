import React from 'react';

const ExpertiseSkeleton = () => {
  return (
    <div className="relative w-full h-screen bg-[#F8F5F0] flex items-center justify-center p-10">
      <div className="skeleton-dark max-w-[1600px] w-full h-[88vh] rounded-[32px] flex flex-col md:flex-row p-16 gap-16">
        <div className="flex-1 flex flex-col justify-between">
          <div className="skeleton w-[150px] h-[40px] rounded-md" />
          <div className="flex flex-col gap-6">
            <div className="skeleton w-[80%] h-[100px]" />
            <div className="skeleton w-[250px] h-[50px] rounded-2xl" />
          </div>
        </div>
        <div className="w-[330px] flex flex-col items-end gap-10">
          <div className="skeleton w-[100px] h-[100px]" />
          <div className="skeleton w-full h-[400px] rounded-[24px]" />
        </div>
      </div>
    </div>
  );
};

export default ExpertiseSkeleton;
