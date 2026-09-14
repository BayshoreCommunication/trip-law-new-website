import PageHeroSection from "@/components/shared/PageHeroSection";
import AgeOutProtectionUnderTheChildStatusProtectionAct from "@/components/static-blogs/blogs/age-out-protection-under-the-child-status-protection-act";
import {
  AGE_OUT_PROTECTION_UNDER_THE_CHILD_STATUS_PROTECTION_ACT_CANONICAL_URL,
  AGE_OUT_PROTECTION_UNDER_THE_CHILD_STATUS_PROTECTION_ACT_FEATURE_IMAGE,
  AGE_OUT_PROTECTION_UNDER_THE_CHILD_STATUS_PROTECTION_ACT_FEATURE_IMAGE_ALT,
  AGE_OUT_PROTECTION_UNDER_THE_CHILD_STATUS_PROTECTION_ACT_META_DESCRIPTION,
  AGE_OUT_PROTECTION_UNDER_THE_CHILD_STATUS_PROTECTION_ACT_META_TITLE,
  AGE_OUT_PROTECTION_UNDER_THE_CHILD_STATUS_PROTECTION_ACT_SLUG,
} from "@/components/static-blogs/blogs/ageOutProtectionUnderTheChildStatusProtectionActMeta";
import GetAllPostData from "@/lib/GetAllPostData";

const canonicalUrl = `https://www.trip-law.com/blog/${AGE_OUT_PROTECTION_UNDER_THE_CHILD_STATUS_PROTECTION_ACT_SLUG}`;
const featureImageUrl = `https://www.trip-law.com${AGE_OUT_PROTECTION_UNDER_THE_CHILD_STATUS_PROTECTION_ACT_FEATURE_IMAGE}`;

export const metadata = {
  title: `${AGE_OUT_PROTECTION_UNDER_THE_CHILD_STATUS_PROTECTION_ACT_META_TITLE} | Trip Law`,
  description: AGE_OUT_PROTECTION_UNDER_THE_CHILD_STATUS_PROTECTION_ACT_META_DESCRIPTION,
  alternates: {
    canonical: canonicalUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: AGE_OUT_PROTECTION_UNDER_THE_CHILD_STATUS_PROTECTION_ACT_META_TITLE,
    description: AGE_OUT_PROTECTION_UNDER_THE_CHILD_STATUS_PROTECTION_ACT_META_DESCRIPTION,
    images: [
      {
        url: featureImageUrl,
        width: 1000,
        height: 510,
        alt: AGE_OUT_PROTECTION_UNDER_THE_CHILD_STATUS_PROTECTION_ACT_FEATURE_IMAGE_ALT,
      },
    ],
    url: canonicalUrl,
    type: "article",
    siteName: "Trip Law",
  },
  twitter: {
    card: "summary_large_image",
    title: AGE_OUT_PROTECTION_UNDER_THE_CHILD_STATUS_PROTECTION_ACT_META_TITLE,
    description: AGE_OUT_PROTECTION_UNDER_THE_CHILD_STATUS_PROTECTION_ACT_META_DESCRIPTION,
    images: [featureImageUrl],
  },
};

export default async function AgeOutProtectionUnderTheChildStatusProtectionActPage() {
  const allBlogsData = await GetAllPostData();

  return (
    <>
      <PageHeroSection image="/assets/hero-img/blog.jpg" titleH2="Blog" />
      <AgeOutProtectionUnderTheChildStatusProtectionAct allBlogsData={allBlogsData} />
    </>
  );
}
