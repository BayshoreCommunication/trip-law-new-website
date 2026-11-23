'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const feeRows = [
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

const FeesWaiverSection = () => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#F8FAFC] text-slate-800 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1829] tracking-tight leading-[1.2] mb-4 ${bitter.className}`}>
            U Visa Application Costs
          </h2>
          <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            USCIS fees and immigration filing rules can change. Always verify the current USCIS Fee Schedule and the instructions for each form.
          </p>
        </div>

        <div className="hidden md:block overflow-x-auto max-w-5xl mx-auto">
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
                  Verified Status &amp; Potential Exemptions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-sm sm:text-base">
              {feeRows.map((row, idx) => (
                <tr
                  key={row.category}
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

        <div className="grid grid-cols-1 gap-4 md:hidden">
          {feeRows.map((row, idx) => (
            <motion.div
              key={row.category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="bg-white border border-slate-200 rounded-xl p-5 shadow-md"
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className={`font-bold text-[#0B1829] ${bitter.className}`}>
                  {row.category}
                </span>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-red-700/10 text-red-700 whitespace-nowrap">
                  {row.amount}
                </span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                {row.status}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeesWaiverSection;
