import type { ImageMedia, MediaItem } from "./media";

export const projectCategories = [
  "Film",
  "Commercial",
  "Music Video",
  "Documentary",
  "Brand Film",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export type Credit = {
  role: string;
  name: string;
};

/**
 * One portfolio project. This is the shape the API/database will eventually
 * return, so pages and components only ever depend on this type.
 */
export type Project = {
  id: string;
  title: string;
  /** URL-safe and unique: the project lives at /work/[slug]. */
  slug: string;
  category: ProjectCategory;
  description: string;
  client?: string;
  year: number;
  /** Shown in the homepage "Featured work" section. */
  featured: boolean;
  /** Always an image: used on cards and grids. */
  thumbnail: ImageMedia;
  /** Top of the case-study page: image or video. */
  hero: MediaItem;
  gallery: MediaItem[];
  services: string[];
  credits: Credit[];
};
