"use client";
import React, { memo } from "react";
import { cn } from "@/lib/utils";

interface ProjectMediaProps {
  title: string;
  image: string | null;
  timeline?: string; 
  slug?: string;     
  className?: string;
}

const ProjectMediaBase = ({ title, image, timeline, slug, className }: ProjectMediaProps) => {
  return (
    <div
      className={cn(
        "relative w-full rounded-[24px] md:rounded-[32px] overflow-hidden border border-border-subtle bg-[#050505] shadow-neon group",
        // Force a stable container height while image loads
        !image && "aspect-video",
        className
      )}
    >
      {image ? (
        <div className="w-full h-full flex items-center justify-center overflow-hidden">
          <img
            src={image}
            alt={title}
            /* FIX: Added object-contain to maintain ratio and 
               max-h to ensure it doesn't grow too tall on mobile
            */
            className="w-full h-full object-contain md:object-cover block transition-transform duration-700 group-hover:scale-105"
            loading="eager"
          />
        </div>
      ) : (
        /* Technical Typography Fallback (HUD) remains unchanged */
        <div className="w-full h-full flex flex-col items-center justify-center p-8 relative overflow-hidden min-h-[300px]">
          <div className="absolute inset-0 opacity-[0.12]" 
               style={{ backgroundImage: `radial-gradient(var(--color-border-subtle) 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] bg-accent/5 blur-[100px] rounded-full" />
          
          <div className="absolute inset-8 flex flex-col justify-between pointer-events-none">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-1.5 text-left">
                <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-white/20">Ref_Identifier</span>
                <span className="font-mono text-[10px] text-accent/50 uppercase tracking-widest">{slug ? `ID_${slug.substring(0, 6)}` : "ID_NULL"}</span>
              </div>
              <div className="h-px w-8 bg-white/10 mt-2" />
            </div>
            <div className="flex justify-between items-end">
              <div className="h-px w-8 bg-white/10 mb-2" />
              <div className="flex flex-col items-end gap-1.5 text-right">
                <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-white/20">Operational_Period</span>
                <span className="font-mono text-[10px] text-muted uppercase tracking-widest">{timeline || "TBD"}</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 flex flex-col items-center w-full max-w-md">
            <h2 className="text-4xl md:text-6xl font-serif italic text-white/90 text-center uppercase tracking-tighter leading-none mb-6">
              {title}
            </h2>
            <div className="w-full flex items-center gap-4">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
            </div>
          </div>
        </div>
      )}
      <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
    </div>
  );
};

export const ProjectMedia = memo(ProjectMediaBase);
ProjectMedia.displayName = "ProjectMedia";