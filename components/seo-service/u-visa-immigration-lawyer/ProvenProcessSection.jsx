'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const processSteps = [
  {
    stage: 'Initial consultation',
    expectation: 'Discuss the incident, available records, immigration concerns and possible eligibility.',
  },
  {
    stage: 'Case assessment',
    expectation: 'Review your immigration history, applicable requirements and potential filing issues.',
  },
  {
    stage: 'Evidence and declaration preparation',
    expectation: 'Organize supporting records, prepare your personal declaration and identify missing evidence.',
  },
  {
    stage: 'Law enforcement certification request',
    expectation: 'Identify the appropriate agency and prepare the request for Form I 918, Supplement B. Agency response times vary and may extend beyond this period.',
  },
  {
    stage: 'Petition preparation',
    expectation: 'Prepare Form I 918 and applicable supporting forms. Timing depends on the available evidence and the requirements for a complete filing.',
  },
  {
    stage: 'Filing and initial follow up',
    expectation: 'Submit the petition and review USCIS receipt notices, biometrics instructions and any additional correspondence.',
  },
  {
    stage: 'USCIS review',
    expectation: 'Monitor case updates and explain any applicable bona fide determination, waiting list developments or requests for evidence.',
  },
  {
    stage: 'Decision and next steps',
    expectation: 'Review the outcome and discuss relevant options, including employment authorization or a possible green card application when eligible.',
  },
];

const ProvenProcessSection = () => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#030914] text-white overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.2] mb-4 ${bitter.className}`}>
            What to Expect When You Hire Trip Law
          </h2>
          <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Your actual schedule depends on document availability, case complexity, law enforcement certification and government processing.
          </p>
        </div>

        <div className="hidden md:block overflow-x-auto max-w-5xl mx-auto rounded-2xl border border-slate-800 shadow-2xl bg-[#0B1829]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#040B17] border-b border-slate-800 text-xs uppercase tracking-wider text-red-400 font-bold">
                <th className="py-4 px-6 w-1/3">Stage</th>
                <th className="py-4 px-6 w-2/3">What You Can Expect</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-sm sm:text-base">
              {processSteps.map((item) => (
                <tr key={item.stage} className="hover:bg-slate-800/40 transition-colors">
                  <td className={`py-4 px-6 font-bold text-white ${bitter.className}`}>
                    {item.stage}
                  </td>
                  <td className="py-4 px-6 text-slate-300 leading-relaxed">
                    {item.expectation}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 gap-4 md:hidden">
          {processSteps.map((item, idx) => (
            <motion.div
              key={item.stage}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="bg-[#091424] border border-slate-700/60 rounded-2xl p-6 shadow-xl"
            >
              <div className="inline-block px-3 py-1 bg-red-700 text-white font-bold text-xs tracking-wider uppercase rounded mb-3">
                0{idx + 1}
              </div>
              <div className={`text-lg font-bold text-white mb-2 ${bitter.className}`}>
                {item.stage}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                {item.expectation}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProvenProcessSection;
