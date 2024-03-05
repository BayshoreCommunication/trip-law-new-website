import AppointmentSection from "@/components/appointment/AppointmentSection";
import Calendly from "@/components/appointment/Calendly";
import HeroSection from "@/components/appointment/HeroSection";

const page = () => {
  return (
    <div>
      <HeroSection />
      <AppointmentSection />
      <Calendly />
    </div>
  );
};

export default page;
