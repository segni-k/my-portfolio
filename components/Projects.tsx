"use client";

import { FiGithub, FiExternalLink } from "react-icons/fi";
import { SiReact, SiNextdotjs, SiNodedotjs, SiLaravel, SiMongodb, SiFirebase, SiTailwindcss, SiMysql, SiExpress } from "react-icons/si";

const projects = [
  {
    title: "TrackBite",
    subtitle: "Meal Tracking App",
    description: "AI-powered food recognition app with Firebase auth, AWS S3 storage, and SQLite offline sync for seamless meal tracking.",
    icons: [<SiReact key="r" />, <SiFirebase key="f" />, <SiNodedotjs key="n" />],
    tags: ["React Native", "Firebase", "AWS S3", "SQLite"],
    githubLink: "https://github.com/segni-k",
    liveLink: null,
    gradient: "from-[#6C63FF] to-[#8B85FF]",
  },
  {
    title: "Hotel & Restaurant",
    subtitle: "Management System",
    description: "Full management system with reservation, food ordering, and POS features. Modern UI with comprehensive admin dashboard.",
    icons: [<SiNextdotjs key="nx" />, <SiLaravel key="l" />, <SiMysql key="m" />],
    tags: ["Next.js", "Laravel", "MySQL", "Tailwind"],
    githubLink: "https://github.com/segni-k",
    liveLink: null,
    gradient: "from-[#00D4AA] to-[#36CFC9]",
  },
  {
    title: "Movie Streaming",
    subtitle: "Mobile Application",
    description: "Mobile streaming app with smooth video playback, favorites, and personalized recommendations with native-like performance.",
    icons: [<SiReact key="rn" />, <SiNodedotjs key="nd" />, <SiMongodb key="mg" />],
    tags: ["React Native", "Node.js", "MongoDB"],
    githubLink: "https://github.com/segni-k",
    liveLink: null,
    gradient: "from-[#FF6B6B] to-[#FFA940]",
  },
  {
    title: "E-Commerce",
    subtitle: "Full-Stack Platform",
    description: "Modern e-commerce platform with shopping cart, payment integration, admin dashboard, and responsive storefront.",
    icons: [<SiReact key="rc" />, <SiNodedotjs key="ne" />, <SiMongodb key="me" />],
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    githubLink: "https://github.com/segni-k",
    liveLink: null,
    gradient: "from-[#B37FEB] to-[#6C63FF]",
  },
  {
    title: "Business Manager",
    subtitle: "Management Solution",
    description: "Complete business management solution with inventory tracking, POS system, staff management, and analytics reporting.",
    icons: [<SiReact key="rb" />, <SiExpress key="ex" />, <SiMongodb key="mb" />],
    tags: ["React", "Express", "MongoDB"],
    githubLink: "https://github.com/segni-k",
    liveLink: null,
    gradient: "from-[#FFA940] to-[#FF6B6B]",
  },
  {
    title: "Restaurant Website",
    subtitle: "Modern Landing Page",
    description: "Beautiful restaurant website with menu display, online ordering, reservation system, and smooth scroll animations.",
    icons: [<SiNextdotjs key="nxr" />, <SiTailwindcss key="tw" />],
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://github.com/segni-k",
    liveLink: null,
    gradient: "from-[#36CFC9] to-[#00D4AA]",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 px-4 sm:px-6 bg-white dark:bg-[#0F172A]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#6C63FF] font-semibold text-sm tracking-widest uppercase">Portfolio</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-3">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#6C63FF] to-[#00D4AA] mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            A selection of my recent projects showcasing full-stack development and mobile app skills.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-2xl bg-gray-50 dark:bg-[#1E293B] overflow-hidden card-hover"
            >
              {/* Project Header with gradient */}
              <div className={`relative p-6 pb-8 bg-gradient-to-br ${project.gradient}`}>
                <div className="flex items-center gap-2 text-white/80 text-2xl mb-4">
                  {project.icons}
                </div>
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-white/70 text-sm">{project.subtitle}</p>
              </div>

              {/* Content */}
              <div className="p-6 -mt-4">
                <div className="bg-white dark:bg-[#0F172A] rounded-xl p-4 shadow-sm">
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-[#1E293B] text-gray-600 dark:text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-2 border-t border-gray-100 dark:border-[#334155]">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-[#6C63FF] dark:hover:text-[#6C63FF] transition-colors"
                    >
                      <FiGithub size={16} />
                      Code
                    </a>
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-[#00D4AA] dark:hover:text-[#00D4AA] transition-colors"
                      >
                        <FiExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/segni-k"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-medium hover:shadow-xl transition-all hover:scale-105"
          >
            <FiGithub size={20} />
            See All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
