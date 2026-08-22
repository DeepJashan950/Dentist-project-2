import { useEffect, useRef, useState, type FormEvent } from "react";
import { SERVICES, HOURS, BEFORE_FILTER, AFTER_FILTER, STUDIO, type SmileCase } from "./data";
import { ChevronLeft, ChevronRight, Plus, Quote, Check, Phone, Pin, Mail, Spark, Clock } from "./icons";
import { Stars } from "./lib";

/* ------------------------------------------------------------------ */
/* before / after slider                                               */
/* ------------------------------------------------------------------ */
export function BeforeAfter({
  img,
  label,
  meta,
  className = "",
  aspect = "aspect-[4/5]",
}: {
  img: string;
  label: string;
  meta?: string;
  className?: string;
  aspect?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const setFromClientX = (clientX: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos(Math.min(97, Math.max(3, ((clientX - r.left) / r.width) * 100)));
  };

  return (
    <figure className={`group ${className}`}>
      <div
        ref={wrapRef}
        className={`relative ${aspect} w-full cursor-ew-resize touch-none overflow-hidden rounded-[22px] shadow-(--shadow-soft) select-none`}
        role="group"
        aria-label={`Before and after comparison: ${label}`}
        onPointerDown={(e) => {
          dragging.current = true;
          (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
          setFromClientX(e.clientX);
        }}
        onPointerMove={(e) => dragging.current && setFromClientX(e.clientX)}
        onPointerUp={() => (dragging.current = false)}
        onPointerCancel={() => (dragging.current = false)}
        onPointerLeave={() => (dragging.current = false)}
      >
        <img
          src={img}
          alt={`${label} — after treatment`}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ filter: AFTER_FILTER }}
          draggable={false}
        />
        <img
          src={img}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ filter: BEFORE_FILTER, clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          draggable={false}
        />
        {/* divider */}
        <div className="absolute top-0 bottom-0 z-10 w-[2px] bg-shell/90" style={{ left: `${pos}%` }}>
          <button
            type="button"
            role="slider"
            aria-label={`Drag to compare before and after — ${label}`}
            aria-valuemin={3}
            aria-valuemax={97}
            aria-valuenow={Math.round(pos)}
            aria-valuetext={`${Math.round(pos)}% before / ${100 - Math.round(pos)}% after`}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") setPos((p) => Math.max(3, p - 4));
              if (e.key === "ArrowRight") setPos((p) => Math.min(97, p + 4));
            }}
            className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-champagne/60 bg-pine text-champagnelight shadow-lift transition-transform duration-300 group-hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 7l-5 5 5 5M15 7l5 5-5 5" />
            </svg>
          </button>
        </div>
        <span className="absolute top-4 left-4 z-10 rounded-full bg-pinedeep/75 px-3 py-1 text-[10px] font-semibold tracking-[0.22em] text-shell uppercase backdrop-blur-sm">
          Before
        </span>
        <span className="absolute top-4 right-4 z-10 rounded-full bg-champagne px-3 py-1 text-[10px] font-semibold tracking-[0.22em] text-shell uppercase">
          After
        </span>
        <div className="absolute inset-x-0 bottom-0 z-20 flex justify-center pb-4 pointer-events-none">
          <span className="rounded-full border border-white/20 bg-black/45 px-3 py-1.5 text-[10px] font-semibold tracking-[0.14em] text-white/90 uppercase backdrop-blur-sm">
            Drag · swipe · use ← →
          </span>
        </div>
      </div>
      <figcaption className="mt-4 flex flex-wrap items-baseline justify-between gap-2">
        <span className="font-display text-lg text-ink italic">{label}</span>
        {meta && <span className="text-xs font-medium tracking-wide text-inksoft uppercase">{meta}</span>}
      </figcaption>
    </figure>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */
