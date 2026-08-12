'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultPathways = [
  {
    id: 'family_immigration',
    title: 'Family-Based Immigration',
    description:
      "We file petitions for spouses, parents, children, and siblings of U.S. citizens and green card holders, and we walk families through whichever path applies, consular processing abroad or adjustment of status here. The preference category matters more than most people expect. It's a very different process when a case is F2A compared to F3 or F4 petition and it is a good idea to get that sense right from the start so expectations are set appropriately with a family. Finally, we take actual time with sponsors prior to getting them to sign an affidavit of support, as that signature ultimately has financial ramifications that extend beyond the approval.",
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: 'employment_immigration',
    title: 'Employment-Based Immigration',
    description:
      'Employers around Lakeland come to us to sponsor workers through PERM labor certification and I-140 petitions, covering roles from skilled trades to management positions transferring within a company. On the employer side, we help structure the recruitment process so it satisfies Department of Labor rules before a single petition gets filed, since a defective recruitment step can undo months of work later. On the worker side, we watch priority dates and Visa Bulletin movement closely, because timing a filing wrong can cost a case a full year or more.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 'green_cards',
    title: 'Green Card Applications',
    description:
      "We prepare Form I-485 filings from the ground up, including the medical exam, the supporting evidence, and the affidavit of support USCIS expects to see. When a client qualifies, we file work and travel authorization at the same time as the green card application, so people aren't left in limbo without documentation while the main case is still pending. Every filing gets checked against whatever the client submitted in prior visa applications, because inconsistencies are one of the more common reasons a straightforward case turns complicated.",
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2v4a2 2 0 01-2 2H9a2 2 0 01-2-2V9a2 2 0 012-2h6z" />
      </svg>
    ),
  },
];

const PathwaysSection = ({
  tagline = 'IMMIGRATION SERVICES',
  title = 'Immigration Services We Provide for Lakeland Clients',
  subtitle = 'Trip Law covers the immigration matters Lakeland families, workers, and employers actually bring through our door. One attorney from the immigration lawyer lakeland fl stays with each case from the first meeting to the last decision, rather than passing it between staff along the way.',
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/pathways-bg.png',
  pathways = defaultPathways,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#FAFBFD] text-slate-800 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src={bgImage}
          alt="Pathways Background Image"
          fill
          quality={90}
          priority
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-white/70" />
      </div>

      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col items-center text-center mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-[2px] w-12 sm:w-16 bg-red-700 rounded-full" />
            <span className="text-red-700 font-bold text-xs sm:text-sm tracking-widest uppercase">
              {tagline}
            </span>
            <span className="text-red-700 font-bold text-xs sm:text-sm">★</span>
            <div className="h-[2px] w-12 sm:w-16 bg-red-700 rounded-full" />
          </div>

          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1829] tracking-tight mb-4 ${bitter.className}`}>
            {title}
          </h2>

          <p className="text-slate-600 font-normal text-base sm:text-lg max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {pathways.map((card, idx) => (
            <motion.div
              key={card.id || idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/70 border border-slate-100 hover:border-red-700/40 flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group"
            >
              <div className="w-20 h-20 rounded-full bg-red-700/10 border border-red-700/20 flex items-center justify-center mb-6 group-hover:bg-red-700 group-hover:text-white transition-colors duration-300">
                {card.icon ? (
                  React.cloneElement(card.icon, {
                    className: 'w-9 h-9 text-red-700 group-hover:text-white transition-colors duration-300',
                  })
                ) : null}
              </div>

              <h3 className={`text-xl font-bold text-[#0B1829] mb-3 group-hover:text-red-700 transition-colors duration-300 ${bitter.className}`}>
                {card.title}
              </h3>

              <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed mb-0 flex-grow">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PathwaysSection;
