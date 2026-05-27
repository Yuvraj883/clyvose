import Image from "next/image";
import { motion } from "framer-motion";

const deliveredProjects = [
  {
    name: "Tamana India",
    category: "Brand Website",
    timeline: "Live",
    outcome:
      "Built and launched a clean brand experience focused on product discovery and direct enquiries.",
    impact: "⚡ Improved brand presence and lead capture",
    link: "https://www.tamanaindia.com/",
    image: "/tamana-india.png",
  },
  {
    name: "EasilyFamous",
    category: "SaaS Platform",
    timeline: "Live",
    outcome:
      "Delivered a high-conversion SMM service panel experience with clear service discovery and streamlined user flows.",
    impact: "📈 Improved onboarding and order intent",
    link: "https://easilyfamous.com/",
    image: "/easily-famous.png",
  },
  {
    name: "PC-MSIT Placement Portal",
    category: "Education Portal",
    timeline: "Live",
    outcome:
      "Executed full placement process digitalisation for Maharaja Surajmal Institute of Technology, covering student, coordinator, and placement workflows.",
    impact: "🚀 End-to-end placement operations moved online",
    link: "https://placement.msit.in/sign-in",
    image: "/pc-msit.png",
  },
];

export default function ProjectsDelivered() {
  return (
    <section id="projects-delivered" className="py-24 bg-[#030712] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-10 w-[500px] h-[500px] rounded-full blur-[140px] glow-spot-blue opacity-25" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="inline-flex items-center rounded-full bg-blue-500/10 border border-blue-500/30 px-4 py-1 text-xs font-semibold text-blue-300 mb-4 tracking-wide uppercase">
            Results You Can Trust
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white font-heading tracking-tight">
            Projects Delivered
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto font-medium text-base sm:text-lg leading-relaxed">
            A curated snapshot of high-performance products and platforms shipped by Clyvos for fast-moving teams.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {deliveredProjects.map((project, idx) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: idx * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ y: -8 }}
              className="relative rounded-3xl border border-white/[0.05] p-6 bg-slate-900/30 backdrop-blur-lg shadow-xl hover:border-indigo-500/30 hover:bg-slate-900/50 hover:shadow-2xl transition-all duration-300 group flex flex-col"
            >
              {/* Logo frame */}
              <div className="absolute -top-4 -left-3.5 z-10 w-11 h-11 rounded-full border border-white/10 bg-slate-950 shadow-[0_4px_24px_rgba(99,102,241,0.25)] p-1.5 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="Clyvos logo"
                  width={40}
                  height={40}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="mb-5 overflow-hidden rounded-2xl border border-white/[0.08] bg-slate-950 shadow-inner group-hover:border-indigo-500/20 transition-colors duration-300">
                <Image
                  src={project.image}
                  alt={`${project.name} screenshot`}
                  width={1200}
                  height={675}
                  className="w-full h-44 object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold tracking-wide uppercase text-blue-300 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-full">
                  {project.category}
                </span>
                <span className="text-xs font-semibold text-slate-400">
                  {project.timeline}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white font-heading tracking-wide mb-3 group-hover:text-blue-400 transition-colors duration-300">
                {project.name}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-5 flex-grow">
                {project.outcome}
              </p>
              <div className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/15 rounded-xl px-3.5 py-3 shadow-inner leading-relaxed">
                {project.impact}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-indigo-400 hover:text-indigo-300 group-hover:underline transition-colors w-fit"
              >
                View live website
                <span className="inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true">↗</span>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
