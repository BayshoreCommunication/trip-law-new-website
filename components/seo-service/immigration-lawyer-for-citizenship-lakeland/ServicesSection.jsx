'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

// 6 Service Graphic Fallback Renderers
const Service1Graphic = () => (
  <div className="w-full h-full bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-4 flex flex-col justify-between text-white relative overflow-hidden">
    <div className="absolute right-0 bottom-0 w-24 h-24 bg-red-700/20 rounded-full blur-xl" />
    <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider">USCIS Form N-400</span>
    <div className="my-auto">
      <div className="text-sm font-bold text-white font-serif">Certificate of</div>
      <div className="text-xs font-bold text-red-300 font-serif">Naturalization</div>
    </div>
    <span className="text-[9px] text-slate-300">U.S. Citizenship Passport</span>
  </div>
);

const Service2Graphic = () => (
  <div className="w-full h-full bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-4 flex flex-col justify-between text-white relative overflow-hidden">
    <div className="absolute left-0 bottom-0 w-24 h-24 bg-red-700/20 rounded-full blur-xl" />
    <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider">Family Petitions</span>
    <div className="my-auto">
      <div className="text-sm font-bold text-white font-serif">Spouse & Children</div>
      <div className="text-xs text-slate-300">Form I-130 Family Visa</div>
    </div>
    <span className="text-[9px] text-slate-300">Immediate Relative Sponsorship</span>
  </div>
);

const Service3Graphic = () => (
  <div className="w-full h-full bg-gradient-to-br from-[#0B1829] to-[#1E293B] p-4 flex flex-col justify-between text-white relative overflow-hidden">
    <div className="absolute right-0 top-0 w-24 h-24 bg-red-700/20 rounded-full blur-xl" />
    <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider">Permanent Resident</span>
    <div className="my-auto">
      <div className="text-sm font-bold text-emerald-400 font-mono">GREEN CARD</div>
      <div className="text-xs text-slate-300">Adjustment of Status</div>
    </div>
    <span className="text-[9px] text-slate-300">Form I-485 Approval</span>
  </div>
);

const Service4Graphic = () => (
  <div className="w-full h-full bg-gradient-to-br from-[#1E293B] to-[#0B1829] p-4 flex flex-col justify-between text-white relative overflow-hidden">
    <div className="absolute left-0 top-0 w-24 h-24 bg-red-700/20 rounded-full blur-xl" />
    <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider">USCIS Legal Review</span>
    <div className="my-auto">
      <div className="text-sm font-bold text-white font-serif">Form I-601 Waiver</div>
      <div className="text-xs text-slate-300">Inadmissibility Appeals</div>
    </div>
    <span className="text-[9px] text-slate-300">Overcoming Prior Denials</span>
  </div>
);

const Service5Graphic = () => (
  <div className="w-full h-full bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-4 flex flex-col justify-between text-white relative overflow-hidden">
    <div className="absolute right-0 bottom-0 w-24 h-24 bg-red-700/20 rounded-full blur-xl" />
    <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider">Immigration Court</span>
    <div className="my-auto">
      <div className="text-sm font-bold text-white font-serif">Removal Defense</div>
      <div className="text-xs text-slate-300">EOIR Court Representation</div>
    </div>
    <span className="text-[9px] text-slate-300">Deportation Defense Strategies</span>
  </div>
);

const Service6Graphic = () => (
  <div className="w-full h-full bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-4 flex flex-col justify-between text-white relative overflow-hidden">
    <div className="absolute left-0 bottom-0 w-24 h-24 bg-red-700/20 rounded-full blur-xl" />
    <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider">Scales of Justice</span>
    <div className="my-auto">
      <div className="text-sm font-bold text-white font-serif">Complex Litigation</div>
      <div className="text-xs text-slate-300">Criminal History & Tax Gaps</div>
    </div>
    <span className="text-[9px] text-slate-300">Legal Framing Defense</span>
  </div>
);

const graphicFallbackMap = {
  '01': <Service1Graphic />,
  '02': <Service2Graphic />,
  '03': <Service3Graphic />,
  '04': <Service4Graphic />,
  '05': <Service5Graphic />,
  '06': <Service6Graphic />,
};

