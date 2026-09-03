'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const PreparationSection = ({
  tagline = 'ATTORNEY PREPARATION',
  title = 'How an Immigration Lawyer Prepares O-1 Applicants for USCIS Review',
  description = 'A skilled immigration lawyer for O-1 visa cases does more than fill out forms correctly. The actual value is anticipating how USCIS will read the evidence and closing gaps before they become problems.',
  prepSteps = [
    {
      title: 'Matching Evidence to O-1 Criteria',
      desc: "Every piece of evidence needs to tie back to one or more applicable USCIS criteria. The attorney works through the applicant's record methodically, sorting out which criteria are realistically within reach and where the documentation falls short.",
    },
    {
      title: 'Building a Clear Professional Narrative',
      desc: 'The cover letter, also known as the "support memorandum," is the attorney\'s opportunity to tell his professional story and connect each piece of evidence to the applicable criteria. The quality of the narrative plays an important role in whether a case is successful or a Request for Evidence is issued here.',
    },
    {
      title: 'Reviewing Supporting Letters',
      desc: 'Expert letters should not be empty of content, but filled instead with praise. The attorney can determine if each of them in fact meets the requirements to which it applies and whether the author has credibility to argue that they do.',
    },
    {
      title: 'Preparing for Potential USCIS Questions',
      desc: "Some cases move through the process smoothly, while others require additional USCIS review. Part of the attorney's job is anticipating where USCIS might push back and addressing those points directly in the filing, before a Request for Evidence ever shows up.",
    },
    {
      title: 'Responding to Requests for Evidence',
      desc: 'If an RFE does arrive, the attorney puts together a detailed written response covering every issue raised. These responses need to be thorough and filed on time. A late or thin response almost always ends in denial.',
    },
  ],
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#F8FAFC] text-slate-800 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <span className="text-red-700 font-bold text-xs sm:text-sm tracking-widest uppercase mb-3">
            {tagline}
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1829] tracking-tight leading-[1.2] mb-4 ${bitter.className}`}>
            {title}
          </h2>
          <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {prepSteps.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-red-700/10 border border-red-700/30 flex items-center justify-center text-red-700 font-bold mb-4">
                  0{idx + 1}
                </div>
                <h3 className={`text-lg font-bold text-[#0B1829] mb-3 ${bitter.className}`}>
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
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

export default PreparationSection;
