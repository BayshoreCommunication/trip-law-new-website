import React from 'react';
import SectionLayout from '../shared/SectionLayout';
import { Bitter } from 'next/font/google';
import CardMotion from '../motion/CardMotion';

const bitter = Bitter({ subsets: ['latin'] });

const AppointmentSection = () => {
  return (
    <SectionLayout bg='bg-white'>
      <CardMotion
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 1.1,
          },
        }}
        initial={{
          opacity: 0,
          x: -100,
        }}
      >
        <h2
          className={`text-stone-950 font-bold text-5xl mt-5 mb-4 text-center ${bitter.className}`}
        >
          Appointment
        </h2>
      </CardMotion>
      <CardMotion
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 1.1,
          },
        }}
        initial={{
          opacity: 0,
          x: 100,
        }}
      >
        <p className='text-lg text-stone-950 text-center'>
          Demo Digital Xperience Group (DXG), a pioneering division of WLJ
          Consulting, is a premier partner in transforming events into
          unforgettable experiences. With our roots firmly planted in the event
          hospitality industry. We pride ourselves on elevating the digital and
          production quality of in-person, virtual, and hybrid events.
        </p>
      </CardMotion>
    </SectionLayout>
  );
};

export default AppointmentSection;
