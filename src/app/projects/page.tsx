import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllProjects } from '@/lib/projects';
import { Card } from '@/components/card';

export const metadata: Metadata = {
  title: 'Projects — Sri Chandramouli',
  description: "Things I've built.",
};

export default function Projects() {
  const projects = getAllProjects();

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-8 py-16">
      <div className="space-y-12">
        <h1 className="text-4xl font-semibold tracking-tight">Projects</h1>

        {projects.length === 0 ? (
          <p style={{ color: 'var(--muted)' }}>Coming soon.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {projects.map((project) => (
              <Card key={project.name} className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <h2 className="font-semibold">{project.name}</h2>
                  <div className="flex items-center gap-3 shrink-0">
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-muted text-xs font-mono"
                      >
                        GitHub
                      </Link>
                    )}
                    {project.url && (
                      <Link
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-accent text-xs font-mono"
                      >
                        Live ↗
                      </Link>
                    )}
                  </div>
                </div>

                <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag) => (
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
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
