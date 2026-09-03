'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const ProcessTimelineSection = ({
  badgeText = 'PROCESS TIMELINE',
  title = 'How Long You Should Expect For EB3 Application Processing',
  subtitle = 'EB3 timelines depend on multiple government agencies working through their own separate queues.',
  timelineItems = [
    {
      step: 'Stage 1',
      title: 'PERM Prevailing Wage Processing',
      desc: 'Obtaining prevailing wage determinations from federal labor authorities currently requires several months. Labor department processing backlogs directly affect initial employment green card timeline projections. Filing wage requests accurately prevents rejections and tedious wage survey redetermination cycles. Strategic timing ensures recruitment activities initiate immediately upon wage determination issuance approval.',
    },
    {
      step: 'Stage 2',
      title: 'PERM Recruitment and Labor Certification',
      desc: 'Mandatory recruitment campaigns require thirty days of active advertising across multiple platforms. A thirty day mandatory quiet period follows active recruitment before labor applications submit. Labor department adjudication takes several months unless chosen for formal audit selection. Audit selections add six to twelve months to baseline labor certification timelines.',
    },
    {
      step: 'Stage 3',
      title: 'Standard vs. Premium Processing',
      desc: 'Standard immigrant petition processing by federal agencies ranges between eight and nineteen months. Premium processing via Form I 907 guarantees adjudication within fifteen business days. Government premium processing fees cost two thousand nine hundred sixty five dollars. Accelerating petition approval locks in priority dates but does not bypass retrogression queues.',
    },
    {
      step: 'Stage 4',
      title: 'Priority Date and Visa Bulletin Wait Times',
      desc: 'Priority date wait times vary significantly based on candidate native country of birth. Candidates from backlogged nations face multi year waiting periods before visa numbers emerge. Nonbacklogged country applicants experience shorter queues, moving quickly to status adjustment phases. Monthly tracking of State Department visa updates guides precise timing for final submissions.',
    },
    {
      step: 'Stage 5',
      title: 'Adjustment of Status Processing',
      desc: 'Adjustment processing inside America typically requires eight to fifteen months for completion. Applicants receive interim employment authorization and advance parole travel permission during processing. Local office interview scheduling influences total adjustment timelines for domestic foreign workers. Complete filings prevent administrative evidence requests, minimizing total domestic green card wait times.',
    },
    {
      step: 'Stage 6',
      title: 'Consular Processing Timeline',
      desc: 'Consular processing timelines range between eight and fourteen months following petition approvals. National Visa Center document collection requires several months to review supporting financial filings. Embassy interview scheduling availability impacts total processing durations for overseas foreign candidates. Proper document preparation accelerates embassy file transfers and interview authorization decisions.',
    },
  ],
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#061224] text-white overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <span className="text-red-500 font-bold text-xs sm:text-sm tracking-widest uppercase mb-3">
            {badgeText}
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.2] mb-4 ${bitter.className}`}>
            {title}
          </h2>
          <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="flex flex-col gap-6 max-w-5xl mx-auto">
          {timelineItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#0B1829] border border-slate-700/60 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-start shadow-xl"
            >
              <div className="flex-shrink-0 px-4 py-2 bg-red-700 text-white font-bold text-sm tracking-wider uppercase rounded-lg">
                {item.step}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className={`text-xl sm:text-2xl font-bold text-white ${bitter.className}`}>
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

export default ProcessTimelineSection;
