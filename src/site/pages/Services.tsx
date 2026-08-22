import { useEffect, useRef, useState } from "react";
import type { Route } from "../lib";
import { Reveal, Eyebrow, prefersReduced } from "../lib";
import { SERVICES } from "../data";
import { ArrowUpRight, Plus, Check, Scan, Spark } from "../icons";

type Props = {
  nav: (r: Route) => void;
  onBook: (intent?: string) => void;
  focus: string | null;
};

const GOALS: { label: string; id: string }[] = [
  { label: "Whiten", id: "whitening" },
  { label: "Align", id: "invisalign" },
  { label: "Replace a tooth", id: "implants" },
  { label: "Restore & repair", id: "veneers" },
  { label: "Keep it healthy", id: "preventive" },
];

export default function Services({ nav, onBook, focus }: Props) {
  const [open, setOpen] = useState<string | null>(focus ?? "smile-design");
  const listRef = useRef<HTMLDivElement>(null);
  const scrollMode = prefersReduced() ? "auto" : ("smooth" as ScrollBehavior);

  useEffect(() => {
    if (focus) {
      setOpen(focus);
      const t = window.setTimeout(() => {
        document.getElementById(`svc-${focus}`)?.scrollIntoView({ block: "center", behavior: scrollMode });
      }, 120);
      return () => window.clearTimeout(t);
    }
    return undefined;
  }, [focus, scrollMode]);

  const jumpTo = (id: string) => {
    setOpen(id);
    window.setTimeout(() => {
      document.getElementById(`svc-${id}`)?.scrollIntoView({ block: "center", behavior: scrollMode });
    }, 60);
  };

  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-14 sm:pt-40">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -top-28 right-[-8%] h-[28rem] w-[28rem] rounded-full bg-goldlight/10 blur-3xl" />
          <span className="text-outline absolute top-10 left-[-2%] font-display text-[10rem] leading-none font-semibold italic select-none lg:text-[14rem]">
            care
          </span>
        </div>
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow>Services & pricing</Eyebrow>
            </Reveal>
            <h1 className="mt-6 font-display text-5xl leading-[1.03] font-light tracking-tight text-ink sm:text-6xl lg:text-[4.2rem]">
              <span className="line-mask"><span style={{ ["--d" as string]: "80ms" }}>Every skill your</span></span>
              <span className="line-mask"><span style={{ ["--d" as string]: "240ms" }}>smile needs, <em className="text-gold italic font-normal">honestly priced.</em></span></span>
            </h1>
            <Reveal delay={380}>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-inksoft">
                Eight disciplines, one shared digital record. Tap any service for the full picture —
                what it involves, who it suits, and what it genuinely costs. No "POA", ever.
              </p>
            </Reveal>
          </div>

          <Reveal delay={480}>
            <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-sand pt-8">
              <span className="text-[11px] font-semibold tracking-[0.28em] text-inksoft uppercase">I'm here to…</span>
              {GOALS.map((g) => (
                <button
                  key={g.id}
                  type="button"
                  onClick={() => jumpTo(g.id)}
                  className="rounded-full border border-sand bg-shell px-4.5 py-2 text-sm font-medium text-ink transition-all duration-300 hover:border-gold hover:bg-gold hover:text-shell"
                >
                  {g.label}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:pb-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
          {/* index */}
          <div ref={listRef} className="min-w-0 border-t border-sand">
            {SERVICES.map((s, i) => {
              const Icon = s.icon;
              const isOpen = open === s.id;
              return (
                <Reveal key={s.id} delay={Math.min(i * 50, 300)}>
                  <div id={`svc-${s.id}`} className={`border-b border-sand transition-colors duration-400 ${isOpen ? "bg-shell" : ""}`}>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : s.id)}
                      aria-expanded={isOpen}
                      className="group flex w-full items-center gap-5 px-2 py-6 text-left sm:gap-7 sm:px-6"
                    >
                      <span className="w-8 shrink-0 font-display text-sm text-gold italic">{s.no}</span>
                      <span
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-all duration-400 ${
                          isOpen
                            ? "border-pine bg-pine text-gold"
                            : "border-sand text-gold group-hover:border-gold"
                        }`}
                      >
                        <Icon className="h-5.5 w-5.5" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-display text-2xl font-light text-ink sm:text-[1.8rem]">{s.name}</span>
                        <span className="mt-0.5 block truncate text-sm text-inksoft">{s.tag}</span>
                      </span>
                      <span className="hidden shrink-0 text-xs font-semibold tracking-[0.18em] text-inksoft uppercase md:block">
                        {s.cat}
                      </span>
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-400 ${
                          isOpen ? "rotate-45 border-gold bg-gold text-shell" : "border-sanddeep text-inksoft group-hover:border-gold group-hover:text-gold"
                        }`}
                      >
                        <Plus className="h-4 w-4" />
                      </span>
                    </button>

                    <div className={`acc-body ${isOpen ? "open" : ""}`}>
                      <div>
                        <div className="grid gap-8 px-2 pb-9 sm:px-6 md:grid-cols-2 lg:px-6 lg:pl-[7.5rem]">
                          <div>
                            <p className="leading-relaxed text-inksoft">{s.desc}</p>
                            <div className="mt-6 rounded-2xl border border-sand bg-shell p-5">
                              <p className="text-[10px] font-bold tracking-[0.24em] text-gold uppercase">Ideal if…</p>
                              <p className="mt-2 text-sm leading-relaxed text-ink">{s.ideal}</p>
                            </div>
                          </div>
                          <div>
                            <ul className="space-y-2.5">
                              {s.benefits.map((b) => (
                                <li key={b} className="flex items-start gap-3 text-[15px] text-ink">
                                  <Check className="mt-0.5 h-4.5 w-4.5 shrink-0 text-gold" />
                                  {b}
                                </li>
                              ))}
                            </ul>
                            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 border-t border-sand pt-5 text-sm">
                              <p className="text-inksoft">
                                <span className="mr-2 font-semibold text-ink">Time</span>
                                {s.duration}
                              </p>
                              <p className="text-inksoft">
                                <span className="mr-2 font-semibold text-ink">Investment</span>
                                {s.price}
                              </p>
                            </div>
                            <button
                              type="button"
                              onClick={() => onBook(s.name)}
                              className="group/btn mt-6 flex items-center gap-3 rounded-full bg-pine px-6 py-3 text-sm font-bold text-shell transition-all duration-300 hover:bg-pinedeep hover:shadow-lift"
                            >
                              Book a {s.name.toLowerCase()} consult
                              <ArrowUpRight className="h-4 w-4 text-gold transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* sticky aside */}
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <Reveal variant="from-right">
              <div className="relative overflow-hidden rounded-[26px] bg-pine p-8 text-shell shadow-lift">
                <Spark className="absolute -top-4 -right-4 h-24 w-24 text-shell/5" />
                <Scan className="h-9 w-9 text-gold" />
                <h3 className="mt-5 font-display text-3xl leading-snug font-light">
                  Not sure where to start? <em className="text-gold italic">Start nowhere.</em>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-goldlight/75">
                  A 20-minute smile assessment: full digital scan, honest triage and a written plan —
                  before you commit to a single treatment.
                </p>
                <p className="mt-5 font-display text-4xl font-light">£49</p>
                <p className="text-xs tracking-[0.18em] text-goldlight/60 uppercase">redeemed in full against any treatment</p>
                <button
                  type="button"
                  onClick={() => onBook("Smile assessment (£49)")}
                  className="mt-6 w-full rounded-full bg-gold py-3.5 font-bold text-shell transition-all duration-300 hover:bg-graphite hover:shadow-lift"
                >
                  Reserve an assessment
                </button>
              </div>
            </Reveal>
            <Reveal variant="from-right" delay={140}>
              <div className="rounded-[26px] border border-sand bg-shell p-8 shadow-soft">
                <h4 className="text-[11px] font-semibold tracking-[0.28em] text-gold uppercase">Good to know</h4>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-inksoft">
                  <li className="flex gap-3"><Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> 0% finance on any plan over £500</li>
                  <li className="flex gap-3"><Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> Written pricing before treatment begins</li>
                  <li className="flex gap-3"><Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> Sedation available for every procedure</li>
                  <li className="flex gap-3"><Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> Emergency capacity reserved daily</li>
                </ul>
                <button
                  type="button"
                  onClick={() => nav("contact")}
                  className="group mt-6 flex items-center gap-2 text-sm font-bold tracking-wide text-gold uppercase transition-colors hover:text-gold"
                >
                  Questions? Talk to Tom
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}
