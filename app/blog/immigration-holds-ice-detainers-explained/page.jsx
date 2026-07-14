import PageHeroSection from "@/components/shared/PageHeroSection";
import UnderstandingImmigrationHoldsAndIceDetainers from "@/components/static-blogs/blogs/Understanding Immigration Holds and ICE Detainers in Simple Terms";
import {
  IMMIGRATION_HOLDS_ARTICLE_TITLE,
  IMMIGRATION_HOLDS_FEATURE_IMAGE,
  IMMIGRATION_HOLDS_FEATURE_IMAGE_ALT,
  IMMIGRATION_HOLDS_META_DESCRIPTION,
  IMMIGRATION_HOLDS_META_TITLE,
  IMMIGRATION_HOLDS_SLUG,
} from "@/components/static-blogs/blogs/immigrationHoldsIceDetainersMeta";
import GetAllPostData from "@/lib/GetAllPostData";

const canonicalUrl = `https://www.trip-law.com/blog/${IMMIGRATION_HOLDS_SLUG}`;
const featureImageUrl = `https://www.trip-law.com${IMMIGRATION_HOLDS_FEATURE_IMAGE}`;

export const metadata = {
  title: `${IMMIGRATION_HOLDS_META_TITLE} | Trip Law`,
  description: IMMIGRATION_HOLDS_META_DESCRIPTION,
  alternates: {
    canonical: canonicalUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: IMMIGRATION_HOLDS_META_TITLE,
    description: IMMIGRATION_HOLDS_META_DESCRIPTION,
    images: [
      {
        url: featureImageUrl,
        width: 1000,
        height: 510,
        alt: IMMIGRATION_HOLDS_FEATURE_IMAGE_ALT,
      },
    ],
    url: canonicalUrl,
    type: "article",
    siteName: "Trip Law",
  },
  twitter: {
    card: "summary_large_image",
    title: IMMIGRATION_HOLDS_META_TITLE,
    description: IMMIGRATION_HOLDS_META_DESCRIPTION,
    images: [featureImageUrl],
  },
};

export default async function UnderstandingImmigrationHoldsAndIceDetainersPage() {
  const allBlogsData = await GetAllPostData();
  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: IMMIGRATION_HOLDS_ARTICLE_TITLE,
    description: IMMIGRATION_HOLDS_META_DESCRIPTION,
    image: featureImageUrl,
    mainEntityOfPage: canonicalUrl,
    datePublished: "2026-07-14",
    dateModified: "2026-07-14",
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
      <UnderstandingImmigrationHoldsAndIceDetainers
        allBlogsData={allBlogsData}
      />
    </>
  );
}
