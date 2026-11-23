'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';
import { U_VISA_IMAGE_METADATA } from './uVisaImagesMeta';

const bitter = Bitter({ subsets: ['latin'] });

const FinalCtaSection = () => {
  const { ctaOfficeBg, attorneyConsultation } = U_VISA_IMAGE_METADATA;

  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#FAF7F2] text-slate-800 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src={ctaOfficeBg.src}
          alt={ctaOfficeBg.alt}
          title={ctaOfficeBg.title}
          fill
          sizes="100vw"
          quality={80}
          className="object-cover object-center opacity-25 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2]/85 via-[#FAF7F2]/75 to-[#FAF7F2]/90" />
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
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1829] tracking-tight leading-[1.2] mb-6 ${bitter.className}`}>
              Do You Have a U Visa Immigration Lawyer Near Me?
            </h2>
            <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />

            <p className="text-slate-700 text-base sm:text-lg md:text-xl leading-relaxed">
              Trip Law, P.A. serves clients locally in Lakeland and throughout Central Florida. Federal law exclusively governs U.S. immigration. This authority allows Attorney Hardam Tripathi to represent crime victims nationwide. He can represent you in USCIS service centers and immigration courts. He can also handle cases at U.S. consulates worldwide. If you are looking for a u visa immigration lawyer near me, book your first free case review today.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5 w-full flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden border-2 border-white shadow-2xl">
              <Image
                src={attorneyConsultation.src}
                alt={attorneyConsultation.alt}
                title={attorneyConsultation.title}
                fill
                sizes="(max-width: 1024px) 90vw, 448px"
                quality={85}
                className="object-cover object-top"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
