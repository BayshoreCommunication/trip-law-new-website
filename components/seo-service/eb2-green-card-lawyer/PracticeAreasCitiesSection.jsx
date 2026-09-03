'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const PracticeAreasCitiesSection = ({
  tagline = 'PRACTICE AREAS & LOCATIONS',
  title = 'Practice Areas and Cities TripLaw Handles Across Florida',
  description = 'Comprehensive legal services. Statewide representation. Local knowledge you can trust.',
  address = '1820 Florida Ave S, Ste. C, Lakeland, FL 33803',
  phone = '(863)-599-6735',
  email = 'info@trip-law.com',
  employmentImmigration = [
    'EB-1 petitions for priority workers and multinational executives',
    'EB-2 petitions for advanced degree and exceptional ability applicants',
    'EB-2 National Interest Waiver self-petitions',
    'EB-3 petitions for skilled workers',
    'O-1 visas for extraordinary ability, and other qualifying employment categories.',
  ],
  familyHumanitarian = [
    'Family-based green cards',
    'Marriage-based immigration',
    'Adjustment of status',
    'Naturalization',
    'Asylum',
    'VAWA self-petitions',
    'U visa and T visa applications',
    'DACA and waivers including I-601 and I-601A.',
  ],
  cities = [
    'Tampa',
    'Lakeland',
    'Orlando',
    'Miami',
    'Jacksonville',
    'Fort Lauderdale',
    'St. Petersburg',
    'Clearwater',
    'Sarasota',
    'Brandon',
    'Plant City',
    'and other communities across Florida.',
  ],
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#0B1829] text-white overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <span className="text-red-500 font-bold text-xs sm:text-sm tracking-widest uppercase mb-3">
            {tagline}
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.2] mb-4 ${bitter.className}`}>
            {title}
          </h2>
          <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Employment-Based Immigration */}
          <div className="bg-[#091424] border border-slate-700/60 rounded-2xl p-6 sm:p-8">
            <h3 className={`text-xl font-bold text-red-500 mb-4 ${bitter.className}`}>
              Employment-Based Immigration
            </h3>
            <ul className="flex flex-col gap-3">
              {employmentImmigration.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-300 text-sm sm:text-base">
                  <span className="text-red-500 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Family and Humanitarian Immigration */}
          <div className="bg-[#091424] border border-slate-700/60 rounded-2xl p-6 sm:p-8">
            <h3 className={`text-xl font-bold text-red-500 mb-4 ${bitter.className}`}>
              Family and Humanitarian Immigration
            </h3>
            <ul className="flex flex-col gap-3">
              {familyHumanitarian.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-300 text-sm sm:text-base">
                  <span className="text-red-500 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Florida Cities We Serve */}
          <div className="bg-[#091424] border border-slate-700/60 rounded-2xl p-6 sm:p-8">
            <h3 className={`text-xl font-bold text-red-500 mb-4 ${bitter.className}`}>
              Florida Cities We Serve
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {cities.map((city, idx) => (
                <span key={idx} className="px-3 py-1 bg-slate-800 text-slate-200 rounded-full text-xs sm:text-sm border border-slate-700">
                  {city}
                </span>
              ))}
            </div>

            <div className="border-t border-slate-800 pt-4 flex flex-col gap-2 text-xs sm:text-sm text-slate-300">
              <div><strong className="text-white">Address:</strong> {address}</div>
              <div><strong className="text-white">Phone:</strong> <a href={`tel:${phone.replace(/[^0-9]/g, '')}`} className="hover:text-red-400">{phone}</a></div>
              <div><strong className="text-white">Email:</strong> <a href={`mailto:${email}`} className="hover:text-red-400">{email}</a></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreasCitiesSection;
