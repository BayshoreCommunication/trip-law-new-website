'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const HighRiskCasesSection = ({
  badgeText = 'COMPLEX & HIGH-RISK CASES',
  title = 'How Complex and High-Risk EB-2 Cases Affect Green Card Applications',
  description = "Some things in an applicant's background can shift the whole trajectory of a case. Better to know about them early and plan around them, rather than have USCIS discover them through a Request for Evidence (RFE) or a denial.",
  riskCases = [
    {
      title: 'Previous Immigration Violations',
      desc: 'Overstays, unauthorized work, failing to maintain status, all of it becomes part of the record USCIS reviews for both I-140 and I-485. Depending on how serious and how long ago, you may need to clear certain bars before the green card process can move forward at all.',
    },
    {
      title: 'Prior Visa Refusals or Misrepresentation',
      desc: "A refusal at a consulate or with USCIS doesn't just disappear. If an earlier application involved any misrepresentation, even one that wasn't intentional, that can trigger an inadmissibility issue that needs to be dealt with head on.",
    },
    {
      title: 'Unlawful Presence and Status Problems',
      desc: "More than 180 days of unlawful presence triggers a 3 year bar. It's been 10 years. These bars become a real issue if you need to leave the U.S. for consular processing. Anyone with unlawful presence in their history should get this reviewed before filing anything.",
    },
    {
      title: 'Previous USCIS Petition Denials',
      desc: "A prior I-140 denial doesn't automatically block a new filing, but it is part of the record, and USCIS will look at it. Filing again with the same weaknesses just gets the same result. Worth having someone review what went wrong the first time before trying again.",
    },
    {
      title: 'Criminal History and Inadmissibility Concerns',
      desc: "Certain convictions create grounds of inadmissibility under U.S. immigration law, regardless of how strong the EB-2 case otherwise is. Some situations call for a waiver. Others may simply be disqualifying. If there's any criminal history at all, get it reviewed before filing.",
    },
    {
      title: 'Employment or Education Documentation Gaps',
      desc: 'Unexplained gaps in employment or academic records raise questions during review. Maybe it suggests unauthorized work, maybe inconsistencies, maybe something else entirely. Whatever the reason, it needs an explanation or documentation before the petition goes in.',
    },
    {
      title: 'Immigration Court or Removal Proceedings',
      desc: "If you're currently in removal proceedings, USCIS generally can't process adjustment of status without the immigration judge weighing in first. These situations need a separate legal look, often including a motion to the court before any EB-2 filing can move.",
    },
  ],
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#040B17] text-white overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <span className="text-red-500 font-bold text-xs sm:text-sm tracking-widest uppercase mb-3">
            {badgeText}
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.2] mb-4 ${bitter.className}`}>
            {title}
          </h2>
          <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {riskCases.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-[#091424]/90 border border-slate-700/60 hover:border-red-700/60 rounded-2xl p-6 sm:p-7 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-red-700/20 border border-red-700/40 flex items-center justify-center text-red-500 font-bold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className={`text-base sm:text-lg font-bold text-white leading-snug ${bitter.className}`}>
                  {item.title}
                </h3>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighRiskCasesSection;
