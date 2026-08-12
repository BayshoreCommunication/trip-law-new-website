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
} from '@/components/seo-service/lakeland-dui-defense-lawyer';

export const metadata = {
  title: 'Lakeland DUI Defense Lawyer for DUI Charges | Trip Law',
  description:
    'Arrested for DUI in Lakeland? Trip Law defends clients against first time and repeat DUI charges. Call today for a confidential consultation.',
  alternates: {
    canonical: '/lakeland-dui-defense-lawyer',
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

export default function LakelandDuiDefenseLawyerPage() {
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
