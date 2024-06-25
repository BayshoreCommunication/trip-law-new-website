import AppointmentFrom from '@/components/appointment/AppointmentFrom';
import AppointmentSection from '@/components/appointment/AppointmentSection';
import HeroSection from '@/components/appointment/HeroSection';

const page = () => {
  return (
    <div>
      <HeroSection />
      <AppointmentSection />
      <AppointmentFrom />
    </div>
  );
};

export default page;
