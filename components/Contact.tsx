"use client";

import { useState, FormEvent } from "react";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { FiSend, FiGithub, FiLinkedin } from "react-icons/fi";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xeezlrza", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const contactInfo = [
    {
      icon: <HiOutlineMail size={22} />,
      label: "Email",
      value: "segnikasahun969@gmail.com",
      href: "mailto:segnikasahun969@gmail.com",
      color: "#6C63FF",
    },
    {
      icon: <HiOutlinePhone size={22} />,
      label: "Phone",
      value: "+251 938-699-008",
      href: "tel:+251938699008",
      color: "#00D4AA",
    },
    {
      icon: <HiOutlineLocationMarker size={22} />,
      label: "Location",
      value: "Addis Ababa, Ethiopia",
      href: null,
      color: "#FF6B6B",
    },
  ];

  const socials = [
    { icon: <FiGithub size={20} />, href: "https://github.com/segni-k", label: "GitHub" },
    { icon: <FiLinkedin size={20} />, href: "https://www.linkedin.com", label: "LinkedIn" },
    { icon: <FaFacebookF size={18} />, href: "https://www.facebook.com/segni.kasahun", label: "Facebook" },
    { icon: <FaTelegramPlane size={20} />, href: "https://t.me/@Sg_boy", label: "Telegram" },
  ];

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 bg-gray-50 dark:bg-[#0B1120]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#6C63FF] font-semibold text-sm tracking-widest uppercase">Contact</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-3">
            Let&apos;s Work Together
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#6C63FF] to-[#00D4AA] mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a project in mind? I&apos;d love to hear about it. Drop me a message and let&apos;s create something amazing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-[#1E293B] card-hover">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${info.color}15`, color: info.color }}
                >
                  {info.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wider">{info.label}</p>
                  {info.href ? (
                    <a href={info.href} className="text-sm font-medium text-gray-900 dark:text-white hover:text-[#6C63FF] dark:hover:text-[#6C63FF] transition-colors truncate block">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{info.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#1E293B]">
              <p className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Follow Me</p>
              <div className="flex gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-gray-100 dark:bg-[#0F172A] flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-[#6C63FF] hover:text-white dark:hover:bg-[#6C63FF] transition-all hover:scale-110"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#1E293B]">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <FiSend className="text-[#6C63FF]" size={20} />
                Send a Message
              </h3>

              {status === "success" && (
                <div className="mb-6 p-4 rounded-xl bg-[#00D4AA]/10 text-[#00D4AA] text-sm font-medium flex items-center gap-2">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Message sent successfully! I&apos;ll get back to you soon.
                </div>
              )}

              {status === "error" && (
                <div className="mb-6 p-4 rounded-xl bg-[#FF6B6B]/10 text-[#FF6B6B] text-sm font-medium flex items-center gap-2">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  Something went wrong. Please try again.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-2">Name</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#0F172A] border border-gray-200 dark:border-[#334155] text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#6C63FF] focus:border-transparent transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-2">Email</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="Your email"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#0F172A] border border-gray-200 dark:border-[#334155] text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#6C63FF] focus:border-transparent transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-2">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    required
                    placeholder="What is this about?"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#0F172A] border border-gray-200 dark:border-[#334155] text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#6C63FF] focus:border-transparent transition-all text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#0F172A] border border-gray-200 dark:border-[#334155] text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#6C63FF] focus:border-transparent transition-all text-sm resize-none"
                  />
                </div>

                <input type="text" name="_gotcha" style={{ display: "none" }} />
                <input type="hidden" name="_subject" value="New message from portfolio" />

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full px-7 py-3.5 bg-gradient-to-r from-[#6C63FF] to-[#5A52E0] text-white rounded-xl font-medium hover:shadow-xl hover:shadow-[#6C63FF]/25 transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                >
                  {status === "sending" ? (
                    <>
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
