'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

// Detailed Graphic Illustrations for Civics Steps
const Step1Graphic = () => (
  <div className="w-full h-full bg-gradient-to-br from-[#0B1829] via-[#1E293B] to-[#0F172A] p-8 flex flex-col justify-between relative overflow-hidden text-white">
    <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-red-700/20 rounded-full blur-3xl" />
    
    {/* Top Badge */}
    <div className="flex items-center justify-between z-10">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-700/20 border border-red-700/40 text-red-400 text-xs font-bold uppercase tracking-wider">
        <span>December 1 Filing Date</span>
      </div>
      <span className="text-slate-400 font-mono text-xs">USCIS Form N-400</span>
    </div>

    {/* Center Capitol / Test Version Graphic */}
    <div className="my-auto py-6 z-10 flex flex-col items-center text-center">
      <div className="w-20 h-20 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-4 shadow-2xl backdrop-blur-md">
        <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V10M5 21V10M3 10l9-7 9 7M4 21h16M9 21v-7a1 1 0 011-1h4a1 1 0 011 1v7" />
        </svg>
      </div>
      <div className="grid grid-cols-2 gap-4 w-full max-w-xs mt-2">
        <div className="bg-white/10 backdrop-blur-sm border border-white/15 p-3 rounded-xl text-center">
          <div className="text-xs text-slate-300 font-medium">2008 Test</div>
          <div className="text-xl font-bold text-white mt-0.5">100 Qs</div>
          <div className="text-[10px] text-red-400 mt-0.5">Pass 6/10</div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm border border-white/15 p-3 rounded-xl text-center">
          <div className="text-xs text-slate-300 font-medium">2020 Test</div>
          <div className="text-xl font-bold text-white mt-0.5">128 Qs</div>
          <div className="text-[10px] text-red-400 mt-0.5">Pass 12/20</div>
        </div>
      </div>
    </div>

    {/* Bottom Footer */}
    <div className="flex items-center justify-between text-xs text-slate-300 z-10 pt-2 border-t border-slate-700/80">
      <span>Official Civics Test Evaluation</span>
      <span className="text-red-400 font-bold">Lakeland, FL</span>
    </div>
  </div>
);

const Step2Graphic = () => (
  <div className="w-full h-full bg-gradient-to-br from-[#1E293B] via-[#0B1829] to-[#0F172A] p-8 flex flex-col justify-between relative overflow-hidden text-white">
    <div className="absolute -left-10 -bottom-10 w-60 h-60 bg-red-700/20 rounded-full blur-3xl" />

    {/* Top Badge */}
    <div className="flex items-center justify-between z-10">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-700/20 border border-red-700/40 text-red-400 text-xs font-bold uppercase tracking-wider">
        <span>Florida Specific Civics</span>
      </div>
      <span className="text-slate-400 font-mono text-xs">District 15</span>
    </div>

    {/* Center Florida Senators & Rep List */}
    <div className="my-auto py-4 z-10 w-full max-w-sm mx-auto">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-2xl">
        <div className="text-xs font-bold uppercase tracking-wider text-red-400 mb-3 flex items-center justify-between">
          <span>Florida U.S. Officeholders</span>
          <span className="text-emerald-400">✓ Verified</span>
        </div>
        <div className="space-y-2.5 text-xs text-slate-200">
          <div className="flex items-center justify-between bg-white/5 p-2 rounded-lg border border-white/10">
            <span>U.S. Senator 1</span>
            <span className="font-bold text-white">Marco Rubio</span>
          </div>
          <div className="flex items-center justify-between bg-white/5 p-2 rounded-lg border border-white/10">
            <span>U.S. Senator 2</span>
            <span className="font-bold text-white">Rick Scott</span>
          </div>
          <div className="flex items-center justify-between bg-white/5 p-2 rounded-lg border border-white/10">
            <span>Congressional Rep</span>
            <span className="font-bold text-white">District 15 Representative</span>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Footer */}
    <div className="flex items-center justify-between text-xs text-slate-300 z-10 pt-2 border-t border-slate-700/80">
      <span>Locally Accurate Answers Required</span>
      <span className="text-red-400 font-bold">USCIS Interview Drills</span>
    </div>
  </div>
);

