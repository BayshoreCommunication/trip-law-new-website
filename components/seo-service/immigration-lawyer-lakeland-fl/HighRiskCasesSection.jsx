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
    id: 'deportation',
    title: 'Deportation and Removal Proceedings',
    description:
      'Early and complete representation is so important because a bar on return to the U.S. may extend for years by a removal order. After the hearing, the relief that remains becomes more and more restricted with each missed deadline or hearing and a final order further restricts what can then be done, even by way of a motion to reopen.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    id: 'overstays',
    title: 'Visa Overstays and Unlawful Presence',
    description:
      'Time spent in the U.S. past an authorized period accrues as unlawful presence, and that can trigger a 3 or 10 year bar on reentry once someone leaves the country. Plenty of applicants don\'t find out this bar exists until they\'ve already left for a visa interview abroad and discover they can\'t come back. We check unlawful presence exposure before recommending any strategy that involves leaving the country for any reason.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 'marriage_fraud',
    title: 'Marriage Fraud Allegations',
    description:
      'A marriage-based case flagged for fraud review can end in denial and future inadmissibility, even in a genuine marriage, if the evidence isn\'t organized the right way. USCIS looks for consistency between what a couple says and what they can actually show, joint finances, a shared address, a real communication history, and we help couples put that evidence together so it holds up under scrutiny.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    id: 'prior_denials',
    title: 'Prior Visa or Green Card Denials',
    description:
      'A previous denial stays part of the record and gets reviewed again with any future filing, so understanding exactly why it happened matters before trying again. Refiling without fixing whatever caused the original denial usually leads to a second denial. A refiling that actually addresses the underlying problem has a real shot.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    id: 'criminal_convictions',
    title: 'Criminal Convictions With Immigration Consequences',
    description:
      'Some state-level convictions carry federal immigration consequences that aren\'t obvious from the criminal case alone, including permanent bars to certain kinds of relief. A conviction that resulted in probation, or even a withheld adjudication in criminal court, can still count as a conviction under immigration law, a distinction that catches a lot of applicants, and honestly some criminal defense attorneys too, off guard.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l9-4 9 4M3 6v14a1 1 0 001 1h16a1 1 0 001-1V6M3 6l9 6 9-6M12 12v9" />
      </svg>
    ),
  },
  {
    id: 'appeals_motions',
    title: 'Appeals and Motions to Reopen',
    description:
      'Once a case is denied, the window to appeal or file a motion to reopen is narrow, and the legal standard for reversing a decision is considerably higher than what applied to the original filing. These filings need to point to a specific legal or factual error, or new evidence that wasn\'t available before, which is why a fast, well-documented response matters.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
];

const HighRiskCasesSection = ({
  badgeText = 'HIGH RISK IMMIGRATION CASES',
  title = 'How Complex and High Risk Immigration Cases Affect Your Future',
  description = 'Some immigration problems carry consequences that go well beyond a single denied application. Understanding what\'s actually at stake is the first step toward protecting your status long term.',
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
