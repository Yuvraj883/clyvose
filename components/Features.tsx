import { FaCode, FaBolt, FaDollarSign, FaChartBar, FaMobileAlt, FaHandshake } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Feature = () => {
  return (
    <section id="features" className="py-24 bg-[#030712] relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px] glow-spot-purple opacity-20 pointer-events-none" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="inline-flex items-center rounded-full bg-indigo-500/10 border border-indigo-500/30 px-3.5 py-1 text-xs font-semibold text-indigo-300 mb-4 tracking-wide uppercase">
            Services & Capabilities
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white font-heading tracking-tight">
            What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">Offer</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto font-medium text-base sm:text-lg leading-relaxed">
            From inception to scale, we engineer powerful digital products tailored for your growth.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="bg-slate-900/35 border border-white/[0.05] backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:border-indigo-500/30 hover:bg-slate-900/50 transition-all duration-300 flex flex-col group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.08, type: 'spring', stiffness: 100 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="mb-5 p-3.5 rounded-2xl bg-slate-950/60 border border-white/[0.08] w-14 h-14 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:border-indigo-500/40 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.25)] transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-white font-heading tracking-wide mb-2 group-hover:text-blue-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed font-medium group-hover:text-slate-300 transition-colors duration-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Feature;

const features = [
  {
    icon: <FaCode className="text-blue-400 text-2xl" />,
    title: 'Full-Stack Development',
    description: 'We build everything—from frontend UI to backend logic. Clean, scalable, and modern tech stacks.',
  },
  {
    icon: <FaBolt className="text-amber-400 text-2xl" />,
    title: 'Fast MVP Turnarounds',
    description: 'Launch your MVP in record time. Lean, functional, beautiful, and investor-ready.',
  },
  {
    icon: <FaDollarSign className="text-emerald-400 text-2xl" />,
    title: 'Startup-Friendly Pricing',
    description: 'Affordable, transparent pricing tailored for early-stage teams without compromising quality.',
  },
  {
    icon: <FaChartBar className="text-purple-400 text-2xl" />,
    title: 'Admin & Dashboard Solutions',
    description: 'Custom internal tools and control panels that fit your business—not the other way around.',
  },
  {
    icon: <FaMobileAlt className="text-pink-400 text-2xl" />,
    title: 'Responsive Design',
    description: 'Beautiful, intuitive experiences designed to engage and perform perfectly on any screen size.',
  },
  {
    icon: <FaHandshake className="text-indigo-400 text-2xl" />,
    title: 'End-to-End Support',
    description: 'From collaborative planning to post-launch handoff, we stay hands-on with absolute transparency.',
  },
];