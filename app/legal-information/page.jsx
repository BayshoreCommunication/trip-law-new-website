import Head from 'next/head';
import React from 'react';
import HeroSection from '@/components/legal-information/HeroSection';
import LegalInformation from '@/components/legal-information/LegalInformation';

const page = () => {
  return (
    <>
      <Head>
        <title>Legal Information - Attorney Hardam Tripathi, Esq.</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='description'
          content={`Learn about Trip-Law's commitment to your privacy, the use of cookies, comment policy, and legal notices in our detailed Legal Information section`}
        />
      </Head>
      <HeroSection />
      <LegalInformation />
    </>
  );
};

export default page;
