'use client';
import React from 'react';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const timelinePhases = [
  {
    phase: 'Initial consultation',
    whatWeDo: 'Case review, eligibility call and filing strategy',
  },
  {
    phase: 'Evidence preparation',
    whatWeDo: 'Document collection and job description rewrite',
  },
  {
    phase: 'Labor certification',
    whatWeDo: 'LCA filed and certified',
  },
  {
    phase: 'USCIS submission',
    whatWeDo: 'Petition filed with USCIS',
  },
  {
    phase: 'After filing',
    whatWeDo: 'Monitoring, RFE response if issued and the approval notice',
  },
  {
    phase: 'After approval',
    whatWeDo: 'Visa stamping or change of status support',
  },
];

const ExpectationsTimelineSection = () => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#F8FAFC] text-slate-800 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1829] tracking-tight leading-[1.2] mb-4 ${bitter.className}`}>
            What to Expect When You Hire Trip Law
          </h2>
          <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            This timeline applies to cap exempt cases and to cap cases after selection. Exact dates shift with USCIS workload and how quickly your documents arrive.
          </p>
        </div>

        <div className="overflow-x-auto max-w-4xl mx-auto rounded-2xl border border-slate-200 shadow-xl bg-white">
          <table className="w-full min-w-[480px] text-left border-collapse">
            <thead>
              <tr className="bg-[#0B1829] text-white text-sm sm:text-base font-bold">
                <th className="py-4 px-6 w-1/3">Phase</th>
                <th className="py-4 px-6 w-2/3 bg-red-700 text-white">What we do</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-sm sm:text-base">
              {timelinePhases.map((row, idx) => (
                <tr key={row.phase} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="py-4 px-6 font-bold text-[#0B1829]">
                    {row.phase}
                  </td>
                  <td className="py-4 px-6 text-slate-700">
                    {row.whatWeDo}
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

export default ExpectationsTimelineSection;
