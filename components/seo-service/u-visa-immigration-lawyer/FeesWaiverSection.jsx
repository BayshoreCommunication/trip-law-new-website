'use client';
import React from 'react';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultFeeRows = [
  {
    category: 'Form I 918 Petition',
    amount: '$0 (No Base Fee)',
    status: 'Fee exempt by federal statute',
    highlight: true,
  },
  {
    category: 'Form I 765 Work Authorization',
    amount: '$0 for Initial EAD',
    status: 'Fee exempt for initial filing under BFD or U status',
    highlight: true,
  },
  {
    category: 'Form I 192 Inadmissibility Waiver',
    amount: '$0 (Fee Exempt)',
    status: 'While the standard USCIS fee for this form is $1,100, U visa applicants are automatically fee exempt.',
    highlight: true,
  },
  {
    category: 'Clinical Evaluations & Translations',
    amount: 'Varies by Provider',
    status: 'Out of pocket costs for third party documentation',
    highlight: false,
  },
];

const FeesWaiverSection = ({
  tagline = 'USCIS FEES & APPLICATION COSTS',
  title = 'U Visa Application Costs',
  description = 'USCIS fees and immigration filing rules can change. Always verify the current USCIS Fee Schedule and the instructions for each form.',
  feeRows = defaultFeeRows,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#F8FAFC] text-slate-800 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <span className="text-red-700 font-bold text-xs sm:text-sm tracking-widest uppercase mb-3">
            {tagline}
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1829] tracking-tight leading-[1.2] mb-4 ${bitter.className}`}>
            {title}
          </h2>
          <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* Table View */}
        <div className="overflow-x-auto max-w-5xl mx-auto">
          <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
            <thead>
              <tr className="bg-[#0B1829] text-white">
                <th className="py-5 px-6 font-bold text-sm sm:text-base w-1/3">
                  Expense Category
                </th>
                <th className="py-5 px-6 font-bold text-sm sm:text-base w-1/4 bg-red-700 text-white">
                  Standard Fee Amount
                </th>
                <th className="py-5 px-6 font-bold text-sm sm:text-base w-5/12 text-slate-300">
                  Verified Status & Potential Exemptions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-sm sm:text-base">
              {feeRows.map((row, idx) => (
                <tr
                  key={idx}
                  className={row.highlight ? 'bg-red-50/30' : idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}
                >
                  <td className="py-4 px-6 font-bold text-[#0B1829]">
                    {row.category}
                  </td>
                  <td className="py-4 px-6 text-slate-800 font-semibold whitespace-nowrap">
                    {row.amount}
                  </td>
                  <td className="py-4 px-6 text-slate-600 leading-relaxed">
                    {row.status}
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

export default FeesWaiverSection;

