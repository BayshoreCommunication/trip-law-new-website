'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

// 6 Visual Graphic Fallbacks if local PNGs are not in public/
const WhyChoose1Graphic = () => (
  <div className="w-full h-full bg-gradient-to-br from-[#0B1829] to-[#1E293B] p-5 flex flex-col justify-between text-white relative overflow-hidden">
    <div className="absolute right-0 bottom-0 w-28 h-28 bg-red-700/20 rounded-full blur-xl" />
    <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest">Florida Bar Licensed</span>
    <div className="my-auto text-center">
      <div className="text-base sm:text-lg font-bold font-serif text-white">Florida Bar Attorney</div>
      <div className="text-xs text-slate-300">Representation on Every File</div>
    </div>
    <span className="text-[9px] text-slate-400">USCIS Interview Representation</span>
  </div>
);

const WhyChoose2Graphic = () => (
  <div className="w-full h-full bg-gradient-to-br from-[#1E293B] to-[#0B1829] p-5 flex flex-col justify-between text-white relative overflow-hidden">
    <div className="absolute left-0 bottom-0 w-28 h-28 bg-red-700/20 rounded-full blur-xl" />
    <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest">Field Office Mastery</span>
    <div className="my-auto text-center">
      <div className="text-base sm:text-lg font-bold font-serif text-white">USCIS Field Office</div>
      <div className="text-xs text-slate-300">Florida Officers Patterns</div>
    </div>
    <span className="text-[9px] text-slate-400">Lakeland & Tampa Officer Trends</span>
  </div>
);

const WhyChoose3Graphic = () => (
  <div className="w-full h-full bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-5 flex flex-col justify-between text-white relative overflow-hidden">
    <div className="absolute right-0 top-0 w-28 h-28 bg-red-700/20 rounded-full blur-xl" />
    <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest">High Risk Defense</span>
    <div className="my-auto text-center">
      <div className="text-base sm:text-lg font-bold font-serif text-white">Prior Denials & DUIs</div>
      <div className="text-xs text-slate-300">Legal Briefing & RFE Response</div>
    </div>
    <span className="text-[9px] text-slate-400">Complex Case History Review</span>
  </div>
);

const WhyChoose4Graphic = () => (
  <div className="w-full h-full bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-5 flex flex-col justify-between text-white relative overflow-hidden">
    <div className="absolute left-0 top-0 w-28 h-28 bg-red-700/20 rounded-full blur-xl" />
    <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest">Transparent Pricing</span>
    <div className="my-auto text-center">
      <div className="text-base sm:text-lg font-bold font-serif fill-emerald-400 text-emerald-400">Flat Fee Agreement</div>
      <div className="text-xs text-slate-300">No Hidden Costs or Surprises</div>
    </div>
    <span className="text-[9px] text-slate-400">Written Contract Before Intake</span>
  </div>
);

const WhyChoose5Graphic = () => (
  <div className="w-full h-full bg-gradient-to-br from-[#0B1829] to-[#1E293B] p-5 flex flex-col justify-between text-white relative overflow-hidden">
    <div className="absolute right-0 bottom-0 w-28 h-28 bg-red-700/20 rounded-full blur-xl" />
    <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest">Spanish & English</span>
    <div className="my-auto text-center">
      <div className="text-base sm:text-lg font-bold font-serif text-white">Multilingual Support</div>
      <div className="text-xs text-slate-300">Native Language Consultations</div>
    </div>
    <span className="text-[9px] text-slate-400">Interview Coaching in Your Language</span>
  </div>
);

const WhyChoose6Graphic = () => (
  <div className="w-full h-full bg-gradient-to-br from-[#1E293B] to-[#0B1829] p-5 flex flex-col justify-between text-white relative overflow-hidden">
    <div className="absolute left-0 bottom-0 w-28 h-28 bg-red-700/20 rounded-full blur-xl" />
    <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest">Attorney Client Privilege</span>
    <div className="my-auto text-center">
      <div className="text-base sm:text-lg font-bold font-serif text-white">Direct Attorney Access</div>
      <div className="text-xs text-slate-300">Protecting Records & Rights</div>
    </div>
    <span className="text-[9px] text-slate-400">Direct Consultation with Lead Counsel</span>
  </div>
);

