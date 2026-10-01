import PageHeroSection from "@/components/shared/PageHeroSection";
import ConcurrentH1BEmploymentCanYouWorkTwoJobs from "@/components/static-blogs/blogs/concurrent-h-1b-employment-can-you-work-two-jobs";
import {
  CONCURRENT_H1B_EMPLOYMENT_CAN_YOU_WORK_TWO_JOBS_CANONICAL_URL,
  CONCURRENT_H1B_EMPLOYMENT_CAN_YOU_WORK_TWO_JOBS_FEATURE_IMAGE,
  CONCURRENT_H1B_EMPLOYMENT_CAN_YOU_WORK_TWO_JOBS_FEATURE_IMAGE_ALT,
  CONCURRENT_H1B_EMPLOYMENT_CAN_YOU_WORK_TWO_JOBS_META_DESCRIPTION,
  CONCURRENT_H1B_EMPLOYMENT_CAN_YOU_WORK_TWO_JOBS_META_TITLE,
  CONCURRENT_H1B_EMPLOYMENT_CAN_YOU_WORK_TWO_JOBS_SLUG,
} from "@/components/static-blogs/blogs/concurrentH1BEmploymentCanYouWorkTwoJobsMeta";
import GetAllPostData from "@/lib/GetAllPostData";

const canonicalUrl = `https://www.trip-law.com/blog/${CONCURRENT_H1B_EMPLOYMENT_CAN_YOU_WORK_TWO_JOBS_SLUG}`;
const featureImageUrl = `https://www.trip-law.com${CONCURRENT_H1B_EMPLOYMENT_CAN_YOU_WORK_TWO_JOBS_FEATURE_IMAGE}`;

export const metadata = {
  title: `${CONCURRENT_H1B_EMPLOYMENT_CAN_YOU_WORK_TWO_JOBS_META_TITLE} | Trip Law`,
  description: CONCURRENT_H1B_EMPLOYMENT_CAN_YOU_WORK_TWO_JOBS_META_DESCRIPTION,
  alternates: {
    canonical: canonicalUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: CONCURRENT_H1B_EMPLOYMENT_CAN_YOU_WORK_TWO_JOBS_META_TITLE,
    description: CONCURRENT_H1B_EMPLOYMENT_CAN_YOU_WORK_TWO_JOBS_META_DESCRIPTION,
    images: [
      {
        url: featureImageUrl,
        width: 1000,
        height: 510,
        alt: CONCURRENT_H1B_EMPLOYMENT_CAN_YOU_WORK_TWO_JOBS_FEATURE_IMAGE_ALT,
      },
    ],
    url: canonicalUrl,
    type: "article",
    siteName: "Trip Law",
  },
  twitter: {
    card: "summary_large_image",
    title: CONCURRENT_H1B_EMPLOYMENT_CAN_YOU_WORK_TWO_JOBS_META_TITLE,
    description: CONCURRENT_H1B_EMPLOYMENT_CAN_YOU_WORK_TWO_JOBS_META_DESCRIPTION,
    images: [featureImageUrl],
  },
};

export default async function ConcurrentH1BEmploymentCanYouWorkTwoJobsPage() {
  const allBlogsData = await GetAllPostData();

  return (
    <>
      <PageHeroSection image="/assets/hero-img/blog.jpg" titleH2="Blog" />
      <ConcurrentH1BEmploymentCanYouWorkTwoJobs allBlogsData={allBlogsData} />
    </>
  );
}
