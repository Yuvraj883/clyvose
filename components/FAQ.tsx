"use client";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer:
        "Most MVPs and websites are delivered within 2–4 weeks, depending on complexity and feedback cycles.",
    },
    {
      question: "What tech stacks do you use?",
      answer:
        "We work with modern stacks like React, Next.js, Flutter, Node.js, Firebase, and Tailwind CSS. We choose tech based on your product's needs.",
    },
    {
      question: "What if I need changes after delivery?",
      answer:
        "We offer post-launch support and can scope out further changes as part of a new phase or a support retainer.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "Yes. If we fail to deliver the agreed scope, we offer a 100% money-back guarantee—no hassle.",
    },
    {
      question: "Can you work with tight startup budgets?",
      answer:
        "Absolutely. We offer flexible pricing and MVP-first approaches that are ideal for early-stage startups.",
    },
  ];

  return (
    <section className="py-24 bg-[#030712] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-[450px] h-[450px] rounded-full blur-[140px] glow-spot-blue opacity-25 pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[450px] rounded-full blur-[140px] glow-spot-purple opacity-20 pointer-events-none" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="inline-flex items-center rounded-full bg-indigo-500/10 border border-indigo-500/30 px-3.5 py-1 text-xs font-semibold text-indigo-300 mb-4 tracking-wide uppercase">
            Questions
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-center text-white font-heading tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={faq.question}
              className={`group border rounded-3xl overflow-hidden transition-all duration-500 ${
                openIndex === idx
                  ? "border-indigo-500/35 bg-slate-900/50 scale-[1.015] shadow-2xl"
                  : "border-white/[0.05] bg-slate-900/25 hover:border-white/10 hover:scale-[1.005] hover:shadow-xl"
              }`}
              style={{
                transition: "box-shadow 0.4s cubic-bezier(0.16,1,0.3,1), transform 0.4s cubic-bezier(0.16,1,0.3,1), border-color 0.4s",
              }}
            >
              <button
                onClick={() => toggle(idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-answer-${idx}`}
                className={`flex justify-between items-center w-full text-left px-7 py-5 focus:outline-none transition-colors duration-300 ${
                  openIndex === idx ? "bg-slate-950/20" : "hover:bg-white/[0.02]"
                }`}
              >
                <span className="font-bold text-base sm:text-lg text-white font-heading tracking-wide transition-colors duration-300 group-hover:text-blue-300">
                  {faq.question}
                </span>
                <span
                  className={`text-indigo-400 text-lg transition-transform duration-500 ${
                    openIndex === idx ? "rotate-180 scale-120" : "rotate-0 scale-100 group-hover:scale-110"
                  }`}
                  style={{ display: "inline-block" }}
                >
                  <FaChevronDown />
                </span>
              </button>
              <div
                id={`faq-answer-${idx}`}
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === idx ? "max-h-screen opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"
                }`}
                style={{
                  transition:
                    "max-height 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.3s, transform 0.4s cubic-bezier(0.16,1,0.3,1)",
                }}
              >
                <div className="px-7 pb-6 pt-1 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-white/[0.03]">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-slate-400 mb-4 text-base font-medium">Still have questions?</p>
          <a
            href="mailto:clyvos@zohomail.in?subject=Discovery%20Call%20Request"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-[0_4px_16px_rgba(99,102,241,0.25)] hover:shadow-[0_4px_24px_rgba(99,102,241,0.45)] transition-all duration-300 inline-block hover:scale-[1.03] active:scale-95"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
