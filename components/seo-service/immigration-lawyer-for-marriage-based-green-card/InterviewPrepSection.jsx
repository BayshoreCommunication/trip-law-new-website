'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultSteps = [
  {
    number: '01',
    title: 'Application and Background Review',
    description:
      'Trip Law’s legal team goes through your submitted documents and previous immigration filing line by line carefully. Our immigration lawyer identifies potential issues early. We ensure that all your answers match your original written statements perfectly. It is crucial because USCIS officers frequently compare records from different government databases. If changes like new home or work occurred after filing, our attorney guides on presenting them during the interview.',
    icon: (
      <svg className="w-7 h-7 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    isImageLeft: true,
  },
  {
    number: '02',
    title: 'Mock Interviews and Question Rehearsals',
    description:
      'We conduct realistic practice interviews to help reduce your anxiety and stress. Attorneys ask the exact types of personal questions officers use during reviews. This preparation helps you speak clearly about your shared history and married life. Interview preparation usually includes daily routines, family ties, key dates, employment, travel and future plans.',
    icon: (
      <svg className="w-7 h-7 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    isImageLeft: false,
  },
  {
    number: '03',
    title: 'Organize Evidence of Shared Life',
    description:
      'Couples must compile their family photos and documents into neat binders carefully. Organized financial records, photographs, insurance policies, tax returns, travel history, leases, utility bills, children\'s records and other supporting evidence. Our diligent lawyers review these materials to ensure they show an active life. An organized presentation makes a very positive impression on the interviewing officer.',
    icon: (
      <svg className="w-7 h-7 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    isImageLeft: true,
  },
  {
    number: '04',
    title: 'Strategizing for Red Flags',
    description:
      'Unique marital circumstances can sometimes trigger immediate suspicion from the reviewing officer. Situations includes short dating periods, cultural differences or separate residences because of employment often require additional explanation. Fortunately, our legal counsel creates a proactive strategy to address these issues. Having specialized guidance ensures these potential problems do not cause a denial.',
    icon: (
      <svg className="w-7 h-7 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    isImageLeft: false,
  },
  {
    number: '05',
    title: 'Behavioral and Etiquette Coaching',
    description:
      'Couples must learn how to interact professionally with government officers during appointments. Our attentive attorneys provide valuable advice about proper body language and etiquette. Simple adjustments can help your presentation go smoothly and reduce overall stress.',
    icon: (
      <svg className="w-7 h-7 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    isImageLeft: true,
  },
  {
    number: '06',
    title: 'Deciding on Attorney Attendance',
    description:
      'Attending your final immigration interview on your own can feel overwhelming and stressful. Having dedicated immigration lawyer by your side provides complete peace of mind. We protect your legal rights if the officer becomes overly aggressive or unfair.',
    icon: (
      <svg className="w-7 h-7 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    isImageLeft: false,
  },
];

const InterviewPrepSection = ({
  tagline = 'INTERVIEW PREPARATION',
  title = 'How Trip Immigration Lawyer Prepares Married Couples for Green Card Interview',
  description = 'Marriage based green card interview allows a USCIS officer to directly assess your paperwork. With good preparation couples can respond with confidence and consistently with evidence. USCIS emphasizes thorough screening of marriage applications to detect fraud or check legitimacy.',
  steps = defaultSteps,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-16 bg-[#FCFDFE] text-slate-800 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        
        {/* Section Top Header */}
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

        {/* 6 Alternating Zig-Zag Preparation Steps */}
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
                {/* Graphic Card Block */}
                <div
                  className={`lg:col-span-6 w-full h-[240px] sm:h-[280px] rounded-3xl overflow-hidden relative shadow-xl border border-slate-200/80 bg-gradient-to-br from-[#0B1829] via-[#1E293B] to-[#0F172A] p-8 text-white flex flex-col justify-between ${
                    isLeft ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="flex items-center justify-between z-10">
                    <span className="text-xs font-bold text-red-400 uppercase tracking-widest">
                      Step {step.number} — Marriage Green Card
                    </span>
                    <span className="text-slate-400 font-mono text-xs">USCIS Interview</span>
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
                    <span>Trip Law Representation</span>
                    <span className="text-red-400 font-bold">Attorney Guided</span>
                  </div>
                </div>

                {/* Content Block */}
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
