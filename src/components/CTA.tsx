import type { ReactNode } from "react";
import ButtonLink from "@/components/ButtonLink";
import { siteConfig } from "@/lib/site";

type Props = {
  eyebrow?: string;
  title?: ReactNode;
  description?: string;
  cta?: { label: string; href: string };
};

/** Closing call to action. Reused at the end of the homepage and case studies. */
export default function CTA({
  eyebrow = "Start a project",
  title = (
    <>
      Have a project <em className="text-accent">in mind?</em>
    </>
  ),
  description = "Tell us about your idea, your timeline and what you want people to feel. We will reply within a couple of working days.",
  cta = { label: "Get in touch", href: "/contact" },
}: Props) {
  return (
    <section aria-labelledby="cta-heading" className="border-t border-line">
      <div className="container-page py-28 md:py-44">
        <p className="eyebrow">{eyebrow}</p>
        <h2
          id="cta-heading"
          className="mt-6 max-w-4xl font-display text-display"
        >
          {title}
        </h2>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
          {description}
        </p>
        <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
          <ButtonLink href={cta.href}>{cta.label}</ButtonLink>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-paper underline decoration-line underline-offset-8 transition-colors duration-300 hover:text-accent hover:decoration-accent"
          >
            {siteConfig.email}
          </a>
        </div>
      </div>
    </section>
  );
}
