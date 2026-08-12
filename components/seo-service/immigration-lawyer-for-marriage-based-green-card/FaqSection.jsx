'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultFaqs = [
  {
    question: 'Can I apply if my spouse has a low income?',
    answer:
      'Yes, you can use a qualified joint sponsor, and our lawyers will assist with the necessary financial forms.',
  },
  {
    question: 'Will we have to do an immigration interview?',
    answer:
      'Many couples need to attend an in-person interview. however our attorneys often secure waivers.',
  },
  {
    question: 'What happens if we get divorced before approval?',
    answer:
      'A divorce typically ends a pending marriage based green card application. Consult our legal team for alternative residency options.',
  },
  {
    question: 'Can I work while my marriage-based green card application is pending?',
    answer:
      'Not immediately. However filing a Form I-765 with your green card application will grant you an Employment Authorization Document (EAD) to work legally during processing.',
  },
  {
    question: 'How soon can I apply for U.S. citizenship after receiving a marriage-based green card?',
    answer:
      'After three years of living together in a valid marriage with a U.S. citizen, you can usually apply for naturalization.',
  },
];

const FaqSection = ({
  tagline = 'FREQUENTLY ASKED QUESTIONS',
  title = 'Florida Marriage Based Green Card Lawyer Frequently Asked Questions',
  faqs = defaultFaqs,
}) => {
  const [openIdx, setOpenIdx] = useState(null);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="w-full py-16 lg:py-24 bg-white text-slate-800 overflow-hidden">
      <div className="w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col items-center text-center mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-[2px] w-12 sm:w-16 bg-red-700 rounded-full" />
            <span className="text-red-700 font-bold text-xs sm:text-sm tracking-widest uppercase">
              {tagline}
            </span>
            <span className="text-red-700 font-bold text-xs sm:text-sm">★</span>
            <div className="h-[2px] w-12 sm:w-16 bg-red-700 rounded-full" />
          </div>

          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1829] tracking-tight mb-4 ${bitter.className}`}>
            {title}
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50 transition-colors duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-lg text-[#0B1829] hover:text-red-700 transition-colors"
                >
                  <span className={bitter.className}>{faq.question}</span>
                  <span className="text-red-700 text-2xl font-bold">
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
                      <div className="px-6 pb-6 text-slate-600 text-base leading-relaxed border-t border-slate-200/60 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
