import { heroContent } from "@/data/home";
import type { HeroContent } from "@/types/content";

// Pages call these functions instead of importing mock data directly.
// They are async on purpose: when content moves to an API/database only the
// body of each function changes, not the pages that call it.
export async function getHeroContent(): Promise<HeroContent> {
  return heroContent;
}
