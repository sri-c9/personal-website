import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About — Sri Chandramouli',
  description: 'About Sri Chandramouli — software engineer at Apple, MS in AI at UT Austin.',
};

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-8 py-16">
      <div className="space-y-16">
        <h1 className="text-3xl font-bold tracking-tight">About</h1>

        {/* Background */}
        <section className="space-y-4">
          <h2
            className="text-xs font-mono tracking-widest uppercase"
            style={{ color: 'var(--muted)' }}
          >
            Background
          </h2>
          <div className="space-y-4 text-[15px] leading-relaxed max-w-xl">
            <p>
              I&apos;m Sri — a software engineer at Apple, where I work on distributed systems,
              internal tooling, and LLM-powered apps. CS undergrad from UC Berkeley, currently
              wrapping up my MS in AI at UT Austin.
            </p>
            <p>
              I like building tools that get out of people&apos;s way — the kind that feel obvious
              in hindsight. Good system design, clear abstractions, and the occasional
              slightly over-engineered side project.
            </p>
          </div>
        </section>

        {/* Currently */}
        <section className="space-y-4">
          <h2
            className="text-xs font-mono tracking-widest uppercase"
            style={{ color: 'var(--muted)' }}
          >
            Currently
          </h2>
          <div className="space-y-4 text-[15px] leading-relaxed max-w-xl">
            <p>
              Building CruiseControl — a Claude Code plugin that orchestrates the full
              software dev lifecycle. It&apos;s my attempt to make AI-assisted development
              actually feel like working with a thoughtful collaborator, not just a
              very fast autocomplete.
            </p>
            <p>
              Also: finishing my MS thesis, writing occasionally, and finding excuses
              to tinker with voice AI and agent tooling.
            </p>
          </div>
        </section>

        {/* Outside the Code */}
        <section className="space-y-4">
          <h2
            className="text-xs font-mono tracking-widest uppercase"
            style={{ color: 'var(--muted)' }}
          >
            Outside the Code
          </h2>
          <div className="space-y-4 text-[15px] leading-relaxed max-w-xl">
            <p>
              I brew pour-over coffee with more precision than most of my side projects deserve.
              I boulder — badly, but consistently. I play classical flute, mostly for myself,
              occasionally for unsuspecting roommates.
            </p>
            <p>
              I collect vinyl (jazz, ambient, the occasional guilty pleasure), shoot film
              photography, play tennis when someone will have me, and lose at chess to
              people who clearly read openings theory.
            </p>
          </div>
        </section>

        {/* Elsewhere */}
        <section className="space-y-4">
          <h2
            className="text-xs font-mono tracking-widest uppercase"
            style={{ color: 'var(--muted)' }}
          >
            Elsewhere
          </h2>
          <div className="flex flex-col gap-2">
            <Link
              href="https://github.com/sri-c9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
              style={{ color: 'var(--accent)' }}
            >
              GitHub ↗
            </Link>
            <Link
              href="https://www.linkedin.com/in/srichandramouli/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
              style={{ color: 'var(--accent)' }}
            >
              LinkedIn ↗
            </Link>
            <Link
              href="mailto:sri.chandramouli9@gmail.com"
              className="inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
              style={{ color: 'var(--accent)' }}
            >
              Email ↗
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
