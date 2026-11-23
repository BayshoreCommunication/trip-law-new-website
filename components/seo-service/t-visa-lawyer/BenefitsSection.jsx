'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const benefits = [
  {
    title: 'Duration and Conditions of Nonimmigrant Status',
    renderDesc: () => (
      <span>
        Your T visa is good for four years. This status gives you legal protection to stay in the United States. You must follow all U.S. laws during this time. Attorney Hardam Tripathi ensures you maintain your status safely. In rare cases, you can extend four years if federal law enforcement asks for your help. We guide you through every rule to keep your status secure.
      </span>
    ),
  },
  {
    title: 'Employment Authorization and Work Permit Eligibility',
    renderDesc: () => (
      <span>
        Winning your T visa means you can legally work in the United States. USCIS automatically grants you an Employment Authorization Document (EAD) when they approve your case. You do not have to pay extra fees or wait for a separate application. Our firm helps you get your physical card quickly. This work permit lets you apply for a Social Security number and get a good job. We clear the path so you can support yourself and your family.
      </span>
    ),
  },
  {
    title: 'Derivative T Visa Status for Qualifying Family Members',
    renderDesc: () => (
      <span>
        You do not have to leave your loved ones behind. Attorney Hardam helps you bring your family to safety in the United States. If you are over 21, you can apply for your spouse and children. If you are under 21, you can also apply for your parents and unmarried siblings. We file derivative applications to protect your family from danger back home. Our goal is to reunite your family here legally.
      </span>
    ),
  },
  {
    title: 'Eligibility for Lawful Permanent Residence',
    renderDesc: () => (
      <span>
        A T visa is a direct path to a Green Card. You can apply for Lawful Permanent Residence after three years of having your T visa. In some cases, you can apply even sooner if the investigation against your trafficker is complete. We track your timeline. We prepare your green card paperwork to secure your permanent future in the United States. You can even consult with attorney Hardam as your{' '}
        <Link
          href="/immigration-lawyer-for-citizenship-lakeland"
          className="text-red-400 hover:text-red-300 underline decoration-red-400/50 font-medium"
        >
          immigration lawyer for citizenship
        </Link>, the final step.
      </span>
    ),
  },
  {
    title: 'Applicable Benefits and Survivor Support Services',
    renderDesc: () => (
      <span>
        T visa holders qualify for public benefits just like refugees. You can get help with housing, food assistance through SNAP and medical care through Medicaid. Our office connects you with local organizations offering free counseling and job training. These services help you rebuild your life in a safe environment. We stand by you long after your visa gets approved.
      </span>
    ),
  },
];

const BenefitsSection = () => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#030914] text-white overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.2] mb-4 ${bitter.className}`}>
            Benefits and Immigration Options After Approval
          </h2>
          <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            When your T nonimmigrant visa is approved, you will have some benefits for yourself and your family.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-[#091424]/90 border border-slate-700/60 hover:border-red-700/60 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-red-700/20 border border-red-700/40 flex items-center justify-center text-red-500 font-bold mb-4">
                  ✓
                </div>
                <h3 className={`text-xl font-bold text-white mb-3 ${bitter.className}`}>
                  {item.title}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {item.renderDesc()}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
