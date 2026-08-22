import { useEffect } from "react";
import { Spark, ArrowUpRight, SmileMark, Shield } from "../icons";

export function PortfolioHub({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex justify-end bg-pinedeep/80 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label="Developer Portfolio Hub"
      onClick={onClose}
    >
      {/* Drawer panel */}
      <div
        className="relative w-full max-w-lg h-full bg-shell-deep border-l border-sand/30 shadow-lift p-8 overflow-y-auto flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between border-b border-sand/40 pb-5">
            <div className="flex items-center gap-2.5">
              <SmileMark className="h-8 w-8 text-gold" />
              <div>
                <p className="font-display text-xl font-light text-ink">Deep Jashan 950</p>
                <p className="text-[9px] font-semibold tracking-[0.24em] text-gold uppercase">Portfolio Edition</p>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-sand hover:border-gold hover:bg-gold hover:text-shell transition-all duration-300"
              aria-label="Close panel"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Designer Statement */}
          <div className="mt-8 space-y-4">
            <span className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-gold uppercase">
              <Spark className="h-3 w-3" /> Designer & Developer Statement
            </span>
            <p className="font-display text-2xl font-light text-ink leading-snug">
              “This website reimagines clinical trust through high-end <em className="italic text-gold">luxury fashion</em> ergonomics.”
            </p>
            <p className="text-sm text-inksoft leading-relaxed">
              Created for the creative director who appreciates clean typography, premium animations, and zero clutter. Every layout here represents professional production-grade design.
            </p>
          </div>

          {/* Blueprint Specs */}
          <div className="mt-8 rounded-2xl bg-pine p-6 text-shell shadow-soft relative overflow-hidden">
            <Spark className="absolute -top-6 -right-6 h-24 w-24 text-shell/5" />
            <p className="text-[10px] font-bold tracking-[0.22em] text-gold uppercase">Technical Blueprint Specs</p>
            <ul className="mt-4 space-y-2.5 font-mono text-xs text-shell/80">
              <li className="flex justify-between border-b border-shell/10 pb-1.5">
                <span>UI Core:</span>
                <span className="text-gold">React 19 & Tailwind CSS v4</span>
              </li>
              <li className="flex justify-between border-b border-shell/10 pb-1.5">
                <span>Engine:</span>
                <span className="text-gold">Vite 7 Production Client</span>
              </li>
              <li className="flex justify-between border-b border-shell/10 pb-1.5">
                <span>Components:</span>
                <span className="text-gold">Clean Semantic Fragments</span>
              </li>
              <li className="flex justify-between">
                <span>Animations:</span>
                <span className="text-gold">GPU Accelerated Keyframes</span>
              </li>
            </ul>
          </div>

          {/* Professional Credentials */}
          <div className="mt-8 space-y-4">
            <span className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-gold uppercase">
              <Shield className="h-4.5 w-4.5 text-gold" /> Key Features Implemented
            </span>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="bg-shell rounded-xl p-4 border border-sand/40">
                <p className="text-xs font-bold text-ink">3D Interactive hotspots</p>
                <p className="mt-1 text-[11px] text-inksoft">Pulsing pins trigger precise specification drawers.</p>
              </div>
              <div className="bg-shell rounded-xl p-4 border border-sand/40">
                <p className="text-xs font-bold text-ink">Real-time shade slide</p>
                <p className="mt-1 text-[11px] text-inksoft">Adjust porcelain luminosity from A3 to celebrity bleach.</p>
              </div>
              <div className="bg-shell rounded-xl p-4 border border-sand/40">
                <p className="text-xs font-bold text-ink">Dual theme nav</p>
                <p className="mt-1 text-[11px] text-inksoft">Intelligent contrast transition upon scroll.</p>
              </div>
              <div className="bg-shell rounded-xl p-4 border border-sand/40">
                <p className="text-xs font-bold text-ink">Complimentary audit</p>
                <p className="mt-1 text-[11px] text-inksoft">Completely compliant with modern single-page bundles.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="mt-12 border-t border-sand/40 pt-6">
          <div className="flex items-center justify-between text-xs text-inksoft mb-4">
            <span>Deep Jashan 950 Portfolio</span>
            <span className="font-mono text-gold">v2.1.0</span>
          </div>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="shine flex w-full items-center justify-center gap-2 rounded-full bg-pine py-4 text-sm font-bold text-shell shadow-soft hover:bg-pinedeep transition-all"
          >
            Connect with Deep Jashan
            <ArrowUpRight className="h-4 w-4 text-gold" />
          </a>
        </div>
      </div>
    </div>
  );
}

export function PortfolioWatermark({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="fixed left-5 bottom-5 z-40 hidden items-center gap-2 rounded-full border border-sand/40 bg-shell/80 px-4 py-2 text-[10px] font-semibold tracking-[0.24em] text-gold uppercase shadow-soft hover:bg-shell hover:border-gold transition-all duration-300 md:flex"
    >
      <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-gold text-gold" />
      Deep Jashan 950
    </button>
  );
}
