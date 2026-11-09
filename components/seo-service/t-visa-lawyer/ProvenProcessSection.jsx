'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultSteps = [
  {
    step: 'Phase 1',
    title: 'Initial consultation',
    desc: 'Confidential case review, legal strategy intake, filing preparation, explain fees and case strategy',
  },
  {
    step: 'Phase 2',
    title: 'Evidence preparation',
    desc: 'Document collection, personal declaration drafting and evidence gathering',
  },
  {
    step: 'Phase 3',
    title: 'Form preparation',
    desc: 'Form I 914, Form I 192 waiver and supporting exhibit assembly',
  },
  {
    step: 'Phase 4',
    title: 'Final review and filing',
    desc: 'Final application review, secure signature execution and USCIS filing',
  },
  {
    step: 'Phase 5',
    title: 'Follow up',
    desc: 'Monitoring case progress, tracking BFD notices and responding to USCIS RFEs',
  },
  {
    step: 'Phase 6',
    title: 'Decision and next steps',
    desc: 'Assisting with EAD delivery, Social Security setup and derivative family filings',
  },
];

const ProvenProcessSection = ({
  tagline = 'OUR LEGAL PROCESS',
  title = 'What to Expect When You Hire Trip Law',
  description = 'This timeline shows how our legal team works on your case. Exact processing dates depend on document readiness and USCIS review speed.',
  steps = defaultSteps,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#030914] text-white overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-[#091424] border border-slate-700/60 hover:border-red-700/60 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div>
                <div className="inline-block px-3 py-1 bg-red-700 text-white font-bold text-xs tracking-wider uppercase rounded mb-4">
                  {item.step}
                </div>
                <h3 className={`text-xl font-bold text-white mb-3 ${bitter.className}`}>
                  {item.title}
                </h3>
                <p className="text-slate-300 text-base leading-relaxed">
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

