import type { Metadata } from "next";
import ButtonLink from "@/components/ButtonLink";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[70svh] flex-col justify-center pt-32 pb-24">
      <p className="eyebrow">Error 404</p>
      <h1 className="mt-6 font-display text-display">
        Lost the <em className="text-accent">scene.</em>
      </h1>
      <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
        The page you are looking for does not exist or has moved.
      </p>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <ButtonLink href="/work">View our work</ButtonLink>
        <ButtonLink href="/" variant="secondary">
          Back home
        </ButtonLink>
      </div>
    </div>
  );
}
