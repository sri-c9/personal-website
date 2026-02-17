import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Sri Chandramouli',
  description: 'Learn more about Sri Chandramouli',
};

export default function About() {
  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="space-y-8">
        <h1 className="text-4xl font-bold tracking-tight">About</h1>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed">
            I'm a software engineer passionate about building elegant solutions to complex problems.
          </p>

          <p className="leading-relaxed">
            My interests span across web development, distributed systems, and developer tools.
            I enjoy working on projects that make a meaningful impact and help people be more productive.
          </p>

          <p className="leading-relaxed">
            When I'm not coding, you can find me exploring new technologies, reading, or
            learning something new.
          </p>
        </div>
      </div>
    </div>
  );
}
