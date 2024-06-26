import HeroSection from '@/components/leagal-information/HeroSection';
import LeagalInformation from '@/components/leagal-information/LeagalInformation';
import Head from 'next/head';
import React from 'react';

const page = () => {
  return (
    <>
      <Head>
        <title>Leagal Information - Trip Law</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='' />
      </Head>
      <HeroSection />
      <LeagalInformation />
    </>
  );
};

export default page;
