import Media from "@/components/Media";
import type { MediaItem } from "@/types/media";

const WIDE_SIZES = "(min-width: 1440px) 1344px, 100vw";
const HALF_SIZES = "(min-width: 1440px) 668px, (min-width: 768px) 50vw, 100vw";

// A repeating editorial rhythm: wide, portrait, portrait, ultra-wide.
// Items are cropped to these frames, so any image or video fits.
const layouts = [
  { span: "md:col-span-2", aspect: "aspect-[4/3] md:aspect-video", sizes: WIDE_SIZES },
  { span: "", aspect: "aspect-[4/5]", sizes: HALF_SIZES },
  { span: "", aspect: "aspect-[4/5]", sizes: HALF_SIZES },
  { span: "md:col-span-2", aspect: "aspect-[4/3] md:aspect-[21/9]", sizes: WIDE_SIZES },
];

export default function MediaGallery({ items }: { items: MediaItem[] }) {
  return (
    <ul className="grid gap-4 md:grid-cols-2 md:gap-8">
      {items.map((item, index) => {
        // A lone portrait at the end would leave an empty half: make it wide.
        const isOrphan = index === items.length - 1 && index % 4 === 1;
        const layout = isOrphan ? layouts[0] : layouts[index % 4];

        return (
          <li
            key={item.src}
            className={`relative overflow-hidden bg-surface ${layout.span} ${layout.aspect}`}
          >
            <Media media={item} sizes={layout.sizes} />
          </li>
        );
      })}
    </ul>
  );
}
