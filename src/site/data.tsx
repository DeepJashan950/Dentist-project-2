import type { ComponentType } from "react";
import {
  ToothShine,
  Gem,
  Aligner,
  Implant,
  RootCanal,
  Shield,
  Tooth,
  Scan,
  Leaf,
  Heart,
  Headphones,
  Blanket,
  HandStop,
  Droplet,
  Screen,
} from "./icons";

export type IconType = ComponentType<{ className?: string }>;

/* ------------------------------------------------------------------ */
/* imagery (Pexels)                                                   */
/* ------------------------------------------------------------------ */
export const IMG = {
  heroTooth: "/images/implant-tech.png",
  studioDark: "/images/studio-dark.jpg",
  smileMacro: "/images/smile-macro.jpg",
  heroSmile:
    "https://images.pexels.com/photos/31863054/pexels-photo-31863054.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  smileA:
    "https://images.pexels.com/photos/18392646/pexels-photo-18392646.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  smileB:
    "https://images.pexels.com/photos/11928561/pexels-photo-11928561.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  smileC:
    "https://images.pexels.com/photos/16002540/pexels-photo-16002540.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  smileD:
    "https://images.pexels.com/photos/8727447/pexels-photo-8727447.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  smileE:
    "https://images.pexels.com/photos/3974017/pexels-photo-3974017.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  reception:
    "https://images.pexels.com/photos/4562895/pexels-photo-4562895.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  suite:
    "https://images.pexels.com/photos/4269265/pexels-photo-4269265.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  officeA:
    "https://images.pexels.com/photos/4269268/pexels-photo-4269268.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  officeB:
    "https://images.pexels.com/photos/4269277/pexels-photo-4269277.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  clinicVert:
    "https://images.pexels.com/photos/4269361/pexels-photo-4269361.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  equipA:
    "https://images.pexels.com/photos/6629415/pexels-photo-6629415.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  equipB:
    "https://images.pexels.com/photos/6502543/pexels-photo-6502543.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  treatA:
    "https://images.pexels.com/photos/4269501/pexels-photo-4269501.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  treatB:
    "https://images.pexels.com/photos/19976601/pexels-photo-19976601.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  treatC:
    "https://images.pexels.com/photos/6627353/pexels-photo-6627353.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  treatD:
    "https://images.pexels.com/photos/3881468/pexels-photo-3881468.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  leadDentist:
    "https://images.pexels.com/photos/17829429/pexels-photo-17829429.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  ortho:
    "https://images.pexels.com/photos/32160037/pexels-photo-32160037.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  restorative:
    "https://images.pexels.com/photos/38618416/pexels-photo-38618416.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  coordinator:
    "https://images.pexels.com/photos/38618419/pexels-photo-38618419.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
};

/* ------------------------------------------------------------------ */
/* studio facts                                                       */
/* ------------------------------------------------------------------ */
export const STUDIO = {
  name: "Ivory Dental Studio",
  address: "18 Linden Row, Marylebone, London W1U 4QF",
  phone: "+44 20 7946 0821",
  phoneHref: "tel:+442079460821",
  emergencyPhone: "+44 20 7946 0899",
  emergencyHref: "tel:+442079460899",
  email: "hello@ivorystudio.co.uk",
  established: 2011,
};

export const HOURS = [
  { day: "Monday", time: "08:00 – 19:00" },
  { day: "Tuesday", time: "08:00 – 19:00" },
  { day: "Wednesday", time: "08:00 – 19:00" },
  { day: "Thursday", time: "08:00 – 19:00" },
  { day: "Friday", time: "08:00 – 19:00" },
  { day: "Saturday", time: "09:00 – 15:00" },
  { day: "Sunday", time: "Emergency line only" },
];

export const MARQUEE_ITEMS = [
  "Fear-free by design",
  "Digital smile scanning",
  "Same-day emergencies",
  "Sedation & comfort menu",
  "Transparent pricing",
  "Invisalign Diamond provider",
];

/* ------------------------------------------------------------------ */
/* services                                                            */
/* ------------------------------------------------------------------ */
export type Service = {
  id: string;
  no: string;
  name: string;
  tag: string;
  desc: string;
  benefits: string[];
  ideal: string;
  duration: string;
  price: string;
  icon: IconType;
  cat: string;
};

