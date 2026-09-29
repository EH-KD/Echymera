import { siteConfig } from "@/lib/site";

const palette = [
  { name: "ink", swatch: "bg-ink" },
  { name: "surface", swatch: "bg-surface" },
  { name: "line", swatch: "bg-line" },
  { name: "paper", swatch: "bg-paper" },
  { name: "muted", swatch: "bg-muted" },
  { name: "accent", swatch: "bg-accent" },
];

// TEMPORARY: a design-system check page. Replaced by the real homepage in Step 3.
export default function Home() {
  return (
    <main className="container-page flex flex-1 flex-col justify-center gap-16 py-24">
      <header className="flex flex-col gap-6">
        <p className="eyebrow">{siteConfig.name} / Design system check</p>
        <h1 className="font-display text-display">
          Stories worth <em className="text-accent">watching.</em>
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-muted">
          {siteConfig.description}
        </p>
      </header>

      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {palette.map(({ name, swatch }) => (
          <li key={name} className="flex flex-col gap-3">
            <div className={`${swatch} h-20 border border-line`} />
            <span className="eyebrow">{name}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
