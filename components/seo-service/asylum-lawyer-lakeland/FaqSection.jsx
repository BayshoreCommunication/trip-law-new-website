'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Bitter } from 'next/font/google';
import { ASYLUM_IMAGE_METADATA } from './asylumImagesMeta';

const bitter = Bitter({ subsets: ['latin'] });

const faqs = [
  {
    q: 'Can I Work While My Asylum Application Is Pending?',
    a: 'Yes, after 180 days of filing the I 589, you can request an Employment Authorization Document.',
  },
  {
    q: 'Can My Spouse and Children Be Included in My Asylum Case?',
    a: 'Yes, you can list your spouse and unmarried children under 21 as derivatives on your application.',
  },
  {
    q: 'Can I Travel Outside the United States While My Asylum Case Is Pending?',
    a: 'Traveling outside the country is a serious risk to your case, so most applicants should refrain from that until you get a decision on your case.',
  },
  {
    q: 'What Happens if I Miss an Asylum Interview or Court Hearing?',
    a: 'Failure to appear at your interview or interview notice can result in a denial or a removal order unless you can prove you had a good, documented reason for not showing up.',
  },
  {
    q: 'Can I Change My Address After Filing Form I 589?',
    a: 'Yes, you are required to notify USCIS/immigration court of a change of address in five days.',
  },
  {
    q: 'Can I Move to the U.S. While My Asylum Case Is Pending?',
    a: 'While you can move to the U.S., you do have to immediately change your address with USCIS or the court.',
  },
  {
    q: 'Can I Apply for Asylum After Entering the United States Without Inspection?',
    a: 'Yes, the way you entered into the country does not preclude your being able to claim asylum.',
  },
  {
    q: 'Do I Need an Attorney for an Asylum Interview?',
    a: 'You are not required to have an attorney, but an attorney will help you prepare your statement and organize your evidence for the best possible presentation of your case.',
  },
];

const FaqSection = () => {
  const [openIdx, setOpenIdx] = useState(0);
  const { heroBg } = ASYLUM_IMAGE_METADATA;

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
            Frequently Asked Questions About Asylum
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
