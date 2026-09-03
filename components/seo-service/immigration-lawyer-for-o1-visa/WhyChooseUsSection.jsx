'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const WhyChooseUsSection = ({
  tagline = 'WHY CLIENTS CHOOSE TRIPLAW',
  title = 'Why Clients Choose TripLaw for O-1 Visa Cases',
  description = 'Proving your extraordinary ability to immigration officers requires a masterful legal narrative. Founders and creators trust TripLaw because we offer an unparalleled level of dedicated expertise to turn your professional success into an approved O1 petition.',
  features = [
    {
      title: 'Licensed Attorney on Every File',
      desc: 'Every O-1 case at TripLaw goes through a licensed attorney directly. That level of involvement from the first assessment through the final decision is simply how the firm operates.',
    },
    {
      title: 'Federal Immigration Law Experience',
      desc: "Attorney Hardam Tripathi's background spans several federal agencies, including the U.S. Department of State, the DEA, the ATF, the U.S. Attorney's Office, and the U.S. Air Force JAG Corps. That experience shapes how petitions get built and how USCIS standards get applied in practice.",
    },
    {
      title: 'Experience With Complex O-1 Evidence',
      desc: 'Putting together a strong O-1 petition takes more than collecting documents. It takes a real understanding of how USCIS reads extraordinary ability claims, and TripLaw builds evidence packages with that framework in mind from day one.',
    },
    {
      title: 'Written and Flat Fee Agreement Before Engagement',
      desc: 'Before anything starts, TripLaw provides a written agreement laying out the scope of work and the flat fee involved. No surprises once the case gets underway.',
    },
    {
      title: 'Multilingual Client Support',
      desc: 'TripLaw works with clients from a wide range of backgrounds. Multilingual support keeps communication clear throughout the process, which matters a lot for professionals navigating U.S. immigration from abroad.',
    },
    {
      title: 'Direct Attorney Access Throughout the Case',
      desc: 'Clients reach the attorney handling their case directly. Questions about evidence, status updates, or USCIS developments get answered by the attorney rather than filtered through staff.',
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
