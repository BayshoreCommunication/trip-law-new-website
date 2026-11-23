'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Bitter } from 'next/font/google';
import { H1B_IMAGE_METADATA } from './h1bImagesMeta';

const bitter = Bitter({ subsets: ['latin'] });

const faqs = [
  {
    q: 'Can I change employers while on H1B?',
    a: "Yes, AC21 portability lets you begin work once USCIS receives the new employer's petition. Your H1B status must be valid when the new petition is filed. Workers already counted against the cap skip the lottery when they change employers.",
  },
  {
    q: 'How long can I stay in H1B status?',
    a: 'Six years in total, granted in increments of up to three years. Extensions beyond six years exist when a green card case is underway. Time spent outside the United States can be recaptured and added back later.',
  },
  {
    q: 'Does H1B lead to a green card?',
    a: 'H1B allows dual intent, so your employer can sponsor you while you work. Most cases run through PERM labor certification, an I 140 petition and adjustment of status. Wait times depend on your country of birth and your job category.',
  },
  {
    q: 'Can my family come with me on H1B?',
    a: 'Spouses and unmarried children under age 21 qualify for H 4 dependent status. Children can attend school in the United States while the worker holds status. Some spouses qualify for work authorization after an I 140 approval or AC21 extension.',
  },
  {
    q: 'How long is my H1B valid after approval?',
    a: 'The I 797 shows your approved period, up to three years per petition. The visa stamp may differ in length because reciprocity rules vary by country. Your I 797 dates control how long you can work for the sponsoring employer.',
  },
  {
    q: 'Can I work for two employers on H1B?',
    a: 'Yes, you can work for two employers when each files a separate petition. Both petitions must disclose the other job and describe clearly distinct duties. Cap subject concurrent cases need careful timing because registration and selection rules still apply.',
  },
  {
    q: 'Can I switch from F 1 to H1B?',
    a: 'Yes, a selected registration lets the employer request a change of status here. Cap gap rules can extend your work authorization while the petition is pending.',
  },
];

const FaqSection = () => {
  const [openIdx, setOpenIdx] = useState(0);
  const { heroBg } = H1B_IMAGE_METADATA;

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
        <div className="absolute inset-0 bg-gradient-to-b from-[#030914] via-[#061224]/92 to-[#030914]" />
      </div>

      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.2] mb-4 ${bitter.className}`}>
            Frequently Asked Questions
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
                      <div className="p-6 pt-0 border-t border-slate-800/60 text-slate-300 text-base leading-relaxed">
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
