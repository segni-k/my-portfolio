"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { BsSun, BsMoonStars } from "react-icons/bs";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-[#0F172A]/90 backdrop-blur-md shadow-lg shadow-black/5 dark:shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <a href="#home" className="relative group">
            <span className="text-2xl font-bold bg-gradient-to-r from-[#6C63FF] to-[#00D4AA] bg-clip-text text-transparent">
              &lt;SK /&gt;
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-[#6C63FF] dark:hover:text-[#6C63FF] rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="relative w-10 h-10 rounded-xl bg-gray-100 dark:bg-[#1E293B] flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-[#6C63FF] dark:hover:text-[#6C63FF] transition-all hover:scale-110"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <BsSun size={18} /> : <BsMoonStars size={18} />}
            </button>

            <a
              href="#contact"
              className="hidden sm:inline-flex px-5 py-2.5 text-sm font-medium bg-gradient-to-r from-[#6C63FF] to-[#5A52E0] text-white rounded-xl hover:shadow-lg hover:shadow-[#6C63FF]/25 transition-all hover:scale-105"
            >
              Let&apos;s Talk
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 rounded-xl bg-gray-100 dark:bg-[#1E293B] flex items-center justify-center text-gray-600 dark:text-gray-400"
              aria-label="Toggle menu"
            >
              {isOpen ? <HiX size={20} /> : <HiOutlineMenuAlt3 size={20} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white dark:bg-[#0F172A] border-t border-gray-100 dark:border-[#334155] px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-[#1E293B] hover:text-[#6C63FF] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 mt-2 text-center font-medium bg-gradient-to-r from-[#6C63FF] to-[#5A52E0] text-white rounded-xl"
          >
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </nav>
  );
}
