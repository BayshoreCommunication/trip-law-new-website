'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const FaqSection = ({
  tagline = 'L-1 VISA LAWYER',
  title = 'Frequently Asked Questions From L1 Visa Immigrants',
  description = 'Answers to common questions about L1A and L1B intracompany transferee visas in Florida.',
  consultationLink = '/appointment',
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/hero-bg.png',
  faqs = [
    {
      q: 'Does L1 visa require any labor certification or PERM?',
      a: 'No. L1 visa doesn’t require Department of Labor PERM certification. Employers bypass complex labor market testing and this allows much faster petition preparation and filing.',
    },
    {
      q: 'Is there any annual cap on L1 visas?',
      a: 'No annual statutory limit exists for L1 nonimmigrant visa approvals in the U.S.. Qualifying businesses can sponsor eligible transferees at any time throughout the calendar year.',
    },
    {
      q: 'Can I change employers while on l1 status?',
      a: 'No, L1 nonimmigrant status is strictly tied to your sponsoring U.S. corporate employer. Changing employers requires obtaining separate qualifying work visa through new sponsor.',
    },
    {
      q: 'Can my company sponsor multiple employees for l1 visas at once?',
      a: 'Yes. Each individual employee must fully satisfy the continuous one year foreign employment requirement.',
    },
    {
      q: 'Does USCIS conduct site visits after l1 approval?',
      a: 'Yes, USCIS Fraud Detection officers conduct unannounced physical workplace visits at Florida offices. Officers verify physical office location premises, operational activities, payroll records and employee duties.',
    },
    {
      q: 'What happens to L1 status after a corporate merger or acquisition?',
      a: 'A merger or acquisition requires evaluating whether the new business is a successor in interest. Your company must file an amended Form I-129 petition to maintain valid status.',
    },
    {
      q: 'Will my L2 child remain in the u.s. after turning 21?',
      a: 'L2 dependent status terminates automatically when a child reaches twenty one years of age. To remain legal, child must transition to an independent status like F1.',
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
            Have Questions About Your L1 Intracompany Visa?
          </h3>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mb-8">
            Talk directly with Attorney Hardam Tripathi to evaluate your company's L1A or L1B transferee qualifications.
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
