"use client";

import { useEffect, useState } from "react";
import { FiX, FiMail, FiSend, FiCheck } from "react-icons/fi";

export default function ContactPopup({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    if (isOpen) {
      setName("");
      setEmail("");
      setReason("");
      setStatus("idle");
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleEmail = async (event) => {
    event.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message: reason }),
      });
      setStatus(response.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  const inputClass = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#ff6b1a]/50 transition-colors duration-200 text-sm";

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-[#0a0a0a] border border-white/10 rounded-3xl p-7 md:p-10 max-w-md w-full shadow-2xl">
        <button onClick={onClose} aria-label="Close contact form" className="absolute top-5 right-5 text-white/30 hover:text-white transition-colors">
          <FiX size={20} />
        </button>

        <div className="flex items-center gap-3 mb-6 mt-1">
          <div className="w-10 h-10 rounded-full bg-[#ff6b1a]/15 text-[#ff6b1a] flex items-center justify-center shrink-0">
            <FiMail size={17} />
          </div>
          <div>
            <h3 className="text-white font-black tracking-tight text-xl">Email Me</h3>
            <p className="text-white/30 text-xs">Send a message directly to my inbox</p>
          </div>
        </div>

        {status === "sent" ? (
          <div className="flex flex-col items-center gap-3 py-8 text-center">
            <div className="w-14 h-14 rounded-full bg-[#ff6b1a]/15 flex items-center justify-center">
              <FiCheck size={24} className="text-[#ff6b1a]" />
            </div>
            <p className="text-white font-bold">Message sent!</p>
            <p className="text-white/35 text-sm">I'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleEmail} className="flex flex-col gap-3">
            <input suppressHydrationWarning className={inputClass} type="text" autoComplete="name" placeholder="Your name" required value={name} onChange={(event) => setName(event.target.value)} />
            <input suppressHydrationWarning className={inputClass} type="email" autoComplete="email" placeholder="Your email" required value={email} onChange={(event) => setEmail(event.target.value)} />
            <textarea suppressHydrationWarning className={`${inputClass} resize-none`} rows={4} placeholder="What's the project about?" required value={reason} onChange={(event) => setReason(event.target.value)} />
            {status === "error" && <p className="text-red-400 text-xs">Something went wrong. Please try again.</p>}
            <button suppressHydrationWarning type="submit" disabled={status === "sending"} className="w-full py-3.5 bg-[#ff6b1a] text-black font-bold rounded-xl text-sm uppercase tracking-widest hover:bg-white transition-colors duration-300 disabled:opacity-50 flex items-center justify-center gap-2 mt-1">
              <FiSend size={14} />
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
