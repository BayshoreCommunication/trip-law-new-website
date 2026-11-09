'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultReasons = [
  {
    title: 'Gaps or Inconsistencies in Personal Declaration',
    desc: 'Material contradictions, unexplained timeline differences or missing facts can cause trouble. These issues may lead USCIS to question your evidence and doubt your story. Severe trauma often affects your memory and recall over time. Because of this, you should prepare your statement with immense care. You must never feel pressure to provide artificial certainty about dates or events you do not fully remember.',
  },
  {
    title: 'Avoidable Administrative Errors',
    desc: 'Simple mistakes can completely derail your paperwork. Missing signatures, incomplete text fields or outdated form editions will cause immediate rejections. Inconsistencies between different forms also create massive delays. You must perform a rigorous final filing review on your package before submission. Checking every line ensures you fix these small administrative issues.',
  },
  {
    title: 'Missed USCIS Deadlines',
    desc: 'Late responses or missed procedural deadlines can ruin your available options. You might lose your chance to fix your status if you wait too long. You should always keep an exact record of your filing dates and official receipt notices. Track every single response deadline carefully. Staying ahead of these dates protects your application and keeps your case moving forward.',
  },
  {
    title: 'Failure to Respond Adequately to USCIS Notices',
    desc: 'Submitting responses without answering specific questions raised by USCIS will hurt your case. It leaves your key eligibility issues completely unresolved in the eyes of the government. An effective response must address every single request directly. You need to provide clear, relevant information and back it up with strong supporting evidence.',
  },
  {
    title: 'Inadequate Evidence of Physical Presence or Hardship',
    desc: 'Your application can fail if you do not connect your current U.S. presence directly to trafficking. You must also prove your extreme hardship if the government deports you. If your evidence misses these legal standards, USCIS will reject your case. You need solid proof to show exactly how trafficking still affects your life in the United States today.',
  },
  {
    title: 'Background Checks and Administrative Processing Delays',
    desc: 'Background checks, missing records and government backlogs can delay your waiting time. These administrative steps often add months or years to process. But long delays do not mean something is wrong with your eligibility. USCIS screens everyone thoroughly. So you just have to wait for the agency to finish its security checks.',
  },
];

const DenialReasonsSection = ({
  badgeText = 'T-VISA RISKS & COMMON PITFALLS',
  title = 'Why T Visa Applications Get Denied or Rejected',
  description = 'We have some cases where applicants get denied after self trying to apply for humanitarian visas. It usually happens when you hesitate to hire an immigration lawyer in the first phase. Even some of you might get confused by being rejected and being denied. Both differ based on eligibility. Having lawyers can help applicants identify appropriate responses.',
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/denial-reasons-bg.png',
  reasons = defaultReasons,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#F8FAFC] text-slate-800 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src={bgImage}
          alt="Denial Reasons Background"
          fill
          sizes="100vw"
          quality={90}
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-slate-50/75" />
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
            We have some cases where applicants get denied after self trying to apply for humanitarian visas. It usually happens when you hesitate to hire an{' '}
            <Link href="/t-visa-lawyer" className="text-red-700 font-semibold hover:underline">
              immigration lawyer
            </Link>{' '}
            in the first phase. Even some of you might get confused by being rejected and being denied. Both differ based on eligibility. Having lawyers can help applicants identify appropriate responses.
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
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-red-700/10 text-red-700 flex items-center justify-center font-bold text-base mb-5">
                  0{idx + 1}
                </div>
                <h3 className={`text-base sm:text-lg font-bold text-[#0B1829] mb-3 leading-snug ${bitter.className}`}>
                  {item.title}
                </h3>
                <div className="h-[2px] w-12 bg-red-700 rounded-full mb-4" />
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

