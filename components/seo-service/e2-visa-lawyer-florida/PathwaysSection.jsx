'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultPathways = [
  {
    id: 'i129',
    title: 'Filing Form I-129 for Change of Status',
    description:
      "You file Form I-129 when you're already inside the U.S. on another valid visa. This route swaps your current status for E2 status without leaving the country. It skips the consular interview. However travel abroad ends your E2 status until you re-enter on a new visa stamp. For an additional fee premium processing can reduce USCIS review to 15 business days.",
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    id: 'consulate',
    title: 'Applying at a US Consulate Abroad',
    description:
      'Most E2 investors apply directly at a U.S. embassy or consulate in their home country. You file Form DS-160, pay visa fee and attend an interview. Consular processing usually takes few months depending on the post. Approval here gives you a visa stamp, so you keep the freedom to travel in and out of the U.S.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2v1a2 2 0 002 2h2.945M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 'cbi',
    title: 'CBI Program For Non Treaty Nationals',
    description:
      "A birth country outside the treaty list doesn't close off the E2 category. Some investors gain citizenship in a treaty country through a Citizenship by Investment program. Grenada is the example lawyers cite most often for this route. Citizenship through that program qualifies you for E2 the same way birth citizenship does.",
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
  },
];

const PathwaysSection = ({
  tagline = 'PATHWAYS FOR E2 VISA APPLICANTS',
  title = 'Pathways For E2 Visa Applicants',
  subtitle = 'Different procedural routes exist depending on your current location and immediate commercial timelines.',
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/pathways-bg.png',
  pathways = defaultPathways,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#FAFBFD] text-slate-800 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src={bgImage}
          alt="Pathways Background Image"
          fill
          quality={90}
          priority
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-white/70" />
      </div>

      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col items-center text-center mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-[2px] w-12 sm:w-16 bg-red-700 rounded-full" />
            <span className="text-red-700 font-bold text-xs sm:text-sm tracking-widest uppercase">
              {tagline}
            </span>
            <span className="text-red-700 font-bold text-xs sm:text-sm">★</span>
            <div className="h-[2px] w-12 sm:w-16 bg-red-700 rounded-full" />
          </div>

          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1829] tracking-tight mb-4 ${bitter.className}`}>
            {title}
          </h2>

          <p className="text-slate-600 font-normal text-base sm:text-lg max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {pathways.map((card, idx) => (
            <motion.div
              key={card.id || idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/70 border border-slate-100 hover:border-red-700/40 flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group"
            >
              <div className="w-20 h-20 rounded-full bg-red-700/10 border border-red-700/20 flex items-center justify-center mb-6 group-hover:bg-red-700 group-hover:text-white transition-colors duration-300">
                {card.icon ? (
                  React.cloneElement(card.icon, {
                    className: 'w-9 h-9 text-red-700 group-hover:text-white transition-colors duration-300',
                  })
                ) : null}
              </div>

              <h3 className={`text-xl font-bold text-[#0B1829] mb-3 group-hover:text-red-700 transition-colors duration-300 ${bitter.className}`}>
                {card.title}
              </h3>

              <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed mb-0 flex-grow">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PathwaysSection;
