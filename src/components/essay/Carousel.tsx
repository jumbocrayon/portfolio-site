import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

/**
 * Carousel — a captioned screenshot sequence with text under each slide.
 *
 * For walking a reader through a progression (before → after, a flow across
 * builds, a set of stills). One image visible at a time with its own caption;
 * dots + arrows to move. The caption per slide is where the story lives, so it
 * sits directly under the image and animates with it.
 *
 * Usage in MDX:
 *   <Carousel slides={[
 *     { src: "/insights/foo/1.png", alt: "…", caption: "The board at rest." },
 *     { src: "/insights/foo/2.png", alt: "…", caption: "After the merge." },
 *   ]} />
 */
export interface Slide {
  src: string;
  alt: string;
  caption?: string;
}

export default function Carousel({ slides }: { slides: Slide[] }) {
  const [i, setI] = useState(0);
  const count = slides.length;
  if (count === 0) return null;

  const go = (next: number) => setI(((next % count) + count) % count);
  const slide = slides[i];

  return (
    <figure className="my-8">
      <div className="relative overflow-hidden rounded-2xl border border-line bg-surface">
        <AnimatePresence mode="wait">
          <motion.img
            key={i}
            src={slide.src}
            alt={slide.alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="w-full"
            loading="lazy"
          />
        </AnimatePresence>

        {count > 1 && (
          <>
            <CarouselButton side="left" onClick={() => go(i - 1)} />
            <CarouselButton side="right" onClick={() => go(i + 1)} />
          </>
        )}
      </div>

      {/* Caption + position, directly under the image where the story lives. */}
      <figcaption className="mt-3 flex items-start justify-between gap-4 border-l-2 border-accent/40 pl-3">
        <span className="text-sm leading-relaxed text-content-muted">
          {slide.caption}
        </span>
        {count > 1 && (
          <span className="shrink-0 pt-0.5 font-display text-xs tabular-nums text-content-muted/70">
            {i + 1} / {count}
          </span>
        )}
      </figcaption>

      {count > 1 && (
        <div className="mt-3 flex justify-center gap-2">
          {slides.map((_, d) => (
            <button
              key={d}
              type="button"
              onClick={() => go(d)}
              aria-label={`Go to slide ${d + 1}`}
              aria-current={d === i}
              className={`size-2 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                d === i ? "bg-accent" : "bg-line hover:bg-content-muted/50"
              }`}
            />
          ))}
        </div>
      )}
    </figure>
  );
}

function CarouselButton({
  side,
  onClick,
}: {
  side: "left" | "right";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={side === "left" ? "Previous slide" : "Next slide"}
      className={`absolute top-1/2 -translate-y-1/2 ${
        side === "left" ? "left-2" : "right-2"
      } grid size-9 place-items-center rounded-full border border-line bg-page/80 font-display text-accent backdrop-blur-sm transition-colors hover:bg-page focus:outline-none focus-visible:ring-2 focus-visible:ring-accent`}
    >
      {side === "left" ? "←" : "→"}
    </button>
  );
}
