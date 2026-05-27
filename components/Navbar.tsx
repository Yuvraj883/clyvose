'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#features' },
    { name: 'Our Works', href: '#projects-delivered' },
    { name: 'Process', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-slate-950/70 backdrop-blur-xl border-b border-white/[0.06] py-3.5 shadow-2xl'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 rounded-full border border-white/10 bg-slate-950 p-1 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo.webp"
              alt="Clyvos logo"
              width={36}
              height={36}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <span className="font-heading font-black text-xl tracking-tight text-white group-hover:text-indigo-400 transition-colors">
            Clyvos
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-indigo-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <a
            href="mailto:clyvos@zohomail.in?subject=Discovery%20Call%20Request"
            className="inline-flex items-center justify-center px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-blue-600 text-white text-sm font-bold rounded-xl transition-all duration-300 shadow-[0_4px_12px_rgba(99,102,241,0.2)] hover:scale-[1.03] active:scale-95"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-slate-300 hover:text-white focus:outline-none p-1.5 rounded-lg border border-white/[0.08] bg-slate-900/35 backdrop-blur-md"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-2xl border-b border-white/[0.06] py-6 px-6 flex flex-col gap-5 animate-fade-in-up">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-semibold text-slate-300 hover:text-white transition-colors py-1"
            >
              {link.name}
            </a>
          ))}
          <a
            href="mailto:clyvos@zohomail.in?subject=Discovery%20Call%20Request"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full text-center py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-blue-600 text-white font-bold rounded-xl transition-all duration-300 shadow-[0_4px_12px_rgba(99,102,241,0.2)]"
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
}
