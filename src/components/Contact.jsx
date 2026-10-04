"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SECTION } from "@/app/contact/content";

gsap.registerPlugin(ScrollTrigger);

const inputClass = "contact-field w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#ff6b1a]/60 transition-colors duration-300 text-sm";

export default function Contact({ standalone = false }) {
  const ref = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(response.ok ? "sent" : "error");
      if (response.ok) setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  useEffect(() => {
    const context = gsap.context(() => {
      if (standalone) {
        gsap.from(".contact-label", { y: 25, opacity: 0, duration: 0.5, delay: 0.4 });
        gsap.from(".contact-h", { y: 70, opacity: 0, duration: 0.9, ease: "power4.out", delay: 0.6 });
        gsap.from(".contact-field", { y: 35, opacity: 0, stagger: 0.12, duration: 0.65, delay: 0.8 });
        gsap.from(".contact-btn", { y: 20, opacity: 0, duration: 0.5, delay: 1.2 });
        return;
      }

      const timeline = gsap.timeline({
        scrollTrigger: { trigger: ref.current, start: "top bottom", toggleActions: "play none none none", once: true },
      });
      timeline
        .from(".contact-label", { y: 14, opacity: 0, duration: 0.3, ease: "power3.out" })
        .from(".contact-h", { y: 35, opacity: 0, duration: 0.4, ease: "power4.out" }, 0.05)
        .from(".contact-divider", { scaleY: 0, opacity: 0, duration: 0.5, ease: "power3.out" }, 0.1)
        .from(".contact-field", { y: 25, opacity: 0, stagger: 0.08, duration: 0.35, ease: "power3.out" }, 0.18)
        .from(".contact-btn", { y: 15, opacity: 0, duration: 0.3, ease: "power2.out" }, 0.45);

      const refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 300);
      return () => clearTimeout(refreshTimer);
    }, ref);
    return () => context.revert();
  }, [standalone]);

  return (
    <section id="contact-section" ref={ref} className="relative min-h-screen flex flex-col justify-center px-10 md:px-20 pt-24 md:pt-20 pb-24">
      <p className="contact-label text-[10px] text-[#ff6b1a] tracking-[0.5em] uppercase mb-12 font-medium">{SECTION.label}</p>

      <div className="flex flex-col md:flex-row items-stretch gap-0 w-full max-w-7xl min-h-[65vh]">
        <div className="w-full md:w-[42%] pr-0 md:pr-12">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5" aria-label="Contact form">
            <label className="flex flex-col gap-1.5">
              <span className="text-[10px] text-white/30 tracking-[0.3em] uppercase">Name</span>
              <input className={inputClass} type="text" autoComplete="name" placeholder="Your full name" required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-[10px] text-white/30 tracking-[0.3em] uppercase">Email</span>
              <input className={inputClass} type="email" autoComplete="email" placeholder="email@example.com" required value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-[10px] text-white/30 tracking-[0.3em] uppercase">Reason</span>
              <textarea className={`${inputClass} resize-none`} rows={4} placeholder="Tell me what you're working on…" required value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} />
            </label>

            {status === "error" && <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>}
            {status === "sent" ? (
              <p className="contact-btn text-[#ff6b1a] text-sm uppercase tracking-widest font-bold">Message sent — I'll be in touch!</p>
            ) : (
              <button type="submit" disabled={status === "sending"} className="contact-btn w-full font-bold py-4 rounded-full text-sm uppercase tracking-widest transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed bg-[#ff6b1a] text-black hover:bg-[#ff8c42]">
                {status === "sending" ? "Sending…" : "Send Message"}
              </button>
            )}
          </form>
        </div>

        <div className="contact-divider hidden md:block w-px self-stretch bg-white/10 mx-8 origin-top" />

        <div className="w-full md:w-[58%] pl-0 md:pl-6 mt-16 md:mt-0 flex flex-col justify-end text-right">
          <h2 className="contact-h font-black tracking-tighter leading-[0.88]" style={{ fontSize: "clamp(2.6rem, 5.5vw, 6.5rem)" }}>
            <span className="block text-white">Let's build</span>
            <span className="block text-white">something</span>
            <span className="block ghost-orange">cool.</span>
          </h2>
          <p className="contact-label mt-6 text-white/20 text-sm font-light leading-relaxed text-right">Got a project in mind?<br />Drop your details and I'll get back to you.</p>
          <div className="contact-label mt-5 flex flex-wrap justify-end gap-3 text-[10px] uppercase tracking-widest text-white/35">
            <a href="mailto:fachmyfaiz1214@gmail.com" className="hover:text-[#ff6b1a]">fachmyfaiz1214@gmail.com</a><span>•</span>
            <a href="https://www.linkedin.com/in/fachmy-kabila" target="_blank" rel="noreferrer" className="hover:text-[#ff6b1a]">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}
