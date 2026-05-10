"use client";
import React, { useRef, memo } from "react";
import { useScroll } from "framer-motion";
import { projects } from "@/data/projects";
import HighlightText from "@/components/ui/highlight-text";
import { ProjectCard } from "../ui/project-card";

const ProjectGrid = () => {
  const container = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <section ref={container} className="relative w-full bg-background">
      <div className="mb-24 flex flex-col items-center text-center">
        <h2 className="section-title">
          Selected <span>Works</span>
        </h2>
        
        <div className="mx-auto px-4 max-w-2xl">
        <p className="sub-description mt-4 mx-auto px-4 max-w-2xl">
          Engineering robust, scalable web applications with a focus on high-performance architecture and seamless user experiences at scale.
        </p>
        </div>
      </div>

      <div className="flex flex-col items-center px-4"> 
        {projects.map((project, index) => {
          // Stacking logic remains the same
          const targetScale = 1 - ((projects.length - index) * 0.05); 
          
          return (
            <ProjectCard
              key={project.slug}
              i={index}
              {...project} // Spreads title, subtitle, slug, image, tools, timeline
              progress={scrollYProgress}
              range={[index * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
};

export default memo(ProjectGrid);