import type { ReactNode } from "react";
import ZoomableImage from "./ZoomableImage";

/**
 * Figure — a single captioned image or diagram.
 *
 * The caption does real work in this kind of writing: it's where the evidence
 * gets named ("Value-lock is one git diff"). Keep captions specific and load-
 * bearing, not decorative. `src` is a path under /public or an imported asset;
 * `alt` is required and read aloud, so it follows the same voice rules as copy.
 */
export default function Figure({
  src,
  alt,
  caption,
  portrait,
}: {
  src: string;
  alt: string;
  caption?: ReactNode;
  /**
   * Tall, narrow images (phone screenshots) render in a centered, width-capped
   * column so the image and its caption read as one block instead of a skinny
   * image beside a full-width caption.
   */
  portrait?: boolean;
}) {
  return (
    <figure className="my-8">
      <ZoomableImage
        src={src}
        alt={alt}
        wrapperClassName={portrait ? "mx-auto w-full max-w-xs sm:max-w-sm" : ""}
        className="mx-auto block max-h-[70vh] w-auto max-w-full rounded-2xl border border-line bg-surface"
      />
      {caption && (
        <figcaption className="mt-3 border-l-2 border-accent/40 pl-3 text-sm leading-relaxed text-content-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
