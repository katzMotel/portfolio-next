const WP_API_URL = process.env.NEXT_PUBLIC_WP_API_URL;

interface WPImage {
  ID?: number;
  id?: number;
  url: string;
  alt?: string;
  title?: string;
  sizes?: {
    large?: string;
    medium?: string;
    thumbnail?: string;
  };
}

interface ACFFields {
  github_url: string;
  live_demo_url: string;
  tech_stack: string;
  project_image: WPImage;
  featured: boolean;
  project_gallery?: WPImage[];
}

export interface Project {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  featured_media: number;
  acf: ACFFields;
}

export async function getAllProjects(): Promise<Project[]> {
  const apiUrl = `${WP_API_URL}/wp/v2/projects`;
  
  console.log('Fetching from:', apiUrl); // Add logging
  
  try {
    const res = await fetch(apiUrl, {
      next: { revalidate: 3600 }
    });
    
    console.log('Response status:', res.status); // Add logging
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const data = await res.json();
    console.log('Fetched projects count:', data.length); // Add logging
    return data;
  } catch (error) {
    console.error('Fetch error details:', error); // More detailed error
    throw new Error('Failed to fetch projects');
  }
}

export async function getProjectBySlug(slug: string): Promise<Project> {
  const res = await fetch(`${WP_API_URL}/wp/v2/projects?slug=${slug}`);
  const projects: Project[] = await res.json();
  return projects[0];
}

export async function getAllProjectSlugs(): Promise<string[]> {
  const projects = await getAllProjects();
  return projects.map(project => project.slug);
}
