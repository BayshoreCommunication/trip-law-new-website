import CardMotion from "@/components/motion/CardMotion";
import NewsPage from "@/components/news/NewsPage";
import PageHeroSection from "@/components/shared/PageHeroSection";
import SectionLayout from "@/components/shared/SectionLayout";
import React from "react";

export const metadata = {
  title: "Immigration Tips, Success Stories & Legal News | Trip Law News",
  description:
    "Stay informed with the latest U.S. immigration law news, expert tips, and insights from Trip Law. Our blog covers Green Cards, work visas (H-1B, EB-1), asylum, family sponsorship, and more. Get valuable advice from experienced immigration attorneys to guide your journey.",
};

const page = () => {
  return (
    <>
      <PageHeroSection image={"/assets/hero-img/news.jpg"} titleH1={"News"} />
      <NewsPage />
    </>
  );
};

export default page;
