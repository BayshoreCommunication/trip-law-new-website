'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

// 12 Practice Areas list (from left card in reference image)
const practiceAreas = [
  { title: 'Immigration Law', icon: '🛂' },
  { title: 'DACA Renewals', icon: '📄' },
  { title: 'Citizenship and Naturalization', icon: '🏛️' },
  { title: 'U Visa Applications', icon: '🛡️' },
  { title: 'Green Card Applications', icon: '💳' },
  { title: 'DUI Defense', icon: '🚗' },
  { title: 'Family-Based Petitions', icon: '👨‍👩‍👧' },
  { title: 'Personal Injury', icon: '⚕️' },
  { title: 'Asylum', icon: '⚖️' },
  { title: 'Auto Accidents', icon: '🚘' },
  { title: 'Removal Defense', icon: '🔨' },
];

// Cities & Counties list
const citiesServed = [
  'Tampa',
  'St. Petersburg',
  'Clearwater',
  'Brandon',
  'Lakeland',
];

const countiesServed = [
  'Hillsborough County',
  'Pinellas County',
  'Polk County',
  'Pasco County',
];

const majorFloridaCities = [
  'Orlando',
  'Miami',
  'Jacksonville',
  'Fort Lauderdale',
  'All of Florida',
];

const PracticeAreasCitiesSection = ({
  tagline = 'PRACTICE AREAS & LOCATIONS',
  title = 'Practice Areas and Cities Trip Law Handles Across Florida',
  description = 'Comprehensive legal services. Statewide representation. Local knowledge you can trust.',
  address = '1820 Florida Ave S, Ste. C, Lakeland, FL 33803',
  phone = '(863)-599-6735',
  email = 'info@trip-law.com',
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#FCFDFE] text-slate-800">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        
        {/* Section Top Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col items-center text-center mb-14 sm:mb-16"
        >
          {/* Tagline Subtitle */}
          <div className="flex items-center gap-3 mb-2">
            <div className="h-[2px] w-10 sm:w-14 bg-red-700/60 rounded-full" />
            <span className="text-red-700 font-bold text-xs sm:text-sm tracking-widest uppercase">
              {tagline}
            </span>
            <div className="h-[2px] w-10 sm:w-14 bg-red-700/60 rounded-full" />
          </div>

          {/* Scales Icon */}
          <div className="text-red-700 mb-2">
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l9-4 9 4M3 6v14a1 1 0 001 1h16a1 1 0 001-1V6M3 6l9 6 9-6M12 12v9" />
            </svg>
          </div>

          {/* Main Title */}
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1829] tracking-tight max-w-4xl leading-[1.18] mb-4 ${bitter.className}`}>
            {title}
          </h2>

          {/* Subtitle Description */}
          <p className="text-slate-600 text-base sm:text-lg font-normal max-w-3xl leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* 2 Main Cards Grid: Left Google Map & Right Address & Served Cities */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          
          {/* Left Column Card: Interactive Google Map for Footer Address */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/70 border border-slate-100/90 flex flex-col justify-between"
          >
            {/* Top Badge */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-red-700 text-white flex items-center justify-center shadow-md flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V10M5 21V10M3 10l9-7 9 7M4 21h16M9 21v-7a1 1 0 011-1h4a1 1 0 011 1v7" />
                </svg>
              </div>
              <div>
                <span className="text-xs font-bold text-red-700 tracking-wider uppercase">LAKELAND OFFICE LOCATION</span>
                <h3 className={`text-xl sm:text-2xl font-bold text-[#0B1829] ${bitter.className}`}>
                  Visit Trip Law in Florida
                </h3>
              </div>
            </div>

            {/* Embedded Google Map Frame */}
            <div className="w-full h-[340px] sm:h-[380px] rounded-2xl overflow-hidden shadow-inner border border-slate-200 relative mb-4">
              <iframe
                title="Trip Law Lakeland Office Google Map"
                src="https://maps.google.com/maps?q=1820%20Florida%20Ave%20S,%20Ste.%20C,%20Lakeland,%20FL%2033803&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            {/* Address Banner below map */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-700 text-white flex items-center justify-center flex-shrink-0 shadow-md">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase">Primary Office Address</div>
                <div className="text-sm font-bold text-[#0B1829]">{address}</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column Card: Address Details & Practice Focus */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/70 border border-slate-100/90 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#B91C1C] text-white text-xs font-bold uppercase tracking-wider mb-6 self-start shadow-md">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>TRIP LAW CONTACT DETAILS</span>
            </div>

            {/* Main Office Address Box - Vertically Stacked Address, Phone & Email with Icons */}
            <div className="bg-[#0B1829] text-white p-6 sm:p-8 rounded-2xl shadow-lg border border-slate-700 flex flex-col gap-5 text-left h-full justify-center">
              <div className="text-xs font-bold text-red-400 uppercase tracking-widest border-b border-slate-700/80 pb-3 flex items-center justify-between">
                <span>TRIP LAW LAKELAND OFFICE</span>
                <span className="text-[10px] bg-red-700/30 border border-red-500/40 text-red-300 px-2.5 py-0.5 rounded-full font-mono uppercase">
                  Active Practice
                </span>
              </div>

              {/* Address Line */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-700/20 border border-red-500/40 flex items-center justify-center text-red-400 flex-shrink-0 mt-0.5 shadow-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-slate-400 block mb-0.5">Office Address</span>
                  <span className="text-base sm:text-lg font-bold text-white leading-snug">{address}</span>
                </div>
              </div>

              {/* Phone Line */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-700/20 border border-red-500/40 flex items-center justify-center text-red-400 flex-shrink-0 shadow-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-slate-400 block mb-0.5">Phone Number</span>
                  <a href={`tel:${phone.replace(/[^0-9]/g, '')}`} className="text-base sm:text-lg font-bold text-white hover:text-red-400 transition-colors">
                    {phone}
                  </a>
                </div>
              </div>

              {/* Email Line */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-700/20 border border-red-500/40 flex items-center justify-center text-red-400 flex-shrink-0 shadow-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-slate-400 block mb-0.5">Email Address</span>
                  <a href={`mailto:${email}`} className="text-base sm:text-lg font-bold text-white hover:text-red-400 transition-colors">
                    {email}
                  </a>
                </div>
              </div>
            </div>

          </motion.div>

        </div>

        {/* Bottom 4 Feature Badges Banner */}
        <div className="w-full bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center sm:text-left">
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-red-700/10 border border-red-700/20 flex items-center justify-center text-red-700 flex-shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l9-4 9 4M3 6v14a1 1 0 001 1h16a1 1 0 001-1V6M3 6l9 6 9-6M12 12v9" />
              </svg>
            </div>
            <div>
              <div className={`text-sm sm:text-base font-bold text-[#0B1829] ${bitter.className}`}>
                Experienced Immigration Attorneys
              </div>
              <div className="text-xs text-slate-500">Dedicated to Your Case</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-red-700/10 border border-red-700/20 flex items-center justify-center text-red-700 flex-shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <div className={`text-sm sm:text-base font-bold text-[#0B1829] ${bitter.className}`}>
                Local Knowledge. Statewide Reach.
              </div>
              <div className="text-xs text-slate-500">Serving Clients Across Florida</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-red-700/10 border border-red-700/20 flex items-center justify-center text-red-700 flex-shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <div className={`text-sm sm:text-base font-bold text-[#0B1829] ${bitter.className}`}>
                Strategic Representation, Proven Results.
              </div>
              <div className="text-xs text-slate-500">Your Future. Our Focus.</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-red-700/10 border border-red-700/20 flex items-center justify-center text-red-700 flex-shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div>
              <div className={`text-sm sm:text-base font-bold text-[#0B1829] ${bitter.className}`}>
                Compassionate Support Every Step
              </div>
              <div className="text-xs text-slate-500">We&apos;re With You.</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PracticeAreasCitiesSection;
