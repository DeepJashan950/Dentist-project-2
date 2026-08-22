import { createFileRoute } from "@tanstack/react-router";
import About from "../site/pages/About";
import { useSiteNav } from "../site/lib";
import { STUDIO } from "../site/data";

const title = `About the studio — ${STUDIO.name}`;
const description =
  "Meet the clinicians, values and story behind our Marylebone dental studio — built around comfort, digital precision and honest, unhurried care.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/about" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutRoute,
});

function AboutRoute() {
  const nav = useSiteNav();
  return <About nav={nav} onBook={(intent) => nav("contact", intent ? { intent } : undefined)} />;
}
