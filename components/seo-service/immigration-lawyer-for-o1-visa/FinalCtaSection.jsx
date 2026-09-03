'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const FinalCtaSection = ({
  tagline = 'GET STARTED TODAY',
  title = 'Start Your O-1 Visa Case With TripLaw Today',
  description = 'If you are ready to pursue your professional goals in the United States, TripLaw can build an O-1 petition around your actual qualifications and career achievements. Contact TripLaw to talk through your case with a licensed immigration attorney.',
  phone = '(863)-599-6735',
  email = 'info@trip-law.com',
  website = 'www.trip-law.com',
  address = '1820 Florida Ave S, Ste. C, Lakeland, FL 33803',
  consultationLink = '/appointment',
  rightImage = '/assets/seo-service/trip-law.jpeg',
  rightImageAlt = 'Start Your O-1 Visa Case With TripLaw Today',
  rightImageTitle = 'Start Your O-1 Visa Application Today',
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/cta-bg.png',
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#040B17] text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src={bgImage}
          alt="Final CTA Background"
          fill
          quality={90}
          className="object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030914] via-[#061224]/90 to-[#030914]" />
      </div>

      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            <span className="text-red-500 font-bold text-xs sm:text-sm tracking-widest uppercase mb-3">
              {tagline}
            </span>
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.2] mb-6 ${bitter.className}`}>
              {title}
            </h2>
            <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />

            <p className="text-slate-200 text-base sm:text-lg md:text-xl leading-relaxed mb-8">
              {description}
            </p>

            <div className="bg-[#0B1829] border border-slate-700/80 rounded-2xl p-6 mb-8 w-full max-w-2xl text-slate-300 text-sm sm:text-base space-y-2">
              <div>Call <a href={`tel:${phone.replace(/[^0-9]/g, '')}`} className="text-red-400 font-bold hover:underline">{phone}</a> or visit <a href={`https://${website}`} target="_blank" rel="noopener noreferrer" className="text-red-400 font-bold hover:underline">{website}</a> to schedule a consultation.</div>
              <div>The office sits at <strong className="text-white">{address}</strong>.</div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 w-full sm:w-auto">
              <Link
                href={consultationLink}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-red-700 hover:bg-red-800 text-white font-bold text-base tracking-wider uppercase rounded-full shadow-xl shadow-red-900/30 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>SCHEDULE CONSULTATION</span>
              </Link>
              <a
                href={`tel:${phone.replace(/[^0-9]/g, '')}`}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent hover:bg-red-700/20 text-white border-2 border-red-700 font-bold text-base tracking-wider uppercase rounded-full transition-all duration-300"
              >
                <span>Call {phone}</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 w-full flex justify-center"
          >
            <div className="relative w-full max-w-md h-[400px] sm:h-[480px] rounded-3xl overflow-hidden border-2 border-slate-700 shadow-2xl shadow-black/80">
              <Image
                src={rightImage}
                alt={rightImageAlt}
                title={rightImageTitle}
                fill
                quality={90}
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white font-bold text-lg leading-snug">
                {rightImageTitle}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
