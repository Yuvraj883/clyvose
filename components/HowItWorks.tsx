import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function HowItWorks() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [typedText, setTypedText] = useState("🛠 How It Works");
  
  const steps = [
    {
      icon: "💡",
      title: '1. Discovery'.replace(/'/g, '&apos;'),
      description: 'We understand your vision, goals, and technical needs in a quick call or chat.',
    },
    {
      icon: "💻",
      title: '2. Development'.replace(/'/g, '&apos;'),
      description: 'We start building—frontend, backend, or both—using modern, scalable tech.',
    },
    {
      icon: "💬",
      title: '3. Feedback & Iteration'.replace(/'/g, '&apos;'),
      description: 'We share early builds, collect your feedback, and refine the product.',
    },
    {
      icon: "🚀",
      title: '4. Launch & Handoff'.replace(/'/g, '&apos;'),
      description: 'We deliver the final product and guide you through launch & post-launch support.',
    },
  ];
  
  useEffect(() => {
    const titles = ["🛠 How It Works", "🛠 Simple, Fast, Transparent"];
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % titles.length;
      setTypedText(titles[currentIndex]);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [steps.length]);

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
      transition: { delay: i * 0.2, duration: 0.7 },
    }),
  };
  const iconVariants = {
    initial: { scale: 1 },
    animate: { scale: [1, 1.2, 1], transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      className="py-20 min-h-[80vh] bg-gradient-to-br from-blue-100 via-white to-purple-100 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      {/* Glassy background shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 opacity-30 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 opacity-30 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2 
          className="text-4xl md:text-5xl font-extrabold mb-4 transition-all duration-500 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {typedText}
        </motion.h2>
        <motion.p
          className="text-gray-700 mb-12 max-w-2xl mx-auto text-lg md:text-xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          We keep things simple, fast, and transparent—here&apos;s how we get from idea to product.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className={`backdrop-blur-lg bg-white/70 p-7 rounded-2xl shadow-xl border border-white/40 relative transition-all duration-500 ${
                activeIndex === idx
                  ? 'ring-4 ring-blue-400/60 scale-105 shadow-2xl animate-glow'
                  : 'hover:shadow-2xl hover:scale-105'
              }`}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <motion.div
                className="flex justify-center mb-5"
                variants={iconVariants}
                animate={activeIndex === idx ? 'animate' : 'initial'}
              >
                <span className="text-5xl md:text-6xl drop-shadow-lg">{step.icon}</span>
              </motion.div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900">{step.title}</h3>
              <p className="text-gray-600 text-base md:text-lg">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <style jsx global>{`
        @keyframes glow {
          0% { box-shadow: 0 0 0 0 rgba(59,130,246,0.4); }
          50% { box-shadow: 0 0 40px 10px rgba(139,92,246,0.25); }
          100% { box-shadow: 0 0 0 0 rgba(59,130,246,0.4); }
        }
        .animate-glow {
          animation: glow 2s infinite;
        }
      `}</style>
    </motion.section>
  );
}