const Step3Graphic = () => (
  <div className="w-full h-full bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0B1829] p-8 flex flex-col justify-between relative overflow-hidden text-white">
    <div className="absolute -right-10 -top-10 w-60 h-60 bg-red-700/20 rounded-full blur-3xl" />

    {/* Top Badge */}
    <div className="flex items-center justify-between z-10">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-700/20 border border-red-700/40 text-red-400 text-xs font-bold uppercase tracking-wider">
        <span>Oral English Proficiency</span>
      </div>
      <span className="text-slate-400 font-mono text-xs">Spoken Test</span>
    </div>

    {/* Center Blackboard & Microphone Graphic */}
    <div className="my-auto py-4 z-10 w-full max-w-sm mx-auto">
      <div className="bg-[#0B1829] border-2 border-slate-700 rounded-2xl p-5 shadow-2xl relative">
        <div className="text-xs font-bold uppercase tracking-wider text-red-400 mb-2">
          Civics Practice Question
        </div>
        <p className="text-sm font-serif italic text-slate-200 mb-3 leading-relaxed">
          &ldquo;What is the supreme law of the land?&rdquo;
        </p>
        <div className="bg-red-700/20 border border-red-700/40 p-2.5 rounded-xl text-xs text-red-300 font-semibold flex items-center gap-2">
          <span className="text-emerald-400 font-bold">Answer:</span>
          <span>The Constitution</span>
        </div>
      </div>
    </div>

    {/* Bottom Footer */}
    <div className="flex items-center justify-between text-xs text-slate-300 z-10 pt-2 border-t border-slate-700/80">
      <span>Verbal Interview Drills</span>
      <span className="text-red-400 font-bold">Spoken English Format</span>
    </div>
  </div>
);

const Step4Graphic = () => (
  <div className="w-full h-full bg-gradient-to-br from-[#0B1829] via-[#1E293B] to-[#0F172A] p-8 flex flex-col justify-between relative overflow-hidden text-white">
    <div className="absolute -left-10 -top-10 w-60 h-60 bg-red-700/20 rounded-full blur-3xl" />

    {/* Top Badge */}
    <div className="flex items-center justify-between z-10">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-700/20 border border-red-700/40 text-red-400 text-xs font-bold uppercase tracking-wider">
        <span>Mock Interview Sessions</span>
      </div>
      <span className="text-slate-400 font-mono text-xs">Full Walkthrough</span>
    </div>

    {/* Center Mock Checklist */}
    <div className="my-auto py-4 z-10 w-full max-w-sm mx-auto">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-2xl">
        <div className="text-xs font-bold uppercase tracking-wider text-red-400 mb-3 flex items-center justify-between">
          <span>Mock Interview Checklist</span>
          <span className="text-xs text-slate-300">N-400 Sequence</span>
        </div>
        <div className="space-y-2 text-xs text-slate-200">
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 font-bold">✓</span>
            <span>Personal Information & Residence History</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 font-bold">✓</span>
            <span>Employment & Travel History</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 font-bold">✓</span>
            <span>Good Moral Character (GMC) Walkthrough</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 font-bold">✓</span>
            <span>Civics & Spoken English Test Practice</span>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Footer */}
    <div className="flex items-center justify-between text-xs text-slate-300 z-10 pt-2 border-t border-slate-700/80">
      <span>Simulated Interview Conditions</span>
      <span className="text-red-400 font-bold">USCIS Officer Prep</span>
    </div>
  </div>
);

const Step5Graphic = () => (
  <div className="w-full h-full bg-gradient-to-br from-[#1E293B] via-[#0B1829] to-[#0F172A] p-8 flex flex-col justify-between relative overflow-hidden text-white">
    <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-red-700/20 rounded-full blur-3xl" />

    {/* Top Badge */}
    <div className="flex items-center justify-between z-10">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-700/20 border border-red-700/40 text-red-400 text-xs font-bold uppercase tracking-wider">
        <span>Age & Residency Exemptions</span>
      </div>
      <span className="text-slate-400 font-mono text-xs">Exempt Rules</span>
    </div>

    {/* Center 50/20 & 55/15 Badges */}
    <div className="my-auto py-4 z-10 grid grid-cols-2 gap-4 w-full max-w-sm mx-auto">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl text-center">
        <div className="text-2xl font-bold text-red-400">50 / 20</div>
        <div className="text-xs font-bold text-white mt-1">Exemption Rule</div>
        <p className="text-[11px] text-slate-300 mt-1 leading-snug">
          Age 50+ with 20 years PR status (Native Language)
        </p>
      </div>
      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl text-center">
        <div className="text-2xl font-bold text-red-400">55 / 15</div>
        <div className="text-xs font-bold text-white mt-1">Exemption Rule</div>
        <p className="text-[11px] text-slate-300 mt-1 leading-snug">
          Age 55+ with 15 years PR status (Native Language)
        </p>
      </div>
    </div>

    {/* Bottom Footer */}
    <div className="flex items-center justify-between text-xs text-slate-300 z-10 pt-2 border-t border-slate-700/80">
      <span>Native Language Civics Test</span>
      <span className="text-red-400 font-bold">N-648 Medical Waiver</span>
    </div>
  </div>
);

