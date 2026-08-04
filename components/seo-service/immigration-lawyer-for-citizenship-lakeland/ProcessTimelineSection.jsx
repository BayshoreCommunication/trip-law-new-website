'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

// 4 Realistic Step Illustration Components
const Step1Illustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <svg className="w-28 h-28" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background shadow & document */}
      <rect x="25" y="15" width="48" height="62" rx="4" fill="white" stroke="#E2E8F0" strokeWidth="2" className="shadow-sm" />
      {/* Clip & Header */}
      <rect x="41" y="11" width="16" height="8" rx="2" fill="#475569" />
      <circle cx="49" cy="15" r="2" fill="#E2E8F0" />
      {/* Title N-400 */}
      <text x="33" y="30" fill="#0F172A" fontSize="8" fontWeight="bold" fontFamily="sans-serif">N-400</text>
      {/* Form lines */}
      <rect x="33" y="36" width="32" height="2" rx="1" fill="#CBD5E1" />
      <rect x="33" y="42" width="28" height="2" rx="1" fill="#E2E8F0" />
      <rect x="33" y="48" width="30" height="2" rx="1" fill="#E2E8F0" />
      <rect x="33" y="54" width="24" height="2" rx="1" fill="#E2E8F0" />
      {/* Signature line */}
      <path d="M33 63C37 61 40 65 44 63" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
      {/* Circular Gold Checkmark Badge */}
      <circle cx="64" cy="62" r="12" fill="#B91C1C" />
      <path d="M58 62L62 66L70 58" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

const Step2Illustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <svg className="w-28 h-28" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer subtle circular background */}
      <circle cx="50" cy="50" r="32" fill="#FEF2F2" />
      {/* Detailed Fingerprint Lines */}
      <path d="M50 28A20 20 0 0 1 70 48" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M50 34A14 14 0 0 1 64 48" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M50 40A8 8 0 0 1 58 48" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M30 48A20 20 0 0 1 50 28" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
      <path d="M36 48A14 14 0 0 1 50 34" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
      <path d="M42 48A8 8 0 0 1 50 40" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
      <path d="M50 48v16" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M44 52c0 6 3 12 6 16" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />
      <path d="M56 52c0 6-3 12-6 16" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />
      {/* Magnifying Glass */}
      <circle cx="62" cy="56" r="13" stroke="#B91C1C" strokeWidth="3.5" fill="none" />
      <path d="M71 65L82 76" stroke="#B91C1C" strokeWidth="4" strokeLinecap="round" />
    </svg>
  </div>
);

const Step3Illustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <svg className="w-28 h-28" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Courtroom / Office Background pillars */}
      <path d="M20 70V30M32 70V30M68 70V30M80 70V30" stroke="#E2E8F0" strokeWidth="2" opacity="0.5" />
      <path d="M15 30H85M15 70H85" stroke="#E2E8F0" strokeWidth="2" opacity="0.5" />
      {/* Desk */}
      <rect x="25" y="60" width="50" height="15" rx="3" fill="#1E293B" />
      {/* Officer (Left Person) */}
      <circle cx="36" cy="42" r="7" fill="#0F172A" />
      <path d="M26 60C26 51 31 48 36 48C41 48 46 51 46 60" fill="#0F172A" />
      {/* Applicant (Right Person) */}
      <circle cx="64" cy="42" r="7" fill="#334155" />
      <path d="M54 60C54 51 59 48 64 48C69 48 74 51 74 60" fill="#334155" />
      {/* Laptop / Document on table */}
      <rect x="42" y="54" width="16" height="6" rx="1" fill="#94A3B8" />
      {/* Speech Bubble with Checkmark */}
      <rect x="40" y="22" width="20" height="14" rx="3" fill="#B91C1C" />
      <path d="M48 34L50 37L52 34" fill="#B91C1C" />
      <path d="M45 29L48 32L55 25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

const Step4Illustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <svg className="w-28 h-28" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* US Flag */}
      <g transform="translate(38, 12)">
        <rect x="0" y="0" width="34" height="22" rx="2" fill="white" stroke="#E2E8F0" strokeWidth="1" />
        {/* Red stripes */}
        <rect x="0" y="0" width="34" height="3.3" fill="#B91C1C" />
        <rect x="0" y="6.6" width="34" height="3.3" fill="#B91C1C" />
        <rect x="0" y="13.2" width="34" height="3.3" fill="#B91C1C" />
        <rect x="0" y="19.8" width="34" height="2.2" fill="#B91C1C" />
        {/* Blue Canton */}
        <rect x="0" y="0" width="15" height="12" fill="#1E3A8A" />
        {/* Star */}
        <circle cx="7.5" cy="6" r="2" fill="white" />
      </g>
      {/* Certificate of Naturalization Sheet */}
      <rect x="22" y="32" width="46" height="54" rx="3" fill="white" stroke="#CBD5E1" strokeWidth="2" className="shadow-md" />
      <text x="27" y="44" fill="#0F172A" fontSize="5" fontWeight="bold" fontFamily="sans-serif">Certificate of</text>
      <text x="27" y="50" fill="#0F172A" fontSize="5" fontWeight="bold" fontFamily="sans-serif">Naturalization</text>
      <rect x="27" y="56" width="36" height="1.5" fill="#E2E8F0" />
      <rect x="27" y="60" width="30" height="1.5" fill="#E2E8F0" />
      <rect x="27" y="64" width="32" height="1.5" fill="#E2E8F0" />
      {/* Gold Medal Seal */}
      <circle cx="56" cy="74" r="8" fill="#B91C1C" />
      <circle cx="56" cy="74" r="6" fill="#D97706" />
      <path d="M56 70L57.5 73H60.5L58 75L59 78L56 76L53 78L54 75L51.5 73H54.5L56 70Z" fill="white" />
    </svg>
  </div>
);

