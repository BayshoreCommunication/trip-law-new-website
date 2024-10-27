import AppointmentFrom from "@/components/appointment/AppointmentFrom";
import AppointmentSection from "@/components/appointment/AppointmentSection";
import HeroSection from "@/components/appointment/HeroSection";
import Head from "next/head";

export const metadata = {
  title: "Schedule an Immigration Consultation | Expert U.S. Immigration Lawyers",
  description:
    "Book your consultation with Trip Law, a trusted U.S. immigration law firm. Get expert advice on Green Cards, family sponsorship, work visas (H-1B, L-1), asylum, and more. Our experienced attorneys in Florida are here to guide you through every step of the immigration process.",
};

const page = () => {
  return (
    <>
      <HeroSection />
      <AppointmentSection />
      <AppointmentFrom />
    </>
  );
};

export default page;
