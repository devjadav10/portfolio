import "./global.css";
import SmoothScroll from "@/components/SmoothScroll";
import { FloatingNav } from "@/components/ui/floating-nav";
import { Metadata } from "next";
// Updated Metadata to reflect your professional engineering identity
// app/layout.tsx
export const metadata: Metadata = {
  title: {
    default: "Dev Jadav | Software Engineer",
    template: "%s | Dev Jadav" 
  },
  description: "Software Engineer specializing in high-performance web systems, scalable architectures, and seamless user experiences.",
  
  // UPDATED: High-intent Engineering Keywords
  keywords: [
    "Software Engineer", 
    "Full Stack Developer", 
    "DA-IICT Alumni", 
    "Next.js Developer", 
    "TypeScript Engineer", 
    "React Specialist", 
    "Backend Systems", 
    "System Optimization"
  ],
  
  authors: [{ name: "Dev Jadav" }],
  creator: "Dev Jadav",

  openGraph: {
    title: "Dev Jadav | Software Engineer",
    description: "Building high-performance systems and scalable web architectures.",
    url: "https://devjadav.vercel.app",
    siteName: "Dev Jadav Portfolio",
    images: [
      {
        url: "/opengraph-image.png", 
        width: 1200,
        height: 630,
        alt: "Dev Jadav - Software Engineer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  icons: {
    // UPDATED: Using /favicon.png as requested
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png", 
  },

  verification: {
    google: "BMF8TyXRCYN1tFUOzwqRTfuJX1x9d8cFfo2_OC_XcAA",
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