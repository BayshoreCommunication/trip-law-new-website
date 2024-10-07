import HeroSection from "@/components/privacy-policy/HeroSection";
import PrivacyPolicy from "@/components/privacy-policy/PrivacyPolicy";
import Head from "next/head";

export const metadata = {
  title: "Privacy Policy - Attorney Hardam Tripathi, Esq.",
  description:
    "Learn about Trip-Law's commitment to your privacy, the use of cookies, comment policy, and legal notices in our detailed Legal Information section",
};

const page = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy - Attorney Hardam Tripathi, Esq.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
      </Head>
      <HeroSection />
      <PrivacyPolicy />
    </>
  );
};

export default page;
