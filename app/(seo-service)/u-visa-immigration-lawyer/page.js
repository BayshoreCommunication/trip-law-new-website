import {
  HeroSection,
  EligibilitySection,
  PathwaysSection,
  ApplicationProcessSection,
  DocumentsSection,
  DenialReasonsSection,
  HighRiskCasesSection,
  ProcessTimelineSection,
  BenefitsSection,
  PreparationSection,
  FeesWaiverSection,
  WhyChooseUsSection,
  ProvenProcessSection,
  ComparisonSection,
  PracticeAreasCitiesSection,
  TestimonialsSection,
  FinalCtaSection,
  FaqSection,
  U_VISA_IMAGE_METADATA,
} from '@/components/seo-service/u-visa-immigration-lawyer';

const CANONICAL_URL = 'https://www.trip-law.com/u-visa-immigration-lawyer';
const META_TITLE = 'U Visa Immigration Lawyer Near Me';
const META_DESCRIPTION =
  'For a u Visa immigration lawyer near me, contact Trip Law for help with Form I 918, evidence and law enforcement certification.';

const {
  ogFeature,
  heroBg,
  eligibilityPathwaysBg,
  documentsDenialBg,
  attorneyConsultation,
  ctaOfficeBg,
} = U_VISA_IMAGE_METADATA;

const schemaImages = [
  ['#og-image', ogFeature],
  ['#courthouse-bg-image', heroBg],
  ['#eligibility-backdrop-image', eligibilityPathwaysBg],
  ['#documents-backdrop-image', documentsDenialBg],
  ['#cta-attorney-image', attorneyConsultation],
  ['#cta-office-bg-image', ctaOfficeBg],
].map(([fragment, imgMeta]) => ({
  '@type': 'ImageObject',
  '@id': `${CANONICAL_URL}${fragment}`,
  contentUrl: `https://www.trip-law.com${imgMeta.src}`,
  url: `https://www.trip-law.com${imgMeta.src}`,
  name: imgMeta.title,
  caption: imgMeta.alt,
  description: imgMeta.description,
  width: imgMeta.width,
  height: imgMeta.height,
  encodingFormat: 'image/webp',
}));

export const metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: CANONICAL_URL,
    siteName: 'Trip Law',
    images: [
      {
        url: `https://www.trip-law.com${ogFeature.src}`,
        width: ogFeature.width,
        height: ogFeature.height,
        alt: ogFeature.alt,
        type: 'image/webp',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: META_TITLE,
    description: META_DESCRIPTION,
    images: [
      {
        url: `https://www.trip-law.com${ogFeature.src}`,
        width: ogFeature.width,
        height: ogFeature.height,
        alt: ogFeature.alt,
      },
    ],
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

const uVisaSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL_URL}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.trip-law.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'U Visa Immigration Lawyer in Lakeland and Throughout Florida',
          item: CANONICAL_URL,
        },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': `${CANONICAL_URL}#webpage`,
      url: CANONICAL_URL,
      name: META_TITLE,
      description: META_DESCRIPTION,
      inLanguage: 'en-US',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://www.trip-law.com/#website',
        url: 'https://www.trip-law.com/',
        name: 'Trip Law',
      },
      mainEntity: {
        '@id': `${CANONICAL_URL}#legalservice`,
      },
      primaryImageOfPage: {
        '@id': `${CANONICAL_URL}#og-image`,
      },
      breadcrumb: {
        '@id': `${CANONICAL_URL}#breadcrumb`,
      },
    },
    {
      '@type': ['LegalService', 'Attorney'],
      '@id': `${CANONICAL_URL}#legalservice`,
      name: 'Trip Law',
      url: CANONICAL_URL,
      telephone: '+1-863-599-6735',
      email: 'info@trip-law.com',
      image: [
        `https://www.trip-law.com${ogFeature.src}`,
        `https://www.trip-law.com${attorneyConsultation.src}`,
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1820 Florida Ave S, Suite C',
        addressLocality: 'Lakeland',
        addressRegion: 'FL',
        postalCode: '33803',
        addressCountry: 'US',
      },
      founder: {
        '@type': 'Person',
        name: 'Hardam Tripathi',
      },
      serviceType: 'U Visa Immigration Lawyer in Lakeland and Throughout Florida',
      areaServed: {
        '@type': 'Country',
        name: 'United States',
      },
    },
    ...schemaImages,
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL_URL}#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Which Officials May Sign the Certification?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Police chiefs and county sheriffs can sign your certification. State prosecutors and judges are also authorized signers. Federal law enforcement officers and child protective services can sign the form. The Department of Labor and the EEOC can also authorize your request.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does a Certification Guarantee U Visa Approval?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. A valid Supplement B satisfies statutory helpfulness requirement. But USCIS makes the immigration decision.',
          },
        },
        {
          '@type': 'Question',
          name: 'What Can I Do if Law Enforcement Declines to Sign?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'If an agency refuses to sign, our u visa lawyer can resubmit the request with more evidence. We can also speak directly with agency leadership to resolve the issue.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I Apply for a U Visa Without Legal Representation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, you’re legally allowed to file a U visa petition on your own. However there’s very high rates of rejection or denial without having a lawyer. These denials usually happen because of missing waivers or expired certifications. Inadequate supporting evidence can also cause the government to reject your case.',
          },
        },
      ],
    },
  ],
};

export default function UVisaImmigrationLawyerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(uVisaSchema) }}
      />
      <main className="min-h-screen bg-white">
        <HeroSection />
        <EligibilitySection />
        <PathwaysSection />
        <ApplicationProcessSection />
        <DocumentsSection />
        <DenialReasonsSection />
        <HighRiskCasesSection />
        <ProcessTimelineSection />
        <BenefitsSection />
        <PreparationSection />
        <FeesWaiverSection />
        <WhyChooseUsSection />
        <ProvenProcessSection />
        <ComparisonSection />
        <PracticeAreasCitiesSection />
        <TestimonialsSection />
        <FinalCtaSection />
        <FaqSection />
      </main>
    </>
  );
}
