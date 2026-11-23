'use client';
import React from 'react';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const rows = [
  {
    feature: 'Pre filing risk review',
    others: 'Forms checklist',
    tripLaw: 'Written risk review and filing recommendation',
  },
  {
    feature: 'Job description',
    others: 'Standard template',
    tripLaw: 'Rewritten with the hiring manager to prove specialty occupation',
  },
  {
    feature: 'Wage strategy',
    others: 'Database lookup',
    tripLaw: 'Wage level planning with market data for registration and LCA',
  },
  {
    feature: 'RFE response',
    others: 'Standard response',
    tripLaw: 'Brief style response with exhibits and expert support',
  },
  {
    feature: 'Amendments and transfers',
    others: 'Advice when asked',
    tripLaw: 'Proactive tracking and filing recommendations',
  },
  {
    feature: 'Green card planning',
    others: 'Mentioned',
    tripLaw: 'Mapped from day one through PERM, I 140 and adjustment',
  },
  {
    feature: 'Stamping and travel support',
    others: 'Limited',
    tripLaw: 'Document lists, interview prep and re entry planning',
  },
  {
    feature: 'Fee transparency',
    others: 'Quotes vary',
    tripLaw: 'Written quote covering attorney and government fees',
  },
];

const ComparisonSection = () => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#061224] text-white overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.2] mb-4 ${bitter.className}`}>
            Trip Law vs. Other Legal Firms
          </h2>
          <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />
          <p className="text-slate-300 text-base sm:text-lg font-medium">
            Compare your options on the points below, because each one affects the outcome.
          </p>
        </div>

        <div className="overflow-x-auto max-w-5xl mx-auto rounded-2xl border border-slate-800 shadow-2xl bg-[#0B1829]">
          <table className="w-full min-w-[620px] text-left border-collapse">
            <thead>
              <tr className="bg-[#040B17] text-white border-b border-slate-800">
                <th className="py-5 px-6 font-bold text-base sm:text-lg w-1/3">
                  Point
                </th>
                <th className="py-5 px-6 font-bold text-base sm:text-lg w-1/3 text-slate-300">
                  Other Law firm
                </th>
                <th className="py-5 px-6 font-bold text-base sm:text-lg w-1/3 bg-red-700 text-white">
                  Trip Law
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-sm sm:text-base">
              {rows.map((row, idx) => (
                <tr key={row.feature} className={idx % 2 === 0 ? 'bg-[#0B1829]' : 'bg-[#091424]'}>
                  <td className="py-4 px-6 font-bold text-white">
                    {row.feature}
                  </td>
                  <td className="py-4 px-6 text-slate-400">
                    {row.others}
                  </td>
                  <td className="py-4 px-6 text-white font-medium bg-red-950/20">
                    <div className="flex items-start gap-2">
                      <span className="text-red-400 font-bold">✓</span>
                      <span>{row.tripLaw}</span>
                    </div>
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

export default ComparisonSection;
