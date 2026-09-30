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
