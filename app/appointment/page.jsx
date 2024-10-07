import AppointmentFrom from "@/components/appointment/AppointmentFrom";
import AppointmentSection from "@/components/appointment/AppointmentSection";
import HeroSection from "@/components/appointment/HeroSection";
import Head from "next/head";

export const metadata = {
  title: "Appointment - Attorney Hardam Tripathi, Esq.",
  description:
    "Discover the essentials of angel investors: what they offer, key features, and how the investment process works",
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
