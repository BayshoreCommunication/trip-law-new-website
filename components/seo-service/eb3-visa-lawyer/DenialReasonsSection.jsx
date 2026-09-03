'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const DenialReasonsSection = ({
  badgeText = 'EB-3 RISKS & DELAYS',
  title = 'Common Reason EB3 Visa Applicants Get Denied or Delayed Without Immigration Lawyer',
  description = 'Most EB3 problems trace back to preventable mistakes made during filing. Here are errors we see most often in cases when they arrive at our office after a denial.',
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/denial-reasons-bg.png',
  reasons = [
    {
      title: 'PERM Recruitment Errors',
      desc: 'Unrepresented employers frequently fail to execute recruitment steps within strict mandatory timeframes. Placing job advertisements in nonqualifying publications triggers mandatory labor certification application rejections. Recruitment notices missing required wage ranges or job details invalidate entire advertising campaigns. Professional legal preparation ensures recruitment campaigns satisfy every Department of Labor mandate.',
    },
    {
      title: 'Failure to Meet DOL Requirements',
      desc: 'Labor certification filings require exact compliance with statutory regulations and internal guidelines. Failing to post notice of filing internally for ten consecutive business days creates lethal defects. Submitting applications prior to mandatory recruitment quiet periods causes immediate administrative rejections. Structured filing schedules eliminate timing errors throughout complex labor department testing phases.',
    },
    {
      title: 'Inconsistent Job Requirements or Worker Qualifications',
      desc: 'Listing requirements exceeding candidate foreign qualifications triggers swift labor certification application denials. Discrepancies between wage requests and actual position descriptions provoke mandatory labor audits. Inconsistent skill descriptions between resumes and labor forms undermine alien worker eligibility. Comprehensive document reviews align labor position requirements directly with foreign worker credentials.',
    },
    {
      title: 'Employer Neglecting Qualified U.S. Applicants',
      desc: 'Rejecting qualified domestic candidates without lawful job related justifications violates federal labor laws. Labor regulations require contacting applicants timely and documenting legitimate job rejection rationale. Superficial evaluation of domestic candidate resumes triggers severe labor audits and enforcement actions. Legal guidance protects employers by establishing objective candidate evaluation standards during recruitment.',
    },
    {
      title: 'Missing or Inconsistent Supporting Documents',
      desc: 'Omitting required foreign diploma translations or experience verification letters causes immediate petition delays. Inconsistent dates across candidate employment history documents raise major credibility concerns. Failing to provide complete corporate financial records undermines employer capacity proof requirements. Meticulous evidence collection protocols ensure filings contain complete, verified supporting document sets.',
    },
    {
      title: 'I 140 Evidence Problems',
      desc: 'Inadequate proof of corporate paying ability represents a primary cause for petition denials. Submitting unverified foreign degree evaluations fails to establish required candidate professional standing. Failure to prove worker qualifications prior to labor priority dates brings swift rejections. Attorneys assemble comprehensive financial and credential evidentiary packages guaranteeing full regulatory compliance.',
    },
    {
      title: 'Errors During Adjustment of Status or Consular Processing',
      desc: 'Filing incorrect government fee amounts results in immediate application package rejection delays. Incomplete medical forms or omitted background declarations trigger lengthy government evidence requests. Consular interview miscommunications lead to administrative processing holds under federal visa rules. Thorough interview preparation and document reviews prevent avoidable errors at final processing.',
    },
  ],
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#F8FAFC] text-slate-800 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src={bgImage}
          alt="Denial Reasons Background"
          fill
          quality={90}
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-slate-50/80" />
      </div>

      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <span className="text-red-700 font-bold text-xs sm:text-sm tracking-widest uppercase mb-3">
            {badgeText}
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1829] tracking-tight leading-[1.2] mb-4 ${bitter.className}`}>
            {title}
          </h2>
          <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-full bg-red-100 text-red-700 font-bold flex items-center justify-center text-sm flex-shrink-0">
                    ✕
                  </div>
                  <h3 className={`text-base sm:text-lg font-bold text-[#0B1829] leading-snug ${bitter.className}`}>
                    {item.title}
                  </h3>
                </div>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
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

export default DenialReasonsSection;
