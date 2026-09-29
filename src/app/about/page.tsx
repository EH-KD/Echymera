import type { Metadata } from "next";

export const metadata: Metadata = { title: "About" };

// TEMPORARY stub so the navigation can be tested. Replaced with the real page later.
export default function AboutPage() {
  return (
    <div className="container-page pt-32 pb-24">
      <p className="eyebrow">Studio</p>
      <h1 className="mt-6 font-display text-headline">About</h1>
    </div>
  );
}
