'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Bitter } from 'next/font/google';
import { ASYLUM_IMAGE_METADATA } from './asylumImagesMeta';

const bitter = Bitter({ subsets: ['latin'] });

const NumberCounter = ({ target = 15, suffix = '+', duration = 1800 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseInt(target, 10);
    if (start === end) return;

    const totalMilSecs = duration;
    const incrementTime = Math.max(Math.floor(totalMilSecs / end), 20);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
};

const HeroSection = ({ experienceYears = 15 }) => {
  const { heroBg } = ASYLUM_IMAGE_METADATA;

  return (
    <section className="relative w-full min-h-[700px] lg:min-h-[820px] flex items-center justify-center bg-slate-950 text-white overflow-hidden py-16 lg:py-28 mt-[70px]">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBg.src}
          alt={heroBg.alt}
          title={heroBg.title}
          fill
          priority
          sizes="100vw"
          quality={90}
          className="object-cover object-center transform scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030914]/95 via-[#061224]/85 to-[#030914]/90 md:bg-gradient-to-r md:from-[#040B17]/95 md:via-[#081427]/85 md:to-black/40" />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15] mb-5 ${bitter.className}`}>
              Lakeland Asylum Lawyer
            </h1>

            <div className="h-[3px] w-20 bg-red-700 rounded-full mb-5" />

            <p className="text-red-400 font-semibold text-base sm:text-lg md:text-xl leading-relaxed mb-4">
              Helping Individuals and Families Seek Refuge in Immigration.
            </p>

            <p className="text-slate-200 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-3xl">
              Fleeing persecution at home takes real courage with a clear and fast plan. Our asylum lawyer lakeland team builds a strong claim from the ground up. Attorney Hardam Tripathi served in the Air Force JAG Corps and DEA. We build a strong case regarding the issue of persecution based on one’s race, religion, nationality or political beliefs. We then gather documentation to support your case. We prepare your testimony for your hearings and represent you in immigration court. Call our Lakeland office at (863) 599 6735 and tell us what you lived through.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 w-full"
          >
            <div className="bg-[#091424]/95 backdrop-blur-xl border border-slate-700/70 hover:border-red-700/60 rounded-2xl p-6 sm:p-9 shadow-2xl shadow-black/80 transition-all duration-300">
              <div className="flex flex-col divide-y divide-slate-800/80">
                <div className="flex items-center gap-5 pb-6">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-red-700/10 border border-red-700/30">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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

                <div className="flex items-center gap-5 py-5">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-red-700/10 border border-red-700/30">
                    <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <span className="text-white font-medium text-base sm:text-lg tracking-wide">
                    Affirmative &amp; Defensive Asylum
                  </span>
                </div>

                <div className="flex items-center gap-5 py-5">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-red-700/10 border border-red-700/30">
                    <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V10M5 21V10M3 10l9-7 9 7M4 21h16M9 21v-7a1 1 0 011-1h4a1 1 0 011 1v7" />
                    </svg>
                  </div>
                  <span className="text-white font-medium text-base sm:text-lg tracking-wide">
                    Federal Legal Background
                  </span>
                </div>

                <div className="flex items-center gap-5 pt-5">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-red-700/10 border border-red-700/30">
                    <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 4h10l1 4 3 2v6l-2 4-4 1-1-4-3-1-1-4-3-1V4z" />
                      <circle cx="12" cy="11" r="1.5" fill="currentColor" />
                    </svg>
                  </div>
                  <span className="text-white font-medium text-base sm:text-lg tracking-wide">
                    Nationwide U.S. Practice
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