const graphicFallbackMap = {
  '01': <WhyChoose1Graphic />,
  '02': <WhyChoose2Graphic />,
  '03': <WhyChoose3Graphic />,
  '04': <WhyChoose4Graphic />,
  '05': <WhyChoose5Graphic />,
  '06': <WhyChoose6Graphic />,
};

// 6 Items with Real Photo Paths in immigration-lawyer-for-citizenship-lakeland asset folder
const defaultItems = [
  {
    number: '01',
    title: 'Florida Bar Attorney on Every File',
    description:
      'Our paralegals and case managers fill out every form. Our licensed attorney advises you on your record and represents you at USCIS interview. We carry professional accountability for the result.',
    image: '/assets/seo-service/trip-law.jpeg',
    imageAlt: 'Florida Bar Licensed Immigration Attorney Reviewing Citizenship N-400 Applications',
    imageTitle: 'Why Choose Trip Law: Licensed Attorney on Every Citizenship File',
    icon: (
      <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        {/* Lawyer / Shield Icon */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Detailed Knowledge of USCIS Field Office',
    description:
      'As a local immigration lawyer, we are highly familiar with Florida’s field office processing patterns. We understand officers’ tendencies and document preferences require years to develop. Officers may ask irrelevant questions for N-400 or misrepresent criminal history. Our Lakeland, Florida immigration attorney prevents this.',
    image: '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/why-choose-2.png',
    icon: (
      <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        {/* Court / Building Icon */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V10M5 21V10M3 10l9-7 9 7M4 21h16M9 21v-7a1 1 0 011-1h4a1 1 0 011 1v7" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Experience With Prior Denials and High Risk Cases',
    description:
      'Trip has handled citizenship applications involving prior DUIs, old removal orders, domestic incident records and extended travel absences. Our immigration attorney quickly clarifies applicants’ misremembered travel dates or addresses on record to prevent contradictions. Officers may request additional documents. Our attorney responds quickly to avoid delays to prolong your Lakeland, FL case.',
    image: '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/why-choose-3.png',
    icon: (
      <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        {/* Document Magnifying Glass Icon */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Written & Flat Fee Agreement Before Engagement',
    description:
      'Every Florida client receives a fee agreement in writing at intake. That number stays fixed when the case gets complicated or USCIS issues a Request for Evidence. Our fee also remains unchanged if the processing timeline extends.',
    image: '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/why-choose-4.png',
    icon: (
      <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        {/* Document Pen / Contract Icon */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Multilingual Support Every Step of Process',
    description:
      'The majority of the US’s immigrant population communicates primarily other than English, especially Spanish. Trip’s team handles consultations, document review, civics preparation and interview coaching in client’s primary language.',
    image: '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/why-choose-5.png',
    icon: (
      <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        {/* Globe Multilingual Icon */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    number: '06',
    title: 'Direct Attorney Access and Protecting Records',
    description:
      'Florida clients reach the attorney directly with questions about their file. Those questions get answered by the person who filed the application. Additionally applicants might get verbal approval during the interview and receive written concern notice weeks later. Immigration attorney responds within the required timeframe.',
    image: '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/why-choose-6.png',
    icon: (
      <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        {/* Scales / Attorney Protection Icon */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
];

const WhyChooseUsSection = ({
  tagline = 'WHY LAKELAND RESIDENTS CHOOSE TRIP LAW',
  title = 'Why Lakeland Residents Choose Trip Law for Citizenship Cases',
  description = 'Immigrants choose us as their Lakeland immigration lawyer for citizenship for our ability to resolve complex case histories and prior denials.',
  items = defaultItems,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#FAFBFD] text-slate-800 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        
        {/* Section Centered Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col items-center text-center mb-14 sm:mb-20"
        >
          {/* Tagline Subtitle */}
          <div className="flex items-center gap-3 mb-3">
            <div className="h-[2px] w-10 sm:w-14 bg-red-700/60 rounded-full" />
            <span className="text-red-700 font-bold text-xs sm:text-sm tracking-widest uppercase">
              {tagline}
            </span>
            <div className="h-[2px] w-10 sm:w-14 bg-red-700/60 rounded-full" />
          </div>

          {/* Scales Icon */}
          <div className="text-red-700 mb-2">
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l9-4 9 4M3 6v14a1 1 0 001 1h16a1 1 0 001-1V6M3 6l9 6 9-6M12 12v9" />
            </svg>
          </div>

          {/* Main Title */}
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1829] tracking-tight max-w-4xl leading-[1.18] mb-4 ${bitter.className}`}>
            {title}
          </h2>

          {/* Description */}
          <p className="text-slate-600 text-base sm:text-lg font-normal max-w-2xl leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* Vertical Connected Stepper List (Logo + Bar + Dot) */}
        <div className="flex flex-col gap-8 relative">
          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;

            return (
              <motion.div
                key={item.number || idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: 'easeOut' }}
                className="relative flex items-start gap-4 sm:gap-8 group"
              >
                {/* Left Stepper Column: Icon Circle + Connecting Bar + Center Dot */}
                <div className="flex flex-col items-center flex-shrink-0 relative z-10 pt-2">
                  
                  {/* Circular Logo/Icon Badge */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border-2 border-red-700/30 group-hover:border-red-700 shadow-md flex items-center justify-center group-hover:bg-red-700 group-hover:text-white transition-all duration-300">
                    {item.icon ? (
                      React.cloneElement(item.icon, {
                        className: 'w-6 h-6 sm:w-7 sm:h-7 text-red-700 group-hover:text-white transition-colors duration-300',
                      })
                    ) : null}
                  </div>

                  {/* Connecting Vertical Line & Dot (if not last item) */}
                  {!isLast && (
                    <div className="flex flex-col items-center my-2">
                      {/* Top vertical line segment */}
                      <div className="w-[2px] h-8 sm:h-10 bg-red-700/30 group-hover:bg-red-700/60 transition-colors" />
                      {/* Center Dot */}
                      <div className="w-2.5 h-2.5 rounded-full bg-red-700 shadow-sm" />
                      {/* Bottom vertical line segment */}
                      <div className="w-[2px] h-8 sm:h-10 bg-red-700/30 group-hover:bg-red-700/60 transition-colors" />
                    </div>
                  )}
                </div>

                {/* Right Item Card (White rounded card with left text details and right oval photo capsule) */}
                <div className="flex-1 bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/70 border border-slate-100/90 flex flex-col md:flex-row items-center gap-6 lg:gap-8 hover:shadow-2xl hover:border-red-700/40 transition-all duration-300">
                  
                  {/* Left Text Details */}
                  <div className="flex-1 flex flex-col items-start text-left">
                    {/* Number & Title Row */}
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className={`text-2xl sm:text-3xl font-bold text-red-700 ${bitter.className}`}>
                        {item.number}
                      </span>
                      <h3 className={`text-xl sm:text-2xl font-bold text-[#0B1829] group-hover:text-red-700 transition-colors duration-300 ${bitter.className}`}>
                        {item.title}
                      </h3>
                    </div>

                    {/* Body Description */}
                    <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Right Oval / Capsule Photo Container */}
                  <div className="w-full md:w-64 lg:w-72 h-40 sm:h-44 rounded-[2.5rem] overflow-hidden relative shadow-md border-2 border-slate-100 flex-shrink-0 group-hover:border-red-700/30 transition-colors duration-300">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.imageAlt || item.title}
                        title={item.imageTitle || item.title}
                        fill
                        quality={90}
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      graphicFallbackMap[item.number] || (
                        <div className="w-full h-full bg-slate-900 text-white flex items-center justify-center p-4">
                          <span className="text-sm font-bold">{item.title}</span>
                        </div>
                      )
                    )}
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUsSection;
