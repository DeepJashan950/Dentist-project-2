import { createFileRoute } from "@tanstack/react-router";
import Home from "../site/pages/Home";
import { useSiteNav } from "../site/lib";
import { STUDIO } from "../site/data";

const title = `${STUDIO.name} — Fear-free cosmetic & family dentistry in Marylebone`;
const description =
  "A calm, fear-free dental studio in Marylebone: digital smile design, whitening, veneers, Invisalign, implants and same-day emergencies with transparent pricing.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomeRoute,
});

function HomeRoute() {
  const nav = useSiteNav();
  return (
    <Home
      nav={nav}
      onBook={(intent) => nav("contact", intent ? { intent } : undefined)}
      onService={(id) => nav("services", { focus: id })}
    />
  );
}
