import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  /** Id for the <h2>, so the section can point to it with aria-labelledby. */
  id: string;
  action?: { label: string; href: string };
};

export default function SectionHeading({ eyebrow, title, id, action }: Props) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={id} className="mt-5 font-display text-headline">
          {title}
        </h2>
      </div>
      {action && (
        <Link
          href={action.href}
          className="text-sm tracking-wide text-paper underline decoration-line underline-offset-8 transition-colors duration-300 hover:text-accent hover:decoration-accent"
        >
          {action.label} <span aria-hidden="true">&rarr;</span>
        </Link>
      )}
    </div>
  );
}
