'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';
import { H1B_IMAGE_METADATA } from './h1bImagesMeta';

const bitter = Bitter({ subsets: ['latin'] });

const stages = [
  {
    title: 'Stage 1: Cap Subject or Cap Exempt Pathway',
    paragraphs: [
      "Cap subject cases begin with an electronic registration window each March, costing $215 per worker. Congress limits new H1B visas to 65,000 yearly, plus 20,000 for U.S. master's graduates. Since February 27, 2026, selection is weighted by the wage level of the offer. Entries run from four for Level IV offers down to one for Level I. About 25 percent of registrations won selection in FY2024 and 29 percent in FY2025. Selected employers receive a 90 day window to file each year, opening April 1.",
      'Cap exempt cases skip the lottery entirely and can file at any time of year. Universities, affiliated nonprofits and nonprofit or government research organizations qualify for the exemption. Workers already counted against the cap extending or changing employers outside the lottery. We check cap exempt eligibility first, since it can save a full year. The registration shapes the petition, so we lock wage level and role early.',
    ],
  },
  {
    title: 'Stage 2: Labor Condition Application With the Department of Labor',
    paragraphs: [
      "The employer files Form ETA 9035 through the Department of Labor's online FLAG portal. DOL usually certifies a complete application within about seven business days of filing. The LCA sets the wage floor, worksite and job title for the petition. The offered wage must meet the higher of prevailing or actual wage. Prevailing wage comes from DOL's wage data for your occupation and county. The employer then posts notice at the worksite and keeps a public access file. Job title, duties and wage on the LCA must match the I 129 exactly.",
    ],
  },
  {
    title: 'Stage 3: Form I 129 Petition Review',
    paragraphs: [
      "The employer files Form I 129 with its H supplements, the certified LCA and fees. USCIS then checks the job, the degree match, the wage and the employer's legitimacy. Most trouble starts in this review, usually from a thin job description. Regular processing runs several months and the USCIS processing times page shows current ranges. Premium processing, at $2,965, brings a first action within 15 business days. USCIS can approve the petition, issue a Request for Evidence or deny it outright.",
    ],
  },
  {
    title: 'Stage 4: Responding to a Request for Evidence (RFE)',
    paragraphs: [
      'A Request for Evidence means USCIS wants more proof before it will decide. The notice sets the deadline, with a maximum of 84 days (12 weeks). Deadlines stay fixed once set, so we start the response on arrival. Five triggers show up again and again in the notices we review.',
    ],
    bullets: [
      'A job description too vague to prove the degree requirement',
      'A degree in a field unrelated to the position',
      'A wage below the LCA level or unsupported by market data',
      'Unclear control over the work at a third party site',
      'Thin business records, such as missing tax returns or contracts',
    ],
  },
  {
    title: 'Stage 5: Approval Notice and Work Start',
    paragraphs: [
      'Approval arrives as Form I 797, listing the validity dates and the approved employer. Workers in valid U.S. status, like F 1, can switch to H1B inside the country. Workers abroad collect the visa stamp at a U.S. consulate before entering.',
    ],
  },
];

const PathwaysSection = () => {
  const { subtleWatermarkBg } = H1B_IMAGE_METADATA;

  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#061224] text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src={subtleWatermarkBg.src}
          alt={subtleWatermarkBg.alt}
          title={subtleWatermarkBg.title}
          fill
          sizes="100vw"
          quality={80}
          className="object-cover object-center opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030914] via-[#061224]/92 to-[#030914]" />
      </div>

      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.2] mb-4 ${bitter.className}`}>
            How the H1B Visa Process Works
          </h2>
          <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            An h1b case moves through 5 stages. Each stage has a different purpose. An error early in the process can create problems later.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {stages.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`bg-[#0B1829]/90 border border-slate-700/60 hover:border-red-700/60 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl transition-all duration-300 ${
                idx === 0 ? 'lg:col-span-2' : ''
              }`}
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-red-700/20 border border-red-700/40 flex items-center justify-center text-red-500 font-bold text-base mb-5">
                  0{idx + 1}
                </div>
                <h3 className={`text-lg sm:text-xl font-bold text-white mb-4 ${bitter.className}`}>
                  {item.title}
                </h3>
                <div className="space-y-4">
                  {item.paragraphs.map((para, pIdx) => (
                    <p key={pIdx} className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
                {item.bullets && (
                  <ul className="mt-4 flex flex-col gap-2.5">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5 text-slate-300 text-sm sm:text-base">
                        <span className="text-red-500 font-bold mt-0.5">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PathwaysSection;
