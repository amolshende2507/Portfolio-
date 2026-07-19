# Amol Shende — Developer Portfolio

A dark-mode developer portfolio built with Next.js 14 (App Router), TypeScript,
Tailwind CSS, and Framer Motion.

## Stack

- **Next.js 14** — App Router, SEO metadata
- **TypeScript** — typed components, props, and data models
- **Tailwind CSS** — custom design tokens (colors, fonts, glass utilities)
- **Framer Motion** — scroll reveals, hover interactions, hero animation
- **lucide-react** — icon set

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  layout.tsx        # fonts, SEO metadata, root shell
  page.tsx           # assembles all sections
  globals.css         # design tokens & base styles
components/
  Navbar.tsx, Hero.tsx, About.tsx, Skills.tsx, Projects.tsx,
  Experience.tsx, Research.tsx, Achievements.tsx, Contact.tsx, Footer.tsx
  CodeCard.tsx        # animated hero code editor (signature element)
  ui/
    GlassCard.tsx
    SectionHeading.tsx
lib/
  data.ts             # all content lives here — edit this to update copy
types/
  index.ts            # shared TypeScript interfaces
```

## Before you deploy

1. **Resume** — drop your PDF at `public/resume.pdf` (the Download Resume
   button links to `/resume.pdf`).
2. **Content** — everything (projects, skills, experience, links) is centralized
   in `lib/data.ts`. Update `profile.github`, `profile.linkedin`, `profile.email`,
   and each project's `github` / `demo` URLs.
3. **Domain** — update `metadataBase` in `app/layout.tsx` once you have a
   production domain, for correct Open Graph previews.
4. **Contact form** — currently opens the visitor's email client via `mailto:`.
   Swap in a form provider (Formspree, Resend, etc.) inside `components/Contact.tsx`
   if you'd like inline submission instead.

## Deploy

The project deploys as-is to [Vercel](https://vercel.com):

```bash
npx vercel
```
