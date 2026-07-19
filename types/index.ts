export interface SkillItem {
  name: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  items: SkillItem[];
}

export interface ProjectFeature {
  label: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  features: string[];
  highlight?: string;
  github?: string;
  demo?: string;
  accent: "blue" | "purple" | "cyan";
}

export interface ExperienceItem {
  organization: string;
  role: string;
  period?: string;
  points: string[];
}

export interface Achievement {
  title: string;
  detail?: string;
}

export interface StatItem {
  label: string;
  value: string;
}
