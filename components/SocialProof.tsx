// components/SocialProof.tsx
"use client";
import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    name: 'GG Gautam',
    title: 'Founder, Tamana India',
    quote: 'Clyvos understood our vision perfectly. Their technical expertise and seamless delivery process made a huge difference in building our platform.',
  },
  {
    name: 'Professor HS Rawat',
    title: 'Director of Placement Cell, Maharaja Surajmal Institute of Technology',
    quote: 'The team at Clyvos demonstrated exceptional professionalism and skill. The quality of work they delivered exceeded our expectations and greatly benefited our institution.',
  },
  {
    name: 'Love Deep Kashyap',
    title: 'Founder, EasilyFamous',
    quote: 'Partnering with Clyvos was a game-changer for Easily famous. Their innovative approach and dedication to the product\'s success are truly remarkable.',
  },
  {
    name: 'Kanishq Singh Vishwa',
    title: 'Manager, Vital Vishwa Publications',
    quote: 'Clyvos built us a platform that truly represents who we are. From the book shop to our courses and events, everything came together beautifully. Our readers and authors both love the experience — the team delivered well beyond what we imagined.',
  },
  {
    name: 'Anurag Joshy',
    title: 'Manager, Cell Nano Solutions',
    quote: 'Getting a science-driven product like ours onto the web professionally is no small feat. Clyvos nailed it — clean design, strong product pages, and an ordering flow that actually converts. They understood our niche and made it look premium.',
  },
  {
    name: 'Farhan',
    title: 'Founder, HealHub India',
    quote: 'As a healthcare platform, trust and clarity are everything. Clyvos delivered a site that communicates exactly that — approachable, informative, and patient-friendly. We\'ve seen a clear uptick in enquiries since going live.',
  },
];

