'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultStages = [
  {
    stage: 'Stage 1',
    title: 'Initial Consultation and Case Assessment',
    desc: 'We first discuss the crime type, its approximate date, location and any contact with law enforcement. Then we review your current immigration concerns. You can also tell us about safety concerns, missing documents or uncertainty about sharing sensitive personal information. Bring any records you already have. For example police reports, court papers, immigration notices or correspondence with an investigating agency. We evaluate your safety and establish statutory eligibility.',
  },
  {
    stage: 'Stage 2',
    title: 'Eligibility Review and Immigration History Assessment',
    desc: 'We compare the facts of your case with the U Visa eligibility requirements. Our review includes your immigration entries and exits. Then we look into prior applications, previous removal proceedings and any criminal history. We examine your earlier statements to government agencies. This review helps to identify if you need an inadmissibility waiver or additional legal analysis.',
  },
  {
    stage: 'Stage 3',
    title: 'Personal Declaration and Supporting Evidence Preparation',
    desc: 'Your personal declaration explains the events in your own words. It should present a clear chronology. You need to describe the criminal activity and its effects. Explain your interactions with authorities and address relevant gaps or inconsistencies in the available records. We work with you to organize the account and compare it with supporting documents.',
  },
  {
    stage: 'Stage 4',
    title: 'Requesting Law Enforcement Certification',
    desc: 'Form I 918 Supplement B is the U Nonimmigrant Status Certification. An authorized official uses it to certify qualifying criminal activity. Also your past, present or likely helpfulness to an investigation or prosecution. We assess the appropriate agency. Then review its certification procedure. We help prepare the request when included in our representation.',
  },
  {
    stage: 'Stage 5',
    title: 'Preparing Form I 918 and Applicable Supporting Applications',
    desc: (
      <>
        Form I 918 is the principal petition for U nonimmigrant status. We review its answers against your declaration, certification and supporting records before submission.
        <br className="my-2" />
        Depending on your case, the filing may also involve:
        <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-300">
          <li>Form I 918, Supplement A for a qualifying family member.</li>
          <li>Form I 192, Application for Advance Permission to Enter as a Nonimmigrant. It’s necessary if you apply for an inadmissibility waiver.</li>
          <li>Form I 765 for work authorization.</li>
          <li>Additional evidence or other forms required by the facts of the case and current USCIS instructions.</li>
        </ul>
        We check the form editions, signatures, required attachments, filing instructions and prepare the submission.
      </>
    ),
  },
  {
    stage: 'Stage 6',
    title: 'Filing With USCIS and Responding to Notices',
    desc: 'After filing, USCIS may issue a receipt notice or request biometrics. Officers may send other notices or even ask for additional evidence. We review the correspondence. Then we explain any deadlines and assess the appropriate response. A Request for Evidence (RFE) requires a targeted response to USCIS concerns.',
  },
  {
    stage: 'Stage 7',
    title: 'USCIS Review, Bona Fide Determination and Waiting List Consideration',
    desc: 'USCIS reviews the petition under the applicable procedures. An initial review may include a bona fide determination. Depending on the case and current policy, USCIS can also place the applicant on the U Visa waiting list. A bona fide determination is an intermediate review. Eligible applicants may receive deferred action and employment authorization. This happens after a favorable determination. The BFD process depends on meeting all requirements. Waiting list placement also does not confirm the approval of final U nonimmigrant status. We explain each notice in context and discuss the next steps.',
  },
  {
    stage: 'Stage 8',
    title: 'Final Decision and Available Next Steps',
    desc: 'USCIS may approve the petition or deny it. They may even issue a notice requiring further action. We review USCIS’s decision. Then we explain its legal effect, any applicable deadlines and possible options to you. If USCIS grants U nonimmigrant status, we can discuss a few things. Your applicable work authorization, qualifying family petitions and the requirements for a future green card application. If USCIS denies the petition, the available response depends on the reasons for denial. Also on the procedural posture of the case.',
  },
];

const ApplicationProcessSection = ({
  tagline = 'STEP-BY-STEP LEGAL GUIDANCE',
  title = 'How Our Immigration Lawyer Helps With Your U Visa Application Process',
  description = (
    <>
      To secure your{' '}
      <Link href="/u-visa-immigration-lawyer" className="text-red-400 hover:text-red-300 underline font-medium">
        u visa
      </Link>
      , you may need to coordinate legally with municipal police departments, health care providers and federal adjudication centers. Our u visa immigration lawyer guides you through every operation stage.
    </>
  ),
  stages = defaultStages,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#040B17] text-white overflow-hidden">
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
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* 8 Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {stages.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="bg-[#0B1829] border border-slate-700/60 hover:border-red-700/60 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div>
                <div className="inline-block px-3 py-1 bg-red-700 text-white font-bold text-xs tracking-wider uppercase rounded mb-4">
                  {item.stage}
                </div>
                <h3 className={`text-xl font-bold text-white mb-3 ${bitter.className}`}>
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

export default ApplicationProcessSection;

