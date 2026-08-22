import { useEffect, useState } from "react";
import type { Route } from "../lib";
import { HOURS, STUDIO } from "../data";
import { Spark, SmileMark, Phone, Pin, Mail, Instagram, Facebook, Chat, ArrowUpRight } from "../icons";

const LINKS: { label: string; route: Route }[] = [
  { label: "Home", route: "home" },
  { label: "About", route: "about" },
  { label: "Services", route: "services" },
  { label: "Results", route: "results" },
  { label: "Contact", route: "contact" },
];

export function Nav({ route, nav }: { route: Route; nav: (r: Route) => void; darkHero?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => setOpen(false), [route]);

  const go = (r: Route) => { setOpen(false); nav(r); };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          scrolled ? "border-slate-200/70 bg-white/85 shadow-[0_8px_30px_-20px_rgba(0,0,0,0.2)] backdrop-blur-xl" : "border-transparent bg-frost/60 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex max-w-[1320px] items-center justify-between px-5 py-3.5 sm:px-8">
          <button type="button" onClick={() => go("home")} className="group flex items-center gap-2.5" aria-label="Ivory home">
            <SmileMark className="h-9 w-9 text-slate-900 transition-transform duration-500 group-hover:rotate-[360deg]" />
            <span className="text-left leading-none">
              <span className="font-display text-[1.35rem] font-semibold tracking-tight text-slate-900">Ivory</span>
              <span className="mt-0.5 block text-[9px] font-semibold tracking-[0.34em] text-slate-500 uppercase">Dental Studio</span>
            </span>
          </button>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {LINKS.map((l) => (
              <button
                key={l.route}
                type="button"
                onClick={() => go(l.route)}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  route === l.route ? "text-slate-900" : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {l.label}
                <span className={`absolute inset-x-4 -bottom-0.5 h-[2px] rounded-full bg-slate-900 transition-transform ${route===l.route ? "scale-x-100":"scale-x-0"}`} />
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href={STUDIO.phoneHref} className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-slate-900 hover:text-slate-900 xl:flex">
              <Phone className="h-4 w-4" />{STUDIO.phone}
            </a>
            <button type="button" onClick={() => go("contact")} className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-bold text-white hover:bg-black">
              Book consultation <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          <button
            type="button"
            onClick={()=>setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-site-menu"
            className="flex h-10 w-10 flex-col items-center justify-center gap-[6px] rounded-full border border-slate-200 bg-white lg:hidden"
          >
            <span className={`h-[2px] w-5 bg-slate-900 transition-all ${open ? "translate-y-[8px] rotate-45":""}`} />
            <span className={`h-[2px] w-5 bg-slate-900 transition-all ${open ? "opacity-0":""}`} />
            <span className={`h-[2px] w-5 bg-slate-900 transition-all ${open ? "-translate-y-[8px] -rotate-45":""}`} />
          </button>
        </div>
      </header>

      {/* mobile */}
      <div id="mobile-site-menu" className={`fixed inset-0 z-40 flex flex-col bg-slate-900 transition-all duration-500 lg:hidden ${open ? "opacity-100":"pointer-events-none opacity-0"}`}>
        <nav className="mt-24 flex flex-col px-8">
          {LINKS.map((l,i)=>(
            <button type="button" key={l.route} onClick={()=>go(l.route)} style={{transitionDelay:`${100+i*60}ms`}} className={`flex justify-between border-b border-white/10 py-4 text-left transition-all ${open?"translate-x-0 opacity-100":"-translate-x-6 opacity-0"}`}>
              <span className={`font-display text-4xl ${route===l.route?"text-white italic":"text-white/80"}`}>{l.label}</span>
              <span className="text-[10px] tracking-[0.3em] text-white/40">0{i+1}</span>
            </button>
          ))}
        </nav>
        <div className={`mt-auto space-y-4 p-8 transition-all delay-300 ${open?"opacity-100":"opacity-0"}`}>
          <a href={STUDIO.phoneHref} className="flex gap-3 text-white"><Phone className="h-4 w-4" />{STUDIO.phone}</a>
          <p className="flex gap-3 text-sm text-white/60"><Pin className="mt-0.5 h-4 w-4" />{STUDIO.address}</p>
          <button type="button" onClick={()=>go("contact")} className="w-full rounded-full bg-white py-4 font-bold text-slate-900">Book consultation</button>
        </div>
      </div>
    </>
  );
}

export function FloatingBook({ route, nav }: { route: Route; nav: (r: Route)=>void }){
  const [show,setShow]=useState(false);
  useEffect(()=>{ const f=()=>setShow(window.scrollY>500); f(); window.addEventListener("scroll",f,{passive:true}); return()=>window.removeEventListener("scroll",f); },[]);
  if(route==="contact") return null;
  return (
    <button type="button" onClick={()=>nav("contact")} className={`fixed bottom-5 right-5 z-50 flex items-center gap-2.5 rounded-full bg-slate-900 px-5 py-3 text-sm font-bold text-white shadow-lift transition-all hover:bg-black sm:bottom-6 sm:right-6 ${show ? "translate-y-0 opacity-100":"pointer-events-none translate-y-10 opacity-0"}`}>
      <span className="h-2 w-2 rounded-full bg-white" /> Book
    </button>
  )
}

export function Footer({ nav }: { nav:(r:Route)=>void }){
  return (
    <footer className="relative overflow-hidden bg-slate-900 text-white">
      <div className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-2.5"><SmileMark className="h-10 w-10 text-white" /><span className="leading-none"><span className="font-display text-2xl font-semibold">Ivory</span><span className="mt-0.5 block text-[9px] tracking-[0.34em] text-white/50 uppercase">Dental Studio</span></span></div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">Fear-free dental house in Marylebone — cosmetic craft, family care and calm, since {STUDIO.established}. Built as portfolio concept by Deep Jashan 950.</p>
            <div className="mt-6 flex gap-2">
              {[Instagram,Facebook,Chat].map((I,i)=>(
                <a key={i} href="#/" aria-label="social" onClick={e=>e.preventDefault()} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 hover:border-white hover:text-white"><I className="h-4 w-4" /></a>
              ))}
            </div>
          </div>
          <div><h4 className="text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase">Explore</h4><ul className="mt-4 space-y-2.5 text-sm text-white/60">{LINKS.map(l=><li key={l.route}><button type="button" onClick={()=>nav(l.route)} className="hover:text-white">{l.label}</button></li>)}<li><button type="button" onClick={()=>nav("results")} className="hover:text-white">Smile archive</button></li></ul></div>
          <div><h4 className="text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase">Care</h4><ul className="mt-4 space-y-2.5 text-sm text-white/60">{["Smile design","Whitening","Veneers","Invisalign","Implants","Emergencies"].map(s=><li key={s}><button type="button" onClick={()=>nav("services")} className="hover:text-white">{s}</button></li>)}</ul></div>
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase">Visit</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li className="flex gap-2.5"><Pin className="mt-0.5 h-4 w-4" />{STUDIO.address}</li>
              <li className="flex gap-2.5"><Phone className="mt-0.5 h-4 w-4" /><a href={STUDIO.phoneHref} className="hover:text-white">{STUDIO.phone}</a></li>
              <li className="flex gap-2.5"><Mail className="mt-0.5 h-4 w-4" /><a href={`mailto:${STUDIO.email}`} className="hover:text-white">{STUDIO.email}</a></li>
            </ul>
            <div className="mt-5 rounded-xl border border-white/10 p-3 text-xs text-white/40">
              {HOURS.slice(0,6).map(h=><p key={h.day} className="flex justify-between py-0.5"><span>{h.day.slice(0,3)}</span><span>{h.time}</span></p>)}
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row">
          <p>© 2026 {STUDIO.name}. Concept render – all patients illustrative.</p>
          <p className="flex items-center gap-2">Portfolio by <span className="font-bold text-white">Deep Jashan 950</span><Spark className="h-3 w-3" /></p>
        </div>
      </div>
    </footer>
  )
}
