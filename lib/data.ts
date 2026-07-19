import {
  Achievement,
  ExperienceItem,
  Project,
  SkillCategory,
  StatItem,
} from "@/types";

export const profile = {
  name: "Amol Sachin Shende",
  shortName: "Amol Shende",
  role: "Full Stack Web Developer · MERN Stack · AI Integration",
  email: "amolshende66151@gmail.com",
  github: "https://github.com/amolshende2507",
  linkedin: "https://www.linkedin.com/in/amol-shende-9b5448291/",
  resumeUrl: "/resume.pdf",
  location: "Pune, Maharashtra, India",
};

export const stats: StatItem[] = [
  { label: "Projects built", value: "5+" },
  { label: "Technologies used", value: "15+" },
  { label: "Research paper", value: "1" },
  { label: "Hackathons", value: "Multiple" },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    items: [
      { name: "JavaScript", icon: "js" },
      { name: "TypeScript", icon: "ts" },
      { name: "SQL", icon: "sql" },
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
      { name: "Python", icon: "python" },
      { name: "C++", icon: "cpp" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React.js", icon: "react" },
      { name: "Next.js", icon: "next" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Responsive UI", icon: "layout" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: "node" },
      { name: "Express.js", icon: "express" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "REST APIs", icon: "api" },
      { name: "JWT Auth", icon: "jwt" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MongoDB", icon: "mongodb" },
      { name: "MySQL", icon: "mysql" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Supabase", icon: "supabase" },
    ],
  },
  {
    title: "Developer Tools",
    items: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "VS Code", icon: "vscode" },
      { name: "Postman", icon: "postman" },
      { name: "Vercel", icon: "vercel" },
      { name: "Render", icon: "render" },
      { name: "Cloudinary", icon: "cloudinary" },
    ],
  },
  {
    title: "AI Tools",
    items: [
      { name: "ChatGPT", icon: "chatgpt" },
      { name: "Claude", icon: "claude" },
      { name: "Cursor", icon: "cursor" },
      { name: "Google AI Studio", icon: "google" },
      { name: "GitHub Copilot", icon: "copilot" },
    ],
  },
];

export const projects: Project[] = [
  {
    id: "foundrkit",
    title: "FoundrKit",
    tagline: "AI Virtual Co-Founder Platform",
    description:
      "An AI-powered platform that helps entrepreneurs generate business proposals, branding content, and manage startup workflows end to end.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "FastAPI", "Supabase", "AI APIs"],
    features: [
      "AI proposal generation",
      "Branding generation",
      "Authentication",
      "Dashboard",
      "Database integration",
    ],
    highlight: "Published research at ICRACE 2026",
    github: "https://github.com/amolshende2507/Foundrkit",
    demo: "#",
    accent: "blue",
  },
  {
    id: "smart-wallet",
    title: "Smart Wallet",
    tagline: "Finance Management System",
    description:
      "A full-stack finance management platform for tracking expenses, budgets, goals, and everyday financial activity.",
    tech: ["React", "Node.js", "Express", "MongoDB", "FastAPI"],
    features: [
      "Expense tracking",
      "Budget management",
      "Goal tracking",
      "Secure authentication",
    ],
    highlight: "i2i Hackathon Finalist",
    github: "https://github.com/amolshende/smart-wallet",
    demo: "#",
    accent: "purple",
  },
  {
    id: "ecofusion",
    title: "EcoFusion Navigator",
    tagline: "E-Waste Management Platform",
    description:
      "A platform promoting responsible electronic waste recycling and sustainable technology usage through guidance and rewards.",
    tech: ["React", "Tailwind CSS", "Node.js"],
    features: ["Recycling guidance", "Marketplace", "Reward system"],
    github: "https://github.com/amolshende/ecofusion-navigator",
    demo: "#",
    accent: "cyan",
  },
];

export const experience: ExperienceItem[] = [
  {
    organization: "Cognifyz Technologies",
    role: "Web Development Intern",
    points: [
      "Developed responsive web pages across multiple client projects",
      "Built reusable UI components used throughout the codebase",
      "Improved frontend design consistency and usability",
      "Followed a structured Git workflow in a collaborative setting",
    ],
  },
  {
    organization: "COMPSA — Computer Students Association",
    role: "Social Media Handler & Technical Team Member",
    points: [
      "Managed technical content across departmental channels",
      "Supported the design and upkeep of the department website",
      "Coordinated technical events end to end",
    ],
  },
];

export const research = {
  title: "FoundrKit: An AI-Powered Virtual Co-Founder Platform",
  conference: "ICRACE 2026",
  points: [
    "Designed and evaluated an AI-driven system for early-stage startup support",
    "Focused on practical AI application in proposal and branding generation",
    "Documented the system's software architecture and data pipeline",
  ],
};

export const achievements: Achievement[] = [
  { title: "Best Paper Award", detail: "ICRACE 2026" },
  { title: "i2i Hackathon Finalist" },
  { title: "Prototype Funding Achievement" },
  { title: "Deloitte Technology Virtual Experience Program" },
];