export function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number>(0);
  return (
    <div className="divide-y divide-sand border-y border-sand">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="group flex w-full items-center justify-between gap-6 py-6 text-left"
            >
              <span
                className={`font-display text-lg font-light transition-colors sm:text-xl ${
                  isOpen ? "text-gold" : "text-ink group-hover:text-gold"
                }`}
              >
                {f.q}
              </span>
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-400 ${
                  isOpen
                    ? "rotate-45 border-champagne bg-champagne text-shell"
                    : "border-sanddeep text-inksoft group-hover:border-champagne group-hover:text-champagne"
                }`}
              >
                <Plus className="h-4 w-4" />
              </span>
            </button>
            <div className={`acc-body ${isOpen ? "open" : ""}`}>
              <div>
                <p className="max-w-2xl pb-7 leading-relaxed text-inksoft">{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* testimonial rail                                                    */
/* ------------------------------------------------------------------ */
export function TestimonialRail({ items }: { items: { quote: string; fear: string; result: string; name: string; treatment: string }[] }) {
  const railRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) =>
    railRef.current?.scrollBy({ left: dir * (railRef.current.clientWidth * 0.75), behavior: "smooth" });

  return (
    <div>
      <div ref={railRef} className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8">
        {items.map((t, i) => (
          <article
            key={t.name}
            className="relative flex w-[86vw] max-w-[420px] shrink-0 snap-start flex-col rounded-[22px] border border-sand bg-shell p-7 shadow-(--shadow-soft) transition-transform duration-500 hover:-translate-y-1.5 sm:p-9"
          >
            <Quote className="h-8 w-8 text-champagne/70" />
            <p className="mt-5 flex-1 font-display text-[1.28rem] leading-snug font-light text-ink italic">
              “{t.quote}”
            </p>
            <div className="mt-7 space-y-1.5 border-t border-sand pt-5 text-sm">
              <p className="text-inksoft">
                <span className="font-semibold text-gold">Arrived:</span> {t.fear}
              </p>
              <p className="text-inksoft">
                <span className="font-semibold text-champagne">Left with:</span> {t.result}
              </p>
            </div>
            <div className="mt-5 flex items-center justify-between">
              <div>
                <p className="font-semibold text-ink">{t.name}</p>
                <p className="text-xs tracking-wide text-inksoft uppercase">{t.treatment}</p>
              </div>
              <div className="text-right">
                <Stars />
                <p className="mt-1 text-[10px] tracking-[0.2em] text-inksoft uppercase">Case {String(i + 1).padStart(2, "0")}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-7 flex items-center justify-end gap-3">
        <button
          type="button"
          onClick={() => scroll(-1)}
          aria-label="Previous stories"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-sanddeep text-ink transition-all hover:border-champagne hover:bg-champagne hover:text-shell"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => scroll(1)}
          aria-label="More stories"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-sanddeep text-ink transition-all hover:border-champagne hover:bg-champagne hover:text-shell"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* hand-drawn map                                                      */
/* ------------------------------------------------------------------ */
export function StudioMap({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 640 420" className={className} role="img" aria-label="Stylised map showing Ivory Dental Studio on Linden Row, Marylebone">
      <rect width="640" height="420" fill="#ece4d2" rx="20" />
      {/* park */}
      <rect x="430" y="40" width="170" height="120" rx="16" fill="#c9d5c4" />
      <circle cx="470" cy="80" r="12" fill="#a8bda6" />
      <circle cx="520" cy="105" r="16" fill="#a8bda6" />
      <circle cx="560" cy="70" r="10" fill="#a8bda6" />
      <text x="515" y="150" textAnchor="middle" fontSize="11" fill="#5f7a68" fontStyle="italic" fontFamily="Fraunces, serif">
        Linden Gardens
      </text>
      {/* gold accent strip */}
      <path d="M0 330 C 140 300, 260 370, 420 340 S 600 320, 640 350 L640 420 L0 420 Z" fill="#dde9e3" />
      {/* streets */}
      <g stroke="#f7f3e8" strokeLinecap="round" fill="none">
        <path d="M0 120 H640" strokeWidth="22" />
        <path d="M0 230 H640" strokeWidth="30" />
        <path d="M120 0 V420" strokeWidth="20" />
        <path d="M330 0 V330" strokeWidth="26" />
        <path d="M520 160 V330" strokeWidth="16" />
      </g>
      <g stroke="#d8cdae" strokeWidth="1.4" strokeDasharray="6 8" fill="none">
        <path d="M0 120 H640" />
        <path d="M0 230 H640" />
        <path d="M120 0 V420" />
        <path d="M330 0 V330" />
      </g>
      {/* street labels */}
      <g fontFamily="Outfit, sans-serif" fontSize="11" fill="#8a7f63" letterSpacing="2">
        <text x="30" y="112">MARYLEBONE LANE</text>
        <text x="360" y="222">LINDEN ROW</text>
        <text x="132" y="60" transform="rotate(90 132 60)">HARLEY ST</text>
        <text x="342" y="40" transform="rotate(90 342 40)">WIMPOLE ST</text>
      </g>
      {/* studio pin */}
      <g transform="translate(330 230)">
        <circle r="26" fill="#c29b57" opacity="0.22">
          <animate attributeName="r" values="20;34;20" dur="3.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0;0.3" dur="3.2s" repeatCount="indefinite" />
        </circle>
        <path d="M0 6 C -14 -8 -11 -30 0 -30 C 11 -30 14 -8 0 6 Z" transform="translate(0 -14) scale(1.15)" fill="#1c2b24" />
        <circle cy="-27" r="6" fill="#e9d7ab" />
      </g>
      <g transform="translate(330 276)" textAnchor="middle">
        <rect x="-86" y="-16" width="172" height="30" rx="15" fill="#1c2b24" />
        <text y="4" fontFamily="Fraunces, serif" fontStyle="italic" fontSize="13" fill="#e9d7ab">
          Ivory · 18 Linden Row
        </text>
      </g>
      {/* compass */}
      <g transform="translate(586 372)">
        <circle r="22" fill="#f7f3e8" stroke="#d8cdae" />
        <path d="M0 -13 L4 4 L0 1 L-4 4 Z" fill="#c29b57" />
        <text y="-26" textAnchor="middle" fontSize="10" fill="#8a7f63" fontFamily="Outfit, sans-serif">N</text>
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* booking form                                                        */
/* ------------------------------------------------------------------ */
const TREATMENT_OPTIONS = [
  ...SERVICES.map((s) => s.name),
  "Nervous patient consultation",
  "Membership enquiry",
  "Smile assessment (£49)",
];

export function BookingForm({ intent, className = "" }: { intent: string | null; className?: string }) {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    treatment: intent ?? "",
    date: "",
    time: "Morning (08:00–12:00)",
    message: "",
    emergency: false,
  });
  type FormErrors = { name?: string; contact?: string; treatment?: string; date?: string };
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [refCode, setRefCode] = useState("");

  useEffect(() => {
    if (intent) setForm((f) => ({ ...f, treatment: intent }));
  }, [intent]);

  const set = (k: string, v: string | boolean) => setForm((f) => ({ ...f, [k]: v }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const errs: FormErrors = {};
    if (form.name.trim().length < 2) errs.name = "Please tell us your name.";
    if (form.contact.trim().length < 6) errs.contact = "A phone number or email helps us confirm.";
    if (!form.treatment) errs.treatment = "Choose the closest match — we'll refine it together.";
    if (!form.date && !form.emergency) errs.date = "Pick a preferred day, or tick the emergency box.";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setStatus("sending");
    window.setTimeout(() => {
      setRefCode(`VL-${Math.floor(2400 + Math.random() * 600)}`);
      setStatus("done");
    }, 900);
  };

  if (status === "done") {
    return (
      <div className={`rounded-[24px] border border-gold/20 bg-shell p-8 text-center shadow-(--shadow-soft) sm:p-12 ${className}`}>
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold text-shell">
          <Check className="h-7 w-7" />
        </span>
        <h3 className="mt-6 font-display text-3xl font-light text-ink">
          Request received<span className="text-champagne">.</span>
        </h3>
        <p className="mx-auto mt-3 max-w-md leading-relaxed text-inksoft">
          Thank you, {form.name.split(" ")[0] || "friend"} — your reference is{" "}
          <span className="font-semibold text-gold">{refCode}</span>. Tom or a clinician will call you within one
          working hour to confirm{" "}
          <span className="italic">{form.treatment || "your visit"}</span>
          {form.date && <> on {new Date(form.date + "T12:00:00").toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" })}</>}.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setForm({ name: "", contact: "", treatment: "", date: "", time: "Morning (08:00–12:00)", message: "", emergency: false });
          }}
          className="mt-8 rounded-full border border-sanddeep px-6 py-2.5 text-sm font-semibold text-ink transition-all hover:border-champagne hover:bg-champagne hover:text-shell"
        >
          Book another visit
        </button>
      </div>
    );
  }

  const inputCls =
    "w-full rounded-xl border bg-ivory/60 px-4 py-3 text-[15px] text-ink placeholder:text-inksoft/60 transition-all focus:border-gold focus:bg-shell focus:outline-none focus:ring-2 focus:ring-gold/20";

  return (
    <form onSubmit={submit} noValidate className={`rounded-[24px] border border-sand bg-shell p-7 shadow-(--shadow-soft) sm:p-10 ${className}`}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="bf-name" className="mb-1.5 block text-xs font-semibold tracking-[0.18em] text-inksoft uppercase">
            Full name
          </label>
          <input id="bf-name" value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Amelia Hartley" className={`${inputCls} ${errors.name ? "border-champagne" : "border-sand"} `} />
          {errors.name && <p className="mt-1.5 text-xs font-medium text-champagne">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="bf-contact" className="mb-1.5 block text-xs font-semibold tracking-[0.18em] text-inksoft uppercase">
            Phone or email
          </label>
          <input id="bf-contact" value={form.contact} onChange={(e) => set("contact", e.target.value)} placeholder="07700 900 123" className={`${inputCls} ${errors.contact ? "border-champagne" : "border-sand"}`} />
          {errors.contact && <p className="mt-1.5 text-xs font-medium text-champagne">{errors.contact}</p>}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="bf-treat" className="mb-1.5 block text-xs font-semibold tracking-[0.18em] text-inksoft uppercase">
            What brings you in?
          </label>
          <select id="bf-treat" value={form.treatment} onChange={(e) => set("treatment", e.target.value)} className={`${inputCls} ${errors.treatment ? "border-champagne" : "border-sand"}`}>
            <option value="">Choose the closest match…</option>
            {TREATMENT_OPTIONS.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          {errors.treatment && <p className="mt-1.5 text-xs font-medium text-champagne">{errors.treatment}</p>}
        </div>
        <div>
          <label htmlFor="bf-date" className="mb-1.5 block text-xs font-semibold tracking-[0.18em] text-inksoft uppercase">
            Preferred date
          </label>
          <input
            id="bf-date"
            type="date"
            value={form.date}
            min={new Date().toISOString().slice(0, 10)}
            onChange={(e) => set("date", e.target.value)}
            className={`${inputCls} ${errors.date ? "border-champagne" : "border-sand"}`}
          />
          {errors.date && <p className="mt-1.5 text-xs font-medium text-champagne">{errors.date}</p>}
        </div>
        <div>
          <label htmlFor="bf-time" className="mb-1.5 block text-xs font-semibold tracking-[0.18em] text-inksoft uppercase">
            Preferred window
          </label>
          <select id="bf-time" value={form.time} onChange={(e) => set("time", e.target.value)} className={`${inputCls} border-sand`}>
            <option>Morning (08:00–12:00)</option>
            <option>Afternoon (12:00–16:00)</option>
            <option>Late (16:00–19:00)</option>
            <option>Saturday</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="bf-msg" className="mb-1.5 block text-xs font-semibold tracking-[0.18em] text-inksoft uppercase">
            Anything we should know? <span className="normal-case text-inksoft/60">(optional)</span>
          </label>
          <textarea
            id="bf-msg"
            rows={3}
            value={form.message}
            onChange={(e) => set("message", e.target.value)}
            placeholder="Nerves, medical history, the tooth that's been annoying you…"
            className={`${inputCls} resize-none border-sand`}
          />
        </div>
      </div>

      <label className="mt-5 flex cursor-pointer items-start gap-3 rounded-xl border border-champagne/40 bg-champagne/10 p-4">
        <input
          type="checkbox"
          checked={form.emergency}
          onChange={(e) => set("emergency", e.target.checked)}
          className="mt-1 h-4 w-4 accent-[#c29b57]"
        />
        <span className="text-sm leading-relaxed text-ink">
          <span className="font-semibold">This is urgent.</span> Pain, swelling, trauma or a lost crown — we'll prioritise
          you today and call you straight back.
        </span>
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="group mt-7 flex w-full items-center justify-center gap-3 rounded-full bg-pine px-8 py-4 font-semibold text-shell transition-all duration-300 hover:bg-pinedeep hover:shadow-lift disabled:opacity-60"
      >
        {status === "sending" ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-shell/30 border-t-champagne" />
            Sending your request…
          </>
        ) : (
          <>
            Request my consultation
            <Spark className="h-3.5 w-3.5 text-champagne transition-transform duration-300 group-hover:rotate-90" />
          </>
        )}
      </button>
      <p className="mt-4 text-center text-xs text-inksoft">
        No payment taken now · replies within one working hour · cancel anytime
      </p>
    </form>
  );
}

/* ------------------------------------------------------------------ */
/* contact side card                                                   */
/* ------------------------------------------------------------------ */
export function ContactSidebar() {
  const today = (new Date().getDay() + 6) % 7; // Mon=0
  return (
    <div className="space-y-5">
      <div className="rounded-[24px] border border-sand bg-shell p-7 shadow-(--shadow-soft)">
        <h3 className="font-display text-2xl font-light text-ink">Visit the studio</h3>
        <ul className="mt-5 space-y-4 text-[15px]">
          <li className="flex gap-3.5">
            <Pin className="mt-0.5 h-5 w-5 shrink-0 text-champagne" />
            <span className="leading-relaxed text-inksoft">{STUDIO.address}</span>
          </li>
          <li className="flex gap-3.5">
            <Phone className="mt-0.5 h-5 w-5 shrink-0 text-champagne" />
            <a href={STUDIO.phoneHref} className="text-ink underline-offset-4 transition-colors hover:text-gold hover:underline">
              {STUDIO.phone}
            </a>
          </li>
          <li className="flex gap-3.5">
            <Mail className="mt-0.5 h-5 w-5 shrink-0 text-champagne" />
            <a href={`mailto:${STUDIO.email}`} className="text-ink underline-offset-4 transition-colors hover:text-gold hover:underline">
              {STUDIO.email}
            </a>
          </li>
        </ul>
      </div>

      <div className="rounded-[24px] border border-sand bg-shell p-7 shadow-(--shadow-soft)">
        <h3 className="flex items-center gap-2.5 font-display text-2xl font-light text-ink">
          <Clock className="h-5 w-5 text-champagne" /> Opening hours
        </h3>
        <ul className="mt-4 divide-y divide-sand/70">
          {HOURS.map((h, i) => (
            <li key={h.day} className={`flex items-center justify-between py-2.5 text-sm ${i === today ? "font-semibold text-gold" : "text-inksoft"}`}>
              <span className="flex items-center gap-2">
                {h.day}
                {i === today && <span className="rounded-full bg-gold/15 px-2 py-0.5 text-[10px] tracking-wider text-gold uppercase">today</span>}
              </span>
              <span>{h.time}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative overflow-hidden rounded-[24px] bg-pine p-7 text-shell shadow-(--shadow-soft)">
        <Spark className="absolute -top-3 -right-3 h-20 w-20 text-champagne/15" />
        <p className="text-[11px] font-semibold tracking-[0.3em] text-champagne uppercase">In pain right now?</p>
        <h3 className="mt-3 font-display text-2xl leading-snug font-light">
          The emergency line is answered by a dentist<span className="text-champagne"> — </span>not a machine.
        </h3>
        <a
          href={STUDIO.emergencyHref}
          className="mt-6 inline-flex items-center gap-3 rounded-full bg-champagne px-6 py-3 text-sm font-bold text-shell transition-all duration-300 hover:bg-graphite hover:shadow-lift"
        >
          <Phone className="h-4 w-4" />
          {STUDIO.emergencyPhone}
        </a>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* case card (results grid)                                            */
/* ------------------------------------------------------------------ */
export function CaseCard({ c }: { c: SmileCase }) {
  return (
    <BeforeAfter img={c.img} label={c.title} meta={`${c.cat} · ${c.sessions}`} />
  );
}
