'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultDenialReasons = [
  {
    title: 'Missing 10-Day DMV Window',
    description:
      'Florida gives most drivers only ten days after a DUI arrest to challenge the administrative license suspension. Missing that deadline usually allows suspension to take effect without an administrative hearing. Many drivers focus only on the criminal charge while overlooking the separate licensing process.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Flawed Field Sobriety Tests (FSTs)',
    description:
      'Field sobriety exercises depend upon proper instructions, standardized administration and accurate scoring. Officers must follow recognized testing procedures throughout roadside investigation. Health issues, tiredness, physical challenges, weather conditions, bumpy roads and inadequate lighting can affect driving performance. DUI lawyer investigate body camera footage and officer notes to find any reliability issues.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    title: 'Unchallenged Breath or Blood Evidence',
    description:
      'Chemical testing carries substantial weight during many Florida DUI prosecutions. That evidence still depends upon proper collection, maintenance, calibration and documented testing procedures. Breath testing records, laboratory reports, maintenance logs and chain of custody documents deserve careful review. Identifying weaknesses early may affect how much weight the court gives scientific evidence.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Ignoring Collateral Consequences',
    description:
      'DUI conviction often creates severe consequences than fines or driver\'s license restrictions. Employment opportunities, professional careers, immigration matters and insurance premiums may impacted. Commercial drivers may lose valuable driving privileges. Healthcare professionals, teachers, nurses, pilots and other licensed workers may face additional reporting requirements. Non citizens may also encounter immigration concerns depending upon their complete legal circumstances and criminal history.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Overlooking Local Court Procedures',
    description:
      'Every Florida circuit follows its own scheduling practices, filing requirements and courtroom expectations. Polk County cases move through established procedures that influence hearing preparation and case management. Understanding local practices helps avoid unnecessary delays while keeping required filings and deadlines organized. Careful preparation also supports smoother communication throughout the court process.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V10M5 21V10M3 10l9-7 9 7M4 21h16M9 21v-7a1 1 0 011-1h4a1 1 0 011 1v7" />
      </svg>
    ),
  },
  {
    title: 'Harsh Mandatory Minimums',
    description:
      'Florida law requires mandatory penalties for many DUI convictions. It becomes more serious for repeat offenses and aggravating circumstances. In particular DUI, high blood alcohol levels, significant injuries and minor passengers could lead to mandatory sentencing.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Plea Settlement Without Adjudication Withholding',
    description:
      'Every plea offer deserves careful evaluation. Some Florida jurisdictions offer programs that may reduce qualifying charges under specific circumstances. Florida does not allow judges to withhold adjudication in the case of DUI offenses. This makes conviction consequences especially lasting. Prosecutors may negotiate offense reductions based on evidence and local practices.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
];

const DenialReasonsSection = ({
  badgeText = 'COMMON DUI DEFENSE ERRORS',
  title = 'Common Reasons Defendants Get Harsher Outcomes Without a Lakeland DUI Defense Lawyer',
  description = 'DUI cases often worsen as early chances vanish before evidence review and minor procedural errors can lead to long term consequences. DUI defense lawyer identifies deadlines, examines evidence and addresses legal issues.',
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/denial-reasons-bg.png',
  reasons = defaultDenialReasons,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#091424] text-white overflow-hidden">
      {bgImage && (
        <div className="absolute inset-0 pointer-events-none z-0">
          <Image
            src={bgImage}
            alt="Lakeland DUI Defense Errors Background"
            fill
            quality={90}
            priority
            className="object-cover object-center opacity-25 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#091424]/95 via-[#091424]/90 to-[#091424]/95" />
        </div>
      )}

      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col items-center text-center mb-14 sm:mb-16"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-red-500 font-bold text-xs sm:text-sm tracking-widest uppercase">
              {badgeText}
            </span>
            <div className="h-[2px] w-12 bg-red-700 rounded-full" />
          </div>

          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-4xl leading-[1.18] mb-4 ${bitter.className}`}>
            {title}
          </h2>

          <p className="text-slate-300 text-base sm:text-lg font-normal max-w-3xl leading-relaxed">
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: 'easeOut' }}
              className="bg-white/5 backdrop-blur-md border border-slate-700/80 rounded-3xl p-6 sm:p-8 flex flex-col items-start text-left hover:border-red-500/50 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-full bg-red-700/20 border border-red-500/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              <h3 className={`text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300 ${bitter.className}`}>
                {item.title}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DenialReasonsSection;
