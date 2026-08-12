'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultServices = [
  {
    title: 'Florida Bar Attorney on Every File',
    description:
      'No case gets handed off to unsupervised staff. A licensed attorney reviews and signs off on every filing before it goes to USCIS, which means actual legal judgment, not just paperwork processing, gets applied to every case.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: 'Experience Handling Complex Cases',
    description:
      'From waivers to removal defense, we take on cases other practices turn away, including ones involving prior denials or criminal history. That experience means we tend to catch issues in a file that a less experienced practitioner might miss entirely.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Personalized Legal Strategies',
    description:
      'No two immigration histories look the same, and we build each strategy around what actually happened in someone\'s case rather than pulling from a generic template. It takes more time upfront, but the filings hold up better under USCIS scrutiny.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    title: 'Written Flat Fee Agreement',
    description:
      'Clients get a written fee agreement before any work starts, so there\'s nothing hidden as the case moves forward. Knowing the full cost ahead of time lets people plan financially instead of getting blindsided by billing later.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Multilingual Client Support',
    description:
      'Our team talks with clients in whatever language they\'re most comfortable with, which cuts down on miscommunication around sensitive details. Immigration cases involve nuance that\'s easy to lose in translation, and we don\'t take that lightly.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Direct Attorney Access Throughout Your Case',
    description:
      'Clients can reach their attorney directly with questions instead of getting routed through a call center or a rotating case manager. That direct line matters most when someone gets an unexpected notice and needs an actual answer fast.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
];

const WhyTrustUsSection = ({
  tagline = 'WHY CLIENTS CHOOSE TRIP LAW',
  title = 'Why Lakeland Residents Choose Trip Law for Immigration Matters',
  description = 'Clients stick with Trip Law for reasons that go beyond any one case outcome. Here\'s what keeps Lakeland families and workers coming back.',
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
