"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const defaultBrands = ["SOLARWAVE TECHNOLOGY", "DPOI SOLUTIONS", "NAVIGATE360", "MUNIKA CIPTA TEKNOLOGI"];

const services = [
  { title: "Frontend Engineering", text: ["I build ", "responsive", " production interfaces and data-heavy dashboards with reusable, accessible component systems."], focus: "React, Next.js, TypeScript, Tailwind CSS, state management, performance.", tags: ["React", "Next.js", "TypeScript", "Tailwind"] },
  { title: "Backend & APIs", text: ["I create ", "reliable", " service-layer logic and REST APIs that support business workflows and frontend applications."], focus: "C#, .NET, ASP.NET Core, integrations, authentication, error handling.", tags: ["C#", ".NET", "ASP.NET Core", "REST APIs"] },
  { title: "Data & Performance", text: ["I improve ", "complex", " data workflows through relational modeling, query tuning, and carefully designed stored procedures."], focus: "SQL, stored procedures, query optimization, data integrity, analytics.", tags: ["SQL", "Data Modeling", "Performance", "Analytics"] },
  { title: "Cloud & Delivery", text: ["I support ", "stable", " releases with automated testing, CI/CD, observability, and hands-on production troubleshooting."], focus: "AWS, Linode, Git workflows, testing, logging, deployment environments.", tags: ["AWS", "CI/CD", "Testing", "Observability"] },
];

const advantages = [
  ["Full-Stack Ownership", "Six years of experience tracing requirements and production issues across UI, API, service, and database layers."],
  ["Reusable Architecture", "Component systems and backend services are structured to reduce duplication and remain easier for teams to extend."],
  ["Performance Focus", "Frontend rendering, API hot paths, SQL queries, and stored procedures are tuned for responsive, data-heavy workflows."],
  ["Production Mindset", "Automated tests, CI/CD checks, observability, logging, and release troubleshooting are part of the delivery process."],
  ["Cross-Team Delivery", "Comfortable collaborating with engineering, design, product, and QA teams through Agile planning and code review."],
];

const process = [
  ["Requirements & Architecture", "I clarify workflows, data requirements, integration points, and the right boundaries between frontend, services, and storage."],
  ["Iterative Development", "Features are delivered in focused increments with reusable React components, typed APIs, and maintainable service logic."],
  ["Testing & Validation", "Unit, integration, regression, API, responsive, and accessibility checks reduce risk before release."],
  ["Deployment & Support", "CI/CD, environment configuration, logs, and production monitoring support a stable launch and fast troubleshooting."],
];

const faqs = [
  ["What roles are you open to?", "I am available for full-stack, frontend, backend, and software engineering opportunities, including remote collaboration."],
  ["What is your primary stack?", "My core stack is React, Next.js, TypeScript, Tailwind CSS, C#/.NET, ASP.NET Core, REST APIs, and SQL."],
  ["Can you work with existing systems?", "Yes. My experience includes application modernization, maintaining established behavior, and improving legacy screens, services, and queries incrementally."],
  ["Do you handle production issues?", "Yes. I trace problems across browser behavior, API logs, service logic, database performance, deployments, and environment configuration."],
  ["Where are you based?", "I am based in Bandung, Indonesia and have worked across remote engineering roles and distributed Agile teams."],
];

function Eyebrow({ children }) {
  return <p className="text-[10px] text-[#ff6b1a] tracking-[0.5em] uppercase mb-5 font-semibold">{children}</p>;
}

