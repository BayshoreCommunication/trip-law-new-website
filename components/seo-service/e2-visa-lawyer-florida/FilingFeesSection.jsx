'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultFees = [
  {
    title: 'Investment amount',
    cost: 'Varies by business size',
    details: 'The required amount depends on your business type and size instead of fixed government figure.',
  },
  {
    title: 'Form I-129 filing fee',
    cost: '$510 / $1,015',
    details: '$510 for smaller employers, $1,015 ($965 for online apply) for larger ones and an Asylum Program Fee of $300 or $600.',
  },
  {
    title: 'Form I-539 for dependents',
    cost: '$470 ($420 online)',
    details: '$470 ($420 online filing fee) covers a spouse and all children on one change of status filing.',
  },
  {
    title: 'DS-160 visa fee',
    cost: '$315 per applicant',
    details: '$315 per applicant for consular processing including spouses and children.',
  },
  {
    title: 'Premium processing',
    cost: '$2,965 optional fee',
    details: '$2,965 for a 15-business-day decision and available only for I-129 filings.',
  },
  {
    title: 'Reciprocity fee',
    cost: '$0 to several thousand',
    details: 'Ranges from $0 to several thousand dollars based on your nationality.',
  },
  {
    title: 'Visa Integrity Fee',
    cost: '$250 statutory fee',
    details: 'A $250 fee created by federal law in 2025, not yet being collected as of this writing.',
  },
  {
    title: 'Attorney fees',
    cost: 'Fixed transparent quote',
    details: 'Vary by case complexity. You can ask for a clear breakdown before you sign contract.',
  },
];

const FilingFeesSection = ({
  tagline = 'INVESTMENT & 2026 FILING FEES',
  title = 'E2 Visa Investment Amount and Filing Fees for 2026 Applicants',
  description = 'Total expenditures include standard government processing fees alongside your core commercial capital contribution. Fees change on short notice, so confirm current amounts with USCIS and the State Department before filing.',
  fees = defaultFees,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#FCFDFE] text-slate-800 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col items-center text-center mb-14 sm:mb-16"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-red-700 font-bold text-xs sm:text-sm tracking-widest uppercase">
              {tagline}
            </span>
            <div className="h-[2px] w-12 bg-red-700 rounded-full" />
          </div>

          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1829] tracking-tight max-w-4xl leading-[1.18] mb-4 ${bitter.className}`}>
            {title}
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-normal max-w-3xl leading-relaxed">
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {fees.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: 'easeOut' }}
              className="bg-white rounded-3xl p-6 sm:p-7 shadow-xl shadow-slate-200/70 border border-slate-100 flex flex-col justify-between text-left hover:shadow-2xl hover:border-red-700/30 transition-all duration-300"
            >
              <div>
                <span className="text-xs font-bold text-red-700 uppercase tracking-widest bg-red-700/10 px-3 py-1 rounded-full border border-red-700/20 inline-block mb-3">
                  {item.cost}
                </span>

                <h3 className={`text-lg font-bold text-[#0B1829] mb-2 ${bitter.className}`}>
                  {item.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                  {item.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilingFeesSection;
