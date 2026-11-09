'use client';
import React from 'react';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultRows = [
  {
    feature: 'Pre filing risk review',
    tripLaw: 'Written risk review and filing recommendation',
    others: 'Forms checklist',
  },
  {
    feature: 'Job description',
    tripLaw: 'Rewritten with the hiring manager to prove specialty occupation',
    others: 'Standard template',
  },
  {
    feature: 'Wage strategy',
    tripLaw: 'Wage level planning with market data for registration and LCA',
    others: 'Database lookup',
  },
  {
    feature: 'RFE response',
    tripLaw: 'Brief style response with exhibits and expert support',
    others: 'Standard response',
  },
  {
    feature: 'Amendments and transfers',
    tripLaw: 'Proactive tracking and filing recommendations',
    others: 'Advice when asked',
  },
  {
    feature: 'Green card planning',
    tripLaw: 'Mapped from day one through PERM, I 140 and adjustment',
    others: 'Mentioned',
  },
  {
    feature: 'Stamping and travel support',
    tripLaw: 'Document lists, interview prep and re entry planning',
    others: 'Limited',
  },
  {
    feature: 'Fee transparency',
    tripLaw: 'Written quote covering attorney and government fees',
    others: 'Quotes vary',
  },
];

const ComparisonSection = ({
  tagline = 'COMPARISON TABLE',
  title = 'Trip Law vs. Other Legal Firms',
  subtitle = 'Compare your options on the points below, because each one affects the outcome.',
  rows = defaultRows,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#F8FAFC] text-slate-800 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <span className="text-red-700 font-bold text-xs sm:text-sm tracking-widest uppercase mb-3">
            {tagline}
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1829] tracking-tight leading-[1.2] mb-4 ${bitter.className}`}>
            {title}
          </h2>
          <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />
          <p className="text-slate-600 text-base sm:text-lg font-semibold">
            {subtitle}
          </p>
        </div>

        <div className="overflow-x-auto max-w-5xl mx-auto">
          <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
            <thead>
              <tr className="bg-[#0B1829] text-white">
                <th className="py-5 px-6 font-bold text-base sm:text-lg w-1/3">
                  Point
                </th>
                <th className="py-5 px-6 font-bold text-base sm:text-lg w-1/3 bg-red-700 text-white">
                  Trip Law, P.A.
                </th>
                <th className="py-5 px-6 font-bold text-base sm:text-lg w-1/3 text-slate-300">
                  Other Law firm
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-sm sm:text-base">
              {rows.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="py-4 px-6 font-bold text-[#0B1829]">
                    {row.feature}
                  </td>
                  <td className="py-4 px-6 text-slate-900 font-medium bg-red-50/50">
                    <div className="flex items-start gap-2">
                      <span className="text-red-700 font-bold">✓</span>
                      <span>{row.tripLaw}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-slate-600">
                    {row.others}
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
