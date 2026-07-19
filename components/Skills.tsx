"use client";

import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { skillCategories } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I reach for"
          description="A working toolkit built through projects, internships, and a fair amount of trial and error — not just a syllabus checklist."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, ci) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: ci * 0.06 }}
              className="glass-card p-6"
            >
              <h3 className="font-display text-sm font-medium tracking-wide text-ink-primary">
                {category.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill.name}
                    className="group inline-flex items-center rounded-lg border border-line bg-white/[0.02] px-3 py-1.5 font-mono text-xs text-ink-secondary transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-blue/40 hover:text-ink-primary"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
