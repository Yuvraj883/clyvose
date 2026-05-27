'use client';

import Image from 'next/image';
import { FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#020617] border-t border-white/[0.04] pt-20 pb-10 overflow-hidden z-10">
      {/* Subtle ambient lighting spot */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[250px] rounded-full blur-[120px] glow-spot-blue opacity-15 pointer-events-none" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-5">
            <a href="#" className="flex items-center gap-3 group w-fit">
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
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-sm">
              Clyvos builds and launches fast, scalable web and mobile solutions to help start-ups and businesses succeed in the digital era.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <a href="#features" className="text-slate-400 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects-delivered" className="text-slate-400 hover:text-white transition-colors">
                  Our Works
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-slate-400 hover:text-white transition-colors">
                  Process
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-slate-400 hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Contact / Socials */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Get in Touch</h4>
            <div className="flex items-center gap-2.5 text-sm font-medium text-slate-400 hover:text-white transition-colors">
              <FaEnvelope className="text-indigo-400" />
              <a href="mailto:clyvos@zohomail.in">clyvos@zohomail.in</a>
            </div>
            <div className="flex gap-4 pt-2">
              <a
                href="https://www.linkedin.com/company/clyvos/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl bg-slate-900/50 border border-white/[0.08] hover:border-indigo-500/30 text-slate-400 hover:text-white hover:scale-105 transition-all duration-300"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a
                href="https://www.instagram.com/clyvos/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2.5 rounded-xl bg-slate-900/50 border border-white/[0.08] hover:border-indigo-500/30 text-slate-400 hover:text-white hover:scale-105 transition-all duration-300"
              >
                <FaInstagram className="text-lg" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom border & info */}
        <div className="border-t border-white/[0.05] pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-500">
          <p>© {currentYear} Clyvos. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-350 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-350 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
