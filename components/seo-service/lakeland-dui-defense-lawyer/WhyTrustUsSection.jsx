'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultServices = [
  {
    title: 'Local Trial Experience',
    description:
      'DUI cases filed in Lakeland move through the Tenth Judicial Circuit serving Polk County. Every courtroom follows established scheduling practices, filing requirements and judicial expectations. Trip Law understands how local DUI cases progress from arrest through trial preparation. Familiarity with Polk County procedures helps the defense prepare efficiently for every hearing and filing.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l9-4 9 4M3 6v14a1 1 0 001 1h16a1 1 0 001-1V6M3 6l9 6 9-6M12 12v9" />
      </svg>
    ),
  },
  {
    title: 'Reduced Charges and Dismissed Cases Record',
    description:
      'Every DUI case deserves an independent review before accepting the prosecution\'s allegations. Strong outcomes often begin by identifying weaknesses within the State\'s evidence. Trip Law examines police reports, chemical testing, video recordings and witness statements before recommending any legal strategy. When evidence supports negotiations, the firm pursues reduced charges or other favorable resolutions whenever available under Florida law.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Fast Action on 10 Day DMV Deadline',
    description:
      'The administrative license deadline arrives quickly after every qualifying DUI arrest. Waiting several days may eliminate valuable opportunities for preserving driving privileges. Trip Law acts immediately by reviewing the arrest date and identifying every applicable administrative deadline. Early action keeps clients prepared before the ten-day review period expires.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Thorough Evidence Review',
    description:
      'Every document tells only part of the complete story surrounding a DUI investigation. Small inconsistencies often appear after reviewing every available piece of evidence together. Trip Law evaluates probable cause affidavits, body camera recordings, dashcam videos, laboratory reports, maintenance records and dispatch communications before building a defense strategy. This detailed review helps identify factual and procedural issues affecting the prosecution\'s case.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Strategic Defense Planning',
    description:
      'No two DUI arrests involve identical facts or legal challenges. Every defense should reflect the specific evidence rather than relying upon standard arguments. Trip Law develops a case strategy after reviewing the investigation, applicable statutes, witness testimony and scientific evidence. The defense plan continues evolving whenever additional evidence becomes available.',
    icon: (
      <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
];

const WhyTrustUsSection = ({
  tagline = 'WHY DRIVERS CHOOSE TRIP LAW',
  title = 'Why Lakeland Drivers Choose Trip Law for DUI Defense',
  description = 'Trip Law provides focused DUI representation while helping clients understand each decision throughout the legal process.',
  buttonText = 'Schedule Consultation',
  buttonLink = '/appointment',
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/services-bg.png',
  services = defaultServices,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#0B1829] text-white overflow-hidden">
      {bgImage && (
        <div className="absolute inset-0 pointer-events-none z-0">
          <Image
            src={bgImage}
            alt="Why Choose Trip Law Background"
            fill
            quality={90}
            priority
            className="object-cover object-center opacity-25 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1829]/95 via-[#0B1829]/90 to-[#0B1829]/95" />
        </div>
      )}

      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col items-center text-center mb-14 sm:mb-16"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-red-500 font-bold text-xs sm:text-sm tracking-widest uppercase">
              {tagline}
            </span>
            <div className="h-[2px] w-12 bg-red-700 rounded-full" />
          </div>

          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-4xl leading-[1.18] mb-4 ${bitter.className}`}>
            {title}
          </h2>

          <p className="text-slate-300 text-base sm:text-lg font-normal max-w-3xl leading-relaxed">
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-12">
          {services.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: 'easeOut' }}
              className="bg-white/5 backdrop-blur-md border border-slate-700/80 rounded-3xl p-7 sm:p-8 flex flex-col justify-between text-left hover:border-red-500/50 hover:bg-white/10 transition-all duration-300 group"
            >
              <div>
                <div className="w-14 h-14 rounded-full bg-red-700/20 border border-red-500/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 text-red-400">
                  {item.icon}
                </div>

                <h3 className={`text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300 ${bitter.className}`}>
                  {item.title}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center pt-4">
          <Link
            href={buttonLink}
            className="inline-flex items-center gap-3 px-8 py-4 bg-red-700 hover:bg-red-800 text-white font-bold text-sm sm:text-base tracking-wider uppercase rounded-full shadow-xl shadow-red-900/40 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>{buttonText}</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyTrustUsSection;
