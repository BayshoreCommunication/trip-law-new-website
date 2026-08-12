'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultReasons = [
  {
    title: 'Filing Forms Behalf Of Clients',
    description:
      'Completing immigration paperwork requires extreme precision and deep knowledge of federal guidelines. Our experienced lawyers prepare every single page to ensure total accuracy for you. This professional service takes the stress out of dealing with federal bureaucracy.',
  },
  {
    title: 'Overcoming Heightened Scrutiny',
    description:
      'Florida immigration offices are known for conducting highly detailed marriage fraud investigations. Our strategic attorneys know exactly how to satisfy these strict local requirements. We help you build a bulletproof file that withstands intense government skepticism.',
  },
  {
    title: 'Navigating Complex Forms and Rules',
    description:
      'Immigration policies shift constantly, making it easy for couples to make mistakes. Our knowledgeable legal professionals stay updated on all 2026 rule updates completely. Hiring an immigration lawyer secures your marriage based green card process.',
  },
  {
    title: 'Handling Inadmissibility Issues',
    description:
      'Past legal troubles or medical conditions can threaten your green card approval chances. Our skilled lawyers handle complex Waivers of Inadmissibility to overcome these hurdles. We present your case in the most favorable light to federal immigration officers.',
  },
  {
    title: 'Avoiding the Marriage Interview Trap',
    description:
      'Unprepared couples can easily make mistakes during their high stakes immigration interview. Attorneys prepare you for tricky questions that officers use to find fraud. Our guidance ensures you go into your scheduled appointment feeling completely confident.',
  },
];

const WhyTrustUsSection = ({
  title = 'Why Florida Couples Trust Trip Law With Their Marriage Based Green Card Case',
  description = 'Couples in Florida trust Trip Law for our personalized legal strategies that reflect your unique story rather than using one-size-fits-all approach.',
  reasons = defaultReasons,
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
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((reason, idx) => (
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
                    ★
                  </div>
                  <h3 className={`text-lg font-bold text-[#0B1829] ${bitter.className}`}>
                    {reason.title}
                  </h3>
                </div>
                <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTrustUsSection;
