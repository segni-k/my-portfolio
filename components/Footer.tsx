import { FiGithub, FiLinkedin, FiHeart } from "react-icons/fi";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";

const socials = [
  { icon: <FiGithub size={18} />, href: "https://github.com/segni-k", label: "GitHub" },
  { icon: <FiLinkedin size={18} />, href: "https://www.linkedin.com", label: "LinkedIn" },
  { icon: <FaFacebookF size={16} />, href: "https://www.facebook.com/segni.kasahun", label: "Facebook" },
  { icon: <FaTelegramPlane size={18} />, href: "https://t.me/@Sg_boy", label: "Telegram" },
];

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#0F172A] border-t border-gray-100 dark:border-[#1E293B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top section */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div>
            <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-[#6C63FF] to-[#00D4AA] bg-clip-text text-transparent">
              &lt;SK /&gt;
            </a>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 max-w-xs">
              Full-Stack Developer crafting modern web and mobile experiences from Addis Ababa, Ethiopia.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:text-center">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <div className="flex flex-wrap gap-x-6 gap-y-2 md:justify-center">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-[#6C63FF] dark:hover:text-[#6C63FF] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="md:text-right">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Connect</h4>
            <div className="flex gap-3 md:justify-end">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-[#1E293B] flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-[#6C63FF] hover:text-white dark:hover:bg-[#6C63FF] transition-all hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-gray-100 dark:border-[#1E293B] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Segni Kasahun. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
            Built with <FiHeart className="text-[#FF6B6B]" size={14} /> using Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