// 4 Process Timeline Steps from Google Doc
const defaultSteps = [
  {
    number: '01',
    title: 'Application Receipt',
    description:
      'After USCIS receives your Form N 400, they will send you Notice of Action or Form I-797C. Can take from 1 to 3 weeks from filing. You can use 13 character receipt number on this notice to check your case status online at USCIS website.',
    link: '/appointment',
    illustration: <Step1Illustration />,
  },
  {
    number: '02',
    title: 'Biometrics Appointment',
    description:
      'You will receive an appointment notice from USCIS with time, date and place of your local Application Support Center (ASC). At this appointment we will take your fingerprints, photo and signature to run a mandatory federal background check. This usually take 3 to 8 weeks from filing. In some cases, USCIS may notify you that they are reusing previously captured biometrics, bypassing this physical step entirely.',
    link: '/appointment',
    illustration: <Step2Illustration />,
  },
  {
    number: '03',
    title: 'Interview & Testing',
    description:
      'Once background checks clear, you will receive an interview appointment notice. It may take 3 to 9 months from filing. You will have an in person interview with USCIS officer to review answers you gave on your N-400 application under oath. Furthermore you will take naturalization test as well as U.S. civics test.',
    link: '/appointment',
    illustration: <Step3Illustration />,
  },
  {
    number: '04',
    title: 'Oath Ceremony',
    description:
      'Your formal application is approved and you are scheduled for a naturalization ceremony. It usually take 1 to 3 months post-interview. In some field offices, this occurs on the same day as your interview. You will return your Green Card, take the official Oath of Allegiance to the United States, and receive your Certificate of Naturalization—marking your official transition to an American citizen.',
    link: '/appointment',
    illustration: <Step4Illustration />,
  },
];

const ProcessTimelineSection = ({
  badgeText = 'PROCESS TIMELINE',
  title = 'How Long You Should Expect For Citizenship Application Processing',
  subtitle = 'Processing windows fluctuate depending on local USCIS field office volume.',
  steps = defaultSteps,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#FAFBFD] text-slate-800 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col items-center text-center mb-12 sm:mb-16"
        >
          {/* Pill Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-700/10 border border-red-700/30 text-red-700 font-bold text-xs tracking-wider uppercase mb-3">
            <svg className="w-4 h-4 text-red-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{badgeText}</span>
          </div>

          {/* Main Title */}
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1829] tracking-tight max-w-4xl leading-[1.2] mb-3 ${bitter.className}`}>
            {title}
          </h2>

          {/* Star Accent Line */}
          <div className="flex items-center justify-center gap-3 my-3">
            <div className="h-[2px] w-12 sm:w-16 bg-red-700/60 rounded-full" />
            <span className="text-red-700 font-bold text-sm">✦</span>
            <div className="h-[2px] w-12 sm:w-16 bg-red-700/60 rounded-full" />
          </div>

          {/* Subtitle */}
          <p className="text-slate-600 text-base sm:text-lg font-normal max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        {/* 2x2 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number || idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/70 border border-slate-100/90 flex flex-col sm:flex-row items-start gap-6 hover:shadow-2xl hover:border-red-700/40 transition-all duration-300 relative group"
            >
              {/* Left Illustration Box */}
              <div className="w-full sm:w-44 h-40 sm:h-44 rounded-2xl bg-[#FAF6EE]/90 border border-[#F0E6D2] flex items-center justify-center p-3 flex-shrink-0 relative overflow-hidden shadow-inner group-hover:border-red-700/30 transition-colors duration-300">
                {step.image ? (
                  <Image src={step.image} alt={step.title} fill className="object-cover object-center rounded-xl" />
                ) : (
                  step.illustration || step.icon
                )}
              </div>

              {/* Right Step Details */}
              <div className="flex-1 flex flex-col items-start text-left">
                
                {/* Step Number Badge */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-red-700 font-mono font-bold text-sm bg-red-700/10 px-3.5 py-0.5 rounded-full border border-red-700/20">
                    {step.number}
                  </span>
                  <div className="h-[2px] w-8 bg-red-700 rounded-full" />
                </div>

                {/* Step Title */}
                <h3 className={`text-xl sm:text-2xl font-bold text-[#0B1829] mb-2 group-hover:text-red-700 transition-colors duration-300 ${bitter.className}`}>
                  {step.title}
                </h3>

                {/* Step Main Description */}
                <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* Bullet Points */}
                {step.bullets && step.bullets.length > 0 && (
                  <div className="flex flex-col gap-2 mb-6 w-full">
                    {step.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2">
                        <div className="flex-shrink-0 w-4 h-4 rounded-full bg-red-700 text-white flex items-center justify-center mt-1">
                          <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-slate-700 text-xs sm:text-sm font-medium leading-snug">
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Bottom Right Arrow Button */}
                <Link
                  href={step.link}
                  className="mt-auto self-end flex-shrink-0 w-10 h-10 rounded-full border border-red-700/30 text-red-700 flex items-center justify-center group-hover:bg-red-700 group-hover:text-white group-hover:border-red-700 transition-all duration-300 shadow-sm"
                  aria-label={step.title}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProcessTimelineSection;
