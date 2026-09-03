'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const ComparisonSection = ({
  title = "TripLaw Compared With Other EB-1 Immigration Options",
  subtitle = "EB-1 Case Consideration",
  rows = [
    {
      feature: 'EB-1 Category Assessment',
      tripLaw: 'Discusses EB-1A, EB-1B, or EB-1C eligibility.',
      others: 'The scope of category assessment varies.',
    },
    {
      feature: 'Professional Evidence Review',
      tripLaw: 'Reviews career achievements, citations, or corporate documents.',
      others: 'Evidence review depth varies by provider.',
    },
    {
      feature: 'Licensed Attorney Handling',
      tripLaw: 'A licensed immigration attorney handles case preparation and legal analysis.',
      others: 'Attorney involvement varies by firm.',
    },
    {
      feature: 'Case Strategy',
      tripLaw: "Builds a petition strategy based on the applicant's record.",
      others: 'May rely on more standard templates.',
    },
    {
      feature: 'Complex History Handling',
      tripLaw: 'Evaluates prior status issues or immigration history up front.',
      others: 'Experience with complex immigration histories varies.',
    },
    {
      feature: 'Client Service Model',
      tripLaw: 'TripLaw advertises free consultations and payment plan options.',
      others: 'Consultation and payment structures vary.',
    },
    {
      feature: 'Nationwide Representation',
      tripLaw: 'TripLaw states that its immigration practice serves clients nationwide through federal immigration jurisdiction.',
      others: 'Service areas vary among providers.',
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
                  EB-1 Case Consideration
                </th>
                <th className="py-5 px-6 font-bold text-base sm:text-lg w-1/3 bg-red-700 text-white">
                  TripLaw
                </th>
                <th className="py-5 px-6 font-bold text-base sm:text-lg w-1/3 text-slate-300">
                  Other Immigration Service Options
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
