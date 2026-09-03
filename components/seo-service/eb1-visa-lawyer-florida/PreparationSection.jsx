'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const PreparationSection = ({
  tagline = 'ATTORNEY PREPARATION',
  title = 'How an Immigration Lawyer Prepares EB-1 Applicants for USCIS Review',
  description = 'Preparing an EB-1 case requires more than meeting basic eligibility requirements. An immigration lawyer reviews each part of the case to build a clear, well-supported petition for USCIS review.',
  prepSteps = [
    {
      title: 'Selecting the Appropriate EB-1 Classification',
      desc: 'Your attorney starts by reviewing your professional background in detail, looking for the most viable subcategory before any paperwork gets drafted. We match your background to EB-1A, EB-1B, or EB-1C based on the evidence you actually have, not which title sounds most impressive. Picking the wrong category early on wastes months of preparation, so this decision gets the attention it deserves.',
    },
    {
      title: 'Evaluating Professional Evidence',
      desc: 'Once the category is settled, we audit your raw documentation line by line, comparing what you have against regulatory criteria and recent USCIS decisions. We identify which evidence directly supports your claims, where expert letters or independent confirmation are still needed, and which items are weak enough to drop. Building a strong record means curating evidence, not just stacking papers into a folder.',
    },
    {
      title: 'Developing Petition Strategy',
      desc: 'We organize the narrative so a reviewing officer can follow the legal argument without having to piece things together themselves. Every exhibit gets tied to a specific criterion, with cover letters and support memorandums explaining why that piece of proof matters in context. A clear, well organized structure makes a real difference in how smoothly an officer works through the file.',
    },
    {
      title: 'Preparing the Form I-140 Petition',
      desc: "The petition gets assembled so everything is presented clearly and completely, with each piece of evidence tied directly back to a specific legal criterion. We review the full package before it goes out to catch inconsistencies or gaps while there's still time to fix them. A well prepared petition tends to move through USCIS review with far fewer complications.",
    },
    {
      title: 'Addressing USCIS Requests for Evidence',
      desc: 'If a Request for Evidence comes in, we respond with exactly what\'s needed, on deadline, without padding the response with material that could muddy an otherwise clear answer. RFEs happen even in strong cases, so a measured, thorough answer matters more than a rushed one. We treat every RFE as a chance to strengthen the record, not just check a box and move on.',
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
          {prepSteps.map((item, idx) => (
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
                  0{idx + 1}
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

export default PreparationSection;
