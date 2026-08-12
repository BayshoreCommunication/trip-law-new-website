import {
  HeroSection,
  EligibilitySection,
  PathwaysSection,
  DocumentsSection,
  HighRiskCasesSection,
  DenialReasonsSection,
  ProcessTimelineSection,
  InterviewPrepSection,
  AfterApprovalSection,
  FilingFeesSection,
  WhyTrustUsSection,
  LicensedAttorneySection,
  WhatToExpectSection,
  TestimonialsSection,
  PracticeAreasCitiesSection,
  FinalCtaSection,
  FaqSection,
} from '@/components/seo-service/immigration-lawyer-lakeland-fl';

export const metadata = {
  title: 'Immigration Lawyer Lakeland, FL | Visa & Green Card Help',
  description:
    'Get legal assistance with visas, green cards, citizenship, family immigration, and other immigration matters in Lakeland, FL.',
  alternates: {
    canonical: '/immigration-lawyer-lakeland-fl',
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function ImmigrationLawyerLakelandFlPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <EligibilitySection />
      <PathwaysSection />
      <DocumentsSection />
      <HighRiskCasesSection />
      <DenialReasonsSection />
      <ProcessTimelineSection />
      <InterviewPrepSection />
      <AfterApprovalSection />
      <FilingFeesSection />
      <WhyTrustUsSection />
      <LicensedAttorneySection />
      <WhatToExpectSection />
      <TestimonialsSection />
      <PracticeAreasCitiesSection />
      <FinalCtaSection />
      <FaqSection />
    </main>
  );
}
