'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const DenialReasonsSection = ({
  badgeText = 'EB-2 RISKS & DELAYS',
  title = 'Why EB-2 Green Card Applications Get Denied or Delayed Without an Immigration Lawyer',
  description = 'Some denials happen due to specific problems that an experienced EB-2 attorney would have flagged before the petition ever reached USCIS.',
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/denial-reasons-bg.png',
  reasons = [
    {
      title: 'Incorrect EB-2 Classification Selection',
      desc: "Filing under advanced degrees when your credentials don't really support it. Choosing employer sponsorship when NIW would've skipped PERM entirely. This happens more often than you'd think. Classification should follow from a real review of your qualifications.",
    },
    {
      title: 'Insufficient Education or Experience Evidence',
      desc: "Foreign credentials need formal evaluation. Work experience needs detailed letters and records to back it up. USCIS won't take your word for it based on a resume. Weak documentation here almost always leads to an RFE, and a weak response to that RFE often ends in denial.",
    },
    {
      title: 'Weak Documentation of Exceptional Ability',
      desc: 'Hitting exactly three criteria with the bare minimum evidence in each leaves you exposed. USCIS looks at the whole picture. A strong case spreads evidence across multiple criteria and puts it in context, showing why this applicant genuinely stands apart in the field.',
    },
    {
      title: 'Problems With the PERM Labor Certification',
      desc: 'A skipped recruitment step, or an incorrectly filled ETA-9089 or a recruitment window that doesn\'t match Department of Labor rules. Any of these can mean starting the whole PERM process over, since these applications can\'t simply be amended. Accuracy from day one really does matter here.',
    },
    {
      title: 'Incomplete Form I-140 Supporting Evidence',
      desc: 'Sending in a general professional portfolio without connecting each piece to a specific legal requirement leaves the officer with little to work with. An organized package, built around the actual legal standard, makes approval far more likely and cuts down on RFEs.',
    },
    {
      title: 'National Interest Waiver Evidence Does Not Meet the Legal Standard',
      desc: 'NIW denials often come down to legal structure. Even a genuinely impressive applicant can get denied if the petition doesn\'t define the proposed work or support its national importance with credible sources. It also needs to make a clear legal argument for why the waiver benefits the country.',
    },
    {
      title: 'Priority Date and Visa Availability Problems',
      desc: 'Filing Form I-485 before your priority date is current under the Visa Bulletin results in a rejection or denial. Timing matters, especially for high-demand countries facing real backlogs.',
    },
  ],
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#F8FAFC] text-slate-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src={bgImage}
          alt="Denial Reasons Background"
          fill
          quality={90}
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-slate-50/80" />
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

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-full bg-red-100 text-red-700 font-bold flex items-center justify-center text-sm flex-shrink-0">
                    ✕
                  </div>
                  <h3 className={`text-base sm:text-lg font-bold text-[#0B1829] leading-snug ${bitter.className}`}>
                    {item.title}
                  </h3>
                </div>
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
