'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultBenefits = [
  {
    title: 'Local office familiarity',
    description:
      'Knowing how the Tampa Field Office schedules interviews and handles specific case types helps set realistic expectations on timing.',
    icon: (
      <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V10M5 21V10M3 10l9-7 9 7M4 21h16M9 21v-7a1 1 0 011-1h4a1 1 0 011 1v7" />
      </svg>
    ),
  },
  {
    title: 'Direct access to your attorney',
    description:
      'Lakeland clients can sit down in person, go over documents face to face, and get a real answer instead of a call center script.',
    icon: (
      <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: 'Understanding of the regional immigrant community',
    description:
      'A lot of Lakeland cases touch agricultural, hospitality, or service industry employment, and local experience helps frame that kind of employment evidence correctly.',
    icon: (
      <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Faster response to local USCIS or court notices',
    description:
      'A local attorney can react quickly to a Lakeland-area interview notice or hearing date without added coordination delays.',
    icon: (
      <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const AfterApprovalSection = ({
  tagline = 'LOCAL ATTORNEY ADVANTAGE',
  title = 'Why You Need a Local Lakeland Immigration Attorney for Your Case',
  subtitle = 'Immigration law is federal everywhere, but the practical experience an immigration lawyer lakeland fl residents rely on comes from actually knowing how the Tampa Field Office, the Tampa Application Support Center, and the Orlando Immigration Court operate day to day.',
  benefits = defaultBenefits,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#FAFBFD] text-slate-800 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col items-center text-center mb-14 sm:mb-16"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-red-700 font-bold text-xs sm:text-sm tracking-widest uppercase">
              {tagline}
            </span>
            <div className="h-[2px] w-12 bg-red-700 rounded-full" />
          </div>

          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1829] tracking-tight max-w-4xl leading-[1.18] mb-4 ${bitter.className}`}>
            {title}
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-normal max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
          {benefits.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: 'easeOut' }}
              className="bg-white rounded-3xl p-7 sm:p-8 shadow-xl shadow-slate-200/70 border border-slate-100 flex flex-col items-start text-left hover:shadow-2xl hover:border-red-700/30 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-full bg-red-700/10 border border-red-700/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              <h3 className={`text-xl font-bold text-[#0B1829] mb-3 group-hover:text-red-700 transition-colors duration-300 ${bitter.className}`}>
                {item.title}
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AfterApprovalSection;
