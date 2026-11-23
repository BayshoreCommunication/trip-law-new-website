'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Bitter } from 'next/font/google';
import { U_VISA_IMAGE_METADATA } from './uVisaImagesMeta';

const bitter = Bitter({ subsets: ['latin'] });

const faqs = [
  {
    q: 'Which Officials May Sign the Certification?',
    a: 'Police chiefs and county sheriffs can sign your certification. State prosecutors and judges are also authorized signers. Federal law enforcement officers and child protective services can sign the form. The Department of Labor and the EEOC can also authorize your request.',
  },
  {
    q: 'Does a Certification Guarantee U Visa Approval?',
    a: 'No. A valid Supplement B satisfies statutory helpfulness requirement. But USCIS makes the immigration decision.',
  },
  {
    q: 'What Can I Do if Law Enforcement Declines to Sign?',
    a: 'If an agency refuses to sign, our u visa lawyer can resubmit the request with more evidence. We can also speak directly with agency leadership to resolve the issue.',
  },
  {
    q: 'Can I Apply for a U Visa Without Legal Representation?',
    a: 'Yes, you’re legally allowed to file a U visa petition on your own. However there’s very high rates of rejection or denial without having a lawyer. These denials usually happen because of missing waivers or expired certifications. Inadequate supporting evidence can also cause the government to reject your case.',
  },
];

const FaqSection = () => {
  const [openIdx, setOpenIdx] = useState(0);
  const { heroBg } = U_VISA_IMAGE_METADATA;

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#061224] text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src={heroBg.src}
          alt={heroBg.alt}
          title={heroBg.title}
          fill
          sizes="100vw"
          quality={80}
          className="object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030914] via-[#061224]/90 to-[#030914]" />
      </div>

      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.2] mb-4 ${bitter.className}`}>
            Frequently Asked Questions About U Visa
          </h2>
          <div className="h-[3px] w-20 bg-red-700 rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.q}
                className="bg-[#0B1829] border border-slate-700/70 rounded-2xl overflow-hidden shadow-lg transition-colors duration-200"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
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
      </div>
    </section>
  );
};

export default FaqSection;
