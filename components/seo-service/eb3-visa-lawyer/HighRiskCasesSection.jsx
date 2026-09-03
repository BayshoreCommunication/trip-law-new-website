'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const HighRiskCasesSection = ({
  badgeText = 'COMPLEX & HIGH-RISK CASES',
  title = 'Which Complex and High Risk Cases Can Affect EB3 Work Visa Applications',
  description = 'Several factors can complicate an EB 3 case. We guide our clients and manage any high risk case early to build resoled work visa case.',
  riskCases = [
    {
      title: 'PERM Labor Certification Audits',
      desc: 'Random or targeted labor audits require employers to produce comprehensive recruitment documentation files. Audits halt application processing while labor officers analyze proof of domestic candidate recruitment. Failing to submit audit responses within strict deadlines results in immediate filing rejection. Legal oversight ensures audit files meet stringent federal standards prior to initial submission.',
    },
    {
      title: 'Incomplete Recruitment Records',
      desc: 'Unrepresented employers frequently fail to execute recruitment steps within strict mandatory timeframes. Placing job advertisements in nonqualifying publications triggers mandatory labor certification application rejections. Recruitment notices missing required wage ranges or job details invalidate entire advertising campaigns. Professional legal preparation ensures recruitment campaigns satisfy every Department of Labor mandate.',
    },
    {
      title: 'Employer Financial Instability',
      desc: 'Inadequate proof of corporate paying ability represents a primary cause for petition denials. Submitting unverified foreign degree evaluations fails to establish required candidate professional standing. Failure to prove worker qualifications prior to labor priority dates brings swift rejections. Attorneys assemble comprehensive financial and credential evidentiary packages guaranteeing full regulatory compliance.',
    },
    {
      title: 'Priority Date Retrogression',
      desc: 'Unexpected priority date movements halt pending green card adjudications for extended processing periods. Applicants failing to file during temporary visa availability windows lose valuable processing time. Misunderstanding visa bulletin tables leads to premature or untimely status adjustment submissions. Strategic priority date tracking optimizes submission timing during favorable visa availability periods.',
    },
    {
      title: 'Status Violations & Maintenance Issues',
      desc: 'Undisclosed status gaps or unauthorized employment history trigger detailed immigration fraud investigations. Unaddressed prior visa rejections complicate ongoing permanent resident status adjustment processing. Failing to submit required statutory waivers halts processing until legal inadmissibility resolves. Early legal intervention identifies potential complications, establishing effective proactive defense strategies.',
    },
    {
      title: 'U.S. Applicant Rejection Disputes',
      desc: 'Rejecting qualified domestic candidates without lawful job related justifications violates federal labor laws. Labor regulations require contacting applicants timely and documenting legitimate job rejection rationale. Superficial evaluation of domestic candidate resumes triggers severe labor audits and enforcement actions. Legal guidance protects employers by establishing objective candidate evaluation standards during recruitment.',
    },
    {
      title: 'Consular Interview Administrative Processing',
      desc: 'Consular interview miscommunications lead to administrative processing holds under federal visa rules. Thorough interview preparation and document reviews prevent avoidable errors at final processing.',
    },
  ],
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#040B17] text-white overflow-hidden">
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
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {riskCases.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-[#091424]/90 border border-slate-700/60 hover:border-red-700/60 rounded-2xl p-6 sm:p-7 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-red-700/20 border border-red-700/40 flex items-center justify-center text-red-500 font-bold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className={`text-base sm:text-lg font-bold text-white leading-snug ${bitter.className}`}>
                  {item.title}
                </h3>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighRiskCasesSection;