export const SERVICES: Service[] = [
  {
    id: "smile-design",
    no: "01",
    name: "Smile Design",
    tag: "Digital preview of your future smile",
    desc: "A full digital rehearsal of your new smile. We scan, photograph and simulate your results on screen before anything ever touches a tooth — so you approve the destination before we begin the journey.",
    benefits: ["3D digital smile simulation", "Trial smile you can 'wear' first", "Face-led, not tooth-led design", "Fixed quote before treatment"],
    ideal: "Anyone curious about veneers, whitening or reshaping — but unsure where to start.",
    duration: "1 consultation · 60 min",
    price: "from £49",
    icon: Scan,
    cat: "Cosmetic",
  },
  {
    id: "whitening",
    no: "02",
    name: "Teeth Whitening",
    tag: "Enlighten® guaranteed-shade system",
    desc: "The only whitening system that guarantees a B1 result. A gentle two-week home protocol finished with one in-studio visit — no sensitivity spikes, no 'piano key' patches.",
    benefits: ["Guaranteed B1 shade", "Near-zero sensitivity formula", "Custom-fitted trays you keep", "Top-up syringes included"],
    ideal: "Coffee lovers, ex-smokers, or anyone prepping for a wedding or big moment.",
    duration: "2 weeks · 1 visit",
    price: "from £395",
    icon: ToothShine,
    cat: "Cosmetic",
  },
  {
    id: "veneers",
    no: "03",
    name: "Porcelain Veneers",
    tag: "Hand-layered ceramic, milled in-house",
    desc: "Ultra-thin ceramic shells crafted with our in-house ceramist. Each veneer is layered by hand to mimic natural translucency — close-up, they read as enamel, not dentistry.",
    benefits: ["In-house master ceramist", "Minimal or zero-prep options", "Natural translucency layering", "10-year craftsmanship guarantee"],
    ideal: "Chipped, worn, gapped or discoloured teeth that whitening can't resolve.",
    duration: "2–3 visits · 2 weeks",
    price: "from £780 / tooth",
    icon: Gem,
    cat: "Cosmetic",
  },
  {
    id: "invisalign",
    no: "04",
    name: "Invisalign & Clear Aligners",
    tag: "Diamond provider · 1,400+ cases",
    desc: "Discreet alignment engineered around your life. Weekly remote monitoring means most patients see us every ten weeks, not every four — and results are previewed in 3D from day one.",
    benefits: ["Diamond-provider pricing", "Remote monitoring app", "Results previewed before you start", "Free retainers on completion"],
    ideal: "Teens and adults with crowding, spacing or relapse after old braces.",
    duration: "6–18 months typical",
    price: "from £2,400",
    icon: Aligner,
    cat: "Orthodontics",
  },
  {
    id: "implants",
    no: "05",
    name: "Dental Implants",
    tag: "Guided surgery, Swiss-grade titanium",
    desc: "The closest science has come to a third set of teeth. 3D-guided placement for precision to the tenth of a millimetre, with same-day provisional crowns in suitable cases.",
    benefits: ["3D-guided placement", "Same-day provisional crown", "Lifetime implant guarantee", "Sedation available for surgery"],
    ideal: "Missing or failing teeth where a bridge or denture feels like a compromise.",
    duration: "2–4 months end to end",
    price: "from £2,150",
    icon: Implant,
    cat: "Restorative",
  },
  {
    id: "root-canal",
    no: "06",
    name: "Root Canal Therapy",
    tag: "Microscope-assisted, single visit",
    desc: "The treatment with the worst reputation — performed here under an operating microscope, with rubber-dam isolation and a sedation option. Most patients read a book through it.",
    benefits: ["Operating-microscope precision", "96% five-year success rate", "Single-visit completion", "Pain-free protocol, guaranteed"],
    ideal: "Deep decay, trauma or lingering toothache that keeps you up at night.",
    duration: "1 visit · 90 min",
    price: "from £595",
    icon: RootCanal,
    cat: "Restorative",
  },
  {
    id: "preventive",
    no: "07",
    name: "Preventive & Hygiene",
    tag: "Airflow® polishing, gentle by default",
    desc: "Hygiene that feels like a facial, not a scrape. Warm-water Airflow® polishing removes staining and biofilm without the shudder of old-school scaling — ideal for nervous patients.",
    benefits: ["Airflow® comfort polishing", "Personalised prevention plan", "Gum-health photography", "Kids' first visits done playfully"],
    ideal: "Everyone — especially anyone who has avoided the hygienist for years.",
    duration: "45–60 min",
    price: "from £140",
    icon: Tooth,
    cat: "General",
  },
  {
    id: "emergency",
    no: "08",
    name: "Emergency Dentistry",
    tag: "Same-day relief, seven days",
    desc: "In pain at 8am, seen by 11am. A daily emergency slot is reserved in every clinician's diary, and our out-of-hours line is answered by a dentist — never a machine.",
    benefits: ["Same-day appointments", "Dentist-answered emergency line", "Pain relief on day one", "Members jump the queue"],
    ideal: "Broken teeth, lost crowns, swelling, or pain that won't wait for Monday.",
    duration: "Same day · 30 min",
    price: "from £95 triage",
    icon: Shield,
    cat: "General",
  },
];

