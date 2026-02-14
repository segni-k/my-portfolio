"use client";

import { FiGithub, FiLinkedin, FiDownload } from "react-icons/fi";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import { HiOutlineArrowDown } from "react-icons/hi";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-[#0F172A] dark:via-[#0F172A] dark:to-[#1a1040] overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#6C63FF]/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00D4AA]/10 rounded-full blur-3xl animate-float-delay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6C63FF]/5 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(108,99,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(108,99,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6C63FF]/10 dark:bg-[#6C63FF]/20 text-[#6C63FF] text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00D4AA] animate-pulse" />
              Available for freelance work
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-[#6C63FF] to-[#00D4AA] bg-clip-text text-transparent">
                Segni
              </span>
            </h1>

            <div className="flex items-center gap-2 justify-center lg:justify-start mb-6">
              <div className="h-[2px] w-8 bg-[#6C63FF]" />
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-300">
                Full-Stack Developer
              </h2>
            </div>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
              I craft modern web &amp; mobile applications with clean code and creative solutions.
              Turning ideas into pixel-perfect, performant digital experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <a
                href="#projects"
                className="group px-7 py-3.5 bg-gradient-to-r from-[#6C63FF] to-[#5A52E0] text-white rounded-xl font-medium hover:shadow-xl hover:shadow-[#6C63FF]/25 transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                View My Work
                <HiOutlineArrowDown className="group-hover:translate-y-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-7 py-3.5 border-2 border-[#6C63FF]/30 text-[#6C63FF] rounded-xl font-medium hover:bg-[#6C63FF]/10 transition-all flex items-center justify-center gap-2"
              >
                <FiDownload size={18} />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 justify-center lg:justify-start">
              {[
                { icon: <FiGithub size={20} />, href: "https://github.com/segni-k", label: "GitHub" },
                { icon: <FiLinkedin size={20} />, href: "https://www.linkedin.com", label: "LinkedIn" },
                { icon: <FaFacebookF size={18} />, href: "https://www.facebook.com/segni.kasahun", label: "Facebook" },
                { icon: <FaTelegramPlane size={20} />, href: "https://t.me/@Sg_boy", label: "Telegram" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-gray-100 dark:bg-[#1E293B] flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-[#6C63FF] hover:text-white dark:hover:bg-[#6C63FF] transition-all hover:scale-110 hover:shadow-lg hover:shadow-[#6C63FF]/25"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Avatar / Visual */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              {/* Spinning ring */}
              <div className="absolute inset-0 w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full border-2 border-dashed border-[#6C63FF]/30 animate-spin-slow" />
              {/* Glow */}
              <div className="absolute inset-4 w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-gradient-to-br from-[#6C63FF] to-[#00D4AA] rounded-full blur-2xl opacity-20" />
              {/* Main avatar */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-gradient-to-br from-[#6C63FF] to-[#00D4AA] rounded-full flex items-center justify-center animate-pulse-glow">
                <span className="text-7xl sm:text-8xl font-bold text-white">SK</span>
              </div>
              {/* Floating badges */}
              <div className="absolute -top-2 -right-2 sm:top-2 sm:right-0 px-3 py-1.5 bg-white dark:bg-[#1E293B] rounded-lg shadow-lg text-sm font-semibold text-[#6C63FF] animate-float-delay">
                React.js
              </div>
              <div className="absolute -bottom-2 -left-2 sm:bottom-4 sm:-left-4 px-3 py-1.5 bg-white dark:bg-[#1E293B] rounded-lg shadow-lg text-sm font-semibold text-[#00D4AA] animate-float-delay-2">
                Next.js
              </div>
              <div className="absolute top-1/2 -right-8 sm:-right-12 px-3 py-1.5 bg-white dark:bg-[#1E293B] rounded-lg shadow-lg text-sm font-semibold text-[#FF6B6B] animate-float">
                Node.js
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center pt-1">
          <div className="w-1 h-2 bg-[#6C63FF] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
