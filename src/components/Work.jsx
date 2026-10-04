"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EXPERIENCE = [
  {
    role: "Full Stack Developer",
    company: "SolarWave Technology LLC",
    period: "Sep 2025 – Aug 2026",
    description: "Built React and Next.js analytics dashboards, ASP.NET Core REST APIs, C# business services, and optimized SQL workflows across AWS and Linode environments.",
    tech: "React · Next.js · TypeScript · C# · ASP.NET Core · SQL",
  },
  {
    role: "Senior Software Engineer",
    company: "DPOI Solutions",
    period: "Jan 2024 – Aug 2025",
    description: "Delivered reusable interfaces, backend APIs, responsive dashboard workflows, automated tests, and database performance improvements for internal and client-facing products.",
    tech: "React · Next.js · .NET · REST APIs · Tailwind CSS · SQL",
  },
  {
    role: "Software Developer",
    company: "Navigate360",
    period: "Mar 2022 – Dec 2023",
    description: "Developed reusable React UI, server-rendered Next.js pages, ASP.NET Core services, relational data models, stored procedures, and full-stack production fixes.",
    tech: "React · TypeScript · Next.js · ASP.NET Core · SQL",
  },
  {
    role: "Junior Developer",
    company: "Munika Cipta Teknologi",
    period: "Jun 2020 – Feb 2022",
    description: "Built React interfaces, TypeScript components, C# endpoints, REST APIs, SQL-backed features, responsive improvements, and cross-layer bug fixes.",
    tech: "React · TypeScript · C# · REST APIs · SQL",
  },
];

export default function Work() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".work-item").forEach((item) => {
        gsap.from(item, {
          scrollTrigger: { trigger: item, start: "top 90%", toggleActions: "play none none none" },
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="work-section" className="relative z-20 flex min-h-screen w-full flex-col justify-center px-6 pb-28 pt-24 md:px-20 md:pb-56 md:pt-48">
      <div className="w-full">
        <header className="mb-14 md:mb-20">
          <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.5em] text-[#ff6b1a]">Professional Experience</p>
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h2 className="font-black leading-none tracking-tighter text-white" style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}>Experience.</h2>
            <div className="flex flex-wrap gap-2 lg:pb-2">
              {["Frontend", "Backend", "Data & Cloud"].map((label) => <span key={label} className="rounded-full border border-white/10 px-4 py-2 text-[10px] font-medium uppercase tracking-widest text-white/40 md:text-xs">{label}</span>)}
            </div>
          </div>
        </header>

        <div className="flex flex-col">
          {EXPERIENCE.map((item, index) => (
            <Link key={item.company} href="/resume" className="work-item group relative flex items-start gap-4 border-b border-white/8 py-10 transition-all duration-500 hover:border-white/20 md:gap-8 md:py-14">
              <div className="absolute bottom-0 left-0 top-0 w-px origin-top scale-y-0 bg-[#ff6b1a] transition-transform duration-500 ease-out group-hover:scale-y-100" />
              <div className="w-8 shrink-0 pl-3 pt-1"><span className="font-mono text-[10px] tracking-widest text-white/20 transition-colors duration-300 group-hover:text-[#ff6b1a]">{String(index + 1).padStart(2, "0")}</span></div>
              <div className="min-w-0 flex-1 transition-transform duration-500 ease-out group-hover:translate-x-1.5">
                <p className="mb-2 text-[10px] font-light uppercase tracking-[0.4em] text-white/30 transition-colors duration-300 group-hover:text-[#ff6b1a]/70">{item.company} · {item.period}</p>
                <h3 className="mb-3 text-xl font-black tracking-tighter text-white md:text-2xl">{item.role}</h3>
                <p className="max-w-3xl text-sm font-light leading-relaxed text-white/35 transition-colors duration-300 group-hover:text-white/60">{item.description}</p>
                <p className="mt-4 font-mono text-[9px] uppercase tracking-wider text-white/20">{item.tech}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-white/20 transition-colors duration-200 group-hover:text-white/55">View Resume <span aria-hidden="true">↗</span></span>
              </div>
              <div className="hidden shrink-0 items-center self-center pr-2 text-white/20 transition-colors duration-300 group-hover:text-[#ff6b1a] md:flex">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><path d="M6 14h16M16 8l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
            </Link>
          ))}

          <Link href="/resume" className="work-item group relative flex items-center gap-4 border-b border-white/8 py-10 transition-all duration-500 hover:border-white/20 md:gap-8 md:py-14">
            <div className="absolute bottom-0 left-0 top-0 w-px origin-top scale-y-0 bg-[#ff6b1a] transition-transform duration-500 ease-out group-hover:scale-y-100" />
            <div className="w-8 shrink-0 pl-3"><span className="font-mono text-[10px] text-white/20 transition-colors group-hover:text-[#ff6b1a]">→</span></div>
            <div className="flex-1 transition-transform duration-500 ease-out group-hover:translate-x-1.5"><p className="mb-2 text-[10px] font-light uppercase tracking-[0.4em] text-white/30 group-hover:text-[#ff6b1a]/70">Complete Career Profile</p><h3 className="text-xl font-black tracking-tighter text-white md:text-2xl">View Full Resume</h3></div>
            <svg className="mr-2 hidden text-white/20 transition-colors group-hover:text-[#ff6b1a] md:block" width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><path d="M6 14h16M16 8l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
