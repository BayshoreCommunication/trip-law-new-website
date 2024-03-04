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
import TripLawObligation from "@/components/shared/TripLawObligation";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <AboutSection />
      <FamilyBasedImmigration />
      <EmploymentBasedImmigration />
      <TripLawObligation />
      <HumanitarianImmigration />
      <DeportationDefense />
      <ScheduleSection />
      <NewsSection />
      <ServiceSection />
      <TestimonialSection />
    </main>
  );
}
