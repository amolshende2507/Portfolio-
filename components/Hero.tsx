"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { profile } from "@/lib/data";
import CodeCard from "./CodeCard";

const floatingTech = [
  { label: "React", top: "8%", left: "4%", delay: 0 },
  { label: "Next.js", top: "68%", left: "0%", delay: 0.6 },
  { label: "FastAPI", top: "4%", left: "78%", delay: 1.1 },
  { label: "MongoDB", top: "80%", left: "82%", delay: 0.3 },
  { label: "TypeScript", top: "40%", left: "-4%", delay: 0.9 },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-28">
      {/* ambient grid + glow background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-fade bg-grid opacity-60"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-accent-blue/10 blur-[120px]"
      />

      <div className="container-page grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        {/* left: copy */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow mb-5"
          >
            Hi, I&apos;m Amol Shende 👋
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-medium leading-[1.08] tracking-tight"
          >
            Building scalable full stack applications{" "}
            <span className="gradient-text">&amp; AI-powered solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-base sm:text-lg text-ink-secondary leading-relaxed"
          >
            Computer Engineering student focused on MERN stack development,
            backend systems, AI integrations, and building user-friendly
            digital products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="#projects" className="btn-primary">
              View Projects
              <ArrowDown size={16} />
            </a>
            <a href={profile.resumeUrl} download className="btn-secondary">
              <Download size={16} />
              Download Resume
            </a>
            <a href="#contact" className="btn-secondary">
              <Mail size={16} />
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* right: signature animated code card + floating icons */}
        <div className="relative">
          {floatingTech.map((item) => (
            <motion.span
              key={item.label}
              className="glass absolute z-10 hidden rounded-full px-3 py-1.5 font-mono text-xs text-ink-secondary sm:block"
              style={{ top: item.top, left: item.left }}
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: item.delay,
              }}
            >
              {item.label}
            </motion.span>
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <CodeCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
