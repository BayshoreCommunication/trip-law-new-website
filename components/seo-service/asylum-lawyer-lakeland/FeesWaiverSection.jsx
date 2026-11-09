'use client';
import React from 'react';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultFeeRows = [
  {
    category: 'Initial Filing Fee',
    affirmative: '$100',
    defensive: '$100',
    rules: 'Required at submission of Form I 589; cannot be waived under statutory rules.',
  },
  {
    category: 'Annual Pending Fee (AAF)',
    affirmative: '$105 per year',
    defensive: '$105 per year',
    rules: 'Assessed every 365 days the case stays pending. Effective October 16, 2026, this increased from $102. Non-waivable.',
  },
  {
    category: 'Initial Work Permit (EAD)',
    affirmative: '$570',
    defensive: '$570',
    rules: 'Form I 765 base filing fee is technically $0 for asylum seekers, but a mandatory initial processing surcharge applies. Effective October 16, 2026, this increased from $560.',
  },
  {
    category: 'Work Permit Renewals',
    affirmative: '$795 total ($520 paper / $470 online + $275 fee)',
    defensive: '$795 total ($520 paper / $470 online + $275 fee)',
    rules: 'Renewals include the standard Form I 765 base fee plus a flat statutory surcharge that is exempt from the October inflation hikes.',
  },
  {
    category: 'Average Attorney Fees',
    affirmative: '$3,500 – $7,500+ (Flat fee)',
    defensive: '$5,000 – $12,000+ (Flat fee)',
    rules: 'Court cases cost significantly more due to adversarial hearings, master calendar dockets and full merits trials.',
  },
  {
    category: 'Hourly Legal Counsel',
    affirmative: '$150 – $500 per hour',
    defensive: '$150 – $500 per hour',
    rules: 'Often utilized for secondary filings, responding to specific evidence requests or emergency court motions.',
  },
  {
    category: 'Document Translations',
    affirmative: '$25 – $75 per page',
    defensive: '$25 – $75 per page',
    rules: 'All foreign language birth certificates, police reports and letters must be fully translated into English.',
  },
  {
    category: 'Medical / Psychological Exams',
    affirmative: '$600 – $2,500',
    defensive: '$600 – $2,500',
    rules: 'Crucial for documenting physical scars or severe PTSD to corroborate claims of past persecution.',
  },
  {
    category: 'Country Conditions Reports',
    affirmative: '$1,000 – $3,500',
    defensive: '$1,000 – $3,500',
    rules: 'Written testimonies by regional academics or human rights specialists validating specific localized dangers.',
  },
];

const FeesWaiverSection = ({
  tagline = 'GOVERNMENT FEES & LEGAL COSTS',
  title = 'Asylum Lawyer Fees and Application Costs',
  description = 'Government fees change by law. Confirm current figures on the USCIS fee schedule before you file.',
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

        {/* Fees Table */}
        <div className="overflow-x-auto max-w-6xl mx-auto">
          <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
            <thead>
              <tr className="bg-[#0B1829] text-white">
                <th className="py-5 px-6 font-bold text-sm sm:text-base w-1/4">
                  Cost Category
                </th>
                <th className="py-5 px-6 font-bold text-sm sm:text-base w-1/6 bg-red-700 text-white">
                  Affirmative Process (USCIS)
                </th>
                <th className="py-5 px-6 font-bold text-sm sm:text-base w-1/6">
                  Defensive Process (Court / EOIR)
                </th>
                <th className="py-5 px-6 font-bold text-sm sm:text-base w-5/12 text-slate-300">
                  Crucial Financial Rules & Nuances
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-sm sm:text-base">
              {feeRows.map((row, idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}
                >
                  <td className="py-4 px-6 font-bold text-[#0B1829]">
                    {row.category}
                  </td>
                  <td className="py-4 px-6 text-slate-900 font-semibold whitespace-nowrap bg-red-50/40">
                    {row.affirmative}
                  </td>
                  <td className="py-4 px-6 text-slate-800 font-semibold whitespace-nowrap">
                    {row.defensive}
                  </td>
                  <td className="py-4 px-6 text-slate-600 leading-relaxed">
                    {row.rules}
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

