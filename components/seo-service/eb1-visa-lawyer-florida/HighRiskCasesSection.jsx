'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const HighRiskCasesSection = ({
  badgeText = 'COMPLEX & HIGH-RISK CASES',
  title = 'How Complex and High-Risk EB-1 Cases Affect Green Card Applications',
  description = "A messy immigration history doesn't automatically close the door on an EB-1 petition. Usually it just shifts how the case needs to be built.",
  riskCases = [
    {
      title: 'Immigration Status Violations',
      desc: 'Past status violations complicate things, and in many cases they need to be addressed directly in the petition rather than glossed over. Depending on the specifics, a violation might affect eligibility for adjustment of status even when the underlying EB-1 petition would otherwise be approvable. Working through the full immigration history early tends to prevent unpleasant surprises later on.',
    },
    {
      title: 'Unlawful Presence in the United States',
      desc: 'Certain stretches of unlawful presence trigger admissibility bars, and those bars need to be worked through before anything else in the case can move. Time thresholds matter a great deal here, and the consequences shift depending on exactly how long the unlawful presence lasted. Sometimes a waiver becomes necessary, which adds its own separate timeline on top of everything else.',
    },
    {
      title: 'Criminal History and Inadmissibility Concerns',
      desc: 'Criminal history raises inadmissibility questions that need a strategy built around the specific facts, not a generic template pulled off a shelf. What matters is the type of offense, how long ago it happened, and how it was resolved. Full disclosure paired with the right legal argument tends to produce a better outcome than trying to minimize or leave things out entirely.',
    },
    {
      title: 'Previous Removal or Immigration Court Proceedings',
      desc: 'A prior removal or a past immigration court case adds real complexity and can significantly affect the timeline of a new petition. Depending on how those earlier proceedings ended, waivers or formal consent to reapply might be required first. Getting the sequencing right here matters more than in almost any other part of the process.',
    },
    {
      title: 'Conflicting Professional or Employment Records',
      desc: "It's easy to ask questions when they are not matched by the dates or descriptions you've included with your records, but harder to resolve them once you have them filed. A resume with multiple work start and end dates that don't match up with those on the pay stub will be the subject of an unnecessary inquiry. It helps the review to go smoothly without unnecessary delays if these inconsistencies are addressed in advance.",
    },
  ],
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#040B17] text-white overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
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
