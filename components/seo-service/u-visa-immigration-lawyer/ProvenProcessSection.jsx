'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultSteps = [
  {
    step: 'Stage 1',
    title: 'Initial consultation',
    desc: 'Discuss the incident, available records, immigration concerns and possible eligibility.',
  },
  {
    step: 'Stage 2',
    title: 'Case assessment',
    desc: 'Review your immigration history, applicable requirements and potential filing issues.',
  },
  {
    step: 'Stage 3',
    title: 'Evidence and declaration preparation',
    desc: 'Organize supporting records, prepare your personal declaration and identify missing evidence.',
  },
  {
    step: 'Stage 4',
    title: 'Law enforcement certification request',
    desc: 'Identify the appropriate agency and prepare the request for Form I 918, Supplement B. Agency response times vary and may extend beyond this period.',
  },
  {
    step: 'Stage 5',
    title: 'Petition preparation',
    desc: 'Prepare Form I 918 and applicable supporting forms. Timing depends on the available evidence and the requirements for a complete filing.',
  },
  {
    step: 'Stage 6',
    title: 'Filing and initial follow up',
    desc: 'Submit the petition and review USCIS receipt notices, biometrics instructions and any additional correspondence.',
  },
  {
    step: 'Stage 7',
    title: 'USCIS review',
    desc: 'Monitor case updates and explain any applicable bona fide determination, waiting list developments or requests for evidence.',
  },
  {
    step: 'Stage 8',
    title: 'Decision and next steps',
    desc: 'Review the outcome and discuss relevant options, including employment authorization or a possible green card application when eligible.',
  },
];

const ProvenProcessSection = ({
  tagline = 'ATTORNEY GUIDED WORKFLOW',
  title = 'What to Expect When You Hire Trip Law',
  description = 'Your actual schedule depends on document availability, case complexity, law enforcement certification and government processing.',
  steps = defaultSteps,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#030914] text-white overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <span className="text-red-500 font-bold text-xs sm:text-sm tracking-widest uppercase mb-3">
            {tagline}
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.2] mb-4 ${bitter.className}`}>
            {title}
          </h2>
          <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* 8 Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="bg-[#091424] border border-slate-700/60 hover:border-red-700/60 rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div>
                <div className="inline-block px-3 py-1 bg-red-700 text-white font-bold text-xs tracking-wider uppercase rounded mb-4">
                  {item.step}
                </div>
                <h3 className={`text-lg font-bold text-white mb-3 ${bitter.className}`}>
                  {item.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProvenProcessSection;

