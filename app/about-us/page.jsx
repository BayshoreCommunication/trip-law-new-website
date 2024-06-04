import AboutSection from '@/components/about-us/AboutSection';
import HeroSection from '@/components/about-us/HeroSection';
import TestimonialSection from '@/components/about-us/TestimonialSection';
import TripLawObligation from '@/components/shared/TripLawObligation';

const page = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <TripLawObligation />
      <TestimonialSection />
    </div>
  );
};

export default page;
