import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About — Sri Chandramouli',
  description: 'About Sri Chandramouli — software engineer, builder, learner.',
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
              internal tooling, and LLM-powered applications. I studied CS at UC Berkeley
              and I&apos;m currently doing my MS in AI at UT Austin.
            </p>
            <p>
              I care about well-crafted developer tools, clear system design, and building
              things that actually get used. I&apos;m drawn to problems where good software makes
              a real difference to the people working with it.
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
              Building CruiseControl — a Claude Code-powered SDLC orchestration plugin.
              Finishing my MS in AI at UT Austin. Writing about systems, tools, and
              things I&apos;m figuring out.
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
