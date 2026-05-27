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
      icon: <FaBolt className="text-amber-400 text-2xl" />,
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
      icon: <FaChartBar className="text-purple-400 text-2xl" />,
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
      icon: <FaHandshake className="text-indigo-400 text-2xl" />,
    },
  ];

  return (
    <section className="py-24 bg-[#030712] relative overflow-hidden">
      {/* Premium ambient glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-80 h-80 rounded-full blur-[140px] absolute -top-20 -left-20 glow-spot-blue opacity-30 animate-pulse-slow" />
        <div className="w-96 h-96 rounded-full blur-[140px] absolute -bottom-20 -right-20 glow-spot-purple opacity-20 animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <div className="mb-16">
          <p className="inline-flex items-center rounded-full bg-purple-500/10 border border-purple-500/30 px-3.5 py-1 text-xs font-semibold text-purple-300 mb-4 tracking-wide uppercase">
            Pricing Plans
          </p>
          <h2 className="text-4xl sm:text-5xl font-black mb-4 bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent font-heading tracking-tight drop-shadow-md">
            Simple, Transparent Pricing
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto font-medium text-base sm:text-lg leading-relaxed">
            No hidden fees. Custom plans tailored to your scope. 100% money-back guarantee if we don&apos;t deliver.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch mt-10">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: plan.popular ? 1.03 : 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: idx * 0.1, duration: 0.6, type: "spring", stiffness: 100 }}
              whileHover={{ scale: plan.popular ? 1.05 : 1.03 }}
              className={`relative rounded-3xl p-8 shadow-xl backdrop-blur-lg transition-all duration-300 cursor-pointer overflow-visible group flex flex-col justify-between ${
                plan.popular
                  ? "border border-indigo-500/40 bg-slate-900/60 shadow-[0_15px_40px_-15px_rgba(99,102,241,0.25)] z-20 scale-[1.03]"
                  : "border border-white/[0.05] bg-slate-900/35 z-10"
              }`}
            >
              {/* Popular glow ring */}
              {plan.popular && (
                <div className="absolute inset-0 rounded-3xl bg-indigo-500/[0.02] border border-indigo-500/20 blur-sm pointer-events-none z-0" />
              )}

              <div className="relative z-10">
                {plan.popular && (
                  <motion.div
                    initial={{ scale: 0, y: -20 }}
                    animate={{ scale: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="absolute -top-[52px] left-0 right-0 mx-auto w-fit bg-gradient-to-r from-blue-500 to-purple-500 text-white py-1 px-3.5 rounded-full text-xs font-bold shadow-md tracking-wider uppercase"
                  >
                    Most Popular
                  </motion.div>
                )}

                {/* Plan Icon */}
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-2xl bg-slate-950/60 border border-white/[0.08] shadow-inner group-hover:scale-110 group-hover:border-indigo-500/30 transition-all duration-300">
                    {plan.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-1.5 text-white font-heading tracking-wide">{plan.name}</h3>
                <p className="text-slate-400 mb-6 text-sm font-medium leading-relaxed min-h-10">{plan.description}</p>
                <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 mb-6 font-heading tracking-tight">
                  {plan.price}
                </p>

                <ul className="text-left space-y-3 mb-8 min-h-32">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-slate-300 text-sm sm:text-base font-medium">
                      <span className="text-emerald-400 mr-2.5 font-extrabold text-lg leading-none">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative z-10 mt-auto">
                <a
                  href="mailto:clyvos@zohomail.in?subject=Discovery%20Call%20Request"
                  className={`w-full block px-4 py-3.5 rounded-2xl font-bold text-center transition-all duration-200 mt-2 text-sm sm:text-base ${
                    plan.popular
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-[0_4px_16px_rgba(99,102,241,0.3)] hover:shadow-[0_4px_24px_rgba(99,102,241,0.45)] hover:scale-[1.01]"
                      : "bg-white/[0.03] border border-white/10 hover:bg-white/[0.08] hover:border-white/20 text-white"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-xs text-slate-500 mt-10 font-medium">
          💸 100% refund if we don&apos;t meet project scope. Let&apos;s build with confidence.
        </p>
      </div>
    </section>
  );
}
