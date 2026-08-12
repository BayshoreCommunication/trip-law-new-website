'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultSteps = [
  {
    number: '01',
    title: 'Review Charges and Rights',
    description:
      'Trip Law starts by reviewing every charge, citation, affidavit and supporting document. This review explains the allegations, possible penalties and constitutional rights available throughout the case. The legal team also identifies immediate deadlines affecting court proceedings and driving privileges before important opportunities expire.',
    icon: (
      <svg className="w-7 h-7 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    isImageLeft: true,
  },
  {
    number: '02',
    title: 'Pre enter a Plea',
    description:
      'Entering the proper plea affects how the case moves through the court system. Trip Law discusses the available options before any formal plea occurs during arraignment. Every recommendation considers evidence, procedural issues and client\'s long term objectives.',
    icon: (
      <svg className="w-7 h-7 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    isImageLeft: false,
  },
  {
    number: '03',
    title: 'Negotiate Bail or Release Conditions',
    description:
      'Some clients face bond conditions limiting travel, alcohol use even future driving privileges. Trip Law reviews those restrictions and requests reasonable modifications whenever appropriate. Adjusting unnecessary release conditions often helps clients maintain employment and family responsibilities while the case continues.',
    icon: (
      <svg className="w-7 h-7 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    isImageLeft: true,
  },
];

const InterviewPrepSection = ({
  tagline = 'COURT PREPARATION',
  title = 'How Trip Law Prepares Clients for Arraignment and Pretrial Hearings',
  description = 'Early trial planning helps organize evidence and identify legal issues for each hearing. Our Lakeland DUI lawyer works through every stage instead of reacting after deadlines.',
  steps = defaultSteps,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-16 bg-[#FCFDFE] text-slate-800 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-16 lg:mb-20">
          <div className="max-w-3xl flex flex-col items-start text-left">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-red-700 font-bold text-xs sm:text-sm tracking-widest uppercase">
                {tagline}
              </span>
              <div className="h-[2px] w-10 bg-red-700 rounded-full" />
            </div>
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1829] tracking-tight leading-[1.18] ${bitter.className}`}>
              {title}
            </h2>
          </div>

          <div className="lg:max-w-md">
            <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-10 lg:gap-14">
          {steps.map((step, idx) => {
            const isLeft = step.isImageLeft;

            return (
              <motion.div
                key={step.number || idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.05, ease: 'easeOut' }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                <div
                  className={`lg:col-span-6 w-full h-[240px] sm:h-[280px] rounded-3xl overflow-hidden relative shadow-xl border border-slate-200/80 bg-gradient-to-br from-[#0B1829] via-[#1E293B] to-[#0F172A] p-8 text-white flex flex-col justify-between ${
                    isLeft ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="flex items-center justify-between z-10">
                    <span className="text-xs font-bold text-red-400 uppercase tracking-widest">
                      Step {step.number} — Lakeland DUI Defense
                    </span>
                    <span className="text-slate-400 font-mono text-xs">Court Preparation</span>
                  </div>

                  <div className="my-auto z-10">
                    <h4 className={`text-2xl font-bold text-white mb-2 ${bitter.className}`}>
                      {step.title}
                    </h4>
                    <p className="text-xs text-slate-300 line-clamp-2">
                      {step.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-400 z-10 pt-2 border-t border-slate-700/80">
                    <span>Trip Law Defense Strategy</span>
                    <span className="text-red-400 font-bold">Attorney Guided</span>
                  </div>
                </div>

                <div
                  className={`lg:col-span-6 flex flex-col items-start text-left ${
                    isLeft ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-red-700/10 border border-red-700/20 flex items-center justify-center flex-shrink-0">
                      {step.icon}
                    </div>
                    <span className={`text-4xl sm:text-5xl font-bold text-red-700 ${bitter.className}`}>
                      {step.number}
                    </span>
                  </div>

                  <h3 className={`text-2xl sm:text-3xl font-bold text-[#0B1829] leading-snug mb-4 ${bitter.className}`}>
                    {step.title}
                  </h3>

                  <div className="h-[2px] w-12 bg-red-700 rounded-full mb-4" />

                  <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default InterviewPrepSection;
