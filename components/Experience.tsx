"use client";

import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-28">
      <div className="container-page">
        <SectionHeading eyebrow="Experience" title="Where I've worked" />

        <div className="mt-14 space-y-6">
          {experience.map((item, i) => (
            <motion.div
              key={item.organization}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="glass-card grid gap-4 p-7 sm:grid-cols-[220px_1fr]"
            >
              <div>
                <h3 className="font-display text-lg font-medium text-ink-primary">
                  {item.organization}
                </h3>
                <p className="mt-1 text-sm text-accent-blue">{item.role}</p>
              </div>
              <ul className="space-y-2">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm text-ink-secondary leading-relaxed"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-purple" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
