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
    let timeoutId: NodeJS.Timeout | undefined;

    function type() {
      if (charIndex < currentService.length) {
        setTypedText(currentService.slice(0, charIndex + 1));
        charIndex++;
        timeoutId = setTimeout(type, 70);
      } else {
        setTyping(false);
        timeoutId = setTimeout(() => {
          setFade(true);
          setTimeout(() => {
            setServiceIndex((prev) => (prev + 1) % services.length);
            setFade(false);
          }, 400);
        }, 1200);
      }
    }
    type();
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serviceIndex]);

  return (
    <section className="min-h-screen relative flex items-center justify-center">
      {/* Animated gradient background */}
      <div className="absolute inset-0 z-0 animate-gradient-move bg-gradient-to-br from-blue-400 via-purple-300 to-pink-200 opacity-90" />
      {/* Extra animated floating shapes */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-pink-200 rounded-full opacity-60 animate-float-slow2 shadow-2xl" aria-hidden="true" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-200 rounded-3xl opacity-50 animate-float-slow3 shadow-xl" aria-hidden="true" />
      {/* Existing geometric accent */}
      <div
        className="absolute top-0 right-0 w-1/3 h-screen bg-blue-50 animate-float-slow rounded-bl-[5rem] shadow-2xl opacity-80"
        aria-hidden="true"
      />
      {/* Animated SVG background */}
      <svg className="absolute left-0 top-0 w-full h-full opacity-20 pointer-events-none animate-bg-move" viewBox="0 0 800 600" fill="none">
        <circle cx="700" cy="100" r="80" fill="#3B82F6" fillOpacity="0.15" />
        <rect x="100" y="400" width="120" height="120" rx="40" fill="#60A5FA" fillOpacity="0.12" />
      </svg>
      <div className="container mx-auto px-6 min-h-screen flex items-center relative z-10">
        <div className="grid md:grid-cols-2 gap-12 w-full">
          {/* Left content */}
          <div
            className={`flex flex-col justify-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            {/* Small badge */}
            <div className={`mb-6 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full shadow animate-pulse">
                Trusted by 15+ businesses so far
              </span>
            </div>
            {/* Main heading */}
            <h1 className={`text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
              Empowering Your Business with
              <div className="relative flex items-center min-h-[3.5rem] md:min-h-[4.5rem] mt-2">
                <span className={`text-blue-700 text-4xl font-black inline-block min-w-[200px] transition-all duration-500 ${fade ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>
                  {typedText}
                  <span className={`inline-block w-2 h-10 md:h-12 ml-1 bg-blue-700 align-middle rounded-sm ${typing ? "opacity-100 animate-blink" : "opacity-0"}`}></span>
                </span>
              </div>
            </h1>
            {/* Description */}
            <p className={`text-gray-700 mb-8 max-w-lg text-lg transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              Clyvos is your trusted partner for building high-quality digital
              solutions. We help businesses accelerate growth and stand out in
              the digital era.
            </p>
            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:clyvos@zohomail.in?subject=Discovery%20Call%20Request"
                className="px-7 py-3 bg-gradient-to-r from-blue-600 to-purple-500 hover:from-purple-500 hover:to-blue-600 focus:ring-4 focus:ring-blue-200 text-white font-bold rounded-xl transition-all duration-300 shadow-xl hover:scale-105 active:scale-95 animate-cta-glow relative overflow-hidden group"
              >
                <span className="relative z-10">Get Started</span>
                <span className="absolute left-0 top-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </a>
              <a
                href="#features"
                className="px-7 py-3 bg-white border-2 border-blue-200 hover:bg-blue-50 text-blue-700 font-bold rounded-xl transition-all duration-300 flex items-center gap-2 shadow hover:scale-105 active:scale-95 relative overflow-hidden group"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="10 8 16 12 10 16 10 8" />
                </svg>
                <span className="relative z-10">Explore Services</span>
                <span className="absolute left-0 top-0 w-full h-full bg-blue-100 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </a>
            </div>
            {/* Social media icons */}
            <div className="flex gap-5 mt-6 items-center" aria-label="Social media links">
              <a
                href="https://www.linkedin.com/company/clyvos/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:scale-110 transition-transform"
              >
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="6" fill="#0A66C2"/>
                  <path d="M10.666 13.333h2.667v8h-2.667v-8zm1.333-4a1.333 1.333 0 110 2.667 1.333 1.333 0 010-2.667zm3.334 4h2.56v1.093h.037c.357-.677 1.23-1.393 2.533-1.393 2.707 0 3.2 1.787 3.2 4.107v4.193h-2.667v-3.72c0-.887-.016-2.027-1.28-2.027-1.28 0-1.48.96-1.48 1.953v3.793h-2.667v-8z" fill="#fff"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/clyvos/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:scale-110 transition-transform"
              >
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                className="hover:scale-110 transition-transform"
              >
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="6" fill="#fff"/>
                  <path d="M10.5 10.5h3.1l3.1 4.1 3.1-4.1h3.1l-4.6 6 4.6 6h-3.1l-3.1-4.1-3.1 4.1h-3.1l4.6-6-4.6-6z" fill="#000"/>
                </svg>
              </a>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 max-w-lg">
              <div className="rounded-xl bg-white/70 border border-blue-100 px-3 py-2 text-center shadow-sm">
                <p className="text-xl font-extrabold text-blue-700">15+</p>
                <p className="text-xs text-gray-600">Businesses served so far</p>
              </div>
              <div className="rounded-xl bg-white/70 border border-blue-100 px-3 py-2 text-center shadow-sm">
                <p className="text-xl font-extrabold text-blue-700">5/5</p>
                <p className="text-xs text-gray-600">Client rating</p>
              </div>
              <div className="rounded-xl bg-white/70 border border-blue-100 px-3 py-2 text-center shadow-sm">
                <p className="text-xl font-extrabold text-blue-700">40%</p>
                <p className="text-xs text-gray-600">Faster delivery</p>
              </div>
            </div>
          </div>
          {/* Right side image/illustration */}
          <div
            className={`flex items-center justify-center transition-all duration-1000 delay-300 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
              }`}
          >
            <div className="relative">
              {/* Animated geometric shapes for visual interest */}
              <div className="absolute -z-10 -left-6 -top-6 w-24 h-24 bg-blue-200 rounded-lg animate-float shadow-xl" />
              <div className="absolute -z-10 -right-6 -bottom-6 w-24 h-24 bg-blue-100 rounded-full animate-float-reverse shadow-lg" />
              {/* Main display box with glassmorphism */}
              <div className="bg-white/60 backdrop-blur-lg shadow-2xl rounded-3xl p-8 border border-blue-100 w-full max-w-md aspect-[4/3] flex items-center justify-center transition-transform duration-700 animate-scale-in">
                <div className="text-center">
                  <div className="inline-block p-4 bg-blue-50 rounded-full mb-4 transition-transform duration-700 animate-logo-spin-bounce">
                    <Image
                      width={100}
                      height={100}
                      src="/logo.png"
                      alt="Clyvos Logo"
                      className="w-28 h-28 object-contain rounded-full shadow-lg"
                    />
                  </div>
                  <h3 className="font-medium text-lg text-gray-900">Clyvos</h3>
                  <p className="text-sm text-gray-500">
                    Digital solutions simplified
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Custom keyframes for animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }
        @keyframes float-slow2 {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.08); }
        }
        @keyframes float-slow3 {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(24px) scale(1.12); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(18px); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes scale-in {
          0% { transform: scale(0.8); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes logo-bounce {
          0% { transform: scale(0.8) translateY(-20px); opacity: 0; }
          60% { transform: scale(1.1) translateY(8px); opacity: 1; }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
        @keyframes logo-spin-bounce {
          0% { transform: scale(0.8) rotate(-30deg) translateY(-20px); opacity: 0; }
          60% { transform: scale(1.1) rotate(10deg) translateY(8px); opacity: 1; }
          100% { transform: scale(1) rotate(0deg) translateY(0); opacity: 1; }
        }
        @keyframes cta-glow {
          0%, 100% { box-shadow: 0 0 0 0 #3b82f6aa; }
          50% { box-shadow: 0 0 16px 4px #a21cafcc; }
        }
        @keyframes bg-move {
          0% { transform: translateY(0); }
          100% { transform: translateY(-30px); }
        }
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-float-slow2 { animation: float-slow2 7s ease-in-out infinite; }
        .animate-float-slow3 { animation: float-slow3 9s ease-in-out infinite; }
        .animate-float-reverse { animation: float-reverse 4s ease-in-out infinite; }
        .animate-blink { animation: blink 1s steps(2, start) infinite; }
        .animate-scale-in { animation: scale-in 0.8s cubic-bezier(0.4,0,0.2,1) 0.2s both; }
        .animate-logo-bounce { animation: logo-bounce 1.1s cubic-bezier(0.4,0,0.2,1) 0.3s both; }
        .animate-logo-spin-bounce { animation: logo-spin-bounce 1.2s cubic-bezier(0.4,0,0.2,1) 0.3s both; }
        .animate-cta-glow { animation: cta-glow 2.5s ease-in-out infinite; }
        .animate-bg-move { animation: bg-move 8s ease-in-out alternate infinite; }
        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradient-move 10s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce), (max-width: 768px) {
          .animate-float,
          .animate-float-slow2,
          .animate-float-slow3,
          .animate-float-reverse,
          .animate-scale-in,
          .animate-logo-bounce,
          .animate-logo-spin-bounce,
          .animate-cta-glow,
          .animate-bg-move,
          .animate-gradient-move,
          .animate-blink {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}