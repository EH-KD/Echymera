import Hero from "@/components/Hero";
import { getHeroContent } from "@/lib/content";

export default async function Home() {
  const hero = await getHeroContent();

  return <Hero content={hero} />;
}
