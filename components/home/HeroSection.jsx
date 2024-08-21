'use client';
import React, { memo } from 'react';
import SectionLayout from '../shared/SectionLayout';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const bitter = Bitter({ subsets: ['latin'] });

const HeroSection = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const text = 'Hardam Tripathi, Esq.'.split(' ');

  return (
    <div className='relative mt-[70px] md:overflow-hidden'>
      <div className='relative h-[480px] md:h-[800px]'>
        <Image
          src='/assets/home/trip-low-hero-bg.jpg'
          alt='home-banner'
          layout='fill'
          objectFit='cover'
          priority
          className='z-10 hidden md:block'
          rel='preload'
        />

        <Image
          src='/assets/home/trip-low-hero-bg-for-mobile.jpg'
          alt='home-banner'
          layout='fill'
          objectFit='cover'
          priority
          className='z-10 block md:hidden'
          rel='preload'
        />

        <motion.div
          className='absolute inset-0 z-20 flex items-center my-0'
          initial='hidden'
          animate='visible'
          exit={{ opacity: 0, transition: { duration: 1 } }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <SectionLayout>
            <div className='grid items-center grid-cols-1 md:grid-cols-3'>
              <div className='col-span-2'>
                <motion.h2
                  variants={variants}
                  className='text-xl font-black text-center text-red-700 md:text-3xl md:text-left'
                >
                  Giving You Advices That Matters
                </motion.h2>
                <motion.hr
                  variants={variants}
                  className='h-[2px] my-2 bg-red-700 border-0 w-20 mx-auto md:mx-0'
                />
                <h1
                  className={`text-[50px] md:text-[90px] font-[800] text-white text-center md:text-left leading-tight tracking-normal ${bitter.className}`}
                >
                  {text.map((word, index) => (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.25, delay: index / 10 }}
                      key={index}
                    >
                      {word}{' '}
                    </motion.span>
                  ))}
                </h1>
                <motion.p
                  variants={variants}
                  className='mt-4 text-center text-white text-md md:text-lg md:mt-5 md:text-left'
                >
                  Connecting Families To Their Immigration Dream
                </motion.p>

                <motion.div
                  variants={variants}
                  className='flex justify-center mt-5 md:mt-8 md:justify-start'
                >
                  <Link
                    className='flex items-center justify-center px-2 py-2 mb-2 text-sm font-medium text-white uppercase bg-red-700 hover:bg-red-800 md:text-lg md:px-8 me-3 md:me-6'
                    href='/appointment'
                  >
                    Consultation
                  </Link>
                  <Link
                    href={'tel:(863)-599-6735'}
                    className='flex items-center justify-center px-2 py-2 mb-2 text-sm font-medium text-white border border-white bg-none hover:bg-red-800 md:text-lg md:px-8 me-0 md:me-6'
                  >
                    (863)-599-6735
                  </Link>
                </motion.div>
              </div>
            </div>
          </SectionLayout>
        </motion.div>
      </div>
    </div>
  );
};

export default memo(HeroSection);
