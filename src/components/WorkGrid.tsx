"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import {
  projectCategories,
  type Project,
  type ProjectCategory,
} from "@/types/project";

type Filter = "All" | ProjectCategory;

const WIDE_SIZES = "(min-width: 1440px) 1344px, 100vw";
const HALF_SIZES = "(min-width: 1440px) 668px, (min-width: 768px) 50vw, 100vw";

/** Every third project spans the full width; a lone last project does too. */
function isWide(index: number, total: number) {
  return index % 3 === 0 || (index === total - 1 && index % 3 === 1);
}

export default function WorkGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<Filter>("All");

  // Only offer categories that actually have projects.
  const categories = projectCategories.filter((category) =>
    projects.some((project) => project.category === category),
  );
  const filters: Filter[] = ["All", ...categories];

  const visible =
    active === "All"
      ? projects
      : projects.filter((project) => project.category === active);

  return (
    <div>
      <div
        role="group"
        aria-label="Filter projects by category"
        className="overflow-x-auto pb-2"
      >
        <ul className="flex w-max gap-2 md:w-auto md:flex-wrap">
          {filters.map((filter) => {
            const selected = filter === active;
            return (
              <li key={filter}>
                <button
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setActive(filter)}
                  className={`h-10 shrink-0 border px-5 text-sm tracking-wide transition-colors duration-300 ease-cinematic ${
                    selected
                      ? "border-paper bg-paper text-ink"
                      : "border-line text-muted hover:border-paper/50 hover:text-paper"
                  }`}
                >
                  {filter}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* aria-live announces the new count to screen readers after filtering */}
      <p className="eyebrow mt-8" aria-live="polite">
        {visible.length} {visible.length === 1 ? "project" : "projects"}
      </p>

      <ul className="mt-8 grid gap-x-8 gap-y-14 md:grid-cols-2 md:gap-y-20">
        {visible.map((project, index) => {
          const wide = isWide(index, visible.length);
          return (
            <li key={project.id} className={wide ? "md:col-span-2" : ""}>
              <ProjectCard
                project={project}
                headingAs="h2"
                aspectClassName={
                  wide ? "aspect-[4/3] md:aspect-[21/9]" : "aspect-[4/3] md:aspect-video"
                }
                sizes={wide ? WIDE_SIZES : HALF_SIZES}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
