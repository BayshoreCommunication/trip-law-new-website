'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultFees = [
  {
    title: 'Form N-400 (Naturalization)',
    cost: '$710 / $760',
    details: 'Form N-400 (Naturalization): $710 filed online, $760 filed by paper.',
  },
  {
    title: 'Form I-485 (Adjustment of Status)',
    cost: '$1,440',
    details: 'Form I-485 (Adjustment of Status): $1,440, which includes biometric services.',
  },
  {
    title: 'Form I-130 (Alien Relative)',
    cost: '$625 / $675',
    details: 'Form I-130 (Petition for Alien Relative): $625 filed online, $675 filed by paper.',
  },
  {
    title: 'Form I-765 (Work Permit)',
    cost: 'No Add. Fee w/ I-485',
    details: 'Form I-765 (Employment Authorization): no additional cost when filed with a pending I-485.',
  },
  {
    title: 'Form I-131 (Advance Parole)',
    cost: 'No Add. Fee w/ I-485',
    details: 'Form I-131 (Advance Parole Travel Document): no additional cost when filed with a pending I-485.',
  },
  {
    title: 'Form I-129F (Fiancé Petition)',
    cost: '$675',
    details: 'Form I-129F (Fiancé Petition): $675. Government fees shift periodically, and certain categories carry additional statutory fees.',
  },
  {
    title: 'Form I-912 Fee Waivers',
    cost: 'Income ≤ 150% FPL',
    details: 'Available for select forms when household income falls at or below 150 percent of the Federal Poverty Guidelines.',
  },
  {
    title: 'Reduced Naturalization Fee',
    cost: 'Income ≤ 400% FPL',
    details: 'Applicants with household income up to 400 percent of the Federal Poverty Guidelines may qualify for a reduced N-400 fee.',
  },
];

const FilingFeesSection = ({
  tagline = '2026 GOVERNMENT FILING FEES',
  title = 'USCIS Filing Fees and Waivers for 2026 Immigration Applicants',
  description = 'Government filing fees are a real cost of any immigration case, and they\'re separate from whatever an attorney charges. The figures below reflect current USCIS fees, though we always confirm the exact total for your specific forms before filing anything.',
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
