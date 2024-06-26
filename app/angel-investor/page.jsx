import AngelInvestor from '@/components/angel-investor/AngelInvestor';
import HeroSection from '@/components/angel-investor/HeroSection';
import Head from 'next/head';

const page = () => {
  return (
    <>
      <Head>
        <title>Angel Investor - Trip Law</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='' />
      </Head>
      <HeroSection />
      <AngelInvestor />
    </>
  );
};

export default page;
