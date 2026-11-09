'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultPrepCards = [
  {
    title: 'Apply for Affirmative Asylum when',
    bullets: [
      'You are in the U.S. and have no Notice to Appear in your files.',
      'You have a valid status (for instance, that of a student or work visa).',
      'You file Form I 589 with USCIS.',
      'An asylum officer schedules an interview and considers your declaration.',
      'USCIS rejects your application and the government initiates removal proceedings.',
    ],
  },
  {
    title: 'Apply for Defensive Asylum when',
    bullets: [
      'The Department of Homeland Security issues a Notice to Appear against you.',
      'You file Form I 589 directly to the immigration court.',
      'You go to the master calendar hearing in the Immigration Court.',
      'An immigration judge considers your case at the individual hearing.',
      'The government attorney cross examines you and disputes your evidence.',
    ],
  },
];

const PreparationSection = ({
  tagline = 'AFFIRMATIVE VS DEFENSIVE',
  title = 'When to Apply Affirmative vs. Defensive Asylum Processes',
  description = 'There are two ways to apply for asylum. The way depends on your current status. In case there is no removal proceeding, you submit your application to USCIS. In case the removal proceeding starts, your application goes to the immigration judge. We check your current status and then apply for asylum in one way or another.',
  cards = defaultPrepCards,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#F8FAFC] text-slate-800 overflow-hidden">
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

        {/* 2 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {cards.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-7 sm:p-9 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-red-700/10 border border-red-700/30 flex items-center justify-center text-red-700 font-bold mb-5">
                  0{idx + 1}
                </div>
                <h3 className={`text-xl font-bold text-[#0B1829] mb-4 ${bitter.className}`}>
                  {item.title}
                </h3>
                <div className="h-[2px] w-12 bg-red-700 rounded-full mb-5" />
                <ul className="flex flex-col gap-3">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <span className="text-red-700 font-bold mt-0.5">•</span>
                      <span className="text-slate-700 text-sm sm:text-base leading-relaxed">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreparationSection;

