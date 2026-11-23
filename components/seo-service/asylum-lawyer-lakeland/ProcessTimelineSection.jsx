'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const timeline = [
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

const ProcessTimelineSection = () => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#061224] text-white overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.2] mb-4 ${bitter.className}`}>
            Asylum Processing Time and Common Delays
          </h2>
          <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Your current waiting time depends on where you live, your local office, the type of case you have and the number of people filing for asylum. Always visit the USCIS website for up to date wait times.
          </p>
        </div>

        <div className="hidden md:block overflow-x-auto max-w-6xl mx-auto">
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
                  key={item.stage}
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

        <div className="grid grid-cols-1 gap-4 md:hidden">
          {timeline.map((item, idx) => (
            <motion.div
              key={item.stage}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="bg-[#0B1829] border border-slate-800 rounded-xl p-5 shadow-lg space-y-2.5"
            >
              <span className="text-xs font-bold text-red-400 block">
                0{idx + 1}
              </span>
              <div className={`text-base font-bold text-white ${bitter.className}`}>
                {item.stage}
              </div>
              <p className="text-slate-200 text-sm leading-relaxed">
                {item.happens}
              </p>
              <p className="text-slate-400 text-xs leading-relaxed">
                {item.delay}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimelineSection;
