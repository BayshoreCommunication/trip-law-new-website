import HeroSection from '@/components/leagal-information/HeroSection';
import LeagalInformation from '@/components/leagal-information/LeagalInformation';
import Head from 'next/head';
import React from 'react';

const page = () => {
  return (
    <>
      <Head>
        <title>Leagal Information - Attorney Hardam Tripathi, Esq.</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='description'
          content={`Learn about Trip-Law's commitment to your privacy, the use of cookies, comment policy, and legal notices in our detailed Legal Information section`}
        />
      </Head>
      <HeroSection />
      <LeagalInformation />
    </>
  );
};

export default page;
