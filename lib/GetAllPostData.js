export default async function GetAllPostData() {
  try {
    const bloData = await fetch('https://backend-triplaw.vercel.app/site/blog', {
      next: { revalidate: 200 },
    });
    
    if (!bloData.ok) {
      console.error('Failed to fetch blog data:', bloData.status);
      return { data: [] };
    }
    
    return bloData.json();
  } catch (error) {
    console.error('Error fetching blog data:', error);
    return { data: [] };
  }
}
