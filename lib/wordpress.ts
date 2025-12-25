const WP_API_URL = process.env.NEXT_PUBLIC_WP_API_URL;

interface WPImage {
  ID?: number;
  url: string;
}

interface ACFFields {
  github_url: string;
  live_demo_url: string;
  tech_stack: string;
  project_image: WPImage;
  featured: boolean;
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
  const res = await fetch(`${WP_API_URL}/wp/v2/projects`, {
    next: { revalidate: 3600 }
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch projects');
  }
  
  return res.json();
}

export async function getProjectBySlug(slug: string): Promise<Project> {
  const res = await fetch(`${WP_API_URL}/wp/v2/projects?slug=${slug}`);
  const projects: Project[] = await res.json();
  return projects[0];
}