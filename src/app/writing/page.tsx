import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog - Sri Chandramouli',
  description: 'Articles and thoughts on software engineering and technology',
};

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="space-y-12">
        <h1 className="text-4xl font-bold tracking-tight">Blog</h1>

        {posts.length === 0 ? (
          <p style={{ color: 'var(--muted)' }}>No posts yet. Check back soon!</p>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.slug} className="space-y-2">
                <Link
                  href={`/writing/${post.slug}`}
                  className="group block space-y-2"
                >
                  <h2 className="text-2xl font-semibold group-hover:underline">
                    {post.title}
                  </h2>
                  <time
                    className="text-sm"
                    style={{ color: 'var(--muted)' }}
                    dateTime={post.date}
                  >
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <p style={{ color: 'var(--muted)' }}>{post.description}</p>
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
