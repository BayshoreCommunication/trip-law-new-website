import React from 'react';
import SectionLayout from '../shared/SectionLayout';
import CardMotion from '../motion/CardMotion';
import Image from 'next/image';

function YoutubeVideoSection() {
  return (
    <div className='relative w-full h-full'>
      <Image
        src='/assets/home/video-bg.png'
        alt='Background'
        layout='fill'
        objectFit='cover'
        className='z-0'
      />
      <SectionLayout>
        <div className='relative z-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center md:justify-start gap-16'>
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
              <div>
                <h2 className='text-stone-900 font-bold text-2xl md:text-3xl mt-5 mb-4 text-center md:text-left'>
                  Obtain legal status within the United States quickly with
                  proper legal representation!
                </h2>
                <ul className='space-y-2 text-slate-900 text-md md:text-lg'>
                  <li className='flex items-start'>
                    <span className='flex-shrink-0'>•</span>
                    <span className='ml-2'>
                      Attorney Hardam Tripathi from Trip Law, P.A. practices USA
                      Immigration & Nationality Law in all 50 states and
                      territories in the Union and at Embassies and USA
                      Consulates abroad.
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='flex-shrink-0'>•</span>
                    <span className='ml-2'>
                      Juris Doctorate (Western Michigan University).
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='flex-shrink-0'>•</span>
                    <span className='ml-2'>
                      Masters in Policy (University of Florida).
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='flex-shrink-0'>•</span>
                    <span className='ml-2'>
                      Bachelors in Business Management and Marketing (University
                      of South Florida).
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='flex-shrink-0'>•</span>
                    <span className='ml-2'>
                      Practices in Business Immigration, Family Sponsorship,
                      Visas, Green Cards, Citizenship, Deportation Defense, and
                      Asylum.
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='flex-shrink-0'>•</span>
                    <span className='ml-2'>
                      Business and Investor Based Immigration, Family Based
                      Immigration, and Humanitarian Based Immigration.
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='flex-shrink-0'>•</span>
                    <span className='ml-2'>
                      Federal Agencies Attorney Tripathi served in as a legal
                      professional: USA Air Force JAG Corps, DEA, ATF, USA
                      Department of State, USA Attorney's Office, Federal
                      Defenders Office, State and Local Government, Thirteenth
                      Judicial Circuit of Florida, State Attorney’s Office.
                    </span>
                  </li>
                </ul>
              </div>
            </CardMotion>
            <div>
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
                <div className='video-container'>
                  <iframe
                    src={`https://www.youtube.com/embed/auxTn-pKqO0?si=6w-r-XqRfpJyq7D2`}
                    frameborder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowfullscreen
                    title='USA Immigration Attorney Hardam Tripathi, Esq.'
                    loading='lazy'
                    className='w-full h-64 md:h-96'
                  ></iframe>
                </div>
              </CardMotion>
            </div>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
}

export default YoutubeVideoSection;
