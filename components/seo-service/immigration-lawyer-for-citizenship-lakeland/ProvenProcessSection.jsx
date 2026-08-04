'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

// 8 Process Steps Data from Google Doc
const defaultSteps = [
  {
    number: '01',
    title: 'Step 1: Eligibility Review and Full Case History Audit',
    description:
      'Our attorney reviews your full immigration history, travel records, tax filings and criminal background. This includes obtaining IRS transcripts, USCIS records and state and federal court history. Travel records are reviewed against continuous residence and physical presence. Any eligibility issue is identified before preparing naturalization file.',
    icon: (
      <svg className="w-7 h-7 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Step 2: N-400 Preparation With Attorney Input on Every Field',
    description:
      'Every N-400 question is reviewed directly with the attorney. Arrests, employers, prior addresses and all travel dates are documented accurately and completely. Complex entries such as criminal history or prior visa issues receive specific attorney drafted responses. Each answer is verified against USCIS N-400 instructions.',
    icon: (
      <svg className="w-7 h-7 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Step 3: Document Assembly and Pre-Filing Accuracy Verification',
    description:
      'All supporting documents are collected, organized and translated where USCIS certification requirements apply. Certified translations are prepared as per USCIS policy for all foreign language documents. Each document is verified against current USCIS naturalization document checklist. Our attorney confirms your names, dates and case numbers across all documents are consistent.',
    icon: (
      <svg className="w-7 h-7 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Step 4: USCIS Filing and Queue Monitoring',
    description:
      'We file completed application package and confirm receipt with USCIS after submission. Receipt Notice Form I-797 is confirmed and tracked as biometrics appointment date approaches. Florida USCIS field office processing times are monitored against current USCIS processing time reports. Delays in excess of processing window require an inquiry to the Florida office.',
    icon: (
      <svg className="w-7 h-7 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Step 5: Biometrics Appointment Preparation',
    description:
      'We confirm all identity documents on file match with information submitted on the N-400. Name spellings, date of birth and country of birth must match exactly across all records. We confirm complete list of acceptable identity documents before biometrics appointment. Our immigration lawyer corrects discrepancies in advance.',
    icon: (
      <svg className="w-7 h-7 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 004 11a7.958 7.958 0 001.574 4.792" />
      </svg>
    ),
  },
  {
    number: '06',
    title: 'Step 6: Civics Test and Full Interview Preparation',
    description:
      'You receive a complete N-400 oral review covering all sections in interview sequence. Civics preparation covers current Florida officeholders and congressional district representatives for your area. English proficiency tests run alongside civics preparation to address pronunciation and oral clarity together. Mock interview sessions replicate the USCIS field office format, question order and follow up style.',
    icon: (
      <svg className="w-7 h-7 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zM12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    number: '07',
    title: 'Step 7: Attorney Representation at the USCIS Interview',
    description:
      "Our attorney attends the USCIS interview alongside the applicant on scheduled date. Immediate document requests from the adjudicating officer are addressed on record. Any officer concerns raised at the interview are resolved with supporting documentation during the session. Our attorney ensures the interview record accurately reflects application and applicant's responses.",
    icon: (
      <svg className="w-7 h-7 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: '08',
    title: 'Step 8: Oath Ceremony Scheduling and Certificate Review',
    description:
      'We confirm your scheduled Oath ceremony date and prepare you for ceremony process. Your naturalization certificate is reviewed immediately after issuance for name, date and accuracy errors. Passport application guidance and immediate next steps are provided to you after review. Any certificate error is flagged for USCIS correction.',
    icon: (
      <svg className="w-7 h-7 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const ProvenProcessSection = ({
  tagline = 'ATTORNEY-GUIDED PROCESS',
  title = "Trip Law's Proven Citizenship Application Process for Lakeland, FL Clients",
  description = 'Our immigration lawyer for citizenship lakeland follow a defined case process for every florida citizenship client.',
  heroImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/why-choose-1.png',
  ctaBgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/hero-bg.png',
  consultationLink = '/appointment',
  steps = defaultSteps,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-8 bg-[#FCFDFE] text-slate-800 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        
        {/* Section Top Header (Centered) */}
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

        {/* Featured Hero Attorney Card (2 Columns Grid) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-gradient-to-br from-[#FFFDF9] via-[#FAF6EE] to-[#F5EFE0] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-[#EBE1CD] mb-16 sm:mb-24 items-center"
        >
          {/* Left Column: Seated Attorney Photo */}
          <div className="lg:col-span-5 w-full h-[300px] sm:h-[360px] lg:h-[400px] rounded-2xl overflow-hidden relative shadow-lg border border-white">
            <Image
              src={heroImage}
              alt="Licensed Immigration Attorney Seated at Mahogany Desk"
              fill
              quality={90}
              priority
              className="object-cover object-center hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Right Column: Key Details & Features */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-5">
            {/* Top Shield Badge */}
            <div className="w-14 h-14 rounded-full bg-white border-2 border-red-700 flex items-center justify-center shadow-md text-red-700">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V10M5 21V10M3 10l9-7 9 7M4 21h16M9 21v-7a1 1 0 011-1h4a1 1 0 011 1v7" />
              </svg>
            </div>

            {/* Heading */}
            <h3 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1829] ${bitter.className}`}>
              Licensed Attorney on Every Citizenship Case
            </h3>

            {/* Description Paragraph */}
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              Every case is handled by a licensed immigration attorney who prepares your N-400, assembles your documents, and represents you at the USCIS interview.
            </p>

            {/* 3 Pill Badges Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full pt-2">
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-[#E2D4B9] px-3.5 py-2.5 rounded-xl text-xs font-bold text-[#0B1829]">
                <span className="text-red-700 text-sm">👤</span>
                <span>Attorney Review</span>
              </div>
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-[#E2D4B9] px-3.5 py-2.5 rounded-xl text-xs font-bold text-[#0B1829]">
                <span className="text-red-700 text-sm">📄</span>
                <span>USCIS Representation</span>
              </div>
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-[#E2D4B9] px-3.5 py-2.5 rounded-xl text-xs font-bold text-[#0B1829]">
                <span className="text-red-700 text-sm">⚖️</span>
                <span>Legal Strategy</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-3">
              <Link
                href={consultationLink}
                className="inline-flex items-center gap-3 px-8 py-4 bg-red-700 hover:bg-red-800 text-white font-bold text-sm sm:text-base tracking-wider uppercase rounded-full shadow-xl shadow-red-900/30 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Talk to an Attorney</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* 8 Connected Process Step Cards Grid (Logo + Bar + Dot) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative pt-8">
          {steps.map((step, idx) => {
            return (
              <motion.div
                key={step.number || idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: 'easeOut' }}
                className="relative bg-white rounded-3xl p-6 sm:p-7 pt-10 shadow-lg shadow-slate-200/60 border border-slate-200/80 flex flex-col items-center text-center hover:shadow-2xl hover:border-red-700/40 transition-all duration-300 group"
              >
                {/* Circular Number Badge on Top Center */}
                <div className="absolute -top-6 inset-x-0 mx-auto w-12 h-12 rounded-full bg-white border-2 border-red-700 text-red-700 font-bold font-serif text-lg shadow-md flex items-center justify-center group-hover:bg-red-700 group-hover:text-white transition-colors duration-300 z-10">
                  {step.number}
                </div>

                {/* Icon Circle Badge */}
                <div className="w-14 h-14 rounded-full bg-red-700/10 border border-red-700/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>

                {/* Step Title */}
                <h4 className={`text-lg sm:text-xl font-bold text-[#0B1829] leading-snug mb-3 group-hover:text-red-700 transition-colors duration-300 ${bitter.className}`}>
                  {step.title}
                </h4>

                {/* Step Description */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  {step.description}
                </p>

                {/* Bottom Red Accent Dot */}
                <div className="mt-auto pt-4">
                  <div className="w-6 h-1 bg-red-700/30 rounded-full group-hover:w-10 group-hover:bg-red-700 transition-all duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Dark Navy CTA Banner with Background Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mt-20 sm:mt-24 w-full bg-[#0B1829] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden text-center border border-slate-700"
        >
          {/* Next.js Background Image with Overlay */}
          {ctaBgImage && (
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden rounded-3xl">
              <Image
                src={ctaBgImage}
                alt="Citizenship Journey CTA Background"
                fill
                quality={90}
                priority
                className="object-cover object-center opacity-65"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0B1829]/60 via-[#0B1829]/45 to-[#0F172A]/65" />
            </div>
          )}

          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-700/15 rounded-full blur-3xl pointer-events-none z-0" />

          {/* Center Tagline */}
          <div className="flex items-center justify-center gap-3 mb-3 relative z-10">
            <div className="h-[2px] w-10 bg-red-500/60 rounded-full" />
            <span className="text-red-400 font-bold text-xs sm:text-sm tracking-widest uppercase">
              READY TO START
            </span>
            <div className="h-[2px] w-10 bg-red-500/60 rounded-full" />
          </div>

          {/* Main Title - Pure Bright White */}
          <h3 className={`relative z-10 text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight drop-shadow-md ${bitter.className}`}>
            Your Citizenship Journey?
          </h3>

          {/* Subtitle - Bright Crisp Text */}
          <p className="relative z-10 text-white/90 sm:text-xl text-base mb-8 max-w-xl mx-auto font-normal leading-relaxed drop-shadow-sm">
            One attorney. One strategy. One clear process.
          </p>

          {/* CTA Button */}
          <div className="mb-10 relative z-10">
            <Link
              href={consultationLink}
              className="inline-flex items-center gap-3 px-9 py-4 bg-red-700 hover:bg-red-800 text-white font-bold text-sm sm:text-base tracking-wider uppercase rounded-full shadow-xl shadow-red-900/40 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Schedule a Consultation</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* Bottom 4 Key Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-slate-700/80 text-left relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-red-400 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-200">
                Experienced Immigration Attorneys
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-red-400 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-200">
                Personalized Legal Strategy
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-red-400 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-200">
                Timely & Responsive Case Management
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-red-400 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-200">
                Protecting Your Future and Your Records
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ProvenProcessSection;
