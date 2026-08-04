'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Bitter } from 'next/font/google';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const bitter = Bitter({ subsets: ['latin'] });

// 6 High Risk Case Items from Google Doc
const defaultRiskCases = [
  {
    id: 'criminal',
    title: 'Prior criminal convictions in Hillsborough or Pinellas County',
    description:
      'Expunged charges in Florida state court still appear in the federal background check. USCIS uses federal criminal standards to evaluate the impact of convictions. Aggravated felonies, crimes of moral turpitude and drug offenses carry different naturalization consequences. Some convictions are permanent bars. Others only affect the five year moral character review. Immigration attorney identifies required charges for legal briefing before filing N400.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 2.25l7.5 7.5-3 3-7.5-7.5 3-3zM4.5 12l4.5 4.5M2.25 18l3.75 3.75m4.5-12l10.5 10.5" />
      </svg>
    ),
  },
  {
    id: 'deportation',
    title: 'Old deportation or removal orders',
    description:
      'An administratively closed removal order remains active in federal EOIR records even years later. USCIS adjudicators treat these orders as potential active denial grounds at naturalization interview. The order must be disclosed on the N-400 and addressed with supporting legal documentation. Immigration attorney may move to reopen or terminate removal case before N-400 submission. Filing without legal resolution of a removal order typically results in an immediate denial.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V10M5 21V10M3 10l9-7 9 7M4 21h16M9 21v-7a1 1 0 011-1h4a1 1 0 011 1v7" />
      </svg>
    ),
  },
  {
    id: 'absences',
    title: 'Absences abroad exceeding 12 consecutive months',
    description:
      'Under INA 316(b) any absence exceeding 12 consecutive months breaks continuous residence. Physical presence of 30 out of 60 months is also recalculated after the applicant returns. Applicants must also reestablish U.S. domicile with documented evidence after returning from abroad. Employment records, lease agreements and bank statements are primary evidence used to rebuild eligibility.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
  },
  {
    id: 'fraud',
    title: 'Visa fraud or prior misrepresentation',
    description:
      'INA 212(a)(6)(C) bars applicants who willfully misrepresented material facts on any immigration form. One incorrect answer on a prior DS-160, I-130 or I-485 can trigger this bar. Some misrepresentations are defensible if the applicant can document good faith belief at the time. Others require a Form I-601 waiver for misrepresentation. This form must be filed before the N-400.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    id: 'taxes',
    title: 'Active IRS installment agreements',
    description:
      "Being under an IRS installment agreement at filing does not automatically result in denial. USCIS requires applicant to be in full compliance with the agreement's payment terms. The applicant must provide IRS compliance documentation showing consistent payments and current standing. Missed payments or an agreement in default affect good moral character under the USCIS review. An immigration attorney secures IRS compliance letters and tax transcripts before submitting application.",
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    id: 'dv',
    title: 'Domestic violence records or civil protective orders',
    description:
      "USCIS reviews civil restraining orders appear in Hillsborough and Pinellas County court records. Adjudicators of USCIS are not required to distinguish between protective and punitive orders without attorney framing. The order's context, timeline and legal outcome must be documented in application record. Before USCIS interview immigration attorney prepares a legal brief explaining the circumstances.",
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

const HighRiskCasesSection = ({
  badgeText = 'HIGH RISK CASES',
  title = 'How Complex and High-Risk Lakeland, Fl Cases Affect Citizenship Applications',
  description = "Applicant's cases with prior negative history require legal review by an immigration lawyer for citizenship lakeland before filing N-400.",
  cases = defaultRiskCases,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-16 bg-[#FCFDFE] text-slate-800 overflow-hidden">

      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        
        {/* Section Top Header (Left Title and Right Description aligned at top) */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-12 lg:mb-16">
          
          {/* Left Title & Tagline */}
          <div className="max-w-3xl flex flex-col items-start text-left">
            {/* Pill Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-700/10 border border-red-700/30 text-red-700 font-bold text-xs tracking-wider uppercase mb-4">
              <svg className="w-4 h-4 text-red-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>{badgeText}</span>
            </div>

            {/* Main Title */}
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1829] tracking-tight leading-[1.2] ${bitter.className}`}>
              {title}
            </h2>
            <div className="h-[3px] w-16 bg-red-700 rounded-full mt-4" />
          </div>

          {/* Right Description & Navigation Buttons */}
          <div className="flex flex-col items-start lg:items-end justify-between gap-6 lg:max-w-md">
            <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
              {description}
            </p>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                type="button"
                className="risk-swiper-prev w-12 h-12 rounded-full border border-slate-300 bg-white shadow-sm flex items-center justify-center text-slate-700 hover:bg-red-700 hover:text-white hover:border-red-700 transition-all duration-200 cursor-pointer"
                aria-label="Previous Slide"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                className="risk-swiper-next w-12 h-12 rounded-full border border-slate-300 bg-white shadow-sm flex items-center justify-center text-slate-700 hover:bg-red-700 hover:text-white hover:border-red-700 transition-all duration-200 cursor-pointer"
                aria-label="Next Slide"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

        </div>

        {/* Swiper Slider Carousel */}
        <div className="relative pb-12">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: '.risk-swiper-prev',
              nextEl: '.risk-swiper-next',
            }}
            pagination={{
              clickable: true,
              bulletActiveClass: 'swiper-pagination-bullet-active !bg-red-700',
            }}
            spaceBetween={28}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="!pb-14"
          >
            {cases.map((item, idx) => (
              <SwiperSlide key={item.id || idx} className="!h-auto flex">
                <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/70 border border-slate-100 hover:border-red-700/40 flex flex-col items-start w-full h-full hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group relative">
                  
                  {/* Icon Circular Badge */}
                  <div className="w-16 h-16 rounded-full bg-red-700/10 border border-red-700/20 flex items-center justify-center mb-6 group-hover:bg-red-700 group-hover:text-white transition-colors duration-300">
                    {item.icon ? (
                      React.cloneElement(item.icon, {
                        className: 'w-8 h-8 text-red-700 group-hover:text-white transition-colors duration-300',
                      })
                    ) : null}
                  </div>

                  {/* Card Title */}
                  <h3 className={`text-xl font-bold text-[#0B1829] mb-2 group-hover:text-red-700 transition-colors duration-300 ${bitter.className}`}>
                    {item.title}
                  </h3>

                  {/* Red Accent Underline below title */}
                  <div className="h-[2px] w-10 bg-red-700 rounded-full mb-4" />

                  {/* Card Description */}
                  <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed mb-8 flex-grow">
                    {item.description}
                  </p>

                  {/* Bottom Right Plus Badge */}
                  <div className="absolute right-6 bottom-6 w-9 h-9 rounded-full bg-red-700 text-white flex items-center justify-center shadow-md shadow-red-900/30 group-hover:scale-110 transition-transform duration-200">
                    <span className="text-lg font-bold leading-none">+</span>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default HighRiskCasesSection;
