'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const WhyChooseUsSection = ({
  tagline = 'WHY FLORIDA CLIENTS CHOOSE TRIPLAW',
  title = 'Why Florida Clients Choose TripLaw for EB-1 Immigration Matters',
  description = 'Choosing who handles your EB-1 case matters just as much as the strength of the evidence itself. Florida clients tend to weigh a handful of factors when comparing their options.',
  features = [
    {
      title: 'Licensed Immigration Attorney Representation',
      desc: 'Attorney Hardam Tripathi is licensed in the District of Columbia and Wisconsin, and practices U.S. immigration and nationality law nationwide through federal jurisdiction, Florida included. Immigration law operates at the federal level rather than the state level, so this nationwide reach lets him represent clients across the country from a Florida based office. Clients get the same federal level attention whether their case is filed from Lakeland or anywhere else in the state.',
    },
    {
      title: 'Employment-Based Immigration Experience',
      desc: "TripLaw handles EB-1, EB-2, and EB-3 cases, plus related nonimmigrant visas like H-1B, L-1, and O-1. That range means the firm regularly sees how these categories interact, which matters when a client's situation touches more than one visa type. Understanding the full landscape helps in choosing the strongest realistic path forward rather than defaulting to the most familiar option.",
    },
    {
      title: 'Experience With Extraordinary Ability Cases',
      desc: "The firm works with clients pursuing extraordinary ability and outstanding researcher classifications, matching each one to the right subcategory based on actual evidence rather than a generic checklist. These cases require a close read of USCIS criteria and a strategy built specifically around the applicant's own field. No two extraordinary ability cases really look alike once you get into the details.",
    },
    {
      title: 'Federal Immigration Law Experience',
      desc: "Attorney Tripathi previously worked as a legal professional across several federal agencies, including the U.S. Air Force JAG Corps, the DEA, the ATF, the U.S. Department of State, and a U.S. Attorney's Office. That background brings a working familiarity with how federal agencies actually evaluate evidence and build a record, and it shapes how petitions get prepared from the first draft onward.",
    },
    {
      title: 'Written and Flat Fee Agreement Before Engagement',
      desc: "Fees get discussed upfront, before representation even begins, so clients know what to expect before committing to the case. There's no ambiguity about scope or cost that shows up partway through the process. That clarity tends to build trust from the first real conversation about the case.",
    },
    {
      title: 'Direct Attorney Communication',
      desc: "You're working directly with the firm, not bounced between intermediaries or case managers unfamiliar with the finer legal details. Questions get answered by someone who actually understands the case, not someone reading from a summary. That direct line matters most exactly when something unexpected comes up.",
    },
  ],
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#061224] text-white overflow-hidden">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-[#0B1829] border border-slate-700/60 hover:border-red-700/60 rounded-2xl p-7 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-700/20 border border-red-700/40 flex items-center justify-center text-red-500 font-bold text-lg mb-5">
                  ★
                </div>
                <h3 className={`text-xl font-bold text-white mb-3 ${bitter.className}`}>
                  {item.title}
                </h3>
                <p className="text-slate-300 text-base leading-relaxed">
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

export default WhyChooseUsSection;
