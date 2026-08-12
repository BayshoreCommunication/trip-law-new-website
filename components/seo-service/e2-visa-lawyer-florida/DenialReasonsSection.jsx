'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultDenialReasons = [
  {
    title: 'Marginal Business Findings',
    description:
      'Officers deny cases where the business only supports the investor\'s household, nothing more. Proof of income potential beyond a minimal living, now or within five years, matters here. A single-person consulting shop often struggles to clear this bar on its own. Growth plans and hiring timelines help demonstrate the business clears it.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    title: 'Unclear or Untraceable Source of Funds',
    description:
      'Money that can\'t be traced to a lawful source stalls a case fast. Officers approve investments they can verify start to finish, and nothing less. Cash-heavy businesses and informal family loans create the widest gaps here. Documentation needs to close every step between the source and the U.S. account.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Weak or Generic Business Plans',
    description:
      'A business plan copied from a template rarely matches your actual venture. Officers notice when numbers don\'t reflect the local market or industry standards. Your plan should include specific staff, revenue and expense numbers for your business. Vague projections read as unprepared rather than ambitious.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Missing Proof of Direction and Control',
    description:
      'Proof that you\'ll run the business carries more weight than proof you funded it. Ownership percentage alone falls short if someone else manages daily operations. Officers look for your title, your decision making role and your day to day involvement. A passive investor with a hired manager rarely meets this standard.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'RFEs From Incomplete Filings',
    description:
      'A Request for Evidence adds months to a case that preparation could\'ve avoided. Missing signatures, outdated forms, and unclear financials trigger most RFEs. Each RFE response needs new evidence, not a repeat of what you already sent. A complete filing the first time keeps your case on the fastest timeline.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Underestimating the Investment Amount',
    description:
      'No fixed dollar figure applies, but the investment has to fit the business type. A $20,000 commitment might suit a small consulting firm, not a restaurant. Investors often size their commitment too low for the industry they\'re entering. Matching the investment to real startup costs heads off a substantiality challenge.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l9-4 9 4M3 6v14a1 1 0 001 1h16a1 1 0 001-1V6M3 6l9 6 9-6M12 12v9" />
      </svg>
    ),
  },
  {
    title: 'Treating the Business Plan as Paperwork',
    description:
      'Some applicants write the business plan last, after every other piece is ready. That order shows in the final product, and officers notice thin plans. A strong business plan shapes your investment decisions, rather than summarizing them afterward. Treating it as a strategy document produces a stronger filing.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    title: 'Mixing Personal and Business Funds',
    description:
      'Personal and business accounts need clear separation from the start of your investment. Mixed funds make it harder to prove how much actually went into the business. This habit also complicates your tax filings and future renewal evidence. Separate accounts protect both your visa case and your business records.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: 'Waiting Too Long to Start Renewal',
    description:
      'E2 status needs active renewal, and gaps in status create real problems. Investors who wait until weeks before expiration risk a lapse in legal status. Renewal evidence takes time to gather, especially updated financials and staffing records. Starting the process months ahead keeps that risk off the table.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
];

const DenialReasonsSection = ({
  badgeText = 'COMMON DENIAL REASONS',
  title = 'Common Reasons E2 Visa Applications Get Denied or Delayed Without an Immigration Lawyer',
  description = 'Most of the denials are caused by a few repeat problems. A Florida E2 visa lawyer catches these before they reach an officer\'s desk.',
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/denial-reasons-bg.png',
  reasons = defaultDenialReasons,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#091424] text-white overflow-hidden">
      {bgImage && (
        <div className="absolute inset-0 pointer-events-none z-0">
          <Image
            src={bgImage}
            alt="E2 Visa Denial Reasons Background"
            fill
            quality={90}
            priority
            className="object-cover object-center opacity-25 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#091424]/95 via-[#091424]/90 to-[#091424]/95" />
        </div>
      )}

      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col items-center text-center mb-14 sm:mb-16"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-red-500 font-bold text-xs sm:text-sm tracking-widest uppercase">
              {badgeText}
            </span>
            <div className="h-[2px] w-12 bg-red-700 rounded-full" />
          </div>

          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-4xl leading-[1.18] mb-4 ${bitter.className}`}>
            {title}
          </h2>

          <p className="text-slate-300 text-base sm:text-lg font-normal max-w-3xl leading-relaxed">
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: 'easeOut' }}
              className="bg-white/5 backdrop-blur-md border border-slate-700/80 rounded-3xl p-6 sm:p-8 flex flex-col items-start text-left hover:border-red-500/50 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-full bg-red-700/20 border border-red-500/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              <h3 className={`text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300 ${bitter.className}`}>
                {item.title}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DenialReasonsSection;
