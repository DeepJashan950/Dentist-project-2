import { useEffect, useState, useRef } from "react";
import type { Route } from "../lib";
import { Reveal, useInView, useCountUp } from "../lib";
import { IMG, SERVICES } from "../data";
import { ArrowUpRight, ArrowRight, Spark, ChevronLeft, ChevronRight } from "../icons";

/* Shade widget – tight, clinical */
function ShadeCustomizer() {
  const [shade, setShade] = useState(62);
  const map = (v: number) => {
    if (v < 22) return { code: "A3", name: "Warm Amber Natural", sub: "Organic enamel light diffusion" };
    if (v < 52) return { code: "A1", name: "Classic Pearl Ivory", sub: "Refined natural bright – daily wear" };
    if (v < 82) return { code: "OM3", name: "Modern Bleach Ivory", sub: "Premium high-reflect ceramic" };
    return { code: "BL1", name: "Celebrity Ultra-Bleach", sub: "Maximum luminosity – studio grade" };
  };
  const cur = map(shade);
  return (
    <div className="glass rounded-[22px] border border-white/80 p-5 shadow-soft">
      <div className="flex items-center justify-between border-b border-slate-200/70 pb-2.5">
        <p className="text-[10px] font-bold tracking-[0.22em] text-slate-900 uppercase">Simulated Luminous Shade</p>
        <span className="rounded bg-slate-900 px-2 py-0.5 font-mono text-[11px] font-bold text-white">{cur.code}</span>
      </div>
      <p className="mt-3 font-display text-[1.35rem] leading-none tracking-tight text-slate-900">{cur.name}</p>
      <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{cur.sub}</p>
      <div className="mt-4">
        <div className="mb-2 flex justify-between text-[10px] font-bold uppercase tracking-wider text-slate-400">
          <span>Organic</span><span>Ultra Bright</span>
        </div>
        <input
          type="range" min={0} max={100} value={shade}
          onChange={e => setShade(Number(e.target.value))}
          className="h-1.5 w-full cursor-ew-resize appearance-none rounded-full bg-slate-200 accent-slate-900"
        />
        <div className="mt-2.5 flex justify-between border-t border-slate-200/60 pt-2 font-mono text-[10px] text-slate-500">
          <span>Trl: {Math.max(24, 100 - Math.round(shade/1.5))}%</span>
          <span>RI 1.48</span>
        </div>
      </div>
    </div>
  );
}

function StatPill({ target, label, start, delay }:{ target:number; label:string; start:boolean; delay:number }){
  const v = useCountUp(target, start);
  return (
    <Reveal delay={delay}>
      <div className="glass rounded-2xl px-5 py-3.5 text-center">
        <p className="font-display text-2xl font-semibold tracking-tight tabular-nums">{target===49 ? (v/10).toFixed(1) : `${v.toLocaleString()}${target===100?'%':'+'}`}</p>
        <p className="mt-1 text-[9px] font-bold tracking-[0.2em] text-slate-500 uppercase">{label}</p>
      </div>
    </Reveal>
  );
}

