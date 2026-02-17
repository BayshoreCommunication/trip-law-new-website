export default async function GetAllPostData(page = 1, limit = 9) {
  try {
    // Construct URL with pagination parameters
    const url = new URL('https://backend-triplaw.vercel.app/site/blog');
    url.searchParams.set('page', page.toString());
    url.searchParams.set('limit', limit.toString());

    const bloData = await fetch(url.toString(), {
      next: { revalidate: 200 },
    });
    
    if (!bloData.ok) {
      console.error('Failed to fetch blog data:', bloData.status);
      return { data: [], pagination: null };
    }
    
    const response = await bloData.json();
    
    // Return the full response with pagination metadata
    return response;
  } catch (error) {
    console.error('Error fetching blog data:', error);
    return { data: [], pagination: null };
  }
}
