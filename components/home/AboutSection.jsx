import React from 'react';
import SectionLayout from '../shared/SectionLayout';
import CardMotion from '../motion/CardMotion';
import { Bitter } from 'next/font/google';
import ScondayButton from '../shared/ScondayButton';
import Image from 'next/image';

const bitter = Bitter({ subsets: ['latin'] });

const AboutSection = () => {
  return (
    <SectionLayout>
      <div className='space-y-14'>
        <div className='flex flex-col-reverse items-center gap-8 md:flex-row'>
          <div className='flex-1'>
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
              <div className=''>
                {/* <h2 className='text-base font-bold text-stone-950'>About</h2>
              <hr class='h-[2px] my-0 bg-stone-950 border-0 w-4'></hr> */}
                <h2
                  className={`text-stone-950 font-bold text-3xl md:text-5xl mt-5 mb-4 text-center md:text-left ${bitter.className}`}
                >
                  About Us
                </h2>

                <p className='mb-4 text-lg text-center text-stone-950 md:text-left'>
                  At Trip Law we set out to create a unique law firm where
                  outstanding immigration representation and a deep commitment
                  to humanity go hand in hand. Hardam H. Tripathi was a former
                  legal professional in the federal government.
                </p>
                <p className='mb-4 text-lg text-center text-stone-950 md:text-left'>
                  Trip Law at this moment is the home to some of the most
                  experienced lawyers. Trip Law has turned into a leader in the
                  field of immigration law. The growth of Trip Law was fueled by
                  excellence, integrity, and a hard-earned reputation for
                  quality.
                </p>
                <div className='flex justify-center mt-8 md:justify-start'>
                  <ScondayButton
                    title={'READ MORE'}
                    link={'/about'}
                    style={'bg-[#1B2639] text-white'}
                    radius={'sm'}
                  />
                </div>
              </div>
            </CardMotion>
          </div>
          <div className='flex-1'>
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
              <div className='items-center justify-center '>
                <Image
                  src='/assets/home/about-image.jpg'
                  alt='about-image'
                  className=''
                  rel='preload'
                  height={300}
                  width={1200}
                />
              </div>
            </CardMotion>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default AboutSection;
