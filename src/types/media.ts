/**
 * A single piece of media. `type` decides how it renders, so any place that
 * accepts a MediaItem (hero, project card, gallery) supports images AND videos.
 * `src` / `poster` are plain URLs: local paths now, CDN URLs later.
 */
export type ImageMedia = {
  type: "image";
  src: string;
  alt: string;
};

export type VideoMedia = {
  type: "video";
  src: string;
  /** Still image shown instantly, and kept if the video is not allowed to play. */
  poster: string;
  alt: string;
};

export type MediaItem = ImageMedia | VideoMedia;
