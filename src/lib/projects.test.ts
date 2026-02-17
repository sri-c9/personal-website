import { test, expect } from 'bun:test';
import { getAllProjects } from './projects';

test('getAllProjects returns an array', () => {
  const projects = getAllProjects();
  expect(Array.isArray(projects)).toBe(true);
});

test('each project has required fields', () => {
  const projects = getAllProjects();
  for (const p of projects) {
    expect(typeof p.name).toBe('string');
    expect(typeof p.description).toBe('string');
    expect(Array.isArray(p.tags)).toBe(true);
  }
});
