'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultTimelineItems = [
  {
    step: '1',
    title: 'Adjustment of Status Timeline',
    description:
      'The local process for adjustment of status takes about eight to fourteen months. Processing speeds vary based on the specific caseload of your local office completely. Some lucky applicants might receive approvals without an interview in 2026 this year.',
  },
  {
    step: '2',
    title: 'Consular Processing Timeline',
    description:
      'Consular processing through an embassy generally takes twelve to eighteen months total. The schedule depends heavily on the specific foreign country where you apply. Document reviews at the National Visa Center consume several months of time.',
  },
  {
    step: '3',
    title: 'Delay Factors',
    description:
      'Background checks, missing documents, and local backlogs can delay your application significantly. Name checks through federal databases sometimes take unexpected months to clear properly. Responding slowly to government requests will always add extra time to your wait.',
  },
  {
    step: '4',
    title: 'Tracking Your Case Status',
    description:
      'You will track your progress using the Receipt Notice Form I-797 Notice of Action. This notice confirms USCIS accepted your application and assigned receipt number. Next, you will receive a Biometrics Notice followed by an official Interview Notice. Finally after confirmation the long awaited Approval Notice will arrive in your home mailbox. This is before step USCIS issuing PR or permanent resident card.',
  },
];

const ProcessTimelineSection = ({
  title = 'How Long You Should Expect For the Application Processing',
  subtitle = 'The time it takes to obtain a marriage based green card depends on location, legal path, government backlog and potential RFEs. USCIS provides average processing times yet individual cases might move slower or faster for these factors.',
  items = defaultTimelineItems,
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
            {subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 hover:shadow-xl hover:border-red-700/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-red-700 text-white font-bold text-lg flex items-center justify-center shadow-lg">
                    {item.step}
                  </div>
                  <h3 className={`text-xl font-bold text-[#0B1829] ${bitter.className}`}>
                    {item.title}
                  </h3>
                </div>
                <p className="text-slate-600 text-base leading-relaxed">
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
