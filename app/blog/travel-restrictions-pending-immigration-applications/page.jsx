import PageHeroSection from "@/components/shared/PageHeroSection";
import HowTravelRestrictionsAffectPendingImmigrationApplications from "@/components/static-blogs/blogs/How Travel Restrictions Affect Pending Immigration Applications";
import {
  TRAVEL_RESTRICTIONS_ARTICLE_TITLE,
  TRAVEL_RESTRICTIONS_FEATURE_IMAGE,
  TRAVEL_RESTRICTIONS_FEATURE_IMAGE_ALT,
  TRAVEL_RESTRICTIONS_META_DESCRIPTION,
  TRAVEL_RESTRICTIONS_META_TITLE,
  TRAVEL_RESTRICTIONS_SLUG,
} from "@/components/static-blogs/blogs/travelRestrictionsMeta";
import GetAllPostData from "@/lib/GetAllPostData";

const canonicalUrl = `https://www.trip-law.com/blog/${TRAVEL_RESTRICTIONS_SLUG}`;
const featureImageUrl = `https://www.trip-law.com${TRAVEL_RESTRICTIONS_FEATURE_IMAGE}`;

export const metadata = {
  title: `${TRAVEL_RESTRICTIONS_META_TITLE} | Trip Law`,
  description: TRAVEL_RESTRICTIONS_META_DESCRIPTION,
  alternates: {
    canonical: canonicalUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: TRAVEL_RESTRICTIONS_META_TITLE,
    description: TRAVEL_RESTRICTIONS_META_DESCRIPTION,
    images: [
      {
        url: featureImageUrl,
        width: 1000,
        height: 510,
        alt: TRAVEL_RESTRICTIONS_FEATURE_IMAGE_ALT,
      },
    ],
    url: canonicalUrl,
    type: "article",
    siteName: "Trip Law",
  },
  twitter: {
    card: "summary_large_image",
    title: TRAVEL_RESTRICTIONS_META_TITLE,
    description: TRAVEL_RESTRICTIONS_META_DESCRIPTION,
    images: [featureImageUrl],
  },
};

export default async function TravelRestrictionsImmigrationStatusPage() {
  const allBlogsData = await GetAllPostData();
  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: TRAVEL_RESTRICTIONS_ARTICLE_TITLE,
    description: TRAVEL_RESTRICTIONS_META_DESCRIPTION,
    image: featureImageUrl,
    mainEntityOfPage: canonicalUrl,
    datePublished: "2026-06-15",
    dateModified: "2026-06-15",
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
      <HowTravelRestrictionsAffectPendingImmigrationApplications
        allBlogsData={allBlogsData}
      />
    </>
  );
}
