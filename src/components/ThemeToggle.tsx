import { useEffect, useState } from "react";

type Theme = "light" | "dark";

/**
 * Theme toggle — flips the site between its light and dark grounds.
 *
 * The pre-paint script in index.html sets the initial theme (no flash); this
 * just lets a visitor override it and remembers the choice. Small, quiet, and
 * keyboard-reachable — the whimsy here is the crossfade, not the control.
 */
export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof document === "undefined") return "light";
    return (
      (document.documentElement.getAttribute("data-theme") as Theme) || "light"
    );
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* private mode — fine, just don't persist */
    }
  }, [theme]);

  const next = theme === "dark" ? "light" : "dark";
  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
      className="inline-flex size-9 items-center justify-center rounded-full border border-line text-content-muted transition-colors hover:border-accent hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <span aria-hidden className="text-base leading-none">
        {theme === "dark" ? "☀" : "☾"}
      </span>
    </button>
  );
}
