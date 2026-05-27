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
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-10 flex items-center justify-center min-h-[40vh] transition-all duration-700" ref={sectionRef}>
      <div className="max-w-md w-full text-center px-4 py-6 bg-white/90 rounded-2xl shadow-xl backdrop-blur-md border border-blue-100">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-2 text-blue-700 drop-shadow-sm tracking-tight">
          🚀 Launch Your MVP Starting at <span className='text-green-600'>₹9,999</span>
        </h2>
        <p className="mb-5 text-base md:text-lg text-gray-700 font-medium">
          Get your product or website live quickly and affordably. Limited project slots available this month!
        </p>
        <a
          href="mailto:clyvos@zohomail.in?subject=Discovery%20Call%20Request"
          ref={buttonRef}
          className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-blue-400/50 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-300 animate-none glow-on-hover text-sm md:text-base"
        >
          Book a Free Discovery Call →
        </a>
        <p
          className="text-xs mt-4 text-blue-500 italic font-semibold animate-none"
          ref={infoRef}
        >
          Next 3 signups get priority onboarding 💡
        </p>
      </div>
    </section>
  );
}
  