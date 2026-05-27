'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function HowItWorks() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [typedText, setTypedText] = useState("🛠 How It Works");
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.15 });
  
  const steps = [
    {
      icon: "💡",
      title: '1. Discovery',
      description: 'We understand your vision, goals, and technical needs in a quick call or chat.',
    },
    {
      icon: "💻",
      title: '2. Development',
      description: 'We start building—frontend, backend, or both—using modern, scalable tech.',
    },
    {
      icon: "💬",
      title: '3. Feedback',
      description: 'We share early builds, collect your feedback, and refine the product.',
    },
    {
      icon: "🚀",
      title: '4. Launch',
      description: 'We deliver the final product and guide you through launch & post-launch support.',
    },
  ];
  
  useEffect(() => {
    if (!isInView) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const titles = ["🛠 How It Works", "🛠 Simple, Fast, Transparent"];
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % titles.length;
      setTypedText(titles[currentIndex] || "🛠 How It Works");
    }, 3000);
    return () => clearInterval(interval);
  }, [isInView]);

  useEffect(() => {
    if (!isInView) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [steps.length, isInView]);

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6 },
    }),
  };
  const iconVariants = {
    initial: { scale: 1 },
    animate: { scale: [1, 1.15, 1], transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      id="how-it-works"
      ref={sectionRef}
      className="py-14 md:py-24 bg-[#030712] relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={sectionVariants}
    >
      {/* Decorative cosmic glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[450px] h-[450px] rounded-full blur-[140px] glow-spot-blue opacity-30 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full blur-[140px] glow-spot-purple opacity-20 pointer-events-none" />
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <motion.h2 
          className="text-4xl sm:text-5xl font-black mb-4 transition-all duration-500 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 font-heading tracking-tight drop-shadow-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {typedText}
        </motion.h2>
        <motion.p
          className="text-slate-400 mb-16 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed font-medium"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          We keep things simple, fast, and transparent—here&apos;s how we get from idea to product.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              className={`backdrop-blur-lg p-7 rounded-3xl border shadow-xl relative transition-all duration-500 ${
                activeIndex === idx
                  ? 'border-indigo-500/30 bg-slate-900/50 scale-105 shadow-2xl animate-glow'
                  : 'border-white/[0.05] bg-slate-900/25 hover:border-white/10 hover:shadow-2xl hover:scale-105'
              }`}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={cardVariants}
            >
              <motion.div
                className="flex justify-center mb-5"
                variants={iconVariants}
                animate={activeIndex === idx ? 'animate' : 'initial'}
              >
                <span className="text-5xl drop-shadow-[0_4px_16px_rgba(99,102,241,0.2)]">{step.icon}</span>
              </motion.div>
              <h3 className="text-xl font-bold mb-2 text-white font-heading tracking-wide">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-medium">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}