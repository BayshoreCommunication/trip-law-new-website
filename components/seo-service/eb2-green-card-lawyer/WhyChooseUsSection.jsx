'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const WhyChooseUsSection = ({
  tagline = 'WHY CLIENTS CHOOSE TRIPLAW',
  title = 'Why Clients Choose TripLaw for EB-2 Green Card Cases',
  description = 'TripLaw provides experienced legal representation and personal attention throughout the EB-2 green card process.',
  features = [
    {
      title: 'Licensed Attorney Representation Across Federal Jurisdiction',
      desc: "Attorney Hardam Tripathi is licensed in the District of Columbia and Wisconsin, and practices U.S. immigration law across all 50 states, territories, and at U.S. embassies and consulates abroad under federal jurisdiction. From every EB-2 case at TripLaw you’ll get real attorney involvement along with paralegal handling.",
    },
    {
      title: 'Focus on Employment and Business Immigration',
      desc: "Employment-based work is a core part of what TripLaw does. The firm handles EB-2, EB-3, EB-4, and EB-5 cases, along with O-1 and other employment categories. Tripathi's background in business and investor immigration gives him a practical feel for the commercial side of these cases.",
    },
    {
      title: 'Experience With Complex EB-2 Cases',
      desc: 'NIW petitions need a different approach than employer-sponsored EB-2 work. TripLaw has experience assessing NIW eligibility and building strategy around the Dhanasar framework, defining the proposed endeavor, gathering evidence of national importance, and making the case for why the waiver benefits the country.',
    },
    {
      title: 'Direct Communication With Your Attorney',
      desc: 'Clients reach Tripathi directly throughout their case. That matters in EB-2 work, where employer changes, USCIS notices, or Visa Bulletin movement can call for a quick legal read.',
    },
  ],
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#061224] text-white overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        {/* Section Header */}
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

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#0B1829] border border-slate-700/60 hover:border-red-700/60 rounded-2xl p-7 sm:p-9 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-700/20 border border-red-700/40 flex items-center justify-center text-red-500 font-bold text-lg mb-5">
                  ★
                </div>
                <h3 className={`text-xl sm:text-2xl font-bold text-white mb-4 ${bitter.className}`}>
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
