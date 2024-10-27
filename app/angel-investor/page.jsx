import AngelInvestor from "@/components/angel-investor/AngelInvestor";
import HeroSection from "@/components/angel-investor/HeroSection";
import Head from "next/head";

export const metadata = {
  title: "Understanding Angel Investors: Key Insights & Legal Considerations.",
  description:
    "Learn what an angel investor is, their role in startup funding, and the legal aspects governed by Trip Law. Discover how angel investors offer early-stage capital, mentorship, and networking support, transforming the trajectory of new ventures while ensuring compliance with investment regulations.",
};

const page = () => {
  return (
    <>
      <HeroSection />
      <AngelInvestor />
    </>
  );
};

export default page;
