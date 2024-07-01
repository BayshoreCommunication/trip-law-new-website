import AppointmentFrom from '@/components/appointment/AppointmentFrom';
import AppointmentSection from '@/components/appointment/AppointmentSection';
import HeroSection from '@/components/appointment/HeroSection';
import Head from 'next/head';

const page = () => {
  return (
    <>
      <Head>
        <title>Appointment - Attorney Hardam Tripathi, Esq.</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='' />
      </Head>
      <HeroSection />
      <AppointmentSection />
      <AppointmentFrom />
    </>
  );
};

export default page;
