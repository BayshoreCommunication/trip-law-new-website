import axios from 'axios';

export default async function GetBlogBySlug(slug) {
  try {
    const url = `https://backend-triplaw.vercel.app/site/blog/${slug}`;

    const response = await axios.get(url);
    
    return response.data.data;
  } catch (error) {
    console.error('Error fetching blog details:', error);
    return null;
  }
}
