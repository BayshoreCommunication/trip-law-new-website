import PageHeroSection from "@/components/shared/PageHeroSection";
import VisaOverstayArticle from "@/components/static-blogs/blogs/VisaOverstayArticle";
import {
  VISA_OVERSTAY_DESCRIPTION,
  VISA_OVERSTAY_FEATURE_IMAGE,
} from "@/components/static-blogs/blogs/visaOverstayMeta";
import GetAllPostData from "@/lib/GetAllPostData";

const canonicalUrl = "https://www.trip-law.com/blog/visa-overstay";
const featureImageUrl = `https://www.trip-law.com${VISA_OVERSTAY_FEATURE_IMAGE}`;

export const metadata = {
  title: "U.S. Visa Overstay, Risks and Solutions | Trip Law",
  description: VISA_OVERSTAY_DESCRIPTION,
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "U.S. Visa Overstay, Risks and Solutions",
    description: VISA_OVERSTAY_DESCRIPTION,
    images: [featureImageUrl],
    url: canonicalUrl,
    type: "article",
    siteName: "Trip Law",
  },
};

export default async function VisaOverstayPage() {
  const allBlogsData = await GetAllPostData();

  return (
    <>
      <PageHeroSection image="/assets/hero-img/blog.jpg" titleH2="Blog" />
      <VisaOverstayArticle allBlogsData={allBlogsData} />
    </>
  );
}
