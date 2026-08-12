'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultFaqs = [
  {
    num: '01',
    question: 'Is there a minimum investment amount required for an E2 visa?',
    answer:
      'No fixed dollar figure is set by law, but the investment must be substantial relative to the cost of purchasing or creating the business.',
    icon: (
      <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    num: '02',
    question: 'Can my spouse work in the U.S. if I get an E2 visa?',
    answer:
      'Yes, E2 spouses automatically receive work authorization and can work for any employer in the United States once approved.',
    icon: (
      <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    num: '03',
    question: 'Does an E2 visa lead directly to a green card?',
    answer:
      'No, the E2 visa is a non-immigrant visa, but investors can transition to permanent residence through EB-5, EB-2 NIW, or family petitions.',
    icon: (
      <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2v1a2 2 0 002 2h2.945M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    num: '04',
    question: 'How many times can I renew an E2 visa?',
    answer:
      'There is no limit on the number of E2 visa renewals as long as the business remains active and compliant.',
    icon: (
      <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    num: '05',
    question: 'Can I apply for an E2 visa if my country does not have a treaty with the U.S.?',
    answer:
      'Yes, some investors obtain citizenship in a treaty country (such as Grenada) via Citizenship by Investment to qualify.',
    icon: (
      <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

const FaqSection = ({
  tagline = 'E2 VISA LAWYER',
  title = 'Florida E2 Visa Lawyer Frequently Asked Questions',
  description = 'Answers to common questions about the E2 treaty investor visa process.',
  consultationLink = '/appointment',
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/hero-bg.png',
  passportImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/why-choose-1.png',
  ctaBgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/services-bg.png',
  faqs = defaultFaqs,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#FCFDFE] text-slate-800 overflow-hidden">
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
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col items-start text-left mb-12 sm:mb-16"
        >
          <div className="text-red-700 mb-2">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l9-4 9 4M3 6v14a1 1 0 001 1h16a1 1 0 001-1V6M3 6l9 6 9-6M12 12v9" />
            </svg>
          </div>

          <div className="text-red-700 font-bold text-xs sm:text-sm tracking-widest uppercase mb-1">
            {tagline}
          </div>

          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1829] tracking-tight mb-3 ${bitter.className}`}>
            {title}
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-normal max-w-2xl">
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-4 relative rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-white h-[360px] sm:h-[420px] lg:h-[460px] self-start"
          >
            <Image
              src={passportImage}
              alt="Florida E2 Visa Lawyer"
              fill
              quality={90}
              className="object-cover object-center"
            />
          </motion.div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.06, ease: 'easeOut' }}
                className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:shadow-xl hover:border-red-700/30 transition-all duration-300 flex flex-col justify-start text-left"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xl font-bold text-[#0B1829]/70 ${bitter.className}`}>
                    {faq.num}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-red-700/10 border border-red-700/20 flex items-center justify-center">
                    {faq.icon}
                  </div>
                </div>

                <h3 className={`text-base sm:text-lg font-bold text-[#0B1829] mb-2 leading-snug ${bitter.className}`}>
                  {faq.question}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}

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
