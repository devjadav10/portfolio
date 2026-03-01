"use client";
import { memo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHolderProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

const SectionHolderComponent = ({ 
  children, 
  id, 
  className,
}: SectionHolderProps) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
      className={cn("py-24 px-6 max-w-7xl mx-auto w-full", className)}
    >
      {children}
    </motion.section>
  );
};

SectionHolderComponent.displayName = "SectionHolder";

const SectionHolder = memo(SectionHolderComponent);

export default SectionHolder;