"use client";
import React, { useRef, useMemo, memo } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { experiences } from "@/data/experience";

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const START_DATE = useMemo(() => new Date(2023, 5, 1), []); 
  const CURRENT_DATE = useMemo(() => new Date(), []);
  
  const TOTAL_MONTHS = useMemo(() => {
    return (CURRENT_DATE.getFullYear() - START_DATE.getFullYear()) * 12 + 
           (CURRENT_DATE.getMonth() - START_DATE.getMonth());
  }, [START_DATE, CURRENT_DATE]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const getMonthOffset = (dateStr: string) => {
    if (dateStr.toLowerCase() === "present") return TOTAL_MONTHS;
    const [month, year] = dateStr.split(" ");
    const date = new Date(`${month} 1, ${year}`);
    return (date.getFullYear() - START_DATE.getFullYear()) * 12 + (date.getMonth() - START_DATE.getMonth());
  };

  const arcSegments = useMemo(() => {
    return experiences.map((exp) => {
      const parts = exp.duration.split(" — ");
      const start = getMonthOffset(parts[0]);
      const end = getMonthOffset(parts[1]);
      return {
        length: (end - start) / TOTAL_MONTHS,
        offset: start / TOTAL_MONTHS,
      };
    });
  }, [experiences, TOTAL_MONTHS]);

  const pathLength = useTransform(scrollYProgress, experiences.map((_, i) => i / experiences.length), arcSegments.map((seg) => seg.length));
  const pathOffset = useTransform(scrollYProgress, experiences.map((_, i) => i / experiences.length), arcSegments.map((seg) => seg.offset));

  const smoothLength = useSpring(pathLength, { stiffness: 80, damping: 20 });
  const smoothOffset = useSpring(pathOffset, { stiffness: 80, damping: 20 });

  return (
    <>
      <div className="flex flex-col items-center text-center pt-24 px-6 max-w-5xl mx-auto w-full overflow-hidden">
        <h2 className="section-title">
          Professional <span>Experience</span>
        </h2>
        <div className="max-w-2xl mx-auto">
          <p className="sub-description mt-4 px-4">
            A trajectory of technical excellence, shipping high-performance 
            financial systems and solving complex algorithmic challenges at scale.
          </p>
        </div>
      </div>

      <div ref={containerRef} className="relative h-[320vh] max-w-7xl mx-auto w-full">
        {/* Adjusted pb-24 to ensure bottom elements sit above the FloatingNav */}
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-between pt-4 pb-24 overflow-hidden px-6">
          
          {/* Technical Arc */}
          <div className="w-full max-w-2xl -mt-4 flex flex-col items-center flex-shrink-0">
            <svg viewBox="0 0 400 120" className="w-full h-auto overflow-visible opacity-30">
              <path 
                d="M 40,100 Q 200,10 360,100" 
                fill="none" 
                stroke="var(--color-muted)" 
                strokeWidth="1" 
                strokeDasharray="4 4" 
              />
              <motion.path
                d="M 40,100 Q 200,10 360,100"
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth="2.5"
                strokeLinecap="round"
                style={{ pathLength: smoothLength, pathOffset: smoothOffset }}
              />
            </svg>
            <div className="w-full flex justify-between px-8 mt-2 tech-label">
              <span>2023</span>
              <span>Present</span>
            </div>
          </div>

          {/* MIDDLE SECTION ADJUSTMENT:
              Using h-[35vh] and max-h-[300px] to keep text from expanding into 
              the navbar zone at the bottom 
          */}
          <div className="relative w-full max-w-5xl h-[35vh] flex items-center justify-center flex-shrink-0">
            {experiences.map((exp, index) => (
              <ExperienceItem 
                key={index} 
                exp={exp} 
                index={index} 
                total={experiences.length} 
                progress={scrollYProgress} 
              />
            ))}
          </div>

          {/* Timeline Explorer: Now sits at a comfortable bottom margin */}
          <div className="flex flex-col items-center gap-3 z-10 flex-shrink-0">
            <span className="tech-label opacity-40">Timeline Explorer</span>
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-px h-10 bg-gradient-to-b from-accent to-transparent opacity-50"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const ExperienceItem = ({ exp, index, total, progress }: any) => {
  const start = index / total;
  const end = (index + 1) / total;
  
  const opacity = useTransform(progress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0]);
  const roleY = useTransform(progress, [start, start + 0.2], [20, 0]);

  return (
    <motion.div style={{ opacity }} className="absolute flex flex-col items-center justify-center">
      <div className="relative text-center">
        <span className="tech-label text-accent block mb-3">
          {exp.duration}
        </span>
        <motion.h3 
          style={{ y: roleY }}
          className="text-3xl md:text-5xl font-sans font-bold text-white tracking-tighter leading-tight uppercase"
        >
          {exp.role}
        </motion.h3>
        <motion.p
          style={{ y: roleY }}
          className="sub-description text-muted text-base md:text-xl font-serif font-light italic tracking-tight"
        >
          {exp.contribution}
        </motion.p>
        
        <div className="flex items-center justify-center gap-4 mt-5">
          <div className="w-6 h-px bg-border-subtle" />
          <p className="text-muted text-base md:text-xl font-serif font-light italic tracking-tight">
            at <span className="text-foreground">{exp.company}</span>
          </p>
          <div className="w-6 h-px bg-border-subtle" />
        </div>
      </div>
    </motion.div>
  );
};

export default memo(Experience);