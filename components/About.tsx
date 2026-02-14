import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { FiCode, FiLayers, FiSmartphone, FiUsers } from "react-icons/fi";

export default function About() {
  const stats = [
    { icon: <FiCode size={24} />, value: "50+", label: "Projects Done" },
    { icon: <FiUsers size={24} />, value: "30+", label: "Happy Clients" },
    { icon: <FiLayers size={24} />, value: "5+", label: "Years Experience" },
    { icon: <FiSmartphone size={24} />, value: "10+", label: "Mobile Apps" },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 bg-white dark:bg-[#0F172A]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#6C63FF] font-semibold text-sm tracking-widest uppercase">About Me</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-3">
            Get To Know Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#6C63FF] to-[#00D4AA] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Visual */}
          <div className="relative flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl bg-gradient-to-br from-[#6C63FF] to-[#00D4AA] flex items-center justify-center text-white text-7xl sm:text-8xl font-bold rotate-3 hover:rotate-0 transition-transform duration-500">
                SK
              </div>
              {/* Decorative dots */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 grid grid-cols-4 gap-1.5">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-[#6C63FF]/30" />
                ))}
              </div>
              {/* Experience badge */}
              <div className="absolute -top-4 -right-4 px-4 py-3 bg-white dark:bg-[#1E293B] rounded-xl shadow-xl">
                <p className="text-2xl font-bold text-[#6C63FF]">5+</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Years Exp.</p>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Segni Kasahun
            </h3>
            <p className="text-[#6C63FF] font-semibold mb-6">Full-Stack Developer</p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              I am a passionate full-stack developer proficient in crafting robust and user-friendly web
              and mobile applications. My expertise spans front-end technologies like React.js, Next.js
              and back-end frameworks such as Django, Laravel and Node.js. I&apos;m a strong advocate for
              clean code, agile methodologies, and continuous learning.
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-[#1E293B]">
                <HiOutlineMail className="text-[#6C63FF] flex-shrink-0" size={20} />
                <div className="min-w-0">
                  <p className="text-xs text-gray-500 dark:text-gray-500">Email</p>
                  <p className="text-sm text-gray-900 dark:text-white truncate">segnikasahun969@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-[#1E293B]">
                <HiOutlinePhone className="text-[#6C63FF] flex-shrink-0" size={20} />
                <div className="min-w-0">
                  <p className="text-xs text-gray-500 dark:text-gray-500">Phone</p>
                  <p className="text-sm text-gray-900 dark:text-white">+251 938-699-008</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-[#1E293B]">
                <HiOutlineLocationMarker className="text-[#6C63FF] flex-shrink-0" size={20} />
                <div className="min-w-0">
                  <p className="text-xs text-gray-500 dark:text-gray-500">Location</p>
                  <p className="text-sm text-gray-900 dark:text-white">Addis Ababa, Ethiopia</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-[#1E293B]">
                <div className="w-2 h-2 rounded-full bg-[#00D4AA] flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs text-gray-500 dark:text-gray-500">Status</p>
                  <p className="text-sm text-[#00D4AA] font-semibold">Available for Freelance</p>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#6C63FF] to-[#5A52E0] text-white rounded-xl font-medium hover:shadow-xl hover:shadow-[#6C63FF]/25 transition-all hover:scale-105"
            >
              <HiOutlineMail size={18} />
              Get In Touch
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((stat, i) => (
            <div key={i} className="text-center p-6 rounded-2xl bg-gray-50 dark:bg-[#1E293B] card-hover">
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-[#6C63FF]/10 dark:bg-[#6C63FF]/20 flex items-center justify-center text-[#6C63FF]">
                {stat.icon}
              </div>
              <h4 className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
