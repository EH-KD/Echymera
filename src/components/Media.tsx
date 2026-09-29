import Image from "next/image";
import type { MediaItem } from "@/types/media";
import VideoBackground from "./VideoBackground";

type Props = {
  media: MediaItem;
  /** Set on the first large image on a page (hero) so it loads first. */
  priority?: boolean;
  /** Tells the browser how wide the image will display, to pick the right file size. */
  sizes?: string;
  className?: string;
};

/**
 * Renders an image or a video to fill its parent.
 * The parent must be `relative` (or absolute) and have a size.
 */
export default function Media({
  media,
  priority = false,
  sizes = "100vw",
  className = "",
}: Props) {
  if (media.type === "video") {
    return (
      <VideoBackground
        media={media}
        priority={priority}
        sizes={sizes}
        className={className}
      />
    );
  }

  return (
    <Image
      src={media.src}
      alt={media.alt}
      fill
      priority={priority}
      sizes={sizes}
      className={`object-cover ${className}`}
    />
  );
}
