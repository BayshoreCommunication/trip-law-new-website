import HeroSection from "@/components/terms-of-service/HeroSection";
import TermsOfService from "@/components/terms-of-service/TermsOfService";
import Head from "next/head";
import React from "react";

export const metadata = {
  title: "Terms of Service - Attorney Hardam Tripathi, Esq.",
  description:
    "Explore our Terms of Service to understand the rules, guidelines, and legal agreements managing your use of our website and services.",
};

const page = () => {
  return (
    <>
      <HeroSection />
      <TermsOfService />
    </>
  );
};

export default page;
