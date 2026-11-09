'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultCases = [
  {
    title: 'Missed Filing Deadlines',
    desc: 'Many applicants fail the one year rule at no fault of their own. We look at when you arrived in the country, where you have been in your life. Also any potential event related to the changed circumstance or extraordinary circumstances. It requires documentation which the committee puts on the record and uses as grounds to make the request on your behalf.',
  },
  {
    title: 'Pending Removal Proceedings',
    desc: 'Once the Department of Homeland Security files a Notice to Appear in the case, the claim for asylum becomes a defensive application. Our attorney represents you in the master calendar hearing and in the individual hearing. Our defense of deportation includes bond hearings, so those clients in detention may develop their case outside of detention once bonds are set.',
  },
  {
    title: 'Complicated Immigration Histories',
    desc: 'Earlier overstay of visa, previous order of removal or violations of lawful status may create difficulties for an asylum application. An earlier order does not necessarily obviate the possibility. We carefully examine the entire immigration file, including applications and agency determinations and formulate the case strategy according to what is actually on the record.',
  },
  {
    title: 'Withholding of removal',
    desc: 'Some applicants do not qualify for asylum. There are other forms of protection that may be pursued. Withholding of removal is designed for those who would face an absolute risk of persecution and the standard is higher than for asylum. Protection under the Convention Against Torture is necessary where the applicant would face the risk of torture by or at the consent of the government. These alternatives are considered alongside the asylum claim.',
  },
];

const HighRiskCasesSection = ({
  badgeText = 'COMPLEX CASES & BARRIERS',
  title = 'Complex Asylum Cases and Legal Barriers We Handle',
  description = (
    <>
      Sometimes clients come to us with a problem like a missed deadline, prior denial or a pending removal case. Our{' '}
      <Link href="/asylum-lawyer-lakeland" className="text-red-400 hover:text-red-300 underline font-medium">
        immigration lawyer lakeland
      </Link>{' '}
      handles these complicated cases as well as your typical affirmative filing.
    </>
  ),
  cases = defaultCases,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#040B17] text-white overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <span className="text-red-500 font-bold text-xs sm:text-sm tracking-widest uppercase mb-3">
            {badgeText}
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.2] mb-4 ${bitter.className}`}>
            {title}
          </h2>
          <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />
          <div className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {description}
          </div>
        </div>

        {/* 4 Complex Barrier Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {cases.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-[#091424] border border-slate-700/60 hover:border-red-700/60 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-red-700/20 border border-red-700/40 flex items-center justify-center text-red-500 font-bold mb-4">
                  0{idx + 1}
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

export default HighRiskCasesSection;

