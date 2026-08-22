type P = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const SmileMark = ({ className }: P) => (
  <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
    <circle cx="16" cy="16" r="14.5" {...base} />
    <path d="M8.5 14c1.7 3.8 4.3 5.7 7.5 5.7s5.8-1.9 7.5-5.7" {...base} strokeWidth={2} />
  </svg>
);

export const Spark = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="M12 2.5l2 6.3 6.5 2-6.5 2-2 6.4-2-6.4-6.5-2 6.5-2 2-6.3z" fill="currentColor" stroke="none" />
  </svg>
);

export const Tooth = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      d="M7.2 3.5c-2.3 0-3.7 2-3.7 4.3 0 3.7 1.7 5.4 2.3 8.5.3 1.7.8 4.2 2.4 4.2 1.9 0 1.3-3.9 3.8-3.9s1.9 3.9 3.8 3.9c1.6 0 2.1-2.5 2.4-4.2.6-3.1 2.3-4.8 2.3-8.5 0-2.3-1.4-4.3-3.7-4.3-2 0-2.7 1.3-4.8 1.3s-2.8-1.3-4.8-1.3z"
      {...base}
    />
  </svg>
);

export const ToothShine = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      d="M7.6 5.5c-2 0-3.2 1.7-3.2 3.7 0 3.2 1.5 4.7 2 7.4.3 1.4.7 3.9 2.1 3.9 1.6 0 1.1-3.4 3.5-3.4s1.9 3.4 3.5 3.4c1.4 0 1.8-2.5 2.1-3.9.3-1.7 1.1-2.9 1.6-4.4"
      {...base}
    />
    <path d="M15.5 2.5l1 2.6 2.6 1-2.6 1-1 2.6-1-2.6-2.6-1 2.6-1 1-2.6z" fill="currentColor" stroke="none" />
    <path d="M13.5 6.7c-.9.5-1.6.8-3 .8" {...base} />
  </svg>
);

export const Aligner = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="M4 15.5a8 8 0 0116 0" {...base} />
    <path d="M7.2 15.5a4.8 4.8 0 019.6 0" {...base} />
    <path d="M9.4 12.2v3.3M12 11.4v4.1M14.6 12.2v3.3" {...base} />
    <path d="M4 18.5h16" {...base} />
  </svg>
);

export const Implant = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="M8.6 3h6.8l-.8 4.5H9.4L8.6 3z" {...base} />
    <path d="M10 7.5h4v1.6a2 2 0 01-4 0V7.5z" {...base} />
    <path d="M10.2 12.4h3.6M10.6 15.4h2.8M11 18.4h2M11.4 21.2h1.2" {...base} />
  </svg>
);

export const RootCanal = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      d="M7.2 3.5c-2.3 0-3.7 2-3.7 4.3 0 3.7 1.7 5.4 2.3 8.5.3 1.7.8 4.2 2.4 4.2 1.9 0 1.3-3.9 3.8-3.9s1.9 3.9 3.8 3.9c1.6 0 2.1-2.5 2.4-4.2.6-3.1 2.3-4.8 2.3-8.5 0-2.3-1.4-4.3-3.7-4.3-2 0-2.7 1.3-4.8 1.3s-2.8-1.3-4.8-1.3z"
      {...base}
    />
    <path d="M12 7.5v5.5M12 13l-1.4 3.2M12 13l1.4 3.2" {...base} />
  </svg>
);

export const Shield = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="M12 3l7 2.8V12c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V5.8L12 3z" {...base} />
    <path d="M8.8 12l2.2 2.3 4.2-4.6" {...base} />
  </svg>
);

export const Scan = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="M4 8V5.5A1.5 1.5 0 015.5 4H8M16 4h2.5A1.5 1.5 0 0120 5.5V8M20 16v2.5a1.5 1.5 0 01-1.5 1.5H16M8 20H5.5A1.5 1.5 0 014 18.5V16" {...base} />
    <path d="M8 11.2c1.1 1.7 2.5 2.6 4 2.6s2.9-.9 4-2.6" {...base} />
    <path d="M7 15h10" {...base} strokeDasharray="2.5 2.5" />
  </svg>
);

export const Leaf = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="M19.5 4.5C10 4.5 5 9.6 5 16.2c0 1.6.4 2.8.4 2.8s1.3.5 3.1.5c6.6 0 11-5 11-15z" {...base} />
    <path d="M5.5 19.5C8.5 14.5 12 11 16 8.5" {...base} />
  </svg>
);

export const Gem = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="M7.5 4h9l4 5.2L12 20.5 3.5 9.2 7.5 4z" {...base} />
    <path d="M3.5 9.2h17M12 20.5L8.6 9.2 12 4l3.4 5.2L12 20.5z" {...base} />
  </svg>
);

export const Headphones = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="M4.5 14.5a7.5 7.5 0 0115 0" {...base} />
    <path d="M4.5 14.5h3v4.6H6a1.5 1.5 0 01-1.5-1.5v-3.1zM16.5 14.5h3v3.1a1.5 1.5 0 01-1.5 1.5h-1.5v-4.6z" {...base} />
  </svg>
);

