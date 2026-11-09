'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultFaqs = [
  {
    q: 'Must traffickers be arrested or convicted for T visa applications?',
    a: 'No. USCIS does not require a trafficker to be arrested, charged or convicted for you to qualify for a T visa. Show you were a victim of severe trafficking and met law enforcement assistance rules.',
  },
  {
    q: 'Is there an annual cap on principal T 1 nonimmigrant status grants?',
    a: 'Congress sets an annual limit of 5,000 principal T 1 visas per fiscal year. However, USCIS rarely hits this cap, meaning qualified applicants do not face long statutory waiting list delays.',
  },
  {
    q: 'Can trafficking survivors apply even after leaving a trafficking situation?',
    a: 'Yes. You can apply for T nonimmigrant status after escaping or leaving the trafficking environment. You must prove your current presence in the United States remains directly connected to past trafficking experience.',
  },
];

const FaqSection = ({
  tagline = 'T VISA LAWYER FREQUENTLY ASKED QUESTIONS',
  title = 'Frequently Asked Questions About T Visa',
  description = 'Common legal questions regarding human trafficking survivor eligibility, annual visa caps, and law enforcement cooperation requirements.',
  faqs = defaultFaqs,
  consultationLink = '/appointment',
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/hero-bg.png',
}) => {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#061224] text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src={bgImage}
          alt="FAQ Section Background"
          fill
          sizes="100vw"
          quality={90}
          className="object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030914] via-[#061224]/90 to-[#030914]" />
      </div>

      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <span className="text-red-500 font-bold text-xs sm:text-sm tracking-widest uppercase mb-3">
            {tagline}
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.2] mb-4 ${bitter.className}`}>
            {title}
          </h2>
          <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {description}
          </p>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col gap-4 mb-16">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-[#0B1829] border border-slate-700/70 rounded-2xl overflow-hidden shadow-lg transition-colors duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex justify-between items-center gap-4 hover:bg-slate-800/40 transition-colors"
                >
                  <h3 className={`text-lg sm:text-xl font-bold text-white ${bitter.className}`}>
                    {faq.q}
                  </h3>
                  <span className="w-8 h-8 rounded-full bg-red-700/20 text-red-500 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 border-t border-slate-800 text-slate-300 text-base leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Box */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-red-950/40 via-red-900/30 to-red-950/40 border border-red-700/40 rounded-3xl p-8 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className={`text-xl sm:text-2xl font-bold text-white mb-2 ${bitter.className}`}>
              Have More Questions About T Nonimmigrant Status?
            </h4>
            <p className="text-slate-300 text-sm sm:text-base">
              Speak with Attorney Hardam Tripathi for confidential, trauma-informed guidance.
            </p>
          </div>
          <Link
            href={consultationLink}
            className="flex-shrink-0 px-8 py-4 bg-red-700 hover:bg-red-800 text-white font-bold text-sm sm:text-base tracking-wider uppercase rounded-full shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            Request Confidential Review
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

