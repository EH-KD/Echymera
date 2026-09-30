import type { MetadataRoute } from "next";
import { getProjects } from "@/lib/projects";
import { siteConfig } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getProjects();
  const pages = ["", "/work", "/about", "/contact"];

  return [
    ...pages.map((path) => ({ url: `${siteConfig.url}${path}` })),
    ...projects.map((project) => ({
      url: `${siteConfig.url}/work/${project.slug}`,
    })),
  ];
}
