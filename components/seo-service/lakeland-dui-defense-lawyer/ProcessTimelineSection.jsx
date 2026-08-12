'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultTimelineItems = [
  {
    number: '01',
    title: 'Arraignment and Pretrial Hearing',
    description:
      'The arraignment is the first time you show up in court after charges. You hear the charges then enter your plea right there in the room. The case then enters the pretrial phase where both sides trade information freely. Polk County courts keep different calendars for arraignments and conferences during the process.',
    badge: 'Initial Phase',
  },
  {
    number: '02',
    title: 'Evidence Collection and Laboratory Testing',
    description:
      'The prosecution continues gathering evidence after the arrest rather than stopping with the police report. Laboratory testing, maintenance records, witness interviews and video evidence may require several weeks before becoming available. Blood analysis usually takes longer than breath testing because certified laboratories complete additional scientific reviews. Delays also happen when prosecutors ask for extra reports from the investigating officers.',
    badge: 'Discovery Phase',
  },
  {
    number: '03',
    title: 'Pre trial Motions and Trial Scheduling',
    description:
      'Pre trial motions allow court decide legal questions. Either side might ask the judge to toss evidence or resolve procedural disputes. After those motions end the court schedules hearings or picks a trial date. Trial dates depend on courtroom space and witness schedules plus the case complexity.',
    badge: 'Pretrial Motions',
  },
  {
    number: '04',
    title: 'ALR Hearing',
    description:
      'The Administrative License Review (ALR) hearing concerns only your driver\'s license suspension. It remains completely separate from the criminal DUI prosecution in county court. Drivers generally have ten days after arrest to request this administrative hearing. The hearing officer reviews whether law enforcement followed Florida\'s administrative suspension requirements before deciding whether the suspension remains valid.',
    badge: 'DHSMV License Review',
  },
];

const ProcessTimelineSection = ({
  badgeText = 'CASE TIMELINE',
  title = 'How Long a DUI Case Takes to Resolve',
  subtitle = 'Every DUI case has its own timeline because of evidence and court scheduling. Polk County judges set hearings based on how your specific case moves forward. Fail to meet court date or a required filing often leads to unnecessary delays.',
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
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
