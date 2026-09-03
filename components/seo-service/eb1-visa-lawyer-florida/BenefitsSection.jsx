'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const BenefitsSection = ({
  tagline = 'EB-1 GREEN CARD BENEFITS',
  title = 'What You Gain When Your EB-1 Green Card Is Approved',
  description = 'EB-1 approval means more than finishing a legal process on paper. It can genuinely open new possibilities for your career and your long-term life here in the United States.',
  benefits = [
    {
      title: 'Lawful Permanent Resident Status',
      desc: 'Approval brings lawful permanent resident status and the right to live in the United States indefinitely, without the constant renewals and deadlines that come with temporary visas. This status becomes the foundation for nearly everything that follows, from work authorization to future citizenship eligibility. It changes how secure life in the U.S. starts to feel day to day.',
    },
    {
      title: 'Greater Career and Employment Stability',
      desc: 'No more employer sponsorship strings attached the way temporary work visas require. That opens up real flexibility. You can change jobs, switch industries entirely, or start your own business without needing a new petition filed on your behalf every time. That freedom is one of the most practical benefits of permanent residence.',
    },
    {
      title: 'Permanent Residence in the United States',
      desc: 'You get to build a real, long-term life here without renewing temporary status every few years and wondering what happens next. That stability shows up in ordinary decisions, buying property, enrolling kids in school, planning further ahead than a visa expiration date allows. It changes the texture of everyday life in ways easy to underestimate until you actually have them.',
    },
    {
      title: 'Immigration Benefits for Qualifying Family Members',
      desc: 'Certain family members may qualify for related immigration benefits based on your approved petition, depending on relationship and timing. This can open a path for spouses and children to pursue their own permanent residence. Bring up family eligibility early in the process rather than treating it as an afterthought once your own case is already moving.',
    },
    {
      title: 'Permanent Resident Travel Rights',
      desc: 'Lawful permanent residents generally keep the ability to travel internationally and return, subject to standard requirements around length of absence and reentry documentation. Extended time outside the U.S. can raise questions at reentry, so understanding these rules before booking a long trip helps. A little preparation avoids complications that are otherwise entirely preventable.',
    },
    {
      title: 'Future Eligibility for U.S. Citizenship',
      desc: "Permanent residence can eventually open the door to naturalization once you meet the requirements around continuous residence, physical presence, and good moral character. Many EB-1 green card holders see citizenship as the natural next chapter once they've settled into permanent status. It's a milestone worth planning toward early, not something to think about only once the card arrives.",
    },
  ],
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#030914] text-white overflow-hidden">
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
