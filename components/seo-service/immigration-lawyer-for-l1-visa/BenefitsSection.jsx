'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const BenefitsSection = ({
  tagline = 'L-1 VISA BENEFITS & RIGHTS',
  title = 'What Happens After Your L1 Visa Is Approved',
  description = 'Once your L1 visa is approved, there are several next steps and rights to understand.',
  benefits = [
    {
      title: 'Bringing Family on L2 Status',
      desc: "Spouses and unmarried children under twenty one years old qualify for dependent L2 status. L2 dependents receive authorized stays matching the principal L1 visa holder's approved duration. Dependent children can attend primary, secondary or higher educational institutions full time across Florida. We guide families through derivative visa applications to ensure seamless international relocation together.",
    },
    {
      title: 'L2 Spousal Work Permits and SSNs',
      desc: 'L2 spouses enjoy automatic employment authorization incident to status upon entering the U.S. Customs officials issue Form I-94 with an L-2S designation for immediate work eligibility. Spouses do not need to wait for Employment Authorization Documents before accepting employment. We help spouses obtain Social Security Numbers quickly to simplify local hiring procedures.',
    },
    {
      title: 'Renewing and Extending Work Visa',
      desc: 'L1 extensions require demonstrating ongoing business activity and continuous employment compliance in Florida. Established corporate businesses can extend L1A status up to the seven year statutory maximum stay. L1B specialized knowledge holders can extend status for a maximum period of five years. We prepare timely extension filings well before existing I-94 dates to avoid operational lapses.',
    },
    {
      title: 'Moving From L1 to Green Card Through EB-1C',
      desc: 'L1A status offers an excellent transition pathway to permanent residence via EB-1C petitions. The EB-1C immigrant visa category allows qualifying executives to bypass labor certification requirements. Your Florida company can sponsor permanent residency after completing one year of active operations. Our firm designs long term corporate immigration strategies to secure permanent residency for key leaders.',
    },
    {
      title: 'Maintaining Status During Green Card Processing',
      desc: 'L1 nonimmigrants can maintain underlying visa status while their adjustment of status is pending. Because L1 status carries dual intent, pending green cards do not jeopardize visa renewals. We ensure candidates maintain valid nonimmigrant status until green card adjustments are officially granted. Maintaining dual compliance prevents legal status gaps during final green card processing periods.',
    },
    {
      title: 'U.S. Entry and Form I-94 Validity',
      desc: 'Upon arrival at Florida airports, border officers inspect your passport, visa and petition approval. Customs officers issue electronic Form I-94 records establishing your exact legal stay duration. Transferees must review online I-94 portals immediately to verify correct nonimmigrant classification details. Correcting border entry record errors immediately prevents accidental unlawful presence status accrual issues.',
    },
    {
      title: 'Legal Compliance for L1 Extensions and Audits',
      desc: 'Petitioning businesses must adhere strictly to terms approved within their initial USCIS filings. Material corporate changes, address moves or ownership transfers require filing amended Form I-129 petitions. USCIS Fraud Detection officers may conduct unannounced physical workplace site visits at your office. We maintain ongoing compliance records to protect your company during unexpected government site audits.',
    },
  ],
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

export default BenefitsSection;
