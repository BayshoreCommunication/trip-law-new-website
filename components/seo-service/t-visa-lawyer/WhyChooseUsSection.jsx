'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultFeatures = [
  {
    title: 'Experience With Humanitarian Immigration Cases',
    desc: (
      <>
        Attorney Hardam Tripathi is a{' '}
        <Link
          href="/immigration-lawyer-lakeland-fl"
          className="text-red-400 hover:text-red-300 underline font-medium"
        >
          licensed U.S. immigration attorney
        </Link>
        . He is an active member of American Immigration Lawyers Association (AILA). He has years of hands-on experience winning complex{' '}
        <Link
          href="/t-visa-lawyer"
          className="text-red-400 hover:text-red-300 underline font-medium"
        >
          T visa cases
        </Link>
        . Our legal team carefully assesses your situation to build the strongest possible application.
      </>
    ),
  },
  {
    title: 'Confidential and Respectful Communication',
    desc: 'Many survivors worry about traffickers or abusive employers monitoring them. You can speak to us freely without fear of judgment. We protect your privacy and treat your concerns with care.',
  },
  {
    title: 'Help Preparing Your T Visa Application',
    desc: 'Your application requires Form I 914, personal statement and strong supporting documents. We help organize your evidence and review every piece of paperwork. Our team fixes gaps or inconsistencies.',
  },
  {
    title: 'Individualized Legal Strategy',
    desc: 'We build your case around your unique facts. Our team finds creative evidence pathways to prove severe human trafficking. Attorney Hardam Tripathi designs customized strategies to win your case without risking your safety.',
  },
  {
    title: 'Guidance Based on Your Circumstances',
    desc: "Every survivor's experience is different. We do not use generic approaches. We review your specific situation to identify your eligibility and spot potential challenges. Then we map out your best immigration options.",
  },
  {
    title: 'Document Delivery Arrangements',
    desc: 'We handle your legal mail with strict safety protocols. No one will be able to tamper with your records. Our team holds your physical documents securely at our office. Or deliver them only to the safe recipient you verify.',
  },
  {
    title: 'Support Throughout Application Process',
    desc: 'You will never have to guess what comes next. We answer your questions about evidence and handle tough requests from USCIS. We explain every stage of the journey. We keep you informed from the moment we file until the final decision.',
  },
  {
    title: 'Transparent Legal Fees',
    desc: 'We explain all costs upfront. Our transparent fee structure ensures you never face unexpected bills. We don’t charge any hidden fees during your representation.',
  },
];

const WhyChooseUsSection = ({
  tagline = 'WHY CHOOSE TRIP LAW',
  title = 'Why Choose Hardam Tripathi as Your T Visa Lawyer',
  description = 'At Trip Law, we understand how survivors of trafficking face extraordinary challenges. Our attorney approaches every T Visa case with a strong understanding of rules and regulations.',
  features = defaultFeatures,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#061224] text-white overflow-hidden">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="bg-[#0B1829] border border-slate-700/60 hover:border-red-700/60 rounded-2xl p-6 sm:p-7 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-700/20 border border-red-700/40 flex items-center justify-center text-red-500 font-bold text-lg mb-5">
                  ★
                </div>
                <h3 className={`text-lg font-bold text-white mb-3 ${bitter.className}`}>
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

export default WhyChooseUsSection;

