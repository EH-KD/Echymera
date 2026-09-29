import type { HeroContent } from "@/types/content";

/**
 * HERO MEDIA: choose ONE of the two `media` options below.
 *
 *  - image (default): lightest and fastest, best for slow connections.
 *  - video: more cinematic. Needs a `poster` image, which shows instantly
 *    and stays as-is for visitors with reduced-motion or data-saver enabled.
 *
 * To switch, comment one block and uncomment the other. Nothing else changes.
 */
export const heroContent: HeroContent = {
  eyebrow: "Video production studio",
  headline: "Stories worth",
  headlineEmphasis: "watching.",
  description:
    "We are a film and commercial production house. From first idea to final grade, we make work people remember.",

  media: {
    type: "image",
    src: "/media/hero-still.jpg",
    alt: "Warm light breaking over a dark horizon at dusk",
  },
  // media: {
  //   type: "video",
  //   src: "/media/hero-loop.mp4",
  //   poster: "/media/hero-still.jpg",
  //   alt: "Warm light breaking over a dark horizon at dusk",
  // },

  primaryCta: { label: "View our work", href: "/work" },
  secondaryCta: { label: "Start a project", href: "/contact" },
};
