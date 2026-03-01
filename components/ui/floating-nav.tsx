"use client";
import React, { useEffect, useState, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { FileText } from "lucide-react";

const NAV_ITEMS = [
  { name: "home", link: "/" },
  { name: "projects", link: "#projects" },
  { name: "contact", link: "#contact" },
] as const;

export const FloatingNav = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const handleHashChange = () => setActiveHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    
    // Handle initial load if URL has a hash
    if (window.location.hash) {
      setActiveHash(window.location.hash);
    }

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Sync active nav item with scroll position on the home page.
  // When neither #projects nor #contact is in view, clear the hash and highlight "home".
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (pathname !== "/") return;

    const SECTION_IDS = ["projects", "contact"] as const;

    const handleScrollActiveSection = () => {
      const viewportHeight = window.innerHeight;
      // Horizontal line used to decide which section is "active"
      const triggerLine = viewportHeight * 0.25;

      let activeSection: string | null = null;

      SECTION_IDS.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionBottom = rect.bottom;

        // Mark section active whenever the trigger line lies within its bounds.
        if (sectionTop <= triggerLine && sectionBottom >= triggerLine) {
          activeSection = id;
        } 
      });

      if (activeSection) {
        const hash = `#${activeSection}`;
        setActiveHash(hash);
        if (window.location.hash !== hash) {
          window.history.replaceState(null, "", hash);
        }
      } else {
        // No tracked section is centered in view; reset to bare "/"
        if (window.location.pathname === "/" && window.location.hash) {
          window.history.replaceState(null, "", "/");
        }
        setActiveHash("");
      }
    };

    handleScrollActiveSection();
    window.addEventListener("scroll", handleScrollActiveSection, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScrollActiveSection);
    };
  }, [pathname]);

  const handleScroll = useCallback((e: React.MouseEvent<HTMLElement>, link: string) => {
    const lenis = (typeof window !== "undefined" && (window as any).lenis) || null;

    // 1. Handle Home navigation
    if (link === "/") {
      e.preventDefault();

      if (pathname !== "/") {
        // Navigate back to home (no hash)
        router.push("/");
      } else {
        // Already on home: smooth scroll to top
        if (lenis) {
          lenis.scrollTo(0, { duration: 1.2 });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }

        // Clear any existing hash from the URL so the location bar shows "/"
        if (window.location.hash) {
          window.history.pushState(null, "", "/");
        }
      }

      setActiveHash("");
      return;
    }

    // 2. Handle Anchor navigation (#projects, #contact)
    if (link.startsWith("#")) {
      e.preventDefault();
      
      // If we are NOT on the home page, teleport to home + hash
      if (pathname !== "/") {
        router.push(`/${link}`);
        return;
      }

      // If we ARE on the home page, perform smooth scroll
      const targetId = link.replace("#", "");
      const element = document.getElementById(targetId);

      if (element) {
        const offset = 80;
        if (lenis) {
          lenis.scrollTo(element, { offset: -offset, duration: 1.2 });
        } else {
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
        window.history.pushState(null, "", link);
        setActiveHash(link);
      }
    }
  }, [pathname, router]);

  return (
    <div className="fixed bottom-10 inset-x-0 z-[5000] px-4">
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex max-w-fit mx-auto border border-border-subtle rounded-full bg-background/70 backdrop-blur-xl shadow-neon p-1.5 items-center justify-center space-x-1"
      >
        {NAV_ITEMS.map((item, idx) => {
          const isActive =
            (item.link === "/" && pathname === "/" && !activeHash) ||
            activeHash === item.link;

          const itemClasses = cn(
            "tech-label relative px-4 md:px-5 py-2 rounded-full transition-colors duration-300 !opacity-100 no-underline outline-none focus-visible:outline-none flex items-center gap-2",
            isActive
              ? "bg-white/10 text-foreground"
              : "text-muted hover:text-foreground"
          );

          return (
            <button
              key={idx}
              type="button"
              onClick={(e) => handleScroll(e, item.link)}
              className={itemClasses}
            >
              <span className="relative z-10">{item.name}</span>
            </button>
          );
        })}
      </motion.nav>
    </div>
  );
};