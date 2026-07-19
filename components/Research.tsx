"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { research } from "@/lib/data";

export default function Research() {
  return (
    <section id="research" className="py-28">
      <div className="container-page">
        <SectionHeading eyebrow="Research" title="Published work" />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="glass-card mt-14 p-8"
        >
          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-accent-gradient p-3">
              <FileText size={20} className="text-white" />
            </div>
            <div>
              <h3 className="font-display text-xl font-medium text-ink-primary">
                {research.title}
              </h3>
              <p className="mt-1 text-sm text-accent-blue">
                {research.conference}
              </p>
            </div>
          </div>

          <ul className="mt-6 space-y-2.5 border-t border-line pt-6">
            {research.points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-2.5 text-sm text-ink-secondary leading-relaxed"
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-blue" />
                {point}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
