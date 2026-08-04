'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

// 7 Special Citizenship Pathways Data
const defaultPathways = [
  {
    id: 'marriage',
    title: 'Citizenship Through Marriage to U.S. Citizen',
    description:
      'U.S. citizens’ spouses can apply after 3 years of permanent residence. Physical presence of at least 18 months within those three years is also required. Your spouse must hold U.S. citizenship at the time of filing and interview. USCIS reviews joint tax returns, shared leases and travel records during this eligibility review. You need to show your marriage remains legally valid and ongoing at time of filing.',
    link: '/appointment',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
  },
  {
    id: 'parents',
    title: 'Acquired or Derived Citizenship Through Parents',
    description:
      "Children derive citizenship automatically when their parent naturalizes before child turns 18. However child must hold lawful permanent residence at the time of parent's naturalization. This automatic grant applies under Child Citizenship Act of 2000 without a separate application. Only one parent's naturalization needs to occur before child turns 18 years old. A U.S. passport or Certificate of Citizenship from USCIS confirms derived citizenship status formally.",
    link: '/appointment',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    id: 'abroad',
    title: 'Children Born Abroad to U.S. Citizen Parents',
    description:
      'INA section 301 covers children born in marriage to a U.S. citizen parent. INA 309 governs citizenship for children born to an unwed U.S. citizen parent. The U.S. citizen parent must have completed five prior years of U.S. residency. Two of those five years must fall after parent reached age 14. These children acquired citizenship at birth and are subject to no naturalization requirement. A Consular Report of Birth Abroad or U.S. passport confirms this citizenship status.',
    link: '/appointment',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 'military',
    title: 'Citizenship Through Military and Veteran Role',
    description:
      'INA section 328 covers honorably discharged veterans who served at least one year. You must apply during active duty or within six months of honorable discharge. INA section 329 applies during designated periods of military hostility without residency minimum. This provision removes the standard five year permanent residence requirement entirely for wartime service. MacDill Air Force Base personnel regularly qualify under both INA provisions. Discharges must be under honorable conditions since any other discharge category disqualifies applicants.',
    link: '/appointment',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8l1.17 2.37L15.8 10.77l-1.9 1.85.45 2.61L12 14l-2.35 1.23.45-2.61-1.9-1.85 2.63-.4L12 8z" fill="currentColor" opacity="0.3" />
      </svg>
    ),
  },
  {
    id: 'refugee',
    title: 'Citizenship for US Asylees and Refugees',
    description:
      'Asylees count residence from the date their asylum was granted. 5 year permanent residence timeline still applies. Yet the start date differs from refugees. Refugees count residency from one year before their green card issued date. This means four years of actual refugee residency effectively counts to fulfill five year requirement. Both groups must still meet physical presence, good moral character and English requirements.',
    link: '/appointment',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    id: 'vawa',
    title: 'VAWA Self Petitioners Married to U.S. Citizens',
    description:
      'VAWA self petitioners can file for naturalization after three years of lawful permanent residence. VAWA applicants can file even if marriage to the abusive citizen has legally ended. Standard documentation must confirm three years of lawful permanent residence before filing date. During these 3 year both good moral character and standard naturalization are evaluated. USCIS reviews the underlying I-360 petition and any criminal history as part of N-400.',
    link: '/appointment',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: 'medical',
    title: 'English and Civics Test Waiver via Form N-648',
    description:
      "A U.S. licensed medical or osteopathic doctor must complete form N 648. The form documents about applicant's medical condition prevent English learning or civics testing. Medical professional must detail how the condition directly prevents the applicant from testing. USCIS adjudicators can request second medical opinion if N 648 documentation appears insufficient. A waiver removes English and civics components but the oath requirement still applies.",
    link: '/appointment',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.684a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

const PathwaysSection = ({
  tagline = 'SPECIAL CITIZENSHIP PATHWAYS',
  title = 'Special Paths to U.S. Citizenship for Lakeland, FL Applicants',
  subtitle1 = 'Federal law includes several paths and Lakeland applicants sometimes qualify for a shorter or entirely different citizenship process.',
  subtitle2 = '',
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/pathways-bg.png',
  pathways = defaultPathways,
}) => {
  const firstRowCards = pathways.slice(0, 4);
  const secondRowCards = pathways.slice(4, 7);

  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#FAFBFD] text-slate-800 overflow-hidden">
      {/* Next.js Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src={bgImage}
          alt="Citizenship Pathways Background Image"
          fill
          quality={90}
          priority
          className="object-cover object-center"
        />
        {/* Soft light overlay for text legibility */}
        <div className="absolute inset-0 bg-white/70" />
      </div>

      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col items-center text-center mb-12 sm:mb-16"
        >
          {/* Subtitle / Tagline with Star Accent */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-[2px] w-12 sm:w-16 bg-red-700 rounded-full" />
            <span className="text-red-700 font-bold text-xs sm:text-sm tracking-widest uppercase">
              {tagline}
            </span>
            <span className="text-red-700 font-bold text-xs sm:text-sm">★</span>
            <div className="h-[2px] w-12 sm:w-16 bg-red-700 rounded-full" />
          </div>

          {/* Main Section Title */}
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1829] tracking-tight mb-4 ${bitter.className}`}>
            {title}
          </h2>

          {/* Subheading lines */}
          <p className="text-slate-600 font-normal text-base sm:text-lg max-w-3xl leading-relaxed">
            {subtitle1}
            <br className="hidden sm:inline" />
            {subtitle2}
          </p>
        </motion.div>

        {/* Pathways Cards Container */}
        <div className="flex flex-col gap-6 sm:gap-8">
          
          {/* Row 1: 4 Cards */}
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
                {/* Circular Icon Container */}
                <div className="w-20 h-20 rounded-full bg-red-700/10 border border-red-700/20 flex items-center justify-center mb-6 group-hover:bg-red-700 group-hover:text-white transition-colors duration-300">
                  {card.icon ? (
                    React.cloneElement(card.icon, {
                      className: 'w-9 h-9 text-red-700 group-hover:text-white transition-colors duration-300',
                    })
                  ) : null}
                </div>

                {/* Card Title */}
                <h3 className={`text-xl font-bold text-[#0B1829] mb-3 group-hover:text-red-700 transition-colors duration-300 ${bitter.className}`}>
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed mb-6 flex-grow">
                  {card.description}
                </p>

                {/* Learn More Link */}
                <Link
                  href={card.link}
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

          {/* Row 2: 3 Centered Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto w-full">
            {secondRowCards.map((card, idx) => (
              <motion.div
                key={card.id || idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx + 4) * 0.1, ease: 'easeOut' }}
                className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/70 border border-slate-100 hover:border-red-700/40 flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group"
              >
                {/* Circular Icon Container */}
                <div className="w-20 h-20 rounded-full bg-red-700/10 border border-red-700/20 flex items-center justify-center mb-6 group-hover:bg-red-700 group-hover:text-white transition-colors duration-300">
                  {card.icon ? (
                    React.cloneElement(card.icon, {
                      className: 'w-9 h-9 text-red-700 group-hover:text-white transition-colors duration-300',
                    })
                  ) : null}
                </div>

                {/* Card Title */}
                <h3 className={`text-xl font-bold text-[#0B1829] mb-3 group-hover:text-red-700 transition-colors duration-300 ${bitter.className}`}>
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed mb-6 flex-grow">
                  {card.description}
                </p>

                {/* Learn More Link */}
                <Link
                  href={card.link}
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
    </section>
  );
};

export default PathwaysSection;
