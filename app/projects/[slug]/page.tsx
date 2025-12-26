'use client';
import { getProjectBySlug, Project } from "@/lib/wordpress";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function ProjectDetailPage({
    params,
}: {
    params: Promise<{slug: string}>;
}) {
    const { slug } = await params;
    let project: Project | null = null;

    try {
        project = await getProjectBySlug(slug);
    } catch (error) {
        console.error('Failed to fetch project:', error);
    }

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white">
            <div className="container mx-auto px-4 py-20 max-w-5xl">
                {/* Back button */}
                <Link 
                    href="/projects"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-[#00ff88] transition-colors mb-8"
                >
                    <ArrowLeft className="w-5 h-5" />
                    Back to Projects
                </Link>

                {/* Project Header */}
                <h1 className="text-5xl font-bold mb-4">{project.title.rendered}</h1>
                
                {/* Tech Stack */}
                {project.acf.tech_stack && (
                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.acf.tech_stack.split(',').map((tech, index) => (
                            <span 
                                key={index}
                                className="px-4 py-2 bg-[#1a1a1a] text-gray-300 rounded-full border border-gray-700"
                            >
                                {tech.trim()}
                            </span>
                        ))}
                    </div>
                )}

                {/* Links */}
                <div className="flex gap-4 mb-12">
                    {project.acf.github_url && (
                        <a 
                            href={project.acf.github_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-[#1a1a1a] px-6 py-3 rounded-lg hover:bg-[#252525] transition-colors border border-gray-800"
                        >
                            <Github className="w-5 h-5" />
                            View Code
                        </a>
                    )}
                    
                    {project.acf.live_demo_url && (
                        <a 
                            href={project.acf.live_demo_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-[#00ff88] text-black px-6 py-3 rounded-lg hover:bg-[#00dd77] transition-colors font-semibold"
                        >
                            <ExternalLink className="w-5 h-5" />
                            Live Demo
                        </a>
                    )}
                </div>

                {/* Featured Image */}
                {project.acf.project_image && (
                    <div className="relative w-full h-[500px] mb-12 rounded-xl overflow-hidden border border-gray-800">
                        <Image
                            src={project.acf.project_image.url}
                            alt={project.title.rendered}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}

                {/* Description */}
                <div className="prose prose-invert prose-lg max-w-none mb-12">
                    <div dangerouslySetInnerHTML={{ __html: project.content.rendered }} />
                </div>

                {/* Project Gallery */}
                {project.acf.project_gallery && project.acf.project_gallery.length > 0 && (
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-[#00ff88]">Gallery</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {project.acf.project_gallery.map((image, index) => (
                                <div 
                                    key={image.ID || image.id || index} 
                                    className="relative w-full h-[400px] rounded-xl overflow-hidden border border-gray-800"
                                >
                                    <Image
                                        src={image.url}
                                        alt={image.alt || `${project.title.rendered} screenshot ${index + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}