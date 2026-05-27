"use client";
import Image from "next/image";
import { useState, useCallback, useEffect, useRef } from "react";

const deliveredProjects = [
  {
    name: "Tamana India",
    category: "Brand Website",
    timeline: "Live",
    outcome:
      "Built and launched a clean brand experience focused on product discovery and direct enquiries.",
    impact: "⚡ Improved brand presence and lead capture",
    link: "https://www.tamanaindia.com/",
    image: "/tamana-india.webp",
  },
  {
    name: "EasilyFamous",
    category: "SaaS Platform",
    timeline: "Live",
    outcome:
      "Delivered a high-conversion SMM service panel experience with clear service discovery and streamlined user flows.",
    impact: "📈 Improved onboarding and order intent",
    link: "https://easilyfamous.com/",
    image: "/easily-famous.webp",
  },
  {
    name: "Cell Nano Solutions",
    category: "Deep-Tech & E-Commerce",
    timeline: "Live",
    outcome:
      "Crafted a modern storefront and informational site for a pioneering nanocellulose company, featuring product listings, market applications across 8+ industries, and a free sample ordering flow.",
    impact: "🧪 Global visibility for cutting-edge nanocellulose products",
    link: "https://www.cellnanosolutions.com/",
    image: "/cell-nano.webp",
  },

  {
    name: "Vital Vishwa Publications",
    category: "E-Commerce & Publishing",
    timeline: "Live",
    outcome:
      "Designed and developed a full-featured publishing platform with WooCommerce integration, enabling book sales on Amazon, online courses, and event hosting for the Book Turner Gala.",
    impact: "📚 Seamless book discovery, purchase, and event registration",
    link: "https://vitalvishwapublications.com/",
    image: "/vital-vishwa.webp",
  },

  {
    name: "HealHub India",
    category: "Healthcare Platform",
    timeline: "Live",
    outcome:
      "Built a clean, accessible healthcare information portal showcasing common medical procedures, helping patients discover services and connect with providers.",
    impact: "🏥 Improved patient outreach and procedure awareness",
    link: "https://www.healhubindia.in/",
    image: "/heal-hub.webp",
  },

  {
    name: "PC-MSIT Placement Portal",
    category: "Education Portal",
    timeline: "Live",
    outcome:
      "Executed full placement process digitalisation for Maharaja Surajmal Institute of Technology, covering student, coordinator, and placement workflows.",
    impact: "🚀 End-to-end placement operations moved online",
    link: "https://placement.msit.in/sign-in",
    image: "/pc-msit.webp",
  },
];

const GAP = 24; // px — must match the gap-6 class (6 * 4px = 24px)
const total = deliveredProjects.length;

