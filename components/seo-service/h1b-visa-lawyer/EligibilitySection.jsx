'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultListLeft = [
  'A U.S. employer with a valid Federal Employer Identification Number (EIN).',
  'An approved Labor Condition Application (LCA) certified by the Department of Labor.',
  'A written job offer for a genuine, non speculative position.',
  'Full payment of all mandatory USCIS filing and immigration fees.',
  "Job duties must require a bachelor's degree or higher as an industry standard.",
  'Position must be legally classified as a specialty occupation.',
  'The job must pay at least the local prevailing wage set by the government.',
];

const defaultListRight = [
  "Bachelor's degree or higher that directly matches the job specialty.",
  'Certified evaluation proving a foreign degree is equivalent to a U.S. degree.',
  'A minimum of three years of work experience for every missing year of college.',
  'Valid state professional license if the occupation legally requires one.',
  'Selected slot in the annual USCIS cap lottery before filing.',
  'A cap exempt employer if applying outside of the annual lottery.',
  'Maintenance of lawful nonimmigrant status if applying from inside the U.S.',
];

const EligibilitySection = ({
  title = 'H1B Visa Requirements: Do You Qualify?',
  subtitleBold = '',
  description = 'Have you met every H1B requirement USCIS checks before it approves a petition? USCIS reviews the job, the degree, the wage and the employer behind the offer. Our h1b visa lawyer tests each requirement early, then builds the petition around them.',
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/eligibility-bg.png',
  cardTitle = 'H1B Visa Requirements:',
  cardSubtitle = 'Do You Qualify?',
  eligibilityListLeft = defaultListLeft,
  eligibilityListRight = defaultListRight,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#F8FAFC] text-slate-800 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src={bgImage}
          alt="Eligibility Section Background Image"
          fill
          sizes="100vw"
          quality={90}
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-slate-50/40" />
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
              {title}
            </h2>

            <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />

            {subtitleBold && (
              <p className="text-slate-900 font-semibold text-base sm:text-lg leading-relaxed mb-5">
                {subtitleBold}
              </p>
            )}

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Have you met every H1B requirement USCIS checks before it approves a petition? USCIS reviews the job, the degree, the wage and the employer behind the offer. Our{' '}
              <Link href="/h1b-visa-lawyer" className="text-red-700 font-semibold hover:underline">
                h1b visa lawyer
              </Link>{' '}
              tests each requirement early, then builds the petition around them.
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
              
              <div className="mb-6">
                <h3 className={`text-2xl sm:text-3xl font-bold text-[#0B1829] mb-1 ${bitter.className}`}>
                  {cardTitle}
                </h3>
                <h4 className={`text-xl sm:text-2xl font-bold text-red-700 ${bitter.className}`}>
                  {cardSubtitle}
                </h4>
                <div className="h-[2px] w-14 bg-red-700 rounded-full mt-3" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 pt-2">
                <div className="flex flex-col gap-4">
                  {eligibilityListLeft.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-700 text-white flex items-center justify-center mt-0.5 shadow-sm shadow-red-700/30">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-slate-700 text-sm sm:text-base font-normal leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-4">
                  {eligibilityListRight.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-700 text-white flex items-center justify-center mt-0.5 shadow-sm shadow-red-700/30">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-slate-700 text-sm sm:text-base font-normal leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default EligibilitySection;
