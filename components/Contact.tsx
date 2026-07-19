"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { profile } from "@/lib/data";

const socials = [
  { label: "GitHub", href: profile.github, icon: Github },
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
];

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!WEB3FORMS_KEY) {
      console.error("Missing NEXT_PUBLIC_WEB3FORMS_KEY");
      setStatus("error");
      return;
    }

    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", WEB3FORMS_KEY);
    formData.append(
      "subject",
      `Portfolio inquiry from ${formData.get("name")}`
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        console.error(result);
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          description="Open to internships, placements, freelance work, and interesting collaborations."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <motion.form
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            noValidate
            className="glass-card space-y-5 p-7"
          >
            <input
              type="hidden"
              name="subject"
              value="Portfolio Contact Form"
            />

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs text-ink-secondary"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-lg border border-line bg-white/[0.02] px-4 py-2.5 text-sm text-ink-primary placeholder:text-ink-muted focus:border-accent-blue/50 focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs text-ink-secondary"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-line bg-white/[0.02] px-4 py-2.5 text-sm text-ink-primary placeholder:text-ink-muted focus:border-accent-blue/50 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-xs text-ink-secondary"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about the role or project..."
                className="w-full resize-none rounded-lg border border-line bg-white/[0.02] px-4 py-2.5 text-sm text-ink-primary placeholder:text-ink-muted focus:border-accent-blue/50 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {status === "loading" ? (
                <>
                  <Send size={16} />
                  Sending...
                </>
              ) : status === "success" ? (
                <>
                  <CheckCircle2 size={16} />
                  Message sent
                </>
              ) : status === "error" ? (
                <>
                  <AlertCircle size={16} />
                  Try again
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send message
                </>
              )}
            </button>

            {status === "success" && (
              <p className="text-xs text-accent-cyan">
                Thanks! Your message has been sent successfully. I&apos;ll get back
                to you as soon as possible.
              </p>
            )}

            {status === "error" && (
              <p className="text-xs text-red-400">
                Failed to send your message. You can also email me directly at{" "}
                <a
                  href={`mailto:${profile.email}`}
                  className="text-accent-blue underline"
                >
                  {profile.email}
                </a>
                .
              </p>
            )}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-7"
          >
            <p className="font-display text-lg font-medium text-ink-primary">
              Find me elsewhere
            </p>

            <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
              I usually reply within one or two days. Feel free to connect with
              me on any of the platforms below.
            </p>

            <div className="mt-6 space-y-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg border border-line bg-white/[0.02] px-4 py-3 text-sm text-ink-secondary transition-colors hover:border-accent-blue/40 hover:text-ink-primary"
                >
                  <social.icon size={16} />
                  {social.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}