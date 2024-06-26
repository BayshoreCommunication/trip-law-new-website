import ContactSection from '@/components/contact-us/ContactSection';
import GoogleMapSection from '@/components/contact-us/GoogleMapSection';
import HeroSection from '@/components/contact-us/HeroSection';

const page = () => {
  return (
    <div>
      <HeroSection />
      <ContactSection />
      <GoogleMapSection />
    </div>
  );
};

export default page;
