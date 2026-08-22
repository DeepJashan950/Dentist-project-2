import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
} from "@tanstack/react-router";
import { useCallback, useState } from "react";
import { Nav, Footer, FloatingBook } from "../site/components/chrome";
import { PortfolioHub, PortfolioWatermark } from "../site/components/portfolio-hub";
import { ScrollProgress } from "../site/components/scroll-progress";
import { useCurrentRoute, useSiteNav } from "../site/lib";
import { STUDIO } from "../site/data";

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-frost px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-light text-slate-900">404</h1>
        <h2 className="mt-4 font-display text-xl font-semibold text-slate-900">Page not found</h2>
        <p className="mt-2 text-sm text-slate-500">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-black"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-dvh items-center justify-center bg-frost px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-xl font-semibold tracking-tight text-slate-900">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button type="button"
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-black"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-900 hover:text-slate-900"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: STUDIO.name },
      { property: "og:site_name", content: STUDIO.name },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#F2F5F8" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Outfit:wght@300;400;500;600;700&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dentist",
          name: STUDIO.name,
          telephone: STUDIO.phone,
          email: STUDIO.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: "18 Linden Row, Marylebone",
            addressLocality: "London",
            postalCode: "W1U 4QF",
            addressCountry: "GB",
          },
        }),
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});


function SiteChrome() {
  const route = useCurrentRoute();
  const nav = useSiteNav();
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const openPortfolio = useCallback(() => setPortfolioOpen(true), []);
  const closePortfolio = useCallback(() => setPortfolioOpen(false), []);

  return (
    <div className="flex min-h-dvh flex-col">
      <ScrollProgress />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[110] focus:rounded-full focus:bg-slate-900 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <Nav route={route} nav={nav} />

      <main id="main" className="flex-1">
        <Outlet />
      </main>

      <PortfolioWatermark onClick={openPortfolio} />
      <PortfolioHub open={portfolioOpen} onClose={closePortfolio} />

      <Footer nav={nav} />
      <FloatingBook route={route} nav={nav} />
    </div>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <>
      <HeadContent />
      <QueryClientProvider client={queryClient}>
        <SiteChrome />
      </QueryClientProvider>
    </>
  );
}
