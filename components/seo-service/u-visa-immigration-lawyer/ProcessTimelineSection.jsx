'use client';
import React from 'react';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultTimeline = [
  {
    stage: 'Filing to Receipt Notice',
    time: '2 to 4 Weeks',
    purpose: 'Formal issuance of receipt notice confirming filing date.',
  },
  {
    stage: 'Biometrics Appointment',
    time: '6 to 18 Months',
    purpose: 'Fingerprinting and background clearance processing.',
  },
  {
    stage: 'Bona Fide Determination (BFD) Review',
    time: '20 to 35 Months',
    purpose: 'Preliminary merit review granting deferred action and EAD eligibility.',
  },
  {
    stage: 'Waitlist Placement',
    time: '24 to 36 Months Post BFD',
    purpose: 'Placement on the national waiting list under the 10,000 annual statutory limit.',
  },
  {
    stage: 'Final Approval (U 1 Status)',
    time: '6 to 10+ Years Total',
    purpose: 'Official grant of U nonimmigrant status for four years.',
  },
  {
    stage: 'Adjustment of Status (Green Card)',
    time: '18 to 36 Months',
    purpose: 'Permanent residence approval under INA § 245(m) after 3 years in U status.',
  },
];

const ProcessTimelineSection = ({
  badgeText = 'USCIS TIMELINE & STATUTORY CAP',
  title = 'U Visa Processing Time',
  subtitle = 'USCIS processing estimates change. Check the USCIS Processing Times tool for current agency data. However the law limits the government to 10,000 U 1 visas each fiscal year. This strict cap creates massive processing backlogs.',
  timeline = defaultTimeline,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#061224] text-white overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <span className="text-red-500 font-bold text-xs sm:text-sm tracking-widest uppercase mb-3">
            {badgeText}
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.2] mb-4 ${bitter.className}`}>
            {title}
          </h2>
          <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Timeline Table */}
        <div className="overflow-x-auto max-w-5xl mx-auto">
          <table className="w-full text-left border-collapse bg-[#0B1829] rounded-2xl shadow-2xl overflow-hidden border border-slate-700/80">
            <thead>
              <tr className="bg-slate-900 border-b border-slate-700/80">
                <th className="py-5 px-6 font-bold text-base sm:text-lg text-white w-1/3">
                  Stage
                </th>
                <th className="py-5 px-6 font-bold text-base sm:text-lg text-red-400 w-1/4">
                  Estimated Processing Time
                </th>
                <th className="py-5 px-6 font-bold text-base sm:text-lg text-slate-300 w-5/12">
                  Operational Purpose
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-sm sm:text-base">
              {timeline.map((item, idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? 'bg-[#0B1829]' : 'bg-[#081220]'}
                >
                  <td className="py-4 px-6 font-bold text-white">
                    {item.stage}
                  </td>
                  <td className="py-4 px-6 text-red-400 font-semibold whitespace-nowrap">
                    {item.time}
                  </td>
                  <td className="py-4 px-6 text-slate-300 leading-relaxed">
                    {item.purpose}
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

export default ProcessTimelineSection;

