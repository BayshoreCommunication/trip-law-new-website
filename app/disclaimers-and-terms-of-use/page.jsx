import DisclaimersTermsOfUse from "@/components/disclaimers-and-terms-of-use/privacy-policy/DisclaimersTermsOfUse";
import HeroSection from "@/components/disclaimers-and-terms-of-use/privacy-policy/HeroSection";
import Head from "next/head";

export const metadata = {
  title: "Privacy Policy - Attorney Hardam Tripathi, Esq.",
  description:
    "Stay informed on the latest immigration news, legal updates, and valuable resources with TripLaw's immigration blog",
};

const page = () => {
  return (
    <>
      <HeroSection />
      <DisclaimersTermsOfUse />
    </>
  );
};

export default page;