// Map of default graphic fallbacks
const graphicMap = {
  '01': <Step1Graphic />,
  '02': <Step2Graphic />,
  '03': <Step3Graphic />,
  '04': <Step4Graphic />,
  '05': <Step5Graphic />,
};

// 5 Civics Preparation Steps
const defaultSteps = [
  {
    number: '01',
    title: 'Identifying Your Test Version Based on Filing Date',
    description:
      'An attorney verifies applicable civics test version with your N-400 filing date. Filing naturalization before December 1, 2020 generally fall under original 2008 test with 100 question. This test requires six correct answers from ten questions. If applicants file between December 2020 and February 2021 they may face 2020 test with 128 question. The 2020 test consist twenty questions and requires twelve correct answers from it. Immigration lawyers prepare applicants for Q&A and mock testing after confirming correct versions.',
    icon: (
      <svg className="w-7 h-7 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    isImageLeft: true,
  },
  {
    number: '02',
    title: 'US Specific Civics Answers Officers Expect',
    description:
      'USCIS officers ask location specific questions and require current, locally accurate information to pass. Florida’s U.S. Senators and your congressional district representative are standard interview questions. General national study guides provide office titles but omit current Florida officeholder names. Nationally correct but locally wrong answer counts as an incorrect response at Florida USCIS. Immigration lawyer supplies US specific study list with current officeholder names and districts.',
    icon: (
      <svg className="w-7 h-7 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V10M5 21V10M3 10l9-7 9 7M4 21h16M9 21v-7a1 1 0 011-1h4a1 1 0 011 1v7" />
      </svg>
    ),
    isImageLeft: false,
  },
  {
    number: '03',
    title: 'Improving Oral English Proficiency',
    description:
      'Civics test at Lakeland, Fl USCIS is conducted entirely through spoken English. Officers assess pronunciation clarity, comprehension and applicant’s answer matches the question asked. Mispronouncing civics terms changes the answer’s meaning and results in failed question response. Immigration lawyer runs verbal drills matching the pace and format of USCIS interviews.',
    icon: (
      <svg className="w-7 h-7 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
      </svg>
    ),
    isImageLeft: true,
  },
  {
    number: '04',
    title: 'Full Mock Interview Sessions',
    description:
      'Mock interview covers all N-400 sections in the sequence Florida USCIS officers follow. It catches contradictions between verbal answers and written N-400 before appointment. USCIS officers ask follow up questions based on specific N-400 entries. Practicing under interview conditions reduces hesitation and minimizes extra officer questioning.',
    icon: (
      <svg className="w-7 h-7 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    isImageLeft: false,
  },
  {
    number: '05',
    title: 'Aware Age and Long Term Residency Exceptions',
    description:
      'The 50/20 exemption allows civics test to be taken in applicant’s native language. The 55/15 exemption covers applicants aged 55 or older with 15 years of permanent residency. Both groups take the 2008 version with 100 questions answered in their native language. English test still applies unless the applicant separately qualifies for N-648 medical waiver. An immigration lawyer identifies applicable exemption and provides study materials in native language.',
    icon: (
      <svg className="w-7 h-7 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    isImageLeft: true,
  },
];

const CivicsTestPrepSection = ({
  tagline = 'CITIZENSHIP PREPARATION',
  title = 'How a Lakeland Immigration Lawyer Prepared Applicants for the U.S. Citizenship Civics Test',
  description = 'USCIS expanded the naturalization civics test to 128 possible questions in 2021. An immigration lawyer for citizenship in Lakeland prepares applicants for both test versions and confirms which applies before the session.',
  headerImage1 = null,
  headerImage2 = null,
  headerImage3 = null,
  steps = defaultSteps,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-16 bg-[#FCFDFE] text-slate-800 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        
        {/* Section Top Header (Left Title, Middle Subtitle, Right Honeycomb Card Collage) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 lg:mb-20">
          
          {/* Left Title & Tagline (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-red-700 font-bold text-xs sm:text-sm tracking-widest uppercase">
                {tagline}
              </span>
              <div className="h-[2px] w-10 bg-red-700 rounded-full" />
            </div>
            <div className="text-red-700 font-bold text-xs mb-2">✦</div>
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1829] tracking-tight leading-[1.18] ${bitter.className}`}>
              {title}
            </h2>
          </div>

          {/* Middle Description Paragraph (3 cols) */}
          <div className="lg:col-span-3 flex flex-col items-start justify-center">
            <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
              {description}
            </p>
          </div>

          {/* Right Floating Image & Card Collage (4 cols - Exact match with reference screenshot) */}
          <div className="lg:col-span-4 flex items-center justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[360px] h-[240px] sm:h-[260px] p-2">
              
              {/* Card 1: Top Left Dec 1 Filing Badge */}
              <div className="absolute top-0 left-0 w-36 h-32 sm:w-40 sm:h-36 rounded-2xl bg-[#0D1929] text-white p-5 shadow-2xl border border-slate-700/80 transform -rotate-6 hover:rotate-0 transition-all duration-300 flex flex-col justify-between z-0 group">
                {headerImage1 ? (
                  <Image src={headerImage1} alt="December 1 Filing Date" fill className="object-cover rounded-2xl" />
                ) : (
                  <>
                    <span className="text-[10px] font-bold text-red-500 tracking-widest uppercase">
                      DEC 1 FILING
                    </span>
                    <div className={`text-xl sm:text-2xl font-bold text-white ${bitter.className}`}>
                      128 Qs Test
                    </div>
                    <span className="text-[10px] text-slate-300">
                      USCIS Revision
                    </span>
                  </>
                )}
              </div>

              {/* Card 2: Center Right Lakeland Civics Drills Badge */}
              <div className="absolute top-8 right-2 w-40 h-36 sm:w-44 sm:h-40 rounded-2xl bg-[#132238] text-white p-5 shadow-2xl border border-slate-700/80 z-10 transform rotate-6 hover:rotate-0 transition-all duration-300 flex flex-col justify-between group">
                {headerImage2 ? (
                  <Image src={headerImage2} alt="Lakeland Civics Session" fill className="object-cover rounded-2xl" />
                ) : (
                  <>
                    <div className="w-7 h-7 rounded-full bg-red-700/30 border border-red-500/40 flex items-center justify-center text-red-400 text-xs font-bold">
                      ✦
                    </div>
                    <div>
                      <div className={`text-sm sm:text-base font-bold text-white mb-1 ${bitter.className}`}>
                        Lakeland Civics Drills
                      </div>
                      <div className="text-[10px] text-slate-300">
                        Mock Q&A & English Drills
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Card 3: Bottom Right Red Form N-400 Badge */}
              <div className="absolute bottom-0 right-0 w-36 h-32 sm:w-40 sm:h-36 rounded-2xl bg-[#B91C1C] text-white p-5 shadow-2xl border border-red-500/50 z-20 transform -rotate-3 hover:rotate-0 transition-all duration-300 flex flex-col justify-between group">
                {headerImage3 ? (
                  <Image src={headerImage3} alt="Form N-400 Citizenship Application" fill className="object-cover rounded-2xl" />
                ) : (
                  <>
                    <span className="text-[10px] font-bold text-red-200 tracking-widest uppercase">
                      FORM N-400
                    </span>
                    <div className={`text-sm sm:text-base font-bold text-white leading-tight ${bitter.className}`}>
                      Citizenship Application
                    </div>
                    <span className="text-[10px] text-red-100/90 font-medium">
                      Attorney Reviewed
                    </span>
                  </>
                )}
              </div>

            </div>
          </div>

        </div>

        {/* 5 Alternating Zig-Zag Preparation Steps */}
        <div className="flex flex-col gap-10 lg:gap-14">
          {steps.map((step, idx) => {
            const isLeft = step.isImageLeft;

            return (
              <motion.div
                key={step.number || idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.05, ease: 'easeOut' }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Graphic / Image Block */}
                <div
                  className={`lg:col-span-6 w-full h-[280px] sm:h-[340px] md:h-[380px] rounded-3xl overflow-hidden relative shadow-xl border border-slate-200/80 group ${
                    isLeft ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  {step.image ? (
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    graphicMap[step.number] || (
                      <div className="w-full h-full bg-slate-900 text-white flex items-center justify-center p-8">
                        <span className="text-xl font-bold">{step.title}</span>
                      </div>
                    )
                  )}
                  {/* Soft subtle border overlay */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl pointer-events-none" />
                </div>

                {/* Content Block */}
                <div
                  className={`lg:col-span-6 flex flex-col items-start text-left ${
                    isLeft ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  {/* Icon Badge & Number Row */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-red-700/10 border border-red-700/20 flex items-center justify-center flex-shrink-0">
                      {step.icon}
                    </div>
                    <span className={`text-4xl sm:text-5xl font-bold text-red-700 ${bitter.className}`}>
                      {step.number}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 className={`text-2xl sm:text-3xl font-bold text-[#0B1829] leading-snug mb-4 ${bitter.className}`}>
                    {step.title}
                  </h3>

                  {/* Red Accent Underline */}
                  <div className="h-[2px] w-12 bg-red-700 rounded-full mb-4" />

                  {/* Step Description */}
                  <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CivicsTestPrepSection;
