import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import CTA from "@/components/CTA";
import FilmPlayer from "@/components/FilmPlayer";
import MediaGallery from "@/components/MediaGallery";
import ProjectCard from "@/components/ProjectCard";
import ProjectHero from "@/components/ProjectHero";
import SectionHeading from "@/components/SectionHeading";
import {
  getProjectBySlug,
  getProjects,
  getRelatedProjects,
} from "@/lib/projects";

// Pre-render one static page per project at build time.
export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return {};

  const description =
    project.description.length > 155
      ? `${project.description.slice(0, 152).trimEnd()}...`
      : project.description;
  const image =
    project.hero.type === "image" ? project.hero.src : project.hero.poster;

  return {
    title: project.title,
    description,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: project.title,
      description,
      images: [{ url: image, alt: project.hero.alt }],
    },
  };
}

function Detail({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <dt className="eyebrow">{label}</dt>
      <dd className="mt-3 text-paper">{children}</dd>
    </div>
  );
}

export default async function ProjectPage({
  params,
}: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  const related = await getRelatedProjects(project.slug, 2);

  return (
    <>
      <ProjectHero project={project} />

      <section
        aria-label="Project details"
        className="container-page grid gap-14 py-20 md:grid-cols-12 md:py-32"
      >
        <dl className="grid gap-8 sm:grid-cols-2 md:col-span-4 md:grid-cols-1 md:gap-10">
          {project.client && <Detail label="Client">{project.client}</Detail>}
          <Detail label="Category">{project.category}</Detail>
          <Detail label="Year">{project.year}</Detail>
          <Detail label="Services">
            <ul className="flex flex-col gap-1">
              {project.services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </Detail>
        </dl>
        <p className="font-display text-3xl leading-snug md:col-span-8 md:text-5xl md:leading-tight">
          {project.description}
        </p>
      </section>

      {project.film && (
        <section
          aria-labelledby="film-heading"
          className="container-page pb-20 md:pb-32"
        >
          <h2 id="film-heading" className="eyebrow mb-6">
            Watch the film
          </h2>
          <FilmPlayer film={project.film} />
        </section>
      )}

      {project.gallery.length > 0 && (
        <section
          aria-labelledby="gallery-heading"
          className="container-page pb-20 md:pb-32"
        >
          <h2 id="gallery-heading" className="eyebrow mb-6">
            Gallery
          </h2>
          <MediaGallery items={project.gallery} />
        </section>
      )}

      {project.credits.length > 0 && (
        <section
          aria-labelledby="credits-heading"
          className="container-page grid gap-10 pb-24 md:grid-cols-12 md:pb-36"
        >
          <h2
            id="credits-heading"
            className="font-display text-headline md:col-span-4"
          >
            Credits
          </h2>
          <dl className="divide-y divide-line border-y border-line md:col-span-8">
            {project.credits.map((credit) => (
              <div
                key={`${credit.role}-${credit.name}`}
                className="flex items-baseline justify-between gap-6 py-5"
              >
                <dt className="eyebrow">{credit.role}</dt>
                <dd className="text-right text-lg">{credit.name}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {related.length > 0 && (
        <section
          aria-labelledby="related-heading"
          className="container-page border-t border-line py-20 md:py-32"
        >
          <SectionHeading
            id="related-heading"
            eyebrow="Keep watching"
            title={
              <>
                More <em className="text-accent">work</em>
              </>
            }
            action={{ label: "View all work", href: "/work" }}
          />
          <div className="mt-12 grid gap-14 md:mt-16 md:grid-cols-2 md:gap-x-8">
            {related.map((item) => (
              <ProjectCard
                key={item.id}
                project={item}
                sizes="(min-width: 1440px) 668px, (min-width: 768px) 50vw, 100vw"
                aspectClassName="aspect-[4/3] md:aspect-video"
              />
            ))}
          </div>
        </section>
      )}

      <CTA />
    </>
  );
}
