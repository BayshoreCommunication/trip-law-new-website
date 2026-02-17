export default async function GetBlogBySlug(slug) {
  try {
    const url = `https://backend-triplaw.vercel.app/site/blog/${slug}`;

    const response = await fetch(url, {
      next: { revalidate: 200 },
    });
    
    if (!response.ok) {
      console.error('Failed to fetch blog details:', response.status);
      return null;
    }
    
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error('Error fetching blog details:', error);
    return null;
  }
}
