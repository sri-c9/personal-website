# Personal Website Redesign — Design Document

**Date:** 2026-02-16
**Status:** Approved

---

## Overview

Redesign of Sri Chandramouli's personal website. The goal is a site that functions as a personal presence, writing platform, and project showcase simultaneously — with a clean, technical aesthetic aligned with the Linear/Vercel/Planetscale design ecosystem.

**Vibe:** Clean & technical. Confident, zero fluff. The kind of site that respects the reader's time.

---

## Site Map

```
/                 → Gateway homepage
/writing          → Blog post list
/writing/[slug]   → Individual post (existing: /blog/[slug], rename)
/projects         → Projects grid
/about            → Full about page
```

Note: The existing `/blog` route becomes `/writing` to better match the content framing.

---

## Tech Stack

No changes to the existing stack:
- **Framework:** Next.js (App Router)
- **Runtime:** Bun
- **Styling:** Tailwind CSS v4
- **Font:** Inter (via next/font/google)
- **Theme:** next-themes (dark/light, class-based)
- **Blog:** next-mdx-remote + gray-matter

---

## Design System

### Colors

| Role | CSS Variable | Dark | Light |
|---|---|---|---|
| Background | `--background` | `#09090b` | `#fafafa` |
| Surface | `--surface` | `#111113` | `#ffffff` |
| Border | `--border` | `#27272a` | `#e4e4e7` |
| Text primary | `--foreground` | `#fafafa` | `#09090b` |
| Text muted | `--muted` | `#71717a` | `#71717a` |
| Accent | `--accent` | `#818cf8` | `#6366f1` |

**Accent color:** Indigo. Used for links, hover states, gradient text, and border glow on card hover. Not overused.

### Typography

- **Primary font:** Inter (already installed)
- **Monospace:** System monospace (`font-mono`) for dates, tech tags, section labels
- No additional font imports needed

### Spacing & Layout

- Content max-width: `max-w-3xl` (768px)
- Padding: `px-4 sm:px-8`
- Dark mode default; light mode available via toggle
- Generous negative space between sections — no cramming

---

## Components

### Header

- Slim sticky header (`h-14`)
- Left: "Sri Chandramouli" as home link (text-sm, semibold)
- Right: Writing · Projects · About nav links + theme toggle
- Subtle bottom border (`border-b border-border/50`)
- No backdrop blur (clean, not frosted)

### Footer

- Minimal: copyright + year
- Muted text, centered
- Subtle top border

### Card

Reusable card component used on homepage and `/projects`:
- Background: `--surface`
- Border: `1px solid --border`
- Border-radius: `rounded-lg`
- Hover: border color transitions to `--accent` (subtle glow via `box-shadow`)
- Padding: `p-5`

---

## Pages

### Homepage (`/`)

**Hero section:**
- Large display text: tagline with gradient treatment on key phrase
  - Example: `Software engineer, builder, and learner.`
  - Gradient: `white → --accent` on "builder, and learner"
- Short bio line: 1–2 sentences, muted color
- Two text CTAs: `Read my writing →` and `See projects →`
- Left-aligned (not centered) — editorial, not landing-page

**Featured section:**
- Section label: `Featured` in monospace, muted, small
- 2-column card grid (1-col on mobile):
  - Card 1: Latest writing post — title, date (monospace), excerpt
  - Card 2: Featured project — name, tech tags (monospace), description
- Full-width "About" strip below cards — 1–2 sentences + link to `/about`

### Writing (`/writing`)

- Simple list layout. No cards.
- Each post: date (monospace, left), title (right), muted description below
- Sorted newest first
- On hover: title underlines in accent color

### Writing Post (`/writing/[slug]`)

- Existing functionality preserved (MDX rendering, Typography plugin)
- Updated header/footer
- Breadcrumb: `← Writing` in small muted text above title

### Projects (`/projects`)

- 2-column card grid (1-col on mobile)
- Each card: project name (semibold), short description, tech tags (monospace pill style), links (GitHub + live)
- Cards use the shared Card component with hover glow

### About (`/about`)

- Prose-style with personality — not a resume
- Sections: Background · What I'm working on · Elsewhere (social links)
- Short paragraphs, no walls of text
- Social links: GitHub, Twitter/X, LinkedIn (whichever apply)
- Uses Tailwind Typography for prose but with custom overrides for the color system

---

## Route Changes

| Old | New | Notes |
|---|---|---|
| `/blog` | `/writing` | Rename route and directory |
| `/blog/[slug]` | `/writing/[slug]` | Rename with breadcrumb added |

---

## What's Not Changing

- MDX blog system (gray-matter + next-mdx-remote) — keep as-is
- next-themes dark/light toggle
- Next.js App Router structure
- Bun as runtime
- Tailwind CSS v4

---

## Success Criteria

1. Homepage communicates who Sri is within 5 seconds
2. Writing and projects are both first-class — neither feels secondary
3. Dark mode looks premium, not just "inverted"
4. The accent color is noticeable but not overwhelming
5. Mobile looks as good as desktop
6. No placeholder text anywhere when launched
