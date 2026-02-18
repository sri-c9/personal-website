import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Writing — Sri Chandramouli',
  description: 'Articles and thoughts on software engineering and technology.',
};

export default function Writing() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-8 py-16">
      <div className="space-y-12">
        <h1 className="text-4xl font-semibold tracking-tight">Writing</h1>

        {posts.length === 0 ? (
          <p style={{ color: 'var(--muted)' }}>No posts yet. Check back soon.</p>
        ) : (
          <div className="divide-y" style={{ borderColor: 'var(--border)' }}>
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/writing/${post.slug}`}
                className="group flex gap-8 py-7 items-start transition-colors"
              >
                <time
                  className="shrink-0 text-xs font-mono pt-1 w-24"
                  style={{ color: 'var(--muted)' }}
                  dateTime={post.date}
                >
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </time>
                <div className="space-y-1.5 min-w-0">
                  <h2
                    className="font-semibold leading-snug group-hover:text-[var(--accent)] transition-colors"
                  >
                    {post.title}
                  </h2>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
