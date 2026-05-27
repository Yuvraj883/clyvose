import { FaCode, FaBolt, FaDollarSign, FaChartBar, FaMobileAlt, FaHandshake } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Feature = () => {
    return (
      <section id="features" className="py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">
            What We <span className="text-blue-600">Offer</span>
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.1, type: 'spring' }}
                whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(60, 72, 200, 0.15)' }}
              >
                <motion.div
                  className="mb-4 p-3 rounded-full bg-gradient-to-tr from-blue-100 via-white to-indigo-100 w-14 h-14 flex items-center justify-center shadow group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300"
                  whileHover={{ rotate: 12, scale: 1.15 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-700 transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors duration-300">{feature.description}</p>
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
      icon: <FaCode className="text-blue-600 text-3xl" />,
      title: 'Full-Stack Development',
      description: 'We build everything—from frontend UI to backend logic. Clean, scalable, and modern tech stacks.',
    },
    {
      icon: <FaBolt className="text-yellow-500 text-3xl" />,
      title: 'Fast MVP Turnarounds',
      description: 'Launch your MVP in record time. Lean, functional, and investor-ready.',
    },
    {
      icon: <FaDollarSign className="text-green-600 text-3xl" />,
      title: 'Startup-Friendly Pricing',
      description: 'Affordable solutions tailored for early-stage teams without compromising quality.',
    },
    {
      icon: <FaChartBar className="text-purple-600 text-3xl" />,
      title: 'Admin & Dashboard Solutions',
      description: 'Custom dashboards that fit your business—not the other way around.',
    },
    {
      icon: <FaMobileAlt className="text-pink-500 text-3xl" />,
      title: 'Responsive Design',
      description: 'Beautiful, intuitive experiences on any screen—mobile, tablet, or desktop.',
    },
    {
      icon: <FaHandshake className="text-indigo-600 text-3xl" />,
      title: 'End-to-End Support',
      description: 'From planning to launch, we stay hands-on with full transparency.',
    },
  ];