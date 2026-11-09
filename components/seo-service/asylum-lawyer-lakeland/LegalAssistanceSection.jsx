'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultStages = [
  {
    num: '1',
    title: 'Initial Consultation & Case Assessment',
    desc: 'Your first consultation revolves around facts. We ask what harm you suffered, when it happened and who carried it out. We also ask your enter time and way to the United States. Bring passports, travel documents, police reports and any messages showing threats. Those papers show us the protected ground behind your claim. You leave with a clear picture of your options.',
  },
  {
    num: '2',
    title: 'Immigration History & Eligibility Review',
    desc: 'We pull your full immigration history next. This covers every entry, visa, parole, prior application and removal order. A prior order changes the strategy and it can still leave room for relief. We also count the one year filing deadline from your last arrival. If an exception applies, we document it right away.',
  },
  {
    num: '3',
    title: 'Personal Declaration and Supporting Evidence Preparation',
    desc: 'We help complete your personal declaration for asylum in your own words. It is compared to your written or oral testimony given later. All details have to match. Supporting evidence can include police reports, doctor’s notes, witness statements and even photographs of any injuries suffered. State Department human rights country reports for your homeland can also be included. We also show you how to explain the absence of any required documents.',
  },
  {
    num: '4',
    title: 'Form I 589 Preparation & Filing',
    desc: 'We complete the application for Asylum and Withholding of Removal (Form I 589) in full detail. Each section is completed in full and we carefully check every date that is included in the application and corresponding evidence. In Affirmative cases, they are filed with USCIS. In Defensive cases, it’s filed by the immigration judge after issuance of the notice to appear (NTA).',
  },
  {
    num: '5',
    title: 'Asylum Interview & Immigration Court Preparation',
    desc: 'Affirmative applicants usually face an asylum interview with a USCIS officer. We run practice sessions. We review your declaration line by line to check your answers match with information in the form. Defensive applicants appear in front of the immigration court, which EOIR oversees. Cases in Central Florida often go before the Orlando Immigration Court. We prepare you for the master calendar hearing and the individual hearing.',
  },
  {
    num: '6',
    title: 'Case Follow Up and Responses to Agency Notices',
    desc: 'After you file your case, USCIS will send you a variety of notices including receipt notices, requests for additional evidence and interview notices – each with a deadline. We keep a calendar to make sure we respond to all of them on time. If USCIS or the immigration judge denies your claim, we will go through the denial with you in detail and discuss whether you have an appeal or whether you may be eligible for protection through withholding of removal or the Convention Against Torture (CAT).',
  },
];

const LegalAssistanceSection = ({
  tagline = 'CASE STAGES & ADVOCACY',
  title = 'How Our Asylum Lawyer Helps With Your Case?',
  description = 'Your asylum case moves through several stages. Each one has its own forms and deadlines. Clients from Lakeland, Polk County and across Central Florida come to us at different points. We start by learning what happened to you. Then we map every step ahead.',
  stages = defaultStages,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#0B1829] text-white overflow-hidden">
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

        {/* 6 Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {stages.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-[#061224] border border-slate-700/60 hover:border-red-700/60 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-red-700/20 border border-red-700/40 flex items-center justify-center text-red-500 font-bold mb-4">
                  0{item.num}
                </div>
                <h3 className={`text-xl font-bold text-white mb-3 ${bitter.className}`}>
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

export default LegalAssistanceSection;

