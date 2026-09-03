'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const DocumentsSection = ({
  tagline = 'APPLICATION CHECKLIST',
  titlePrefix = 'Documents Needed for an ',
  titleHighlight = 'EB-1 Visa Application',
  description = 'Each EB-1 category calls for its own mix of evidence, but a handful of documents keep showing up across nearly every filing. Starting here tends to make the rest of the process easier to organize.',
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/documents-bg.png',
  documents = [
    {
      title: 'Passport and Current Immigration Documents',
      desc: "Your passport and immigration records should be exactly the same as the petition, including name spellings, dates and so on. It's like a minor detail until an officer realizes that things don't add up and begins questioning things that it's not necessary to ask. The documents in these files are read carefully, and sometimes line by line, by USCIS, so do take the time to line them up before filing.",
    },
    {
      title: 'Academic Degrees and Professional Credentials',
      desc: 'Diplomas, transcripts and licenses define your field and level of training. Sometimes a foreign degree requires an equivalency assessment which may be required even if the officer reading your file does not know the school. Certified translations should be available on the first day. Scrambling for them later almost always slows down a case that was otherwise moving fine.',
    },
    {
      title: 'Awards and Professional Recognition',
      desc: 'National and international awards carry real weight in EB-1A petitions built around sustained acclaim, but not every award reads the same way to a reviewing officer. Context helps a lot here. Explaining how selective the award is, who else has won it in past years, and what the judging process looks like turns a bare line on a resume into something an officer can actually evaluate.',
    },
    {
      title: 'Published Material About Your Work',
      desc: "What counts is coverage that engages with your work directly, not a passing mention buried three paragraphs into someone else's article. Interviews, features, and independent media coverage tend to carry more weight than anything your own employer produced or you published yourself. If a journalist decided your work was worth writing about, that independence is exactly what makes it persuasive.",
    },
    {
      title: "Evidence of Judging Others' Work",
      desc: "Serving as a judge, reviewer, or panelist supports several EB-1A criteria, but only when it's documented in a way that leaves no room for doubt. A quick thank you email from an organizer usually isn't enough on its own. A formal invitation letter, a program that lists your name, or a participation certificate carries far more weight and holds up better if anyone questions the claim.",
    },
    {
      title: 'Original Contributions of Major Significance',
      desc: "This one is about work that actually moved a field forward. Patents, breakthrough findings, methods other people have since adopted, all of that qualifies. The strongest evidence shows how the field responded, whether through citations, through adoption of a technique, or through direct acknowledgment from peers. It's usually the hardest criterion to document well, and for good reason.",
    },
    {
      title: 'Scholarly Articles and Professional Publications',
      desc: 'USCIS is looking for long-term interaction with a field. A regular publication schedule, even a small one, is more convincing than one fine article, followed by a lack of publication for a number of years. If there are counts, they provide an idea of the actual number of people who read the work rather than leaving it on a shelf.',
    },
    {
      title: 'Selective Professional Memberships',
      desc: "The membership that counts here requires honest achievement to earn, judged by recognized experts in the field, General trade associations that accept anyone willing to pay dues typically don't satisfy this criterion. It's worth checking the actual admission requirements before citing any organization in the petition.",
    },
    {
      title: 'High Salary or Compensation Evidence',
      desc: 'Pay records showing you earn meaningfully more than others in comparable roles can help demonstrate exceptional value. This works best alongside independent salary data for your field and region, since a number by itself means very little without something to measure it against.',
    },
    {
      title: 'Evidence of Leading or Critical Roles',
      desc: 'Letters from current or former employers describing exactly what you were responsible for at a distinguished organization go a long way toward confirming your professional standing. The more specific those letters get about actual duties and outcomes, rather than general praise, the more useful they tend to be.',
    },
    {
      title: 'Employment Verification Records',
      desc: 'Official employer letters, payroll records, and other documentation confirm the years of experience your case relies on. These need to line up with everything else in the file. Gaps or mismatches between a resume and a pay history are exactly the kind of thing that draws extra scrutiny.',
    },
    {
      title: 'Research and Academic Documentation',
      desc: "For EB-1B cases especially, expect to gather citations, published research, and institutional letters that speak to international recognition within the applicant's specialty. The point is showing that people outside the applicant's own university or lab already know and rely on the work.",
    },
  ],
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#F8FAFC] text-slate-800 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src={bgImage}
          alt="Documents Section Background"
          fill
          quality={90}
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-slate-50/70" />
      </div>

      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <span className="text-red-700 font-bold text-xs sm:text-sm tracking-widest uppercase mb-3">
            {tagline}
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1829] tracking-tight leading-[1.2] mb-4 ${bitter.className}`}>
            {titlePrefix}
            <span className="text-red-700">{titleHighlight}</span>
          </h2>
          <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 6) * 0.08 }}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-red-700/10 border border-red-700/30 flex items-center justify-center text-red-700 font-bold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className={`text-base sm:text-lg font-bold text-[#0B1829] leading-snug ${bitter.className}`}>
                  {doc.title}
                </h3>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {doc.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocumentsSection;
