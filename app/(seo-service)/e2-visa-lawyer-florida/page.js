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
} from '@/components/seo-service/e2-visa-lawyer-florida';

export const metadata = {
  title: 'E2 Visa Lawyer In Florida | Treaty Investor Visa Attorney',
  description:
    'Protect your commercial investment and secure your E2 Treaty Investor Visa in Florida with help from Trip Law. Contact our experienced E2 visa lawyers today.',
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

export default function E2VisaLawyerFloridaPage() {
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