export const HandStop = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="M8.2 12.5V6.7a1.4 1.4 0 012.8 0v4.5" {...base} />
    <path d="M11 10.5V4.9a1.4 1.4 0 012.8 0v5.6" {...base} />
    <path d="M13.8 10.5V6a1.4 1.4 0 012.8 0v7.2c0 4.3-2.5 7.3-6.1 7.3-2.8 0-4.3-1.4-5.6-4L3.4 14a1.3 1.3 0 012.2-1.4l1.6 2" {...base} />
  </svg>
);

export const Droplet = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="M12 3.5s5.8 6.4 5.8 10.5a5.8 5.8 0 11-11.6 0C6.2 9.9 12 3.5 12 3.5z" {...base} />
    <path d="M9.2 14.2a2.9 2.9 0 002.4 3" {...base} />
  </svg>
);

export const Screen = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <rect x="4" y="4.5" width="16" height="11.5" rx="1.6" {...base} />
    <path d="M9.5 20h5M12 16v4" {...base} />
    <path d="M10 8.2l3.4 2-3.4 2v-4z" fill="currentColor" stroke="none" />
  </svg>
);

export const Heart = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="M12 20.2S4.8 15.7 3.3 11.2a4.9 4.9 0 018.7-4 4.9 4.9 0 018.7 4C19.2 15.7 12 20.2 12 20.2z" {...base} />
  </svg>
);

export const Blanket = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="M4 18.5V9a2.5 2.5 0 015 0v9.5" {...base} />
    <path d="M4 18.5h16M9 13.5h11v5" {...base} />
    <path d="M14 16h3" {...base} strokeDasharray="1.5 2" />
  </svg>
);

export const Calendar = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <rect x="4" y="5.5" width="16" height="14.5" rx="2" {...base} />
    <path d="M4 10h16M8.5 3.5v3.5M15.5 3.5v3.5" {...base} />
    <path d="M8.5 14l2 2 4-4" {...base} />
  </svg>
);

export const Clock = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="8.5" {...base} />
    <path d="M12 7.5V12l3.2 2" {...base} />
  </svg>
);

export const Phone = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="M5.5 4h3.6l1.5 4.4-2.1 1.6a12.6 12.6 0 005.5 5.5l1.6-2.1L20 14.9v3.6a2 2 0 01-2.2 2A16.9 16.9 0 013.5 6.2 2 2 0 015.5 4z" {...base} />
  </svg>
);

export const Pin = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="M12 21.5s-6.8-5.7-6.8-10.4a6.8 6.8 0 1113.6 0c0 4.7-6.8 10.4-6.8 10.4z" {...base} />
    <circle cx="12" cy="10.8" r="2.3" {...base} />
  </svg>
);

export const Mail = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <rect x="3.5" y="5.5" width="17" height="13" rx="2" {...base} />
    <path d="M4.5 7.5l7.5 5.5 7.5-5.5" {...base} />
  </svg>
);

export const ArrowUpRight = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="M7 17L17 7M8.5 7H17v8.5" {...base} />
  </svg>
);

export const ArrowRight = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="M4 12h15.5M13.5 6l6 6-6 6" {...base} />
  </svg>
);

export const ChevronLeft = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="M14.5 5.5L8 12l6.5 6.5" {...base} />
  </svg>
);

export const ChevronRight = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="M9.5 5.5L16 12l-6.5 6.5" {...base} />
  </svg>
);

export const Plus = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="M12 5v14M5 12h14" {...base} />
  </svg>
);

export const Check = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="M5 12.5l4.5 4.5L19 7.5" {...base} />
  </svg>
);

export const Star = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="M12 3l2.7 5.6 6.1.8-4.5 4.3 1.1 6-5.4-2.9-5.4 2.9 1.1-6L3.2 9.4l6.1-.8L12 3z" fill="currentColor" stroke="none" />
  </svg>
);

export const Instagram = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <rect x="4" y="4" width="16" height="16" rx="4.5" {...base} />
    <circle cx="12" cy="12" r="3.6" {...base} />
    <circle cx="16.8" cy="7.2" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

export const Facebook = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="M13.5 21v-7h2.6l.5-3.2h-3.1V8.6c0-1 .4-1.6 1.7-1.6h1.5V4.2c-.6-.1-1.7-.2-2.7-.2-2.7 0-4.4 1.5-4.4 4.2v2.6H7v3.2h2.6v7h3.9z" fill="currentColor" stroke="none" />
  </svg>
);

export const Chat = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="M12 4a8 8 0 00-6.9 12L4 20.5l4.6-1.1A8 8 0 1012 4z" {...base} />
    <path d="M8.5 10.5h7M8.5 13.5h4.5" {...base} />
  </svg>
);

export const Quote = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="M9.5 6.5C6.5 8 5 10.2 5 13.4c0 2.4 1.4 4.1 3.5 4.1 1.8 0 3.1-1.3 3.1-3.1 0-1.7-1.2-2.9-2.9-2.9h-.5c.3-1.6 1.3-2.8 3-3.7l-1.7-1.3zM19 6.5c-3 1.5-4.5 3.7-4.5 6.9 0 2.4 1.4 4.1 3.5 4.1 1.8 0 3.1-1.3 3.1-3.1 0-1.7-1.2-2.9-2.9-2.9H17.7c.3-1.6 1.3-2.8 3-3.7L19 6.5z" fill="currentColor" stroke="none" />
  </svg>
);
