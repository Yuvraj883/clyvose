// components/SocialProof.tsx
"use client";
import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    name: 'Amit Verma',
    title: 'Founder, StartupX',
    quote: 'Clyvos delivered our MVP faster than expected. Their attention to detail and flexibility was a game-changer for us.',
  },
  {
    name: 'Sarah Lee',
    title: 'CTO, GreenTech',
    quote: 'Great experience! Smooth communication and solid tech delivery. Highly recommend the team at Clyvos.',
  },
  {
    name: 'Carlos Mendes',
    title: 'Product Manager, FinEdge',
    quote: 'The Clyvos team exceeded our expectations. The UI/UX was world-class and the delivery was always on time.',
  },
  {
    name: 'Emily Chen',
    title: 'CEO, Healthify',
    quote: 'We saw a 40% faster go-to-market thanks to Clyvos. Their process is seamless and the results speak for themselves.',
  },
  {
    name: 'Liam O\'Brien',
    title: 'Lead Engineer, EduNext',
    quote: 'Clyvos is our go-to for rapid prototyping. The quality and speed are unmatched.',
  },
  {
    name: 'Priya Singh',
    title: 'COO, Marketly',
    quote: 'From ideation to launch, Clyvos was a true partner. The team is creative, responsive, and highly skilled.',
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
    carouselRef.current.animate([
      { opacity: 0, transform: 'translateY(30px)' },
      { opacity: 1, transform: 'translateY(0)' }
    ], {
      duration: 600,
      easing: 'cubic-bezier(0.4,0,0.2,1)'
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
    <section className="relative py-12 md:py-16 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
      {/* Animated floating background elements */}
      <div className="absolute -top-10 -left-10 w-56 h-56 bg-blue-200 opacity-30 rounded-full blur-3xl animate-float-slow z-0" />
      <div className="absolute -bottom-12 right-0 w-72 h-72 bg-purple-200 opacity-20 rounded-full blur-3xl animate-float-slower z-0" />
      <div className="absolute top-1/2 left-1/2 w-28 h-28 bg-pink-100 opacity-20 rounded-full blur-2xl animate-float-fast z-0" />
      
      <style>{`
        @keyframes float-slow { 0% { transform: translateY(0) } 50% { transform: translateY(-20px) } 100% { transform: translateY(0) } }
        @keyframes float-slower { 0% { transform: translateY(0) } 50% { transform: translateY(30px) } 100% { transform: translateY(0) } }
        @keyframes float-fast { 0% { transform: translateY(0) } 50% { transform: translateY(-10px) } 100% { transform: translateY(0) } }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-slower { animation: float-slower 14s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 5s ease-in-out infinite; }
        .star-pop { animation: star-pop 0.7s cubic-bezier(.4,2,.6,1) both; }
        @keyframes star-pop { 0% { transform: scale(0.7) rotate(-20deg); opacity: 0.5; } 60% { transform: scale(1.2) rotate(10deg); opacity: 1; } 100% { transform: scale(1) rotate(0); opacity: 1; } }
        .card-glass { box-shadow: 0 8px 32px 0 rgba(31,38,135,0.10); border: 1.5px solid rgba(59,130,246,0.15); backdrop-filter: blur(16px); }
        .animate-avatar-float { animation: avatar-float 4s ease-in-out infinite; }
        @keyframes avatar-float { 0% { transform: translateY(0); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0); } }
        .avatar-gradient {
          background: linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6);
          padding: 2.5px;
          border-radius: 9999px;
          display: inline-block;
        }
        .avatar-inner {
          background: white;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .headline-animated {
          background: linear-gradient(270deg, #2563eb, #a21caf, #db2777, #2563eb);
          background-size: 600% 600%;
          animation: gradient-move 8s ease-in-out infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .testimonial-hover:hover {
          transform: translateY(-6px) scale(1.025);
          box-shadow: 0 12px 36px 0 rgba(59,130,246,0.13);
          border-color: #a78bfa;
        }
        .dot {
          transition: transform 0.2s cubic-bezier(.4,2,.6,1), box-shadow 0.2s;
        }
        .dot:focus {
          outline: 2px solid #2563eb;
        }
        .dot:hover {
          transform: scale(1.2);
          box-shadow: 0 0 0 4px #a5b4fc44;
        }
        .cta-animated {
          transition: transform 0.18s cubic-bezier(.4,2,.6,1), box-shadow 0.18s;
        }
        .cta-animated:hover {
          transform: scale(1.04) translateY(-2px);
          box-shadow: 0 8px 32px 0 #a78bfa33;
        }
      `}</style>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className={`text-center mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}> 
          <h2 className="headline-animated text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 drop-shadow-lg">
            Trusted by Founders & Startups
          </h2>
          <p className="text-gray-700 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            We&apos;re proud to build for ambitious teams around the world.
          </p>
        </div>

        {/* Rating indicator */}
        <div className={`flex justify-center items-center mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}> 
          <div className="flex items-center bg-white/80 px-6 py-2 rounded-full shadow-lg backdrop-blur-md border border-blue-100">
            <div className="flex mr-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className={`w-6 h-6 text-yellow-400 ${starAnim ? 'star-pop' : ''}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-base font-semibold text-blue-700">4.9/5 from our clients</span>
          </div>
        </div>

        {/* Testimonial carousel */}
        <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} mb-10`}> 
          <div className="flex justify-center items-center w-full">
            <div
              ref={carouselRef}
              className="w-full max-w-3xl relative"
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`w-full transition-all duration-700 ${
                    index === activeTestimonial 
                      ? 'opacity-100 scale-100 z-10' 
                      : 'opacity-0 scale-95 z-0 absolute top-0 left-0'
                  }`}
                  aria-hidden={index !== activeTestimonial}
                >
                  <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-blue-200 px-6 py-8 flex flex-col justify-center items-center min-h-[220px] overflow-hidden card-glass md:px-8 md:py-10 mx-auto testimonial-hover">
                    {/* Gradient border/glow */}
                    <div className="absolute inset-0 rounded-3xl pointer-events-none z-0" style={{boxShadow: '0 0 0 4px rgba(59,130,246,0.15), 0 8px 32px 0 rgba(31,38,135,0.10)'}} />
                    {/* Decorative quote icon */}
                    <div className="absolute -top-4 left-8 text-blue-300 opacity-30 z-10">
                      <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7.17 21v-7.39c0-5.7 3.73-9.57 8.98-10.61l.99 2.15c-2.43.92-3.99 3.64-3.99 5.85h4v10H7.17zm-7.17 0v-7.39c0-5.7 3.75-9.57 9-10.61l1 2.15c-2.43.92-4 3.64-4 5.85h4v10H0z" />
                      </svg>
                    </div>
                    {/* Testimonial content */}
                    <div className="relative pt-6 w-full h-full flex flex-col items-center z-10">
                      <p className="text-gray-900 italic mb-6 text-lg md:text-xl font-medium text-center px-2 md:px-6">
                        {testimonial.quote}
                      </p>
                      <div className="flex items-center mt-2">
                        <span className="avatar-gradient animate-avatar-float mr-4">
                          <span className="avatar-inner w-12 h-12">
                            <span className="text-blue-700 font-bold text-xl">
                              {testimonial.name.charAt(0)}
                            </span>
                          </span>
                        </span>
                        <div className="text-left">
                          <p className="font-semibold text-gray-900 text-base leading-tight mb-1">{testimonial.name}</p>
                          <p className="text-sm text-gray-500">{testimonial.title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Indicator dots */}
          <div className="flex justify-center h-8 gap-2 mt-6" aria-label="Testimonial navigation" aria-live="polite">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`dot w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  index === activeTestimonial 
                    ? 'bg-blue-600 scale-125 shadow-md' 
                    : 'bg-gray-300 hover:bg-gray-400'
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
            className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors group px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-expanded={showAllTestimonials}
            aria-controls="all-testimonials-list"
          >
            {showAllTestimonials ? 'Hide all testimonials' : 'View all testimonials'}
            <svg 
              className={`w-5 h-5 ml-2 transition-transform ${showAllTestimonials ? 'rotate-180' : ''}`} 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* All testimonials scrollable list */}
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
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="opacity-100 scale-100 z-10 testimonial-hover">
                      <div className="relative bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-blue-200 px-6 py-6 flex flex-col justify-center items-center min-h-[180px] overflow-hidden card-glass">
                        {/* Gradient border/glow */}
                        <div className="absolute inset-0 rounded-2xl pointer-events-none z-0" style={{boxShadow: '0 0 0 2px rgba(59,130,246,0.15), 0 4px 16px 0 rgba(31,38,135,0.10)'}} />
                        {/* Decorative quote icon */}
                        <div className="absolute -top-2 left-4 text-blue-300 opacity-30 z-10">
                          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M7.17 21v-7.39c0-5.7 3.73-9.57 8.98-10.61l.99 2.15c-2.43.92-3.99 3.64-3.99 5.85h4v10H7.17zm-7.17 0v-7.39c0-5.7 3.75-9.57 9-10.61l1 2.15c-2.43.92-4 3.64-4 5.85h4v10H0z" />
                          </svg>
                        </div>
                        {/* Testimonial content */}
                        <div className="relative pt-4 w-full h-full flex flex-col items-center z-10">
                          <p className="text-gray-900 italic mb-4 text-base font-medium text-center px-2">
                            {testimonial.quote}
                          </p>
                          <div className="flex items-center mt-2">
                            <span className="avatar-gradient animate-avatar-float mr-3">
                              <span className="avatar-inner w-10 h-10">
                                <span className="text-blue-700 font-bold text-lg">
                                  {testimonial.name.charAt(0)}
                                </span>
                              </span>
                            </span>
                            <div className="text-left">
                              <p className="font-semibold text-gray-900 text-sm leading-tight mb-1">{testimonial.name}</p>
                              <p className="text-xs text-gray-500">{testimonial.title}</p>
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

        {/* Call to action */}
        <div className={`text-center mt-8 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}> 
          <a 
            href="/case-studies" 
            className="cta-animated inline-flex items-center text-lg text-blue-600 font-bold hover:text-pink-600 transition-colors group px-6 py-3 rounded-full bg-white/70 shadow-md backdrop-blur-md border border-blue-100 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            View our case studies
            <svg 
              className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
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