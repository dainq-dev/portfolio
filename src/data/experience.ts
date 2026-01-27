export interface Project {
  name: string
  description: string
  technologies: string[]
  achievements?: string[]
}

export interface Experience {
  id: string
  company: string
  companyLogo: string
  period: { start: string; end: string | "Present" }
  roles: { title: string; period: string }[]
  projects: Project[]
  technologies: string[]
  location?: string
}

export const experiences: Experience[] = [
  {
    id: "fidt",
    company: "FIDT Joint Stock Company",
    companyLogo: "FI",
    period: { start: "June 2025", end: "Present" },
    roles: [{ title: "Full-Stack Software Engineer", period: "June 2025 - Present" }],
    projects: [
      {
        name: "WFM (FinTech Platform)",
        description: "Comprehensive wealth management platform providing financial health assessments and real estate investment advisory to thousands of users.",
        technologies: ["TypeScript", "Node.js", "Express", "Vue3", "Nuxt4", "Tailwind", "Hono", "Playwright"],
        achievements: [
          "Contributed to development of comprehensive wealth management platform with rapid financial health assessments",
          "Improved frontend performance through image preloading, asset caching, and hybrid SSR/SPA rendering",
          "Integrated BizFly CRM for sales commission processing and deal pipeline tracking"
        ]
      },
      {
        name: "IAM (Identity and Access Management)",
        description: "Identity and access management system with user authorization, authentication, and token verification at API Gateway ensuring data security.",
        technologies: ["TypeScript", "Node.js", "Directus", "Express", "Vue3"],
        achievements: [
          "Participated in IAM development with focus on user authorization processing",
          "Deployed middleware mechanism for token verification at API Gateway",
          "Built and optimized authorization logic by role/group for each endpoint"
        ]
      },
      {
        name: "ER (Real Estate Project)",
        description: "Real estate platform providing customers with comprehensive property overviews and management capabilities.",
        technologies: ["TypeScript", "Node.js", "Directus", "Express", "Vue3"],
        achievements: [
          "Worked with Product Owner to finalize project structure and features",
          "Participated in project development following FIDT framework",
          "Responsible for SEO optimization, testing, and performance improvements"
        ]
      }
    ],
    technologies: ["TypeScript", "Node.js", "Directus", "Express", "Vue3", "Nuxt4", "Playwright", "Tailwind CSS", "Hono"],
    location: "Ho Chi Minh City, Vietnam"
  },
  {
    id: "vietstats",
    company: "Vietstats Co., Ltd",
    companyLogo: "VS",
    period: { start: "September 2023", end: "June 2025" },
    roles: [
      { title: "Team Leader", period: "January 2025 - June 2025" },
      { title: "Full-Stack Software Engineer", period: "September 2023 - December 2024" }
    ],
    projects: [
      {
        name: "Data BOT (AI-Powered Economic Data Agent)",
        description: "Intelligent assistant powered by GPT-4 that answers complex economic queries in natural language with iterative reasoning loop for data validation.",
        technologies: ["TypeScript", "Node.js", "OpenAI GPT-4", "LangChain", "PostgreSQL", "Kafka", "Docker"],
        achievements: [
          "Designed and shipped multi-agent system combining GPT-4 with custom tools (search, comparison, time-series retrieval, statistical functions)",
          "Implemented iterative reasoning loop with supervisor agent for data validation and refinement",
          "Integrated real-time context injection from internal economic databases and live Kafka streams",
          "Built tool-calling framework and prompt engineering pipeline achieving 92%+ accuracy on internal benchmark"
        ]
      },
      {
        name: "portal.vietstats.vn",
        description: "Data visualization tools platform allowing media agencies and businesses to configure and embed interactive economic charts into other CMSs.",
        technologies: ["TypeScript", "Next.js 14", "NestJS", "PostgreSQL", "Highcharts Stock", "ECharts", "Kafka", "Docker", "Nginx"],
        achievements: [
          "Built configuration dashboard with Next.js 14 App Router + React Hook Form, reducing chart creation time from hours to under 3 minutes",
          "Developed secure embed script (iFrame + postMessage) and REST/GraphQL APIs with JWT, rate-limiting, and query caching",
          "Implemented real-time data streaming via WebSocket + Kafka and advanced Highcharts Stock visualizations",
          "Containerized entire platform with Docker Compose, configured Nginx reverse proxy, and automated zero-downtime deployments via GitHub Actions"
        ]
      },
      {
        name: "Advance (Advanced Analytics Workspace)",
        description: "Photoshop-like data workspace with drag-and-drop multi-chart layouts, real-time collaboration, custom indicators, saved templates, and export capabilities.",
        technologies: ["TypeScript", "Next.js 14", "NestJS", "PostgreSQL", "Highcharts", "ECharts", "Kafka", "Docker", "Nginx"],
        achievements: [
          "Single-handedly architected and delivered complete workspace: drag-and-drop multi-chart layouts, real-time collaboration, saved templates",
          "Designed component-based design system, project scaffolding, backend microservices, and entire CI/CD pipeline",
          "Implemented complex canvas engine with resizable grid, synchronized state across tabs, and live data streaming via Kafka + WebSocket"
        ]
      },
      {
        name: "vietstats.vn (Data-as-a-Service Platform)",
        description: "Data-as-a-Service platform providing Vietnam's economic-level data with advanced analytics and visualization capabilities.",
        technologies: ["TypeScript", "Next.js 14", "NestJS", "PostgreSQL", "Docker", "Nginx", "GitHub Actions"],
        achievements: [
          "Architected from scratch entire platform: PostgreSQL schema with partitioning for multi-million-row datasets, NestJS microservices, Next.js 14 SSR frontend",
          "Designed system architecture and database schema aligned with business logic",
          "Built secure RESTful + GraphQL APIs with role-based access, query caching, and rate limiting",
          "Containerized services with Docker, configured Nginx + multi-region setup, and automated CI/CD via GitHub Actions"
        ]
      }
    ],
    technologies: ["TypeScript", "Next.js 14", "NestJS", "PostgreSQL", "Highcharts Stock", "ECharts", "Kafka", "Docker", "Nginx", "Redis", "GitHub Actions"],
    location: "Ho Chi Minh City, Vietnam"
  },
  {
    id: "doctorcheck",
    company: "Doctor Check JSC",
    companyLogo: "DC",
    period: { start: "March 2021", end: "August 2023" },
    roles: [
      { title: "Full-Stack Engineer", period: "January 2022 - August 2023" },
      { title: "Frontend Engineer", period: "March 2021 - December 2021" }
    ],
    projects: [
      {
        name: "Doctor Check Customer Portal",
        description: "Patient-facing web platform for appointment booking, medical reports viewing, invoice management, and secure payment processing.",
        technologies: ["Next.js", "NestJS", "SQL Server", "Ant Design", "Redux Toolkit"],
        achievements: [
          "Led development of end-to-end patient portal (Next.js + NestJS + SQL Server) for appointment booking, medical reports, and payment",
          "Reduced average page load time by 60% through SSR, code splitting, and image optimization"
        ]
      },
      {
        name: "Doctor Check CRM & Omni-Channel Messaging",
        description: "Real-time CRM dashboard integrating Facebook Messenger & Zalo OA via WebSocket enabling seamless communication for 50+ agents.",
        technologies: ["React.js", "TypeScript", "Redux Toolkit", "Firebase", "WebSocket"],
        achievements: [
          "Built real-time CRM dashboard integrating Facebook Messenger & Zalo OA via WebSocket for 50+ agents",
          "Implemented customer timeline, tagging, and automated workflows improving agent response time by 45%"
        ]
      },
      {
        name: "Zalo Mini App (Healthcare Mini App)",
        description: "Healthcare mini app inside Zalo Super App for appointment booking and medical result viewing, reaching 100K+ patients.",
        technologies: ["React.js", "TypeScript", "Firebase", "Zalo Mini App SDK"],
        achievements: [
          "Single-handedly designed, developed, and shipped appointment & medical result app reaching 100K+ patients",
          "Authored UI/UX guidelines and technical documentation adopted company-wide"
        ]
      },
      {
        name: "Doctor Check HIS (Hospital Information System)",
        description: "Internal hospital management system for doctors and nurses to manage appointments, patient records, and health data efficiently.",
        technologies: ["React.js", "TypeScript", "MUI", "WebSocket"],
        achievements: [
          "Migrated legacy modules to modern React SPA architecture, improving internal staff productivity by 30%"
        ]
      }
    ],
    technologies: ["Next.js", "React.js", "TypeScript", "Redux Toolkit", "NestJS", "SQL Server", "Firebase", "WebSocket", "Ant Design", "MUI"],
    location: "Ho Chi Minh City, Vietnam"
  }
]
