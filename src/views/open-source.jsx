import Image from "next/image";
import Link from "next/link";
import { FiCode, FiDatabase, FiLayers, FiCloud, FiLinkedin, FiMail, FiFileText } from "react-icons/fi";

const highlights = [
  { value: "6", label: "Years Experience" },
  { value: "4", label: "Engineering Roles" },
  { value: "Full", label: "Stack Ownership" },
];

const capabilities = [
  { icon: FiLayers, title: "Frontend Systems", text: "Reusable React and Next.js interfaces with TypeScript, Tailwind CSS, responsive design, accessibility, state management, and performance optimization." },
  { icon: FiCode, title: "Backend Services", text: "C#/.NET and ASP.NET Core REST APIs, service-layer business logic, integrations, authentication, error handling, and production troubleshooting." },
  { icon: FiDatabase, title: "Data Engineering", text: "Relational modeling, SQL queries, stored procedures, data integrity, reporting workflows, and database performance tuning." },
  { icon: FiCloud, title: "Cloud & Delivery", text: "AWS and Linode environments, automated testing, CI/CD pipelines, observability, logging, Git workflows, and release support." },
];

export default function OpenSourceView() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-20 pt-32 md:px-20">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff6b1a]/5 blur-[120px]" />
      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center text-center">
        <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/5"><FiCode size={36} className="text-[#ff6b1a]" /></div>
        <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.5em] text-[#ff6b1a]">Engineering Profile</p>
        <h1 className="mb-6 text-5xl font-black tracking-tighter text-white md:text-7xl">Stack &amp;<br /><span className="text-white/30">Architecture</span></h1>
        <p className="mx-auto mb-10 max-w-2xl text-base font-light leading-relaxed text-white/50 md:text-xl">A practical full-stack toolkit shaped by six years of building production dashboards, reusable UI systems, backend services, APIs, databases, tests, and deployment workflows.</p>

        <section className="mb-6 flex w-full items-center gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-4 text-left">
          <Image src="/photo/fachmy-avatar.svg" alt="Fachmy Faiz Bentra Kabila" width={48} height={48} className="h-12 w-12 rounded-full border border-white/10 object-cover" />
          <div className="min-w-0 flex-1"><p className="text-sm font-bold text-white">Fachmy Faiz Bentra Kabila</p><p className="truncate text-xs text-white/35">Full Stack Engineer · Bandung, Indonesia</p></div>
          <a href="https://www.linkedin.com/in/fachmy-kabila" target="_blank" rel="noopener noreferrer" aria-label="Fachmy Kabila on LinkedIn" className="rounded-full border border-white/10 p-3 text-white/40 transition-colors hover:border-[#ff6b1a]/50 hover:text-[#ff6b1a]"><FiLinkedin size={16} /></a>
        </section>

        <section className="mb-12 grid w-full grid-cols-3 gap-3">{highlights.map(item => <div key={item.label} className="flex flex-col items-center gap-1.5 rounded-2xl border border-white/8 bg-white/[0.03] px-3 py-5"><span className="text-2xl font-black tracking-tighter text-white md:text-3xl">{item.value}</span><span className="text-[8px] font-medium uppercase tracking-[0.28em] text-white/25 md:text-[9px]">{item.label}</span></div>)}</section>

        <div className="mb-16 flex w-full flex-col justify-center gap-4 sm:flex-row">
          <Link href="/resume" className="flex w-full items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-[11px] font-black uppercase tracking-[0.2em] text-black transition-transform duration-300 hover:scale-105 sm:w-auto"><FiFileText size={16} />View Resume</Link>
          <Link href="/contact" className="flex w-full items-center justify-center gap-3 rounded-full border border-[#ff6b1a]/25 bg-[#ff6b1a]/10 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#ff6b1a] transition-colors hover:bg-[#ff6b1a]/20 sm:w-auto"><FiMail size={16} />Contact Fachmy</Link>
        </div>

        <section className="grid w-full grid-cols-1 gap-4 border-t border-white/5 pt-10 text-left md:grid-cols-2">{capabilities.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-3xl border border-white/5 bg-white/[0.02] p-6 transition-colors hover:bg-white/[0.04]"><Icon size={17} className="mb-4 text-[#ff6b1a]" /><h2 className="mb-2 font-bold text-white">{title}</h2><p className="text-sm leading-relaxed text-white/40">{text}</p></article>)}</section>
      </div>
    </main>
  );
}
