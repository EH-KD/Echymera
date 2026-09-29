import type { MediaItem } from "./media";

export type Cta = { label: string; href: string };

export type HeroContent = {
  eyebrow: string;
  headline: string;
  /** Rendered in italic + accent colour after the headline. */
  headlineEmphasis: string;
  description: string;
  media: MediaItem;
  primaryCta: Cta;
  secondaryCta: Cta;
};
