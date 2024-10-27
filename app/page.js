import AboutSection from "@/components/home/AboutSection";
import DeportationDefense from "@/components/home/DeportationDefense";
import EmploymentBasedImmigration from "@/components/home/EmploymentBasedImmigration";
import FamilyBasedImmigration from "@/components/home/FamilyBasedImmigration";
import HeroSection from "@/components/home/HeroSection";
import HumanitarianImmigration from "@/components/home/HumanitarianImmigration";
import NewsSection from "@/components/home/NewsSection";
import ScheduleSection from "@/components/home/ScheduleSection";
import ServiceSection from "@/components/home/ServiceSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import YoutubeVideoSection from "@/components/home/YoutubeVideoSection";
import TripLawObligation from "@/components/shared/TripLawObligation";

export const metadata = {
  title:
    " Best immigration lawyer lakeland,Florida | Green Card, Visa & Citizenship Attorneys",
  description:
    "Trip Law is a trusted immigration law firm dedicated to helping clients secure Green Cards, family sponsorships, employment visas (H-1B, L-1, EB-1, EB-2), and asylum.Our experienced Florida attorneys provide personalized legal support to guide you through every step of your U.S. immigration journey.",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-USA",
    },
  },
  openGraph: {
    images: "/opengraph-image.jpg",
  },
};

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <AboutSection />
      <YoutubeVideoSection />
      <FamilyBasedImmigration />
      <EmploymentBasedImmigration />
      <TripLawObligation />
      <HumanitarianImmigration />
      <DeportationDefense />
      <ScheduleSection />
      <NewsSection />
      <ServiceSection />
      {/* <TestimonialSection /> */}
    </main>
  );
}
