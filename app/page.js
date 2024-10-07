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
    "Florida Immigration Lawyer Firm || USA Immigration Attorney Hardam Tripathi, Esq.",
  description:
    "Florida Immigration Law Services. Call our local Immigration office for your Green Card, Naturalization, or Investor Visa.",
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
