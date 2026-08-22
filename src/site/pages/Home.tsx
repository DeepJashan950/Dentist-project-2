import { useState } from "react";
import type { Route } from "../lib";
import { Reveal, SectionHead, Eyebrow, Marquee, useInView } from "../lib";
import { BeforeAfter, Faq, TestimonialRail } from "../widgets";
import { CinematicHero, ServiceTiles, StudioTour } from "../components/hero";
import {
  IMG,
  SERVICES,
  DIFFERENCES,
  JOURNEY,
  COMFORT,
  TESTIMONIALS,
  PLANS,
  FAQS,
  CASES,
  MARQUEE_ITEMS,
  STUDIO,
} from "../data";
import { ArrowUpRight, ArrowRight, Check, Phone, Scan, Heart, Gem, Leaf } from "../icons";

type HomeProps = {
  nav: (r: Route) => void;
  onBook: (intent?: string) => void;
  onService: (id: string) => void;
};

/* 4 pillars */
const PILLARS = [
  { icon: Scan, title: "Advanced technology", copy: "3D scanning, in-house milling and microscope precision — the machinery is world-class and completely out of your eyeline." },
  { icon: Heart, title: "Comfort first", copy: "Warm anaesthetic, noise-cancelling headphones and a hand-signal that stops everything instantly." },
  { icon: Gem, title: "Expert team", copy: "Eight clinicians, long tenures, one shared record. Cosmetic, orthodontic and surgical skill under a single roof." },
  { icon: Leaf, title: "Personalised care", copy: "No treatment templates. Every plan is designed around your face, your budget and the pace you're comfortable with." },
];

