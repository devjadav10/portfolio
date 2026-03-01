import "./global.css";
import SmoothScroll from "@/components/SmoothScroll";
import { FloatingNav } from "@/components/ui/floating-nav";

// Updated Metadata to reflect your professional engineering identity
export const metadata = {
  title: "Dev Jadav | Software Engineer",
  description: "Software Engineer specializing in building high-performance systems and seamless user experiences at scale.",
  keywords: ["Software Engineer", "DA-IICT", "React", "Next.js", "Performance Optimization", "Fintech Engineer"],
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-black scroll-smooth">
      <body className="antialiased selection:bg-accent selection:text-black">
        {/* FloatingNav is moved outside of SmoothScroll to prevent jitter */}
        <FloatingNav /> 
        <SmoothScroll>
          <main>{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}