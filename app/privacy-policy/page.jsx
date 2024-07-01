import HeroSection from '@/components/privacy-policy/HeroSection';
import PrivacyPolicy from '@/components/privacy-policy/PrivacyPolicy';
import Head from 'next/head';

const page = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy - Attorney Hardam Tripathi, Esq.</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='' />
      </Head>
      <HeroSection />
      <PrivacyPolicy />
    </>
  );
};

export default page;
