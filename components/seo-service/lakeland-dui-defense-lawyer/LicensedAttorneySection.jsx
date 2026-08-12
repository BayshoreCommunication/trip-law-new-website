'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const LicensedAttorneySection = ({
  tagline = 'LICENSED TRIAL ATTORNEY',
  title = 'Trip Law Puts a Licensed Trial Attorney on Every Polk County DUI Case',
  description = 'Accused drivers need skilled representation from an lakeland dui defense lawyer inside local courts. Trip Law assigns a licensed trial attorney to handle every local case. Local motorists receive dedicated attention from an experienced, highly aggressive trial lawyer. Our legal team works directly with clients to prepare for court hearings. This direct connection ensures that a strategic defense plan is implemented immediately.',
}) => {
  return (
    <section className="relative w-full py-16 lg:py-20 bg-[#FAFBFD] text-slate-800 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl shadow-slate-200/80 border border-slate-100 flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-red-700 font-bold text-xs sm:text-sm tracking-widest uppercase">
              {tagline}
            </span>
            <div className="h-[2px] w-12 bg-red-700 rounded-full" />
          </div>

          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1829] tracking-tight leading-[1.18] mb-6 ${bitter.className}`}>
            {title}
          </h2>

          <div className="h-[3px] w-16 bg-red-700 rounded-full mb-6" />

          <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LicensedAttorneySection;
