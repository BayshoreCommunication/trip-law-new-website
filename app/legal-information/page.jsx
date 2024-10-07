import Head from "next/head";
import React from "react";
import HeroSection from "@/components/legal-information/HeroSection";
import LegalInformation from "@/components/legal-information/LegalInformation";

export const metadata = {
  title: "Legal Information - Attorney Hardam Tripathi, Esq.",
  description:
    "Learn about Trip-Law's commitment to your privacy, the use of cookies, comment policy, and legal notices in our detailed Legal Information section",
};

const page = () => {
  return (
    <>
      <HeroSection />
      <LegalInformation />
    </>
  );
};

export default page;
