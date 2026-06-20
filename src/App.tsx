import { NavLink, Outlet } from "react-router-dom";

/**
 * The site shell: a light, handmade frame around every page.
 * Nav reads like tabs clipped to a board; the footer carries the
 * build-in-public signal that the whole site is alive and evolving.
 */
const NAV = [
  { to: "/", label: "Workbench", end: true },
  { to: "/about", label: "How I work", end: false },
  { to: "/dev-blog", label: "Dev blog", end: false },
];

export default function App() {
  return (
    <div className="flex min-h-dvh flex-col">
      <header className="px-6 py-5">
        <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4">
          <NavLink to="/" className="font-hand text-xl">
            Jess Loeb<span className="text-marker">.</span>
          </NavLink>
          <ul className="flex flex-wrap items-center gap-1">
            {NAV.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `rounded-full px-3 py-1.5 font-hand text-sm transition-colors ${
                      isActive
                        ? "bg-ink text-paper"
                        : "text-ink-soft hover:bg-paper-deep"
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

      <main className="flex-1 px-6 py-8">
        <Outlet />
      </main>

      <footer className="px-6 py-8 text-center text-xs text-ink-soft/70">
        <span className="inline-flex items-center gap-2">
          <span className="size-2 animate-pulse rounded-full bg-grow" aria-hidden />
          built in public — this site is alive and evolving
        </span>
      </footer>
    </div>
  );
}
