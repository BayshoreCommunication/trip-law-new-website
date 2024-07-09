import React from 'react';
import SectionLayout from '../shared/SectionLayout';
import Link from 'next/link';
import CardMotion from '../motion/CardMotion';
import Image from 'next/image';

const PageHeroSection = ({ image, title }) => {
  return (
    <>
      <div className='relative w-full h-full bg-black bg-opacity-85 mt-[70px]'>
        <Image
          src={`${image}`}
          alt={title}
          layout='fill'
          objectFit='cover'
          className='z-0'
          priority
        />
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
          <SectionLayout>
            <div className='relative py-20 gap-10 items-center md:flex z-10'>
              <h1 className={`text-white font-bold text-4xl text-center`}>
                {title}
              </h1>

              <nav
                className='flex justify-center mt-8 md:mt-1 items-center'
                aria-label='Breadcrumb'
              >
                <ol className='inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse'>
                  <li className='inline-flex items-center'>
                    <Link
                      href='/'
                      className='inline-flex items-center text-sm font-medium text-stone-200 hover:text-red-700'
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <div className='flex items-center'>
                      <svg
                        className='rtl:rotate-180 w-3 h-3 text-stone-50 mx-1'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 6 10'
                      >
                        <path
                          stroke='currentColor'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='m1 9 4-4-4-4'
                        />
                      </svg>

                      <Link
                        href='#'
                        className='ms-1 text-sm font-medium text-white md:ms-2'
                      >
                        {title}
                      </Link>
                    </div>
                  </li>
                </ol>
              </nav>
            </div>
          </SectionLayout>
        </CardMotion>
      </div>
    </>
  );
};

export default PageHeroSection;
