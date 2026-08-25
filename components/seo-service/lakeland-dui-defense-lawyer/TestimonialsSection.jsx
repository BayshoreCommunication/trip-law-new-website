'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const caseStudies = [
  {
    title: 'DUI With Prior Convictions',
    description:
      'Florida increases penalties as DUI convictions accumulate within statutory lookback periods. Repeat offenses may bring mandatory jail time, longer license revocations, and felony charges.',
    icon: (
      <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    title: 'Fast Action on 10 Day DMV Window',
    description:
      'Florida gives most drivers only ten days after a DUI arrest to challenge the administrative license suspension before automatic suspension takes effect.',
    icon: (
      <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Thorough Evidence & Video Review',
    description:
      'We evaluate probable cause affidavits, body camera recordings, dashcam videos, laboratory reports, and maintenance records to build a strategic defense.',
    icon: (
      <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

const reviews = [
  {
    quote:
      '“One of the best lawyers I have ever met. Tripathy made everything very easy and helped us navigate our legal issues. Very friendly, professional, and knowledgeable lawyer. Thank you very much. I wish I could give more than 5 stars.”',
    author: 'Purab Patel',
    location: 'Lakeland, FL',
    avatar: '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/why-choose-6.png',
  },
  {
    quote:
      '“My husband was able to resolve his case thanks to Trip and his team! We are very thankful for their help, dedication, and support throughout the entire process. They truly care about their clients.”',
    author: 'Taylor Made',
    location: 'Polk County, FL',
    avatar: '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/why-choose-5.png',
  },
  {
    quote:
      '“My experience with Trip Law was a good one. The lawyer is excellent in terms of case preparation and communication. My case was resolved smoothly. I would definitely recommend this firm to anyone in need of defense assistance.”',
    author: 'Clifton Brown',
    location: 'Lakeland, FL',
    avatar: '/assets/seo-service/trip-law.jpeg',
    avatarAlt: 'Clifton Brown - Verified Client Review for Trip Law Lakeland DUI Attorney',
    avatarTitle: "Client Review Photo: Clifton Brown's Legal Experience with Trip Law",
  },
  {
    quote:
      '“Trip and his team have been professional in helping both my family and business partners with our legal cases. Overall, the firm is very knowledgeable and professional. I am very satisfied with the service.”',
    author: 'Chandara Chea',
    location: 'Florida',
    avatar: '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/why-choose-2.png',
  },
];

const TestimonialsSection = ({
  tagline = 'LICENSED TRIAL ATTORNEY',
  title = 'Trip Law Puts a Licensed Trial Attorney on Every Polk County DUI Case',
  description = 'Accused drivers need skilled representation from an lakeland dui defense lawyer inside local courts. Trip Law assigns a licensed trial attorney to handle every local case. Local motorists receive dedicated attention from an experienced, highly aggressive trial lawyer. Our legal team works directly with clients to prepare for court hearings.',
  testimonialsTitle = 'What Trip Law\'s Clients Are Saying',
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/denial-reasons-bg.png',
}) => {
  return (
    <section className="relative w-full py-16 lg:py-8 bg-[#FCFDFE] text-slate-800">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 mb-20 lg:mb-28">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col items-center text-center mb-14 sm:mb-16"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="h-[2px] w-10 sm:w-14 bg-red-700/60 rounded-full" />
            <span className="text-red-700 font-bold text-xs sm:text-sm tracking-widest uppercase">
              {tagline}
            </span>
            <div className="h-[2px] w-10 sm:w-14 bg-red-700/60 rounded-full" />
          </div>

          <div className="text-red-700 mb-2">
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l9-4 9 4M3 6v14a1 1 0 001 1h16a1 1 0 001-1V6M3 6l9 6 9-6M12 12v9" />
            </svg>
          </div>

          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1829] tracking-tight max-w-4xl leading-[1.18] mb-4 ${bitter.className}`}>
            {title}
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-normal max-w-3xl leading-relaxed">
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-8 max-w-5xl mx-auto">
          {caseStudies.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: 'easeOut' }}
              className="bg-white rounded-3xl p-7 sm:p-8 shadow-xl shadow-slate-200/70 border border-slate-100/90 flex flex-col items-start text-left hover:shadow-2xl hover:border-red-700/40 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-full bg-red-700/10 border border-red-700/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              <h3 className={`text-xl sm:text-2xl font-bold text-[#0B1829] mb-3 group-hover:text-red-700 transition-colors duration-300 ${bitter.className}`}>
                {item.title}
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative w-full bg-[#0B1829] text-white pt-24 pb-16 lg:pb-24 mt-10">
        <div className="absolute top-0 inset-x-0 -translate-y-[99%] w-full overflow-hidden leading-none z-20 pointer-events-none">
          <svg
            className="relative block w-full h-12 sm:h-20 lg:h-28 text-[#0B1829]"
            viewBox="0 0 1440 120"
            fill="currentColor"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z" />
          </svg>
        </div>

        {bgImage && (
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <Image
              src={bgImage}
              alt="Testimonials Section Background"
              fill
              quality={90}
              className="object-cover object-center opacity-25 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B1829]/95 via-[#0B1829]/90 to-[#0B1829]/95" />
          </div>
        )}

        <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex flex-col items-center text-center mb-14 sm:mb-16"
          >
            <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-red-700/20 border border-red-500/40 flex items-center justify-center text-red-500 text-3xl font-serif mb-4 shadow-lg">
              “
            </div>

            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-4xl leading-[1.18] ${bitter.className}`}>
              {testimonialsTitle}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 items-stretch mb-16">
            {reviews.map((rev, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: 'easeOut' }}
                className="bg-white rounded-3xl p-6 sm:p-7 shadow-2xl text-slate-800 flex flex-col justify-between items-center text-center hover:-translate-y-1.5 transition-all duration-300 border border-slate-100"
              >
                <div className="flex items-center gap-1 text-amber-400 text-lg mb-4">
                  ★ ★ ★ ★ ★
                </div>

                <p className="text-slate-600 text-xs sm:text-sm font-normal italic leading-relaxed mb-6 flex-1 flex items-center">
                  {rev.quote}
                </p>

                <div className="h-[2px] w-12 bg-red-700/30 rounded-full mb-4" />

                <div className="flex items-center gap-3 text-left w-full pt-1">
                  <div className="w-11 h-11 rounded-full overflow-hidden relative border-2 border-red-700/30 flex-shrink-0 shadow-sm">
                    <Image
                      src={rev.avatar}
                      alt={rev.avatarAlt || rev.author}
                      title={rev.avatarTitle || rev.author}
                      fill
                      quality={90}
                      className="object-cover object-center"
                    />
                  </div>
                  <div>
                    <div className={`text-sm sm:text-base font-bold text-[#0B1829] leading-tight ${bitter.className}`}>
                      {rev.author}
                    </div>
                    <div className="text-xs text-red-700 font-semibold mt-0.5">
                      {rev.location}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="w-full bg-white/5 backdrop-blur-md border border-slate-700/80 rounded-2xl p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-red-400 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-200">
                Licensed Florida Trial Attorney
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-red-400 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-200">
                Personalized Strategy for Every Case
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-red-400 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-200">
                Fast Action on 10-Day DMV Deadlines
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-red-400 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-200">
                Protecting Your Driver License & Future
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
