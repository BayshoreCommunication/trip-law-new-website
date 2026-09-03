'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const BenefitsSection = ({
  tagline = 'EB-2 GREEN CARD BENEFITS',
  title = 'What You Gain When Your EB-2 Green Card Is Approved',
  description = 'Once your EB-2 green card is approved, you gain a more secure immigration status with greater freedom in your personal and professional life.',
  benefits = [
    {
      title: 'Lawful Permanent Resident Status',
      desc: "Approval at the final stage makes you a lawful permanent resident, documented through a Permanent Resident Card. It's a stable legal foundation that temporary status simply can't offer.",
    },
    {
      title: 'Greater Employment Flexibility',
      desc: "Permanent residents can work for any employer, switch jobs, take a promotion, or go out on their own, all without new work authorization or a specific visa category to maintain. That's a freedom most temporary work visa holders don't have, and it opens up real professional flexibility.",
    },
    {
      title: 'Ability to Live Permanently in the United States',
      desc: 'You can live in the U.S. indefinitely, as long as you meet the obligations that come with permanent resident status. That long-term stability is really the core difference between temporary status and a green card.',
    },
    {
      title: 'Immigration Benefits for Qualifying Family Members',
      desc: 'Permanent residents can petition for a spouse and unmarried children to get immigration benefits of their own. The categories available differ from what U.S. citizens can offer, and availability shifts by category and country of birth. Family members already in the U.S. may be able to adjust status once a visa opens up.',
    },
    {
      title: 'Ability to Travel as a Permanent Resident',
      desc: "You can travel internationally and come back without a separate visa. That said, long absences can raise questions about whether you've abandoned your residence. 6 months away starts drawing scrutiny at entry, and past a year, you'll typically need a reentry permit arranged before you leave.",
    },
    {
      title: 'Future Eligibility for U.S. Citizenship',
      desc: 'Permanent residents who meet the residence, physical presence, and good moral character requirements can apply for naturalization under Section 316 of the Immigration and Nationality Act. Most need 5 continuous years as a permanent resident. Those married to and living with a U.S. citizen may qualify after 3 years under Section 319.',
    },
  ],
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#030914] text-white overflow-hidden">
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

        {/* Benefits Grid */}
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
