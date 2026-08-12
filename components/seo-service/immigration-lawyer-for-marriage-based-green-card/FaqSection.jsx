'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

// 5 FAQ Questions & Answers for Marriage Based Green Card
const defaultFaqs = [
  {
    num: '01',
    question: 'Can I apply if my spouse has a low income?',
    answer:
      'Yes, you can use a qualified joint sponsor, and our lawyers will assist with the necessary financial forms.',
    icon: (
      <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    num: '02',
    question: 'Will we have to do an immigration interview?',
    answer:
      'Many couples need to attend an in-person interview. however our attorneys often secure waivers.',
    icon: (
      <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    num: '03',
    question: 'What happens if we get divorced before approval?',
    answer:
      'A divorce typically ends a pending marriage based green card application. Consult our legal team for alternative residency options.',
    icon: (
      <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    num: '04',
    question: 'Can I work while my marriage-based green card application is pending?',
    answer:
      'Not immediately. However filing a Form I-765 with your green card application will grant you an Employment Authorization Document (EAD) to work legally during processing.',
    icon: (
      <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    num: '05',
    question: 'How soon can I apply for U.S. citizenship after receiving a marriage-based green card?',
    answer:
      'After three years of living together in a valid marriage with a U.S. citizen, you can usually apply for naturalization.',
    icon: (
      <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const FaqSection = ({
  tagline = 'FLORIDA MARRIAGE GREEN CARD LAWYER',
  title = 'Florida Marriage Based Green Card Lawyer Frequently Asked Questions',
  description = 'Answers to common questions about the marriage based green card application process.',
  consultationLink = '/appointment',
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/hero-bg.png',
  passportImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/why-choose-1.png',
  ctaBgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/services-bg.png',
  faqs = defaultFaqs,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#FCFDFE] text-slate-800 overflow-hidden">
      
      {/* Background Overlay image */}
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

        {/* Main Grid: Left Passport Card + FAQ Cards + 1 Bottom Right Dark CTA Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column Image Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-4 relative rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-white h-[360px] sm:h-[420px] lg:h-[460px] self-start"
          >
            <Image
              src={passportImage}
              alt="US Marriage Based Green Card"
              fill
              quality={90}
              className="object-cover object-center"
            />
          </motion.div>

          {/* Right 8-Column Grid: FAQ Cards + 1 Dark Navy Background CTA Card */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            
            {/* Render FAQ Cards */}
            {faqs.map((faq, idx) => (
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

            {/* Dark Navy CTA Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
              className="bg-[#0B1829] text-white rounded-2xl p-6 shadow-xl border border-slate-800 relative overflow-hidden flex flex-col justify-between text-left"
            >
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