/* ------------------------------------------------------------------ */
/* differentiators / journey / comfort                                 */
/* ------------------------------------------------------------------ */
export const DIFFERENCES: { no: string; title: string; copy: string; icon: IconType }[] = [
  {
    no: "01",
    title: "Pain-aware by protocol",
    copy: "Warm anaesthetic, ultra-slow delivery and a hand-signal you can raise at any moment. Comfort isn't a favour here — it's written into the clinical checklist.",
    icon: Heart,
  },
  {
    no: "02",
    title: "See it before we do it",
    copy: "Every cosmetic plan is simulated on your own digital smile scan. You approve the result on screen weeks before any treatment begins.",
    icon: Scan,
  },
  {
    no: "03",
    title: "A studio, not a clinic",
    copy: "Soft lighting, private suites, warm blankets and a coffee menu. The waiting room smells like a hotel lobby — because first impressions start at the door.",
    icon: Leaf,
  },
  {
    no: "04",
    title: "Pricing with no plot twists",
    copy: "A written, itemised plan before anything begins. The number you sign is the number you pay — and 0% finance spreads anything over £500.",
    icon: Gem,
  },
  {
    no: "05",
    title: "One roof, every skill",
    copy: "Cosmetic, orthodontic, surgical and hygiene teams under one roof with one shared record. No referrals across town, no repeating your story.",
    icon: Shield,
  },
];

export const JOURNEY: { step: string; title: string; copy: string; meta: string }[] = [
  {
    step: "01",
    title: "The conversation",
    copy: "A relaxed 20-minute consultation. We listen first: your worries, your goals, your history. No drill sounds, no judgement.",
    meta: "20 min · free for new patients",
  },
  {
    step: "02",
    title: "Scan & diagnose",
    copy: "A 3D intraoral scan and low-dose imaging build a complete digital picture of your mouth — impression-free and gag-reflex-free.",
    meta: "Same visit · fully digital",
  },
  {
    step: "03",
    title: "Your plan, priced",
    copy: "Options presented in plain English with photographs and simulations. Written pricing, timelines and 0% finance options included.",
    meta: "Take it home · no pressure",
  },
  {
    step: "04",
    title: "The confident smile",
    copy: "Treatment delivered gently, on schedule, with remote check-ins between visits. You leave with a care plan — and a smile you'll actually use.",
    meta: "Aftercare included",
  },
];

export const COMFORT: { title: string; copy: string; icon: IconType }[] = [
  { title: "Noise-cancelling headphones", copy: "Your playlist, not the drill. Studio-quality headphones on every chair.", icon: Headphones },
  { title: "The stop-signal hand", copy: "Raise a hand and everything pauses. Immediately, no questions asked.", icon: HandStop },
  { title: "Oral sedation option", copy: "A prescription tablet that turns treatment into a half-remembered nap.", icon: Droplet },
  { title: "Warm blankets & heated chairs", copy: "Because nobody relaxes while shivering in a paper gown.", icon: Blanket },
  { title: "Ceiling cinema", copy: "Nature films or your own Netflix, projected where you'd otherwise see a lamp.", icon: Screen },
  { title: "The no-judgement policy", copy: "Been away ten years? Welcome back. We fix forward, never lecture backward.", icon: Heart },
];

/* ------------------------------------------------------------------ */
/* testimonials                                                        */
/* ------------------------------------------------------------------ */
export const TESTIMONIALS: { quote: string; fear: string; result: string; name: string; treatment: string }[] = [
  {
    quote: "I hadn't seen a dentist in eleven years — I was genuinely ashamed. Nobody lectured me. They just made a plan, and six months later I cried when I saw the photos.",
    fear: "Avoided dentists for 11 years",
    result: "Full smile rehabilitation",
    name: "Priya M.",
    treatment: "Veneers & hygiene",
  },
  {
    quote: "I booked the root canal fully expecting the worst day of my life. I finished the book I brought, and asked if they'd started yet. They had. It was done.",
    fear: "Needle phobia, sleepless with pain",
    result: "Tooth saved, single visit",
    name: "Daniel O.",
    treatment: "Microscope root canal",
  },
  {
    quote: "The simulation showed me my finished smile before we began. When the veneers went in, they matched the screen exactly. It felt like cheating.",
    fear: "Afraid of 'fake' looking results",
    result: "8 veneers, natural finish",
    name: "Sofia R.",
    treatment: "Smile design + veneers",
  },
  {
    quote: "My daughter used to cry in waiting rooms. Here they let her scan my teeth first as a game. She now asks when she can go back — I don't know who this child is.",
    fear: "Anxious 7-year-old patient",
    result: "Fear-free first check-ups",
    name: "Amara & Leila K.",
    treatment: "Children's preventive care",
  },
  {
    quote: "Chipped my front tooth on a Friday night. Called at 8:02, sat in the chair by 10:30, bonded and polished by lunch. The emergency line is answered by an actual dentist.",
    fear: "Weekend trauma, panic call",
    result: "Same-day bonding",
    name: "James T.",
    treatment: "Emergency care",
  },
];

