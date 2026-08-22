import { createFileRoute } from "@tanstack/react-router";
import Results from "../site/pages/Results";
import { useSiteNav } from "../site/lib";
import { STUDIO } from "../site/data";

const title = `Smile results archive — ${STUDIO.name}`;
const description =
  "Before-and-after smile cases from our studio archive: whitening, veneers, alignment, bonding and full makeovers, documented in the same chair and light.";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/results" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/results" }],
  }),
  component: ResultsRoute,
});

function ResultsRoute() {
  const nav = useSiteNav();
  return <Results nav={nav} onBook={(intent) => nav("contact", intent ? { intent } : undefined)} />;
}
