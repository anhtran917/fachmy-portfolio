"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { SECTION } from "@/app/contact/content";
import GradientBlinds from "@/components/GradientBlinds";

const inputClass = "cp-field w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#ff6b1a]/60 transition-colors duration-300 text-sm";

export default function ContactPage() {
  const ref = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
        return;
      }

      const data = await response.json().catch(() => ({}));
      setStatus("error");
      setErrorMessage(data.error || "Something went wrong. Please try again.");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".cp-label", { y: 25, opacity: 0, duration: 0.5, delay: 0.4 });
      gsap.from(".cp-heading", { y: 70, opacity: 0, duration: 0.9, ease: "power4.out", delay: 0.6 });
      gsap.from(".cp-field", { y: 35, opacity: 0, stagger: 0.12, duration: 0.65, delay: 0.8 });
      gsap.from(".cp-btn", { y: 20, opacity: 0, duration: 0.5, delay: 1.2 });
    }, ref);
    return () => context.revert();
  }, []);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-center px-6 md:px-20 pt-24 md:pt-20 pb-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <GradientBlinds gradientColors={["#000000", "#ff6b1a", "#111111"]} angle={45} noise={0.2} blindCount={12} blindMinWidth={50} spotlightRadius={0.7} spotlightSoftness={1.5} spotlightOpacity={0.6} mixBlendMode="screen" />
      </div>

      <p className="cp-label relative z-10 text-[10px] text-[#ff6b1a] tracking-[0.5em] uppercase mb-8 md:mb-12 font-semibold">{SECTION.label}</p>

      <div className="md:hidden mb-8 relative z-10">
        <h1 className="cp-heading font-black tracking-tighter leading-[0.88]" style={{ fontSize: "clamp(2.8rem, 12vw, 4rem)" }}>
          <span className="block text-white">Let's build</span>
          <span className="block text-white">something</span>
          <span className="block ghost-orange">cool.</span>
        </h1>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-stretch gap-0 w-full max-w-7xl min-h-[65vh]">
        <div className="w-full md:w-[42%] pr-0 md:pr-12">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5" aria-label="Contact form">
            <label className="flex flex-col gap-1.5">
              <span className="text-[10px] text-white/60 tracking-[0.3em] uppercase">Name</span>
              <input className={inputClass} type="text" autoComplete="name" placeholder="Your full name" required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-[10px] text-white/60 tracking-[0.3em] uppercase">Email</span>
              <input className={inputClass} type="email" autoComplete="email" placeholder="email@example.com" required value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-[10px] text-white/60 tracking-[0.3em] uppercase">Reason</span>
              <textarea className={`${inputClass} resize-none`} rows={4} placeholder="Tell me what you're working on…" required value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} />
            </label>

            {status === "error" && <p className="text-red-400 text-sm">{errorMessage}</p>}
            {status === "sent" ? (
              <p className="cp-btn text-[#ff6b1a] text-sm uppercase tracking-widest font-bold">Message sent — I'll be in touch!</p>
            ) : (
              <button type="submit" disabled={status === "sending"} className="cp-btn w-full font-bold py-4 rounded-full text-sm uppercase tracking-widest transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed bg-[#ff6b1a] text-black hover:bg-[#ff8c42]">
                {status === "sending" ? "Sending…" : "Send Message"}
              </button>
            )}
          </form>
        </div>

        <div className="hidden md:block w-px self-stretch bg-white/10 mx-8" />

        <div className="hidden md:flex w-full md:w-[58%] pl-0 md:pl-6 mt-16 md:mt-0 flex-col justify-end text-right">
          <h1 className="cp-heading font-black tracking-tighter leading-[0.88]" style={{ fontSize: "clamp(2.6rem, 5.5vw, 6.5rem)" }}>
            <span className="block text-white">Let's build</span>
            <span className="block text-white">something</span>
            <span className="block ghost-orange">cool.</span>
          </h1>
          <p className="cp-label mt-6 text-white/20 text-sm font-light leading-relaxed text-right">Got a project in mind?<br />Drop your details and I'll get back to you.</p>
          <div className="cp-label mt-5 flex flex-wrap justify-end gap-3 text-[10px] uppercase tracking-widest text-white/35">
            <a href="mailto:fachmyfaiz1214@gmail.com" className="hover:text-[#ff6b1a]">fachmyfaiz1214@gmail.com</a><span>•</span>
            <a href="https://www.linkedin.com/in/fachmy-kabila" target="_blank" rel="noreferrer" className="hover:text-[#ff6b1a]">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}
