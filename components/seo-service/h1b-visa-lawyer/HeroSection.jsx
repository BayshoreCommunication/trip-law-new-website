'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';
import { H1B_IMAGE_METADATA } from './h1bImagesMeta';

const bitter = Bitter({ subsets: ['latin'] });

const HeroSection = () => {
  const { heroBg, heroFeature } = H1B_IMAGE_METADATA;

  return (
    <section className="relative w-full min-h-[640px] lg:min-h-[760px] flex items-center justify-center bg-slate-950 text-white overflow-hidden py-16 lg:py-24 mt-[70px]">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBg.src}
          alt={heroBg.alt}
          title={heroBg.title}
          fill
          priority
          sizes="100vw"
          quality={85}
          className="object-cover object-center transform scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030914]/95 via-[#061224]/88 to-[#030914]/90 md:bg-gradient-to-r md:from-[#040B17]/95 md:via-[#081427]/85 md:to-[#040B17]/65" />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15] mb-6 ${bitter.className}`}>
              H1B Visa Lawyer for Employment Based Immigration
            </h1>

            <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />

            <p className="text-slate-200 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-3xl mb-6">
              Every year more than 450,000 H1B petitions reach USCIS. Unfortunately about 3% of first time petitions get denied or rejected due to missing information or wrong fees like mistakes. On top of that, since July 10, 2026, a bad signature can cost you the whole fee. But when you hire an h1b visa lawyer, you reduce the chances of being on that denied list and get a better chance to be in the 85,000 visa cap. We make your filings a lot easier because we do the form work on your behalf. We represent both employers and foreign workers. We review eligibility, RFE response, approval and post approval support.
            </p>

            <p className="text-red-400 font-semibold text-base sm:text-lg md:text-xl leading-relaxed">
              Book a consultation today and we&apos;ll review your case within 24 hours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5 w-full"
          >
            <div className="relative w-full aspect-[1200/630] lg:aspect-[4/3] rounded-2xl overflow-hidden border border-slate-700/70 shadow-2xl shadow-black/80 bg-[#091424]">
              <Image
                src={heroFeature.src}
                alt={heroFeature.alt}
                title={heroFeature.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                quality={85}
                className="object-cover object-center"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
