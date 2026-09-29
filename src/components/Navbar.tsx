"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/site";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  // We store the path the menu was opened on, not a plain boolean.
  // The menu counts as open only while we are still on that path, so it
  // closes automatically on navigation (links, back button) with no effect.
  const [openedOn, setOpenedOn] = useState<string | null>(null);
  const menuOpen = openedOn === pathname;

  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);

  // Transparent over the page at the top; solid + blurred once scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // While the mobile menu is open: lock page scroll, close on Escape,
  // close if the window grows to desktop width, and move focus into the menu.
  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstMobileLinkRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenedOn(null);
        menuButtonRef.current?.focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth >= 768) setOpenedOn(null);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  const barStyle =
    scrolled && !menuOpen
      ? "border-line bg-ink/80 backdrop-blur-md"
      : "border-transparent";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ease-cinematic ${barStyle}`}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <Link
          href="/"
          className="font-display text-2xl tracking-tight"
          onClick={() => setOpenedOn(null)}
        >
          {siteConfig.name}
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-10">
            {siteConfig.navLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={isActive(href) ? "page" : undefined}
                  className={`text-sm tracking-wide transition-colors duration-300 hover:text-paper ${
                    isActive(href) ? "text-paper" : "text-muted"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile menu toggle */}
        <button
          ref={menuButtonRef}
          type="button"
          className="eyebrow -mr-2 p-2 text-paper md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setOpenedOn(menuOpen ? null : pathname)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile menu: full-screen overlay. `invisible` when closed removes
          its links from the tab order as well as from view. Visibility flips
          instantly on open (so focus() works) and only after the fade on close. */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 -z-10 h-dvh bg-ink md:hidden ${
          menuOpen
            ? "visible opacity-100 [transition:opacity_500ms_var(--ease-cinematic),visibility_0s]"
            : "invisible opacity-0 [transition:opacity_500ms_var(--ease-cinematic),visibility_0s_500ms]"
        }`}
      >
        <div className="container-page flex h-full flex-col justify-between pt-28 pb-10">
          <nav aria-label="Mobile">
            <ul className="flex flex-col gap-2">
              {siteConfig.navLinks.map(({ label, href }, index) => (
                <li
                  key={href}
                  className={`transition-[opacity,translate] duration-700 ease-cinematic ${
                    menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: menuOpen ? `${120 + index * 70}ms` : "0ms" }}
                >
                  <Link
                    ref={index === 0 ? firstMobileLinkRef : undefined}
                    href={href}
                    aria-current={isActive(href) ? "page" : undefined}
                    className={`block py-2 font-display text-headline ${
                      isActive(href) ? "text-accent" : "text-paper"
                    }`}
                    onClick={() => setOpenedOn(null)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-3">
            <p className="eyebrow">Start a project</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-lg text-paper underline-offset-4 hover:underline"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
