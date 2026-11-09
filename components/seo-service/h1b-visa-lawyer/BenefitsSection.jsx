'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultBenefits = [
  {
    title: 'Visa Stamping and Port of Entry',
    renderDesc: () => (
      <span>
        Workers abroad book a consular interview, bringing the I 797 approval and DS 160 confirmation. Visa validity follows reciprocity rules for your country, so stamps vary in length. Your authorized stay follows the I 797 dates and CBP records admission at the border. Entry is allowed up to ten days before the validity start date.
      </span>
    ),
  },
  {
    title: 'Change of Status Inside the United States',
    renderDesc: () => (
      <span>
        Workers in F1,{' '}
        <Link href="/immigration-lawyer-for-l1-visa" className="text-red-400 font-semibold hover:underline">
          L1 visa
        </Link>{' '}
        or other valid status switch to H1B when USCIS approves. Travel abroad afterward requires a visa stamp before the next U.S. entry.
      </span>
    ),
  },
  {
    title: 'Changing Employers Through Portability',
    renderDesc: () => (
      <span>
        Workers in H1B status can change employers under the AC21 portability rule. The new job can begin once USCIS receives the new employer&apos;s filing. Maintained status and a properly filed petition protect you during the wait.
      </span>
    ),
  },
  {
    title: 'Extensions, the Six Year Limit and Recapture',
    renderDesc: () => (
      <span>
        H1B status runs in increments up to three years, with a six year maximum. Time spent outside the United States can be recaptured and added back. Extensions beyond six years exist when a green card process is underway. Specific PERM and I 140 timing rules apply, so we calendar them early.
      </span>
    ),
  },
  {
    title: 'Dependents on H 4 Status',
    renderDesc: () => (
      <span>
        Spouses and unmarried children under 21 can join the worker in H 4 status. Children can attend school and spouses of some H1B workers qualify for work authorization. Eligibility depends on an approved I 140 or an extension granted under AC21 rules.
      </span>
    ),
  },
  {
    title: 'Path to a Green Card',
    renderDesc: () => (
      <span>
        Your employer can sponsor a green card while you hold H1B status. Most cases run through PERM labor certification, then an I 140, then adjustment of status. Most H1B workers reach permanent residence through{' '}
        <Link href="/eb3-visa-lawyer" className="text-red-400 font-semibold hover:underline">
          EB3 visa
        </Link>
        . If workers{' '}
        <Link href="/eb1-visa-lawyer-florida" className="text-red-400 font-semibold hover:underline">
          qualify for EB1
        </Link>{' '}
        they can skip the labor certification step. Backlogs for workers born in India and China stretch by years. We plan the green card timeline before the first H1B petition goes in.
      </span>
    ),
  },
];

const BenefitsSection = ({
  tagline = 'H-1B STATUS & NEXT STEPS',
  title = 'What to Expect After H1B Approval',
  description = 'Approval triggers a short list of decisions about travel, start dates and long term plans.',
  benefits = defaultBenefits,
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-[#091424]/90 border border-slate-700/60 hover:border-red-700/60 rounded-2xl p-6 sm:p-7 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-red-700/20 border border-red-700/40 flex items-center justify-center text-red-500 font-bold mb-4">
                  ✓
                </div>
                <h3 className={`text-lg font-bold text-white mb-3 ${bitter.className}`}>
                  {item.title}
                </h3>
                <div className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {item.renderDesc()}
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
