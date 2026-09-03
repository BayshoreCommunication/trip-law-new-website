'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const DenialReasonsSection = ({
  badgeText = 'O-1 RISKS & DELAYS',
  title = 'Why O-1 Visa Applications Get Denied or Delayed Without an Immigration Lawyer',
  description = 'The O-1 is a genuinely difficult category to document well. Applicants with strong credentials still lose cases, usually over mistakes that were entirely avoidable.',
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/denial-reasons-bg.png',
  reasons = [
    {
      title: 'Evidence Does Not Establish Extraordinary Ability',
      desc: 'USCIS applies a specific legal test. A successful career on paper will not automatically clear that bar. Every piece of evidence needs a clear tie to the applicable criteria, backed up with documentation explaining why it matters.',
    },
    {
      title: 'Professional Achievements Are Not Properly Connected',
      desc: "A common misstep is dropping a stack of awards and letters into the filing without connecting them to specific criteria. Adjudicators weigh evidence against a legal standard, not a general impression of someone's reputation.",
    },
    {
      title: 'Weak Documentation of Industry Recognition',
      desc: 'Coverage that barely mentions the applicant, awards without context on their prestige, or letters full of vague praise rarely hold up. Every piece of evidence needs enough context to show what it actually signals within that field.',
    },
    {
      title: 'Proposed U.S. Work Is Unclear',
      desc: 'USCIS wants a clear picture of what the applicant will actually do in the United States, tied back to their area of extraordinary ability. A vague description is one of the more common reasons for a request for evidence.',
    },
    {
      title: 'Employer or Agent Structure Is Incomplete',
      desc: 'Filings through a U.S. agent need a full explanation of the arrangement plus an itinerary. Gaps in that structure are a frequent source of USCIS pushback.',
    },
    {
      title: 'Advisory Opinion Requirements Are Missed',
      desc: 'Some O-1B applicants do not have an advisory opinion, or provide an opinion from an advocate who is not an actual expert in their field. Both errors are either slowdowns or denials based solely on procedure.',
    },
  ],
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#F8FAFC] text-slate-800 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src={bgImage}
          alt="Denial Reasons Background"
          fill
          quality={90}
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-slate-50/80" />
      </div>

      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <span className="text-red-700 font-bold text-xs sm:text-sm tracking-widest uppercase mb-3">
            {badgeText}
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1829] tracking-tight leading-[1.2] mb-4 ${bitter.className}`}>
            {title}
          </h2>
          <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-full bg-red-100 text-red-700 font-bold flex items-center justify-center text-sm flex-shrink-0">
                    ✕
                  </div>
                  <h3 className={`text-base sm:text-lg font-bold text-[#0B1829] leading-snug ${bitter.className}`}>
                    {item.title}
                  </h3>
                </div>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
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

export default DenialReasonsSection;
