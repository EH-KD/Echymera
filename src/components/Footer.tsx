import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-page grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-6">
          <p className="font-display text-3xl">{siteConfig.name}</p>
          <p className="mt-4 max-w-sm text-muted">{siteConfig.tagline}</p>
        </div>

        <nav aria-label="Footer" className="md:col-span-3">
          <p className="eyebrow">Navigate</p>
          <ul className="mt-5 flex flex-col gap-3">
            {siteConfig.navLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-paper transition-colors duration-300 hover:text-accent"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <p className="eyebrow">Contact</p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-5 block text-paper transition-colors duration-300 hover:text-accent"
          >
            {siteConfig.email}
          </a>
        </div>
      </div>

      <div className="container-page border-t border-line py-6">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}
