import { createFileRoute } from "@tanstack/react-router";
import Contact from "../site/pages/Contact";
import { useSiteNav } from "../site/lib";
import { STUDIO } from "../site/data";

const title = `Book an appointment — ${STUDIO.name}`;
const description = `Request a visit at ${STUDIO.address}. Complimentary first consultation, same-day emergency slots and replies within one working hour.`;

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): { intent?: string } =>
    typeof search["intent"] === "string" ? { intent: search["intent"] } : {},
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/contact" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactRoute,
});

function ContactRoute() {
  const nav = useSiteNav();
  const { intent } = Route.useSearch();
  return <Contact nav={nav} intent={intent ?? null} />;
}
