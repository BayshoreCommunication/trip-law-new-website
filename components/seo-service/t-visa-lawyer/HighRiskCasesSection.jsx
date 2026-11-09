'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultRiskCases = [
  {
    title: 'Cases With Limited Records or Difficult to Corroborate Evidence',
    desc: 'Traffickers routinely confiscate phones, passports and wages to leave no paper trail. We build your case through highly detailed personal statements. We collect declarations from your friends, family or counselors. Attorney Hardam uses expert psychological evaluations to prove trauma you survived.',
  },
  {
    title: 'Cases Without Form I 914 Supplement B or an Active Criminal Investigation',
    desc: 'Sometimes you do not need a police report to win a T visa. Many victims are too afraid to call the police. Sometimes, law enforcement refuses to sign Form I 914 Supplement B certification. Attorney Hardam Tripathi helps you bypass this barrier. Our firm routinely secures approvals for clients without any police signatures or active investigations. We previously handled cases where local police refused to sign certification. It\'s because the statute of limitations on crime had passed. Then we create declarations showing our client’s good faith attempts to cooperate. We submitted alternative credible evidence and secured visa approval directly from USCIS.',
  },
  {
    title: 'Prior Removal Orders and Ongoing Immigration Court Proceedings',
    desc: 'If you are facing deportation, we step in immediately. Our legal team has a proven track record of stopping deportations even hours. For instance, we took over a case for a client who already had a final order of removal and was in immigration detention. Attorney Hardam filed an emergency motion with Executive Office for Immigration Review (EOIR) judges. We stopped deportation and got the client released from custody. Then we successfully terminate the court case permanently.',
  },
  {
    title: 'Criminal History, Inadmissibility Issues and Waiver Challenges',
    desc: 'Traffickers often force victims to commit crimes or break immigration laws. You might have a criminal record or prior unlawful entries because of your trafficker. We do not let our criminal record scare us away. Attorney Hardam prepares strong I 192 inadmissibility waivers. We assert your past issues relate directly to your trafficking experience. Our firm fights to clear your path to legal status.',
  },
  {
    title: 'Previous T Visa Denials and Adverse USCIS Decisions',
    desc: 'A denial from USCIS is not the end of the road. We review your past denial to find exactly where the previous application failed. Attorney Hardam Tripathi strategizes your entire case. We gather stronger evidence and write aggressive legal briefs to answer USCIS objections. We file motions to reopen or appeal bad decisions. Our team does not give up when the government says no.',
  },
  {
    title: 'Complicated Derivative Family Applications and Cases Involving Minors',
    desc: 'Human trafficking destroys families and minor victims need special care. We fast track T visa applications for children because law protects them from harsh cooperation rules. Attorney Hardam also helps you bring your spouse, children or parents to safety. We navigate complex age out rules so your kids do not lose their chance at a visa. Our goal is to reunite your family safely in the United States.',
  },
];

const HighRiskCasesSection = ({
  badgeText = 'COMPLEX CASES & LEGAL BARRIERS',
  title = 'Complex T Visa Cases and Legal Barriers We Handle',
  description = 'Difficult cases often require legal strategy tailored to facts and procedural history. Over years, we have guided clients through severe legal hurdles.',
  riskCases = defaultRiskCases,
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

