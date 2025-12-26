import { getAllProjects, Project } from '@/lib/wordpress';
import Image from 'next/image';

export default async function ProjectsPage() {
  let projects: Project[] = [];
  
  try {
    projects = await getAllProjects();
  } catch (error) {
    console.error('Failed to fetch projects:', error);
    // Continue with empty array
  }
  
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="container mx-auto px-4 py-20 max-w-6xl">
        <h1 className="text-5xl font-bold mb-4">Projects</h1>
        <p className="text-xl text-gray-400 mb-16">
          A collection of my recent work
        </p>
        
        {projects.length === 0 ? (
          <p className="text-gray-400">No projects available at the moment.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-gray-800 hover:border-[#00ff88] transition-all duration-300 hover:transform hover:scale-[1.02]"
              >
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
                      <a 
                        href={project.acf.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-[#00ff88] transition-colors font-medium"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Code
                      </a>
                    )}
                    
                    {project.acf.live_demo_url && (
                      <a 
                        href={project.acf.live_demo_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-[#00ff88] transition-colors font-medium"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}