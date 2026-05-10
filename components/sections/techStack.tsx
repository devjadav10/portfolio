"use client";
import React, { memo } from "react";
import { motion } from "framer-motion";
import { 
  SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, 
  SiTailwindcss, SiPostgresql, SiMongodb, SiAmazonwebservices,
  SiPython, SiCplusplus, SiC, SiGit , SiSocketdotio, 
  SiVercel, SiJavascript, SiGooglegemini, SiClaude 
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const skills = [
  // --- Tier 1: Core Web Ecosystem (High Priority) ---
  { name: "ReactJS", type: "Library", Icon: SiReact, dir: { x: -80, y: 0 } },
  { name: "Next.js", type: "Framework", Icon: SiNextdotjs, dir: { x: 80, y: 0 } },
  { name: "TypeScript", type: "Language", Icon: SiTypescript, dir: { x: 80, y: 0 } },
  { name: "JavaScript", type: "Language", Icon: SiJavascript, dir: { x: -80, y: 0 } },
  { name: "Node.js", type: "Runtime", Icon: SiNodedotjs, dir: { x: 0, y: 80 } },

  // --- Tier 2: Backend, Cloud & System Languages ---
  { name: "Python", type: "Language", Icon: SiPython, dir: { x: 0, y: -80 } },
  { name: "C++", type: "Language", Icon: SiCplusplus, dir: { x: -80, y: 0 } },
  { name: "C", type: "Language", Icon: SiC, dir: { x: 80, y: 0 } },
  { name: "AWS", type: "Cloud", Icon: SiAmazonwebservices, dir: { x: 0, y: -80 } },
  { name: "MongoDB", type: "Database", Icon: SiMongodb, dir: { x: 0, y: 80 } },

  // --- Tier 3: Architecture & Deployment ---
  { name: "PostgreSQL", type: "Database", Icon: SiPostgresql, dir: { x: 80, y: 0 } },
  { name: "Tailwind", type: "Styling", Icon: SiTailwindcss, dir: { x: 0, y: -80 } },
  { name: "WebSockets", type: "Real-time", Icon: SiSocketdotio, dir: { x: -80, y: 0 } },
  { name: "CI/CD", type: "Deployment", Icon: SiVercel, dir: { x: 0, y: 80 } },
];

const TechStack = () => {
  return (
    /* Section padding comes from SectionHolder; keep this wrapper layout-only */
    <section className="bg-background flex flex-col items-center overflow-visible">
      
      <div className="text-center mb-16 md:mb-20 w-full max-w-4xl">
        <h2 className="section-title uppercase tracking-tighter">
          Technical <span>Arsenal</span>
        </h2>
        <div className="mt-4 mx-auto max-w-2xl">
          <p className="sub-description text-center px-4">
            Leveraging a robust stack to optimize high-volume financial platforms 
            and build scalable real-time architectures.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 md:gap-5 max-w-4xl">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: skill.dir.x, y: skill.dir.y }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.8, 
              delay: i * 0.03, 
              ease: [0.16, 1, 0.3, 1] 
            }}
            className="group"
          >
            <div className="glass-capsule relative w-[115px] md:w-[135px] h-[165px] md:h-[195px] 
                            flex flex-col items-center justify-center gap-4">
              
              <div className="text-muted group-hover:text-foreground transition-all duration-500 relative z-10">
                <skill.Icon size={34} className="md:size-10" />
              </div>

              <div className="text-center px-2 relative z-10">
                <h4 className="text-foreground text-[11px] md:text-sm font-sans font-medium tracking-tight">
                  {skill.name}
                </h4>
                <p className="tech-label mt-1 !opacity-0 group-hover:!opacity-60 transition-opacity">
                  {skill.type}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default memo(TechStack);