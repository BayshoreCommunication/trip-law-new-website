'use client';
import React from 'react';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultRows = [
  {
    factor: 'Attorney background',
    tripLaw: 'Federal experience with the Air Force JAG Corps, DEA, ATF, U.S. Department of State and U.S. Attorney’s Office',
    typical: 'Varies by firm, often without direct federal agency experience',
  },
  {
    factor: 'Practice scope',
    tripLaw: 'Immigration and nationality law across all 50 states, territories and Embassies and Consulates abroad',
    typical: 'Often limited to one state or region',
  },
  {
    factor: 'Asylum focus',
    tripLaw: 'Dedicated service under humanitarian based immigration, covering affirmative and defensive cases',
    typical: 'Asylum listed as one service among many unrelated practice areas',
  },
  {
    factor: 'Case preparation',
    tripLaw: 'Direct review of protected grounds, deadlines and evidence for each client’s specific facts',
    typical: 'Standard intake process, with less case specific legal analysis upfront',
  },
  {
    factor: 'Consultation',
    tripLaw: 'Free, no obligation consultation before you commit to representation',
    typical: 'Paid consultations common or limited initial case review',
  },
  {
    factor: 'Payment options',
    tripLaw: 'Payment plan options available',
    typical: 'Full payment often required upfront',
  },
  {
    factor: 'Professional affiliation',
    tripLaw: 'Active member, American Immigration Lawyer Association',
    typical: 'Membership varies by firm',
  },
];

const ComparisonSection = ({
  tagline = 'SERVICE COMPARISON',
  title = 'What Sets Trip Law Apart From Other Law Firms',
  subtitle = 'Factor | Trip Law | Typical General Practice Firm',
  rows = defaultRows,
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
          <p className="text-slate-600 text-base sm:text-lg font-semibold">
            {subtitle}
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto max-w-6xl mx-auto">
          <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
            <thead>
              <tr className="bg-[#0B1829] text-white">
                <th className="py-5 px-6 font-bold text-base sm:text-lg w-1/4">
                  Factor
                </th>
                <th className="py-5 px-6 font-bold text-base sm:text-lg w-3/8 bg-red-700 text-white">
                  Trip Law
                </th>
                <th className="py-5 px-6 font-bold text-base sm:text-lg w-3/8 text-slate-300">
                  Typical General Practice Firm
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-sm sm:text-base">
              {rows.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="py-4 px-6 font-bold text-[#0B1829]">
                    {row.factor}
                  </td>
                  <td className="py-4 px-6 text-slate-900 font-medium bg-red-50/50">
                    <div className="flex items-start gap-2">
                      <span className="text-red-700 font-bold">✓</span>
                      <span>{row.tripLaw}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-slate-600 leading-relaxed">
                    {row.typical}
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

