'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultDocuments = [
  {
    number: '01',
    title: "Officer's Statement of Probable Cause",
    description:
      "The probable cause affidavit explains why the traffic stop occurred as well as the officer's observations and arrest. The report often includes driving behavior, physical appearance, statements, roadside testing and chemical test information. Florida agencies use a standardized DUI probable cause affidavit and alcohol influence report during arrests. Additional reports may supplement those required forms.",
    link: '/appointment',
  },
  {
    number: '02',
    title: 'Officer Testimony',
    description:
      'Arresting officer explains every stage of the investigation during court proceedings. Testimony often covers the initial stop, conversations, driving behavior, physical appearance and arrest decisions. Prosecutors compare courtroom testimony with written reports, body camera footage and dispatch records.',
    link: '/appointment',
  },
  {
    number: '03',
    title: 'Standardized Field Sobriety Tests (SFSTs) & Officer Notes',
    description:
      'Field sobriety tests are used to check how well someone can balance and move around. The police officers usually do a tests, like the Horizontal Gaze Nystagmus, the Walk & Turn and the One Leg Stand. The officer records every clue observed during each exercise inside the investigation report. Medical conditions, uneven pavement, injuries, footwear, weather and lighting sometimes affect test performance.',
    link: '/appointment',
  },
  {
    number: '04',
    title: 'Breathalyzer and Blood Test Results',
    description:
      'Chemical testing often provides the strongest scientific evidence presented during DUI prosecutions. Breath testing measures alcohol concentration. Blood testing identifies alcohol or qualifying drugs. Florida law recognizes approved testing methods and permits certified personnel to conduct analyses. Blood testing commonly appears during serious injury, fatal crash or drug impairment investigations.',
    link: '/appointment',
  },
  {
    number: '05',
    title: 'Drug Recognition Expert (DRE) Evaluation',
    description:
      'Florida DUI prosecution is not just alcohol. Officers may ask for a Drug Recognition Expert if they see signs that suggest the person may be impaired by drugs. A DRE is a structured assessment of physical observations, eye exams, vital signs and other standard measures. Prosecutors may combine that evaluation with laboratory testing when presenting drug related DUI allegations.',
    link: '/appointment',
  },
  {
    number: '06',
    title: 'Dashcam and Bodycam Video',
    description:
      'Video recordings often capture events and written reports summarize only briefly. Dash cameras may show driving behavior before the stop and interactions afterward. Body camera footage usually records roadside questioning, field sobriety exercises and arrest procedures. Reviewing these recordings sometimes reveals differences between written observations and actual events.',
    link: '/appointment',
  },
  {
    number: '07',
    title: '911 Dispatch Recordings',
    description:
      "Many DUI investigations begin after another driver reports dangerous driving through 911. Dispatch recordings preserve the caller's observations. These recordings may describe swerving, speeding, collisions or other driving behavior supporting reasonable suspicion. Prosecutors frequently introduce dispatch evidence alongside officer testimony during contested hearings.",
    link: '/appointment',
  },
  {
    number: '08',
    title: 'Physical Evidence and Witness Statements',
    description:
      'Physical evidence often supports the remaining parts of the prosecution\'s case. During investigation you may see open containers of alcohol, prescription bottles, damaged vehicles, photographs and recovered items. Witnesses can be passengers, other drivers or employees of businesses or residents in the area. Dui defense attorney in lakeland examines each statement for inconsistencies, missing details and conflicting timelines.',
    link: '/appointment',
  },
];

