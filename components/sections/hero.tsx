"use client";
import React, { memo } from "react";
import HighlightText from "@/components/ui/highlight-text";

const DESCRIPTION =
  "Building high-performance systems with a focus on seamless user experience. Currently optimizing enterprise platforms for lakhs of HNI investors and millions of transactions.";

const Hero = () => {
  return (
    <section className="relative h-[100dvh] w-full flex flex-col items-center justify-center px-6 bg-background overflow-hidden">
      
      <div className="relative z-10 max-w-5xl w-full text-center leading-[1.1]">
        {/* Line 1: Identity */}
        <div className="flex flex-wrap items-center justify-center gap-x-2 md:gap-x-4 text-3xl md:text-7xl font-serif tracking-tighter">
          <span className="text-muted">Hey, I'm</span>
          <div className="group relative w-[60px] md:w-[130px] h-[35px] md:h-[65px] glass-capsule rotate-[-2deg] overflow-hidden flex-shrink-0">
            <img src="/images/Portrait.png" className="w-full h-full object-cover grayscale" alt="Profile" />
          </div>
          <span className="italic font-medium text-foreground">Dev Jadav</span>
        </div>

        {/* Line 2: Role + Safety-Checked Dino */}
        <div className="flex flex-wrap items-center justify-center gap-x-2 md:gap-x-4 text-3xl md:text-7xl font-serif tracking-tighter mt-2 md:mt-4">
          <span className="text-foreground font-bold break-words text-center">Software Engineer</span>
          
          {/* SAFETY CHECK LOGIC:
              - hidden: Default state for extremely small screens (<365px).
              - min-[365px]:flex: Shows the image only when there is enough horizontal room.
              - Width scales from 40px up to 115px for desktop.
          */}
          <div className="hidden min-[365px]:flex group relative w-[40px] min-[400px]:w-[70px] md:w-[115px] h-[30px] min-[400px]:h-[40px] md:h-[65px] glass-capsule rotate-[3deg] overflow-hidden flex-shrink-0 transition-all duration-500">
            <img 
              src="/images/Dino.png" 
              className="w-full h-full object-cover brightness-50 group-hover:brightness-100 transition-all duration-700" 
              alt="Work" 
            />
          </div>
        </div>

        {/* Line 3: Location */}
        <div className="flex flex-wrap items-center justify-center gap-x-2 md:gap-x-4 text-3xl md:text-7xl font-serif tracking-tighter mt-2 md:mt-4">
          <span className="text-muted">Based in</span>
          <div className="group relative w-[65px] md:w-[125px] h-[35px] md:h-[65px] glass-capsule overflow-hidden flex-shrink-0">
             <img src="/images/location.png" className="w-full h-full object-cover" alt="India" />
          </div>
          <span className="italic text-foreground font-medium">India</span>
        </div>
      </div>

      {/* Description Subtext */}
      <div className="relative z-10 mt-16 text-center px-4">
        <HighlightText 
          text={DESCRIPTION}
          className="sub-description mx-auto max-w-2xl"
        />
      </div>
    </section>
  );
};

export default memo(Hero);