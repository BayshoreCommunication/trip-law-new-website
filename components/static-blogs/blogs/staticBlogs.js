import {
  VISA_OVERSTAY_DESCRIPTION,
  VISA_OVERSTAY_FEATURE_IMAGE,
  VISA_OVERSTAY_FEATURE_IMAGE_ALT,
  VISA_OVERSTAY_TITLE,
} from "./visaOverstayMeta";

export const staticBlogs = [
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
