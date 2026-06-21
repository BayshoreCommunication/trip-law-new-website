import PageHeroSection from "@/components/shared/PageHeroSection";
import WorkInUsWhileImmigrationCasePending from "@/components/static-blogs/blogs/while-your-immigration-case-is-pending";
import {
  PENDING_CASE_WORK_ARTICLE_TITLE,
  PENDING_CASE_WORK_FEATURE_IMAGE,
  PENDING_CASE_WORK_FEATURE_IMAGE_ALT,
  PENDING_CASE_WORK_META_DESCRIPTION,
  PENDING_CASE_WORK_META_TITLE,
  PENDING_CASE_WORK_SLUG,
} from "@/components/static-blogs/blogs/whileYourImmigrationCaseIsPendingMeta";
import GetAllPostData from "@/lib/GetAllPostData";

const canonicalUrl = `https://www.trip-law.com/blog/${PENDING_CASE_WORK_SLUG}`;
const featureImageUrl = `https://www.trip-law.com${PENDING_CASE_WORK_FEATURE_IMAGE}`;

export const metadata = {
  title: `${PENDING_CASE_WORK_META_TITLE} | Trip Law`,
  description: PENDING_CASE_WORK_META_DESCRIPTION,
  alternates: {
    canonical: canonicalUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: PENDING_CASE_WORK_META_TITLE,
    description: PENDING_CASE_WORK_META_DESCRIPTION,
    images: [
      {
        url: featureImageUrl,
        width: 1000,
        height: 510,
        alt: PENDING_CASE_WORK_FEATURE_IMAGE_ALT,
      },
    ],
    url: canonicalUrl,
    type: "article",
    siteName: "Trip Law",
  },
  twitter: {
    card: "summary_large_image",
    title: PENDING_CASE_WORK_META_TITLE,
    description: PENDING_CASE_WORK_META_DESCRIPTION,
    images: [featureImageUrl],
  },
};

export default async function WorkInUsWhileImmigrationCasePendingPage() {
  const allBlogsData = await GetAllPostData();
  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: PENDING_CASE_WORK_ARTICLE_TITLE,
    description: PENDING_CASE_WORK_META_DESCRIPTION,
    image: featureImageUrl,
    mainEntityOfPage: canonicalUrl,
    datePublished: "2026-06-21",
    dateModified: "2026-06-21",
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
      <WorkInUsWhileImmigrationCasePending
        allBlogsData={allBlogsData}
      />
    </>
  );
}
