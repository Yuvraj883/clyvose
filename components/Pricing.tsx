import { motion } from "framer-motion";
import { FaBolt, FaChartBar, FaHandshake } from "react-icons/fa";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "₹8,000 – ₹20,000",
      description: "Best for simple websites or landing pages.",
      features: ["1-3 Page Design", "Basic Contact Form", "Responsive Layout"],
      cta: "Get Started",
      icon: <FaBolt className="text-yellow-500 text-3xl" />,
    },
    {
      name: "Growth",
      price: "₹30,000 – ₹80,000",
      description: "Great for startups needing web or app MVPs.",
      features: [
        "Full Website or App",
        "Admin Dashboard",
        "2 Rounds of Revisions",
        "Deployment Help",
      ],
      cta: "Start My Project",
      popular: true,
      icon: <FaChartBar className="text-purple-600 text-3xl" />,
    },
    {
      name: "Custom",
      price: "₹1,00,000+",
      description: "Need something bigger? We'll scope it together.",
      features: [
        "Advanced Features",
        "Integrations",
        "Ongoing Support",
        "Dedicated Dev Team",
      ],
      cta: "Request a Quote",
      icon: <FaHandshake className="text-indigo-600 text-3xl" />,
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-100 relative overflow-hidden">
      {/* Animated background shapes for depth */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-72 h-72 bg-white/40 rounded-full blur-2xl absolute -top-20 -left-20 animate-float" />
        <div className="w-72 h-72 bg-blue-200/30 rounded-full blur-xl absolute -bottom-20 -right-20 animate-float-reverse" />
        <div className="w-40 h-40 bg-pink-200/30 rounded-full blur-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float-slow2" />
      </div>
      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-2 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x drop-shadow-lg">
          💰 Simple, Transparent Pricing
        </h2>
        <p className="text-gray-700 mb-8 text-lg font-medium">
          No hidden fees. Custom plans available. Money-back guarantee if we don&apos;t deliver.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: plan.popular ? 1.04 : 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.12, duration: 0.6, type: "spring" }}
              whileHover={{ scale: 1.06, boxShadow: "0 8px 32px rgba(60, 72, 200, 0.15)" }}
              className={`relative border rounded-3xl p-8 shadow-xl bg-white/80 backdrop-blur-lg transition-all duration-300 cursor-pointer overflow-visible group ${
                plan.popular
                  ? "border-blue-500 z-20 ring-2 ring-blue-100 scale-104"
                  : "border-gray-200 z-10"
              }`}
              style={{ minHeight: 370 }}
            >
              {/* Plan Icon */}
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-gradient-to-tr from-blue-100 via-white to-indigo-100 shadow group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  {plan.icon}
                </div>
              </div>
              {plan.popular && (
                <motion.div
                  initial={{ scale: 0, y: -20 }}
                  animate={{ scale: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="absolute -top-4 left-0 right-0 mx-auto w-28 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-1 px-2 rounded-full text-xs font-semibold shadow-md drop-shadow-md"
                >
                  Most Popular
                </motion.div>
              )}
              <h3 className="text-xl font-bold mb-1 text-gray-900 drop-shadow-sm">{plan.name}</h3>
              <p className="text-gray-600 mb-2 h-12 text-base">{plan.description}</p>
              <p className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text mb-6">
                {plan.price}
              </p>
              <ul className="text-left space-y-2 mb-6 min-h-24">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-gray-700 text-base">
                    <span className="text-green-500 mr-2 font-bold text-lg animate-bounce-slow">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <motion.a
                href="mailto:clyvos@zohomail.in?subject=Discovery%20Call%20Request"
                whileHover={{ scale: 1.05, background: plan.popular ? "linear-gradient(90deg,#2563eb,#a21caf)" : "#f3f4f6", color: plan.popular ? "#fff" : "#1e293b" }}
                className={`w-full block px-4 py-3 rounded-xl font-semibold transition-all duration-200 shadow focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 text-base mt-2 animate-cta-glow relative overflow-hidden group ${
                  plan.popular
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                <span className="relative z-10">{plan.cta}</span>
                <span className="absolute left-0 top-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </motion.a>
            </motion.div>
          ))}
        </div>

        <p className="text-xs text-gray-500 mt-8">
          💸 100% refund if we don&apos;t meet project scope. Let&apos;s build with confidence.
        </p>
      </div>
      {/* Subtle animated background gradient and keyframes */}
      <style jsx>{`
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 4s ease-in-out infinite;
        }
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-bounce-slow {
          animation: bounce 2.5s infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }
        .animate-float-reverse {
          animation: float-reverse 10s ease-in-out infinite;
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(18px); }
        }
        .animate-float-slow2 {
          animation: float-slow2 14s ease-in-out infinite;
        }
        @keyframes float-slow2 {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.08); }
        }
        .animate-cta-glow {
          animation: cta-glow 3.5s infinite;
        }
        @keyframes cta-glow {
          0%, 100% { box-shadow: 0 0 0 0 #3b82f6aa; }
          50% { box-shadow: 0 0 16px 4px #a21cafcc; }
        }
      `}</style>
    </section>
  );
}
