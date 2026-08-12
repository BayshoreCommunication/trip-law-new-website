'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultSteps = [
  {
    title: 'Receive Your Physical Card',
    description:
      'Your official permanent resident card will arrive by mail within a few weeks. This secure document provides physical proof of your legal status in America. Keep it in a safe place and carry it always during domestic travel.',
  },
  {
    title: 'Review for Errors',
    description:
      'You must check the printed name and dates on your new card immediately. Even minor spelling mistakes made by the government must be corrected quickly. Filing for a correction requires submitting a specific form to the federal agency.',
  },
  {
    title: 'Update Your Documents',
    description:
      'Take your new green card to the local Social Security office right away. You can now remove the work restrictions from your original social security card completely. Remember to update your status with your employer and state driver\'s license office.',
  },
  {
    title: 'Monitor Conditional Status (If Applicable)',
    description:
      'If married under two years, you must track your expiration date carefully. You must file for the Removal of Conditions Form I-751 before your expiration. This crucial step requires submitting updated evidence of your ongoing genuine marital relationship.',
  },
  {
    title: 'Maintain Your Status & Travel',
    description:
      'Do not stay outside the United States for longer than six months. Extended absences can signal that you have abandoned your permanent American residence. Always travel with your valid foreign passport and unexpired current green card together.',
  },
  {
    title: 'Track Your Path to Citizenship',
    description:
      'Most marriage card holders can apply for naturalization after three years total. You must remain married and living with your citizen spouse that entire time. Start gathering your continuous residency documents early to prepare for this final step.',
  },
];

const AfterApprovalSection = ({
  title = 'What Happens After Your Marriage Based Green Card Is Approved',
  subtitle = 'Your interview approval gives you legal permanent resident status but you still have responsibility. You must be sure to keep your documents up to date and also keep track of any changes in immigration laws.',
  steps = defaultSteps,
}) => {
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
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1829] tracking-tight mb-4 ${bitter.className}`}>
            {title}
          </h2>

          <p className="text-slate-600 font-normal text-base sm:text-lg max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:border-red-700/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-red-700/10 border border-red-700/30 flex items-center justify-center text-red-700 font-bold text-sm">
                    {idx + 1}
                  </div>
                  <h3 className={`text-lg font-bold text-[#0B1829] ${bitter.className}`}>
                    {step.title}
                  </h3>
                </div>
                <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AfterApprovalSection;
