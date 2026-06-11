import PageHeroSection from "@/components/shared/PageHeroSection";
import HowCriminalChargesCanImpact from "@/components/static-blogs/blogs/how-criminal-charges-can-impact";
import {
  CRIMINAL_CHARGES_ARTICLE_TITLE,
  CRIMINAL_CHARGES_FEATURE_IMAGE,
  CRIMINAL_CHARGES_FEATURE_IMAGE_ALT,
  CRIMINAL_CHARGES_META_DESCRIPTION,
  CRIMINAL_CHARGES_META_TITLE,
  CRIMINAL_CHARGES_SLUG,
} from "@/components/static-blogs/blogs/criminalChargesMeta";
import GetAllPostData from "@/lib/GetAllPostData";

const canonicalUrl = `https://www.trip-law.com/blog/${CRIMINAL_CHARGES_SLUG}`;
const featureImageUrl = `https://www.trip-law.com${CRIMINAL_CHARGES_FEATURE_IMAGE}`;

export const metadata = {
  title: `${CRIMINAL_CHARGES_META_TITLE} | Trip Law`,
  description: CRIMINAL_CHARGES_META_DESCRIPTION,
  alternates: {
    canonical: canonicalUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: CRIMINAL_CHARGES_META_TITLE,
    description: CRIMINAL_CHARGES_META_DESCRIPTION,
    images: [
      {
        url: featureImageUrl,
        width: 1000,
        height: 510,
        alt: CRIMINAL_CHARGES_FEATURE_IMAGE_ALT,
      },
    ],
    url: canonicalUrl,
    type: "article",
    siteName: "Trip Law",
  },
  twitter: {
    card: "summary_large_image",
    title: CRIMINAL_CHARGES_META_TITLE,
    description: CRIMINAL_CHARGES_META_DESCRIPTION,
    images: [featureImageUrl],
  },
};

export default async function CriminalChargesImmigrationStatusPage() {
  const allBlogsData = await GetAllPostData();
  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: CRIMINAL_CHARGES_ARTICLE_TITLE,
    description: CRIMINAL_CHARGES_META_DESCRIPTION,
    image: featureImageUrl,
    mainEntityOfPage: canonicalUrl,
    datePublished: "2026-05-23",
    dateModified: "2026-05-23",
    author: {
      "@type": "Person",
      name: "Hardam Tripathi",
    },
    publisher: {
      "@type": "Organization",
      name: "Trip Law",
      logo: {
        "@type": "ImageObject",
        url: "https://www.trip-law.com/assets/site-logo/trip-law-logo.png",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <PageHeroSection image="/assets/hero-img/blog.jpg" titleH2="Blog" />
      <HowCriminalChargesCanImpact allBlogsData={allBlogsData} />
    </>
  );
}
