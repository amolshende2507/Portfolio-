"use client";

import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { stats } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-28">
      <div className="container-page grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="About"
            title="A builder first, a student on paper"
          />
          <div className="mt-6 space-y-5 text-ink-secondary leading-relaxed">
            <p>
              I&apos;m a final-year Computer Engineering student who spends
              more time in the editor than the syllabus asks for. What
              started as coursework turned into a habit of shipping things —
              APIs, dashboards, and small AI-powered tools — end to end.
            </p>
            <p>
              I care about solving real problems, not just checking
              requirements. That means owning a project from database schema
              to the last pixel of the UI, and being comfortable moving
              between a Next.js frontend and a FastAPI backend in the same
              afternoon.
            </p>
            <p>
              Lately, most of my curiosity goes toward AI-powered products —
              how large language models fit into real workflows, and how to
              wrap that intelligence in an interface people actually enjoy
              using.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="glass-card p-6"
            >
              <p className="font-display text-3xl font-semibold gradient-text">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-ink-secondary">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
