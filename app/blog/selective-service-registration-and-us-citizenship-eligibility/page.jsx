import PageHeroSection from "@/components/shared/PageHeroSection";
import SelectiveServiceRegistrationAndUsCitizenshipEligibility from "@/components/static-blogs/blogs/selective-service-registration-and-us-citizenship-eligibility";
import {
  SELECTIVE_SERVICE_REGISTRATION_CANONICAL_URL,
  SELECTIVE_SERVICE_REGISTRATION_FEATURE_IMAGE,
  SELECTIVE_SERVICE_REGISTRATION_FEATURE_IMAGE_ALT,
  SELECTIVE_SERVICE_REGISTRATION_META_DESCRIPTION,
  SELECTIVE_SERVICE_REGISTRATION_META_TITLE,
} from "@/components/static-blogs/blogs/selectiveServiceRegistrationMeta";
import GetAllPostData from "@/lib/GetAllPostData";

const canonicalUrl = SELECTIVE_SERVICE_REGISTRATION_CANONICAL_URL;
const featureImageUrl = `https://www.trip-law.com${SELECTIVE_SERVICE_REGISTRATION_FEATURE_IMAGE}`;

export const metadata = {
  title: `${SELECTIVE_SERVICE_REGISTRATION_META_TITLE} | Trip Law`,
  description: SELECTIVE_SERVICE_REGISTRATION_META_DESCRIPTION,
  alternates: {
    canonical: canonicalUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: SELECTIVE_SERVICE_REGISTRATION_META_TITLE,
    description: SELECTIVE_SERVICE_REGISTRATION_META_DESCRIPTION,
    images: [
      {
        url: featureImageUrl,
        width: 1000,
        height: 510,
        alt: SELECTIVE_SERVICE_REGISTRATION_FEATURE_IMAGE_ALT,
      },
    ],
    url: canonicalUrl,
    type: "article",
    siteName: "Trip Law",
  },
  twitter: {
    card: "summary_large_image",
    title: SELECTIVE_SERVICE_REGISTRATION_META_TITLE,
    description: SELECTIVE_SERVICE_REGISTRATION_META_DESCRIPTION,
    images: [featureImageUrl],
  },
};

export default async function SelectiveServiceRegistrationPage() {
  const allBlogsData = await GetAllPostData();

  return (
    <>
      <PageHeroSection image="/assets/hero-img/blog.jpg" titleH2="Blog" />
      <SelectiveServiceRegistrationAndUsCitizenshipEligibility
        allBlogsData={allBlogsData}
      />
    </>
  );
}
