'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';
import { T_VISA_IMAGE_METADATA } from './tVisaImagesMeta';

const bitter = Bitter({ subsets: ['latin'] });

const eligibilityListLeft = [
  'You must be a victim of severe sex trafficking or labor trafficking involving force, fraud or coercion.',
  'You must currently reside in the United States or at the U.S. port of entry because of a trafficking scheme.',
  'You must comply with reasonable requests for assistance from law enforcement agencies unless you qualify for trauma or age related exceptions.',
];

const eligibilityListRight = [
  'Removal from the United States must cause you unusual and severe harm.',
  'You must be legally admissible to the U.S. or qualify for an official immigration waiver.',
  'USCIS officers must grant favorable exercise of discretion to approve your application.',
];

const EligibilitySection = () => {
  const { eligibilityPathwaysBg } = T_VISA_IMAGE_METADATA;

  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#F8FAFC] text-slate-800 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src={eligibilityPathwaysBg.src}
          alt={eligibilityPathwaysBg.alt}
          title={eligibilityPathwaysBg.title}
          fill
          sizes="100vw"
          quality={80}
          className="object-cover object-center opacity-50"
        />
        <div className="absolute inset-0 bg-slate-50/60" />
      </div>

      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-5 flex flex-col items-start text-left"
          >
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1829] tracking-tight leading-[1.25] mb-4 ${bitter.className}`}>
              T Visa Eligibility Requirements: Do You Qualify?
            </h2>

            <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Are you sure your T nonimmigrant application meets every USCIS eligibility requirement? USCIS evaluates your trafficking experience and hardship upon removal. To approve your petition, you must qualify for all core legal criteria.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-7 w-full"
          >
            <div className="bg-white rounded-3xl p-6 sm:p-9 md:p-10 shadow-2xl shadow-slate-200/90 border border-slate-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                {[eligibilityListLeft, eligibilityListRight].map((col, colIdx) => (
                  <div key={colIdx} className="flex flex-col gap-5">
                    {col.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-700 text-white flex items-center justify-center mt-0.5 shadow-sm shadow-red-700/30">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-slate-700 text-sm sm:text-base font-normal leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EligibilitySection;
