'use client';

import { useState, useEffect } from 'react';
import { Project } from '@/lib/wordpress';
import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_WP_API_URL}/wp/v2/projects`);
        
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        console.error('Failed to fetch projects:', err);
        setError(err instanceof Error ? err.message : 'Failed to load projects');
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);
  
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="container mx-auto px-4 py-20 max-w-6xl">
        <h1 className="text-5xl font-bold mb-4">Projects</h1>
        <p className="text-xl text-gray-400 mb-16">
          A collection of my recent work
        </p>
        
        {loading && (
          <p className="text-gray-400">Loading projects...</p>
        )}
        
        {error && (
          <p className="text-red-500 mb-4">Error: {error}</p>
        )}
        
        {!loading && projects.length === 0 && !error && (
          <p className="text-gray-400">No projects available at the moment.</p>
        )}
        
        {projects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link 
                key={project.id} 
                href={`/projects/${project.slug}`}
                className="block"
              >
                <div className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-gray-800 hover:border-[#00ff88] transition-all duration-300 hover:transform hover:scale-[1.02]">
                  {/* Project Image */}
                  {project.acf.project_image && (
                    <div className="relative h-48 w-full bg-gray-900">
                      <Image
                        src={project.acf.project_image.url}
                        alt={project.title.rendered}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-3 text-[#00ff88]">
                      {project.title.rendered}
                    </h2>
                    
                    <div 
                      className="text-gray-400 mb-4 line-clamp-3 prose prose-invert" 
                      dangerouslySetInnerHTML={{ __html: project.content.rendered }}
                    />
                    
                    {project.acf.tech_stack && (
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {project.acf.tech_stack.split(',').map((tech, index) => (
                            <span 
                              key={index}
                              className="px-3 py-1 bg-[#0a0a0a] text-gray-300 text-sm rounded-full border border-gray-700"
                            >
                              {tech.trim()}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div className="flex gap-4 pt-4 border-t border-gray-800">
                      {project.acf.github_url && (
                        <span className="flex items-center gap-2 text-gray-400 hover:text-[#00ff88] transition-colors font-medium">
                          <Github className="w-5 h-5" />
                          Code
                        </span>
                      )}
                      
                      {project.acf.live_demo_url && (
                        <span className="flex items-center gap-2 text-gray-400 hover:text-[#00ff88] transition-colors font-medium">
                          <ExternalLink className="w-5 h-5" />
                          Demo
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}