'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultTimelineItems = [
  {
    number: '01',
    title: 'Legal Status and Immigration Security',
    description:
      'Approval ends the uncertainty of a pending case and gives someone a documented, defensible place within the immigration system. That security shows up in everyday things too, applying for a license, opening an account, taking a new job, without wondering whether status is going to come up as a problem.',
    badge: 'Legal Protection',
  },
  {
    number: '02',
    title: 'Work and Travel Authorization',
    description:
      'Approved applicants can work lawfully and, in many cases, travel internationally without putting a pending case at risk. For green card holders and new citizens, that authorization stops being tied to a renewable permit that requires ongoing filings and fees.',
    badge: 'Freedom of Movement',
  },
  {
    number: '03',
    title: 'Family Reunification Opportunities',
    description:
      'An approval often opens the door for a spouse, child, or other qualifying relative to start their own case. A lot of our new clients actually come to us after a family member\'s case is approved, ready to start the next petition in the family\'s plan.',
    badge: 'Family Petitions',
  },
  {
    number: '04',
    title: 'Permanent Residence Benefits',
    description:
      'Green card holders get access to federal benefits, in-state tuition in many cases, and a stable foundation to plan around long term. Permanent residence also lets someone sponsor certain relatives and live and work anywhere in the country, without the geographic or employer restrictions that come with a lot of nonimmigrant visas.',
    badge: 'Green Card Rights',
  },
  {
    number: '05',
    title: 'A Path Toward U.S. Citizenship',
    description:
      'Permanent residence starts the naturalization clock, usually three to five years depending on how the green card was obtained. We track that eligibility date for clients so they can file for citizenship as soon as they qualify instead of losing time to a delay that didn\'t need to happen.',
    badge: 'Naturalization Path',
  },
  {
    number: '06',
    title: 'Long Term Stability in the United States',
    description:
      'Beyond the legal side of things, an approved case gives families the ability to plan around homes, careers, and schools without constantly worrying about losing status. That stability is usually what clients say they value most, more than any single document.',
    badge: 'Peace of Mind',
  },
];

const ProcessTimelineSection = ({
  badgeText = 'CASE APPROVAL BENEFITS',
  title = 'What You Gain When Your Immigration Case Is Approved',
  subtitle = 'An approval changes more than a piece of paper. Here\'s what it actually means for our clients once a case finally resolves.',
  items = defaultTimelineItems,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#FAFBFD] text-slate-800 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col items-center text-center mb-14 sm:mb-16"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-red-700 font-bold text-xs sm:text-sm tracking-widest uppercase">
              {badgeText}
            </span>
            <div className="h-[2px] w-12 bg-red-700 rounded-full" />
          </div>

          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1829] tracking-tight max-w-4xl leading-[1.18] mb-4 ${bitter.className}`}>
            {title}
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-normal max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: 'easeOut' }}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/70 border border-slate-100 flex flex-col justify-between text-left hover:shadow-2xl hover:border-red-700/30 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-3xl font-bold text-red-700 ${bitter.className}`}>
                    {item.number}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-700/10 border border-red-700/20 px-3.5 py-1 rounded-full">
                    {item.badge}
                  </span>
                </div>

                <h3 className={`text-xl sm:text-2xl font-bold text-[#0B1829] mb-3 ${bitter.className}`}>
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimelineSection;