/* ------------------------------------------------------------------ */
/* plans                                                               */
/* ------------------------------------------------------------------ */
export const PLANS = [
  {
    name: "Ivory Care",
    price: "19",
    tagline: "The essentials, handled",
    features: [
      "Two hygiene visits per year",
      "Annual exam & low-dose X-rays",
      "10% off all treatments",
      "Priority emergency slots",
      "Fluoride & fissure care for kids",
    ],
    featured: false,
  },
  {
    name: "Ivory Plus",
    price: "34",
    tagline: "For smiles in active training",
    features: [
      "Everything in Ivory Care",
      "Annual whitening top-up",
      "20% off cosmetic treatments",
      "Same-day emergency guarantee",
      "Retainer replacement plan",
      "One guest hygiene visit per year",
    ],
    featured: true,
  },
];

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */
export const FAQS: { q: string; a: string }[] = [
  {
    q: "Does anything actually hurt?",
    a: "Our clinical protocol is built around pain-awareness: warm, slow-delivered anaesthetic, needle-free options where possible, and a sedation menu for bigger procedures. If you feel more than pressure at any point, the hand-signal pauses everything instantly. Most patients describe our treatment as 'surprisingly boring' — we take that as the highest compliment.",
  },
  {
    q: "Do you work with my insurance?",
    a: "Yes. We're registered with most major UK insurers and international providers, and we prepare claim-ready documentation on the day of treatment. Where insurance won't cover a cosmetic procedure, 0% finance over 6–24 months is available on anything above £500.",
  },
  {
    q: "What happens at a first visit?",
    a: "Twenty unhurried minutes: a conversation about your history and goals, a gentle look, a 3D scan if needed, and honest advice — including 'nothing needs doing yet' when that's the truth. New patient consultations are complimentary.",
  },
  {
    q: "Is this an emergency service?",
    a: "Every clinician reserves daily emergency capacity, so same-day care is the norm rather than the exception. Out of hours, our line is answered by a duty dentist who can triage by phone and open the studio if needed.",
  },
  {
    q: "How transparent is pricing, really?",
    a: "You receive a written, itemised plan before any treatment begins — clinician time, lab costs, materials, aftercare. The figure you sign is the figure you pay. If a plan changes mid-treatment, we re-quote before continuing.",
  },
  {
    q: "I haven't been in years and I'm embarrassed. Is that a problem?",
    a: "Roughly one in three of our patients arrives after a long absence — we keep the statistic because it normalises it. Your first visit is judgement-free by policy; we only ever fix forward.",
  },
  {
    q: "Do you treat children?",
    a: "Happily. Kids' first visits are play-led — they 'treat' a parent with our scanner before anyone looks at their own teeth. We build the habit of calm before the habit of check-ups.",
  },
];

/* ------------------------------------------------------------------ */
/* results / cases                                                     */
/* ------------------------------------------------------------------ */
export type SmileCase = {
  id: string;
  img: string;
  title: string;
  treatment: string;
  sessions: string;
  cat: "Whitening" | "Veneers" | "Alignment" | "Bonding" | "Makeover";
  note: string;
};

