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
    id: 'financial',
    title: 'Financial Commingling',
    description:
      'Sharing money is excellent evidence that your marital relationship is completely authentic. Provide continuous joint bank statements that show active monthly transactions and savings. Credit cards, auto loans, and tax returns with both names work perfectly.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 'cohabitation',
    title: 'Shared Residence & Cohabitation',
    description:
      'Living under the same roof is primary requirement for a green card. Submit utility bills, lease agreements and official mail showing your shared address. Letters from landlords or neighbors can further confirm your daily living arrangement.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    id: 'insurance',
    title: 'Insurance and Beneficiaries',
    description:
      'Naming your spouse on insurance policies shows true commitment to their welfare. Include health insurance cards, life insurance designations, and car insurance policies together. These official documents carry significant weight with immigration officers during final reviews.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: 'social_proof',
    title: 'Shared Life and Social Proof',
    description:
      'Photographs of your time together show the genuine nature of your marriage. Include pictures with family members and friends at various social events over time. Receipts from joint vacations and holiday travel also provide excellent supporting evidence.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 'communication',
    title: 'Communication Records (Long Distance Relationships)',
    description:
      'If you lived apart, you must show consistent daily contact with each other. Provide detailed call logs, text message threads, and email conversations over several months. Chat logs from messaging applications help establish your ongoing romantic connection clearly.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
];

const EvidenceGenuineSection = ({
  badgeText = 'GENUINE MARRIAGE PROOF',
  title = 'Evidence To Prove Your Marriage Is Genuine to USCIS',
  description = 'USCIS seeks proof of genuine relationship and your living together before granting immigration benefits. It is because of increased fraud prevention. An immigration lawyer for marriage based green card helps to gather all necessary evidence for review process.',
  cases = defaultRiskCases,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-16 bg-[#FCFDFE] text-slate-800 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        
        {/* Section Top Header */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-12 lg:mb-16">
          
          {/* Left Title & Tagline */}
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

          {/* Right Description & Navigation Buttons */}
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

export default EvidenceGenuineSection;
