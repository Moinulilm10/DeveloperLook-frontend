import React from 'react';
import HeroSkeleton from './HeroSkeleton';
import AboutSkeleton from './AboutSkeleton';
import ExpertiseSkeleton from './ExpertiseSkeleton';
import WorkSkeleton from './WorkSkeleton';
import BrandsSkeleton from './BrandsSkeleton';
import FooterSkeleton from './FooterSkeleton';

const PageSkeleton = () => {
  return (
    <div className="bg-[#F8F5F0] overflow-hidden">
      <HeroSkeleton />
      <AboutSkeleton />
      <ExpertiseSkeleton />
      <WorkSkeleton />
      <BrandsSkeleton />
      <FooterSkeleton />
    </div>
  );
};

export default PageSkeleton;
