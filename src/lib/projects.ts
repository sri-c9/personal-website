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
      'A Claude Code plugin that orchestrates your entire software dev lifecycle — planning, implementation, review, and ship. Human-in-the-loop where it matters, autonomous everywhere else.',
    tags: ['typescript', 'claude', 'cli'],
    featured: true,
  },
  {
    name: 'Ship CLI',
    description:
      'Internal developer CLI that auto-discovers CI/CD pipelines, persists environment state, and has a Claude-powered agent mode for headless troubleshooting. Used by 100+ engineers across 3 orgs.',
    tags: ['typescript', 'cli', 'claude'],
  },
  {
    name: 'DeepSafe',
    description:
      'ML safety tooling. Pitched to Berkeley SkyDeck, selected from 50+ teams to pitch in a university-wide competition.',
    tags: ['python', 'ml'],
  },
  {
    name: 'AI Secretary',
    description:
      'Talks like me, schedules like a pro. An AI phone agent that handles calls, books appointments, and manages your calendar — built with OpenAI, ElevenLabs, and Twilio.',
    tags: ['python', 'openai', 'twilio'],
    github: 'https://github.com/sri-c9/ai-secretary',
  },
  {
    name: 'AI RateMyProf',
    description:
      'Smarter professor reviews and summaries. Semantic search over RateMyProfessor data so you can actually find useful signals before picking classes.',
    tags: ['python', 'openai', 'pinecone'],
    github: 'https://github.com/sri-c9/ai-rate-my-prof',
  },
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getFeaturedProject(): Project | undefined {
  return projects.find((p) => p.featured);
}
