import ButtonLink from "@/components/ButtonLink";
import Media from "@/components/Media";
import type { HeroContent } from "@/types/content";

// One shared entrance animation; disabled for visitors who prefer reduced motion.
const rise = "animate-rise motion-reduce:animate-none";

export default function Hero({ content }: { content: HeroContent }) {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-svh items-end overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <Media media={content.media} priority />
        {/* Scrims keep text and the navbar readable over any footage */}
        <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/40 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-ink/70 to-transparent" />
      </div>

      <div className="container-page pt-40 pb-14 md:pb-24">
        <p className={`eyebrow ${rise}`}>{content.eyebrow}</p>
        <h1
          id="hero-heading"
          className={`mt-6 max-w-5xl font-display text-display ${rise} [animation-delay:120ms]`}
        >
          {content.headline}{" "}
          <em className="text-accent">{content.headlineEmphasis}</em>
        </h1>
        <p
          className={`mt-8 max-w-xl text-lg leading-relaxed text-paper/75 ${rise} [animation-delay:240ms]`}
        >
          {content.description}
        </p>
        <div
          className={`mt-10 flex flex-col gap-4 sm:flex-row ${rise} [animation-delay:360ms]`}
        >
          <ButtonLink href={content.primaryCta.href}>
            {content.primaryCta.label}
          </ButtonLink>
          <ButtonLink href={content.secondaryCta.href} variant="secondary">
            {content.secondaryCta.label}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
