"use client";
import React, { useRef, useMemo, memo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface HighlightTextProps {
  text: string;
  className?: string;
}

const HighlightTextComponent = ({ text, className }: HighlightTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const words = useMemo(() => text.split(" "), [text]);

  // Track scroll progress specifically for this text block
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Start highlighting when the top of the text is 80% up the viewport
    // Finish when the bottom of the text reaches the 20% mark
    offset: ["start 0.8", "start 0.2"],
  });

  return (
    <div ref={containerRef} className={cn("relative z-10", className)}>
      <p className="flex flex-wrap justify-center gap-x-[0.35em] gap-y-[0.1em]">
        {words.map((word, i) => {
          // Calculate individual word timing based on its index
          const start = i / words.length;
          const end = start + 1 / words.length;
          
          // Map scroll progress to opacity (from dim to bright)
          const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

          return (
            <motion.span
              key={i}
              style={{ opacity }}
              className="inline-block transition-colors duration-100"
            >
              {word}
            </motion.span>
          );
        })}
      </p>
    </div>
  );
};

HighlightTextComponent.displayName = "HighlightText";

const HighlightText = memo(HighlightTextComponent);

export default HighlightText;