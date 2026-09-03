'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const PathwaysSection = ({
  tagline = 'EB-1 GREEN CARD PATHWAYS',
  title = 'Special Paths to an EB-1 Green Card for Florida Applicants',
  subtitle1 = "The process of each and every EB-1 application is unique. The right category will vary according to your career, qualifications and professional accomplishments, so you'll want to choose the right category early on to ensure that you are not spending time later on an effort that is futile.",
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/pathways-bg.png',
  pathways = [
    {
      title: 'EB-1A for Individuals With Extraordinary Ability',
      desc: 'This category is for people who have already made it to the top of his or her field, and have documentation to back it up. Officers want a documented history of recognition stretched across many years, evidence that keeps showing up rather than a single moment that never repeated. What sets EB-1A apart is that qualified people can file entirely on their own, no employer required.',
    },
    {
      title: 'EB-1B for Outstanding Professors and Researchers',
      desc: 'EB-1B fits academics and researchers whose reputation reaches well past their own department. Most applicants need a permanent position already lined up with a U.S. university, college, or private research institution, since that offer becomes part of the evidence itself. A polished CV helps, but what USCIS really wants is proof that other people in the discipline have responded to the work.',
    },
    {
      title: 'EB-1C for Multinational Executives and Managers',
      desc: 'EB-1C is built for executives and managers moving from a related company overseas into a qualifying U.S. entity. The petition has to spell out how the two companies connect, whether through shared ownership, a parent subsidiary setup, or some other structure USCIS accepts. Beyond that corporate link, both the role held abroad and the one waiting stateside need to genuinely meet the regulatory definition of executive or managerial work.',
    },
    {
      title: 'EB-1A Self-Petition Without Employer Sponsorship',
      desc: "EB-1A doesn't require labor certification or a job offer at all. If the evidence is strong enough, you can file it yourself. Without an employer's HR department helping pull records together or vouching for the role, self-petitioners often need to be even more careful about documentation.",
    },
    {
      title: 'EB-1B Through a Qualifying U.S. Employer',
      desc: 'EB-1B requires the U.S. employer to offer a permanent research or teaching position, and the petition needs to prove two things at once, that the applicant is genuinely qualified, and that the sponsoring institution meets its own regulatory obligations. Expect a mix of publications, detailed recommendation letters from people who actually know the work, and records showing how the applicant is regarded within the field.',
    },
    {
      title: 'EB-1C Through a Qualifying Multinational Relationship',
      desc: "This path lives or dies on a documented relationship between the company abroad and the U.S. entity bringing the applicant over. In general, the U.S. side must have at least 1 year of experience as an affiliate, subsidiary or single corporation from the applicant's overseas work experience. Organizational charts, ownership records, and other things can do a lot of the work here, and connect the corporate with the employment requirements of a particular category. Vague claims about being part of the same company rarely survive review.",
    },
  ],
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#061224] text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src={bgImage}
          alt="Pathways Section Background"
          fill
          quality={90}
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030914] via-[#061224]/90 to-[#030914]" />
      </div>

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
            {subtitle1}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pathways.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-[#0B1829]/90 border border-slate-700/60 hover:border-red-700/60 rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-red-700/20 border border-red-700/40 flex items-center justify-center text-red-500 font-bold text-base mb-5">
                  0{idx + 1}
                </div>
                <h3 className={`text-lg sm:text-xl font-bold text-white mb-3 ${bitter.className}`}>
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

export default PathwaysSection;
