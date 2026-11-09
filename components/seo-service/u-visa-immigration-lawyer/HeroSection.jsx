'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const NumberCounter = ({ target = 15, suffix = '+', duration = 1800 }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let startTime;
    let animationFrame;
    const end = parseInt(target, 10);

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="font-bold">
      {count}
      {suffix}
    </span>
  );
};

const HeroSection = ({
  locationTitle = 'U VISA IMMIGRATION LAWYER IN LAKELAND AND THROUGHOUT FLORIDA',
  mainHeading = 'U Visa Immigration Lawyer in Lakeland and Throughout Florida',
  description = "Noncitizen victims of serious crimes in the U.S. often feel unsure about their immigration options. A U Visa may offer a path to temporary lawful status for certain crime victims. At Trip Law, we review your immigration history. Assess the facts of the crime and organize supporting records. We resolve any flaws or gaps in evidence or documents so your visa doesn't get denied or rejected. If you are looking for a u visa immigration lawyer near me, Attorney Hardam Tripathi delivers expert representation for victims across Lakeland, Polk County and Central Florida.",
  ctaText = 'Book a confidential consultation today and our attorney will review your case safely.',
  consultationLink = '/appointment',
  eligibilityLink = 'tel:8635996735',
  experienceYears = 15,
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/hero-bg.png',
}) => {
  return (
    <section className="relative w-full py-16 lg:py-28 bg-slate-950 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src={bgImage}
          alt="U Visa Immigration Lawyer Hero Background"
          fill
          priority
          sizes="100vw"
          quality={90}
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/60" />
      </div>

      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading and Details (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Top Red Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-700/20 border border-red-500/30 text-red-400 text-xs sm:text-sm font-bold tracking-widest uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>{locationTitle}</span>
            </div>

            {/* Main H1 Title */}
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-6 ${bitter.className}`}>
              {mainHeading}
            </h1>

            {/* Red Accent Divider */}
            <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />

            {/* Body Description */}
            <p className="text-slate-200 text-base sm:text-lg md:text-xl leading-relaxed mb-8">
              Noncitizen victims of serious crimes in the U.S. often feel unsure about their immigration options. A{' '}
              <Link href="/u-visa-immigration-lawyer" className="text-red-400 font-semibold hover:underline">
                U Visa
              </Link>{' '}
              may offer a path to temporary lawful status for certain crime victims. At Trip Law, we review your immigration history. Assess the facts of the crime and organize supporting records. We resolve any flaws or gaps in evidence or documents so your visa doesn&apos;t get denied or rejected. If you are looking for a{' '}
              <Link href="/u-visa-immigration-lawyer" className="text-red-400 font-semibold hover:underline">
                u visa immigration lawyer near me
              </Link>
              , Attorney Hardam Tripathi delivers expert representation for victims across{' '}
              <Link href="/immigration-lawyer-lakeland-fl" className="text-red-400 font-semibold hover:underline">
                Lakeland, Polk County and Central Florida
              </Link>
              .
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8">
              <Link
                href={consultationLink}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-red-700 hover:bg-red-800 text-white font-bold text-base tracking-wider uppercase rounded-full shadow-xl shadow-red-900/30 transition-all duration-300 transform hover:-translate-y-0.5 text-center"
              >
                <span>Book Confidential Consultation</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>

              <a
                href={eligibilityLink}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent hover:bg-white/10 text-white border-2 border-slate-600 hover:border-slate-400 font-bold text-base tracking-wider uppercase rounded-full transition-all duration-300 text-center"
              >
                <span>Call (863) 599-6735</span>
              </a>
            </div>

            {ctaText && (
              <p className="text-slate-400 text-sm italic">
                {ctaText}
              </p>
            )}
          </motion.div>

          {/* Right Column: Trust Card & Highlights (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-700/10 rounded-full blur-2xl pointer-events-none" />

              <h2 className={`text-xl sm:text-2xl font-bold text-white mb-6 ${bitter.className}`}>
                Why Work With Attorney Hardam Tripathi
              </h2>

              <ul className="flex flex-col gap-4 text-slate-300 text-sm sm:text-base">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-red-700/30 text-red-400 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>Former legal counsel with U.S. Air Force JAG Corps & DEA experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-red-700/30 text-red-400 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>Active member of American Immigration Lawyers Association (AILA)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-red-700/30 text-red-400 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>End-to-end management of police certifications (Form I-918 Supplement B)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-red-700/30 text-red-400 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>Strict confidentiality, trauma-informed guidance and waiver preparation</span>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">
                    <NumberCounter target={experienceYears} suffix="+" />
                  </div>
                  <div className="text-slate-400 text-xs sm:text-sm uppercase tracking-wider">
                    Years Combined Experience
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl sm:text-3xl font-extrabold text-red-500">
                    100%
                  </div>
                  <div className="text-slate-400 text-xs sm:text-sm uppercase tracking-wider">
                    Confidential Review
                  </div>
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

