'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultItems = [
  {
    title: 'Financial Commingling',
    description:
      'Sharing money is excellent evidence that your marital relationship is completely authentic. Provide continuous joint bank statements that show active monthly transactions and savings. Credit cards, auto loans, and tax returns with both names work perfectly.',
  },
  {
    title: 'Shared Residence & Cohabitation',
    description:
      'Living under the same roof is primary requirement for a green card. Submit utility bills, lease agreements and official mail showing your shared address. Letters from landlords or neighbors can further confirm your daily living arrangement.',
  },
  {
    title: 'Insurance and Beneficiaries',
    description:
      'Naming your spouse on insurance policies shows true commitment to their welfare. Include health insurance cards, life insurance designations, and car insurance policies together. These official documents carry significant weight with immigration officers during final reviews.',
  },
  {
    title: 'Shared Life and Social Proof',
    description:
      'Photographs of your time together show the genuine nature of your marriage. Include pictures with family members and friends at various social events over time. Receipts from joint vacations and holiday travel also provide excellent supporting evidence.',
  },
  {
    title: 'Communication Records (Long Distance Relationships)',
    description:
      'If you lived apart, you must show consistent daily contact with each other. Provide detailed call logs, text message threads, and email conversations over several months. Chat logs from messaging applications help establish your ongoing romantic connection clearly.',
  },
];

const EvidenceGenuineSection = ({
  title = 'Evidence To Prove Your Marriage Is Genuine to USCIS',
  description = 'USCIS seeks proof of genuine relationship and your living together before granting immigration benefits. It is because of increased fraud prevention. An immigration lawyer for marriage based green card helps to gather all necessary evidence for review process.',
  items = defaultItems,
}) => {
  return (
    <section className="w-full py-16 lg:py-24 bg-slate-900 text-white overflow-hidden">
      <div className="w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col items-center text-center mb-12 sm:mb-16"
        >
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 ${bitter.className}`}>
            {title}
          </h2>

          <p className="text-slate-300 font-normal text-base sm:text-lg max-w-3xl leading-relaxed">
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-[#0D1B2E] border border-slate-800 rounded-2xl p-6 hover:border-red-700/50 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-red-700/20 border border-red-700/40 flex items-center justify-center text-red-500 font-bold text-base">
                    {idx + 1}
                  </div>
                  <h3 className={`text-xl font-bold text-white ${bitter.className}`}>
                    {item.title}
                  </h3>
                </div>
                <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EvidenceGenuineSection;
