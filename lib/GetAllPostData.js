import axios from 'axios';

// Data fetch

export default async function GetAllPostData(page = 1, limit = 9) {
  try {
    const url = `https://backend-triplawtest.vercel.app/site/blog?page=${page}&limit=${limit}`;
    
    const response = await axios.get(url);
    
    // Return the full response with pagination metadata
    return response.data;
  } catch (error) {
    console.error('Error fetching blog data:', error);
    return { data: [], pagination: null };
  }
}
