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
import Head from "next/head";
import TripLawObligation from "@/components/shared/TripLawObligation";

export default function Home() {
  return (
    <main className="w-full">
      <Head>
        <title>Cool Title</title>
        <meta name="description" content="Checkout our cool page" key="desc" />
        <meta property="og:title" content="Social Title for Cool Page" />
        <meta
          property="og:description"
          content="And a social description for our cool page"
        />
        <meta
          property="og:image"
          content="https://cdn.pixabay.com/photo/2016/10/10/14/46/icon-1728549_640.jpg"
        />
      </Head>
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
