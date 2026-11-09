'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const FinalCtaSection = ({
  tagline = 'CONFIDENTIAL HUMANITARIAN CONSULTATION',
  title = 'Do You Have a T Visa Lawyer Near Me?',
  description = (
    <>
      You do not have to deal with immigration system alone. If you survived labor or sex exploitation, securing T nonimmigrant status can give you legal protection, work authorization and permanent U.S. residence options. If you searched for{' '}
      <Link href="/t-visa-lawyer" className="text-red-400 hover:text-red-300 underline font-medium">
        t visa lawyer near me
      </Link>
      , contact Trip Law at{' '}
      <a href="tel:8635996735" className="text-red-400 hover:text-red-300 underline font-bold">
        (863) 599-6735
      </a>{' '}
      to request consultation details. Mention any safe contact requirements. Our team reviews your situation confidentially and helps you take the next step safely.
    </>
  ),
  phone = '(863) 599-6735',
  email = 'info@trip-law.com',
  website = 'www.trip-law.com',
  address = '1820 Florida Ave S, Suite C, Lakeland, FL 33803',
  primaryBtnText = 'Call (863) 599-6735',
  secondaryBtnText = 'Schedule Confidential Consultation',
  consultationLink = '/appointment',
  rightImage = '/assets/seo-service/trip-law.jpeg',
  rightImageAlt = 'Contact Hardam Tripathi, T Visa Lawyer Near Me',
  rightImageTitle = 'Contact Hardam Tripathi, T Visa Lawyer Near Me',
  bgImage = '/assets/seo-service/immigration-lawyer-for-citizenship-lakeland/cta-bg.png',
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#040B17] text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src={bgImage}
          alt="Final CTA Background"
          fill
          sizes="100vw"
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

            <div className="text-slate-200 text-base sm:text-lg md:text-xl leading-relaxed mb-8">
              {description}
            </div>

            <div className="bg-[#0B1829] border border-slate-700/80 rounded-2xl p-6 mb-8 w-full max-w-2xl text-slate-300 text-sm sm:text-base space-y-2">
              <div>
                Main office of Trip Law at <strong className="text-white">{address}</strong>.
              </div>
              <div>
                Telephone:{' '}
                <a href={`tel:${phone.replace(/[^0-9]/g, '')}`} className="text-red-400 font-bold hover:underline">
                  {phone}
                </a>
                {' | '}
                Website:{' '}
                <Link href="/" className="text-red-400 font-bold hover:underline">
                  {website}
                </Link>
                {' | '}
                Email:{' '}
                <a href={`mailto:${email}`} className="text-red-400 font-bold hover:underline">
                  {email}
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 w-full sm:w-auto">
              <a
                href={`tel:${phone.replace(/[^0-9]/g, '')}`}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-red-700 hover:bg-red-800 text-white font-bold text-base tracking-wider uppercase rounded-full shadow-xl shadow-red-900/30 transition-all duration-300 transform hover:-translate-y-0.5 text-center"
              >
                <span>{primaryBtnText}</span>
              </a>
              <Link
                href={consultationLink}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent hover:bg-red-700/20 text-white border-2 border-red-700 font-bold text-base tracking-wider uppercase rounded-full transition-all duration-300 text-center"
              >
                <span>{secondaryBtnText}</span>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-md sm:max-w-lg aspect-square rounded-3xl overflow-hidden border-2 border-slate-700/80 shadow-2xl">
              <Image
                src={rightImage}
                alt={rightImageAlt}
                title={rightImageTitle}
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover object-top hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040B17] via-transparent to-transparent opacity-60" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;

