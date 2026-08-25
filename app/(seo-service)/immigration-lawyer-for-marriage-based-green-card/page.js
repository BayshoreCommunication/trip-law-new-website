import {
  HeroSection,
  EligibilitySection,
  PathwaysSection,
  DocumentsSection,
  EvidenceGenuineSection,
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
} from '@/components/seo-service/immigration-lawyer-for-marriage-based-green-card';

export const metadata = {
  title: 'Marriage Based Green Card Immigration Lawyer',
  description:
    'Trip Law helps couples obtain marriage based green cards through family immigration. Get trusted guidance from filing through approval.',
  alternates: {
    canonical: '/immigration-lawyer-for-marriage-based-green-card',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};

export default function MarriageBasedGreenCardPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <EligibilitySection />
      <PathwaysSection />
      <DocumentsSection />
      <EvidenceGenuineSection />
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
