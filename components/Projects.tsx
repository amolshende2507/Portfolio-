"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { projects } from "@/lib/data";
import { Project } from "@/types";

const accentMap: Record<Project["accent"], string> = {
  blue: "from-accent-blue/25 via-accent-blue/5",
  purple: "from-accent-purple/25 via-accent-purple/5",
  cyan: "from-accent-cyan/25 via-accent-cyan/5",
};

export default function Projects() {
  return (
    <section id="projects" className="py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects I've shipped"
          description="A mix of AI products, full-stack platforms, and hackathon builds — each one built to actually work, not just demo well."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass-card group flex flex-col overflow-hidden"
            >
              <div
                className={`relative flex h-32 items-end bg-gradient-to-br to-transparent p-5 ${accentMap[project.accent]}`}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 bg-grid-fade bg-grid opacity-30"
                />
                <p className="relative font-display text-xl font-medium">
                  {project.title}
                </p>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-medium uppercase tracking-wide text-accent-blue/80">
                  {project.tagline}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
                  {project.description}
                </p>

                <ul className="mt-4 space-y-1.5">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-xs text-ink-secondary"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-blue" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-line bg-white/[0.02] px-2 py-1 font-mono text-[11px] text-ink-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.highlight && (
                  <div className="mt-5 inline-flex items-center gap-1.5 self-start rounded-full border border-accent-purple/30 bg-accent-purple/10 px-3 py-1 text-xs text-accent-purple">
                    <Sparkles size={12} />
                    {project.highlight}
                  </div>
                )}

                <div className="mt-auto flex items-center gap-4 pt-6">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-ink-secondary transition-colors hover:text-ink-primary"
                    >
                      <Github size={15} /> Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-ink-secondary transition-colors hover:text-ink-primary"
                    >
                      <ExternalLink size={15} /> Live demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
