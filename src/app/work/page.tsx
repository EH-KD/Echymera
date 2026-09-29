import type { Metadata } from "next";

export const metadata: Metadata = { title: "Work" };

// TEMPORARY stub so the navigation can be tested. Replaced with the real page later.
export default function WorkPage() {
  return (
    <div className="container-page pt-32 pb-24">
      <p className="eyebrow">Portfolio</p>
      <h1 className="mt-6 font-display text-headline">Work</h1>
    </div>
  );
}
