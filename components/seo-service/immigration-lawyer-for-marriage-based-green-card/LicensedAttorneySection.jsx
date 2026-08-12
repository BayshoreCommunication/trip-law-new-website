'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const LicensedAttorneySection = ({
  title = 'Trip Law Puts Licensed Attorney on Every Florida Green Card Through Marriage Case',
  description = 'We believe every couple deserves direct access to a licensed immigration attorney. Our law firm never hands your important file over to unsupervised paralegals. A dedicated immigration lawyer for marriage based green card personally reviews your evidence to ensure total legal compliance. This high level of personal attention sets Trip Law apart from competing firms. Our attorneys represent clients in family immigration matters across Florida and nationwide under federal jurisdiction. We stand by your side through every step of this complex journey.',
}) => {
  return (
    <section className="w-full py-16 lg:py-24 bg-[#091424] text-white overflow-hidden">
      <div className="w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-4xl mx-auto text-center flex flex-col items-center"
        >
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6 ${bitter.className}`}>
            {title}
          </h2>

          <p className="text-slate-300 font-normal text-base sm:text-lg md:text-xl leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LicensedAttorneySection;
