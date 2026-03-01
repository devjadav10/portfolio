"use client";
import React, { memo } from "react";
import { motion, useTransform, MotionValue } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectMedia } from "@/components/ui/project-media";

interface CardProps {
  title: string;
  subtitle: string;
  slug: string;
  image: string | null;
  tools: string[];
  timeline: string;
  i: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const ProjectCardBase = ({ 
  title, subtitle, slug, image, tools, timeline, i, progress, range, targetScale 
}: CardProps) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="sticky top-16 md:top-24 w-full flex items-center justify-center pb-12 md:pb-20">
      <motion.div
        style={{ 
          scale, 
          top: `calc(-1% + ${i * 12}px)`,
        }}
        className="glass-capsule relative w-[92%] md:w-full max-w-4xl p-5 md:p-8 !rounded-[24px] md:!rounded-[32px] !bg-[#080808] origin-top shadow-2xl border border-white/5"
      >
        <Link href={`/projects/${slug}`} className="group flex flex-col gap-5 md:gap-6 no-underline">
          
          <ProjectMedia 
            title={title} 
            image={image} 
            timeline={timeline}
            slug={slug}
            className="rounded-[16px] md:rounded-[24px] border-white/5" 
          />

          <div className="flex items-end justify-between px-1 md:px-2">
            <div className="space-y-2 md:space-y-3 flex-1 min-w-0">
              <div>
                <h3 className="card-title text-xl md:text-3xl mb-1 truncate">{title}</h3>
                <p className="text-muted font-serif italic text-xs md:text-base opacity-60 line-clamp-1">
                  {subtitle}
                </p>
              </div>
              
              {/* Responsive Tool Display */}
              <div className="flex flex-wrap gap-2">
                {tools.slice(0, 5).map((tool, index) => (
                  <span 
                    key={tool} 
                    className={`tech-label !opacity-40 text-[8px] md:text-[9px] border border-white/10 px-2 py-0.5 rounded-full whitespace-nowrap
                      ${index >= 3 ? 'hidden md:inline-block' : 'inline-block'} 
                    `}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex flex-shrink-0 items-center justify-center group-hover:bg-accent group-hover:text-black transition-all duration-500 ml-3">
              <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
            </div>
          </div>
        </Link>
      </motion.div>
    </div>
  );
};

export const ProjectCard = memo(ProjectCardBase);
ProjectCard.displayName = "ProjectCard";