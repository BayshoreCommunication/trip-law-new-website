import AboutSection from "@/components/about-us/AboutSection";
import HeroSection from "@/components/about-us/HeroSection";
import TestimonialSection from "@/components/about-us/TestimonialSection";
import TripLawObligation from "@/components/shared/TripLawObligation";
import Head from "next/head";

export const metadata = {
  title: " Best immigration lawyer lakeland,Florida | Green Card, Visa & Citizenship Attorneys",
  description:
    "Trip Law is a trusted immigration law firm dedicated to helping clients secure Green Cards, family sponsorships, employment visas (H-1B, L-1, EB-1, EB-2), and asylum.Our experienced Florida attorneys provide personalized legal support to guide you through every step of your U.S. immigration journey.",
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
