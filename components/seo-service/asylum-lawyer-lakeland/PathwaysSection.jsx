'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultExceptions = [
  {
    num: '1',
    title: 'Changed Circumstances',
    desc: 'There is an unforeseeable deterioration of circumstances in your home country. This could be a result of political instability through coups, civil unrest and new laws aimed against the social group. It could also include personal circumstances in the U.S., for instance, a breakup of joint application in case of divorce or a loss of dependent status.',
  },
  {
    num: '2',
    title: 'Extraordinary Circumstances',
    desc: 'The events have stopped you from filing the application due to its unusual nature. The examples include serious illnesses, psychological trauma due to the past abuses or inability to act as an unaccompanied minor in legal terms. Other examples include a maintenance of valid nonimmigrant status until filing and lack of effective representation by the previous representative.',
  },
];

const PathwaysSection = ({
  tagline = 'ONE-YEAR RULE & EXCEPTIONS',
  title = 'One Year Asylum Filing Rule and Possible Exceptions',
  description = 'Under U.S. immigration policy as per the section 208 of Immigration Nationality Act, there is a definite deadline for the filing of asylum applications. Form I 589 has to be completed within one year after landing in the United States. This period starts from the day you enter the country. Failure to meet this deadline results in the loss of eligibility for asylum.',
  exceptionsIntro = 'The U.S. law makes provision for two exceptions to late filing of applications. Late applications are acceptable in the following situations:',
  exceptions = defaultExceptions,
  conclusion = 'You need thorough examination and proof in each case, as simply showing reasons for the situation will not be sufficient. Proof of timely filing of the application after overcoming an obstacle or change in country circumstances needs to be provided. For a government agency, there should be a convincing report from an authority in the country concerned.',
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/pathways-bg.png',
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#061224] text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src={bgImage}
          alt="One Year Asylum Filing Rule Background"
          fill
          sizes="100vw"
          quality={90}
          className="object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030914] via-[#061224]/90 to-[#030914]" />
      </div>

      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <span className="text-red-500 font-bold text-xs sm:text-sm tracking-widest uppercase mb-3">
            {tagline}
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.2] mb-4 ${bitter.className}`}>
            {title}
          </h2>
          <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-4">
            {description}
          </p>
          <p className="text-slate-400 text-sm sm:text-base font-semibold">
            {exceptionsIntro}
          </p>
        </div>

        {/* 2 Exceptions Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {exceptions.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#0B1829] border border-slate-700/60 hover:border-red-700/60 rounded-2xl p-7 sm:p-9 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-700/20 border border-red-700/40 flex items-center justify-center text-red-500 font-bold text-lg mb-5">
                  0{item.num}
                </div>
                <h3 className={`text-xl font-bold text-white mb-3 ${bitter.className}`}>
                  {item.title}
                </h3>
                <div className="h-[2px] w-12 bg-red-700 rounded-full mb-4" />
                <p className="text-slate-300 text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Conclusion Box */}
        <div className="max-w-4xl mx-auto bg-slate-900/80 border border-slate-700/80 rounded-2xl p-6 sm:p-8 text-center text-slate-300 text-sm sm:text-base leading-relaxed">
          {conclusion}
        </div>
      </div>
    </section>
  );
};

export default PathwaysSection;