export default function SocialProof() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [starAnim, setStarAnim] = useState(false);
  const [showAllTestimonials, setShowAllTestimonials] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    setStarAnim(true);
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      setStarAnim(false);
      setTimeout(() => setStarAnim(true), 100);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Animate carousel slide
  useEffect(() => {
    if (!carouselRef.current) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;
    carouselRef.current.animate([
      { opacity: 0, transform: 'translateY(20px)' },
      { opacity: 1, transform: 'translateY(0)' }
    ], {
      duration: 500,
      easing: 'cubic-bezier(0.16,1,0.3,1)'
    });
  }, [activeTestimonial]);

  const toggleShowAllTestimonials = () => {
    setShowAllTestimonials(!showAllTestimonials);
    if (!showAllTestimonials && testimonialsRef.current) {
      setTimeout(() => {
        testimonialsRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <section className="relative py-24 bg-[#030712] overflow-hidden">
      {/* Animated glowing mesh elements */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full blur-[120px] glow-spot-blue opacity-30 animate-float-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-[120px] glow-spot-purple opacity-25 animate-float-slower pointer-events-none" />



      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className={`text-center mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="headline-animated text-3xl sm:text-4xl md:text-5xl font-black mb-3 tracking-tight font-heading">
            Trusted by Founders & Startups
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            We&apos;re proud to build high-performance products for ambitious teams.
          </p>
        </div>

        {/* Rating indicator */}
        <div className={`flex justify-center items-center mb-10 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <div className="flex items-center bg-slate-900/40 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/[0.06] shadow-xl">
            <div className="flex mr-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className={`w-5 h-5 text-amber-400 ${starAnim ? 'star-pop' : ''}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-semibold text-blue-400">5/5 from our clients</span>
          </div>
        </div>

        {/* Testimonial carousel */}
        <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} mb-10`}>
          <div className="flex justify-center items-center w-full">
            <div ref={carouselRef} className="w-full max-w-3xl relative">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.name}
                  className={`w-full transition-all duration-700 ${index === activeTestimonial
                    ? 'opacity-100 scale-100 z-10'
                    : 'opacity-0 scale-95 z-0 absolute top-0 left-0'
                    }`}
                  aria-hidden={index !== activeTestimonial}
                >
                  <div className="relative bg-slate-900/35 border border-white/[0.05] backdrop-blur-xl rounded-3xl p-8 sm:p-10 flex flex-col justify-center items-center min-h-[220px] overflow-hidden testimonial-hover mx-auto">
                    {/* Decorative quote icon */}
                    <div className="absolute -top-3 left-8 text-blue-500/10 opacity-30 z-0 pointer-events-none">
                      <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7.17 21v-7.39c0-5.7 3.73-9.57 8.98-10.61l.99 2.15c-2.43.92-3.99 3.64-3.99 5.85h4v10H7.17zm-7.17 0v-7.39c0-5.7 3.75-9.57 9-10.61l1 2.15c-2.43.92-4 3.64-4 5.85h4v10H0z" />
                      </svg>
                    </div>

                    {/* Testimonial content */}
                    <div className="relative pt-4 w-full h-full flex flex-col items-center z-10 text-center">
                      <p className="text-slate-100 italic mb-8 text-lg sm:text-xl font-medium px-2 sm:px-6 leading-relaxed">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                      <div className="flex items-center mt-2">
                        <span className="avatar-gradient animate-avatar-float mr-4">
                          <span className="avatar-inner w-12 h-12">
                            <span className="text-blue-400 font-extrabold text-xl">
                              {testimonial.name.charAt(0)}
                            </span>
                          </span>
                        </span>
                        <div className="text-left">
                          <p className="font-bold text-white text-base leading-tight font-heading mb-1">{testimonial.name}</p>
                          <p className="text-xs text-slate-400 font-medium">{testimonial.title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicator dots */}
          <div className="flex justify-center h-8 gap-2.5 mt-6" aria-label="Testimonial navigation" aria-live="polite">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.name}
                onClick={() => setActiveTestimonial(index)}
                className={`dot w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${index === activeTestimonial
                  ? 'bg-blue-400 scale-125 shadow-[0_0_10px_rgba(96,165,250,0.5)]'
                  : 'bg-slate-700 hover:bg-slate-600'
                  }`}
                aria-label={`View testimonial ${index + 1}`}
                aria-pressed={index === activeTestimonial}
                tabIndex={0}
              />
            ))}
          </div>
        </div>

        {/* Toggle button for all testimonials */}
        <div className={`text-center mb-8 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <button
            onClick={toggleShowAllTestimonials}
            className="inline-flex items-center text-slate-400 font-semibold hover:text-white transition-colors group px-4 py-2 rounded-xl border border-white/[0.05] bg-white/[0.02] hover:bg-white/[0.06] focus:outline-none"
            aria-expanded={showAllTestimonials}
            aria-controls="all-testimonials-list"
          >
            {showAllTestimonials ? 'Hide all testimonials' : 'View all testimonials'}
            <svg
              className={`w-4 h-4 ml-2 transition-transform duration-300 ${showAllTestimonials ? 'rotate-180' : ''}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* All testimonials drawer scrollable list */}
        {showAllTestimonials && (
          <div
            ref={testimonialsRef}
            id="all-testimonials-list"
            className={`relative transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} mb-10`}
            aria-live="polite"
          >
            <div className="flex justify-center items-center w-full">
              <div className="w-full max-w-4xl relative">
                <div className="grid sm:grid-cols-2 gap-6 px-2">
                  {testimonials.map((testimonial) => (
                    <div key={testimonial.name} className="opacity-100 scale-100 z-10 testimonial-hover rounded-2xl">
                      <div className="relative bg-slate-900/35 border border-white/[0.05] backdrop-blur-lg rounded-2xl p-6 flex flex-col justify-center items-center min-h-[180px] overflow-hidden">
                        {/* Decorative quote icon */}
                        <div className="absolute -top-3 left-4 text-blue-500/10 opacity-30 z-0 pointer-events-none">
                          <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M7.17 21v-7.39c0-5.7 3.73-9.57 8.98-10.61l.99 2.15c-2.43.92-3.99 3.64-3.99 5.85h4v10H7.17zm-7.17 0v-7.39c0-5.7 3.75-9.57 9-10.61l1 2.15c-2.43.92-4 3.64-4 5.85h4v10H0z" />
                          </svg>
                        </div>
                        {/* Testimonial content */}
                        <div className="relative pt-3 w-full h-full flex flex-col items-center z-10 text-center">
                          <p className="text-slate-200 italic mb-6 text-sm sm:text-base font-medium px-2 leading-relaxed">
                            &ldquo;{testimonial.quote}&rdquo;
                          </p>
                          <div className="flex items-center mt-auto">
                            <span className="avatar-gradient animate-avatar-float mr-3">
                              <span className="avatar-inner w-10 h-10">
                                <span className="text-blue-400 font-extrabold text-lg">
                                  {testimonial.name.charAt(0)}
                                </span>
                              </span>
                            </span>
                            <div className="text-left">
                              <p className="font-bold text-white text-sm leading-tight font-heading mb-0.5">{testimonial.name}</p>
                              <p className="text-[10px] text-slate-400 font-medium">{testimonial.title}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Call to Action */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <a
            href="mailto:clyvos@zohomail.in?subject=Discovery%20Call%20Request"
            className="group inline-flex items-center gap-2 text-sm sm:text-base text-blue-400 font-bold hover:text-pink-400 px-6 py-3 rounded-full bg-slate-900/35 border border-white/[0.06] hover:border-indigo-500/20 shadow-md backdrop-blur-md hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
          >
            Book a free discovery call
            <svg
              className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}