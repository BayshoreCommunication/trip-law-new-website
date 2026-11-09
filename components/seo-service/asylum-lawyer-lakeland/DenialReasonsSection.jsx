'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultReasons = [
  {
    title: 'Incomplete Forms',
    desc: 'The USCIS will also reject the Form I 589 if it is missing a signature, a question or a sure section. This rejection happens at the intake part of the procedure without review by the officer. The form is returned to the claimant, essentially at a loss of time, but the date filed remains intact if it is corrected immediately. All fields are double checked before case submission.',
  },
  {
    title: 'Filing Errors',
    desc: 'File upsets not only include empty fields. Incorrect filing fees, the absence of a paper or misplaced papers is all a challenge for handling a case. An improperly filled out address will result in failure to receive a critical notification in time. While these flaws do not necessarily cause a rejection, they can cause delays which proves expensive when it is a matter of hours before the due date.',
  },
  {
    title: 'Inconsistent Statements',
    desc: "Contradictions lead to denial on the merits. An officer or judge checks consistency between answers on the form, the personal declaration and the live testimony. Inconsistencies like unmatching dates, inconsistent details, factual contradictions. All will call an individual's credibility into question. Small lapses in memory are not enough to ruin a case, but major inconsistencies usually are. Our team reads over your statement for consistency.",
  },
  {
    title: 'Missing Evidence',
    desc: 'Evidence substantiates a believable allegation. If reasonably obtainable evidence has been withheld, an officer can dismiss a case based solely on testimony. Cases can hinge on identity documents, medical evidence and country conditions documentation. When a document is simply not available, a declaration can fill the evidentiary gap. Insufficient evidence is noted so that it can be strengthened.',
  },
  {
    title: 'Eligibility Problems',
    desc: 'Certain cases fail on legal grounds. Harm tied to an individual or personal conflict rather than a protected ground does not meet the standard for asylum. Concern over general civil unrest or crime not tied to a racial, religious, national, political or social group is also insufficient. This connection is determined during the first interview before any paperwork is filed.',
  },
  {
    title: 'Legal Restrictions',
    desc: 'Some bars apply regardless of your fear. A solid settlement in a third country, a serious criminal conviction or persecution of others can make your fear irrelevant. Missing the one year filing deadline without a valid exception creates a bar, too. These bars are in the law, so no lawyer can get around a bar that does not fit your facts. We explore your entire history from the beginning.',
  },
];

const DenialReasonsSection = ({
  badgeText = 'REJECTION & DENIAL RISKS',
  title = 'Why Asylum Applications Get Rejected, Denied or Referred to Court',
  description = 'Rejection means your case has been sent back to you by USCIS without processing. A denial means the case has been looked at by an officer or a judge and has been denied for merit. A referral means USCIS has denied your case and will refer your case for an immigration court hearing. Which steps to take next depend on the outcome and should be planned around the risk in your case.',
  reasons = defaultReasons,
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/denial-reasons-bg.png',
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#F8FAFC] text-slate-800 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src={bgImage}
          alt="Asylum Denial and Rejection Reasons Background"
          fill
          sizes="100vw"
          quality={90}
          className="object-cover object-center opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC]/90 via-[#F8FAFC]/95 to-[#F8FAFC]" />
      </div>

      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        {/* Section Header */}
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

        {/* 6 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-red-700/10 border border-red-700/30 flex items-center justify-center text-red-700 font-bold mb-4">
                  !
                </div>
                <h3 className={`text-xl font-bold text-[#0B1829] mb-3 ${bitter.className}`}>
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Protection Note */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-md text-center max-w-4xl mx-auto">
          <p className="text-slate-700 text-base leading-relaxed">
            Prevent critical errors before filing. Our experienced{' '}
            <Link href="/asylum-lawyer-lakeland" className="text-red-700 font-semibold hover:underline">
              asylum lawyer in Lakeland
            </Link>{' '}
            rigorously cross-checks every date, declaration statement, and piece of country evidence to protect your case.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DenialReasonsSection;

