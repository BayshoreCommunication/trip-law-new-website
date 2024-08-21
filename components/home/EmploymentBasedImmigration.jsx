import React from 'react';
import SectionLayout from '../shared/SectionLayout';
import { Bitter } from 'next/font/google';
import { DoubleTabSection } from '../shared/DoubleTabSection';

const bitter = Bitter({ subsets: ['latin'] });

const EmploymentBasedImmigration = () => {
  const tabsData = {
    top: [
      {
        value: '1',
        label: 'H1B Visa',
      },
      {
        value: '2',
        label: 'L-1 Visa',
      },
      {
        value: '3',
        label: 'O-1 Visa',
      },
    ],
    bottom: [
      {
        value: '4',
        label: 'EB-1 Visa',
      },
      {
        value: '5',
        label: 'EB-2 Visa',
      },
      {
        value: '6',
        label: 'EB-3 Visa',
      },
    ],
    details: [
      {
        value: '1',
        content:
          'Start your U.S.A career journey with the H-1B visa. It’s designed for professionals in specialized fields like IT, engineering, and healthcare. This employer-sponsored visa allows you to work in the U.S.A for up to six years. We make the application process simple and stress-free, guiding you every step of the way. Focus on your career while we handle the details.',
        img: `/assets/home/Employment-Based-Immigration/H1B-Visa.png`,
        slug: 'h1b-visa',
      },
      {
        value: '2',
        content:
          'Transfer to a U.S.A office within your company. For that L-1 visa is just what you need. It’s perfect for executives, managers, and specialized knowledge employees moving within the same company. This visa lets you bring your expertise to the U.S.A We’ll handle all the legal requirements so you can focus on growing your business. Establish your presence in the American market with confidence.',
        img: `/assets/home/Employment-Based-Immigration/L-1-Visa.png`,
        slug: 'l1-visa',
      },
      {
        value: '3',
        content: `The O-1 visa is for individuals with extraordinary abilities in arts, sciences, business, education, or athletics. Whether you’re an artist, researcher, or athlete, this visa opens doors to top opportunities in the U.S.A We specialize in showcasing your exceptional achievements. We’ll guide you quickly through the application process to secure your visa. We simplify everything, so you can focus on what you do best.`,
        img: `/assets/home/Employment-Based-Immigration/O-1-Visa.png`,
        slug: 'o1-visa',
      },
      {
        value: '4',
        content:
          'The EB-1 visa offers a direct path to U.S.A permanent residency. It’s designed for those with extraordinary abilities, outstanding professors, researchers, or multinational executives. Our expert team will carefully prepare your case, emphasizing your exceptional qualifications to ensure a successful application. Let us help you achieve your American dream with ease.',
        img: `/assets/home/Employment-Based-Immigration/EB-1-Visa.png`,
        slug: 'eb1-visa',
      },
      {
        value: '5',
        content:
          'If you’re a professional with an advanced degree or exceptional abilities seeking U.S.A permanent residency, the EB-2 visa is ideal for you. This visa caters to those who can significantly contribute to the American economy. We make the application process simple. Trust our expertise to secure your future in the United States. Whether through a job offer or a National Interest Waiver, we can help.',
        img: `/assets/home/Employment-Based-Immigration/EB-2-Visa.png`,
        slug: 'eb2-visa',
      },
      {
        value: '6',
        content:
          'The EB-3 visa is available for skilled workers, professionals, and unskilled workers. You can also get permanent residency via an EB-3 visa. It’s perfect for those who want to build a life and career in the U.S.A We will guide you through the complex immigration process. We make sure your skills and experience are presented convincingly.',
        img: `/assets/home/Employment-Based-Immigration/EB-3-Visa.png`,
        slug: 'eb3-visa',
      },
    ],
  };

  return (
    <SectionLayout bg='bg-white'>
      <h2
        className={`text-stone-950 font-bold text-3xl md:text-4xl mt-0 mb-3 text-center ${bitter.className}`}
      >
        Employment Based Immigration
      </h2>
      <div className='flex justify-center'>
        <div className='flex flex-col w-full mt-10'>
          <DoubleTabSection tabsData={tabsData} />
        </div>
      </div>
    </SectionLayout>
  );
};

export default EmploymentBasedImmigration;
