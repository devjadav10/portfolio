"use client";
import React, { use, memo } from "react";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import SectionHolder from "@/components/ui/section-holder";
import { Github, Globe, Calendar, Cpu, ArrowLeft, ArrowUpRight, Info } from "lucide-react";
import Link from "next/link";
import { ProjectMedia } from "@/components/ui/project-media";

/**
 * ProjectPage: A sticky-scroll layout for deep-diving into technical products.
 * Uses React.use() to unwrap Next.js 15 params.
 */
function ProjectPageComponent({ params }: { params: Promise<{ slug: string }> }) {
  // 1. Unwrap the params promise to avoid 404/flickering issues
  const { slug } = use(params);
  
  // 2. Find project from the centralized data store
  const project = projects.find((p) => p.slug === slug);

  // 3. Early return if the project doesn't exist
  if (!project) notFound();

  // 4. Split title: First word is standard, following words are wrapped in a span
  const titleParts = project.title.split(" ");
  const mainTitle = titleParts[0];
  const spanTitle = titleParts.length > 1 ? titleParts.slice(1).join(" ") : "";

  return (
    <main className="min-h-screen bg-background">
      <SectionHolder>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* LEFT SIDE: Sticky Header + Media */}
          <div className="lg:sticky lg:top-24 flex flex-col gap-10">
            <header className="flex flex-col items-start text-left">
              {/* Back Navigation */}
              <Link 
                href="/#projects" 
                className="flex items-center gap-2 tech-label !opacity-100 hover:text-accent transition-colors group mb-8"
              >
                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                <span>Back to Projects</span>
              </Link>

              {/* Dynamic Section Title */}
              <h1 className="section-title !justify-start !text-left !mb-0 !max-w-none !mx-0">
                {mainTitle} {spanTitle && <span>{spanTitle}</span>}
              </h1>
              
              {/* Project Description */}
              <div className="mt-6 max-w-lg">
                <p className="sub-description text-left">
                  {project.description}
                </p>
              </div>
            </header>

            {/* Project Media: Handles 1080x1920 laptop screenshots or 
               the dynamic HUD blueprint fallback.
            */}
            <ProjectMedia 
              title={project.title} 
              image={project.image} 
              timeline={project.timeline}
              slug={project.slug}
            />
          </div>

          {/* RIGHT SIDE: Scrollable Technical Dossier */}
          <div className="flex flex-col gap-6 pt-0 lg:pt-16">
            
            {/* 1. Action Links: Live Demo & Source Code */}
            <div className="flex flex-col md:flex-row gap-3">
              {project?.liveLink && (
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 glass-capsule !rounded-[20px] p-4 flex items-center justify-between group hover:border-accent transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-muted group-hover:text-accent transition-colors">
                      <Globe size={18} />
                    </div>
                    <div>
                      <p className="tech-label !opacity-40 text-[9px] lowercase">Product</p>
                      <p className="text-sm font-bold text-white uppercase tracking-tight">Live Demo</p>
                    </div>
                  </div>
                  <ArrowUpRight size={16} className="text-zinc-800 group-hover:text-accent group-hover:rotate-45 transition-all" />
                </a>
              )}
              
              {project?.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 glass-capsule !rounded-[20px] p-4 flex items-center justify-between group hover:border-accent transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-muted group-hover:text-accent transition-colors">
                      <Github size={18} />
                    </div>
                    <div>
                      <p className="tech-label !opacity-40 text-[9px] lowercase">Source</p>
                      <p className="text-sm font-bold text-white uppercase tracking-tight">GitHub</p>
                    </div>
                  </div>
                  <ArrowUpRight size={16} className="text-zinc-800 group-hover:text-accent group-hover:rotate-45 transition-all" />
                </a>
              )}
            </div>

            {/* 2. Timeline Metadata */}
            <div className="glass-capsule !rounded-[24px] p-6 flex items-center justify-between h-auto">
              <div className="flex items-center gap-3">
                <Calendar size={18} className="text-accent" />
                <span className="tech-label !opacity-100">Project Period</span>
              </div>
              <p className="text-base font-sans font-bold text-white uppercase tracking-tight">
                {project.timeline}
              </p>
            </div>

            {/* 3. Technical Stack */}
            <div className="glass-capsule !rounded-[24px] p-6 h-auto">
              <div className="flex items-center gap-3 mb-6">
                <Cpu size={18} className="text-accent" />
                <span className="tech-label !opacity-100">Technical Stack</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span 
                    key={tool} 
                    className="px-3 py-1.5 text-[10px] uppercase tracking-widest border border-white/10 rounded-full bg-white/5 text-zinc-400 hover:border-accent/30 transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* 4. Deep Dive / Implementation Narrative */}
            <div className="glass-capsule !rounded-[24px] p-8 h-auto">
              <div className="flex items-center gap-3 mb-6">
                <Info size={18} className="text-accent" />
                <span className="tech-label !opacity-100">Deep Dive</span>
              </div>
              <div className="prose prose-invert max-w-none text-zinc-400 font-serif italic text-lg leading-relaxed">
                {project.content || project.description}
              </div>
            </div>
          </div>
        </div>
      </SectionHolder>
    </main>
  );
}

const ProjectPage = memo(ProjectPageComponent);

ProjectPage.displayName = "ProjectPage";

export default ProjectPage;