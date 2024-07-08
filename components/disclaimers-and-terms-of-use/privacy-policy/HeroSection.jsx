import PageHeroSection from '@/components/shared/PageHeroSection';
import React from 'react';

const HeroSection = () => {
  return (
    <PageHeroSection
      image={
        "bg-[url('/assets/about/about-us-hero-banner.png')] bg-cover bg-center"
      }
      title={'Disclaimers and Terms of Use'}
    />
  );
};

export default HeroSection;
