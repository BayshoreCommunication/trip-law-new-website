'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultPracticeAreas = [
  'Immigration Law',
  'Citizenship and Naturalization',
  'Green Card Applications',
  'Family-Based Petitions',
  'Asylum',
  'Removal Defense',
  'DACA Renewals',
  'U Visa Applications',
  'DUI Defense',
  'Personal Injury',
  'Auto Accidents',
];

const defaultLocations = [
  'Tampa',
  'St. Petersburg',
  'Clearwater',
  'Brandon',
  'Lakeland',
  'Hillsborough County',
  'Pinellas County',
  'Polk County',
  'Pasco County',
  'Orlando',
  'Miami',
  'Jacksonville',
  'Fort Lauderdale',
  'All of Florida',
];

const PracticeAreasCitiesSection = ({
  tagline = 'PRACTICE AREAS & LOCATIONS',
  title = 'Serving Clients Across Florida',
  practiceAreas = defaultPracticeAreas,
  locations = defaultLocations,
}) => {
  return (
    <section className="w-full py-16 lg:py-24 bg-[#091424] text-white overflow-hidden">
      <div className="w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col items-center text-center mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-[2px] w-12 sm:w-16 bg-red-700 rounded-full" />
            <span className="text-red-500 font-bold text-xs sm:text-sm tracking-widest uppercase">
              {tagline}
            </span>
            <span className="text-red-500 font-bold text-xs sm:text-sm">★</span>
            <div className="h-[2px] w-12 sm:w-16 bg-red-700 rounded-full" />
          </div>

          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 ${bitter.className}`}>
            {title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Practice Areas */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0E1E36] border border-slate-700/60 rounded-2xl p-6 sm:p-8"
          >
            <h3 className={`text-2xl font-bold text-red-500 mb-6 ${bitter.className}`}>
              Practice Areas
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {practiceAreas.map((area, idx) => (
                <li key={idx} className="flex items-center gap-2 text-slate-200 text-base">
                  <span className="text-red-500 font-bold">•</span>
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Cities & Counties Served */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0E1E36] border border-slate-700/60 rounded-2xl p-6 sm:p-8"
          >
            <h3 className={`text-2xl font-bold text-red-500 mb-6 ${bitter.className}`}>
              Cities and Counties Served
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {locations.map((loc, idx) => (
                <li key={idx} className="flex items-center gap-2 text-slate-200 text-base">
                  <span className="text-red-500 font-bold">•</span>
                  <span>{loc}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreasCitiesSection;