export default function ProjectsDelivered() {
  const [current, setCurrent] = useState(0);
  const [stepPx, setStepPx] = useState(0);       // px to move per click
  const [cardWidthPx, setCardWidthPx] = useState(0); // rendered card width
  const [visibleCount, setVisibleCount] = useState(3);
  const [ready, setReady] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef<number | null>(null);

  // ------------------------------------------------------------------
  // Measure the container on mount + resize to get precise pixel step
  // ------------------------------------------------------------------
  const measure = useCallback(() => {
    if (!containerRef.current) return;
    const isMobile = window.innerWidth < 768;
    const vis = isMobile ? 1 : 3;
    const containerW = containerRef.current.offsetWidth;
    const cw = (containerW - (vis - 1) * GAP) / vis;
    setVisibleCount(vis);
    setCardWidthPx(cw);
    setStepPx(cw + GAP);
    setReady(true);
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const maxIndex = total - visibleCount;

  // ------------------------------------------------------------------
  // Navigation
  // ------------------------------------------------------------------
  const goTo = useCallback(
    (dir: "left" | "right") => {
      setCurrent((prev) => {
        if (dir === "right") return prev >= maxIndex ? 0 : prev + 1;
        return prev <= 0 ? maxIndex : prev - 1;
      });
    },
    [maxIndex]
  );

  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const resetAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current);
    if (!isInView) return;
    autoRef.current = setInterval(() => goTo("right"), 4500);
  }, [goTo, isInView]);

  useEffect(() => {
    resetAuto();
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, [resetAuto]);

  const handlePrev = useCallback(() => { goTo("left"); resetAuto(); }, [goTo, resetAuto]);
  const handleNext = useCallback(() => { goTo("right"); resetAuto(); }, [goTo, resetAuto]);

  // Touch / swipe
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  // Keyboard — dep array added to prevent re-attaching on every render;
  // guard against hijacking arrow keys while user is typing in a form field.
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const tag = (document.activeElement as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [handleNext, handlePrev]);

  // The track slides left by (current * stepPx)
  const translateX = -(current * stepPx);

  return (
    <section
      id="projects-delivered"
      className="py-14 md:py-24 bg-[#030712] relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-10 w-[500px] h-[500px] rounded-full blur-[140px] glow-spot-blue opacity-20" />
        <div className="absolute top-20 left-10 w-[400px] h-[400px] rounded-full blur-[160px] glow-spot-purple opacity-15" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* ── Header row ── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
          <div>
            <p className="inline-flex items-center rounded-full bg-blue-500/10 border border-blue-500/30 px-4 py-1 text-xs font-semibold text-blue-300 mb-4 tracking-wide uppercase">
              Results You Can Trust
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-white font-heading tracking-tight">
              Projects Delivered
            </h2>
            <p className="mt-3 text-slate-400 max-w-xl font-medium text-base leading-relaxed">
              A curated snapshot of high-performance products and platforms shipped by Clyvos for fast-moving teams.
            </p>
          </div>

          {/* Counter + arrows */}
          <div className="flex items-center gap-4 shrink-0">
            <span className="text-sm font-semibold text-slate-400 tabular-nums">
              <span className="text-white font-bold">
                {current + 1}–{Math.min(current + visibleCount, total)}
              </span>
              <span className="mx-1 text-slate-600">/</span>
              {total}
            </span>
            <div className="flex gap-2">
              {[
                { label: "Previous", icon: "M15 18l-6-6 6-6", action: handlePrev },
                { label: "Next", icon: "M9 18l6-6-6-6", action: handleNext },
              ].map(({ label, icon, action }) => (
                <button
                  key={label}
                  onClick={action}
                  aria-label={`${label} projects`}
                  className="w-11 h-11 rounded-full border border-white/10 bg-slate-900/50 backdrop-blur-md text-white flex items-center justify-center
                    transition-all duration-200 hover:bg-indigo-500/20 hover:border-indigo-500/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:scale-105 active:scale-95"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={icon} />
                  </svg>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Sliding track ── */}
        <div
          ref={containerRef}
          className="overflow-visible"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex"
            style={{
              gap: `${GAP}px`,
              transform: `translateX(${translateX}px)`,
              // Only animate after first measure so there's no snap on load
              transition: ready ? "transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "none",
              willChange: "transform",
            }}
          >
            {deliveredProjects.map((project) => (
              <div
                key={project.name}
                style={{
                  // Exact pixel width derived from measurement — never jumpy
                  flex: `0 0 ${cardWidthPx > 0 ? cardWidthPx : "calc(33.333% - 16px)"}px`,
                  minWidth: 0,
                }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>

        {/* ── Dot indicators ── */}
        <div
          className="flex justify-center gap-2 mt-10"
          aria-label="Carousel position"
        >
          {Array.from({ length: total }).map((_, i) => {
            const active = i >= current && i < current + visibleCount;
            return (
              <button
                key={i}
                onClick={() => {
                  setCurrent(Math.min(i, maxIndex));
                  resetAuto();
                }}
                aria-label={`Go to project ${i + 1}`}
                aria-pressed={active}
                className={`h-1.5 rounded-full transition-all duration-300 ${active
                  ? "w-6 bg-indigo-400 shadow-[0_0_8px_rgba(99,102,241,0.6)]"
                  : "w-1.5 bg-slate-700 hover:bg-slate-500"
                  }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Project Card (unchanged from original design)
// ─────────────────────────────────────────────
type Project = (typeof deliveredProjects)[number];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="h-full relative rounded-3xl border border-white/[0.05] p-6 bg-slate-900/30 backdrop-blur-lg shadow-xl hover:border-indigo-500/30 hover:bg-slate-900/50 hover:shadow-2xl transition-all duration-300 group flex flex-col hover:-translate-y-2">
      {/* Clyvos logo badge */}
      <div className="absolute -top-4 -left-3.5 z-10 w-11 h-11 rounded-full border border-white/10 bg-slate-950 shadow-[0_4px_24px_rgba(99,102,241,0.25)] p-1.5 transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/logo.webp"
          alt="Clyvos logo"
          width={40}
          height={40}
          sizes="44px"
          className="w-full h-full rounded-full object-cover"
        />
      </div>

      {/* Screenshot */}
      <div className="mb-5 overflow-hidden rounded-2xl border border-white/[0.08] bg-slate-950 shadow-inner group-hover:border-indigo-500/20 transition-colors duration-300">
        <Image
          src={project.image}
          alt={`${project.name} screenshot`}
          width={1200}
          height={675}
          sizes="(max-width: 768px) 100vw, 33vw"
          className="w-full h-44 object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
        />
      </div>

      {/* Meta */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-[10px] font-bold tracking-wide uppercase text-blue-300 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-full">
          {project.category}
        </span>
        <span className="flex items-center gap-1 text-xs font-semibold text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          {project.timeline}
        </span>
      </div>

      <h3 className="text-xl font-bold text-white font-heading tracking-wide mb-3 group-hover:text-blue-400 transition-colors duration-300">
        {project.name}
      </h3>
      <p className="text-sm text-slate-400 leading-relaxed mb-5 flex-grow">
        {project.outcome}
      </p>

      <div className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/15 rounded-xl px-3.5 py-3 shadow-inner leading-relaxed mb-5">
        {project.impact}
      </div>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm font-bold text-indigo-400 hover:text-indigo-300 group-hover:underline transition-colors w-fit"
      >
        View live website
        <span
          className="inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        >
          ↗
        </span>
      </a>
    </article>
  );
}
