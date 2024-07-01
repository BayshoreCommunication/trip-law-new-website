import AboutSection from '@/components/about-us/AboutSection';
import HeroSection from '@/components/about-us/HeroSection';
import TestimonialSection from '@/components/about-us/TestimonialSection';
import TripLawObligation from '@/components/shared/TripLawObligation';
import Head from 'next/head';

const page = () => {
  return (
    <>
      <Head>
        <title>About - Attorney Hardam Tripathi, Esq.</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='' />
      </Head>
      <HeroSection />
      <AboutSection />
      <TripLawObligation />
      <TestimonialSection />
    </>
  );
};

export default page;
