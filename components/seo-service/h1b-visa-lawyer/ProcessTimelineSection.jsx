'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultTimelineRows = [
  {
    step: 'Cap registration',
    timing: 'First half of March',
    note: 'Employers enter candidates into the online lottery system',
  },
  {
    step: 'Lottery Results',
    timing: 'By March 31',
    note: 'USCIS notified selected registrants',
  },
  {
    step: 'Cap petition filing',
    timing: 'April 1 to June 30',
    note: 'Active 90 day window to submit the full paper application',
  },
  {
    step: 'LCA certification',
    timing: 'About 7 business days',
    note: 'DOL certifies complete applications',
  },
  {
    step: 'Regular I 129 review',
    timing: 'Several months, varies by service center',
    note: 'Check the USCIS processing times page',
  },
  {
    step: 'Premium processing',
    timing: '15 business days for first action',
    note: 'Speeds up the review for an extra government filing fee',
  },
  {
    step: 'Request for Evidence (RFE)',
    timing: 'Up to 84 days',
    note: 'maximum allowed time to respond if USCIS requests more proof',
  },
  {
    step: 'Transfer to a new employer',
    timing: 'Immediately upon filing',
    note: 'Existing H 1B holders can change jobs once USCIS receives the paperwork',
  },
  {
    step: 'Visa stamping',
    timing: 'Days to many months, by country',
    note: 'Required for workers outside the U.S. at a local embassy or consulate',
  },
];

const ProcessTimelineSection = ({
  badgeText = 'PROCESS TIMELINE',
  title = 'H1B Processing Timeline',
  subtitle = 'Timelines shift with USCIS workload, so we confirm current ranges at your consultation.',
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
                <th className="py-4 px-6">Step</th>
                <th className="py-4 px-6">Typical timing</th>
                <th className="py-4 px-6">Planning note</th>
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
        <div className="md:hidden flex flex-col gap-4">
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
                <span className="font-bold text-white text-base">
                  {row.step}
                </span>
                <span className="text-xs font-bold text-red-400 px-2.5 py-1 rounded bg-red-950/60 border border-red-900/40">
                  {row.timing}
                </span>
              </div>
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

