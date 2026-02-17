export interface Project {
  name: string;
  description: string;
  tags: string[];
  github?: string;
  url?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    name: 'CruiseControl',
    description:
      'Claude Code-powered SDLC orchestration plugin. 5 skills that orchestrate human-in-the-loop actions, with a local-first markdown-backed memory system to persist state across SDLC stages.',
    tags: ['typescript', 'claude', 'cli'],
    github: 'https://github.com/sri-c9',
    featured: true,
  },
  {
    name: 'Ship CLI',
    description:
      'Stateful DX orchestration CLI with a confidence-score search algorithm to auto-discover pipelines and persist environment state. Claude-powered Agent Mode for headless troubleshooting. Adopted by 100+ engineers across 3 orgs.',
    tags: ['typescript', 'cli', 'claude'],
    github: 'https://github.com/sri-c9',
  },
  {
    name: 'DeepSafe',
    description:
      'Pitched to Berkeley SkyDeck incubator. Selected from 50+ teams to pitch in a university-wide competition.',
    tags: ['python', 'ml'],
    github: 'https://github.com/sri-c9',
  },
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getFeaturedProject(): Project | undefined {
  return projects.find((p) => p.featured);
}
