'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const ProvenProcessSection = ({
  tagline = 'ATTORNEY-GUIDED PROCESS',
  title = "Trip Law's Proven EB3 Visa Application Process For Florida Clients",
  description = 'Our EB3 process keeps each stage organized. We handle the legal paperwork carefully while keeping you informed about every required step.',
  steps = [
    {
      step: 'Step 1',
      title: 'Initial EB3 Eligibility and Case Assessment',
      desc: 'We evaluate job duties, wage requirements and foreign worker credentials during intake. Our legal analysis determines the appropriate preference category placement among skilled, professional or unskilled. By identifying potential eligibility hurdles early, we establish clear strategies for subsequent application stages.',
    },
    {
      step: 'Step 2',
      title: 'Employer and Worker Document Review',
      desc: 'We collect corporate financial filings organizational charts and candidate academic and work records. Foreign degree evaluations and employment experience letters undergo rigorous legal pre-filing audits. Our document reviews eliminate record discrepancies before submitting formal prevailing wage request applications.',
    },
    {
      step: 'Step 3',
      title: 'PERM and Labor Certification Strategy',
      desc: 'We prepare precise job descriptions and obtain official prevailing wage determinations from labor. We execute mandatory recruitment advertising campaigns across designated print and electronic platforms. We assist employers in evaluating candidate resumes to document lawful job rejection justifications. We submit Form ETA 9089 applications electronically after completing required mandatory recruitment quiet periods.',
    },
    {
      step: 'Step 4',
      title: 'I 140 Petition Preparation and Filing',
      desc: 'After labor certification approval, we prepare Form I 140 immigrant worker petitions. We compile comprehensive financial evidence packages to demonstrate employer ability to pay offered prevailing wages. We attach optional premium processing requests to secure expedited fifteen day government adjudication decisions.',
    },
    {
      step: 'Step 5',
      title: 'Priority Date and Visa Bulletin Monitoring',
      desc: 'We continuously monitor monthly State Department Visa Bulletin movements for priority date currency. We provide timely updates on upcoming filing windows for status adjustment applications. Our strategic status planning ensures foreign workers maintain lawful nonimmigrant presence while waiting.',
    },
    {
      step: 'Step 6',
      title: 'Adjustment of Status or Consular Processing',
      desc: 'When priority dates become current, we prepare Form I 485 adjustment or consular forms. Domestic applicants submit interim work authorization and advance parole travel document requests simultaneously. Overseas applicants complete National Visa Center processing and prepare for embassy visa interviews.',
    },
    {
      step: 'Step 7',
      title: 'RFE, Audit or Interview Support',
      desc: 'We prepare thorough responses to government evidence requests and labor audit notices. Our mock interview sessions equip foreign worker candidates for domestic and overseas visa reviews. We attend domestic status adjustment interviews with clients at local field offices. Our dedicated advocacy resolves administrative queries. We ensure the eligibility of foreign candidates is firmly protected.',
    },
    {
      step: 'Step 8',
      title: 'Final Green Card Processing',
      desc: 'After final interview approval, federal authorities issue official lawful permanent resident cards. We verify card accuracy, confirming listed resident details and statutory approval categories. Foreign candidates transition into lawful permanent resident status with full work authorization rights. We provide post approval guidance on green card maintenance and future citizenship pathways.',
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {steps.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
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
      </div>
    </section>
  );
};

export default ProvenProcessSection;
