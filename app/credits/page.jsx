import Credits from "@/components/credits/Credits";
import HeroSection from "@/components/credits/HeroSection";
import Head from "next/head";

export const metadata = {
  title: "Credits - Attorney Hardam Tripathi, Esq.",
  description:
    "Stay informed on the latest immigration news, legal updates, and valuable resources with TripLaw's immigration blog",
};

const page = () => {
  return (
    <>
      <HeroSection />
      <Credits />
    </>
  );
};

export default page;
