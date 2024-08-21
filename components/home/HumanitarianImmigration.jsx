import React from 'react';
import SectionLayout from '../shared/SectionLayout';
import { Bitter } from 'next/font/google';
import { DoubleOneTabSection } from '../shared/DoubleOneTabSection';

const bitter = Bitter({ subsets: ['latin'] });

const HumanitarianImmigration = () => {
  const tabsData = {
    top: [
      {
        value: '1',
        label: 'VAWA',
      },
      {
        value: '2',
        label: 'U Visa',
      },
      {
        value: '3',
        label: 'Asylum',
      },
    ],
    bottom: [
      {
        value: '4',
        label: 'T Visa',
      },
    ],
    details: [
      {
        value: '1',
        content:
          "If you’ve suffered abuse, the Violence Against Women Act (VAWA) visa can provide you safety and a path to residency in the U.S.A It’s designed to protect victims of domestic violence like sexual assault and stalking and direct critical services to victims. We offer compassionate, expert guidance to help you navigate the process, ensuring your application is strong and thorough. We're here to support you every step of the way.",
        img: `/assets/home/Humanitarian-Based-Immigration/vawa.png`,
        slug: 'vawa',
      },
      {
        value: '2',
        content:
          'Victims of certain crimes (suffered mental or physical abuse) who assist law enforcement can apply for a U visa. It offers protection and a path to residency. We understand your challenges and provide dedicated support to ensure your application is compelling and complete. Let us help you secure a safer future in the U.S.A',
        img: `/assets/home/Humanitarian-Based-Immigration/u-visa.png`,
        slug: 'u-visa',
      },
      {
        value: '3',
        content:
          'Escape persecution and find safety in the U.S.A with asylum. This visa is especially available for those who are persecuted because of their race, religion, nationality, membership in a particular social group, or political opinion. We are experienced in handling asylum cases, guiding you through the complex process with empathy and expertise. We’ll help you build a strong case so you can find refuge and rebuild your life.',
        img: `/assets/home/Humanitarian-Based-Immigration/asylum.png`,
        slug: 'asylum',
      },

      {
        value: '4',
        content:
          'Victims of human trafficking like forced labor, debt bondage, sex trafficking, or domestic servitude in the U.S.A or abroad can apply for a T visa. This visa provides protection and the chance to stay in the U.S.A We are committed to helping you through this difficult time, offering expert legal support to ensure your application is successful. Let us help you find safety and start a new.',
        img: `/assets/home/Humanitarian-Based-Immigration/t-visa.png`,
        slug: 't-visa',
      },
    ],
  };

  return (
    <SectionLayout bg='bg-white'>
      <h2
        className={`text-stone-950 font-bold text-3xl md:text-4xl mt-5 mb-3 text-center ${bitter.className}`}
      >
        Humanitarian Immigration
      </h2>
      <div className='flex justify-center'>
        <div className='flex flex-col w-full mt-10'>
          <DoubleOneTabSection tabsData={tabsData} />
        </div>
      </div>
    </SectionLayout>
  );
};

export default HumanitarianImmigration;
