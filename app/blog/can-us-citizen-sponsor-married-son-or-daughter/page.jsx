import PageHeroSection from "@/components/shared/PageHeroSection";
import CanUsCitizenSponsorMarriedChildGuide from "@/components/static-blogs/blogs/can-us-citizen-sponsor-married-son-or-daughter";
import {
  SPONSOR_MARRIED_CHILD_ARTICLE_TITLE,
  SPONSOR_MARRIED_CHILD_FEATURE_IMAGE,
  SPONSOR_MARRIED_CHILD_FEATURE_IMAGE_ALT,
  SPONSOR_MARRIED_CHILD_META_DESCRIPTION,
  SPONSOR_MARRIED_CHILD_META_TITLE,
  SPONSOR_MARRIED_CHILD_SLUG,
} from "@/components/static-blogs/blogs/canUsCitizenSponsorMarriedSonOrDaughterMeta";
import GetAllPostData from "@/lib/GetAllPostData";

const canonicalUrl = `https://www.trip-law.com/blog/${SPONSOR_MARRIED_CHILD_SLUG}`;
const featureImageUrl = `https://www.trip-law.com${SPONSOR_MARRIED_CHILD_FEATURE_IMAGE}`;

export const metadata = {
  title: `${SPONSOR_MARRIED_CHILD_META_TITLE} | Trip Law`,
  description: SPONSOR_MARRIED_CHILD_META_DESCRIPTION,
  alternates: {
    canonical: canonicalUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: SPONSOR_MARRIED_CHILD_META_TITLE,
    description: SPONSOR_MARRIED_CHILD_META_DESCRIPTION,
    images: [
      {
        url: featureImageUrl,
        width: 1000,
        height: 510,
        alt: SPONSOR_MARRIED_CHILD_FEATURE_IMAGE_ALT,
      },
    ],
    url: canonicalUrl,
    type: "article",
    siteName: "Trip Law",
  },
  twitter: {
    card: "summary_large_image",
    title: SPONSOR_MARRIED_CHILD_META_TITLE,
    description: SPONSOR_MARRIED_CHILD_META_DESCRIPTION,
    images: [featureImageUrl],
  },
};

export default async function CanUsCitizenSponsorMarriedChildPage() {
  const allBlogsData = await GetAllPostData();

  return (
    <>
      <PageHeroSection image="/assets/hero-img/blog.jpg" titleH2="Blog" />
      <CanUsCitizenSponsorMarriedChildGuide
        allBlogsData={allBlogsData}
      />
    </>
  );
}
