'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultPrepSections = [
  {
    title: 'U Visa and T Visa',
    intro: 'You cannot combine a U visa and a T visa for the exact same event. The law treats these visas as legally incompatible. Each visa protects crime victims under different legal rules. You must meet different requirements for each application. A U visa requires a signed law enforcement certification. In contrast, the T visa specifically addresses human trafficking.',
    bullets: [
      'Street muggings and armed robberies lack commercial or sexual exploitation. This is strictly for U visa cases.',
      'Domestic abuse without forced labor or commercial sex trafficking. They qualify under U visa rules than T visa.',
      'Extortion schemes involving threats of deportation. It qualifies only for U visa crimes. Because no forced labor occurred.',
    ],
  },
  {
    title: 'U Visa and Asylum',
    intro: 'Yes, you can apply for both a U visa and asylum visa at the same time.',
    bullets: [
      'Crime victims fearing severe harm, persecution or death in their home country can also apply for asylum.',
      'Filing both applications together creates a helpful, parallel path to legal status.',
      'The asylum case provides an independent way to get a work permit. Because multi year cap blockages delay final u visa grant.',
    ],
  },
  {
    title: 'U Visa and VAWA',
    intro: 'Yes, you can apply for both a U visa and VAWA visa at the same time.',
    bullets: [
      'Abuse victims married to or parented by U.S. citizens or permanent residents qualify for VAWA protection.',
      'Filing VAWA alongside a U visa protects you if your police certification faces unexpected delays.',
      'If your abuser also forced you into domestic servitude, you should file VAWA alongside a T visa instead.',
    ],
  },
];

const PreparationSection = ({
  tagline = 'HUMANITARIAN OPTIONS COMPARISON',
  title = 'Can You Apply for a U Visa Along With a T Visa, VAWA or Asylum?',
  description = 'Filing more than one type of application may be possible in some circumstances. Yet the facts, legal standards, deadlines and consequences require individual analysis.',
  prepSections = defaultPrepSections,
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

        {/* 3 Humanitarian Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {prepSections.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-red-700/10 border border-red-700/30 flex items-center justify-center text-red-700 font-bold mb-5">
                  0{idx + 1}
                </div>
                <h3 className={`text-xl font-bold text-[#0B1829] mb-3 ${bitter.className}`}>
                  {item.title}
                </h3>
                <div className="h-[2px] w-12 bg-red-700 rounded-full mb-4" />
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-5">
                  {item.intro}
                </p>
                <ul className="flex flex-col gap-3">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <span className="text-red-700 font-bold mt-0.5">•</span>
                      <span className="text-slate-600 text-sm leading-relaxed">
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

