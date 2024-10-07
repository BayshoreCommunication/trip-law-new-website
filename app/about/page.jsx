import AboutSection from "@/components/about-us/AboutSection";
import HeroSection from "@/components/about-us/HeroSection";
import TestimonialSection from "@/components/about-us/TestimonialSection";
import TripLawObligation from "@/components/shared/TripLawObligation";
import Head from "next/head";

export const metadata = {
  title: "About Trip Law Immigration Law Firm - Who We Are",
  description:
    "Learn about TripLaw's experienced immigration attorneys, dedication to client success, and commitment to excellence.",
};

const page = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TripLawObligation />
      {/* <TestimonialSection /> */}
    </>
  );
};

export default page;
