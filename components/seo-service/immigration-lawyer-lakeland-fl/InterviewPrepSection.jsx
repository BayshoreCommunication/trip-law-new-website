'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultSteps = [
  {
    number: '01',
    title: 'Reviewing Your Immigration History',
    description:
      'Every case starts with a full look at prior filings, entries, exits, and any past contact with USCIS or immigration court, so nothing surprises the case later on. This review turns up details clients often didn\'t think were relevant, an old visa application, a brief unauthorized entry years back, and those details need to be accounted for in whatever gets filed now.',
    icon: (
      <svg className="w-7 h-7 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    isImageLeft: true,
  },
  {
    number: '02',
    title: 'Choosing the Right Immigration Strategy',
    description:
      'Family, employment, humanitarian, and defensive strategies each come with their own timeline and evidence requirements, and picking the right one from the start avoids filings that go nowhere. More than one path is often technically available, and choosing the one with the strongest evidence and the most realistic timeline is what actually moves a case forward faster.',
    icon: (
      <svg className="w-7 h-7 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    isImageLeft: false,
  },
  {
    number: '03',
    title: 'Preparing Forms and Supporting Evidence',
    description:
      'Forms get completed to match the evidence exactly, with civil documents, financial records, and affidavits organized so whoever reviews the file at USCIS isn\'t left guessing at anything. A clearly organized filing signals that a case was actually prepared with care, which tends to reduce the odds of an unnecessary Request for Evidence.',
    icon: (
      <svg className="w-7 h-7 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    isImageLeft: true,
  },
];

const InterviewPrepSection = ({
  tagline = 'CASE PREPARATION',
  title = 'How a Lakeland Immigration Lawyer Builds a Strong USCIS Case',
  description = 'A strong case gets built long before it ever reaches someone\'s desk at USCIS. Here\'s how we approach every case that comes through our office.',
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
                      Step {step.number} — Lakeland FL Immigration
                    </span>
                    <span className="text-slate-400 font-mono text-xs">USCIS Preparation</span>
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
                    <span>Trip Law Strategy</span>
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
