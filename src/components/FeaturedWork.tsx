import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import type { Project } from "@/types/project";

/**
 * Homepage showcase: one wide lead project, then the rest in a two-column grid.
 * Works for any number of projects, but is designed for three.
 */
export default function FeaturedWork({ projects }: { projects: Project[] }) {
  const [lead, ...rest] = projects;
  if (!lead) return null;

  return (
    <section
      aria-labelledby="featured-heading"
      className="container-page py-24 md:py-36"
    >
      <SectionHeading
        id="featured-heading"
        eyebrow="Featured work"
        title={
          <>
            Selected <em className="text-accent">projects</em>
          </>
        }
        action={{ label: "View all work", href: "/work" }}
      />

      <div className="mt-12 flex flex-col gap-14 md:mt-16 md:gap-20">
        <ProjectCard
          project={lead}
          aspectClassName="aspect-[4/3] md:aspect-[21/9]"
          sizes="(min-width: 1440px) 1344px, 100vw"
        />

        {rest.length > 0 && (
          <div className="grid gap-14 md:grid-cols-2 md:gap-x-8 md:gap-y-20">
            {rest.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                aspectClassName="aspect-[4/3] md:aspect-video"
                sizes="(min-width: 1440px) 668px, (min-width: 768px) 50vw, 100vw"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
