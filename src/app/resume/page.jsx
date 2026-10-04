import PageShell from "@/components/PageShell";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Resume | Fachmy Faiz Bentra Kabila — Full Stack Engineer",
  description: "Professional experience, technical skills, education, and contact information for Fachmy Faiz Bentra Kabila, a Full Stack Engineer in Bandung, Indonesia.",
};

const experience = [
  { role: "Full Stack Developer", company: "SolarWave Technology LLC", location: "Remote", period: "Sep 2025 – Aug 2026", summary: "Built React and Next.js analytics dashboards, ASP.NET Core REST APIs, C# business services, and optimized SQL queries and stored procedures. Supported AWS and Linode deployments, automated testing, CI/CD, observability, and full-stack production troubleshooting." },
  { role: "Senior Software Engineer", company: "DPOI Solutions", location: "Remote", period: "Jan 2024 – Aug 2025", summary: "Delivered reusable React and Next.js interfaces, C#/.NET APIs, responsive Tailwind layouts, and data-heavy dashboards. Improved SQL models and query performance while contributing automated tests, API validation, code review, and Agile delivery." },
  { role: "Software Developer", company: "Navigate360", location: "Remote", period: "Mar 2022 – Dec 2023", summary: "Developed reusable React and TypeScript UI, server-rendered Next.js pages, ASP.NET Core REST services, relational data models, and stored procedures. Traced and resolved issues across frontend, API, and database layers." },
  { role: "Junior Developer", company: "Munika Cipta Teknologi", location: "Bandung, Indonesia", period: "Jun 2020 – Feb 2022", summary: "Built and maintained React interfaces, TypeScript components, C# endpoints, REST APIs, and SQL-backed application features. Contributed testing, Git-based reviews, responsive optimization, and full-stack bug fixes." },
];

const skillGroups = [
  ["Frontend", ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Responsive UI", "Accessibility", "State Management"]],
  ["Backend", ["C#", ".NET", "ASP.NET Core", "REST APIs", "Business Logic", "Integrations", "Authentication", "API Security"]],
  ["Data & Cloud", ["SQL", "Data Modeling", "Stored Procedures", "Query Optimization", "AWS", "Linode", "Observability", "Logging"]],
  ["Delivery", ["Unit Testing", "Integration Testing", "CI/CD", "Git", "GitHub", "GitLab", "Bitbucket", "Postman", "Swagger/OpenAPI", "Agile"]],
  ["Mobile", ["Flutter", "Android", "Kotlin", "Mobile APIs", "Cross-Platform Support"]],
];

export default function ResumePage() {
  return (
    <PageShell>
      <article className="mx-auto min-h-screen max-w-6xl px-6 pb-28 pt-40 md:px-10">
        <p className="mb-5 text-[10px] uppercase tracking-[0.45em] text-[#ff6b1a]">Resume · Full Stack Engineer</p>
        <h1 className="mb-8 text-5xl font-black leading-[0.85] tracking-tighter md:text-8xl">Fachmy Faiz<br className="hidden md:block" /> Bentra Kabila<span className="text-[#ff6b1a]">.</span></h1>
        <p className="mb-12 max-w-4xl text-lg leading-relaxed text-white/55 md:text-2xl">Full Stack Engineer with six years of experience delivering React and Next.js interfaces, C#/.NET backend services, REST APIs, SQL-backed workflows, automated testing, and production deployments.</p>
        <div className="grid gap-8 border-y border-white/10 py-10 md:grid-cols-3">
          <section><h2 className="mb-4 text-xs uppercase tracking-[0.35em] text-white/35">Contact</h2><a href="mailto:fachmyfaiz1214@gmail.com" className="break-all text-[#ff6b1a]">fachmyfaiz1214@gmail.com</a><a href="tel:+6285795023995" className="mt-2 block text-white/55">+62 857-9502-3995</a></section>
          <section><h2 className="mb-4 text-xs uppercase tracking-[0.35em] text-white/35">Location</h2><p className="text-white/65">Bandung, Indonesia</p><p className="mt-2 text-sm text-white/35">Available for remote engineering roles</p></section>
          <section><h2 className="mb-4 text-xs uppercase tracking-[0.35em] text-white/35">LinkedIn</h2><a href="https://www.linkedin.com/in/fachmy-kabila" target="_blank" rel="noreferrer" className="text-white/65 hover:text-[#ff6b1a]">linkedin.com/in/fachmy-kabila</a></section>
        </div>
        <section className="py-14"><h2 className="mb-8 text-xs uppercase tracking-[0.35em] text-[#ff6b1a]">Professional Experience</h2><div className="divide-y divide-white/10 border-y border-white/10">{experience.map((item, index) => <article key={item.company} className="grid gap-5 py-8 md:grid-cols-[70px_1fr_2fr] md:gap-8"><span className="font-mono text-xs text-[#ff6b1a]">{String(index + 1).padStart(2, "0")}</span><div><h3 className="font-bold text-white">{item.role}</h3><p className="mt-1 text-sm text-white/45">{item.company}</p><p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-white/25">{item.location} · {item.period}</p></div><p className="max-w-3xl text-sm leading-relaxed text-white/45">{item.summary}</p></article>)}</div></section>
        <section className="border-t border-white/10 py-14"><h2 className="mb-8 text-xs uppercase tracking-[0.35em] text-[#ff6b1a]">Technical Skills</h2><div className="grid gap-8 md:grid-cols-2">{skillGroups.map(([group, skills]) => <div key={group}><h3 className="mb-4 font-bold">{group}</h3><div className="flex flex-wrap gap-2">{skills.map(skill => <span key={skill} className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] text-white/50">{skill}</span>)}</div></div>)}</div></section>
        <section className="border-t border-white/10 py-14"><h2 className="mb-6 text-xs uppercase tracking-[0.35em] text-[#ff6b1a]">Education</h2><h3 className="text-xl font-bold">Bachelor of Computer Science</h3><p className="mt-2 text-white/50">Telkom University · Bandung</p><p className="mt-1 font-mono text-xs text-white/30">2015 – 2019</p></section>
      </article>
      <Footer />
    </PageShell>
  );
}
