'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });

const defaultComparison = [
  {
    factor: 'Legal standard',
    asylum: 'Well founded fear of persecution',
    withholding: 'Clear threat to life or freedom, a higher standard than asylum',
    cat: 'Likely risk of torture, with government involvement or consent',
  },
  {
    factor: 'Filing deadline',
    asylum: 'One year from last arrival, with limited exceptions',
    withholding: 'No one year deadline',
    cat: 'No one year deadline',
  },
  {
    factor: 'Protected ground required',
    asylum: 'Yes, tied to race, religion, nationality, political opinion or social group',
    withholding: 'Yes, same five protected grounds as asylum',
    cat: 'No, torture risk alone can qualify',
  },
  {
    factor: 'Path to a green card',
    asylum: 'Yes, after one year of asylum status',
    withholding: 'No',
    cat: 'No',
  },
  {
    factor: 'Family reunification',
    asylum: 'Yes, through Form I 730 for spouse and children',
    withholding: 'No',
    cat: 'No',
  },
  {
    factor: 'International Travel',
    asylum: 'Permitted with a pre approved Refugee Travel Document (cannot visit home country).',
    withholding: 'Prohibited',
    cat: 'Prohibited',
  },
  {
    factor: 'Scope of protection',
    asylum: 'Broad protection and a path to citizenship',
    withholding: 'Blocks removal to the specific country of feared harm only',
    cat: 'Blocks removal to the specific country where torture risk exists',
  },
];

const assessmentBullets = [
  'We review your immigration history and your current case status.',
  'We identify the harm you suffered and the harm you fear.',
  'We check your claim against the protected grounds for asylum.',
  'We test your facts against the higher standard for withholding of removal.',
  'We screen your case for a possible CAT claim, tied to the risk of torture.',
  'We flag related protections, including the U Visa for crime victims, the T Visa for trafficking survivors and VAWA for survivors of domestic abuse.',
  'We recommend the strongest combination of claims for your specific case.',
];

const ReliefOptionsSection = ({
  tagline = 'ALTERNATIVE FORMS OF PROTECTION',
  title = 'Asylum vs. Withholding of Removal and Convention Against Torture Protection',
  description = "Asylum isn't the only way to escape deportation to a dangerous country. Withholding of removal and protection under the Convention Against Torture are alternative types of relief, with a separate and distinct legal standard for each. Our lawyer considered all three options together, because one case often is eligible for more than one form of relief.",
  comparison = defaultComparison,
  assessmentPoints = assessmentBullets,
}) => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#030914] text-white overflow-hidden">
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <span className="text-red-500 font-bold text-xs sm:text-sm tracking-widest uppercase mb-3">
            {tagline}
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.2] mb-4 ${bitter.className}`}>
            {title}
          </h2>
          <div className="h-[3px] w-20 bg-red-700 rounded-full mb-6" />
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* 3-Way Relief Comparison Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-700/60 bg-[#091424] shadow-2xl mb-16">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-slate-700 bg-slate-900/80">
                <th className="py-4 px-6 text-sm sm:text-base font-bold text-white w-1/4">Factor</th>
                <th className="py-4 px-6 text-sm sm:text-base font-bold text-red-400 w-1/4">Asylum</th>
                <th className="py-4 px-6 text-sm sm:text-base font-bold text-slate-300 w-1/4">Withholding of Removal</th>
                <th className="py-4 px-6 text-sm sm:text-base font-bold text-slate-300 w-1/4">Convention Against Torture</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80">
              {comparison.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-4 px-6 text-sm sm:text-base font-semibold text-white">
                    {row.factor}
                  </td>
                  <td className="py-4 px-6 text-sm sm:text-base text-red-200/90 font-medium bg-red-950/10">
                    {row.asylum}
                  </td>
                  <td className="py-4 px-6 text-sm sm:text-base text-slate-300">
                    {row.withholding}
                  </td>
                  <td className="py-4 px-6 text-sm sm:text-base text-slate-300">
                    {row.cat}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* How Our Immigration Attorney Assesses Possible Forms of Protection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-[#0c1a2e] to-[#081220] border border-slate-700/80 rounded-2xl p-6 sm:p-10 shadow-xl"
        >
          <div className="max-w-3xl mb-8">
            <span className="text-red-500 font-bold text-xs sm:text-sm tracking-widest uppercase mb-2 block">
              COMPREHENSIVE CASE EVALUATION
            </span>
            <h3 className={`text-2xl sm:text-3xl font-bold text-white mb-3 ${bitter.className}`}>
              How Our Immigration Attorney Assesses Possible Forms of Protection
            </h3>
            <p className="text-slate-300 text-base leading-relaxed">
              Applying for protection involves life changing decisions. Trip Law approaches every case with careful analysis:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {assessmentPoints.map((point, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-red-700/40 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-red-900/50 border border-red-700/60 flex items-center justify-center shrink-0 mt-0.5 text-red-400 font-bold text-sm">
                  {idx + 1}
                </div>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReliefOptionsSection;

