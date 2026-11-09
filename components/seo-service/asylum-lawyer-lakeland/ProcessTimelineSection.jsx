'use client';
import React from 'react';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultTimeline = [
  {
    stage: 'Filing Form I 589',
    happens: 'USCIS or the court logs your application and issues a receipt notice',
    delay: 'Incomplete forms, missing signatures, wrong filing location',
  },
  {
    stage: 'Biometrics Appointment',
    happens: 'USCIS collects fingerprints and runs background checks',
    delay: 'High appointment demand, rescheduled notices, flagged records needing extra review',
  },
  {
    stage: 'Interview or Hearing Scheduling',
    happens: 'USCIS or the court places your case on the docket',
    delay: 'Backlogged dockets, staffing shortages, your local office’s current caseload',
  },
  {
    stage: 'Asylum Interview or Court Hearing',
    happens: 'An officer or judge reviews your testimony and evidence',
    delay: 'Interpreter availability, last minute evidence submissions, continuances granted by the court',
  },
  {
    stage: 'Decision',
    happens: 'USCIS or the judge issues a ruling',
    delay: 'Additional security checks, requests for more evidence, administrative closure',
  },
  {
    stage: 'Post Decision Steps',
    happens: 'You receive status, file an appeal or pursue alternative relief',
    delay: 'Appeal deadlines, additional filings with the Board of Immigration Appeals',
  },
];

const ProcessTimelineSection = ({
  badgeText = 'TIMELINE & DELAYS',
  title = 'Asylum Processing Time and Common Delays',
  subtitle = 'Your current waiting time depends on where you live, your local office, the type of case you have and the number of people filing for asylum. Always visit the USCIS website for up to date wait times.',
  timeline = defaultTimeline,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#061224] text-white overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        {/* Section Header */}
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

        {/* Timeline Table */}
        <div className="overflow-x-auto max-w-6xl mx-auto">
          <table className="w-full text-left border-collapse bg-[#0B1829] rounded-2xl shadow-2xl overflow-hidden border border-slate-700/80">
            <thead>
              <tr className="bg-slate-900 border-b border-slate-700/80">
                <th className="py-5 px-6 font-bold text-base sm:text-lg text-white w-1/4">
                  Stage
                </th>
                <th className="py-5 px-6 font-bold text-base sm:text-lg text-red-400 w-3/8">
                  What Happens
                </th>
                <th className="py-5 px-6 font-bold text-base sm:text-lg text-slate-300 w-3/8">
                  Common Causes of Delay
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-sm sm:text-base">
              {timeline.map((item, idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? 'bg-[#0B1829]' : 'bg-[#081220]'}
                >
                  <td className="py-4 px-6 font-bold text-white">
                    {item.stage}
                  </td>
                  <td className="py-4 px-6 text-slate-200 leading-relaxed">
                    {item.happens}
                  </td>
                  <td className="py-4 px-6 text-slate-400 leading-relaxed">
                    {item.delay}
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

export default ProcessTimelineSection;

