import { useEffect, useRef, useState, type ReactNode } from "react";
import { useNavigate, useRouterState } from "@tanstack/react-router";
import { Spark } from "./icons";

/* ------------------------------------------------------------------ */
/* routing (backed by TanStack Router)                                 */
/* ------------------------------------------------------------------ */
export type Route = "home" | "about" | "services" | "results" | "contact";

export const ROUTE_PATH: Record<Route, string> = {
  home: "/",
  about: "/about",
  services: "/services",
  results: "/results",
  contact: "/contact",
};

export function pathToRoute(pathname: string): Route {
  const seg = pathname.replace(/\/+$/, "").split("/")[1] ?? "";
  return (["about", "services", "results", "contact"] as string[]).includes(seg) ? (seg as Route) : "home";
}

export function useCurrentRoute(): Route {
  return useRouterState({ select: (s) => pathToRoute(s.location.pathname) });
}

/** Navigate between site pages; re-navigating to the current page scrolls to top. */
export function useSiteNav(): (r: Route, search?: Record<string, string>) => void {
  const navigate = useNavigate();
  const current = useCurrentRoute();
  return (r: Route, search?: Record<string, string>) => {
    if (r === current && !search) {
      window.scrollTo({ top: 0, behavior: prefersReduced() ? "auto" : "smooth" });
      return;
    }
    void navigate({ to: ROUTE_PATH[r], search: search ?? {} });
  };
}


export function prefersReduced(): boolean {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/* ------------------------------------------------------------------ */
/* in-view + reveal                                                    */
/* ------------------------------------------------------------------ */
export function useInView<T extends HTMLElement>(threshold = 0.18, once = true) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (!e) return;
        if (e.isIntersecting) {
          setInView(true);
          if (once) io.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin: "0px 0px -36px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, once]);
  return { ref, inView };
}

export function Reveal({
  children,
  delay = 0,
  className = "",
  variant = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: "" | "from-left" | "from-right" | "scale-in";
  as?: "div" | "section" | "li" | "article" | "figure";
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <Tag
      ref={ref as never}
      style={{ ["--d" as string]: `${delay}ms` }}
      className={`reveal ${variant} ${inView ? "is-in" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------------ */
/* count-up                                                            */
/* ------------------------------------------------------------------ */
export function useCountUp(target: number, start: boolean, duration = 1500) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!start) return;
    if (prefersReduced()) {
      setV(target);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      setV(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);
  return v;
}

/* ------------------------------------------------------------------ */
/* typographic primitives                                              */
/* ------------------------------------------------------------------ */
export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p
      className={`flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] ${
        light ? "text-gold" : "text-gold"
      }`}
    >
      <Spark className="h-3 w-3" />
      {children}
    </p>
  );
}

export function SectionHead({
  eyebrow,
  title,
  copy,
  light = false,
  align = "left",
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  copy?: ReactNode;
  light?: boolean;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-2xl ${className}`}>
      <Reveal>
        <div className={align === "center" ? "flex justify-center" : ""}>
          <Eyebrow light={light}>{eyebrow}</Eyebrow>
        </div>
      </Reveal>
      <Reveal delay={90}>
        <h2
          className={`mt-5 font-display text-4xl leading-[1.05] font-light tracking-tight sm:text-5xl lg:text-[3.4rem] ${
            light ? "text-shell" : "text-ink"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {copy && (
        <Reveal delay={170}>
          <p className={`mt-5 text-base leading-relaxed sm:text-lg ${light ? "text-goldlight/80" : "text-inksoft"}`}>
            {copy}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* marquee                                                             */
/* ------------------------------------------------------------------ */
export function Marquee({ items, dark = false }: { items: string[]; dark?: boolean }) {
  const row = (key: string) => (
    <div key={key} className="flex shrink-0 items-center" aria-hidden={key === "b"}>
      {items.map((it) => (
        <span key={it} className="flex items-center">
          <span
            className={`px-6 font-display text-lg font-light tracking-wide italic sm:px-8 sm:text-xl ${
              dark ? "text-shell/90" : "text-ink/80"
            }`}
          >
            {it}
          </span>
          <Spark className="h-3.5 w-3.5 text-gold" />
        </span>
      ))}
    </div>
  );
  return (
    <div
      className={`marquee overflow-hidden border-y py-4 ${
        dark ? "border-shell/10 bg-pinedeep" : "border-sand bg-shell"
      }`}
    >
      <div className="marquee-track">
        {row("a")}
        {row("b")}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* stars                                                               */
/* ------------------------------------------------------------------ */
export function Stars({ n = 5, className = "h-3.5 w-3.5 text-gold" }: { n?: number; className?: string }) {
  return (
    <span className="inline-flex gap-0.5" aria-label={`${n} star rating`}>
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className={className}>
          <path
            d="M12 3l2.7 5.6 6.1.8-4.5 4.3 1.1 6-5.4-2.9-5.4 2.9 1.1-6L3.2 9.4l6.1-.8L12 3z"
            fill="currentColor"
          />
        </svg>
      ))}
    </span>
  );
}
