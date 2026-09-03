'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

// Animated Number Counter Component
const NumberCounter = ({ target = 15, suffix = '+', duration = 1800 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseInt(target, 10);
    if (start === end) return;

    let totalMilSecs = duration;
    let incrementTime = Math.max(Math.floor(totalMilSecs / end), 20);

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
};

const HeroSection = ({
  locationTitle = 'E2 VISA LAWYER IN FLORIDA',
  mainHeading = 'E2 Visa Lawyer In Florida — Protect Your Investment and Secure Treaty Investor Status',
  description = "Buying or starting a business in Florida under an E2 visa takes more than a wire transfer. You shouldn't risk your capital when establishing new commercial operations inside the United States. Having an experienced e2 visa lawyer florida protects your enterprise from sudden operational disruptions. USCIS and consular officers test your treaty nationality, your investment, and your business plan before granting status. Trip Law prepares your complete evidentiary packet to meet strict federal review guidelines. Our firm directly assists international entrepreneurs who want to establish profitable businesses here.",
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/hero-bg.png',
  consultationLink = '/appointment',
  consultationText = 'SCHEDULE CONSULTATION',
  eligibilityLink = 'tel:(863)-599-6735',
  eligibilityText = '(863)-599-6735',
  experienceYears = 15,
}) => {
  return (
    <section className="relative w-full min-h-[700px] lg:min-h-[820px] flex items-center justify-center bg-slate-950 text-white overflow-hidden py-16 lg:py-28 mt-[70px]">
      {/* Background Image using Next.js Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt="E2 Visa Lawyer Background"
          fill
          priority
          quality={90}
          className="object-cover object-center transform scale-105"
        />
        {/* Dark Gradient Overlay for Maximum Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030914]/95 via-[#061224]/85 to-[#030914]/90 md:bg-gradient-to-r md:from-[#040B17]/95 md:via-[#081427]/85 md:to-black/40" />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
      </div>

      {/* Expanded Container Width to match project wide layout */}
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Heading, Subtitle & Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Tagline / Subtitle with Primary red-700 Accent Line */}
            <div className="flex flex-col items-start gap-2.5 mb-5">
              <span className="text-red-700 font-bold text-xs sm:text-sm md:text-base tracking-widest uppercase">
                {locationTitle}
              </span>
              <div className="h-[3px] w-16 bg-red-700 rounded-full" />
            </div>

            {/* Main Title with Bitter font */}
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15] mb-6 ${bitter.className}`}>
              {mainHeading}
            </h1>

            {/* Paragraph / Body Text */}
            <p className="text-slate-200 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-3xl mb-10">
              {description}
            </p>

            {/* CTA Action Buttons using Primary red-700 Color */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 w-full sm:w-auto">
              {/* Primary Consultation Button - red-700 */}
              <Link
                href={consultationLink}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-red-700 hover:bg-red-800 text-white font-bold text-sm sm:text-base tracking-wider uppercase rounded-md sm:rounded-full shadow-xl shadow-red-900/30 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <svg
                  className="w-5 h-5 text-white transition-transform duration-300 group-hover:scale-110"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>{consultationText}</span>
              </Link>

              {/* Secondary Outline Button - red-700 border */}
              <Link
                href={eligibilityLink}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent hover:bg-red-700/20 text-white border-2 border-red-700 hover:border-red-600 font-bold text-sm sm:text-base tracking-wider uppercase rounded-md sm:rounded-full transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <svg
                  className="w-5 h-5 text-red-700 group-hover:text-white transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>{eligibilityText}</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Expanded Navy Dark Card with red-700 Accents */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 w-full"
          >
            <div className="bg-[#091424]/95 backdrop-blur-xl border border-slate-700/70 hover:border-red-700/60 rounded-2xl p-6 sm:p-9 shadow-2xl shadow-black/80 transition-all duration-300">
              <div className="flex flex-col divide-y divide-slate-800/80">
                
                {/* Highlight 1: Experience with Animated Number Counter & Laurel Wreath Badge */}
                <div className="flex items-center gap-5 pb-6">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-red-700/10 border border-red-700/30">
                    <svg
                      className="w-6 h-6 sm:w-7 sm:h-7 text-red-700"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a4 4 0 100-8 4 4 0 000 8z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l-2.5 2.5L10 18.5M12 19l2.5 2.5L14 18.5" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.3 8.3a8 8 0 000 7.4M17.7 8.3a8 8 0 010 7.4" />
                    </svg>
                  </div>

                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className={`text-3xl sm:text-4xl font-bold text-red-700 ${bitter.className}`}>
                      <NumberCounter target={experienceYears} suffix="+" />
                    </span>
                    <span className="text-white font-medium text-base sm:text-lg tracking-wide">
                      Years Experience
                    </span>
                  </div>
                </div>

                {/* Highlight 2: Attorney-Led Cases */}
                <div className="flex items-center gap-5 py-5">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-red-700/10 border border-red-700/30">
                    <svg
                      className="w-6 h-6 text-red-700"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 14l-2 3h4l-2-3z"
                      />
                    </svg>
                  </div>
                  <span className="text-white font-medium text-base sm:text-lg tracking-wide">
                    Attorney-Led Cases
                  </span>
                </div>

                {/* Highlight 3: Consular & USCIS Support */}
                <div className="flex items-center gap-5 py-5">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-red-700/10 border border-red-700/30">
                    <svg
                      className="w-6 h-6 text-red-700"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 21V10M5 21V10M3 10l9-7 9 7M4 21h16M9 21v-7a1 1 0 011-1h4a1 1 0 011 1v7"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 10h8"
                      />
                    </svg>
                  </div>
                  <span className="text-white font-medium text-base sm:text-lg tracking-wide">
                    USCIS & Consular Processing Support
                  </span>
                </div>

                {/* Highlight 4: Florida Immigration Practice */}
                <div className="flex items-center gap-5 pt-5">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-red-700/10 border border-red-700/30">
                    <svg
                      className="w-6 h-6 text-red-700"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 4h10l1 4 3 2v6l-2 4-4 1-1-4-3-1-1-4-3-1V4z"
                      />
                      <circle cx="12" cy="11" r="1.5" fill="currentColor" />
                    </svg>
                  </div>
                  <span className="text-white font-medium text-base sm:text-lg tracking-wide">
                    Florida E2 Investor Practice
                  </span>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
