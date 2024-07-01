import Career from '@/components/career/Career';
import HeroSection from '@/components/career/HeroSection';
import Head from 'next/head';
import React from 'react';

const page = () => {
  return (
    <>
      <Head>
        <title>Career - Attorney Hardam Tripathi, Esq.</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='' />
      </Head>
      <HeroSection />
      <Career />
    </>
  );
};

export default page;
