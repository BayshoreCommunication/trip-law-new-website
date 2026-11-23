'use client';
import React from 'react';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const feeRows = [
  {
    category: 'Electronic Registration',
    standard: '$215',
    small: '$215',
    nonprofit: '$215',
    paidBy: 'Employer',
  },
  {
    category: 'Form I 129 Base Filing',
    standard: '$780',
    small: '$460',
    nonprofit: '$460',
    paidBy: 'Employer',
  },
  {
    category: 'ACWIA Training Fee',
    standard: '$1,500',
    small: '$750',
    nonprofit: '$0',
    paidBy: 'Employer',
  },
  {
    category: 'Fraud Detection Fee',
    standard: '$500',
    small: '$500',
    nonprofit: '$0 to $500',
    paidBy: 'Employer',
  },
  {
    category: 'Asylum Program Fee',
    standard: '$600',
    small: '$300',
    nonprofit: '$0',
    paidBy: 'Employer',
  },
  {
    category: 'Premium Processing (Optional)',
    standard: '$2,965',
    small: '$2,965',
    nonprofit: '$2,965',
    paidBy: 'Employer or Worker',
  },
  {
    category: 'Labor Condition Application',
    standard: '$0',
    small: '$0',
    nonprofit: '$0',
    paidBy: 'Employer',
  },
];

const FeesWaiverSection = () => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#061224] text-white overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.2] mb-4 ${bitter.className}`}>
            H1B Costs and Government Fees
          </h2>
          <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Government fees depend on employer size and several apply to every petition. However if you have 50 or more employees in the U.S. and hold H 1B or L 1 visas, you owe an extra $4,000 under Public Law 114 113. It applies to initial filings and transfers. Plan for it in your budget before you file.
          </p>
        </div>

        <div className="overflow-x-auto max-w-5xl mx-auto rounded-2xl border border-slate-800 shadow-2xl bg-[#0B1829]">
          <table className="w-full min-w-[680px] text-left border-collapse">
            <thead>
              <tr className="bg-[#040B17] border-b border-slate-800 text-white">
                <th className="py-5 px-6 font-bold text-sm sm:text-base">Fee Category</th>
                <th className="py-5 px-6 font-bold text-sm sm:text-base">Standard Employer (26+ Staff)</th>
                <th className="py-5 px-6 font-bold text-sm sm:text-base">Small Employer (≤25 Staff)</th>
                <th className="py-5 px-6 font-bold text-sm sm:text-base">501(c)(3) Nonprofit</th>
                <th className="py-5 px-6 font-bold text-sm sm:text-base bg-red-700 text-white">Paid By</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-sm sm:text-base">
              {feeRows.map((row, idx) => (
                <tr key={row.category} className={idx % 2 === 0 ? 'bg-[#0B1829]' : 'bg-[#091424]'}>
                  <td className="py-4 px-6 font-bold text-white">
                    {row.category}
                  </td>
                  <td className="py-4 px-6 text-slate-300 font-semibold">
                    {row.standard}
                  </td>
                  <td className="py-4 px-6 text-slate-300 font-semibold">
                    {row.small}
                  </td>
                  <td className="py-4 px-6 text-slate-300 font-semibold">
                    {row.nonprofit}
                  </td>
                  <td className="py-4 px-6 font-bold text-red-400 bg-red-950/20">
                    {row.paidBy}
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
