export const projects = [
  {
    title: "Zime.ai",
    subtitle: "Core Integration & Data Infrastructure",
    slug: "zime-ai-infrastructure",
    liveLink: null,
    github: null,
    description: "Owning the foundational data pipelines, syncing CRMs, user calendars, and call-recording bots, that feed the platform's AI knowledge graph.",
    image: "/images/zime.webp", 
    timeline: "July 2026 - Present",
    tools: ["Java", "Node.js", "Next.js", "AWS SQS", "Recall.ai", "Docker"],
    content: "When a founding engineer left, I took over the lifeblood of the application: the integration pod. I manage the pipelines that sync customer CRMs, calendars, and call ingestion bots (Recall, Zoom, MS Teams). If this data is wrong, the platform's AI agents hallucinate. I stabilized the deal-mapping and sync pipelines to hit a 100% same-day sync rate for the last month, and pushed CRM update health from 89.3% to 99.6%. On the infra side, I cut queue messaging costs by 99% by migrating to AWS SQS, and built a technical POC for an alternative recording bot that gave us the leverage to negotiate a 40% discount with our current vendor. Right now, I'm modularizing the architecture so adding new tools becomes plug-and-play."
  },
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
    title: "Autonomous Job Hunter",
    subtitle: "AI Workflow Automation & Integration",
    slug: "ai-job-agent",
    liveLink: null,
    github: null, // Add if you make the workflow JSON open source
    description: "A self-hosted AI automation pipeline that evaluates job postings against my resume, scores them for fit, and pushes real-time alerts to my phone.",
    image: "/images/job-hunter.webp", // Add an image of the n8n graph/UI
    timeline: "2026",
    tools: ["n8n", "LLM APIs", "Webhooks", "Next.js", "REST APIs", "Automation"],
    content: "Built a custom automation pipeline to engineer myself out of the manual job hunt. Using n8n, I designed a workflow that ingests new job postings, feeds the data to an LLM alongside my resume and private context, and scores the role based on SDE2 engineering criteria. If a job crosses a high-match threshold, the system uses webhooks to push a real-time notification to my phone, complete with AI-suggested resume tweaks tailored to that specific JD. This project heavily utilizes workflow orchestration, prompt engineering, and cross-platform API integration."
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
  // {
  //   title: "Flow Weaver",
  //   subtitle: "Graph Theory & State Management",
  //   slug: "flow-weaver",
  //   // Highlight the algorithmic and state complexity
  //   liveLink: "https://flow-weaver-phi.vercel.app/",
  //   github: "https://github.com/devjadav10/flow-weaver",
  //   description: "A sophisticated visual workflow orchestrator that allows users to build and validate complex data processing pipelines using a node-based interface.",
  //   image: "/images/flowWeaver.png", 
  //   timeline: "January 2026",
  //   tools: ["React Flow", "TypeScript", "FastAPI", "Python", "Tailwind CSS", "Zustand", "Vercel", "github"],
  //   content: "Developed a production-grade visual builder featuring custom node logic, global variable management, and intelligent auto-connect algorithms for streamlined pipeline construction. I integrated a Python-based backend utilizing Directed Acyclic Graph validation to enforce pipeline integrity and prevent circular dependencies in complex data flows. By utilizing Zustand for centralized state management and optimizing node-processing metrics, I ensured the interface remains highly responsive even when managing hundreds of concurrent data nodes and complex edge-case logic."
  // }
];