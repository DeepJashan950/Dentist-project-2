import { useState } from "react";
import type { Route } from "../lib";
import { Reveal, Eyebrow } from "../lib";
import { CASES, IMG } from "../data";
import { BeforeAfter } from "../widgets";
import { ArrowUpRight, Spark } from "../icons";

type Props = { nav: (r: Route) => void; onBook: (intent?: string) => void };

const CATS = ["All", "Whitening", "Veneers", "Alignment", "Bonding", "Makeover"] as const;

function Header() {
  return (
    <section className="relative overflow-hidden pt-32 pb-14 sm:pt-40">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-24 left-[-10%] h-[28rem] w-[28rem] rounded-full bg-goldlight/10 blur-3xl" />
        <span className="text-outline absolute top-14 right-[-2%] font-display text-[10rem] leading-none font-semibold italic select-none lg:text-[15rem]">
          after
        </span>
      </div>
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>Smile archive · 12,400 cases</Eyebrow>
          </Reveal>
          <h1 className="mt-6 font-display text-5xl leading-[1.03] font-light tracking-tight text-ink sm:text-6xl lg:text-[4.2rem]">
            <span className="line-mask"><span style={{ ["--d" as string]: "80ms" }}>The archive</span></span>
            <span className="line-mask"><span style={{ ["--d" as string]: "240ms" }}>of <em className="text-gold italic font-normal">after.</em></span></span>
          </h1>
          <Reveal delay={380}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-inksoft">
              Same chair, same light, honest photography. Every case below is consented, documented
              and archived — drag the handle on any card to meet the "before".
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Archive({ onBook }: { onBook: (intent?: string) => void }) {
  const [cat, setCat] = useState<(typeof CATS)[number]>("All");
  const filtered = cat === "All" ? CASES : CASES.filter((c) => c.cat === cat);

  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:pb-32">
      <Reveal>
        <div className="flex flex-wrap items-center gap-2.5 border-y border-sand py-5">
          {CATS.map((c) => {
            const active = cat === c;
            const count = c === "All" ? CASES.length : CASES.filter((x) => x.cat === c).length;
            return (
              <button
                key={c}
                type="button"
                onClick={() => setCat(c)}
                className={`flex items-center gap-2 rounded-full px-4.5 py-2 text-sm font-semibold transition-all duration-300 ${
                  active ? "bg-pine text-shell shadow-soft" : "text-inksoft hover:bg-sand/60 hover:text-ink"
                }`}
              >
                {c}
                <span className={`text-[10px] font-bold tracking-wider ${active ? "text-gold" : "text-inksoft/60"}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </Reveal>

      <div key={cat} className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((c, i) => (
          <Reveal key={c.id} delay={(i % 3) * 100} variant="scale-in">
            <BeforeAfter img={c.img} label={c.title} meta={`${c.cat} · ${c.sessions}`} />
            <p className="mt-2 text-xs text-inksoft italic">{c.note}</p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={150}>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-6 rounded-[26px] border border-sand bg-shell p-8 shadow-soft sm:p-10">
          <div className="flex items-center gap-4">
            <Spark className="h-9 w-9 shrink-0 text-gold" />
            <p className="max-w-xl font-display text-xl leading-snug font-light text-ink sm:text-2xl">
              Your simulation comes before any drill. <em className="text-gold italic">See the after first — then decide.</em>
            </p>
          </div>
          <button
            type="button"
            onClick={() => onBook("Smile assessment (£49)")}
            className="group flex items-center gap-3 rounded-full bg-pine px-6 py-3.5 text-sm font-bold text-shell transition-all duration-300 hover:bg-pinedeep hover:shadow-lift"
          >
            Start my simulation
            <ArrowUpRight className="h-4 w-4 text-gold transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </Reveal>
    </section>
  );
}

function Interior() {
  const rooms = [
    { img: IMG.reception, cap: "Reception — cedar, not clove", rot: "-rotate-1.5" },
    { img: IMG.suite, cap: "Suite 01 — the quiet chair", rot: "rotate-1" },
    { img: IMG.officeA, cap: "Suite 02 — garden light", rot: "-rotate-1" },
    { img: IMG.officeB, cap: "Imaging room — low-dose 3D", rot: "rotate-1.5" },
  ];
  return (
    <section className="bg-pine py-24 text-shell lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Eyebrow light>Where it happens</Eyebrow>
          <h2 className="mt-5 font-display text-4xl leading-[1.05] font-light tracking-tight sm:text-5xl lg:text-[3.4rem] text-shell">
            Rooms that lower your <em className="text-gold italic font-normal">heart rate.</em>
          </h2>
          <p className="mt-5 text-base leading-relaxed sm:text-lg text-goldlight/80">
            Warm light, garden views, hidden machinery. The clinical technology is world-class — you just never have to look at it.
          </p>
        </div>
        <div className="mt-16 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {rooms.map((r, i) => (
            <Reveal key={r.cap} delay={i * 90} variant="scale-in">
              <figure className={`postcard ${r.rot} ${i % 2 === 1 ? "sm:translate-y-10" : ""}`}>
                <div className="rounded-[18px] border-8 border-shell bg-shell shadow-lift">
                  <div className="aspect-[3/3.7] overflow-hidden rounded-[12px]">
                    <img src={r.img} alt={r.cap} className="h-full w-full object-cover" loading="lazy" />
                  </div>
                </div>
                <figcaption className="mt-3 text-center font-display text-sm text-goldlight/80 italic">{r.cap}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Results({ nav, onBook }: Props) {
  return (
    <>
      <Header />
      <Archive onBook={onBook} />
      <Interior />
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-6">
            <h2 className="font-display text-3xl leading-tight font-light text-ink sm:text-4xl">
              One more <em className="text-gold italic font-normal">after</em> could be yours.
            </h2>
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => onBook()}
                className="group flex items-center gap-3 rounded-full bg-pine px-6 py-3.5 text-sm font-bold text-shell transition-all duration-300 hover:bg-pinedeep hover:shadow-lift"
              >
                Book a consultation
                <ArrowUpRight className="h-4 w-4 text-gold transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <button
                type="button"
                onClick={() => nav("services")}
                className="rounded-full border border-sanddeep px-6 py-3.5 text-sm font-semibold text-ink transition-all hover:border-gold hover:bg-gold hover:text-shell"
              >
                Browse services
              </button>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
