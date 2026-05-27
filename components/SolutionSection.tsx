'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function SolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const problems = [
    "Outdated systems slowing down operations",
    "High development costs with unpredictable results",
    "Poor user experience driving customers away",
    "Lack of technical expertise in-house",
    "Difficulty scaling with business growth",
    "Security vulnerabilities in current solutions"
  ];
  const solutions = [
    "Modern, scalable applications tailored to your needs",
    "Transparent pricing with predictable outcomes",
    "User-centric design that converts visitors",
    "Dedicated team of experts at your service",
    "Future-proof architecture that grows with you",
    "Enterprise-grade security built-in"
  ];

  return (
    <section className="relative overflow-hidden bg-[#030712] py-20">
      {/* Decorative background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-[400px] h-[400px] rounded-full blur-[120px] glow-spot-blue opacity-40 animate-pulse-slow" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full blur-[120px] glow-spot-purple opacity-30 animate-pulse-slow" />
      </div>

      <div className="py-12 relative z-10" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent mb-4 font-heading tracking-tight drop-shadow-md">
              The Digital Transformation Challenge
            </h2>
            <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
              Businesses today face unique hurdles in their digital journey. We turn these roadblocks into launchpads.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Problem Column */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, type: "spring", bounce: 0.1 }}
              className="bg-red-500/[0.02] border border-red-500/10 backdrop-blur-lg p-8 sm:p-10 rounded-3xl shadow-[0_10px_40px_-15px_rgba(239,68,68,0.1)] hover:border-red-500/25 hover:bg-red-500/[0.04] transition-all duration-500 group relative overflow-hidden"
              whileHover={{ scale: 1.015 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className="bg-red-500/10 border border-red-500/20 p-3 rounded-2xl shadow-md text-red-400"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-bold text-white font-heading tracking-wide">The Problems You Face</h3>
              </div>
              <motion.ul
                className="space-y-4"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.08,
                    },
                  },
                }}
              >
                {problems.map((problem) => (
                  <motion.li
                    key={problem}
                    className="flex items-start gap-3 bg-red-950/15 border border-red-900/20 rounded-xl px-4 py-3 hover:bg-red-950/30 hover:border-red-900/35 transition-all duration-200 cursor-pointer shadow-sm text-slate-300"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    whileHover={{ scale: 1.025, x: 4 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5 text-red-500/80 mt-0.5 flex-shrink-0"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
                    </svg>
                    <span className="font-medium text-slate-300 text-sm sm:text-base">{problem}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Solution Column */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, type: "spring", bounce: 0.1, delay: 0.1 }}
              className="bg-blue-500/[0.02] border border-blue-500/10 backdrop-blur-lg p-8 sm:p-10 rounded-3xl shadow-[0_10px_40px_-15px_rgba(59,130,246,0.1)] hover:border-blue-500/25 hover:bg-blue-500/[0.04] transition-all duration-500 group relative overflow-hidden w-full"
              whileHover={{ scale: 1.015 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className="bg-blue-500/10 border border-blue-500/20 p-3 rounded-2xl shadow-md text-blue-400"
                  whileHover={{ rotate: -10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-bold text-white font-heading tracking-wide">The Clyvos Solution</h3>
              </div>
              <motion.ul
                className="space-y-4"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.08,
                    },
                  },
                }}
              >
                {solutions.map((solution) => (
                  <motion.li
                    key={solution}
                    className="flex items-start gap-3 bg-blue-950/15 border border-blue-900/20 rounded-xl px-4 py-3 hover:bg-blue-950/30 hover:border-blue-900/35 transition-all duration-200 cursor-pointer shadow-sm text-slate-300"
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    whileHover={{ scale: 1.025, x: 4 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span className="font-medium text-slate-300 text-sm sm:text-base">{solution}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                className="mt-8 bg-gradient-to-r from-blue-950/40 via-indigo-950/10 to-purple-950/40 p-6 rounded-2xl border border-blue-500/15 shadow-sm hover:border-blue-500/25 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.4, type: "spring" }}
              >
                <h4 className="font-extrabold text-white mb-2 text-lg font-heading tracking-wide">The Result?</h4>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Businesses using <span className="font-bold text-blue-400">Clyvos</span> solutions see an average of <span className="font-bold text-indigo-400">3.5x ROI</span> within the first year, with <span className="font-bold text-indigo-400">40% faster</span> operational processes and <span className="font-bold text-indigo-400">75% higher</span> customer satisfaction scores.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}