import React from 'react';
import PageHeroSection from '../shared/PageHeroSection';

const HeroSection = () => {
  return (
    <PageHeroSection
      image={"bg-[url('/assets/hero-img/contact.jpg')] bg-cover bg-center"}
      title={'Contact Us'}
    />
  );
};

export default HeroSection;