const DocumentsSection = ({
  tagline = 'PROSECUTION EVIDENCE',
  titlePrefix = 'What Evidence the State Uses to Build a ',
  titleHighlight = 'DUI Case Against You',
  description = 'Prosecutors build DUI cases using and combining officer observations, scientific testing, recordings and witness accounts. An experienced lakeland dui defense lawyer reviews every document and recording because weak evidence often changes case direction.',
  buttonText = 'Need Help Reviewing Evidence?',
  buttonLink = '/appointment',
  trustBadgeText = 'Thorough evidence analysis today helps protect your rights and driving privileges.',
  bannerTitle = 'Not Sure What Evidence Was Collected in Your Case?',
  bannerDescription = 'Every DUI arrest involves different police reports, testing records, and video footage. Our defense attorneys review every document and guide you through your defense.',
  bannerButtonText = 'Schedule a Consultation',
  bannerButtonLink = '/appointment',
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/documents-bg.png',
  documents = defaultDocuments,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#F8FAFC] text-slate-800">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src={bgImage}
          alt="DUI Evidence Background Image"
          fill
          quality={90}
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-white/70" />
      </div>

      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          <div className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="flex flex-col items-start text-left pt-0"
            >
              <div className="flex flex-col items-start gap-2 mb-4">
                <span className="text-red-700 font-bold text-xs sm:text-sm tracking-widest uppercase">
                  {tagline}
                </span>
                <div className="h-[3px] w-14 bg-red-700 rounded-full" />
              </div>

              <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1829] tracking-tight leading-[1.2] mb-6 ${bitter.className}`}>
                {titlePrefix}
                <span className="text-red-700 block mt-1">{titleHighlight}</span>
              </h2>

              <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed mb-8">
                {description}
              </p>

              <Link
                href={buttonLink}
                className="inline-flex items-center gap-3 px-8 py-4 bg-red-700 hover:bg-red-800 text-white font-bold text-sm sm:text-base tracking-wider uppercase rounded-full shadow-xl shadow-red-900/30 transition-all duration-300 transform hover:-translate-y-0.5 mb-8"
              >
                <span>{buttonText}</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-red-700/5 border border-red-700/20 max-w-md">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-700/10 flex items-center justify-center text-red-700">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <p className="text-slate-700 text-xs sm:text-sm font-medium leading-snug">
                  {trustBadgeText}
                </p>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {documents.map((doc, idx) => (
                <motion.div
                  key={doc.number || idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: 'easeOut' }}
                  className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/70 border border-slate-100 hover:border-red-700/40 flex flex-col items-start hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group relative"
                >
                  <div className="flex items-center justify-between w-full mb-6">
                    <span className="text-red-700 font-mono font-bold text-sm bg-red-700/10 px-3.5 py-1 rounded-full border border-red-700/20">
                      {doc.number}
                    </span>
                  </div>

                  <div className="w-16 h-16 rounded-full bg-red-700/10 border border-red-700/20 flex items-center justify-center mb-6 group-hover:bg-red-700 group-hover:text-white transition-colors duration-300">
                    <svg className="w-8 h-8 text-red-700 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>

                  <h3 className={`text-xl font-bold text-[#0B1829] mb-3 group-hover:text-red-700 transition-colors duration-300 ${bitter.className}`}>
                    {doc.title}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed mb-6 flex-grow">
                    {doc.description}
                  </p>

                  <Link
                    href={doc.link}
                    className="inline-flex items-center gap-2 text-red-700 font-bold text-sm tracking-wide uppercase hover:text-red-800 transition-colors duration-200"
                  >
                    <span>Learn More</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative w-full mt-12 lg:mt-16 bg-[#081324] rounded-3xl p-6 sm:p-9 md:p-10 border border-slate-700/80 shadow-2xl shadow-black/50 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="absolute right-0 bottom-0 w-80 h-80 bg-red-700/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center gap-5 sm:gap-6 z-10">
            <div className="flex-shrink-0 w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-red-700/15 border border-red-700/30 flex items-center justify-center text-red-700">
              <svg className="w-8 h-8 sm:w-9 sm:h-9" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l9-4 9 4M3 6v14a1 1 0 001 1h16a1 1 0 001-1V6M3 6l9 6 9-6M12 12v9" />
              </svg>
            </div>
            <div>
              <h4 className={`text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1.5 ${bitter.className}`}>
                {bannerTitle}
              </h4>
              <p className="text-slate-300 text-sm sm:text-base font-normal max-w-2xl leading-relaxed">
                {bannerDescription}
              </p>
            </div>
          </div>

          <div className="z-10 flex-shrink-0 w-full md:w-auto">
            <Link
              href={bannerButtonLink}
              className="inline-flex items-center justify-center gap-3 w-full md:w-auto px-8 py-4 bg-red-700 hover:bg-red-800 text-white font-bold text-sm sm:text-base tracking-wider uppercase rounded-full shadow-xl shadow-red-900/40 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>{bannerButtonText}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default DocumentsSection;
