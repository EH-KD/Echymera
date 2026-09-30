import { projects } from "@/data/projects";
import type { Project } from "@/types/project";

// The only place that knows where projects come from. Pages and components
// call these functions. When a backend exists, only these bodies change.

export async function getProjects(): Promise<Project[]> {
  return projects;
}

export async function getFeaturedProjects(): Promise<Project[]> {
  return projects.filter((project) => project.featured);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  return projects.find((project) => project.slug === slug) ?? null;
}

/** Same-category projects first, then the rest, never the project itself. */
export async function getRelatedProjects(
  slug: string,
  limit = 2,
): Promise<Project[]> {
  const current = projects.find((project) => project.slug === slug);
  if (!current) return [];

  const others = projects.filter((project) => project.slug !== slug);
  const sameCategory = others.filter((p) => p.category === current.category);
  const rest = others.filter((p) => p.category !== current.category);

  return [...sameCategory, ...rest].slice(0, limit);
}
