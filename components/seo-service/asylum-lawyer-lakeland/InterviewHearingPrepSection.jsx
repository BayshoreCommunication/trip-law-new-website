'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultPrepAreas = [
  {
    title: 'Questions about Personal History',
    desc: 'The police and judges start off with background questions. These include your place of birth, your family background, your education and your employment history. They would also like to know how you got to the United States. Any inconsistency in this background is immediately seen as a red flag. Your biography is carefully analyzed so that there are no surprises for you.',
  },
  {
    title: 'Questions about Asylum Claim',
    desc: "These questions concern the fear of persecution, what happened, who caused it and how they are related to the individual's race, religion, nationality, political opinion or group. Officers will want exact dates, locations, names; vague answers can damage more compelling cases. Your preparation should include practice answering the questions, directly and factually, according to what is in your declaration.",
  },
  {
    title: 'Reviewing Your Declaration',
    desc: 'Your declaration will give an idea of what your testimony will be like. We read it out to you in sentence form. All dates, names and details that you give during your oral testimony have to tally with those on paper. Any small differences between your declaration and your testimony will affect your credibility.',
  },
  {
    title: 'Assessing Your Supporting Evidence',
    desc: 'All evidence is reviewed prior to your interview or hearing. All medical documents, police reports, witness statements and documents related to the condition of the country are rechecked. Each piece of evidence is verified as providing support for a certain fact of your case. We point out weak and/or vague evidence, as well.',
  },
  {
    title: 'Working With an Interpreter',
    desc: 'Most people use interpreters. An interpreter who is qualified for your language will be provided by the USCIS and immigration courts. We provide mock sessions with an interpreter like in the actual interview or hearing. Use short and clear sentences and pause frequently so that the interpreter does not leave out any important information.',
  },
];

const InterviewHearingPrepSection = ({
  tagline = 'INTERVIEW & HEARING PREPARATION',
  title = 'How We Prepare You for an Asylum Interview or Immigration Court Hearing',
  description = 'A USCIS asylum officer conducts a private and informal interview. The immigration judge presides over a formal hearing where there will be a government lawyer. We customize your preparation according to the venue you are in.',
  prepAreas = defaultPrepAreas,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#FAFBFD] text-slate-800 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        {/* Section Header */}
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

        {/* 5 Prep Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {prepAreas.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-red-700/10 border border-red-700/30 flex items-center justify-center text-red-700 font-bold mb-4">
                  0{idx + 1}
                </div>
                <h3 className={`text-xl font-bold text-[#0B1829] mb-3 ${bitter.className}`}>
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

export default InterviewHearingPrepSection;

