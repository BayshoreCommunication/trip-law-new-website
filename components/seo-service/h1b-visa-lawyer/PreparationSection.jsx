'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultPrepSteps = [
  {
    title: 'File an Amended Petition When',
    desc: 'Changes to current employment conditions require filing an amended Form I-129 petition before implementing the change:',
    bullets: [
      'The worker moves to a worksite outside the original metropolitan area',
      'Duties change enough to alter the occupation or the LCA',
      'Full time hours change to part time or the reverse',
      "A merger or sale changes the employer's legal structure",
    ],
  },
  {
    title: 'File a New Petition When',
    desc: 'Substantial structural changes or new employment arrangements require filing a new H-1B petition with USCIS:',
    bullets: [
      'A different employer wants to hire the worker (transfer)',
      'The approved period is ending and the worker needs more time (extension)',
      'A prior petition was denied and the facts or role have changed',
      'A worker leaves a cap exempt employer for a cap subject one',
    ],
  },
];

const PreparationSection = ({
  tagline = 'FILING DECISION GUIDE',
  title = 'When to Apply For H1B Amendment vs. New Petition',
  description = 'Changes to the job can require a new filing, so check before you act.',
  prepSteps = defaultPrepSteps,
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {prepSteps.map((item, idx) => (
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
                <h3 className={`text-xl font-bold text-[#0B1829] mb-3 ${bitter.className}`}>
                  {item.title}
                </h3>
                <div className="h-[2px] w-12 bg-red-700 rounded-full mb-4" />
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                  {item.desc}
                </p>
                {item.bullets && (
                  <ul className="flex flex-col gap-2.5">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <span className="text-red-700 font-bold mt-0.5">•</span>
                        <span className="text-slate-700 text-sm sm:text-base leading-relaxed">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreparationSection;
