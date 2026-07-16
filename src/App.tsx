import { NavLink, Outlet } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

/**
 * The site shell: a calm, professional frame around every page.
 * The nav indicator is the one place purple does its job — an accent underline
 * under the active route. The footer carries the build-in-public signal that
 * the whole site is alive and evolving.
 */
const NAV = [
  { to: "/", label: "About", end: true },
  { to: "/workbench", label: "Workbench", end: false },
  { to: "/how-i-play", label: "How I play", end: false },
  { to: "/insights", label: "Insights", end: false },
];

export default function App() {
  return (
    <div className="flex min-h-dvh flex-col">
      <header className="border-b border-line px-6 py-4">
        <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4">
          <NavLink
            to="/"
            className="font-display text-lg font-semibold tracking-tight"
          >
            Jess Loeb
          </NavLink>
          <ul className="flex flex-wrap items-center gap-1">
            {NAV.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `relative rounded-md px-3 py-1.5 font-display text-sm font-medium transition-colors ${
                      isActive
                        ? "text-accent after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-accent"
                        : "text-content-muted hover:text-content"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="flex-1 px-6 py-12">
        <Outlet />
      </main>

      <footer className="border-t border-line px-6 py-8 text-center text-xs text-content-muted">
        <span className="inline-flex items-center gap-2">
          <span
            className="size-2 animate-pulse rounded-full bg-status-live"
            aria-hidden
          />
          built in public — this site is alive and evolving
        </span>
      </footer>

      <Analytics />
      <SpeedInsights />
    </div>
  );
}
