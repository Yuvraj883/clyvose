// app/page.tsx
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
    <div className="relative overflow-x-hidden bg-gradient-to-br from-blue-50 via-white to-slate-100">
      {/* Animated floating blobs */}
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 opacity-30 rounded-full blur-3xl z-0 animate-pulse"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 right-0 w-80 h-80 bg-gradient-to-tr from-blue-200 via-cyan-300 to-blue-400 opacity-20 rounded-full blur-2xl z-0 animate-pulse"
        animate={{ y: [0, -40, 0], x: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Problem/Solution Section */}
      <section className="py-28 relative z-10" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 drop-shadow-lg">
              The Digital Transformation Challenge
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
              Businesses today face unique challenges in their digital journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Problem Column */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, type: "spring", bounce: 0.2 }}
              className="bg-white/80 backdrop-blur-md p-10 rounded-3xl border border-slate-200 shadow-xl hover:shadow-2xl transition-shadow duration-300 group relative overflow-hidden"
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className="bg-red-100 p-3 rounded-full shadow-md"
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-red-500"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-bold text-slate-900">The Problems You Face</h3>
              </div>
              <motion.ul
                className="space-y-4"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.13,
                    },
                  },
                }}
              >
                {problems.map((problem, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 bg-red-50/60 rounded-lg px-3 py-2 hover:bg-red-100/80 transition-colors duration-200 cursor-pointer shadow-sm"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    whileHover={{ scale: 1.04, x: 5 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0 animate-pulse group-hover:animate-none"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
                    </svg>
                    <span className="text-slate-700 font-medium">{problem}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Solution Column */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, type: "spring", bounce: 0.2, delay: 0.2 }}
              className="bg-white/80 backdrop-blur-md p-10 rounded-3xl border border-blue-200 shadow-xl hover:shadow-2xl transition-shadow duration-300 group relative overflow-hidden w-full"
              whileHover={{ scale: 1.03 }}
            >
              <div className="absolute -right-10 -top-10 w-48 h-48 sm:w-64 sm:h-64 bg-blue-100 rounded-full blur-3xl opacity-30 pointer-events-none max-w-full animate-pulse"></div>
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className="bg-blue-100 p-3 rounded-full shadow-md"
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-blue-500"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-bold text-slate-900">The Clyvos Solution</h3>
              </div>
              <motion.ul
                className="space-y-4"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.13,
                    },
                  },
                }}
              >
                {solutions.map((solution, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 bg-blue-50/60 rounded-lg px-3 py-2 hover:bg-blue-100/80 transition-colors duration-200 cursor-pointer shadow-sm"
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    whileHover={{ scale: 1.04, x: 5 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0 animate-bounce group-hover:animate-none"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span className="text-slate-700 font-medium">{solution}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                className="mt-8 bg-gradient-to-r from-blue-100 via-white to-blue-50 p-6 rounded-xl border border-blue-200 shadow-sm hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.5, type: "spring" }}
              >
                <h4 className="font-bold text-slate-900 mb-3 text-lg">The Result?</h4>
                <p className="text-slate-700 text-base">
                  Businesses using <span className="font-bold text-blue-600">Clyvos</span> solutions see an average of <span className="font-bold text-blue-600">3.5x ROI</span> within the first year, with <span className="font-bold text-blue-600">40% faster</span> operational processes and <span className="font-bold text-blue-600">75% higher</span> customer satisfaction scores.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}