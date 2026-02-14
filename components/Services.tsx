import { FiMonitor, FiSmartphone, FiServer, FiLayout, FiDatabase, FiTrendingUp } from "react-icons/fi";

const services = [
  {
    icon: <FiMonitor size={28} />,
    title: "Web Development",
    description: "Building responsive, modern web applications using React, Next.js, and cutting-edge technologies.",
    color: "#6C63FF",
  },
  {
    icon: <FiSmartphone size={28} />,
    title: "Mobile Development",
    description: "Creating cross-platform mobile apps with React Native that deliver native-like performance.",
    color: "#00D4AA",
  },
  {
    icon: <FiServer size={28} />,
    title: "Backend Development",
    description: "Designing scalable server-side solutions with Node.js, Django, and Laravel with secure REST APIs.",
    color: "#FF6B6B",
  },
  {
    icon: <FiLayout size={28} />,
    title: "UI/UX Design",
    description: "Crafting intuitive, beautiful user interfaces and seamless user experiences with Figma.",
    color: "#FFA940",
  },
  {
    icon: <FiDatabase size={28} />,
    title: "Database Design",
    description: "Architecting efficient database schemas with MySQL, PostgreSQL, and MongoDB for optimal performance.",
    color: "#36CFC9",
  },
  {
    icon: <FiTrendingUp size={28} />,
    title: "API Integration",
    description: "Connecting third-party services, payment gateways, and building robust RESTful & GraphQL APIs.",
    color: "#B37FEB",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 px-4 sm:px-6 bg-gray-50 dark:bg-[#0B1120]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#6C63FF] font-semibold text-sm tracking-widest uppercase">What I Do</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-3">
            My Services
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#6C63FF] to-[#00D4AA] mx-auto mt-4 rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-white dark:bg-[#1E293B] card-hover cursor-default"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all group-hover:scale-110"
                style={{ backgroundColor: `${service.color}15`, color: service.color }}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>
              <div
                className="w-12 h-1 rounded-full mt-6 transition-all group-hover:w-20"
                style={{ backgroundColor: service.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
