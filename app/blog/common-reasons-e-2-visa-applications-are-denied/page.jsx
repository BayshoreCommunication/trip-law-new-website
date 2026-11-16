import PageHeroSection from "@/components/shared/PageHeroSection";
import CommonReasonsE2VisaApplicationsAreDenied from "@/components/static-blogs/blogs/common-reasons-e-2-visa-applications-are-denied";
import {
  COMMON_REASONS_E2_DENIED_CANONICAL_URL,
  COMMON_REASONS_E2_DENIED_FEATURE_IMAGE,
  COMMON_REASONS_E2_DENIED_FEATURE_IMAGE_ALT,
  COMMON_REASONS_E2_DENIED_META_DESCRIPTION,
  COMMON_REASONS_E2_DENIED_META_TITLE,
} from "@/components/static-blogs/blogs/commonReasonsE2VisaApplicationsAreDeniedMeta";
import GetAllPostData from "@/lib/GetAllPostData";

const canonicalUrl = COMMON_REASONS_E2_DENIED_CANONICAL_URL;
const featureImageUrl = `https://www.trip-law.com${COMMON_REASONS_E2_DENIED_FEATURE_IMAGE}`;

export const metadata = {
  title: `${COMMON_REASONS_E2_DENIED_META_TITLE} | Trip Law`,
  description: COMMON_REASONS_E2_DENIED_META_DESCRIPTION,
  alternates: {
    canonical: canonicalUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: COMMON_REASONS_E2_DENIED_META_TITLE,
    description: COMMON_REASONS_E2_DENIED_META_DESCRIPTION,
    images: [
      {
        url: featureImageUrl,
        width: 1000,
        height: 510,
        alt: COMMON_REASONS_E2_DENIED_FEATURE_IMAGE_ALT,
      },
    ],
    url: canonicalUrl,
    type: "article",
    siteName: "Trip Law",
  },
  twitter: {
    card: "summary_large_image",
    title: COMMON_REASONS_E2_DENIED_META_TITLE,
    description: COMMON_REASONS_E2_DENIED_META_DESCRIPTION,
    images: [featureImageUrl],
  },
};

export default async function CommonReasonsE2VisaApplicationsAreDeniedPage() {
  const allBlogsData = await GetAllPostData();

  return (
    <>
      <PageHeroSection image="/assets/hero-img/blog.jpg" titleH2="Blog" />
      <CommonReasonsE2VisaApplicationsAreDenied allBlogsData={allBlogsData} />
    </>
  );
}
