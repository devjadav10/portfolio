# Dev Jadav | Software Engineering Portfolio

A minimalist, high-performance portfolio built with a focus on **system efficiency**, **fluid motion**, and **technical storytelling**. This project serves as a live demonstration of building scalable, accessible, and optimized web architectures.

**Live at:** [devjadav.vercel.app](https://devjadav.vercel.app)

---

## 🛠 Tech Stack

The core stack was selected to balance developer velocity with production-grade performance:

* **Framework:** Next.js 15 (App Router) for Server-Side Rendering (SSR) and optimized routing.
* **Styling:** Tailwind CSS for a utility-first, zero-runtime CSS footprint.
* **Animation:** Framer Motion for high-frequency hardware-accelerated transitions.
* **Icons:** Lucide React for lightweight, tree-shakeable SVG iconography.
* **Deployment:** Vercel with automated CI/CD pipelines.

---

## 🏗 Project Structure

The architecture follows a modular, component-based design to ensure maintainability and separation of concerns:

```text
├── app/                  # Next.js 15 App Router (Routes & Metadata)
│   ├── layout.tsx        # Global providers and SEO metadata
│   ├── page.tsx          # Home page (Dynamic section assembly)
│   └── not-found.tsx     # Custom "System Error" 404 experience
├── components/           # Atomic Design implementation
│   ├── sections/         # Domain-specific page sections (Hero, Experience, etc.)
│   └── ui/               # Reusable primitive components (Cards, Loaders)
├── data/                 # Centralized project and experience schemas
├── public/               # Static assets (Resume, Favicon, Images)
└── styles/               # Global CSS utilities and design tokens
