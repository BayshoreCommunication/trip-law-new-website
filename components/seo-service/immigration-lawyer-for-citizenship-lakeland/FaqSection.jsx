'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

// 7 FAQ Questions & Answers
const faqData = [
  {
    num: '01',
    question: 'My green card is conditional. Do I have to remove conditions before applying for citizenship?',
    answer:
      'Yes, USCIS will reject an N-400 if your I-751 is pending. You must complete the I-751 process before applying for naturalization.',
    icon: (
      <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h3" />
      </svg>
    ),
  },
  {
    num: '02',
    question: 'What happens after USCIS denies my citizenship application?',
    answer:
      'If your citizenship application is denied, you have 30 days to request a hearing with another USCIS officer. If denied again, you can appeal to the U.S. District Court for the Middle District of Florida.',
    icon: (
      <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l9-4 9 4M3 6v14a1 1 0 001 1h16a1 1 0 001-1V6M3 6l9 6 9-6M12 12v9" />
      </svg>
    ),
  },
  {
    num: '03',
    question: 'How long does naturalization process take at USCIS field office right now?',
    answer:
      'US citizenship cases typically take 8 to 14 months, but delays can occur with complex issues. We actively track processing times to identify delays early.',
    icon: (
      <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    num: '04',
    question: 'Can I travel outside the U.S. while my N-400 is pending?',
    answer:
      'Short trips are usually acceptable, but any trip over 6 months while your N-400 is pending can jeopardize your application. Ensure your attorney checks travel dates against your eligibility before booking.',
    icon: (
      <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
  },
  {
    num: '05',
    question: 'Do I have to give up my other citizenship to become a U.S. citizen?',
    answer:
      'You do not have to renounce your prior citizenship to become a U.S. citizen, but your home country’s laws will determine if you can retain it.',
    icon: (
      <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2v1a2 2 0 002 2h2.945M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    num: '06',
    question: 'I filed my taxes late for several years. Does that automatically disqualify me from citizenship?',
    answer:
      'Late tax filing may raise moral character concerns, but it’s evaluated individually. USCIS considers if returns were filed, balances paid, and if late filing was intentional.',
    icon: (
      <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    num: '07',
    question: 'My USCIS interview went well and the officer said I’d receive approval, but it’s been three months. What should I do?',
    answer:
      'A verbal approval at the interview isn’t final. If three months pass without written notice, consult your attorney for a status update.',
    icon: (
      <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
];

const FaqSection = ({
  tagline = 'US CITIZENSHIP LAWYER',
  title = 'US Citizenship Lawyer Frequently Asked Questions',
  description = 'Answers to common questions about the U.S. citizenship and naturalization process.',
  consultationLink = '/appointment',
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/hero-bg.png',
  passportImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/why-choose-1.png',
  ctaBgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/services-bg.png',
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#FCFDFE] text-slate-800 overflow-hidden">
      
      {/* Background Next.js Overlay image */}
      {bgImage && (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <Image
            src={bgImage}
            alt="FAQ Section Background"
            fill
            quality={90}
            priority
            className="object-cover object-right-top opacity-15 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FCFDFE]/90 via-[#FCFDFE]/80 to-[#FCFDFE]/95" />
        </div>
      )}

      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        
        {/* Section Top Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col items-start text-left mb-12 sm:mb-16"
        >
          {/* Scales Icon */}
          <div className="text-red-700 mb-2">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l9-4 9 4M3 6v14a1 1 0 001 1h16a1 1 0 001-1V6M3 6l9 6 9-6M12 12v9" />
            </svg>
          </div>

          {/* Tagline Subtitle */}
          <div className="text-red-700 font-bold text-xs sm:text-sm tracking-widest uppercase mb-1">
            {tagline}
          </div>

          {/* Main Title */}
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1829] tracking-tight mb-3 ${bitter.className}`}>
            {title}
          </h2>

          {/* Subtitle Description */}
          <p className="text-slate-600 text-base sm:text-lg font-normal max-w-2xl">
            {description}
          </p>
        </motion.div>

        {/* Main Grid: Left Passport Card + 7 FAQ Cards + 1 Bottom Right Dark CTA Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: US Passport & Constitution Image Card (Compact Height) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-4 relative rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-white h-[360px] sm:h-[420px] lg:h-[460px] self-start"
          >
            <Image
              src={passportImage}
              alt="US Passport & Constitution"
              fill
              quality={90}
              className="object-cover object-center"
            />
          </motion.div>

          {/* Right 8-Column Grid: 7 FAQ Cards + 1 Dark Navy Background CTA Card */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            
            {/* Render 7 FAQ Cards */}
            {faqData.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.06, ease: 'easeOut' }}
                className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:shadow-xl hover:border-red-700/30 transition-all duration-300 flex flex-col justify-start text-left"
              >
                {/* Top Row: Number + Icon */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xl font-bold text-[#0B1829]/70 ${bitter.className}`}>
                    {faq.num}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-red-700/10 border border-red-700/20 flex items-center justify-center">
                    {faq.icon}
                  </div>
                </div>

                {/* Question */}
                <h3 className={`text-base sm:text-lg font-bold text-[#0B1829] mb-2 leading-snug ${bitter.className}`}>
                  {faq.question}
                </h3>

                {/* Answer */}
                <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}

            {/* 8th Box: Dark Navy CTA Box with Next.js Background Image Inside */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
              className="bg-[#0B1829] text-white rounded-2xl p-6 shadow-xl border border-slate-800 relative overflow-hidden flex flex-col justify-between text-left"
            >
              {/* Next.js Background Image inside CTA card */}
              {ctaBgImage && (
                <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden rounded-2xl">
                  <Image
                    src={ctaBgImage}
                    alt="Still Have Questions Background"
                    fill
                    quality={90}
                    priority
                    className="object-cover object-right opacity-40 mix-blend-luminosity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0B1829] via-[#0B1829]/85 to-[#0B1829]/60" />
                </div>
              )}

              {/* Top Row: Phone Circle Icon + Heading */}
              <div className="relative z-10 flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-red-700/20 border border-red-500/40 flex items-center justify-center text-red-400 flex-shrink-0 shadow-sm">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className={`text-xl sm:text-2xl font-bold text-white leading-tight ${bitter.className}`}>
                    Still Have Questions?
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm font-normal mt-1">
                    Our experienced legal team is here to help.
                  </p>
                </div>
              </div>

              {/* Bottom CTA Button */}
              <div className="relative z-10 pt-2">
                <Link
                  href={consultationLink}
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-red-700 hover:bg-red-800 text-white font-bold text-xs sm:text-sm tracking-wider uppercase rounded-xl shadow-lg shadow-red-900/40 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>Schedule a Consultation</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>

            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default FaqSection;
