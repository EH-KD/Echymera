import type { Metadata } from "next";
import WorkGrid from "@/components/WorkGrid";
import { getProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Films, commercials, music videos and documentaries from our studio.",
};

export default async function WorkPage() {
  const projects = await getProjects();

  return (
    <div className="container-page pt-32 pb-24 md:pt-44 md:pb-36">
      <header className="max-w-4xl">
        <p className="eyebrow">Portfolio</p>
        <h1 className="mt-6 font-display text-display">
          Our <em className="text-accent">work</em>
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
          Films, commercials, music videos and documentaries: each one made
          from first idea to final grade.
        </p>
      </header>

      <div className="mt-16 md:mt-24">
        <WorkGrid projects={projects} />
      </div>
    </div>
  );
}
