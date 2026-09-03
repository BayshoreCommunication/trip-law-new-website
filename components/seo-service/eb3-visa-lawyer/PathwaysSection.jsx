'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const PathwaysSection = ({
  tagline = 'EB-3 VISA PATHWAYS',
  title = 'Pathways to EB 3 Visa',
  subtitle1 = 'There are several EB 3 pathways based on your occupation and location. Attorney Trip Vien reviews your background against each pathway and recommends strategy according to it.',
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/pathways-bg.png',
  pathways = [
    {
      title: 'Two Years of Experience Skilled Workers',
      desc: 'Skilled worker classifications require candidates to possess two years of relevant work experience. Qualifying positions cannot be temporary or seasonal under federal labor law regulatory provisions. Relevant technical training or vocational education may count toward mandatory experience requirements. Labor certification filings must explicitly document all specific skill prerequisites for position approval.',
    },
    {
      title: "U.S. Bachelor's or Foreign Equivalent Professionals",
      desc: 'Professional classifications require applicants to hold an official United States baccalaureate degree. Foreign educational credentials must undergo formal academic evaluations to establish absolute equivalency. Work experience cannot substitute for a missing bachelor degree under professional category rules. Employers must prove that baccalaureate degrees represent standard requirements for advertised positions.',
    },
    {
      title: 'Unskilled Labor and 10,000 Visa Cap',
      desc: 'Other worker classifications accommodate positions requiring less than two years of training. Federal law caps annual visa allocations for unskilled workers at ten thousand visas. Extended waiting periods frequently impact unskilled candidate processing timelines due to statutory limits. Employers must demonstrate sustained business necessity for positions despite longer immigrant visa queues.',
    },
    {
      title: 'Schedule A Workers',
      desc: 'Schedule A occupations bypass standard labor certification procedures through pre-certified DOL designations. Registered nurses and physical therapists represent primary occupational categories qualifying under Schedule A. Employers file petitions directly with immigration authorities without conducting prior domestic recruitment steps. Direct filing significantly accelerates baseline processing timelines for qualifying foreign healthcare professionals.',
    },
    {
      title: 'Employer Sponsored Green Card',
      desc: 'Employer sponsorship forms the structural foundation of employment based third preference green card applications. Foreign workers cannot self petition under standard third preference green card statutory provisions. Sponsoring entities retain primary control over initial labor testing and immigrant petition steps. Legal obligations remain tied to sponsoring organizations throughout initial labor certification phase execution.',
    },
    {
      title: 'Workers Inside the United States',
      desc: 'Foreign workers residing inside America maintain underlying legal nonimmigrant status during initial processing. Applicants become eligible for status adjustment upon priority date availability under official updates. Concurrent filing permits immediate employment authorization and travel permission during processing delays. Maintaining uninterrupted legal status prevents severe statutory inadmissibility bars during final adjudication.',
    },
    {
      title: 'Consular Processing for Workers Abroad',
      desc: 'Beneficiaries residing abroad complete immigrant visa processing through overseas United States consular posts. Approved immigrant petitions transition to the National Visa Center for document collection procedures. Consular interviews represent final administrative screening steps prior to immigrant visa issuance authorization. Applicants enter America as lawful permanent residents upon initial entry through border checkpoints.',
    },
  ],
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#061224] text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src={bgImage}
          alt="Pathways Section Background"
          fill
          quality={90}
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030914] via-[#061224]/90 to-[#030914]" />
      </div>

      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <span className="text-red-500 font-bold text-xs sm:text-sm tracking-widest uppercase mb-3">
            {tagline}
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.2] mb-4 ${bitter.className}`}>
            {title}
          </h2>
          <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {subtitle1}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pathways.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-[#0B1829]/90 border border-slate-700/60 hover:border-red-700/60 rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-red-700/20 border border-red-700/40 flex items-center justify-center text-red-500 font-bold text-base mb-5">
                  0{idx + 1}
                </div>
                <h3 className={`text-lg sm:text-xl font-bold text-white mb-3 ${bitter.className}`}>
                  {item.title}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PathwaysSection;
