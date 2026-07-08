import PageHeroSection from "@/components/shared/PageHeroSection";
import CommonReasonsImmigrationApplicationsGetDenied from "@/components/static-blogs/blogs/Common Reasons Immigration Applications Get Denied and How to Avoid Them";
import {
  DENIED_APPLICATIONS_ARTICLE_TITLE,
  DENIED_APPLICATIONS_FEATURE_IMAGE,
  DENIED_APPLICATIONS_FEATURE_IMAGE_ALT,
  DENIED_APPLICATIONS_META_DESCRIPTION,
  DENIED_APPLICATIONS_META_TITLE,
  DENIED_APPLICATIONS_SLUG,
} from "@/components/static-blogs/blogs/commonReasonsImmigrationApplicationsGetDeniedMeta";
import GetAllPostData from "@/lib/GetAllPostData";

const canonicalUrl = `https://www.trip-law.com/blog/${DENIED_APPLICATIONS_SLUG}`;
const featureImageUrl = `https://www.trip-law.com${DENIED_APPLICATIONS_FEATURE_IMAGE}`;

export const metadata = {
  title: `${DENIED_APPLICATIONS_META_TITLE} | Trip Law`,
  description: DENIED_APPLICATIONS_META_DESCRIPTION,
  alternates: {
    canonical: canonicalUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: DENIED_APPLICATIONS_META_TITLE,
    description: DENIED_APPLICATIONS_META_DESCRIPTION,
    images: [
      {
        url: featureImageUrl,
        width: 1000,
        height: 510,
        alt: DENIED_APPLICATIONS_FEATURE_IMAGE_ALT,
      },
    ],
    url: canonicalUrl,
    type: "article",
    siteName: "Trip Law",
  },
  twitter: {
    card: "summary_large_image",
    title: DENIED_APPLICATIONS_META_TITLE,
    description: DENIED_APPLICATIONS_META_DESCRIPTION,
    images: [featureImageUrl],
  },
};

export default async function CommonReasonsImmigrationApplicationsGetDeniedPage() {
  const allBlogsData = await GetAllPostData();
  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: DENIED_APPLICATIONS_ARTICLE_TITLE,
    description: DENIED_APPLICATIONS_META_DESCRIPTION,
    image: featureImageUrl,
    mainEntityOfPage: canonicalUrl,
    datePublished: "2026-07-08",
    dateModified: "2026-07-08",
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
      <CommonReasonsImmigrationApplicationsGetDenied
        allBlogsData={allBlogsData}
      />
    </>
  );
}
