import PageHeroSection from "@/components/shared/PageHeroSection";
import WhatAreYourRightsDuringAnImmigrationRaidOrArrest from "@/components/static-blogs/blogs/What Are Your Rights During an Immigration Raid or Arrest";
import {
  RAID_RIGHTS_ARTICLE_TITLE,
  RAID_RIGHTS_FEATURE_IMAGE,
  RAID_RIGHTS_FEATURE_IMAGE_ALT,
  RAID_RIGHTS_META_DESCRIPTION,
  RAID_RIGHTS_META_TITLE,
  RAID_RIGHTS_SLUG,
} from "@/components/static-blogs/blogs/whatAreYourRightsDuringAnImmigrationRaidOrArrestMeta";
import GetAllPostData from "@/lib/GetAllPostData";

const canonicalUrl = `https://www.trip-law.com/blog/${RAID_RIGHTS_SLUG}`;
const featureImageUrl = `https://www.trip-law.com${RAID_RIGHTS_FEATURE_IMAGE}`;

export const metadata = {
  title: `${RAID_RIGHTS_META_TITLE} | Trip Law`,
  description: RAID_RIGHTS_META_DESCRIPTION,
  alternates: {
    canonical: canonicalUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: RAID_RIGHTS_META_TITLE,
    description: RAID_RIGHTS_META_DESCRIPTION,
    images: [
      {
        url: featureImageUrl,
        width: 1000,
        height: 510,
        alt: RAID_RIGHTS_FEATURE_IMAGE_ALT,
      },
    ],
    url: canonicalUrl,
    type: "article",
    siteName: "Trip Law",
  },
  twitter: {
    card: "summary_large_image",
    title: RAID_RIGHTS_META_TITLE,
    description: RAID_RIGHTS_META_DESCRIPTION,
    images: [featureImageUrl],
  },
};

export default async function WhatAreYourRightsDuringAnImmigrationRaidOrArrestPage() {
  const allBlogsData = await GetAllPostData();
  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: RAID_RIGHTS_ARTICLE_TITLE,
    description: RAID_RIGHTS_META_DESCRIPTION,
    image: featureImageUrl,
    mainEntityOfPage: canonicalUrl,
    datePublished: "2026-07-21",
    dateModified: "2026-07-21",
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
      <WhatAreYourRightsDuringAnImmigrationRaidOrArrest
        allBlogsData={allBlogsData}
      />
    </>
  );
}
