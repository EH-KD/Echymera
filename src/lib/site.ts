/**
 * Single source of truth for site-wide identity.
 * Placeholder values: replace with the real studio details.
 */
export const siteConfig = {
  name: "Meridian Film Co.",
  tagline: "Films, commercials and stories worth watching.",
  description:
    "Meridian Film Co. is a video production house crafting cinematic films, commercials and branded content.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: "hello@example.com",
  // Shared by Navbar and Footer so the two never drift apart.
  navLinks: [
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;
