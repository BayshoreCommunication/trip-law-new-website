import HeroSection from '@/components/terms-of-service/HeroSection';
import TermsOfService from '@/components/terms-of-service/TermsOfService';
import Head from 'next/head';
import React from 'react';

const page = () => {
  return (
    <>
      <Head>
        <title>Terms of Service - Attorney Hardam Tripathi, Esq.</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='description'
          content={`Explore our Terms of Service to understand the rules, guidelines, and legal agreements managing your use of our website and services.`}
        />
      </Head>
      <HeroSection />
      <TermsOfService />
    </>
  );
};

export default page;
