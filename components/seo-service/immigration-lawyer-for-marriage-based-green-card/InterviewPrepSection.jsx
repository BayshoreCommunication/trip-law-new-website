'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultSteps = [
  {
    title: 'Application and Background Review',
    description:
      'Trip Law’s legal team goes through your submitted documents and previous immigration filing line by line carefully. Our immigration lawyer identifies potential issues early. We ensure that all your answers match your original written statements perfectly. It is crucial because USCIS officers frequently compare records from different government databases. If changes like new home or work occurred after filing, our attorney guides on presenting them during the interview.',
  },
  {
    title: 'Mock Interviews and Question Rehearsals',
    description:
      'We conduct realistic practice interviews to help reduce your anxiety and stress. Attorneys ask the exact types of personal questions officers use during reviews. This preparation helps you speak clearly about your shared history and married life. Interview preparation usually includes daily routines, family ties, key dates, employment, travel and future plans.',
  },
  {
    title: 'Organize Evidence of Shared Life',
    description:
      'Couples must compile their family photos and documents into neat binders carefully. Organized financial records, photographs, insurance policies, tax returns, travel history, leases, utility bills, children\'s records and other supporting evidence. Our diligent lawyers review these materials to ensure they show an active life. An organized presentation makes a very positive impression on the interviewing officer.',
  },
  {
    title: 'Strategizing for Red Flags',
    description:
      'Unique marital circumstances can sometimes trigger immediate suspicion from the reviewing officer. Situations includes short dating periods, cultural differences or separate residences because of employment often require additional explanation. Fortunately, our legal counsel creates a proactive strategy to address these issues. Having specialized guidance ensures these potential problems do not cause a denial.',
  },
  {
    title: 'Behavioral and Etiquette Coaching',
    description:
      'Couples must learn how to interact professionally with government officers during appointments. Our attentive attorneys provide valuable advice about proper body language and etiquette. Simple adjustments can help your presentation go smoothly and reduce overall stress.',
  },
  {
    title: 'Deciding on Attorney Attendance',
    description:
      'Attending your final immigration interview on your own can feel overwhelming and stressful. Having dedicated immigration lawyer by your side provides complete peace of mind. We protect your legal rights if the officer becomes overly aggressive or unfair.',
  },
];

const InterviewPrepSection = ({
  title = 'How Trip Immigration Lawyer Prepares Married Couples for Green Card Interview',
  description = 'Marriage based green card interview allows a USCIS officer to directly assess your paperwork. With good preparation couples can respond with confidence and consistently with evidence. USCIS emphasizes thorough screening of marriage applications to detect fraud or check legitimacy.',
  steps = defaultSteps,
}) => {
  return (
    <section className="w-full py-16 lg:py-24 bg-[#FAFBFD] text-slate-800 overflow-hidden">
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
            {description}
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
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-md hover:shadow-xl hover:border-red-700/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-red-700 text-white font-bold text-sm flex items-center justify-center">
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

export default InterviewPrepSection;
