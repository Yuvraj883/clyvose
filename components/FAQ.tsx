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
    <section className="py-24 min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 animate-fade-in">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12 flex items-center justify-center gap-2">
          <span className="text-blue-500 animate-bounce">💡</span> Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`group bg-white border rounded-2xl overflow-hidden shadow-lg transition-all duration-500 ${
                openIndex === idx
                  ? "shadow-2xl border-blue-300 scale-[1.02]"
                  : "border-gray-200 hover:shadow-xl hover:scale-[1.01]"
              }`}
              style={{
                transition: "box-shadow 0.4s cubic-bezier(.4,2,.6,1), transform 0.4s cubic-bezier(.4,2,.6,1)",
              }}
            >
              <button
                onClick={() => toggle(idx)}
                className={`flex justify-between items-center w-full text-left px-7 py-6 focus:outline-none transition-colors duration-300 ${
                  openIndex === idx ? "bg-blue-50" : "hover:bg-gray-50"
                }`}
              >
                <span className="font-semibold text-lg text-gray-900 transition-colors duration-300">
                  {faq.question}
                </span>
                <span
                  className={`text-blue-500 text-2xl font-bold transition-transform duration-500 ${
                    openIndex === idx ? "rotate-180 scale-125" : "rotate-0 scale-100 group-hover:scale-110"
                  }`}
                  style={{ display: "inline-block" }}
                >
                  <FaChevronDown />
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === idx ? "max-h-40 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"
                }`}
                style={{
                  transition:
                    "max-height 0.5s cubic-bezier(.4,2,.6,1), opacity 0.4s, transform 0.4s cubic-bezier(.4,2,.6,1)",
                }}
              >
                <div className="px-7 pb-6 pt-0 text-gray-700 text-base border-t border-gray-100 animate-fade-in">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <p className="text-gray-500 mb-4 text-lg">Still have questions?</p>
          <a
            href="mailto:clyvos@zohomail.in?subject=Discovery%20Call%20Request"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 inline-block animate-glow"
            style={{
              boxShadow: "0 0 0 0 rgba(99,102,241,0.7)",
              animation: "glow 2s infinite alternate"
            }}
          >
            Contact Us
          </a>
        </div>
        <style jsx>{`
          @keyframes glow {
            0% {
              box-shadow: 0 0 0 0 rgba(99,102,241,0.7);
            }
            100% {
              box-shadow: 0 0 24px 8px rgba(139,92,246,0.25);
            }
          }
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(16px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>
    </section>
  );
}
