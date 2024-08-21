import ContactSection from '@/components/contact-us/ContactSection';
import GoogleMapSection from '@/components/contact-us/GoogleMapSection';
import HeroSection from '@/components/contact-us/HeroSection';
import Head from 'next/head';

const page = () => {
  return (
    <>
      <Head>
        <title>Contact Trip Law - Get Legal Assistance Today</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='' />
      </Head>
      <HeroSection />
      <ContactSection />
      <GoogleMapSection />
    </>
  );
};

export default page;
