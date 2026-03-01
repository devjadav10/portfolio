"use client";
import React, { memo } from "react";
import { Mail, Phone, Coffee, Github, Linkedin, ArrowUpRight } from "lucide-react";

const EMAIL = "dev.jadav.101@gmail.com";
const MOBILE = "+91 94265 80215";

const SOCIAL_LINKS = [
  { Icon: Github, link: "https://github.com/devjadav10/", label: "Github" },
  { Icon: Linkedin, link: "https://www.linkedin.com/in/dev-jadav/", label: "LinkedIn" },
] as const;

const Contact = () => {
  return (
    <section className="relative bg-background flex flex-col items-center overflow-visible pb-20">
      
      {/* Header: Focused on Engineering Roles & UX */}
      <div className="mb-16 text-center">
        <h2 className="section-title max-w-[90vw] mx-auto px-4">
          Let's <span>Connect</span>
        </h2>
        <div className="mt-4 mx-auto px-4 max-w-2xl">
          <p className="sub-description text-center">
            I'm always down to grab a tea and discuss how we can build 
            seamless user experiences and high-performance systems together.
          </p>
        </div>
      </div>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
        
        {/* Left: Communication Hub */}
        <div className="space-y-4">
          <a 
            href={`mailto:${EMAIL}`}
            className="glass-capsule group flex items-center justify-between p-6 !rounded-[24px] hover:border-accent transition-all duration-500 min-w-0"
          >
            <div className="flex items-center gap-4 md:gap-5 min-w-0 w-full">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-zinc-900 flex flex-shrink-0 items-center justify-center text-muted group-hover:text-accent transition-colors">
                <Mail size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="tech-label !opacity-40 text-[9px] uppercase tracking-widest mb-1">Drop a message</p>
                {/* Unified font-sans and break-all for mobile wrapping */}
                <p className="text-base md:text-lg font-sans font-medium text-foreground tracking-tight leading-tight break-all md:break-normal">
                  {EMAIL}
                </p>
              </div>
            </div>
            <ArrowUpRight className="text-zinc-800 group-hover:text-accent group-hover:rotate-45 transition-all flex-shrink-0 ml-2" />
          </a>

          <a 
            href={`tel:${MOBILE}`}
            className="glass-capsule group flex items-center justify-between p-6 !rounded-[24px] hover:border-accent transition-all duration-500 min-w-0"
          >
            <div className="flex items-center gap-4 md:gap-5 min-w-0 w-full">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-zinc-900 flex flex-shrink-0 items-center justify-center text-muted group-hover:text-accent transition-colors">
                <Phone size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="tech-label !opacity-40 text-[9px] uppercase tracking-widest mb-1">Say Hello</p>
                <p className="text-base md:text-lg font-sans font-medium text-foreground tracking-tight leading-tight">
                  {MOBILE}
                </p>
              </div>
            </div>
            <ArrowUpRight className="text-zinc-800 group-hover:text-accent group-hover:rotate-45 transition-all flex-shrink-0 ml-2" />
          </a>
        </div>

        {/* Right: Resume & Socials */}
        <div className="space-y-4">
          <a 
            href="/resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="glass-capsule group flex items-center justify-between p-6 !rounded-[24px] bg-accent/5 hover:bg-accent/10 hover:border-accent transition-all duration-500 shadow-neon"
          >
            <div className="flex items-center gap-5">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent flex items-center justify-center text-black flex-shrink-0 transition-transform group-hover:scale-110">
                <Coffee size={20} />
              </div>
              <div>
                <p className="tech-label !opacity-100 text-accent text-[10px] uppercase tracking-widest">Open for roles</p>
                <p className="text-base md:text-lg font-sans font-bold text-foreground uppercase tracking-tighter">Let's talk over tea</p>
              </div>
            </div>
            <ArrowUpRight className="text-accent group-hover:rotate-45 transition-all flex-shrink-0 ml-2" />
          </a>

          <div className="flex gap-4">
            {SOCIAL_LINKS.map((social) => (
              <a 
                key={social.label} 
                href={social.link} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 glass-capsule !rounded-[24px] py-6 flex flex-col items-center justify-center gap-3 hover:border-accent transition-all group min-w-0"
              >
                <span className="text-muted group-hover:text-foreground transition-colors">
                  <social.Icon size={22} />
                </span>
                <span className="tech-label text-[9px] md:text-[10px] opacity-40 group-hover:opacity-100 uppercase tracking-widest">
                  {social.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Contact);