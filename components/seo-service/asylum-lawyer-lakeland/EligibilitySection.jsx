'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';
import { ASYLUM_IMAGE_METADATA } from './asylumImagesMeta';

const bitter = Bitter({ subsets: ['latin'] });

const requirementsLeft = [
  'You have suffered harassment due to your race, religion, nationality, political beliefs or certain social group.',
  'You suffered serious harm before, such as threats, assault or detention.',
  'You hold a well founded fear of harm if you return home.',
];

const requirementsRight = [
  'You show the government caused the harm or failed to stop it.',
  'You file within one year of your last arrival, unless an exception applies.',
  'You clear eligibility bars including serious criminal convictions and past persecution of others.',
];

const EligibilitySection = () => {
  const { eligibilityPathwaysBg } = ASYLUM_IMAGE_METADATA;

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
              Asylum Eligibility Requirements: Who Qualifies?
            </h2>

            <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Can you prove you fled persecution in your home country? USCIS asks that question in every asylum case. Our team starts there with you. We review your timeline, your records and the reasons you left. Every claim rests on one core link. You must show harm or a real fear of harm tied to a protected ground. USCIS checks your fear connection on your Form I 589. We built that record. Your account must cover all filings and all hearings.
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
                {[requirementsLeft, requirementsRight].map((col, colIdx) => (
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
