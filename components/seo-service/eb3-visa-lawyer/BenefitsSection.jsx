'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const BenefitsSection = ({
  tagline = 'EB-3 GREEN CARD BENEFITS',
  title = 'What Happens When Your EB3 Visa Is Approved',
  description = 'EB3 approval grants lawful permanent residence, allowing workers and families to live and work anywhere in the United States permanently.',
  benefits = [
    {
      title: 'Lawful Permanent Resident Status',
      desc: 'Receiving an approved EB3 green card grants lawful permanent residence, providing long-term security in the U.S.',
    },
    {
      title: 'Full Work Authorization',
      desc: 'Permanent residents have unrestricted employment authorization to work for U.S. employers or pursue independent career opportunities.',
    },
    {
      title: 'Family Derivative Green Cards',
      desc: 'Spouses and unmarried children under 21 receive derivative permanent residence status alongside the primary applicant.',
    },
    {
      title: 'Travel Rights and Reentry',
      desc: 'Green card holders enjoy international travel rights with smooth reentry into the U.S. under standard immigration laws.',
    },
    {
      title: 'Pathway to U.S. Citizenship',
      desc: 'After five years of continuous permanent residence, EB3 green card holders become eligible to apply for U.S. naturalization.',
    },
  ],
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#030914] text-white overflow-hidden">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-[#091424]/90 border border-slate-700/60 hover:border-red-700/60 rounded-2xl p-6 sm:p-7 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-red-700/20 border border-red-700/40 flex items-center justify-center text-red-500 font-bold mb-4">
                  ✓
                </div>
                <h3 className={`text-lg font-bold text-white mb-3 ${bitter.className}`}>
                  {item.title}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
