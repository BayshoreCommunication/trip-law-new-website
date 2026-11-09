'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultTimelineRows = [
  {
    step: 'Form I 914 Receipt Notice',
    timing: '2 to 4 Weeks',
    note: 'Confirms USCIS received your package and provides tracking number',
  },
  {
    step: 'Biometrics Appointment',
    timing: '1 to 3 Months',
    note: 'Mandatory fingerprints and background checks required',
  },
  {
    step: 'Bona Fide Determination (BFD)',
    timing: 'Heavily Backlogged (Years)',
    note: 'initial review for basic eligibility. If deemed "bona fide," it grants deferred action and work permit eligibility',
  },
  {
    step: 'Potential Request for Evidence (RFE)',
    timing: '3 to 6+ months',
    note: 'if the case lacks sufficient initial corroborating data.',
  },
  {
    step: 'Final Form I 914 Adjudication',
    timing: '34 to 38 Months',
    note: 'Full adjudication grants formal T 1 nonimmigrant status for four years',
  },
  {
    step: 'Online Case Status Updates',
    timing: 'Real time tracking online',
    note: 'Allows monitoring of biometrics, RFEs and decision notices',
  },
  {
    step: 'Address Updates (Form AR 11)',
    timing: 'Within 10 Days of Moving',
    note: 'Must use official alien address update system to protect case mail safety',
  },
];

const ProcessTimelineSection = ({
  badgeText = 'PROCESS TIMELINE',
  title = 'T Visa Processing Time',
  subtitle = 'USCIS processing times change over time and vary by reporting period.',
  timelineRows = defaultTimelineRows,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#061224] text-white overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <span className="text-red-500 font-bold text-xs sm:text-sm tracking-widest uppercase mb-3">
            {badgeText}
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.2] mb-4 ${bitter.className}`}>
            {title}
          </h2>
          <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto max-w-5xl mx-auto rounded-2xl border border-slate-800 shadow-2xl bg-[#0B1829]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#040B17] border-b border-slate-800 text-xs uppercase tracking-wider text-red-400 font-bold">
                <th className="py-4 px-6">Service Stage</th>
                <th className="py-4 px-6">Current USCIS Time Frame Estimate</th>
                <th className="py-4 px-6">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-sm sm:text-base">
              {timelineRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-4 px-6 font-semibold text-white">
                    {row.step}
                  </td>
                  <td className="py-4 px-6 text-red-400 font-medium whitespace-nowrap">
                    {row.timing}
                  </td>
                  <td className="py-4 px-6 text-slate-300">
                    {row.note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {timelineRows.map((row, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="bg-[#0B1829] border border-slate-800 rounded-xl p-5 shadow-lg"
            >
              <div className="flex items-center justify-between gap-3 mb-2">
                <span className="text-xs uppercase tracking-wider font-bold text-red-400">
                  Step 0{idx + 1}
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-red-700/20 text-red-400 border border-red-700/30">
                  {row.timing}
                </span>
              </div>
              <h3 className={`text-base font-bold text-white mb-2 ${bitter.className}`}>
                {row.step}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {row.note}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimelineSection;

