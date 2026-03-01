import dynamic from 'next/dynamic';
import Hero from "@/components/sections/hero";
import SectionHolder from "@/components/ui/section-holder";
import SectionLoader from "@/components/ui/section-loader"; // Import the loader

const ProjectGrid = dynamic(() => import("@/components/sections/project-grid"), {
  loading: () => <SectionLoader />, // Use it here
});
const Experience = dynamic(() => import("@/components/sections/experience"), {
  loading: () => <SectionLoader />, // Minimal placeholder
});
// const ResumeDossier = dynamic(() => import("@/components/sections/resumeDossier"), {
//   loading: () => <SectionLoader />, // Minimal placeholder
// });
const TechStack = dynamic(() => import("@/components/sections/techStack"), {
  loading: () => <SectionLoader />, // Minimal placeholder
});
const Contact = dynamic(() => import("@/components/sections/contact"), {
  loading: () => <SectionLoader />, // Minimal placeholder
});
export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Experience />
      <SectionHolder id="projects">
        <ProjectGrid />
      </SectionHolder>
      <SectionHolder id="tech-stack">
        <TechStack />
      </SectionHolder>
      <SectionHolder id="contact">
        <Contact />
      </SectionHolder>
    </main>
  );
}