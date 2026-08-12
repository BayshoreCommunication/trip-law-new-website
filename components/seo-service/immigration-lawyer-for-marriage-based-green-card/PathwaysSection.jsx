'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultPathways = [
  {
    id: 'aos',
    title: 'Adjustment of Status',
    description:
      'If foreign spouse is in the U.S. on a legal visa, Adjustment of Status allows them to apply for green card without leaving the country. You will submit everything to USCIS, attend biometrics appointment and have an interview. This option is popular among couples married to U.S. citizens. AOS often provides temporary work permit and travel permission while waiting for the main application.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
  },
  {
    id: 'consular',
    title: 'Consular Processing',
    description:
      'Spouses living outside the United States must use consular processing to get their visas. The Department of State manages this pathway through local embassies in foreign countries. First, the National Visa Center processes your approved petition and collects required fees. They will review all your financial documents before scheduling the final visa interview.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 'k1',
    title: 'Fiancé Visa (K-1)',
    description:
      'K1 visa allows a foreign fiancé to enter the United States for marriage. The couple must marry within 90 days of entry. After the wedding, the foreign spouse can apply for their permanent residency package.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: 'ir1cr1',
    title: 'Immediate Relative (IR1 / CR1)',
    description:
      'Spouses of United States citizens are classified under the immediate relative immigration category. This means there is no annual limit on the number of available visas. The CR1 visa applies to couples married for less than two years total. The IR1 visa grants a permanent status if married longer than two years.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: 'f2a',
    title: 'Priority Date (F2A)',
    description:
      'Spouses of lawful permanent residents fall under the F2A family preference visa category. You must monitor monthly Department of State Visa Bulletin because congress capped F2A visas. Priority date determines your specific place in the waiting line for visas.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 'conditional_residence',
    title: 'Conditional Residence',
    description:
      'The government issues a conditional residence status to prevent fraudulent marriage arrangements. This temporary status helps authorities verify the ongoing authenticity of your marital relationship. It serves as a testing period before permanent long-term status is officially granted.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    id: 'conditional_pr',
    title: 'Conditional Permanent Resident',
    description:
      'A conditional permanent resident receives a green card that expires after two years. You must file a joint petition to remove these specific conditions before expiration. Failure to submit this application can result in immediate deportation proceedings from America.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    id: '10year',
    title: '10-Year Green Card',
    description:
      'Couples who are married for over two years receive the standard permanent card. This document is valid for ten years and can be renewed indefinitely over time. It grants full long-term security without the need for any future marriage inspections.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
];

const PathwaysSection = ({
  tagline = 'PATHWAYS TO PERMANENT RESIDENCY',
  title = 'Pathways to Permanent Residency for Marriage Based Green Card Applicants',
  subtitle = "Your filing process depends on where the foreign spouse lives and the sponsoring spouse's immigration status. Each pathway is distinct in circumstances and long term immigration goals.",
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/pathways-bg.png',
  pathways = defaultPathways,
}) => {
  const firstRowCards = pathways.slice(0, 4);
  const secondRowCards = pathways.slice(4, 8);

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

        <div className="flex flex-col gap-6 sm:gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {firstRowCards.map((card, idx) => (
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {secondRowCards.map((card, idx) => (
              <motion.div
                key={card.id || idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx + 4) * 0.1, ease: 'easeOut' }}
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
      </div>
    </section>
  );
};

export default PathwaysSection;
