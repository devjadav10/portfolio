export const projects = [
  {
    title: "KFintech XAlt",
    subtitle: "Financial Operations & HNI Systems",
    slug: "kfintech-xalt",
    // Highlight Scale and HNI users as per your resume
    liveLink: null,
    github: null,
    description: "Architecting mission-critical financial infrastructure for high-net-worth individuals, managing high-concurrency fund flows and multi-million transaction volumes with a focus on systemic reliability and performance.",
    image: "/images/Xalt.png", 
    timeline: "January 2024 - Present",
    tools: ["React.js", "TypeScript", "Node.js", "Python", "PostgreSQL", "MongoDB", "Docker", "AWS", "CI/CD", "Git"],
    content: "I spearheaded an architectural refactor that achieved an 83 percent reduction in initial dashboard load times by implementing a modular Reducer-Injection framework and dynamic code-splitting. Beyond performance, I engineered a standardized JSON-driven UI engine that compressed feature deployment cycles from 5 days to 1 by eliminating systemic code redundancy. My work involved partnering with cross-functional stakeholders to deliver high-integrity financial modules for lakhs of HNI investors, ensuring strict compliance with regulatory requirements for decimal precision and transactional idempotency."
  },
  {
    title: "Roommit",
    subtitle: "Real-time Matching Architecture",
    slug: "roommit-platform",
    // Focus on technical ownership and real-time complexity
    liveLink: "https://roommit.com",
    github: null,
    description: "A low-latency, real-time matching platform designed to connect users through habit-based compatibility algorithms and asynchronous interaction.",
    image: "/images/roommit.png",
    timeline: "August 2025 - Present",
    tools: ["Next.js", "WebSockets", "Tailwind CSS", "Python", "PostgreSQL", "AWS", "CI/CD", "Git"],
    content: "Directed the end-to-end technical implementation of a high-performance matching engine, utilizing Python worker services and WebSockets to maintain sub-100ms interaction latency. I engineered a scalable frontend architecture in Next.js featuring a reusable component library that ensured a consistent design system and full accessibility compliance across the application lifecycle. To support rapid user scaling, I managed containerized deployments on AWS using ECS and Fargate, implementing resource scaling and health checks to maintain 99.9% platform reliability during concurrent user spikes."
  },
  {
    title: "Flow Weaver",
    subtitle: "Graph Theory & State Management",
    slug: "flow-weaver",
    // Highlight the algorithmic and state complexity
    liveLink: "https://flow-weaver-phi.vercel.app/",
    github: "https://github.com/devjadav10/flow-weaver",
    description: "A sophisticated visual workflow orchestrator that allows users to build and validate complex data processing pipelines using a node-based interface.",
    image: "/images/flowWeaver.png", 
    timeline: "January 2026",
    tools: ["React Flow", "TypeScript", "FastAPI", "Python", "Tailwind CSS", "Zustand", "Vercel", "github"],
    content: "Developed a production-grade visual builder featuring custom node logic, global variable management, and intelligent auto-connect algorithms for streamlined pipeline construction. I integrated a Python-based backend utilizing Directed Acyclic Graph validation to enforce pipeline integrity and prevent circular dependencies in complex data flows. By utilizing Zustand for centralized state management and optimizing node-processing metrics, I ensured the interface remains highly responsive even when managing hundreds of concurrent data nodes and complex edge-case logic."
  }
];