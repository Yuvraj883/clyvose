import { useEffect, useRef } from "react";

export default function FinalCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const infoRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.classList.add("animate-fade-in-up");
    }
    if (buttonRef.current) {
      buttonRef.current.classList.add("animate-pop");
    }
    if (infoRef.current) {
      infoRef.current.classList.add("animate-pulse-slow");
    }
  }, []);

  return (
    <section className="bg-[#030712] py-20 flex items-center justify-center min-h-[45vh] transition-all duration-700 relative overflow-hidden" ref={sectionRef}>
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[140px] glow-spot-purple opacity-20 pointer-events-none" />
      </div>

      <div className="max-w-lg w-full text-center px-8 py-10 bg-slate-900/35 border border-white/[0.06] rounded-3xl shadow-2xl backdrop-blur-xl relative z-10 mx-4">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-3xl bg-indigo-500/[0.01] pointer-events-none" />
        
        <h2 className="text-2xl sm:text-3xl font-black mb-3 text-white font-heading tracking-tight">
          🚀 Launch Your MVP Starting at <span className='text-emerald-400 drop-shadow-[0_0_12px_rgba(52,211,153,0.3)]'>₹9,999</span>
        </h2>
        <p className="mb-6 text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
          Get your digital product or website live quickly and affordably. Limited development slots available this month!
        </p>
        <a
          href="mailto:clyvos@zohomail.in?subject=Discovery%20Call%20Request"
          ref={buttonRef}
          className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-blue-600 text-white font-bold px-8 py-3.5 rounded-2xl shadow-[0_4px_16px_rgba(99,102,241,0.25)] hover:shadow-[0_4px_24px_rgba(99,102,241,0.45)] hover:scale-[1.03] active:scale-95 transition-all duration-300 text-sm sm:text-base"
        >
          Book a Free Discovery Call →
        </a>
        <p
          className="text-xs mt-5 text-indigo-400 italic font-semibold tracking-wide"
          ref={infoRef}
        >
          Next 3 signups get priority onboarding 💡
        </p>
      </div>
    </section>
  );
}
  