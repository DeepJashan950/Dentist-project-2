import type { Route } from "../lib";
import { Reveal, SectionHead, Eyebrow } from "../lib";
import { STUDIO } from "../data";
import { BookingForm, ContactSidebar, StudioMap } from "../widgets";
import { ArrowUpRight, Phone, Pin, Check, Clock } from "../icons";

type Props = { nav: (r: Route) => void; intent: string | null };

function Header() {
  return (
    <section className="relative overflow-hidden pt-32 pb-14 sm:pt-40">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-24 right-[-8%] h-[28rem] w-[28rem] rounded-full bg-goldlight/10 blur-3xl" />
        <span className="text-outline absolute top-12 left-[-3%] font-display text-[10rem] leading-none font-semibold italic select-none lg:text-[14rem]">
          hello
        </span>
      </div>
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>Appointments & visits</Eyebrow>
          </Reveal>
          <h1 className="mt-6 font-display text-5xl leading-[1.03] font-light tracking-tight text-ink sm:text-6xl lg:text-[4.2rem]">
            <span className="line-mask"><span style={{ ["--d" as string]: "80ms" }}>Book the visit</span></span>
            <span className="line-mask"><span style={{ ["--d" as string]: "240ms" }}>you keep <em className="text-gold italic font-normal">postponing.</em></span></span>
          </h1>
          <Reveal delay={380}>
            <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3">
              {[
                "Replies within one working hour",
                "New patients welcome",
                "First consultation complimentary",
              ].map((t) => (
                <span key={t} className="flex items-center gap-2.5 text-sm font-medium text-inksoft">
                  <Check className="h-4 w-4 text-gold" />
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function NextSteps() {
  const steps = [
    { n: "01", title: "We call to confirm", copy: "Tom — a human, not a bot — calls within one working hour to pick a slot that suits you." },
    { n: "02", title: "The 20-minute hello", copy: "Complimentary consultation: your history, your goals, a gentle look. Zero obligation." },
    { n: "03", title: "A plan in your hands", copy: "Written options, honest pricing and timelines. Take it home, sleep on it, decide calmly." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <SectionHead
        eyebrow="What happens next"
        title={
          <>
            Three small steps<span className="text-gold"> —</span> none of them involve a drill.
          </>
        }
      />
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 110}>
            <div className="group relative rounded-[22px] border border-sand bg-shell p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 hover:shadow-soft">
              <span className="font-display text-5xl font-light text-sanddeep transition-colors duration-500 group-hover:text-gold italic">{s.n}</span>
              <h3 className="mt-4 font-display text-xl font-normal text-ink">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-inksoft">{s.copy}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function MapSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:pb-32">
      <Reveal variant="scale-in">
        <div className="relative overflow-hidden rounded-[28px] border border-sand shadow-soft">
          <StudioMap className="h-auto w-full" />
          <div className="absolute top-5 left-5 max-w-xs rounded-[22px] border border-sand bg-shell/95 p-6 shadow-lift backdrop-blur">
            <p className="flex items-center gap-2 text-[10px] font-bold tracking-[0.26em] text-gold uppercase">
              <Pin className="h-4 w-4 text-gold" /> Find us
            </p>
            <p className="mt-3 font-display text-xl leading-snug font-light text-ink">
              18 Linden Row,<br />Marylebone, London W1U 4QF
            </p>
            <p className="mt-3 text-xs leading-relaxed text-inksoft">
              Two minutes from Bond Street station · bicycle storage in the mews · step-free access throughout.
            </p>
            <a
              href="https://maps.google.com/?q=Marylebone+Lane+London"
              target="_blank"
              rel="noreferrer"
              className="group mt-4 inline-flex items-center gap-2 text-sm font-bold text-gold uppercase tracking-wide transition-colors hover:text-gold"
            >
              Get directions
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
          <div className="absolute right-5 bottom-5 hidden items-center gap-2.5 rounded-full bg-pine px-5 py-3 text-xs font-semibold text-shell sm:flex">
            <Clock className="h-4 w-4 text-gold" />
            Mon–Fri to 19:00 · Sat to 15:00
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default function Contact({ nav, intent }: Props) {
  return (
    <>
      <Header />
      <section className="mx-auto max-w-7xl px-5 pb-8 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <Reveal variant="from-left">
            <BookingForm intent={intent} />
          </Reveal>
          <Reveal variant="from-right" delay={120}>
            <ContactSidebar />
          </Reveal>
        </div>
      </section>
      <NextSteps />
      <MapSection />
      <section className="relative overflow-hidden bg-pinedeep py-16 text-shell">
        <div className="relative mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-5 sm:px-8">
          <Reveal>
            <p className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-gold" />
              <span className="font-display text-2xl font-light sm:text-3xl">
                Prefer a voice? <a href={STUDIO.phoneHref} className="text-goldlight underline-offset-4 hover:underline">{STUDIO.phone}</a>
              </span>
            </p>
          </Reveal>
          <Reveal delay={120}>
            <button
              type="button"
              onClick={() => nav("services")}
              className="rounded-full border border-shell/25 px-6 py-3.5 text-sm font-semibold text-shell transition-all hover:border-gold hover:text-goldlight"
            >
              Not sure what you need? Browse services
            </button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
