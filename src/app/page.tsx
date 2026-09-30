import FeaturedWork from "@/components/FeaturedWork";
import Hero from "@/components/Hero";
import { getHeroContent } from "@/lib/content";
import { getFeaturedProjects } from "@/lib/projects";

export default async function Home() {
  const [hero, featured] = await Promise.all([
    getHeroContent(),
    getFeaturedProjects(),
  ]);

  return (
    <>
      <Hero content={hero} />
      <FeaturedWork projects={featured} />
    </>
  );
}
