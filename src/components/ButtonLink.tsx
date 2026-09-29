import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

const base =
  "inline-flex h-12 items-center justify-center px-7 text-sm font-medium tracking-wide transition-colors duration-300 ease-cinematic";

const variants = {
  primary: "bg-paper text-ink hover:bg-accent",
  secondary:
    "border border-paper/30 text-paper hover:border-accent hover:text-accent",
};

export default function ButtonLink({ href, children, variant = "primary" }: Props) {
  return (
    <Link href={href} className={`${base} ${variants[variant]}`}>
      {children}
    </Link>
  );
}