export function TrustedBy() {
  const brands = defaultBrands;

  return (
    <section id="brands-section" className="relative z-20 w-full overflow-hidden border-y border-white/5 bg-black/20 py-16 md:py-24">
      <div className="mb-8 flex w-full flex-col justify-between gap-4 px-6 text-left md:mb-10 md:flex-row md:items-end md:px-20">
        <div>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.5em] text-[#ff6b1a]">Professional Experience</p>
          <h2 className="max-w-xl text-xs font-light leading-relaxed text-white/40 md:text-sm">
            Six years delivering <span className="font-serif italic text-white/90">frontend systems</span>, <span className="font-serif italic text-white/90">backend services</span>, and <span className="font-serif italic text-white/90">data-heavy applications</span> across remote and Bandung-based engineering teams.
          </h2>
        </div>
      </div>
      <div className="relative flex w-full items-center overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent, #000 15%, #000 85%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, #000 15%, #000 85%, transparent)" }}>
        <div className="trusted-marquee flex w-max whitespace-nowrap gap-16 py-2 hover:[animation-play-state:paused] md:gap-24">
          {[...brands, ...brands].map((brand, index) => (
            <span key={`${brand}-${index}`} className={`${index % 2 === 0 ? "trusted-logo-solid" : "trusted-logo-outline"} cursor-default select-none text-2xl uppercase tracking-widest md:text-4xl`}>{brand}</span>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes trusted-marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .trusted-marquee {
          animation: trusted-marquee-scroll 25s linear infinite;
        }
        .trusted-logo-solid {
          color: rgba(255, 255, 255, 0.2);
          font-family: var(--font-inter), sans-serif;
          font-weight: 900;
          transition: color 0.3s ease;
        }
        .trusted-logo-solid:hover { color: rgba(255, 255, 255, 0.6); }
        .trusted-logo-outline {
          color: transparent;
          font-family: var(--font-playfair), serif;
          font-style: italic;
          font-weight: 400;
          -webkit-text-stroke: 1.2px rgba(255, 255, 255, 0.25);
          transition: -webkit-text-stroke 0.3s ease;
        }
        .trusted-logo-outline:hover { -webkit-text-stroke: 1.2px rgba(255, 255, 255, 0.65); }
        @media (prefers-reduced-motion: reduce) {
          .trusted-marquee { animation-play-state: paused; }
        }
      `}</style>
    </section>
  );
}

export function Services() {
  const trackPointer = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mouse-x", `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty("--mouse-y", `${event.clientY - bounds.top}px`);
  };

  return (
    <section id="services-section" className="relative z-20 w-full overflow-hidden px-6 py-24 md:px-20 md:py-32">
      <div className="mb-16 md:mb-20">
        <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.5em] text-[#ff6b1a]">What I Do</p>
        <h2 className="font-black leading-none tracking-tighter text-white" style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}>Services.</h2>
      </div>
      <div className="flex flex-col border-t border-white/10">
        {services.map((service, index) => (
          <article key={service.title} onMouseMove={trackPointer} className="service-row group relative w-full overflow-hidden border-b border-white/10 py-12 transition-colors duration-500 hover:bg-white/[0.01] md:py-16">
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "radial-gradient(350px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(255, 107, 26, 0.08), transparent)" }} />
            <div className="absolute bottom-0 left-0 z-10 h-px w-0 bg-[#ff6b1a] transition-all duration-700 ease-out group-hover:w-full" />
            <div className="relative z-10 grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-12">
              <div className={`flex items-baseline gap-4 transition-transform duration-300 ease-out md:col-span-5 md:gap-6 ${index % 2 ? "md:order-2 md:col-start-8 md:justify-end group-hover:-translate-x-2" : "group-hover:translate-x-2"}`}>
                <span className={`font-mono text-xl font-bold text-white/20 transition-colors duration-300 group-hover:text-[#ff6b1a] md:text-2xl ${index % 2 ? "md:order-2" : ""}`}>{String(index + 1).padStart(2, "0")}</span>
                <h3 className={`text-2xl font-black uppercase leading-none tracking-tight text-white md:text-3xl ${index % 2 ? "md:order-1 md:text-right" : ""}`}>{service.title}</h3>
              </div>
              <div className={`flex flex-col gap-4 md:col-span-7 ${index % 2 ? "md:order-1 md:col-start-1" : ""}`}>
                <p className="text-sm font-light leading-relaxed text-white/40 transition-colors duration-300 group-hover:text-white/70 md:text-base">
                  {service.text[0]}<span className="font-serif italic text-white/90">{service.text[1]}</span>{service.text[2]}
                </p>
                <p className="font-mono text-[11px] text-white/30 transition-colors duration-300 group-hover:text-white/50"><span className="mr-2 text-[#ff6b1a]">—</span> Focus: {service.focus}</p>
                <div className="flex flex-wrap gap-1.5">{service.tags.map(tag => <span key={tag} className="rounded-md border border-white/5 bg-white/[0.02] px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest text-white/35">{tag}</span>)}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 sm:flex-row">
        <div className="flex items-center gap-3"><span className="h-2 w-2 animate-pulse rounded-full bg-[#ff6b1a]" /><span className="font-mono text-xs text-white/50">Open to Full Stack Engineering Opportunities</span></div>
        <Link href="/resume" className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:border-[#ff6b1a] hover:bg-[#ff6b1a] hover:text-black">
          <span>View Full Resume</span><span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </section>
  );
}

function NumberedSection({ eyebrow, title, items }) {
  return (
    <section className="relative px-10 md:px-20 py-28 md:py-40 border-t border-white/8">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="max-w-4xl text-4xl md:text-7xl font-black tracking-tighter leading-[0.95] mb-16">{title}</h2>
      <div className="divide-y divide-white/8 border-y border-white/8">
        {items.map(([heading, text], index) => (
          <article key={heading} className="grid md:grid-cols-[90px_1fr_1.5fr] gap-5 py-8 md:py-10 items-start">
            <span className="font-mono text-[10px] text-[#ff6b1a]">{String(index + 1).padStart(2, "0")}</span>
            <h3 className="text-xl font-bold tracking-tight">{heading}</h3>
            <p className="text-white/45 leading-relaxed max-w-2xl">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function WhyChooseMe() {
  return <NumberedSection eyebrow="Why Work With Me" title="The difference is in the execution." items={advantages} />;
}

export function Process() {
  return <NumberedSection eyebrow="How It Works" title="Process." items={process} />;
}

export function Testimonials() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => { fetch("/api/reviews").then(r => r.ok ? r.json() : []).then(setReviews).catch(() => {}); }, []);
  const display = reviews.length ? reviews.slice(0, 3) : [
    { _id: "fallback", name: "Engineering teams", role: "Remote full-stack delivery", text: "Cross-functional delivery spanning responsive UI, dependable APIs, data performance, testing, and production support." },
  ];
  return (
    <section className="relative px-10 md:px-20 py-28 md:py-40 border-t border-white/8">
      <Eyebrow>What Clients Say</Eyebrow>
      <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-14">Testimonials.</h2>
      <div className="grid md:grid-cols-3 gap-4">{display.map((review, index) => (
        <blockquote key={review._id || index} className="p-8 rounded-2xl border border-white/10 bg-white/[0.025]">
          <p className="text-white/60 leading-relaxed mb-8">“{review.text || review.message || review.review}”</p>
          <footer><strong className="block text-sm">{review.name || "Client"}</strong><span className="text-[10px] uppercase tracking-widest text-white/30">{review.role || review.company || "Client project"}</span></footer>
        </blockquote>
      ))}</div>
    </section>
  );
}

export function FAQ() {
  return (
    <section className="relative px-10 md:px-20 py-28 md:py-40 border-t border-white/8">
      <Eyebrow>Questions</Eyebrow>
      <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-14">FAQ.</h2>
      <div className="max-w-5xl divide-y divide-white/10 border-y border-white/10">{faqs.map(([question, answer]) => (
        <details key={question} className="group py-7">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg md:text-xl font-bold"><span>{question}</span><span className="text-[#ff6b1a] group-open:rotate-45 transition-transform">+</span></summary>
          <p className="max-w-3xl pt-5 text-white/45 leading-relaxed">{answer}</p>
        </details>
      ))}</div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="relative px-10 md:px-20 py-28 md:py-44 border-y border-white/8 bg-white/[0.02]">
      <Eyebrow>Next Phase</Eyebrow>
      <h2 className="max-w-5xl text-5xl md:text-8xl font-black tracking-tighter leading-[0.95] mb-8">Ready to build something great?</h2>
      <p className="max-w-2xl text-white/50 text-lg leading-relaxed mb-10">Let’s discuss your objectives, design parameters, and construct a premium web solution built for maximum conversion.</p>
      <div className="flex flex-wrap gap-4"><Link href="/contact" className="px-7 py-4 rounded-full bg-[#ff6b1a] text-black text-[10px] font-black uppercase tracking-widest">Start a Project</Link><Link href="/projects" className="px-7 py-4 rounded-full border border-white/15 text-[10px] font-bold uppercase tracking-widest">View My Work</Link></div>
    </section>
  );
}
