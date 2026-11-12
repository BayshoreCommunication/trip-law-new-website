import PageHeroSection from "@/components/shared/PageHeroSection";
import HowToPrepareAnE2BusinessPlan from "@/components/static-blogs/blogs/how-to-prepare-an-e-2-business-plan";
import {
  HOW_TO_PREPARE_AN_E2_BUSINESS_PLAN_CANONICAL_URL,
  HOW_TO_PREPARE_AN_E2_BUSINESS_PLAN_FEATURE_IMAGE,
  HOW_TO_PREPARE_AN_E2_BUSINESS_PLAN_FEATURE_IMAGE_ALT,
  HOW_TO_PREPARE_AN_E2_BUSINESS_PLAN_META_DESCRIPTION,
  HOW_TO_PREPARE_AN_E2_BUSINESS_PLAN_META_TITLE,
} from "@/components/static-blogs/blogs/howToPrepareAnE2BusinessPlanMeta";
import GetAllPostData from "@/lib/GetAllPostData";

const canonicalUrl = HOW_TO_PREPARE_AN_E2_BUSINESS_PLAN_CANONICAL_URL;
const featureImageUrl = `https://www.trip-law.com${HOW_TO_PREPARE_AN_E2_BUSINESS_PLAN_FEATURE_IMAGE}`;

export const metadata = {
  title: `${HOW_TO_PREPARE_AN_E2_BUSINESS_PLAN_META_TITLE} | Trip Law`,
  description: HOW_TO_PREPARE_AN_E2_BUSINESS_PLAN_META_DESCRIPTION,
  alternates: {
    canonical: canonicalUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: HOW_TO_PREPARE_AN_E2_BUSINESS_PLAN_META_TITLE,
    description: HOW_TO_PREPARE_AN_E2_BUSINESS_PLAN_META_DESCRIPTION,
    images: [
      {
        url: featureImageUrl,
        width: 1000,
        height: 510,
        alt: HOW_TO_PREPARE_AN_E2_BUSINESS_PLAN_FEATURE_IMAGE_ALT,
      },
    ],
    url: canonicalUrl,
    type: "article",
    siteName: "Trip Law",
  },
  twitter: {
    card: "summary_large_image",
    title: HOW_TO_PREPARE_AN_E2_BUSINESS_PLAN_META_TITLE,
    description: HOW_TO_PREPARE_AN_E2_BUSINESS_PLAN_META_DESCRIPTION,
    images: [featureImageUrl],
  },
};

export default async function HowToPrepareAnE2BusinessPlanPage() {
  const allBlogsData = await GetAllPostData();

  return (
    <>
      <PageHeroSection image="/assets/hero-img/blog.jpg" titleH2="Blog" />
      <HowToPrepareAnE2BusinessPlan allBlogsData={allBlogsData} />
    </>
  );
}

