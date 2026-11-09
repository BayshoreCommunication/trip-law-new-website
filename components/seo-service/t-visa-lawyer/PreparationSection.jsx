'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultPathways = [
  {
    pathway: 'T Visa',
    whenToApply: 'Experiencing severe labor or sex trafficking.',
    advantage: 'Vastly shorter backlog and faster path to full status than U visa',
    href: '/t-visa-lawyer',
    highlight: true,
  },
  {
    pathway: 'U Visa',
    whenToApply: 'Experiencing assault, domestic abuse, kidnapping',
    advantage: 'Covers broader list of criminal activities beyond trafficking',
  },
  {
    pathway: 'VAWA (self petition)',
    whenToApply: 'After being abused (victim can be spouses, children or parents of U.S. citizens/LPRs)',
    advantage: 'Completely confidential and does not require law enforcement report',
  },
  {
    pathway: 'Asylum',
    whenToApply: 'You are fearing harm in your home country',
    advantage: 'Leads directly to permanent residence one year after approval',
  },
];

const PreparationSection = ({
  tagline = 'HUMANITARIAN IMMIGRATION COMPARISON',
  title = 'When to Apply for T Visa vs. U Visa, VAWA and Asylum',
  description = 'Different humanitarian immigration options protect people in different legal circumstances.',
  pathways = defaultPathways,
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

        {/* Desktop Comparison Table */}
        <div className="hidden md:block overflow-x-auto max-w-5xl mx-auto mb-8">
          <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
            <thead>
              <tr className="bg-[#0B1829] text-white">
                <th className="py-5 px-6 font-bold text-base sm:text-lg w-1/4">
                  Immigration Pathway
                </th>
                <th className="py-5 px-6 font-bold text-base sm:text-lg w-3/8">
                  When to apply
                </th>
                <th className="py-5 px-6 font-bold text-base sm:text-lg w-3/8 bg-red-700 text-white">
                  Advantage
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-sm sm:text-base">
              {pathways.map((item, idx) => (
                <tr
                  key={idx}
                  className={item.highlight ? 'bg-red-50/40' : idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}
                >
                  <td className="py-5 px-6 font-bold text-[#0B1829]">
                    {item.href ? (
                      <Link href={item.href} className="text-red-700 hover:underline">
                        {item.pathway}
                      </Link>
                    ) : (
                      item.pathway
                    )}
                  </td>
                  <td className="py-5 px-6 text-slate-700">
                    {item.whenToApply}
                  </td>
                  <td className="py-5 px-6 text-slate-900 font-medium bg-red-50/60">
                    <div className="flex items-start gap-2">
                      <span className="text-red-700 font-bold">✓</span>
                      <span>{item.advantage}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="grid grid-cols-1 gap-6 md:hidden max-w-md mx-auto">
          {pathways.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`rounded-2xl p-6 border shadow-md flex flex-col justify-between ${
                item.highlight
                  ? 'bg-red-50/50 border-red-200'
                  : 'bg-white border-slate-200'
              }`}
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-red-700/10 border border-red-700/30 flex items-center justify-center text-red-700 font-bold mb-4">
                  0{idx + 1}
                </div>
                <h3 className={`text-xl font-bold text-[#0B1829] mb-3 ${bitter.className}`}>
                  {item.href ? (
                    <Link href={item.href} className="text-red-700 hover:underline">
                      {item.pathway}
                    </Link>
                  ) : (
                    item.pathway
                  )}
                </h3>
                <div className="mb-4">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    When to apply:
                  </span>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {item.whenToApply}
                  </p>
                </div>
                <div>
                  <span className="text-xs font-bold text-red-700 uppercase tracking-wider block mb-1">
                    Advantage:
                  </span>
                  <p className="text-slate-900 text-sm font-medium leading-relaxed">
                    {item.advantage}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreparationSection;

