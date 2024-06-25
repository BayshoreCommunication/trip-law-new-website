'use client';
import SectionLayout from '../shared/SectionLayout';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';
import Image from 'next/image';

const bitter = Bitter({ subsets: ['latin'] });

const HeroSection = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const text = 'Hardam Tripathi, Esq.'.split(' ');

  return (
    <div className='relative'>
      <div className='relative h-[500px] md:h-[800px]'>
        <Image
          src='/assets/home/trip-low-hero-bg.jpg'
          alt='Home Banner'
          layout='fill'
          objectFit='cover'
          priority
          className='z-10'
          rel='preload'
        />

        <motion.div
          className='absolute inset-0 z-20 my-0 flex items-center'
          initial='hidden'
          animate='visible'
          exit={{ opacity: 0, transition: { duration: 1 } }}
          variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
        >
          <SectionLayout>
            <div className='grid grid-cols-1 md:grid-cols-3 items-center'>
              <div className='col-span-2'>
                <motion.h2
                  variants={variants}
                  className='text-red-700 font-black text-[20px] md:text-3xl text-center md:text-left'
                >
                  Giving You Advices That Matters
                </motion.h2>
                <div className='flex justify-center md:justify-start'>
                  <motion.hr
                    variants={variants}
                    className='h-[2px] my-2 bg-red-700 border-0 w-20'
                  />
                </div>
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
                  className='text-white text-sm md:text-lg max-w-[450px] mt-4 md:mt-5 text-center md:text-left'
                >
                  Connecting Families To Their Immigration Dream
                </motion.p>
                <motion.div
                  variants={variants}
                  className='mt-6 md:mt-8 flex justify-center md:justify-start'
                >
                  <a
                    className='text-white bg-red-700 hover:bg-red-800 font-medium text-base md:text-lg px-3 md:px-8 py-2.5 me-3 md:me-6 mb-2 uppercase'
                    href='/appointment'
                  >
                    Consultation
                  </a>
                  <button className='text-white bg-none hover:bg-red-800 font-medium text-base md:text-lg px-3 md:px-8 py-2.5 me-0 md:me-6 mb-2 border border-white'>
                    (863)-599-6735
                  </button>
                </motion.div>
              </div>
            </div>
          </SectionLayout>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