// 6 Default Services with Real Photo Paths in immigration-lawyer-for-citizenship-lakeland asset folder
const defaultServices = [
  {
    number: '01',
    title: 'Citizenship & Naturalization',
    description: 'Become a U.S. citizen with confidence.',
    link: '/appointment',
    image: '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/service-1.png',
    icon: (
      <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V10M5 21V10M3 10l9-7 9 7M4 21h16M9 21v-7a1 1 0 011-1h4a1 1 0 011 1v7" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Family-Based Immigration',
    description: 'Bring your spouse, parents, children, or fiancé to the United States.',
    link: '/appointment',
    image: '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/service-2.png',
    icon: (
      <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Green Cards',
    description: 'Employment, marriage, adjustment of status, and more.',
    link: '/appointment',
    image: '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/service-3.png',
    icon: (
      <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h3" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Waivers & Appeals',
    description: 'Resolve prior denials and inadmissibility issues.',
    link: '/appointment',
    image: '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/service-4.png',
    icon: (
      <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Removal Defense',
    description: 'Protect your ability to remain in the U.S.',
    link: '/appointment',
    image: '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/service-5.png',
    icon: (
      <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    number: '06',
    title: 'Complex Immigration Cases',
    description: 'Legal strategies for criminal history, long absences, tax issues, and prior immigration violations.',
    link: '/appointment',
    image: '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/service-6.png',
    icon: (
      <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l9-4 9 4M3 6v14a1 1 0 001 1h16a1 1 0 001-1V6M3 6l9 6 9-6M12 12v9" />
      </svg>
    ),
  },
];

const ServicesSection = ({
  tagline = 'OUR SERVICES',
  title = 'Immigration Solutions for Every Stage of Your Journey',
  description = 'Whether you’re applying for citizenship, bringing family to the U.S., or resolving complex immigration issues, our attorneys provide strategic legal guidance at every step.',
  buttonText = 'Schedule Consultation',
  buttonLink = '/appointment',
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/services-bg.png',
  services = defaultServices,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#FCFDFE] text-slate-800">
      {/* Next.js Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src={bgImage}
          alt="Immigration Services Background Image"
          fill
          quality={90}
          priority
          className="object-cover object-center"
        />
        {/* Soft light overlay for text contrast */}
        <div className="absolute inset-0 bg-white/75" />
      </div>

      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column Outer Wrapper (Desktop Sticky Top - Exactly like DocumentsSection) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="flex flex-col items-start text-left pt-0 relative"
            >
              {/* Tagline Subtitle */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-red-700 font-bold text-xs sm:text-sm tracking-widest uppercase">
                  {tagline}
                </span>
                <div className="h-[2px] w-12 bg-red-700 rounded-full" />
              </div>

              {/* Main Heading */}
              <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1829] tracking-tight leading-[1.18] mb-4 ${bitter.className}`}>
                {title}
              </h2>

              {/* Star Accent Line */}
              <div className="flex items-center gap-3 my-3">
                <div className="h-[2px] w-10 bg-red-700/60 rounded-full" />
                <span className="text-red-700 font-bold text-xs">✦</span>
                <div className="h-[2px] w-10 bg-red-700/60 rounded-full" />
              </div>

              {/* Description */}
              <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed mb-8 max-w-lg">
                {description}
              </p>

              {/* CTA Consultation Button */}
              <Link
                href={buttonLink}
                className="inline-flex items-center gap-3 px-8 py-4 bg-red-700 hover:bg-red-800 text-white font-bold text-sm sm:text-base tracking-wider uppercase rounded-full shadow-xl shadow-red-900/30 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>{buttonText}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Scrollable Services List (6 Items with Stepper & Photo Card) */}
          <div className="lg:col-span-7 flex flex-col gap-6 relative">
            {services.map((item, idx) => {
              const isLast = idx === services.length - 1;
              return (
                <motion.div
                  key={item.number || idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: 'easeOut' }}
                  className="flex items-start gap-4 sm:gap-6 group"
                >
                  {/* Stepper Column: Number + Circular Icon Badge + Connecting Line */}
                  <div className="flex flex-col items-center flex-shrink-0 relative z-10 pt-1">
                    
                    {/* Stepper Number */}
                    <span className={`text-xl sm:text-2xl font-bold text-red-700 mb-1.5 ${bitter.className}`}>
                      {item.number}
                    </span>

                    {/* Circular Icon Badge */}
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-white border-2 border-red-700/30 group-hover:border-red-700 shadow-md flex items-center justify-center group-hover:bg-red-700 group-hover:text-white transition-all duration-300">
                      {item.icon ? (
                        React.cloneElement(item.icon, {
                          className: 'w-6 h-6 text-red-700 group-hover:text-white transition-colors duration-300',
                        })
                      ) : null}
                    </div>

                    {/* Vertical Connecting Line (if not last item) */}
                    {!isLast && (
                      <div className="w-[2px] h-full bg-red-700/20 group-hover:bg-red-700/50 transition-colors my-2 min-h-[60px]" />
                    )}
                  </div>

                  {/* Middle Content Card + Right Photo Card */}
                  <div className="flex-1 grid grid-cols-1 sm:grid-cols-12 gap-4 bg-white rounded-2xl p-5 sm:p-6 shadow-md border border-slate-100/90 group-hover:shadow-xl group-hover:border-red-700/30 transition-all duration-300">
                    
                    {/* Text Details (7 cols) */}
                    <div className="sm:col-span-7 flex flex-col justify-between items-start text-left">
                      <div>
                        <h3 className={`text-xl sm:text-2xl font-bold text-[#0B1829] mb-2 group-hover:text-red-700 transition-colors duration-300 ${bitter.className}`}>
                          {item.title}
                        </h3>
                        <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed mb-4">
                          {item.description}
                        </p>
                      </div>

                      {/* Learn More Link */}
                      <Link
                        href={item.link}
                        className="inline-flex items-center gap-2 text-red-700 font-bold text-xs sm:text-sm tracking-wider uppercase hover:text-red-800 transition-colors"
                      >
                        <span>Learn More</span>
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>

                    {/* Right Photo Card (5 cols) */}
                    <div className="sm:col-span-5 w-full h-36 rounded-xl overflow-hidden relative shadow-sm border border-slate-200/80">
                      {graphicFallbackMap[item.number] || (
                        <div className="w-full h-full bg-slate-900 text-white flex items-center justify-center p-4">
                          <span className="text-sm font-bold">{item.title}</span>
                        </div>
                      )}
                    </div>

                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
