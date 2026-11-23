'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';
import { H1B_IMAGE_METADATA } from './h1bImagesMeta';

const bitter = Bitter({ subsets: ['latin'] });

const requirementGroups = [
  {
    title: 'Employer Requirements',
    items: [
      'A U.S. employer with a valid Federal Employer Identification Number (EIN).',
      'An approved Labor Condition Application (LCA) certified by the Department of Labor.',
      'A written job offer for a genuine, non speculative position.',
      'Full payment of all mandatory USCIS filing and immigration fees.',
    ],
  },
  {
    title: 'Position Requirements',
    items: [
      "Job duties must require a bachelor's degree or higher as an industry standard.",
      'Position must be legally classified as a specialty occupation.',
      'The job must pay at least the local prevailing wage set by the government.',
    ],
  },
  {
    title: 'Worker Requirements',
    items: [
      "Bachelor's degree or higher that directly matches the job specialty.",
      'Certified evaluation proving a foreign degree is equivalent to a U.S. degree.',
      'A minimum of three years of work experience for every missing year of college.',
      'Valid state professional license if the occupation legally requires one.',
    ],
  },
  {
    title: 'Procedural Requirements',
    items: [
      'Selected slot in the annual USCIS cap lottery before filing.',
      'A cap exempt employer if applying outside of the annual lottery.',
      'Maintenance of lawful nonimmigrant status if applying from inside the U.S.',
    ],
  },
];

const EligibilitySection = () => {
  const { subtleWatermarkBg } = H1B_IMAGE_METADATA;

  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#F8FAFC] text-slate-800 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src={subtleWatermarkBg.src}
          alt={subtleWatermarkBg.alt}
          title={subtleWatermarkBg.title}
          fill
          sizes="100vw"
          quality={80}
          className="object-cover object-center opacity-50"
        />
        <div className="absolute inset-0 bg-slate-50/40" />
      </div>

      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1829] tracking-tight leading-[1.2] mb-4 ${bitter.className}`}>
            H1B Visa Requirements: Do You Qualify?
          </h2>
          <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Have you met every H1B requirement USCIS checks before it approves a petition? USCIS reviews the job, the degree, the wage and the employer behind the offer. Our h1b visa lawyer tests each requirement early, then builds the petition around them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {requirementGroups.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/80 border border-slate-200/80 flex flex-col justify-between"
            >
              <div>
                <h3 className={`text-xl sm:text-2xl font-bold text-[#0B1829] mb-3 ${bitter.className}`}>
                  {group.title}
                </h3>
                <div className="h-[2px] w-14 bg-red-700 rounded-full mb-5" />
                <ul className="flex flex-col gap-3.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-700 text-white flex items-center justify-center mt-0.5 shadow-sm shadow-red-700/30">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-slate-700 text-sm sm:text-base leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EligibilitySection;
