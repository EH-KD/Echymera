import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact" };

// TEMPORARY stub so the navigation can be tested. Replaced with the real page later.
export default function ContactPage() {
  return (
    <div className="container-page pt-32 pb-24">
      <p className="eyebrow">Get in touch</p>
      <h1 className="mt-6 font-display text-headline">Contact</h1>
    </div>
  );
}
