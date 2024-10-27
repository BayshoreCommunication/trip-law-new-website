import Career from "@/components/career/Career";
import HeroSection from "@/components/career/HeroSection";
import Head from "next/head";
import React from "react";

export const metadata = {
  title: "Career - Attorney Hardam Tripathi, Esq.",
  description:
    "Stay informed on the latest immigration news, legal updates, and valuable resources with TripLaw's immigration blog ",
};

const page = () => {
  return (
    <>
      <HeroSection />
      <Career />
    </>
  );
};

export default page;
