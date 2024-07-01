import Credits from '@/components/credits/Credits';
import HeroSection from '@/components/credits/HeroSection';
import Head from 'next/head';

const page = () => {
  return (
    <>
      <Head>
        <title>Credits - Attorney Hardam Tripathi, Esq.</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='' />
      </Head>
      <HeroSection />
      <Credits />
    </>
  );
};

export default page;
