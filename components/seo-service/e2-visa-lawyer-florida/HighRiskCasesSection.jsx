'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Bitter } from 'next/font/google';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const bitter = Bitter({ subsets: ['latin'] });

const defaultRiskCases = [
  {
    id: 'loans',
    title: 'Funds From Loans, Gifts or Cryptocurrency',
    description:
      'Loans need a signed agreement plus proof the lender held the funds legitimately. Gifts need a letter from the giver alongside their own financial records. Cryptocurrency gains need exchange history showing the coins\' origin and cash-out. Each source needs its own paper trail, separate from a simple bank deposit.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 'franchise',
    title: 'Franchise and Real Estate Investments',
    description:
      'Franchise purchases work well for E2 cases, since they arrive with a built-in business plan. Real estate deals need extra proof that you\'re running an active business, not holding property passively. A rental portfolio alone rarely clears the non-marginal business standard on its own. Officers want to see day-to-day operations, staff, and services.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V10M5 21V10M3 10l9-7 9 7M4 21h16M9 21v-7a1 1 0 011-1h4a1 1 0 011 1v7" />
      </svg>
    ),
  },
  {
    id: 'mixed',
    title: 'Investors With Mixed-Nationality Ownership',
    description:
      'A company investing instead of an individual triggers a line-by-line ownership check. At least half the business needs to belong to nationals of the treaty country. A business run mostly by non-treaty nationals falls short, regardless of investment size. Ownership charts must be an exact match to the corporate filings.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: 'prior_denials',
    title: 'Prior Visa Denials, Overstays or Status Violations',
    description:
      'A past visa denial doesn\'t rule out E2 eligibility. However it invites closer review. Overstays or status violations raise questions about your intent to follow visa terms. Officers weigh your immigration history alongside your current business case. Disclosing past issues upfront beats having them surface during the interview.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    id: 'employee',
    title: 'E2 Essential Employee Petitions',
    description:
      'Employees can qualify for E2 status without making a personal investment. They need the same treaty nationality as the business. Along with it they need an executive, supervisory or specialized role. The employer has to show the role genuinely needs those specific skills. Generic job titles without real duties rarely pass this test.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const HighRiskCasesSection = ({
  badgeText = 'HIGH RISK CASES',
  title = 'Which Complex and High-Risk Cases Can Affect E2 Visa Applications',
  description = 'Some E2 cases carry extra risk before a single form gets filed. Having a e2 visa lawyer florida can help prepare for these complex cases to prevent visa rejection.',
  cases = defaultRiskCases,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-16 bg-[#FCFDFE] text-slate-800 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-12 lg:mb-16">
          <div className="max-w-3xl flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-700/10 border border-red-700/30 text-red-700 font-bold text-xs tracking-wider uppercase mb-4">
              <svg className="w-4 h-4 text-red-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>{badgeText}</span>
            </div>

            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1829] tracking-tight leading-[1.2] ${bitter.className}`}>
              {title}
            </h2>
            <div className="h-[3px] w-16 bg-red-700 rounded-full mt-4" />
          </div>

          <div className="flex flex-col items-start lg:items-end justify-between gap-6 lg:max-w-md">
            <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
              {description}
            </p>

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
                  <div className="w-16 h-16 rounded-full bg-red-700/10 border border-red-700/20 flex items-center justify-center mb-6 group-hover:bg-red-700 group-hover:text-white transition-colors duration-300">
                    {item.icon ? (
                      React.cloneElement(item.icon, {
                        className: 'w-8 h-8 text-red-700 group-hover:text-white transition-colors duration-300',
                      })
                    ) : null}
                  </div>

                  <h3 className={`text-xl font-bold text-[#0B1829] mb-2 group-hover:text-red-700 transition-colors duration-300 ${bitter.className}`}>
                    {item.title}
                  </h3>

                  <div className="h-[2px] w-10 bg-red-700 rounded-full mb-4" />

                  <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed mb-8 flex-grow">
                    {item.description}
                  </p>

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
