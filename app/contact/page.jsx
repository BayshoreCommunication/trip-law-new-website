import ContactSection from "@/components/contact-us/ContactSection";
import GoogleMapSection from "@/components/contact-us/GoogleMapSection";
import HeroSection from "@/components/contact-us/HeroSection";
import Head from "next/head";

export const metadata = {
  title: "Contact Trip Law - Get Legal Assistance Today",
  description:
    "Stay informed on the latest immigration news, legal updates, and valuable resources with TripLaw's immigration blog",
};

const page = () => {
  return (
    <>
      <HeroSection />
      <ContactSection />
      <GoogleMapSection />
    </>
  );
};

export default page;
