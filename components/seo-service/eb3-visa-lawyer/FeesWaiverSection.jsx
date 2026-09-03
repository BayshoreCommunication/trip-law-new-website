'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const FeesWaiverSection = ({
  tagline = 'USCIS & DOL FEES',
  title = 'EB3 Visa Filing Fees and USCIS Costs',
  description = 'Government fees are set by federal law and can change without notice. Official USCIS or Department of State rates at filing always take precedence.',
  fees = [
    {
      title: 'PERM Prevailing Wage & Recruitment Costs',
      desc: 'DOL does not charge filing fees for PERM applications, but employers must cover mandatory advertising and recruitment expenses.',
    },
    {
      title: 'Form I-140 Immigrant Petition Base Fee',
      desc: 'The standard USCIS filing fee for Form I-140 is $715 (plus applicable Asylum Program Fee depending on employer size).',
    },
    {
      title: 'Form I-907 Premium Processing Fee',
      desc: 'Optional USCIS premium processing fee is $2,965 for 15-business-day Form I-140 adjudication.',
    },
    {
      title: 'Form I-485 Adjustment of Status Fee',
      desc: 'Form I-485 filing fee for applicants aged 14 and older is $1,440 (includes biometrics).',
    },
    {
      title: 'Consular Immigrant Visa & NVC Fees',
      desc: 'Department of State immigrant visa application processing fee is $345 per applicant plus $235 USCIS Immigrant Fee.',
    },
  ],
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#F8FAFC] text-slate-800 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <span className="text-red-700 font-bold text-xs sm:text-sm tracking-widest uppercase mb-3">
            {tagline}
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1829] tracking-tight leading-[1.2] mb-4 ${bitter.className}`}>
            {title}
          </h2>
          <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fees.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-red-700/10 border border-red-700/30 flex items-center justify-center text-red-700 font-bold mb-4">
                  $
                </div>
                <h3 className={`text-lg font-bold text-[#0B1829] mb-3 ${bitter.className}`}>
                  {item.title}
                </h3>
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

export default FeesWaiverSection;
