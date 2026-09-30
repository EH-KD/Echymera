import Link from "next/link";
import Media from "@/components/Media";
import type { Project } from "@/types/project";

const rise = "animate-rise motion-reduce:animate-none";

export default function ProjectHero({ project }: { project: Project }) {
  const { title, category, year, client, hero } = project;

  return (
    <section
      aria-labelledby="project-title"
      className="relative isolate flex min-h-[80svh] items-end overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <Media media={hero} priority />
        <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/30 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-ink/70 to-transparent" />
      </div>

      <div className="container-page pt-40 pb-12 md:pb-20">
        <Link
          href="/work"
          className="text-sm tracking-wide text-paper/70 transition-colors duration-300 hover:text-accent"
        >
          <span aria-hidden="true">&larr;</span> All work
        </Link>
        <p className={`eyebrow mt-10 ${rise}`}>
          {category} &middot; {year}
        </p>
        <h1
          id="project-title"
          className={`mt-5 max-w-5xl font-display text-display ${rise} [animation-delay:120ms]`}
        >
          {title}
        </h1>
        {client && (
          <p className={`mt-6 text-lg text-paper/75 ${rise} [animation-delay:240ms]`}>
            for {client}
          </p>
        )}
      </div>
    </section>
  );
}
