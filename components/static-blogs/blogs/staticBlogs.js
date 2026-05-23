import {
  VISA_OVERSTAY_DESCRIPTION,
  VISA_OVERSTAY_FEATURE_IMAGE,
  VISA_OVERSTAY_FEATURE_IMAGE_ALT,
  VISA_OVERSTAY_TITLE,
} from "./visaOverstayMeta";
import {
  ENTREPRENEUR_ARTICLE_DESCRIPTION,
  ENTREPRENEUR_ARTICLE_TITLE,
  ENTREPRENEUR_FEATURE_IMAGE,
  ENTREPRENEUR_FEATURE_IMAGE_ALT,
  ENTREPRENEUR_FEATURE_IMAGE_CAPTION,
  ENTREPRENEUR_FEATURE_IMAGE_DESCRIPTION,
  ENTREPRENEUR_FEATURE_IMAGE_TITLE,
  ENTREPRENEUR_SLUG,
} from "./entrepreneurVisaMeta";
import {
  CRIMINAL_CHARGES_ARTICLE_DESCRIPTION,
  CRIMINAL_CHARGES_ARTICLE_TITLE,
  CRIMINAL_CHARGES_FEATURE_IMAGE,
  CRIMINAL_CHARGES_FEATURE_IMAGE_ALT,
  CRIMINAL_CHARGES_FEATURE_IMAGE_CAPTION,
  CRIMINAL_CHARGES_FEATURE_IMAGE_DESCRIPTION,
  CRIMINAL_CHARGES_FEATURE_IMAGE_TITLE,
  CRIMINAL_CHARGES_SLUG,
} from "./criminalChargesMeta";

export const staticBlogs = [
  {
    slug: CRIMINAL_CHARGES_SLUG,
    title: CRIMINAL_CHARGES_ARTICLE_TITLE,
    body: CRIMINAL_CHARGES_ARTICLE_DESCRIPTION,
    createdAt: "2026-05-23",
    published: true,
    featuredImage: {
      image: {
        url: CRIMINAL_CHARGES_FEATURE_IMAGE,
      },
      altText: CRIMINAL_CHARGES_FEATURE_IMAGE_ALT,
      title: CRIMINAL_CHARGES_FEATURE_IMAGE_TITLE,
      description: CRIMINAL_CHARGES_FEATURE_IMAGE_DESCRIPTION,
      caption: CRIMINAL_CHARGES_FEATURE_IMAGE_CAPTION,
    },
  },
  {
    slug: ENTREPRENEUR_SLUG,
    title: ENTREPRENEUR_ARTICLE_TITLE,
    body: ENTREPRENEUR_ARTICLE_DESCRIPTION,
    createdAt: "2026-05-14",
    published: true,
    featuredImage: {
      image: {
        url: ENTREPRENEUR_FEATURE_IMAGE,
      },
      altText: ENTREPRENEUR_FEATURE_IMAGE_ALT,
      title: ENTREPRENEUR_FEATURE_IMAGE_TITLE,
      description: ENTREPRENEUR_FEATURE_IMAGE_DESCRIPTION,
      caption: ENTREPRENEUR_FEATURE_IMAGE_CAPTION,
    },
  },
  {
    slug: "visa-overstay",
    title: VISA_OVERSTAY_TITLE,
    body: VISA_OVERSTAY_DESCRIPTION,
    createdAt: "2026-05-10",
    published: true,
    featuredImage: {
      image: {
        url: VISA_OVERSTAY_FEATURE_IMAGE,
      },
      altText: VISA_OVERSTAY_FEATURE_IMAGE_ALT,
    },
  },
];

export function getPublishedBlogsWithStatic(blogPostData) {
  const blogsBySlug = new Map();
  const publishedBlogs = [
    ...staticBlogs,
    ...(blogPostData?.data?.filter((blog) => blog.published === true) || []),
  ];

  publishedBlogs.forEach((blog) => {
    if (blog?.slug && !blogsBySlug.has(blog.slug)) {
      blogsBySlug.set(blog.slug, blog);
    }
  });

  return [...blogsBySlug.values()].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
}