function WhyChoose() {
  return (
    <section className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 lg:py-24">
      <SectionHead eyebrow="Why patients choose Ivory" align="center" title={<>Where expertise meets <em className="font-light italic">empathy.</em></>} copy="Four commitments that shape every appointment — from the first phone call to the final polish." />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PILLARS.map((p,i)=>{
          const Icon=p.icon;
          return (
            <Reveal key={p.title} delay={i*90}>
              <div className="group h-full rounded-[20px] border border-slate-200/70 bg-white p-6 text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-white transition-transform duration-500 group-hover:rotate-6"><Icon className="h-6 w-6"/></span>
                <h3 className="mt-4 font-display text-lg font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-500">{p.copy}</p>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  );
}

function ServicesIndex({ onService, nav }: { onService: (id:string)=>void; nav:(r:Route)=>void }){
  const featured = SERVICES.slice(0,5);
  return (
    <section className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 lg:py-20">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHead eyebrow="Signature care" title={<>Eight disciplines,<br/>one calm roof.</>} />
        <Reveal delay={150}><button type="button" onClick={()=>nav("services")} className="group flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold hover:border-slate-900 hover:bg-slate-900 hover:text-white">All eight services <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5"/></button></Reveal>
      </div>
      <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
        {featured.map((s,i)=>{
          const Icon=s.icon;
          return (
            <Reveal key={s.id} delay={i*60}>
              <button type="button" onClick={()=>onService(s.id)} className="group flex w-full items-center gap-4 py-5 text-left transition-all hover:bg-white hover:px-3 sm:gap-6 sm:py-6">
                <span className="w-8 font-mono text-xs text-slate-400">{s.no}</span>
                <span className="hidden h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 group-hover:bg-slate-900 group-hover:text-white sm:flex"><Icon className="h-5 w-5"/></span>
                <span className="flex-1"><span className="block font-display text-xl font-semibold text-slate-900 sm:text-2xl">{s.name}</span><span className="text-xs text-slate-500">{s.tag}</span></span>
                <span className="hidden text-[10px] font-bold uppercase tracking-widest text-slate-400 md:block">{s.cat}</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 group-hover:bg-slate-900 group-hover:text-white"><ArrowUpRight className="h-4 w-4" /></span>
              </button>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

/* ------ WOW FACTOR – Certified Quality exploded implant ------ */
function ExplodedQuality(){
  const points = [
    { no: "01", title: "Precision fit", copy: "Digital planning keeps the implant, abutment and crown aligned as one system." },
    { no: "02", title: "Biocompatible materials", copy: "Titanium support with a natural-looking ceramic finish, selected around the patient." },
    { no: "03", title: "Guided placement", copy: "Imaging and guided workflows reduce guesswork and keep the process predictable." },
  ];

  return (
    <section className="relative scroll-mt-24 overflow-hidden bg-[#eaf0f5] py-20 sm:py-24 lg:py-28">
      <div className="watermark-pattern pointer-events-none absolute inset-0 opacity-20" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_42%,rgba(255,255,255,.95),transparent_38%)]" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-[1320px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.84fr_1.16fr] lg:gap-16">
        <div>
          <Reveal>
            <span className="inline-flex items-center rounded-full border border-slate-300/80 bg-white/75 px-3 py-1 text-[10px] font-bold tracking-[0.22em] text-slate-500 uppercase">
              Implant precision
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 max-w-lg font-display text-[clamp(2.6rem,5.8vw,5rem)] leading-[0.9] tracking-[-0.055em] text-slate-950">
              One implant.<br />
              <span className="font-light text-slate-500">Three decisions.</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              A focused product view keeps the implant easy to understand while the three decisions explain what makes the result precise, durable and natural-looking.
            </p>
          </Reveal>

          <div className="mt-8 space-y-3">
            {points.map((point, i) => (
              <Reveal key={point.no} delay={180 + i * 70}>
                <div className="flex gap-4 rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-[0_14px_40px_-28px_rgba(15,23,42,.35)] backdrop-blur-sm sm:p-5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-950 font-mono text-[10px] font-bold text-white">{point.no}</span>
                  <div>
                    <h3 className="text-sm font-bold tracking-wide text-slate-900">{point.title}</h3>
                    <p className="mt-1 text-[12px] leading-5 text-slate-500">{point.copy}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal variant="scale-in" delay={120}>
          <div className="relative mx-auto w-full max-w-[620px]">
            <div className="relative overflow-hidden rounded-[34px] border border-white/90 bg-white/90 p-5 shadow-[0_34px_90px_-34px_rgba(15,23,42,.35)] sm:p-7 lg:p-8">
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
                <div>
                  <p className="text-[9px] font-bold tracking-[0.24em] text-slate-400 uppercase">Product study</p>
                  <h3 className="mt-1 font-display text-lg font-semibold tracking-tight text-slate-900">Implant system</h3>
                </div>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[9px] font-bold tracking-[0.18em] text-slate-500 uppercase">01 / 03</span>
              </div>

              <div className="relative mt-5 overflow-hidden rounded-[26px] bg-[#e8eef3] px-6 py-8 sm:px-10 sm:py-9">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,.95),transparent_54%)]" />
                <div className="relative mx-auto flex min-h-[430px] items-center justify-center sm:min-h-[500px]">
                  <img
                    src="/images/implant-tech-cropped.png"
                    alt="Dental implant system showing ceramic crown and titanium implant"
                    className="w-[min(78%,360px)] max-w-none object-contain drop-shadow-[0_26px_26px_rgba(15,23,42,.16)]"
                    draggable={false}
                  />
                </div>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3 border-t border-slate-200/80 pt-5">
                {[
                  ["Digital planning", "01"],
                  ["Guided placement", "02"],
                  ["Natural finish", "03"],
                ].map(([label, no]) => (
                  <div key={no} className="rounded-2xl bg-slate-50 px-3 py-3">
                    <p className="font-mono text-[9px] font-bold text-slate-400">{no}</p>
                    <p className="mt-1 text-[10px] font-bold tracking-[0.08em] text-slate-700 uppercase">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function StudioShowcase({ onTour, onBook }: { onTour:()=>void; onBook:(i?:string)=>void }){
  const { ref, inView } = useInView<HTMLDivElement>(0.25);
  return (
    <section className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 lg:py-28">
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHead eyebrow="Inside the studio" title={<>It doesn't look like<br/>a dentist. That's the point.</>} copy="Deep pine walls replaced by frost-white minimalism. Warm oak, hidden machinery. The clinical technology is world-class — you just never have to look at it." />
          <div className="mt-6 space-y-2.5">
            {["Three private suites — never a shared room","Heated chairs, weighted blankets, ceiling cinema","Step-free access and a mews bicycle store"].map(t=>(
              <p key={t} className="flex gap-3 text-sm text-slate-600"><Check className="mt-0.5 h-4 w-4 shrink-0 text-slate-900" />{t}</p>
            ))}
          </div>
          <div className="mt-7 flex gap-3">
            <button type="button" onClick={onTour} className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-bold text-white hover:bg-black"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-slate-900">▶</span>Take the studio tour</button>
            <button type="button" onClick={()=>onBook()} className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold hover:border-slate-900 hover:bg-slate-900 hover:text-white">Visit in person</button>
          </div>
        </div>
        <Reveal variant="scale-in">
          <div ref={ref as any} className="relative">
            <div className="relative overflow-hidden rounded-[22px] shadow-soft">
              <img src={IMG.studioDark} alt="studio" className="aspect-[4/3] w-full object-cover" />
              <button type="button" onClick={onTour} className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-900 shadow-lift hover:scale-105">▶</button>
            </div>
            <div className="absolute -top-4 -left-4 rounded-xl bg-white px-4 py-2.5 shadow-soft">
              <p className="font-display text-2xl font-bold">{inView ? "15+":"0"}</p><p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Years open</p>
            </div>
            <div className="absolute -bottom-4 right-6 rounded-xl bg-slate-900 px-4 py-2.5 text-white shadow-lift">
              <p className="font-display text-2xl font-bold">{inView ? "6,000+":"0"}</p><p className="text-[10px] uppercase tracking-widest text-white/60">Happy patients</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function WhyDifferent({ nav }: { nav:(r:Route)=>void }){
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1320px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHead eyebrow="The Ivory difference" title={<>Calm is a <em className="font-light italic">clinical skill.</em></>} copy="We rebuilt the appointment around the patient's nervous system, not the dentist's schedule." />
          <button type="button" onClick={()=>nav("about")} className="group mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-900">The studio story <ArrowRight className="h-4 w-4 group-hover:translate-x-1"/></button>
        </div>
        <div className="space-y-4">
          {DIFFERENCES.map((d,i)=>{
            const Icon=d.icon;
            return (
              <Reveal key={d.no} delay={i*80}>
                <div className="flex gap-5 rounded-2xl border border-slate-200 bg-frost p-6 hover:bg-white hover:shadow-soft">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white"><Icon className="h-6 w-6"/></span>
                  <div><h3 className="font-display text-xl font-semibold">{d.title}</h3><p className="mt-1.5 text-sm leading-relaxed text-slate-500">{d.copy}</p></div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Journey(){
  return (
    <section className="bg-frost py-20 lg:py-28">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <SectionHead eyebrow="The smile journey" align="center" title={<>From "I've been putting this off"<br/>to "that was it?"</>} />
        <div className="mx-auto mt-12 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {JOURNEY.map((j,i)=>(
            <Reveal key={j.step} delay={i*120}>
              <div className="rounded-2xl bg-white p-6 text-center shadow-soft">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 font-mono text-xs font-bold text-white">{j.step}</div>
                <h3 className="mt-4 font-display text-lg font-semibold">{j.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{j.copy}</p>
                <p className="mt-3 inline-block rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider">{j.meta}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ResultsPreview(){
  const picks=CASES.slice(0,3);
  const [a,setA]=useState(0);
  const c=picks[a] ?? picks[0]!;
  return (
    <section className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 lg:py-28">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 items-center">
        <div>
          <SectionHead eyebrow="Proof, not promises" title={<>Drag the line.<br/>See the difference.</>} copy="Every result is from the Ivory archive — same chair, same light, consented. Drag the handle to compare." />
          <div className="mt-6 space-y-2.5">
            {picks.map((p,i)=>(
              <button type="button" key={p.id} onClick={()=>setA(i)} className={`flex w-full justify-between rounded-xl border px-4 py-3 text-left ${a===i ? "border-slate-900 bg-slate-900 text-white":"border-slate-200 bg-white hover:border-slate-900"}`}>
                <span><span className="block font-display text-[15px] font-semibold">{p.title}</span><span className="text-[11px] opacity-70">{p.treatment}</span></span>
                <span className="text-[10px] font-bold uppercase tracking-widest">{p.cat}</span>
              </button>
            ))}
          </div>
        </div>
        <Reveal><BeforeAfter img={c.img} label={c.title} meta={`${c.cat} · ${c.sessions}`} /></Reveal>
      </div>
    </section>
  )
}

function Founder({ nav }: { nav:(r:Route)=>void }){
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1320px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal><div className="relative mx-auto max-w-md overflow-hidden rounded-[28px] shadow-lift"><img src={IMG.leadDentist} alt="Dr Sethi" className="aspect-[4/5] w-full object-cover" /><div className="absolute bottom-4 right-4 rounded-xl bg-white px-4 py-2 shadow-soft"><p className="font-display text-xl font-bold">15 years</p><p className="text-[10px] uppercase tracking-widest text-slate-500">gentle practice</p></div></div></Reveal>
        <div>
          <SectionHead eyebrow="Meet the founder" title={<>“Patients don't fear dentistry.<br/>They fear being judged.”</>} />
          <p className="mt-6 leading-relaxed text-slate-600">Dr. Anaya Sethi opened Ivory in 2011 after a decade in hospital dentistry. Her answer was radical — build the studio around the anxious patient first, and let excellence live inside that calm.</p>
          <button type="button" onClick={()=>nav("about")} className="group mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider">Meet the whole team <ArrowRight className="h-4 w-4 group-hover:translate-x-1"/></button>
        </div>
      </div>
    </section>
  )
}

function FearFree({ onBook }: { onBook:(i?:string)=>void }){
  return (
    <section className="bg-slate-900 py-20 text-white lg:py-28">
      <div className="mx-auto grid max-w-[1320px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHead light eyebrow="For the nervous third" title={<>Anxious about dentists?<br/>Good. We built this for you.</>} copy="One in three arrives after years away, heart racing at the door. The entire studio is engineered to prove a visit can feel like nothing much at all." />
          <button type="button" onClick={()=>onBook("Nervous patient consultation")} className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-900 hover:bg-slate-100">Plan a comfort-first visit <ArrowUpRight className="h-4 w-4"/></button>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {COMFORT.map((cf,i)=>{
            const Icon=cf.icon;
            return (
              <Reveal key={cf.title} delay={i*60}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 hover:bg-white/[0.09]">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white"><Icon className="h-5 w-5"/></span>
                  <h3 className="mt-3 font-display text-[16px] font-semibold">{cf.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-white/60">{cf.copy}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Stories(){
  return (
    <section className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 lg:py-28">
      <SectionHead eyebrow="Patient stories" title={<>They arrived scared.<br/>They left photogenic.</>} />
      <div className="mt-10"><TestimonialRail items={TESTIMONIALS} /></div>
    </section>
  )
}

function Plans({ onBook }: { onBook:(i?:string)=>void }){
  return (
    <section className="bg-frost-deep py-20 lg:py-28">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <SectionHead align="center" eyebrow="The Ivory plan" title={<>Dentistry on subscription<br/>like everything else you love.</>} />
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 lg:grid-cols-2">
          {PLANS.map((p,i)=>(
            <Reveal key={p.name} delay={i*100}>
              <div className={`rounded-[22px] p-7 sm:p-8 ${p.featured ? "bg-slate-900 text-white shadow-lift lg:-my-3 lg:py-10":"bg-white border border-slate-200 shadow-soft"}`}>
                <h3 className="font-display text-2xl font-semibold">{p.name}</h3>
                <p className="mt-1 text-xs italic opacity-60">{p.tagline}</p>
                <p className="mt-4 flex items-baseline gap-1"><span className="font-display text-5xl font-light">£{p.price}</span><span className="text-xs opacity-60">/ month</span></p>
                <ul className="mt-6 space-y-2 border-t border-white/10 pt-5 text-sm sm:border-slate-200">{p.features.map(f=><li key={f} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0"/>{f}</li>)}</ul>
                <button type="button" onClick={()=>onBook("Membership enquiry")} className={`mt-6 w-full rounded-full py-3 text-sm font-bold ${p.featured?"bg-white text-slate-900 hover:bg-slate-100":"bg-slate-900 text-white hover:bg-black"}`}>Join {p.name}</button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function FaqSection(){
  return (
    <section className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 lg:py-28">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHead eyebrow="Asked, answered" title={<>The questions people<br/>almost type into Google.</>} />
          <a href={STUDIO.phoneHref} className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-bold hover:bg-slate-900 hover:text-white"><Phone className="h-4 w-4"/>{STUDIO.phone}</a>
        </div>
        <Faq items={FAQS} />
      </div>
    </section>
  )
}

function FinalCta({ onBook }: { onBook:(i?:string)=>void }){
  return (
    <section className="bg-slate-900 py-20 text-white lg:py-24">
      <div className="mx-auto grid max-w-[1320px] items-center gap-8 px-5 sm:px-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <Eyebrow light>Ready when you are</Eyebrow>
          <h2 className="mt-4 font-display text-5xl leading-[0.95] tracking-tighter sm:text-6xl">Your smile,<br/><em className="font-light italic text-slate-300">minus the dread.</em></h2>
        </div>
        <div className="space-y-3 lg:pl-8">
          <button type="button" onClick={()=>onBook()} className="flex w-full items-center justify-between rounded-full bg-white px-6 py-4 font-bold text-slate-900 hover:bg-slate-100">Book a consultation <ArrowUpRight className="h-5 w-5"/></button>
          <a href={STUDIO.phoneHref} className="flex w-full items-center justify-between rounded-full border border-white/20 px-6 py-4 font-semibold hover:border-white">Or call {STUDIO.phone} <Phone className="h-5 w-5"/></a>
        </div>
      </div>
    </section>
  )
}

export default function Home({ nav, onBook, onService }: HomeProps){
  const [tour,setTour]=useState(false);
  return (
    <>
      <CinematicHero nav={nav} onBook={onBook} />
      <ServiceTiles onService={onService} />
      <WhyChoose />
      <Marquee items={MARQUEE_ITEMS} />
      <ServicesIndex onService={onService} nav={nav} />
      <ExplodedQuality />
      <StudioShowcase onTour={()=>setTour(true)} onBook={onBook} />
      <WhyDifferent nav={nav} />
      <Journey />
      <ResultsPreview />
      <Founder nav={nav} />
      <FearFree onBook={onBook} />
      <Stories />
      <Plans onBook={onBook} />
      <FaqSection />
      <FinalCta onBook={onBook} />
      <StudioTour open={tour} onClose={()=>setTour(false)} />
    </>
  )
}