export const CASES: SmileCase[] = [
  {
    id: "c1",
    img: IMG.smileA,
    title: "The coffee-drinker's reset",
    treatment: "Enlighten® guaranteed whitening",
    sessions: "2 weeks · 1 visit",
    cat: "Whitening",
    note: "Guaranteed B1 shade reached with zero reported sensitivity.",
  },
  {
    id: "c2",
    img: IMG.smileC,
    title: "Eight veneers, zero 'chiclets'",
    treatment: "Hand-layered porcelain veneers",
    sessions: "3 visits · 3 weeks",
    cat: "Veneers",
    note: "Designed from facial proportions, not a shade guide alone.",
  },
  {
    id: "c3",
    img: IMG.smileB,
    title: "Fourteen quiet months",
    treatment: "Invisalign with remote monitoring",
    sessions: "14 months · 5 visits",
    cat: "Alignment",
    note: "Crowding resolved with just five in-studio appointments.",
  },
  {
    id: "c4",
    img: IMG.smileD,
    title: "The same-day front tooth",
    treatment: "Composite edge bonding",
    sessions: "1 visit · 90 minutes",
    cat: "Bonding",
    note: "Chipped incisor rebuilt freehand, polished to enamel shine.",
  },
  {
    id: "c5",
    img: IMG.smileE,
    title: "The full rehearsal",
    treatment: "Smile design + veneers + whitening",
    sessions: "6 visits · 8 weeks",
    cat: "Makeover",
    note: "Digitally simulated, approved on screen, delivered to match.",
  },
  {
    id: "c6",
    img: IMG.heroSmile,
    title: "Soft light, softer approach",
    treatment: "Airflow® hygiene + whitening top-up",
    sessions: "2 visits · 1 month",
    cat: "Whitening",
    note: "Maintenance case keeping a five-year-old result bright.",
  },
];

/* 'Before' treatment — a subtle stain filter over the same photograph */
export const BEFORE_FILTER = "grayscale(0.12) sepia(0.18) saturate(0.85) brightness(0.92)";
export const AFTER_FILTER = "saturate(1.02) brightness(1.03) contrast(1.01)";

/* ------------------------------------------------------------------ */
/* team / values / timeline                                            */
/* ------------------------------------------------------------------ */
export const TEAM: { img: string; name: string; role: string; creds: string[]; line: string }[] = [
  {
    img: IMG.leadDentist,
    name: "Dr. Anaya Sethi",
    role: "Founder & Lead Dentist",
    creds: ["BDS (Hons)", "MFDS RCS(Ed)", "BACD Accredited"],
    line: "Started Ivory after watching patients apologise for teeth they'd been taught to be ashamed of.",
  },
  {
    img: IMG.ortho,
    name: "Dr. Jonas Reinholt",
    role: "Orthodontics & Aligners",
    creds: ["MOrth RCS(Eng)", "Invisalign Diamond"],
    line: "Has moved 1,400+ smiles and still celebrates every finished case in the team chat.",
  },
  {
    img: IMG.restorative,
    name: "Dr. Sofia Marek",
    role: "Restorative & Implants",
    creds: ["MFDS RCS(Glasg)", "MSc Impl Dent"],
    line: "Insists on microscope work for every root canal, no exceptions, no shortcuts.",
  },
  {
    img: IMG.coordinator,
    name: "Tom Okafor",
    role: "Patient Experience Lead",
    creds: ["Treatment planning", "Finance & 0% plans"],
    line: "The calm voice on the phone who turns 'I'm terrified' into a booked appointment.",
  },
];

export const VALUES: { no: string; title: string; copy: string }[] = [
  {
    no: "I",
    title: "Precision over pace",
    copy: "We book longer slots than is commercially sensible. A crown fitted properly once beats one fitted quickly twice.",
  },
  {
    no: "II",
    title: "Comfort is clinical",
    copy: "A relaxed patient heals better, tolerates more and returns sooner. Calm isn't hospitality — it's evidence-based medicine.",
  },
  {
    no: "III",
    title: "Honesty in pricing",
    copy: "Written plans, itemised figures, finance without small print. Surprises belong in birthday cards, not invoices.",
  },
  {
    no: "IV",
    title: "Craft in every crown",
    copy: "An in-house ceramist, hand-layered porcelain, and photographs of every result we publish. Pride keeps standards high.",
  },
];

export const TIMELINE: { year: string; title: string; copy: string }[] = [
  { year: "2011", title: "Two chairs, one idea", copy: "Dr. Sethi opens Ivory with a single rule: no patient leaves feeling judged." },
  { year: "2015", title: "The digital lab arrives", copy: "In-house milling and 3D smile simulation replace the week-long 'guess and hope'." },
  { year: "2019", title: "The comfort suite", copy: "A dedicated sedation room, ceiling cinema and the studio's first no-judgement clinic day." },
  { year: "2023", title: "Diamond status", copy: "1,000+ aligner cases earn Invisalign Diamond provider standing." },
  { year: "2026", title: "12,400 smiles", copy: "The archive passes twelve thousand documented smiles — every one photographed and consented." },
];

export const CERTS = [
  "General Dental Council — registered",
  "CQC — rated Outstanding, 2025",
  "British Academy of Cosmetic Dentistry",
  "Invisalign Diamond Provider",
  "BACD accredited smile design",
  "iTero digital impression lab",
];
