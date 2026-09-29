"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { VideoMedia } from "@/types/media";

type Props = {
  media: VideoMedia;
  priority: boolean;
  sizes: string;
  className: string;
};

/**
 * Looping, muted background video with a poster underneath.
 * The poster is a normal optimised image, so the page looks right immediately.
 * The video file is only requested if the visitor allows motion and data use.
 */
export default function VideoBackground({ media, priority, sizes, className }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const saveData =
      (navigator as Navigator & { connection?: { saveData?: boolean } })
        .connection?.saveData === true;
    if (prefersReducedMotion || saveData) return; // poster only, no download

    video.src = media.src;
    video.play().catch(() => {
      // Autoplay refused (e.g. low-power mode): the poster simply stays visible.
    });

    return () => {
      video.removeAttribute("src");
      video.load();
    };
  }, [media.src]);

  return (
    <>
      <Image
        src={media.poster}
        alt={media.alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`object-cover ${className}`}
      />
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        tabIndex={-1}
        onCanPlay={() => setReady(true)}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-cinematic ${
          ready ? "opacity-100" : "opacity-0"
        } ${className}`}
      />
    </>
  );
}
