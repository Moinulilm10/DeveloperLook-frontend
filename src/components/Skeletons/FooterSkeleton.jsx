import React from 'react';

const FooterSkeleton = () => {
  return (
    <div className="w-full h-[800px] flex flex-col pt-32 px-10 gap-20">
      <div className="flex flex-col items-center gap-10">
        <div className="skeleton w-[600px] h-[100px]" />
        <div className="flex gap-10">
          <div className="skeleton w-[200px] h-[50px] rounded-2xl" />
          <div className="skeleton w-[200px] h-[50px] rounded-2xl" />
        </div>
      </div>
      <div className="mt-auto mb-10 h-[400px] skeleton-dark w-full rounded-t-[32px] mx-auto max-w-[1700px]" />
    </div>
  );
};

export default FooterSkeleton;
