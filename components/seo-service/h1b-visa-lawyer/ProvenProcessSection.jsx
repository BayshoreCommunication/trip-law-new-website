'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultSteps = [
  {
    step: 'Step 1',
    title: 'Pre Filing Case Review',
    desc: 'We meet with the employer and the worker, together or in separate sessions. We test eligibility, flag risks and recommend a filing path in writing. You get an honest assessment, even when the answer is to wait.',
  },
  {
    step: 'Step 2',
    title: 'Documents and LCA Preparation',
    desc: 'We send a tailored checklist and collect records from both the employer and worker. Next we rewrite the job description and pull the prevailing wage from DOL data. Then we file the LCA and monitor certification through the DOL portal.',
  },
  {
    step: 'Step 3',
    title: 'Petition Preparation and Filing',
    desc: 'We prepare Form I 129, the H supplements, the support letter and organized exhibits. An indexed exhibit set lets the officer find each answer in seconds. You receive the USCIS receipt notice and a realistic decision timeline for planning.',
  },
  {
    step: 'Step 4',
    title: 'Case Monitoring and RFE Response',
    desc: 'We track the case daily and alert both parties after every status change. If USCIS issues an RFE, we start the response immediately and file it early.',
  },
  {
    step: 'Step 5',
    title: 'Approval and Next Steps',
    desc: 'We review each Form I 797 for errors on the day it arrives. Then we confirm the start date and explain work authorization conditions to both parties.',
  },
  {
    step: 'Step 6',
    title: 'Visa Stamping or Change of Status Support',
    desc: 'Workers abroad receive a document list, DS 160 guidance and interview preparation for their consulate. Workers inside the U.S. receive guidance on status, travel and re entry timing.',
  },
  {
    step: 'Step 7',
    title: 'Extensions, Amendments and Transfers',
    desc: 'We calendar your expiration date and open the extension file six months early. Role changes, new worksites and employer changes each receive a filing recommendation.',
  },
];

const defaultTimelinePhases = [
  {
    phase: 'Initial consultation',
    whatWeDo: 'Case review, eligibility call and filing strategy',
  },
  {
    phase: 'Evidence preparation',
    whatWeDo: 'Document collection and job description rewrite',
  },
  {
    phase: 'Labor certification',
    whatWeDo: 'LCA filed and certified',
  },
  {
    phase: 'USCIS submission',
    whatWeDo: 'Petition filed with USCIS',
  },
  {
    phase: 'After filing',
    whatWeDo: 'Monitoring, RFE response if issued and the approval notice',
  },
  {
    phase: 'After approval',
    whatWeDo: 'Visa stamping or change of status support',
  },
];

const ProvenProcessSection = ({
  tagline = 'ATTORNEY-GUIDED PROCESS',
  title = 'How Trip Law Handles Your H1B Case From Start to Finish',
  description = 'We run every H1B case through seven steps, each with a clear deliverable.',
  timelineTitle = 'What to Expect When You Hire Trip Law',
  timelineDesc = 'This timeline applies to cap exempt cases and to cap cases after selection. Exact dates shift with USCIS workload and how quickly your documents arrive.',
  steps = defaultSteps,
  timelinePhases = defaultTimelinePhases,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#030914] text-white overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        
        {/* Part 1: Seven Steps Process */}
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto mb-20">
          {steps.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              className="bg-[#091424] border border-slate-700/60 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="inline-block px-3 py-1 bg-red-700 text-white font-bold text-xs tracking-wider uppercase rounded mb-4">
                  {item.step}
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

        {/* Part 2: What to Expect Timeline */}
        <div className="pt-10 border-t border-slate-800">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
            <span className="text-red-500 font-bold text-xs sm:text-sm tracking-widest uppercase mb-3">
              CLIENT EXPERIENCE TIMELINE
            </span>
            <h3 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-[1.2] mb-4 ${bitter.className}`}>
              {timelineTitle}
            </h3>
            <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {timelineDesc}
            </p>
          </div>

          <div className="overflow-x-auto max-w-4xl mx-auto rounded-2xl border border-slate-800 shadow-2xl bg-[#091424]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#061224] border-b border-slate-800 text-xs uppercase tracking-wider text-red-400 font-bold">
                  <th className="py-4 px-6 w-1/3">Phase</th>
                  <th className="py-4 px-6 w-2/3">What we do</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-sm sm:text-base">
                {timelinePhases.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-4 px-6 font-semibold text-white">
                      {row.phase}
                    </td>
                    <td className="py-4 px-6 text-slate-300">
                      {row.whatWeDo}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProvenProcessSection;
