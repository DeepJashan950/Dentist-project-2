import { createFileRoute } from "@tanstack/react-router";
import Services from "../site/pages/Services";
import { useSiteNav } from "../site/lib";
import { STUDIO } from "../site/data";

const title = `Services & pricing — ${STUDIO.name}`;
const description =
  "Smile design, whitening, porcelain veneers, Invisalign, implants, root canal therapy, hygiene and same-day emergency dentistry — with written, itemised pricing.";

export const Route = createFileRoute("/services")({
  validateSearch: (search: Record<string, unknown>): { focus?: string } =>
    typeof search["focus"] === "string" ? { focus: search["focus"] } : {},
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/services" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesRoute,
});

function ServicesRoute() {
  const nav = useSiteNav();
  const { focus } = Route.useSearch();
  return (
    <Services
      nav={nav}
      onBook={(intent) => nav("contact", intent ? { intent } : undefined)}
      focus={focus ?? null}
    />
  );
}
