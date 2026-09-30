import type { VideoMedia } from "@/types/media";

/**
 * The full film, with native controls. `preload="none"` means nothing is
 * downloaded until the visitor presses play; the poster is all that loads.
 * Plain HTML, so no client JavaScript is needed.
 */
export default function FilmPlayer({ film }: { film: VideoMedia }) {
  return (
    <div className="aspect-video overflow-hidden bg-black">
      <video
        src={film.src}
        poster={film.poster}
        controls
        playsInline
        preload="none"
        aria-label={film.alt}
        className="h-full w-full object-contain"
      >
        Your browser does not support embedded video.
      </video>
    </div>
  );
}
