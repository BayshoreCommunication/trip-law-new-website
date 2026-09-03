'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const ComparisonSection = ({
  title = "What Makes Trip Law Different From Other Firm",
  subtitle = "What you get",
  rows = [
    {
      feature: 'Attorney access',
      tripLaw: 'Licensed attorney on every case, start to finish',
      others: 'Often paralegal led, attorney reviews only at filing',
    },
    {
      feature: 'Pricing',
      tripLaw: 'Clear flat fee before you sign anything',
      others: 'Hourly billing with unclear total cost',
    },
    {
      feature: 'Local focus',
      tripLaw: 'Based in Lakeland, familiar with Polk County employers',
      others: 'Regional or national firm with no local presence',
    },
    {
      feature: 'Case tracking',
      tripLaw: 'Live status updates through a client portal',
      others: 'Email updates only, often delayed',
    },
    {
      feature: 'RFE experience',
      tripLaw: 'Direct experience across L1A, L1B and new office RFEs',
      others: 'Generalist immigration practice, less L1 specific pattern data',
    },
  ],
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#F8FAFC] text-slate-800 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <span className="text-red-700 font-bold text-xs sm:text-sm tracking-widest uppercase mb-3">
            COMPARISON TABLE
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1829] tracking-tight leading-[1.2] mb-4 ${bitter.className}`}>
            {title}
          </h2>
          <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />
          <p className="text-slate-600 text-base sm:text-lg font-semibold">
            {subtitle}
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
            <thead>
              <tr className="bg-[#0B1829] text-white">
                <th className="py-5 px-6 font-bold text-base sm:text-lg w-1/3">
                  What you get
                </th>
                <th className="py-5 px-6 font-bold text-base sm:text-lg w-1/3 bg-red-700 text-white">
                  Trip Law, P.A.
                </th>
                <th className="py-5 px-6 font-bold text-base sm:text-lg w-1/3 text-slate-300">
                  Other immigration firm
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