export function CinematicHero({ nav, onBook }: { nav: (r: Route) => void; onBook: (intent?: string)=>void }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.25);
  const [active, setActive] = useState<number|null>(null);
  const [mouse, setMouse] = useState({x:0,y:0});
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(()=>{
    const onMove = (e: MouseEvent)=>{
      const x = (e.clientX / window.innerWidth - 0.5) * 18;
      const y = (e.clientY / window.innerHeight - 0.5) * 14;
      setMouse({x,y});
    };
    window.addEventListener('mousemove', onMove);
    return ()=> window.removeEventListener('mousemove', onMove);
  },[]);

  const hotspots = [
    { id:1, top:"28%", left:"48%", t:"Zirconia Crown", d:"Hand-layered · 0.3mm translucency" },
    { id:2, top:"56%", left:"60%", t:"Titanium Abutment", d:"Swiss thread · guided placement" },
    { id:3, top:"82%", left:"52%", t:"Biocompatible Post", d:"No allergy · bone preservation" },
  ];

  return (
    <section ref={heroRef as any} className="relative overflow-hidden bg-frost pt-[88px] lg:pt-[96px]">
      {/* blueprint grid */}
      <div className="watermark-pattern pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      {/* soft vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_38%,transparent_55%,#EEF3F7_88%)]" />

      {/* side technical labels */}
      <div className="pointer-events-none hidden lg:block">
        <p className="absolute left-6 top-[28%] z-10 rotate-180 font-mono text-[10px] tracking-[0.32em] text-slate-400/70 uppercase [writing-mode:vertical-rl]">01 / DIGITAL CARE · IVORY CLINIC</p>
        <p className="absolute right-6 top-[34%] z-10 font-mono text-[10px] tracking-[0.32em] text-slate-400/70 uppercase [writing-mode:vertical-rl]">SCROLL TO DISCOVER — 2026</p>
        <p className="absolute left-7 bottom-8 z-10 font-mono text-[10px] tracking-[0.28em] text-slate-400/60 uppercase">IVORY DENTAL STUDIO · DIGITAL CARE</p>
      </div>

      {/* faint watermark numbers – very low opacity, behind everything */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 flex items-start justify-center pt-[18vh] select-none">
        <span className="font-display text-[32vw] leading-[0.8] font-black tracking-[-0.05em] text-slate-900/[0.03]">96</span>
      </div>

      <div className="relative z-10 mx-auto max-w-[1320px] px-5 sm:px-8">
        {/* HEADLINE */}
        <div className="mx-auto max-w-[1120px] text-center">
          <Reveal>
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-1.5 text-[10px] font-bold tracking-[0.24em] text-slate-600 uppercase shadow-soft">
              <Spark className="h-3 w-3" /> Innovative restoration technology
            </div>
          </Reveal>

          <h1 className="mx-auto mt-6 font-display text-[clamp(2.5rem,7.2vw,5.6rem)] leading-[0.9] tracking-[-0.045em] text-balance text-slate-900">
            <span className="line-mask"><span style={{"--d":"80ms"} as any} className="font-light">Innovative</span></span>
            <span className="line-mask -mt-1">
              <span style={{"--d":"200ms"} as any} className="flex flex-wrap justify-center gap-x-[0.18em]">
                <span className="font-light">tooth</span>
                <span className="font-semibold">restoration</span>
                <span className="font-light text-slate-400">technology</span>
              </span>
            </span>
            <span className="line-mask -mt-1">
              <span style={{"--d":"340ms"} as any} className="flex flex-wrap justify-center gap-x-[0.18em]">
                <span className="font-light">for a</span>
                <span className="font-light text-slate-300">healthy</span>
                <span className="ml-[0.15em] font-light">and</span>
                <span className="font-semibold">Confident</span>
              </span>
            </span>
            <span className="line-mask -mt-1">
              <span style={{"--d":"460ms"} as any} className="font-light tracking-[-0.06em]">Smile</span>
            </span>
          </h1>

          <Reveal delay={520}>
            <div className="mx-auto mt-7 flex max-w-2xl flex-wrap items-center justify-center gap-3">
              <button type="button"
                onClick={()=>onBook()}
                className="shine group inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-black hover:shadow-lift"
              >
                Book a consultation
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <button type="button"
                onClick={()=>nav("services")}
                className="group inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-6 py-3.5 text-sm font-semibold text-slate-700 hover:border-slate-900 hover:text-slate-900"
              >
                Explore services <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </Reveal>
        </div>

        {/* CENTER STAGE: left copy / tooth / right copy */}
        <div className="relative mx-auto mt-10 lg:mt-12 grid max-w-[1240px] grid-cols-1 items-center gap-8 lg:grid-cols-[280px_1fr_300px] lg:gap-6">

          {/* Left: guarantees */}
          <Reveal delay={200} variant="from-left" className="order-2 lg:order-1">
            <div className="mx-auto max-w-[320px] space-y-5 lg:mx-0">
              <div className="text-left">
                <p className="text-[11px] font-bold tracking-[0.2em] text-slate-900 uppercase">Lifetime Guarantee</p>
                <p className="mt-1.5 text-[13px] leading-relaxed text-slate-500">Precision-milled ceramic with certified titanium foundation. Crafted in Marylebone lab.</p>
              </div>
              <div className="glass rounded-[18px] p-4 text-left shadow-soft">
                <p className="text-[10px] font-bold tracking-[0.2em] text-slate-900 uppercase">Live Consult Availability</p>
                <p className="mt-2 font-display text-2xl leading-none text-slate-900">Today · 16:30</p>
                <p className="mt-1 text-xs text-slate-500">Dr. Sethi — 20 min, complimentary</p>
                <button type="button" onClick={()=>onBook()} className="mt-3 w-full rounded-full bg-slate-900 py-2.5 text-xs font-bold text-white hover:bg-black">Reserve this opening</button>
              </div>
              <div className="hidden lg:block rounded-xl border border-slate-200/60 bg-white/50 px-4 py-2.5 text-center font-mono text-[10px] leading-relaxed text-slate-400">
                LATENCY_PING: 14ms<br/>SECURE: SSL_256 // AES_GDC
              </div>
            </div>
          </Reveal>

          {/* Center tooth with orbit */}
          <div className="order-1 lg:order-2 relative mx-auto flex w-full max-w-[520px] justify-center">
            {/* orbital ellipse (thin line) */}
            <svg className="pointer-events-none absolute left-1/2 top-[54%] z-0 h-[68%] w-[112%] -translate-x-1/2 -translate-y-1/2" viewBox="0 0 400 120" fill="none" aria-hidden="true">
              <ellipse cx="200" cy="60" rx="190" ry="48" stroke="#CBD5E0" strokeWidth="1" strokeOpacity="0.9" strokeDasharray="6 10" className="anim-spin-slow origin-center" style={{ transformBox: "fill-box", animationDuration: "28s"}} />
              <ellipse cx="200" cy="60" rx="150" ry="38" stroke="#E2E8F0" strokeWidth="1" strokeOpacity="0.9" />
            </svg>

            <div
              className="relative z-10 w-[68%] sm:w-[66%] lg:w-[86%] aspect-[4/6] will-change-transform"
              style={{ transform: `translate3d(${mouse.x}px, ${mouse.y * 0.6}px, 0)` }}
            >
              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-b from-white to-frost-deep shadow-[0_30px_80px_-20px_rgba(22,25,30,0.28)]" />
              <img
                src={IMG.heroTooth}
                alt="Premium dental implant – glossy ceramic crown on titanium screw"
                className="relative z-10 h-full w-full object-contain p-3 sm:p-4 drop-shadow-[0_18px_30px_rgba(0,0,0,0.12)]"
                style={{ filter: "saturate(0.9) contrast(1.02)" }}
              />

              {/* hotspots */}
              {hotspots.map(h=> {
                const isActive = active===h.id;
                return (
                  <div key={h.id} className="absolute z-20" style={{ top:h.top, left:h.left}}>
                    <button type="button"
                      onMouseEnter={()=>setActive(h.id)} onMouseLeave={()=>setActive(null)}
                      onClick={()=>setActive(isActive?null:h.id)}
                      className="group flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 bg-white shadow-soft transition-all hover:scale-110"
                      aria-label={h.t}
                    >
                      <span className="h-2 w-2 rounded-full bg-slate-900 group-[.active]:bg-black" />
                      <span className="pulse-dot absolute inset-0 rounded-full text-slate-300" />
                    </button>
                    <div className={`pointer-events-none absolute z-30 w-48 -translate-x-1/2 rounded-xl border border-slate-200 bg-white/95 p-3 text-left shadow-lift backdrop-blur transition-all duration-300 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 invisible"} left-1/2 ${h.id===3 ? "bottom-8" : "-top-2 -translate-y-full"}`}>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-900">{h.t}</p>
                      <p className="mt-1 text-[11px] leading-snug text-slate-500">{h.d}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right: fear-free + shade */}
          <Reveal delay={260} variant="from-right" className="order-3">
            <div className="mx-auto max-w-[340px] space-y-5 lg:mx-0 lg:ml-auto">
              <div className="text-left lg:text-left">
                <p className="text-[11px] font-bold tracking-[0.2em] text-slate-900 uppercase">Fear-Free by Design</p>
                <p className="mt-1.5 text-[13px] leading-relaxed text-slate-500">Digital planning, sedation options and complete control. Pause anytime with a hand signal.</p>
              </div>
              <ShadeCustomizer />
              <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white/70 px-4 py-2.5 text-xs text-slate-600 shadow-soft">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-white">✓</span>
                Premium implant systems · digital planning
              </div>
            </div>
          </Reveal>
        </div>

        {/* bottom stats strip – no overlap */}
        <div ref={ref} className="relative z-10 mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          <StatPill target={1350} label="Cases Treated" start={inView} delay={0} />
          <StatPill target={15} label="Years Craft" start={inView} delay={80} />
          <StatPill target={49} label="Avg Rating" start={inView} delay={160} />
          <StatPill target={100} label="Durability" start={inView} delay={240} />
        </div>

        {/* scroll */}
        <div className="pointer-events-none mt-10 flex justify-center">
          <div className="flex flex-col items-center gap-2 opacity-60">
            <div className="h-10 w-[1px] bg-gradient-to-b from-slate-300 to-transparent" />
            <span className="font-mono text-[9px] tracking-[0.28em] text-slate-400 uppercase">Scroll</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceTiles({ onService }: { onService: (id:string)=>void }){
  return (
    <div className="relative z-20 -mt-2 lg:-mt-4">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal variant="scale-in">
          <div className="rounded-[22px] border border-white bg-white/90 p-3 shadow-soft backdrop-blur">
            <div className="no-scrollbar flex gap-2 overflow-x-auto sm:grid sm:grid-cols-4 lg:grid-cols-8 sm:overflow-visible">
              {SERVICES.map(s=>{
                const Icon = s.icon;
                return (
                  <button type="button" key={s.id} onClick={()=>onService(s.id)} className="group flex w-[86px] shrink-0 flex-col items-center gap-2 rounded-xl px-2 py-3 text-center hover:bg-frost sm:w-auto">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-frost text-slate-700 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-[10px] font-semibold leading-tight text-slate-700">{s.name}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  )
}

const TOUR = [
  { img: IMG.studioDark, cap: "Suite 01 — warm light, hidden machinery" },
  { img: IMG.reception, cap: "Reception — cedar, never clove" },
  { img: IMG.suite, cap: "The quiet chair, heated and reclined" },
  { img: IMG.officeA, cap: "Imaging room — low-dose 3D scanning" },
];

export function StudioTour({ open, onClose }: { open:boolean; onClose:()=>void }){
  const [i,setI]=useState(0);
  useEffect(()=>{
    if(!open) return;
    const onKey=(e:KeyboardEvent)=>{ if(e.key==="Escape") onClose(); if(e.key==="ArrowRight") setI(v=>(v+1)%TOUR.length); if(e.key==="ArrowLeft") setI(v=>(v-1+TOUR.length)%TOUR.length) };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow="hidden";
    const t=setInterval(()=>setI(v=>(v+1)%TOUR.length),4200);
    return ()=>{ window.removeEventListener("keydown", onKey); document.body.style.overflow=""; clearInterval(t) };
  },[open,onClose]);
  if(!open) return null;
  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-900/90 p-4 backdrop-blur-md" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="w-full max-w-4xl" onClick={e=>e.stopPropagation()}>
        <div className="relative overflow-hidden rounded-[22px] bg-black shadow-lift">
          <div className="aspect-[16/10] w-full">
            {TOUR.map((t,idx)=>(
              <img key={t.cap} src={t.img} alt={t.cap} className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${idx===i?"opacity-100":"opacity-0"}`} />
            ))}
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-16">
            <p className="font-display text-xl text-white sm:text-2xl">{TOUR[i]?.cap}</p>
            <div className="mt-4 flex gap-1.5">
              {TOUR.map((_,idx)=>(
                <button type="button" key={idx} onClick={()=>setI(idx)} className={`h-1 rounded-full transition-all ${idx===i?"w-10 bg-white":"w-5 bg-white/30"}`} />
              ))}
            </div>
          </div>
          <button type="button" onClick={()=>setI(v=>(v-1+TOUR.length)%TOUR.length)} className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30"><ChevronLeft className="h-5 w-5"/></button>
          <button type="button" onClick={()=>setI(v=>(v+1)%TOUR.length)} className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30"><ChevronRight className="h-5 w-5"/></button>
        </div>
        <button type="button" onClick={onClose} className="mx-auto mt-5 block rounded-full border border-white/20 px-6 py-2.5 text-sm font-semibold text-white hover:border-white">Close tour</button>
      </div>
    </div>
  )
}
