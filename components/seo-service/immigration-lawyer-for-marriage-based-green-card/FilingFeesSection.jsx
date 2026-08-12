'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultFees = [
  'The Form I-130 petition costs six hundred twenty five dollars when submitted online.',
  'Paper filing for Form I-130 requires a fee of six hundred seventy five dollars.',
  'The Form I-485 adjustment application fee is currently one thousand four hundred forty dollars. Child under 14 filing with parent costs nine hundred fifty dollars.',
  'Optional work permit applications now cost an additional two hundred sixty dollars extra.',
  'The travel document application requires a separate payment of six hundred thirty dollars.',
  'The Form I-693 for medical examination usually costs two hundred fifty dollars to six hundred fifty dollars.',
  'Consular processing requires a three hundred twenty five dollar fee for the DS-260 form.',
  'The National Visa Center charges one hundred twenty dollars to review financial affidavits.',
  'Applicants must pay a final immigrant fee of two hundred thirty five dollars online.',
];

const FilingFeesSection = ({
  tagline = '2026 USCIS FEES & COSTS',
  title = 'Marriage Based Green Card Filing Fees and USCIS Costs for 2026 Applicants',
  description = 'Filing costs depend on your processing route for example Adjustment of Status in the U.S. or Consular Processing abroad. Always check the latest fee schedule before sending payment as USCIS updates fees regularly.',
  fees = defaultFees,
}) => {
  return (
    <section className="w-full py-16 lg:py-24 bg-[#FAFBFD] text-slate-800 overflow-hidden">
      <div className="w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col items-center text-center mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-[2px] w-12 sm:w-16 bg-red-700 rounded-full" />
            <span className="text-red-700 font-bold text-xs sm:text-sm tracking-widest uppercase">
              {tagline}
            </span>
            <span className="text-red-700 font-bold text-xs sm:text-sm">★</span>
            <div className="h-[2px] w-12 sm:w-16 bg-red-700 rounded-full" />
          </div>

          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1829] tracking-tight mb-4 ${bitter.className}`}>
            {title}
          </h2>

          <p className="text-slate-600 font-normal text-base sm:text-lg max-w-3xl leading-relaxed">
            {description}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {fees.map((fee, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:border-red-700/40 transition-all duration-300 flex items-start gap-4"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-700/10 border border-red-700/30 flex items-center justify-center text-red-700 font-bold text-sm">
                $
              </div>
              <p className="text-slate-700 text-base leading-relaxed font-medium">
                {fee}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilingFeesSection;
