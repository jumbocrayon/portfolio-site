import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

/**
 * ZoomableImage — an inline essay image that opens full-size on click.
 *
 * In-column, images are height-capped so a tall phone screenshot doesn't run
 * away and a wide dashboard stays tidy. But a data-dense dashboard is unreadable
 * squeezed into the prose measure, so clicking (or Enter/Space) opens a lightbox
 * overlay where the full pixels are available. Detail on demand, reached by the
 * reader's own choice — the same "depth by choice" the whole site argues.
 *
 * Used by <Figure> and <Carousel>; not meant for direct use in MDX.
 */
export default function ZoomableImage({
  src,
  alt,
  className = "",
  wrapperClassName = "",
}: {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
}) {
  const [open, setOpen] = useState(false);

  // Close on Escape and lock body scroll while the overlay is up.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Open full-size: ${alt}`}
        className={`group relative block cursor-zoom-in appearance-none border-0 bg-transparent p-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${wrapperClassName}`}
      >
        <img src={src} alt={alt} className={className} loading="lazy" />
        <span className="pointer-events-none absolute bottom-2 right-2 rounded-full border border-line bg-page/80 px-2 py-1 font-display text-xs text-content-muted opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
          zoom
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-page/90 p-4 backdrop-blur-sm sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={() => setOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label={alt}
          >
            <motion.img
              src={src}
              alt={alt}
              className="max-h-full max-w-full rounded-xl border border-line object-contain shadow-2xl"
              initial={{ scale: 0.96 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.96 }}
              transition={{ duration: 0.15 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 grid size-10 place-items-center rounded-full border border-line bg-page/80 font-display text-accent backdrop-blur-sm transition-colors hover:bg-page focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
