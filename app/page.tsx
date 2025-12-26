'use client';
import Link from 'next/link';
import { getAllProjects, Project } from '@/lib/wordpress';

export const dynamic = 'force-dynamic';
export default async function Home() {
  let projects: Project[] = [];
  let featuredProjects: Project[] = [];
  
  try {
    projects = await getAllProjects();
    featuredProjects = projects.filter(p => p.acf.featured);
  } catch (error) {
    console.error('Failed to fetch projects:', error);
    // Continue with empty arrays
  }
   
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="py-32 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            Hi, I'm Dylan Giddens
          </h1>
          <h2 className="text-3xl md:text-4xl font-light mb-8">
            <span className="text-[#00ff88]">Frontend Developer</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed">
            I build modern web applications with React, Next.js, and TypeScript. 
            Currently seeking frontend developer opportunities where I can create 
            exceptional user experiences.
          </p>
          <Link 
            href="/projects"
            className="inline-block bg-[#00ff88] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#00dd77] transition-colors"
          >
            View My Work
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="py-20 px-4 bg-[#111111]">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <div 
                  key={project.id} 
                  className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-gray-800 hover:border-[#00ff88] transition-colors"
                >
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3 text-[#00ff88]">
                      {project.title.rendered}
                    </h3>
                    <div 
                      className="text-gray-400 mb-6 prose prose-invert"
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
                    <div className="flex gap-6">
                      {project.acf.github_url && (
                        <a 
                          href={project.acf.github_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#00ff88] hover:text-[#00dd77] transition-colors font-medium"
                        >
                          View Code →
                        </a>
                      )}
                      {project.acf.live_demo_url && (
                        <a 
                          href={project.acf.live_demo_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#00ff88] hover:text-[#00dd77] transition-colors font-medium"
                        >
                          Live Demo →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}