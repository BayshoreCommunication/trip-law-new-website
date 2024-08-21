import AngelInvestor from '@/components/angel-investor/AngelInvestor';
import HeroSection from '@/components/angel-investor/HeroSection';
import Head from 'next/head';

const page = () => {
  return (
    <>
      <Head>
        <title>Angel Investor - Attorney Hardam Tripathi, Esq.</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='description'
          content={`Discover the essentials of angel investors: what they offer, key features, and how the investment process works.`}
        />
      </Head>
      <HeroSection />
      <AngelInvestor />
    </>
  );
};

export default page;
