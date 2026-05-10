"use client";
import React, { memo } from "react";
import { Mail, Phone, FileText, Github, Linkedin, ArrowUpRight } from "lucide-react";

const EMAIL = "dev.jadav.101@gmail.com";
const MOBILE = "+91 94265 80215";

const SOCIAL_LINKS = [
  { Icon: Github, link: "https://github.com/devjadav10/", label: "Github" },
  { Icon: Linkedin, link: "https://www.linkedin.com/in/dev-jadav/", label: "LinkedIn" },
] as const;

const Contact = () => {
  return (
    <section className="relative bg-background flex flex-col items-center overflow-visible pb-20 px-6">
      
      {/* Header */}
      <div className="mb-16 text-center">
        <h2 className="section-title max-w-[90vw] mx-auto">
          Let's <span>Connect</span>
        </h2>
        <div className="mt-4 mx-auto max-w-2xl">
          <p className="sub-description text-center">
            I'm always down to grab a tea and discuss how we can build 
            seamless user experiences and high-performance systems together.
          </p>
        </div>
      </div>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        
        {/* Left: Communication Hub */}
        <div className="flex flex-col gap-4">
          <a 
            href={`mailto:${EMAIL}`}
            className="glass-capsule group flex items-center justify-between p-5 md:p-6 !rounded-[24px] hover:border-accent transition-all duration-500 min-w-0 h-full"
          >
            <div className="flex items-center gap-4 min-w-0">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-zinc-900 flex flex-shrink-0 items-center justify-center text-muted group-hover:text-accent transition-colors">
                <Mail size={18} />
              </div>
              <div className="min-w-0">
                {/* FIXED: Removed text-[9px] to inherit the 11px/12px global size */}
                <p className="tech-label !opacity-85 uppercase mb-0.5 group-hover:!opacity-100 transition-opacity">Drop a mail</p>
                <p className="text-base md:text-lg font-sans font-medium text-foreground truncate break-all md:break-normal">
                  {EMAIL}
                </p>
              </div>
            </div>
            <ArrowUpRight className="text-zinc-800 group-hover:text-accent group-hover:rotate-45 transition-all flex-shrink-0 ml-2" />
          </a>

          <a 
            href={`tel:${MOBILE}`}
            className="glass-capsule group flex items-center justify-between p-5 md:p-6 !rounded-[24px] hover:border-accent transition-all duration-500 min-w-0 h-full"
          >
            <div className="flex items-center gap-4 min-w-0">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-zinc-900 flex flex-shrink-0 items-center justify-center text-muted group-hover:text-accent transition-colors">
                <Phone size={18} />
              </div>
              <div className="min-w-0">
                {/* FIXED: Removed text-[9px] */}
                <p className="tech-label !opacity-85 uppercase mb-0.5 group-hover:!opacity-100 transition-opacity">Say Hello</p>
                <p className="text-base md:text-lg font-sans font-medium text-foreground">
                  {MOBILE}
                </p>
              </div>
            </div>
            <ArrowUpRight className="text-zinc-800 group-hover:text-accent group-hover:rotate-45 transition-all flex-shrink-0 ml-2" />
          </a>
        </div>

        {/* Right: Resume & Socials */}
        <div className="flex flex-col gap-4">
          <a 
            href="/Dev_Jadav_Resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="glass-capsule group flex items-center justify-between p-5 md:p-6 !rounded-[24px] bg-accent/5 hover:bg-accent/10 hover:border-accent transition-all duration-500 shadow-neon h-full"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent flex items-center justify-center text-black flex-shrink-0 transition-transform group-hover:scale-110">
                <FileText size={20} />
              </div>
              <div>
                {/* FIXED: Removed text-[10px] */}
                <p className="tech-label !opacity-100 text-accent uppercase mb-0.5">Open for roles</p>
                <p className="text-base md:text-lg font-sans font-bold text-foreground uppercase tracking-tighter italic font-serif leading-none">Download Resume</p>
              </div>
            </div>
            <ArrowUpRight className="text-accent group-hover:rotate-45 transition-all flex-shrink-0 ml-2" />
          </a>

          <div className="flex gap-4 w-full h-full">
            {SOCIAL_LINKS.map((social) => (
              <a 
                key={social.label} 
                href={social.link} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 glass-capsule !rounded-[24px] p-5 md:p-6 flex items-center justify-between min-w-0 hover:border-accent hover:bg-white/5 transition-all group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="text-muted group-hover:text-accent transition-colors flex-shrink-0">
                    <social.Icon size={20} />
                  </span>
                  {/* FIXED: Removed text-[10px] */}
                  <span className="tech-label !opacity-85 group-hover:!opacity-100 uppercase truncate transition-opacity">
                    {social.label}
                  </span>
                </div>
                <ArrowUpRight size={14} className="text-zinc-800 group-hover:text-accent group-hover:rotate-45 transition-all flex-shrink-0 ml-1" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Contact);