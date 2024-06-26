import HeroSection from '@/components/terms-of-service/HeroSection';
import TermsOfService from '@/components/terms-of-service/TermsOfService';
import Head from 'next/head';
import React from 'react';

const page = () => {
  return (
    <>
      <Head>
        <title>Terms of Service - Trip Law</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='' />
      </Head>
      <HeroSection />
      <TermsOfService />
    </>
  );
};

export default page;
