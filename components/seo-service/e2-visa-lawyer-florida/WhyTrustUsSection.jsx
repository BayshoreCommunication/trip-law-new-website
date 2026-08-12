'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultServices = [
  {
    title: 'Experience With Florida\'s Consular Caseload',
    description:
      'Florida investors usually file through Miami, Tampa, or their home country\'s consulate. We track how each post reviews E2 cases and adjust our documents to match. That local knowledge shapes your case from the very first meeting. It\'s the difference between a generic filing and one built for your post.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2v1a2 2 0 002 2h2.945M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Business Plans Built for Approval',
    description:
      'A business plan written for a bank looks nothing like one written for USCIS. We build immigration-consistent models with financial projections officers actually expect to see. That approach lowers denial risk for both new startups and franchise purchases. Your plan gets built for the reviewer, not just the paperwork.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Source of Funds Tracing',
    description:
      'Investment money has to trace back to a lawful, documented source, every time. We build that paper trail early, before an officer ever asks for it. This step satisfies both the legal-source and the substantiality requirements at once. A traceable file gives your case one less place to fall apart.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Family and Dependent Strategy',
    description:
      'Your E2 case rarely stops with just you; your family files too. We handle spouse work authorization and school enrollment alongside your own petition. Nobody in your household gets left to figure out their paperwork alone. One firm manages the whole family\'s filing, start to finish.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Track Record With Florida Specific Industries',
    description:
      'Florida\'s economy runs on trade, hospitality, logistics, real estate and a growing tech scene. Over the years we\'ve built E2 cases across each of these industries. That range shapes stronger business plans and sharper financial projections. Your case benefits from patterns we\'ve already watched succeed.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V10M5 21V10M3 10l9-7 9 7M4 21h16M9 21v-7a1 1 0 011-1h4a1 1 0 011 1v7" />
      </svg>
    ),
  },
];

const WhyTrustUsSection = ({
  tagline = 'WHY INVESTORS CHOOSE TRIP LAW',
  title = 'Why Miami and Tampa Investors Choose Trip Law for E2 Visa Cases',
  description = 'Local business conditions require localized legal strategies to satisfy discerning federal immigration adjudicators. Our deep regional commercial knowledge always gives your petition a distinct competitive advantage.',
  buttonText = 'Schedule Consultation',
  buttonLink = '/appointment',
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/services-bg.png',
  services = defaultServices,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#0B1829] text-white overflow-hidden">
      {bgImage && (
        <div className="absolute inset-0 pointer-events-none z-0">
          <Image
            src={bgImage}
            alt="Why Choose Trip Law Background"
            fill
            quality={90}
            priority
            className="object-cover object-center opacity-25 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1829]/95 via-[#0B1829]/90 to-[#0B1829]/95" />
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
              {tagline}
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-12">
          {services.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: 'easeOut' }}
              className="bg-white/5 backdrop-blur-md border border-slate-700/80 rounded-3xl p-7 sm:p-8 flex flex-col justify-between text-left hover:border-red-500/50 hover:bg-white/10 transition-all duration-300 group"
            >
              <div>
                <div className="w-14 h-14 rounded-full bg-red-700/20 border border-red-500/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 text-red-400">
                  {item.icon}
                </div>

                <h3 className={`text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300 ${bitter.className}`}>
                  {item.title}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center pt-4">
          <Link
            href={buttonLink}
            className="inline-flex items-center gap-3 px-8 py-4 bg-red-700 hover:bg-red-800 text-white font-bold text-sm sm:text-base tracking-wider uppercase rounded-full shadow-xl shadow-red-900/40 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>{buttonText}</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyTrustUsSection;
