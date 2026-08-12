'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultFees = [
  {
    title: 'Court costs and fines',
    cost: 'Statutory Fee',
    details: 'Court costs and fines based upon the offense level and court disposition.',
  },
  {
    title: 'DUI school tuition',
    cost: '$330 - $495+',
    details: 'DUI school tuition, Level I registration currently starts around $330, while Level II begins around $495 in Florida.',
  },
  {
    title: 'Ignition interlock installation',
    cost: '$50 - $150',
    details: 'Ignition interlock installation usually costs $50 to $150.',
  },
  {
    title: 'Monthly interlock monitoring',
    cost: '$60 - $130 / mo',
    details: 'Monthly interlock monitoring ranges from $60 to $130 monthly for device rental and reporting.',
  },
  {
    title: 'Calibration visits',
    cost: '$25 - $50 / visit',
    details: 'Calibration is legally required every 30 to 60 days, costing $25 to $50 per visit.',
  },
  {
    title: 'Interlock removal fee',
    cost: '$50 - $130',
    details: 'Interlock removal fee, charged $50 to $130 after successfully completing the required installation period.',
  },
  {
    title: 'Insurance rates (FR-44)',
    cost: 'High Premium Increase',
    details: 'Insurance rates following an FR-44 filing lead to much higher premiums for drivers.',
  },
  {
    title: 'License reinstatement fees',
    cost: '$150 - $500+',
    details: 'License reinstatement fees typically range from one hundred fifty to five hundred dollars. Administrative costs and other required FLHSMV charges add another $130.',
  },
];

const FilingFeesSection = ({
  tagline = '2026 DUI COURT & INTERLOCK COSTS',
  title = 'Lakeland Court Fees and Ignition Interlock Cost You Should Know in 2026',
  description = 'A DUI in Florida often creates expenses extending well beyond court fines.',
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
