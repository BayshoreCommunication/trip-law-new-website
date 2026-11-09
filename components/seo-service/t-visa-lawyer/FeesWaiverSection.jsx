'use client';
import React from 'react';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultFeeRows = [
  {
    category: 'Form I 914, principal T visa application',
    amount: '$0 (Fee Exempt)',
    highlight: true,
  },
  {
    category: 'Form I 914 Supplement A',
    amount: 'Check current fee schedule (derivative T application fees are generally exempt)',
    highlight: false,
  },
  {
    category: 'Form I 914 Supplement B',
    amount: 'Optional law enforcement declaration (no separate applicant filing fee)',
    highlight: false,
  },
  {
    category: 'Form I 192 Inadmissibility Waiver',
    amount: '$0 (Automatically Exempt)',
    highlight: true,
  },
  {
    category: 'Form I 765 Work Authorization',
    amount: '$0 (Fee Exempt)',
    highlight: true,
  },
  {
    category: 'Medical Examination Fees',
    amount: 'Varies ($200 to $500)',
    highlight: false,
  },
  {
    category: 'Translation, record retrieval or other supporting services',
    amount: 'Varies ($100 to $1,500+) by case and provider',
    highlight: false,
  },
];

const FeesWaiverSection = ({
  tagline = 'USCIS FEES & APPLICATION COSTS',
  title = 'T Visa Application Costs',
  description = 'total cost depends on services required, forms involved and any additional expenses. USCIS fees and exemptions are changeable. Confirm current USCIS fee schedule.',
  feeRows = defaultFeeRows,
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
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* Table View */}
        <div className="overflow-x-auto max-w-4xl mx-auto">
          <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
            <thead>
              <tr className="bg-[#0B1829] text-white">
                <th className="py-5 px-6 font-bold text-sm sm:text-base w-3/5">
                  Fee category
                </th>
                <th className="py-5 px-6 font-bold text-sm sm:text-base w-2/5 bg-red-700 text-white">
                  Official fee amount
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
                  <td className="py-4 px-6 text-slate-800 font-semibold">
                    {row.amount}
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

