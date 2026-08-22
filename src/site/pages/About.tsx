import type { Route } from "../lib";
import { Reveal, SectionHead, Eyebrow, Marquee } from "../lib";
import { IMG, TEAM, VALUES, TIMELINE, CERTS, STUDIO, MARQUEE_ITEMS } from "../data";
import { ArrowUpRight, ArrowRight, Spark, SmileMark, Check } from "../icons";

type Props = { nav: (r: Route) => void; onBook: (intent?: string) => void };

function Header() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-24 left-[-10%] h-[30rem] w-[30rem] rounded-full bg-goldlight/20 blur-3xl" />
        <span className="text-outline absolute top-16 right-[-3%] font-display text-[10rem] leading-none font-semibold italic select-none lg:text-[15rem]">
          since '11
        </span>
      </div>
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <Eyebrow>About the studio</Eyebrow>
          </Reveal>
          <h1 className="mt-6 font-display text-5xl leading-[1.03] font-light tracking-tight text-ink sm:text-6xl lg:text-[4.3rem]">
            <span className="line-mask"><span style={{ ["--d" as string]: "80ms" }}>A dental <em className="text-gold italic">house,</em></span></span>
            <span className="line-mask"><span style={{ ["--d" as string]: "240ms" }}>not a dental <em className="text-gold italic">office.</em></span></span>
          </h1>
          <Reveal delay={380}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-inksoft">
              Ivory began with a statistic Dr. Sethi couldn't shake: roughly half of adults avoid the
              dentist out of fear — not cost, not distance, fear. So we designed a practice where the
              first thing you notice is the quiet, and the last thing you notice is that you've been
              to the dentist.
            </p>
          </Reveal>
          <Reveal delay={480}>
            <div className="mt-8 grid max-w-md grid-cols-3 gap-6 border-t border-sand pt-7">
              {[
                ["8", "clinicians under one roof"],
                ["3", "private treatment suites"],
                ["1", "in-house ceramic lab"],
              ].map(([n, l]) => (
                <div key={l}>
                  <p className="font-display text-4xl font-light text-gold">{n}</p>
                  <p className="mt-1.5 text-xs leading-snug text-inksoft">{l}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <div className="lg:col-span-5">
          <Reveal variant="scale-in" delay={250}>
            <div className="relative">
              <div className="arch absolute -inset-4 -translate-x-5 translate-y-5 border border-gold/30" aria-hidden="true" />
              <div className="arch relative aspect-[4/5.1] overflow-hidden shadow-lift">
                <img src={IMG.reception} alt="The calm reception space at Ivory Dental Studio" className="anim-kenburns h-full w-full object-cover" />
              </div>
              <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl border border-sand bg-shell px-5 py-3.5 shadow-soft">
                <SmileMark className="h-8 w-8 text-gold" />
                <p className="text-xs leading-snug text-inksoft">
                  <span className="block font-display text-base text-ink italic">The front room</span>
                  Smells like cedar, not clove.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <SectionHead
        eyebrow="Fifteen years, gently"
        title={
          <>
            The studio, <em className="text-gold italic">year by year.</em>
          </>
        }
      />
      <div className="mt-14 border-t border-sand">
        {TIMELINE.map((t, i) => (
          <Reveal key={t.year} delay={i * 70}>
            <div className="group grid items-baseline gap-3 border-b border-sand py-7 transition-all duration-400 hover:bg-shell hover:pl-4 sm:grid-cols-[140px_260px_1fr] sm:gap-8">
              <span className="font-display text-4xl font-light text-sanddeep transition-colors duration-400 group-hover:text-gold sm:text-5xl">
                {t.year}
              </span>
              <h3 className="font-display text-2xl font-light text-ink">{t.title}</h3>
              <p className="max-w-xl leading-relaxed text-inksoft">{t.copy}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Values() {
  return (
    <section className="bg-pine py-24 text-shell lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          light
          eyebrow="What we refuse to compromise"
          title={
            <>
              Four rules on the
              <br />
              studio wall<em className="text-gold">.</em>
            </>
          }
          copy="Written by the founding team in 2011, still read aloud to every new joiner on their first morning."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-[26px] border border-shell/10 bg-shell/10 sm:grid-cols-2">
          {VALUES.map((v, i) => (
            <Reveal key={v.no} delay={i * 90}>
              <div className="group h-full bg-pine p-9 transition-colors duration-500 hover:bg-pinedeep sm:p-11">
                <span className="font-display text-5xl font-light text-gold/70 italic">{v.no}</span>
                <h3 className="mt-5 font-display text-2xl font-light">{v.title}</h3>
                <p className="mt-3 leading-relaxed text-goldlight/75">{v.copy}</p>
                <span className="mt-6 block h-px w-12 bg-gold/50 transition-all duration-500 group-hover:w-24 group-hover:bg-gold" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team({ onBook }: { onBook: (intent?: string) => void }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHead
          eyebrow="The people behind the masks"
          title={
            <>
              Hands you'll actually
              <br />
              <em className="text-gold italic">recognise.</em>
            </>
          }
          copy="Small team, long tenures. Your dentist remembers your name, your coffee order and exactly which tooth worries you."
        />
      </div>
      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {TEAM.map((m, i) => (
          <Reveal key={m.name} delay={i * 100}>
            <article className="group h-full">
              <div className="arch-sm relative aspect-[3/3.6] overflow-hidden shadow-soft transition-all duration-500 group-hover:shadow-lift">
                <img
                  src={m.img}
                  alt={`${m.name} — ${m.role} at Ivory`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pinedeep/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <p className="absolute inset-x-5 bottom-4 translate-y-3 font-display text-sm text-shell italic opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  “{m.line}”
                </p>
              </div>
              <h3 className="mt-5 font-display text-2xl font-light text-ink">{m.name}</h3>
              <p className="text-sm font-semibold tracking-wide text-gold uppercase">{m.role}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {m.creds.map((c) => (
                  <span key={c} className="rounded-full bg-goldlight/50 px-3 py-1 text-[11px] font-semibold text-gold">
                    {c}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal delay={200}>
        <div className="mt-14 flex flex-wrap items-center justify-between gap-6 rounded-[26px] border border-sand bg-shell p-8 shadow-soft sm:p-10">
          <div className="flex items-center gap-4">
            <Spark className="h-10 w-10 shrink-0 text-gold" />
            <p className="max-w-xl font-display text-xl leading-snug font-light text-ink sm:text-2xl">
              Every new patient still meets Dr. Sethi first — <em className="text-gold italic">fifteen years, no exceptions.</em>
            </p>
          </div>
          <button
            type="button"
            onClick={() => onBook()}
            className="group flex items-center gap-2 rounded-full bg-pine px-6 py-3.5 text-sm font-bold text-shell transition-all duration-300 hover:bg-pinedeep hover:shadow-lift"
          >
            Book with the founder
            <ArrowUpRight className="h-4 w-4 text-gold transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </Reveal>
    </section>
  );
}

function Gallery() {
  const shots = [
    { img: IMG.officeA, cap: "Suite 01 — morning light", rot: "-rotate-2" },
    { img: IMG.clinicVert, cap: "The quiet chair", rot: "rotate-1.5" },
    { img: IMG.equipA, cap: "Sterilisation, obsessively", rot: "-rotate-1" },
    { img: IMG.officeB, cap: "Suite 02 — garden view", rot: "rotate-2" },
    { img: IMG.equipB, cap: "Instruments, warmed", rot: "-rotate-1.5" },
    { img: IMG.treatB, cap: "Digital imaging in practice", rot: "rotate-1" },
  ];
  return (
    <section className="bg-goldlight/20 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          eyebrow="Step inside"
          align="center"
          title={
            <>
              Postcards from <em className="text-gold italic">the studio.</em>
            </>
          }
          copy="No wide-angle tricks — this is how the rooms actually look at 9am on a Tuesday."
        />
        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3">
          {shots.map((s, i) => (
            <Reveal key={s.cap} delay={i * 80} variant="scale-in">
              <figure className={`postcard ${s.rot} ${i % 3 === 1 ? "md:translate-y-8" : ""}`}>
                <div className="rounded-[18px] border-8 border-shell bg-shell shadow-soft">
                  <div className="aspect-[4/3] overflow-hidden rounded-[12px]">
                    <img src={s.img} alt={s.cap} className="h-full w-full object-cover" loading="lazy" />
                  </div>
                </div>
                <figcaption className="mt-3 text-center font-display text-sm text-inksoft italic">{s.cap}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certs({ nav }: { nav: (r: Route) => void }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHead
          eyebrow="Quietly credentialed"
          title={
            <>
              We'd rather show
              <br />
              the <em className="text-gold italic">paperwork.</em>
            </>
          }
          copy="Accreditations are boring — that's the point. Boring means audited, inspected and re-earned every year."
        />
        <div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {CERTS.map((c, i) => (
              <Reveal as="li" key={c} delay={i * 60} className="list-none">
                <div className="flex items-center gap-3 rounded-2xl border border-sand bg-shell px-5 py-4 text-sm font-medium text-ink transition-all duration-300 hover:border-gold hover:shadow-soft">
                  <Check className="h-4.5 w-4.5 shrink-0 text-gold" />
                  {c}
                </div>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={300}>
            <button
              type="button"
              onClick={() => nav("services")}
              className="group mt-8 flex items-center gap-2 text-sm font-bold tracking-wide text-gold uppercase transition-colors hover:text-gold"
            >
              See what all this training does
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default function About({ nav, onBook }: Props) {
  return (
    <>
      <Header />
      <Marquee items={MARQUEE_ITEMS} />
      <Timeline />
      <Values />
      <Team onBook={onBook} />
      <Gallery />
      <Certs nav={nav} />
      <section className="relative overflow-hidden bg-pinedeep py-20 text-shell">
        <div className="relative mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8 px-5 sm:px-8">
          <Reveal>
            <h2 className="font-display text-4xl leading-tight font-light sm:text-5xl">
              Come and sit in the <em className="text-gold italic">quiet chair.</em>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => onBook()}
                className="group flex items-center gap-3 rounded-full bg-gold px-7 py-4 font-bold text-shell transition-all duration-300 hover:bg-graphite hover:shadow-lift"
              >
                Book a consultation
                <ArrowUpRight className="h-4 w-4 text-gold transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <a
                href={`mailto:${STUDIO.email}`}
                className="rounded-full border border-shell/25 px-7 py-4 font-semibold text-shell transition-all hover:border-gold hover:text-goldlight"
              >
                {STUDIO.email}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
