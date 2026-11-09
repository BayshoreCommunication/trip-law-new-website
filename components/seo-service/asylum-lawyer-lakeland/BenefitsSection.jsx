'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultBenefits = [
  {
    title: 'Protection From Removal',
    desc: 'This means you will no longer have a deportation case to stop. You cannot be deported to the country where you would be persecuted unless the US government can prove you lied or committed a serious crime in your case.',
  },
  {
    title: 'Immediate Right to Work',
    desc: 'An asylee has work authorization as soon as his or her case is approved by USCIS or a judge. You do not need to apply for an Employment Authorization Document. You may begin working immediately and present a copy of your USCIS approval notice as proof of status.',
  },
  {
    title: 'Unrestricted Social Security Card',
    desc: 'You can request a SS card without the work restrictions included on it. It can help an employer confirm your status directly. It provides access to credit, banking and other services associated with a SSN.',
  },
  {
    title: 'Family Reunification Petitions',
    desc: 'You may be able to bring your spouse and children under age 21 to the United States within two years of your approval. This is done with Form I 730, Refugee/Asylee Relative Petition. Your family may enter the United States after your petition is approved by USCIS.',
  },
  {
    title: 'Refugee Cash Assistance',
    desc: 'Asylees may be able to obtain Refugee Cash Assistance via the refugee services program funded by the state of Florida. Support for those first months after approval provides for your basic needs. Income and family size determine eligibility and we help you find the proper office.',
  },
  {
    title: 'Refugee Medical Assistance',
    desc: 'Refugee Medical Assistance provides health care coverage for asylees not entitled to Medicaid coverage. You will usually only be granted benefits for a period of time after the date of approval. Check with local clinics and state offices in Polk County to find out the latest rules.',
  },
  {
    title: 'Job Training and English Classes',
    desc: 'You may attend job training and English language classes through your state or local refugee program. These classes prepare you for work opportunities in the Florida job market. They may be held at community colleges or nonprofit resettlement agencies.',
  },
  {
    title: 'Refugee Travel Documents',
    desc: 'You can depart from and return to the US without a passport from your home country. Showing the passport of your home country while in the US can create a problem with your asylum. For this reason, we recommend clients obtain this document before traveling abroad.',
  },
  {
    title: 'Permanent Residency Pathway',
    desc: 'One year after receiving your asylum grant, you may pursue your green card. There are other requirements for adjusting your status as an asylee. For example, one year physical presence, continuous asylee status, no firm resettlement and admissibility. We’ll get your Form I 485 ready and collect the current documents needed for your case.',
  },
  {
    title: 'U.S. Citizenship Eligibility',
    desc: (
      <>
        Asylees may be able to apply for citizenship five years after they were granted their green card. The clock for filing begins running from when the green card is approved, not when the initial asylum was granted. If you later qualify for naturalization, our{' '}
        <Link
          href="/immigration-lawyer-for-citizenship-lakeland"
          className="text-red-400 hover:text-red-300 underline font-medium"
        >
          immigration lawyer for citizenship
        </Link>{' '}
        can review your eligibility, residence history, and Form N-400 requirements.
      </>
    ),
  },
];

const BenefitsSection = ({
  tagline = 'POST-APPROVAL RIGHTS & SUPPORT',
  title = 'Benefits After Asylum Approval',
  description = 'If your application is approved, you will have a better life with legal status and support. Here are some of the benefits:',
  benefits = defaultBenefits,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#030914] text-white overflow-hidden">
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

        {/* 10 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-[#091424]/90 border border-slate-700/60 hover:border-red-700/60 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-red-700/20 border border-red-700/40 flex items-center justify-center text-red-500 font-bold mb-4">
                  ✓
                </div>
                <h3 className={`text-xl font-bold text-white mb-3 ${bitter.className}`}>
                  {item.title}
                </h3>
                <div className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {item.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

