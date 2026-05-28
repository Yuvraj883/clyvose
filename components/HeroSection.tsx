// app/page.tsx
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const services = [
    "Web Apps",
    "Mobile Apps",
    "Admin Panels",
    "Digital Solutions",
  ];
  const [serviceIndex, setServiceIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [typing, setTyping] = useState(true);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    setIsVisible(true);
    setFade(false);
    const currentService = services[serviceIndex] || "";
    setTypedText("");
    setTyping(true);
    let charIndex = 0;
    let cancelled = false;

    function type() {
      if (cancelled) return;
      if (charIndex < currentService.length) {
        setTypedText(currentService.slice(0, charIndex + 1));
        charIndex++;
        setTimeout(type, 70);
      } else {
        setTyping(false);
        setTimeout(() => {
          if (cancelled) return;
          setFade(true);
          setTimeout(() => {
            if (cancelled) return;
            setServiceIndex((prev) => (prev + 1) % services.length);
            setFade(false);
          }, 400);
        }, 1200);
      }
    }
    type();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serviceIndex]);

  return (
    <section className="min-h-screen relative flex items-center justify-center bg-[#030712] overflow-hidden">
      {/* Dynamic ambient background glowing mesh spots */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full blur-[100px] glow-spot-blue opacity-50 animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full blur-[130px] glow-spot-purple opacity-40 animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Floating geometric ambient accent rings */}
      <div className="absolute top-20 left-10 w-24 h-24 rounded-full border border-pink-500/10 bg-pink-500/[0.02] opacity-40 animate-float-slow2 shadow-2xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-24 right-20 w-32 h-32 rounded-3xl border border-purple-500/10 bg-purple-500/[0.02] opacity-35 animate-float-slow3 shadow-xl pointer-events-none" aria-hidden="true" />

      <div className="container mx-auto px-6 min-h-screen flex items-center relative z-10 py-20">
        <div className="grid md:grid-cols-2 gap-12 w-full items-center">
          {/* Left content */}
          <div
            className={`flex flex-col justify-center transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Small Badge */}
            <div className={`mb-6 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
              <span className="inline-flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" />
                Trusted by 15+ businesses so far
              </span>
            </div>

            {/* Main Heading */}
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4 tracking-tight font-heading transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
              Empowering Your Business with
              <div className="relative flex items-center min-h-[3.5rem] md:min-h-[4.5rem] mt-2">
                <span className={`text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 text-4xl sm:text-5xl lg:text-6xl font-black inline-block min-w-[200px] transition-all duration-500 ${fade ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>
                  {typedText}
                  <span className={`inline-block w-2.5 h-9 sm:h-12 ml-1.5 bg-indigo-400 align-middle rounded-sm ${typing ? "opacity-100 animate-blink" : "opacity-0"}`}></span>
                </span>
              </div>
            </h1>

            {/* Description */}
            <p className={`text-slate-300 mb-8 max-w-lg text-base sm:text-lg leading-relaxed transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              Clyvos is your trusted partner for building high-quality digital
              solutions. We help businesses accelerate growth and stand out in
              the digital era with modern aesthetics and reliable architecture.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:clyvos@zohomail.in?subject=Discovery%20Call%20Request"
                className="px-7 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-blue-600 text-white font-bold rounded-xl transition-all duration-300 shadow-[0_4px_20px_rgba(99,102,241,0.35)] hover:shadow-[0_4px_30px_rgba(99,102,241,0.5)] hover:scale-[1.03] active:scale-95 relative overflow-hidden group"
              >
                <span className="relative z-10">Get Started</span>
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="#features"
                className="px-7 py-3.5 bg-white/[0.03] border border-white/10 hover:bg-white/[0.08] hover:border-white/20 text-white font-bold rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg backdrop-blur-md hover:scale-[1.03] active:scale-95 group"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-indigo-400 group-hover:translate-x-0.5 transition-transform"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="10 8 16 12 10 16 10 8" />
                </svg>
                <span>Explore Services</span>
              </a>
            </div>

            {/* Social Links commented out for now
            <div className="flex gap-5 mt-8 items-center" aria-label="Social media links">
              <a
                href="https://www.linkedin.com/company/clyvos/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:scale-115 transition-transform duration-300 filter drop-shadow-[0_2px_8px_rgba(10,102,194,0.3)]"
              >
                <svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="6" fill="#0A66C2"/>
                  <path d="M10.666 13.333h2.667v8h-2.667v-8zm1.333-4a1.333 1.333 0 110 2.667 1.333 1.333 0 010-2.667zm3.334 4h2.56v1.093h.037c.357-.677 1.23-1.393 2.533-1.393 2.707 0 3.2 1.787 3.2 4.107v4.193h-2.667v-3.72c0-.887-.016-2.027-1.28-2.027-1.28 0-1.48.96-1.48 1.953v3.793h-2.667v-8z" fill="#fff"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/clyvos/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:scale-115 transition-transform duration-300 filter drop-shadow-[0_2px_8px_rgba(214,41,118,0.3)]"
              >
                <svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="6" fill="#fff"/>
                  <radialGradient id="ig-gradient" cx="16" cy="16" r="16" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#feda75"/>
                    <stop offset="0.5" stopColor="#fa7e1e"/>
                    <stop offset="1" stopColor="#d62976"/>
                  </radialGradient>
                  <rect width="32" height="32" rx="6" fill="url(#ig-gradient)"/>
                  <path d="M16 11.333A4.667 4.667 0 1016 20.667a4.667 4.667 0 000-9.334zm0 7.667a3 3 0 110-6 3 3 0 010 6zm5.333-7.92a1.08 1.08 0 11-2.16 0 1.08 1.08 0 012.16 0zM24 12.08c-.04-.84-.22-1.58-.8-2.16-.58-.58-1.32-.76-2.16-.8-.85-.05-3.39-.08-5.04-.08s-4.19.03-5.04.08c-.84.04-1.58.22-2.16.8-.58.58-.76 1.32-.8 2.16-.05.85-.08 3.39-.08 5.04s.03 4.19.08 5.04c.04.84.22 1.58.8 2.16.58.58 1.32.76 2.16.8.85.05 3.39.08 5.04.08s4.19-.03 5.04-.08c.84-.04 1.58-.22 2.16-.8.58-.58.76-1.32.8-2.16.05-.85.08-3.39.08-5.04s-.03-4.19-.08-5.04zm-2.4 8.16a2.4 2.4 0 01-2.4 2.4c-.66.03-2.64.08-3.6.08s-2.94-.05-3.6-.08a2.4 2.4 0 01-2.4-2.4c-.03-.66-.08-2.64-.08-3.6s.05-2.94.08-3.6a2.4 2.4 0 012.4-2.4c.66-.03 2.64-.08 3.6-.08s2.94.05 3.6.08a2.4 2.4 0 012.4 2.4c.03.66.08 2.64.08 3.6s-.05 2.94-.08 3.6z" fill="#fff"/>
                </svg>
              </a>
              <a
                href="https://x.com/clyvos"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="hover:scale-115 transition-transform duration-300 filter drop-shadow-[0_2px_8px_rgba(255,255,255,0.15)]"
              >
                <svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="6" fill="#fff"/>
                  <path d="M10.5 10.5h3.1l3.1 4.1 3.1-4.1h3.1l-4.6 6 4.6 6h-3.1l-3.1-4.1-3.1 4.1h-3.1l-4.6-6-4.6-6z" fill="#000"/>
                </svg>
              </a>
            </div>
            */}

            {/* Micro Stats Grid */}
            <div className="mt-8 grid grid-cols-3 gap-3 max-w-lg">
              <div className="rounded-2xl glass-card px-3 py-3.5 text-center shadow-md">
                <p className="text-2xl font-extrabold text-blue-400 font-heading">15+</p>
                <p className="text-[10px] sm:text-xs text-slate-400 font-medium">Businesses served</p>
              </div>
              <div className="rounded-2xl glass-card px-3 py-3.5 text-center shadow-md">
                <p className="text-2xl font-extrabold text-indigo-400 font-heading">5/5</p>
                <p className="text-[10px] sm:text-xs text-slate-400 font-medium">Client rating</p>
              </div>
              <div className="rounded-2xl glass-card px-3 py-3.5 text-center shadow-md">
                <p className="text-2xl font-extrabold text-purple-400 font-heading">40%</p>
                <p className="text-[10px] sm:text-xs text-slate-400 font-medium">Faster delivery</p>
              </div>
            </div>
          </div>

          {/* Right side graphic mockup with premium glassmorphism */}
          <div
            className={`flex items-center justify-center transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative w-full max-w-md">
              {/* Dynamic ambient backgrounds */}
              <div className="absolute -z-10 -left-6 -top-6 w-24 h-24 bg-blue-500/10 border border-blue-500/20 rounded-2xl animate-float shadow-xl" />
              <div className="absolute -z-10 -right-6 -bottom-6 w-24 h-24 bg-purple-500/10 border border-purple-500/20 rounded-full animate-float-reverse shadow-lg" />
              
              {/* Ultra-Premium Glassmorphic container */}
              <div className="bg-slate-900/35 border border-white/[0.07] backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] rounded-3xl p-10 w-full aspect-[4/3] flex flex-col items-center justify-center transition-transform duration-700 hover:scale-[1.02] animate-scale-in">
                <div className="text-center relative">
                  {/* Decorative glowing gradient ring */}
                  <div className="absolute inset-0 w-32 h-32 -top-2 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl animate-pulse" />
                  
                  <div className="inline-block p-4 rounded-full bg-slate-950/60 border border-white/10 mb-4 transition-transform duration-700 animate-logo-spin-bounce shadow-inner z-10 relative">
                    <Image
                      width={100}
                      height={100}
                      src="/logo.webp"
                      alt="Clyvos Logo"
                      priority
                      sizes="112px"
                      className="w-28 h-28 object-contain rounded-full shadow-2xl"
                    />
                  </div>
                  <h3 className="font-extrabold text-2xl text-white font-heading tracking-wide">Clyvos</h3>
                  <p className="text-sm text-slate-400 mt-1 font-medium">
                    Digital solutions simplified
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}