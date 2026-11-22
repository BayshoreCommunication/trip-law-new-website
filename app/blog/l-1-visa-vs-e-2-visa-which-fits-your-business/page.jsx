import PageHeroSection from "@/components/shared/PageHeroSection";
import L1VisaVsE2VisaWhichFitsYourBusiness from "@/components/static-blogs/blogs/l-1-visa-vs-e-2-visa-which-fits-your-business";
import {
  L1_VS_E2_CANONICAL_URL,
  L1_VS_E2_FEATURE_IMAGE,
  L1_VS_E2_FEATURE_IMAGE_ALT,
  L1_VS_E2_META_DESCRIPTION,
  L1_VS_E2_META_TITLE,
} from "@/components/static-blogs/blogs/l1VisaVsE2VisaWhichFitsYourBusinessMeta";
import GetAllPostData from "@/lib/GetAllPostData";

const canonicalUrl = L1_VS_E2_CANONICAL_URL;
const featureImageUrl = `https://www.trip-law.com${L1_VS_E2_FEATURE_IMAGE}`;

export const metadata = {
  title: `${L1_VS_E2_META_TITLE} | Trip Law`,
  description: L1_VS_E2_META_DESCRIPTION,
  alternates: {
    canonical: canonicalUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: L1_VS_E2_META_TITLE,
    description: L1_VS_E2_META_DESCRIPTION,
    images: [
      {
        url: featureImageUrl,
        width: 1000,
        height: 510,
        alt: L1_VS_E2_FEATURE_IMAGE_ALT,
      },
    ],
    url: canonicalUrl,
    type: "article",
    siteName: "Trip Law",
  },
  twitter: {
    card: "summary_large_image",
    title: L1_VS_E2_META_TITLE,
    description: L1_VS_E2_META_DESCRIPTION,
    images: [featureImageUrl],
  },
};

export default async function L1VisaVsE2VisaWhichFitsYourBusinessPage() {
  const allBlogsData = await GetAllPostData();

  return (
    <>
      <PageHeroSection image="/assets/hero-img/blog.jpg" titleH2="Blog" />
      <L1VisaVsE2VisaWhichFitsYourBusiness allBlogsData={allBlogsData} />
    </>
  );
}
