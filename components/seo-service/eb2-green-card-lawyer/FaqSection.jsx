'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const FaqSection = ({
  tagline = 'EB-2 GREEN CARD LAWYER',
  title = 'EB-2 Green Card Lawyer Frequently Asked Questions',
  description = 'Answers to common questions about the EB-2 green card and National Interest Waiver process.',
  consultationLink = '/appointment',
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/hero-bg.png',
  passportImage = '/assets/seo-service/trip-law.jpeg',
  passportImageAlt = 'EB-2 Green Card Lawyer Answering Questions',
  passportImageTitle = 'EB-2 Green Card & NIW FAQ Legal Guidance',
  ctaBgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/services-bg.png',
  faqs = [
    {
      q: 'Can I Apply for an EB-2 Green Card Without a Job Offer?',
      a: 'Yes, through the National Interest Waiver. An EB-2 NIW applicant can self-petition on Form I-140 and skip the standard job offer and PERM requirements, as long as they meet the three-part Dhanasar standard.',
    },
    {
      q: 'What Is the Difference Between EB-2 and EB-2 National Interest Waiver?',
      a: 'A standard EB-2 case needs a qualifying job offer and, usually, PERM labor certification from the Department of Labor. An NIW petition skips both by showing the proposed work meets the national interest standard. Both file on Form I-140, but the evidence and legal argument look completely different.',
    },
    {
      q: 'Can I Apply for an EB-2 Green Card While I Am Already in the United States?',
      a: "Yes, as long as your priority date is current and you're in valid status. Eligible applicants can file Form I-485 to finish the process without leaving. Whether you qualify depends on your current status, visa availability, and your immigration history.",
    },
  ],
}) => {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#061224] text-white overflow-hidden">
      {/* Background Image */}
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
        {/* Section Header */}
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

        {/* FAQ Accordion List */}
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

        {/* Bottom Contact CTA Box */}
        <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-r from-red-900/80 to-[#0B1829] border border-red-700/40 shadow-2xl max-w-4xl mx-auto text-center flex flex-col items-center">
          <h3 className={`text-2xl sm:text-3xl font-bold text-white mb-4 ${bitter.className}`}>
            Have Questions About Your EB-2 Green Card Eligibility?
          </h3>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mb-8">
            Talk directly with Attorney Hardam Tripathi to evaluate your EB-2 or National Interest Waiver qualifications.
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
