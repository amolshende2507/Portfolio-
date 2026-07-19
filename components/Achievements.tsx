"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { achievements } from "@/lib/data";

export default function Achievements() {
  return (
    <section id="achievements" className="py-28">
      <div className="container-page">
        <SectionHeading eyebrow="Recognition" title="Achievements" />

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="glass-card flex items-center gap-4 p-5"
            >
              <div className="rounded-lg border border-accent-blue/30 bg-accent-blue/10 p-2.5">
                <Award size={18} className="text-accent-blue" />
              </div>
              <div>
                <p className="text-sm font-medium text-ink-primary">
                  {item.title}
                </p>
                {item.detail && (
                  <p className="text-xs text-ink-secondary">{item.detail}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
