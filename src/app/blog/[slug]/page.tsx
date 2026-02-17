import type { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllPosts, getPostBySlug } from '@/lib/blog';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return {
    title: `${post.title} - Sri Chandramouli`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return (
    <article className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-16">
      <header className="mb-8 space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">{post.title}</h1>
        <time
          className="block text-sm"
          style={{ color: 'var(--muted)' }}
          dateTime={post.date}
        >
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
      </header>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
