'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

// 6 Case Studies Data
const caseStudies = [
  {
    title: 'Criminal History & DUIs',
    description:
      'We handle cases involving DUIs, misdemeanors, and more serious records. Our attorneys analyze rehabilitation factors and build strong legal arguments.',
    icon: (
      <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        {/* Scales Icon */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l9-4 9 4M3 6v14a1 1 0 001 1h16a1 1 0 001-1V6M3 6l9 6 9-6M12 12v9" />
      </svg>
    ),
  },
  {
    title: 'Prior Denials & Refusals',
    description:
      'We review the reasons for past denials or refusals and prepare a strong new application supported by legal strategy and proper documentation.',
    icon: (
      <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        {/* Document Pen Icon */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    title: 'Extended Travel & Absences',
    description:
      'We help clients who have long trips abroad by preparing explanations and evidence to preserve continuous residence and physical presence requirements.',
    icon: (
      <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        {/* Airplane Icon */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
  },
  {
    title: 'Old Removal Orders & Deportations',
    description:
      'We assist clients with old removal orders or deportations in determining eligibility and requesting the necessary relief to apply for citizenship.',
    icon: (
      <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        {/* Document Profile Icon */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Domestic Incident Records',
    description:
      'We help clients with arrest or incident records related to domestic issues by presenting context, evidence, and legal solutions that support their eligibility.',
    icon: (
      <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        {/* Shield Check Icon */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Tax Issues & Financial Gaps',
    description:
      'We resolve tax problems, missing filings, or financial issues that may affect your good moral character and overall eligibility for naturalization.',
    icon: (
      <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        {/* Clipboard Pen Icon */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
];

// 4 Testimonial Review Cards Data
const reviews = [
  {
    quote:
      '“One of the best immigration lawyers I have ever met. Tripathy made everything very easy and helped us gain U.S. citizenship. Very friendly, professional, and knowledgeable lawyer. Thank you very much. I wish I could give more than 5 stars.”',
    author: 'Purab Patel',
    location: 'Florida',
    avatar: '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/why-choose-6.png',
  },
  {
    quote:
      '“My husband was able to obtain his citizenship thanks to Trip and his team! We are very thankful for their help, dedication, and support throughout the entire process. They truly care about their clients.”',
    author: 'Taylor Made',
    location: 'Florida',
    avatar: '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/why-choose-5.png',
  },
  {
    quote:
      '“My experience with Trip Law was a good one. The lawyer is excellent in terms of case preparation and communication. My case was approved within 10 months. I would definitely recommend this firm to anyone in need of immigration assistance.”',
    author: 'Clifton Brown',
    location: 'Florida',
    avatar: '/assets/seo-service/trip-law.jpeg',
    avatarAlt: 'Clifton Brown - U.S. Citizenship & Naturalization Client Review',
    avatarTitle: 'Naturalization Client Review Avatar: Clifton Brown',
  },
  {
    quote:
      '“Trip and his team have been professional in helping both my sister-in-law and my mother with their immigration cases. Overall, the firm is very knowledgeable and professional. While minor miscommunication happened at times, I am very satisfied with the service. My sister-in-law successfully passed her interview and will be heading to the U.S. soon. Next up is my mom’s case. Thank you for all your help so far.”',
    author: 'Chandara Chea',
    location: 'Florida',
    avatar: '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/why-choose-2.png',
  },
];

const TestimonialsSection = ({
  tagline = 'LICENSED ATTORNEY ON EVERY CASE',
  title = 'Trip Law Puts a Licensed Attorney on Every US Citizenship Case',
  description = 'Every US citizenship case at Trip Law is handled by licensed immigration attorneys. Our attorney prepares your N 400, assembles supporting documents and walks into the USCIS interview. An immigration lawyer for citizenship lakeland cases at Trip Law knows how Hillsborough County criminal records interact with USCIS federal review. We understand field office officers\' complex files handling patterns. We know where local applicants create problems on the N 400. Every case stays with the attorney who filed it.',
  testimonialsTitle = "What Trip Law's US Citizenship Clients Are Saying",
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/denial-reasons-bg.png',
}) => {
  return (
    <section className="relative w-full py-16 lg:py-8 bg-[#FCFDFE] text-slate-800">
      
      {/* Top 6 Case Studies Section */}
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 mb-20 lg:mb-28">
        
        {/* Section Top Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col items-center text-center mb-14 sm:mb-16"
        >
          {/* Tagline Subtitle */}
          <div className="flex items-center gap-3 mb-2">
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

          {/* Subtitle Description */}
          <p className="text-slate-600 text-base sm:text-lg font-normal max-w-3xl leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* 6 Case Study White Cards Grid (3 Cols x 2 Rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-8">
          {caseStudies.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: 'easeOut' }}
              className="bg-white rounded-3xl p-7 sm:p-8 shadow-xl shadow-slate-200/70 border border-slate-100/90 flex flex-col items-start text-left hover:shadow-2xl hover:border-red-700/40 transition-all duration-300 group"
            >
              {/* Icon Circle Badge */}
              <div className="w-14 h-14 rounded-full bg-red-700/10 border border-red-700/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className={`text-xl sm:text-2xl font-bold text-[#0B1829] mb-3 group-hover:text-red-700 transition-colors duration-300 ${bitter.className}`}>
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Bottom Dark Navy Testimonials Container with Top Downward Curve */}
      <div className="relative w-full bg-[#0B1829] text-white pt-24 pb-16 lg:pb-24 mt-10">
        
        {/* SVG Top Downward Curve Wave Divider */}
        <div className="absolute top-0 inset-x-0 -translate-y-[99%] w-full overflow-hidden leading-none z-20 pointer-events-none">
          <svg
            className="relative block w-full h-12 sm:h-20 lg:h-28 text-[#0B1829]"
            viewBox="0 0 1440 120"
            fill="currentColor"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z" />
          </svg>
        </div>

        {/* Next.js Background Image Overlay inside Navy Container */}
        {bgImage && (
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <Image
              src={bgImage}
              alt="Testimonials Section Background"
              fill
              quality={90}
              className="object-cover object-center opacity-25 mix-blend-luminosity"
            />
            {/* Soft gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B1829]/95 via-[#0B1829]/90 to-[#0B1829]/95" />
          </div>
        )}

        <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
          
          {/* Header Quotation Badge & Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex flex-col items-center text-center mb-14 sm:mb-16"
          >
            {/* Quotation Icon Circle */}
            <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-red-700/20 border border-red-500/40 flex items-center justify-center text-red-500 text-3xl font-serif mb-4 shadow-lg">
              “
            </div>

            {/* Heading */}
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-4xl leading-[1.18] ${bitter.className}`}>
              {testimonialsTitle}
            </h2>
          </motion.div>

          {/* 4 Testimonial Review Cards Grid (4 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 items-stretch mb-16">
            {reviews.map((rev, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: 'easeOut' }}
                className="bg-white rounded-3xl p-6 sm:p-7 shadow-2xl text-slate-800 flex flex-col justify-between items-center text-center hover:-translate-y-1.5 transition-all duration-300 border border-slate-100"
              >
                {/* Top 5 Gold Stars */}
                <div className="flex items-center gap-1 text-amber-400 text-lg mb-4">
                  ★ ★ ★ ★ ★
                </div>

                {/* Quote Text */}
                <p className="text-slate-600 text-xs sm:text-sm font-normal italic leading-relaxed mb-6 flex-1 flex items-center">
                  {rev.quote}
                </p>

                {/* Divider Line */}
                <div className="h-[2px] w-12 bg-red-700/30 rounded-full mb-4" />

                {/* Author Avatar & Name */}
                <div className="flex items-center gap-3 text-left w-full pt-1">
                  <div className="w-11 h-11 rounded-full overflow-hidden relative border-2 border-red-700/30 flex-shrink-0 shadow-sm">
                    <Image
                      src={rev.avatar}
                      alt={rev.avatarAlt || rev.author}
                      title={rev.avatarTitle || rev.author}
                      fill
                      quality={90}
                      className="object-cover object-center"
                    />
                  </div>
                  <div>
                    <div className={`text-sm sm:text-base font-bold text-[#0B1829] leading-tight ${bitter.className}`}>
                      {rev.author}
                    </div>
                    <div className="text-xs text-red-700 font-semibold mt-0.5">
                      {rev.location}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom 4 Feature Badges Pill Box */}
          <div className="w-full bg-white/5 backdrop-blur-md border border-slate-700/80 rounded-2xl p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-red-400 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-200">
                Licensed Florida Immigration Attorney
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-red-400 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-200">
                Personalized Strategy for Every Case
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-red-400 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-200">
                Timely Communication & Case Updates
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-red-400 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-200">
                Protecting Your Future Every Step of the Way
              </span>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default TestimonialsSection;
