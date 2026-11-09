'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultPhases = [
  {
    phase: 'Initial consultation',
    desc: 'Discussion of your circumstances and legal concerns',
  },
  {
    phase: 'Case assessment',
    desc: 'Review of immigration history, eligibility and deadlines',
  },
  {
    phase: 'Evidence preparation',
    desc: 'Review of records, personal declaration and supporting material',
  },
  {
    phase: 'Application preparation',
    desc: 'Drafting and review of required forms',
  },
  {
    phase: 'Filing and case follow up',
    desc: 'Submission, agency notices and procedural updates',
  },
  {
    phase: 'Interview or court preparation',
    desc: 'Preparation based on the route and status of your case',
  },
];

const ProvenProcessSection = ({
  tagline = 'OUR LEGAL PROCESS',
  title = 'What to Expect When You Hire Trip Law',
  description = 'All asylum cases follow a similar process even though no two cases are the same. Below is the typical timeline for what takes place once you hire our firm.',
  phases = defaultPhases,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#030914] text-white overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        {/* Header */}
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

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {phases.map((item, idx) => (
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
                  Phase {idx + 1}
                </div>
                <h3 className={`text-xl font-bold text-white mb-3 ${bitter.className}`}>
                  {item.phase}
                </h3>
                <p className="text-slate-300 text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Phase Table View */}
        <div className="overflow-x-auto rounded-2xl border border-slate-700/60 bg-[#091424] shadow-2xl">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-slate-700 bg-slate-900/80">
                <th className="py-4 px-6 text-sm sm:text-base font-bold text-white w-1/3">Phase</th>
                <th className="py-4 px-6 text-sm sm:text-base font-bold text-red-400 w-2/3">What to Expect</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80">
              {phases.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-4 px-6 text-sm sm:text-base font-semibold text-white">
                    {row.phase}
                  </td>
                  <td className="py-4 px-6 text-sm sm:text-base text-slate-300">
                    {row.desc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ProvenProcessSection;
