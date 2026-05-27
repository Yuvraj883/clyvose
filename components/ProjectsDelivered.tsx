import Image from "next/image";

const deliveredProjects = [
  {
    name: "Tamana India",
    category: "Brand Website",
    timeline: "Live",
    outcome:
      "Built and launched a clean brand experience focused on product discovery and direct enquiries.",
    impact: "Improved brand presence and lead capture",
    link: "https://www.tamanaindia.com/",
    image: "/tamana-india.png",
  },
  {
    name: "EasilyFamous",
    category: "SaaS Platform",
    timeline: "Live",
    outcome:
      "Delivered a high-conversion SMM service panel experience with clear service discovery and streamlined user flows.",
    impact: "Improved onboarding and order intent",
    link: "https://easilyfamous.com/",
    image: "/easily-famous.png",
  },
  {
    name: "PC-MSIT Placement Portal",
    category: "Education Portal",
    timeline: "Live",
    outcome:
      "Executed full placement process digitalisation for Maharaja Surajmal Institute of Technology, covering student, coordinator, and placement workflows.",
    impact: "End-to-end placement operations moved online",
    link: "https://placement.msit.in/sign-in",
    image: "/pc-msit.png",
  },
];

export default function ProjectsDelivered() {
  return (
    <section id="projects-delivered" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="inline-flex items-center rounded-full bg-blue-50 border border-blue-100 px-4 py-1 text-sm font-medium text-blue-700 mb-4">
            Results You Can Trust
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Projects Delivered
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A snapshot of recent product and platform work shipped by Clyvos
            for fast-moving teams.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {deliveredProjects.map((project) => (
            <article
              key={project.name}
              className="rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 p-6 bg-gradient-to-br from-white to-blue-50/40"
            >
              <div className="mb-4 overflow-hidden rounded-xl border border-blue-100 bg-white">
                <Image
                  src={project.image}
                  alt={`${project.name} screenshot`}
                  width={1200}
                  height={675}
                  className="w-full h-44 object-cover"
                />
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-blue-700 bg-blue-100 px-2.5 py-1 rounded-full">
                  {project.category}
                </span>
                <span className="text-xs font-medium text-gray-500">
                  {project.timeline}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {project.name}
              </h3>
              <p className="text-sm text-gray-600 leading-6 mb-4">
                {project.outcome}
              </p>
              <p className="text-sm font-semibold text-green-700 bg-green-50 border border-green-100 rounded-lg px-3 py-2">
                {project.impact}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900"
              >
                View live website
                <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
