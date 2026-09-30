import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/project";

type Props = {
  project: Project;
  /** Tells the browser how wide this card displays, so it downloads the right image size. */
  sizes: string;
  /** Tailwind aspect classes. Different layouts crop the thumbnail differently. */
  aspectClassName?: string;
  /** Use "h2" where the card sits directly under the page's h1 (e.g. the Work page). */
  headingAs?: "h2" | "h3";
  priority?: boolean;
};

export default function ProjectCard({
  project,
  sizes,
  aspectClassName = "aspect-video",
  headingAs: Heading = "h3",
  priority = false,
}: Props) {
  const { title, slug, category, client, year, thumbnail } = project;

  return (
    <article>
      <Link href={`/work/${slug}`} className="group block">
        <div className={`relative overflow-hidden bg-surface ${aspectClassName}`}>
          <Image
            src={thumbnail.src}
            alt={thumbnail.alt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover transition-transform duration-700 ease-cinematic motion-safe:group-hover:scale-105 motion-safe:group-focus-visible:scale-105"
          />
          <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 ease-cinematic group-hover:bg-ink/30 group-focus-visible:bg-ink/30" />
          <span
            aria-hidden="true"
            className="absolute right-5 bottom-5 translate-y-2 bg-paper px-4 py-2 text-xs font-medium tracking-wide text-ink opacity-0 transition-[opacity,translate] duration-500 ease-cinematic group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
          >
            View project &rarr;
          </span>
        </div>

        <div className="mt-5 flex items-start justify-between gap-6">
          <div>
            <Heading className="font-display text-3xl leading-tight transition-colors duration-300 group-hover:text-accent group-focus-visible:text-accent md:text-4xl">
              {title}
            </Heading>
            {client && <p className="mt-2 text-sm text-muted">{client}</p>}
          </div>
          <p className="eyebrow shrink-0 pt-2 text-right">
            {category} &middot; {year}
          </p>
        </div>
      </Link>
    </article>
  );
}
