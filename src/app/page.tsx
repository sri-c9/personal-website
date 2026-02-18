import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import { getFeaturedProject } from '@/lib/projects';
import { Card } from '@/components/card';

export default function Home() {
  const posts = getAllPosts();
  const latestPost = posts[0] ?? null;
  const featuredProject = getFeaturedProject() ?? null;

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-8">
      {/* Hero */}
      <section className="py-24 space-y-7">
        <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl leading-[1.1]">
          Building things that are smart, fun, and{' '}
          <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>slightly over-engineered.</span>
        </h1>
        <p className="text-lg max-w-xl leading-relaxed" style={{ color: 'var(--muted)' }}>
          Software engineer at Apple, finishing my MS in AI at UT Austin. Currently building developer tools by day and tinkering with AI projects by night — fueled by too much coffee.
        </p>
        <div className="flex items-center gap-6">
          <Link href="/writing" className="link-accent text-sm font-medium">
            Read my writing →
          </Link>
          <Link href="/projects" className="link-muted text-sm font-medium">
            See projects →
          </Link>
        </div>
      </section>

      {/* Featured */}
      <section className="pb-24 space-y-6">
        <p className="text-xs font-mono tracking-widest uppercase" style={{ color: 'var(--muted)' }}>
          Featured
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Latest post card */}
          {latestPost ? (
            <Link href={`/writing/${latestPost.slug}`} className="block group">
              <Card className="h-full space-y-3">
                <p className="text-xs font-mono" style={{ color: 'var(--muted)' }}>
                  {new Date(latestPost.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </p>
                <h2 className="font-semibold leading-snug group-hover:text-[var(--accent)] transition-colors">
                  {latestPost.title}
                </h2>
                <p className="text-sm line-clamp-2" style={{ color: 'var(--muted)' }}>
                  {latestPost.description}
                </p>
              </Card>
            </Link>
          ) : (
            <Link href="/writing" className="block group">
              <Card className="h-full space-y-3">
                <p className="text-xs font-mono" style={{ color: 'var(--muted)' }}>Writing</p>
                <h2 className="font-semibold group-hover:text-[var(--accent)] transition-colors">
                  No posts yet
                </h2>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>
                  Check back soon.
                </p>
              </Card>
            </Link>
          )}

          {/* Featured project card */}
          {featuredProject ? (
            <Link
              href={featuredProject.url ?? featuredProject.github ?? '/projects'}
              className="block group"
              target={featuredProject.url ? '_blank' : undefined}
              rel={featuredProject.url ? 'noopener noreferrer' : undefined}
            >
              <Card className="h-full space-y-3">
                <p className="text-xs font-mono" style={{ color: 'var(--muted)' }}>Project</p>
                <h2 className="font-semibold group-hover:text-[var(--accent)] transition-colors">
                  {featuredProject.name}
                </h2>
                <p className="text-sm line-clamp-2" style={{ color: 'var(--muted)' }}>
                  {featuredProject.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {featuredProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2 py-0.5 rounded"
                      style={{ backgroundColor: 'var(--border)', color: 'var(--muted)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            </Link>
          ) : (
            <Link href="/projects" className="block group">
              <Card className="h-full space-y-3">
                <p className="text-xs font-mono" style={{ color: 'var(--muted)' }}>Projects</p>
                <h2 className="font-semibold group-hover:text-[var(--accent)] transition-colors">
                  See what I&apos;ve built →
                </h2>
              </Card>
            </Link>
          )}
        </div>

        {/* About strip */}
        <Card>
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="text-xs font-mono" style={{ color: 'var(--muted)' }}>About me</p>
              <p className="text-sm leading-relaxed">
                I like clean tools, clear thinking, and things that are just slightly over-engineered. Also coffee.
              </p>
            </div>
            <Link href="/about" className="link-accent shrink-0 text-sm font-medium whitespace-nowrap">
              More →
            </Link>
          </div>
        </Card>
      </section>
    </div>
  );
}
