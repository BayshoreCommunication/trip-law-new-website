'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const FaqSection = ({
  tagline = 'EB-3 VISA LAWYER',
  title = 'Frequently Asked Questions From EB3 Visa Immigrants',
  description = 'Answers to common questions about EB-3 skilled, professional, and unskilled green card petitions in Florida.',
  consultationLink = '/appointment',
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/hero-bg.png',
  faqs = [
    {
      q: 'Can I get eb3 visa without bachelor\'s degree?',
      a: 'Foreign candidates without bachelor degrees can qualify as skilled or unskilled workers.',
    },
    {
      q: 'Can a small business sponsor an employee for eb3?',
      a: 'Small businesses can sponsor foreign workers for green cards by proving financial stability through tax returns and payroll records.',
    },
    {
      q: 'Can I self petition for an eb3 green card?',
      a: 'Self petitioning is not allowed. Foreign national candidates must have a U.S. employer sponsor for third preference petitions. Alternatives like national interest waivers should be considered.',
    },
    {
      q: 'Can I qualify for eb3 if i am currently working in the united states on an h1b visa?',
      a: 'H1B visa holders can often obtain green card sponsorship and legally pursue permanent residency while working. Labor petitions may allow for extensions longer than common six year limit.',
    },
    {
      q: 'Can I change employers during the eb3 green card process?',
      a: 'Changing employers before status adjustment can invalidate labor certifications. However, job portability allows changes after 180 days of pending status.',
    },
    {
      q: 'What happens to my eb3 case if my sponsoring employer closes or is acquired?',
      a: 'Company closures end labor certifications and pending petitions. Acquisitions allow successor entities to continue green card filings.',
    },
    {
      q: 'Can my child still get an eb3 green card if they turn 21 during the process?',
      a: 'Child Status Protection Act prevents aging out of eligibility for derivative children during petition processing.',
    },
  ],
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
                      <div className="p-6 pt-0 text-slate-300 text-base leading-relaxed border-t border-slate-800/80 mt-2">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-r from-red-900/80 to-[#0B1829] border border-red-700/40 shadow-2xl max-w-4xl mx-auto text-center flex flex-col items-center">
          <h3 className={`text-2xl sm:text-3xl font-bold text-white mb-4 ${bitter.className}`}>
            Have Questions About Your EB-3 Green Card Petition?
          </h3>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mb-8">
            Talk directly with Attorney Hardam Tripathi to evaluate your EB3 labor certification and green card qualifications.
          </p>
          <Link
            href={consultationLink}
            className="px-8 py-4 bg-red-700 hover:bg-red-800 text-white font-bold text-base tracking-wider uppercase rounded-full shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Schedule Consultation Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
