'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const BenefitsSection = ({
  tagline = 'O-1 VISA BENEFITS',
  title = 'What You Gain the Moment Your O-1 Visa Is Approved',
  description = 'Approval brings a specific set of benefits. Knowing what comes with it helps you plan the next steps more effectively.',
  benefits = [
    {
      title: 'Ability to Perform Approved U.S. Work',
      desc: 'An approved O-1 lets you carry out the specific work described in the petition, staying within your field of extraordinary ability and consistent with the approved employer or agent arrangement.',
    },
    {
      title: 'Opportunity to Continue Your Professional Career',
      desc: 'Because the O-1 is built around your actual professional activities, approval gives you a legal way to keep pursuing engagements and projects in the United States that align with the achievements behind your petition.',
    },
    {
      title: 'O-3 Status for Eligible Family Members',
      desc: 'A spouse and unmarried children under 21 can apply for O-3 status to join you in the United States. They cannot work under this status. Studying is permitted.',
    },
    {
      title: 'Potential O-1 Extensions',
      desc: 'The O-1 starts with up to three years and can be extended in one-year increments after that. There is no cap on how many extensions are available for professionals who continue to qualify.',
    },
    {
      title: 'Future Immigration Planning',
      desc: 'The professional record built for an O-1 petition often carries forward into future plans as well, including certain employment-based green card categories down the line.',
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
