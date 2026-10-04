// ─────────────────────────────────────────────
//  ABOUT SECTION — edit everything here
// ─────────────────────────────────────────────

import { SiReact, SiNextdotjs, SiJavascript, SiTailwindcss, SiFlutter, SiHtml5, SiCss, SiTypescript, SiKotlin, SiGit, SiNodedotjs, SiMysql, SiPostman, SiGithub, SiGitlab, SiBitbucket } from "react-icons/si";
import { TbSql, TbBrandCSharp, TbCloud, TbApi, TbTestPipe, TbDatabase } from "react-icons/tb";

export const SECTION = {
  label: "About Me",
};

export const HEADING = {
  line1: "I'm Fachmy.",
  line2: "Full Stack",
  line3: "Engineer.",
};

// *word* = highlighted/bold in BlurText
export const BIO = [
  "I am a Full Stack Engineer with *6 years of experience* building production applications across frontend, backend, database, and cloud environments.",
  "I create responsive interfaces and reusable UI systems with *React*, *Next.js*, *TypeScript*, and *Tailwind CSS*.",
  "On the backend, I build *C#/.NET* and *ASP.NET Core REST APIs*, service-layer logic, integrations, and secure application workflows.",
  "I also work with *SQL performance tuning*, automated testing, CI/CD, AWS and Linode deployments, and production troubleshooting in Agile teams."
];

export const RESUME_URL = "/resume";

export const TECH = [
  { name: "React",          icon: SiReact },
  { name: "Next.js",        icon: SiNextdotjs },
  { name: "JavaScript",     icon: SiJavascript },
  { name: "TypeScript",     icon: SiTypescript },
  { name: "HTML5",          icon: SiHtml5 },
  { name: "CSS3",           icon: SiCss },
  { name: "Tailwind CSS",   icon: SiTailwindcss },
  { name: "C#",             icon: TbBrandCSharp },
  { name: ".NET",           icon: TbApi },
  { name: "ASP.NET Core",   icon: TbApi },
  { name: "REST APIs",      icon: TbApi },
  { name: "Node.js",        icon: SiNodedotjs },
  { name: "Flutter",        icon: SiFlutter },
  { name: "Kotlin",         icon: SiKotlin },
  { name: "SQL",            icon: TbSql },
  { name: "MySQL",          icon: SiMysql },
  { name: "Data Modeling",  icon: TbDatabase },
  { name: "Git",            icon: SiGit },
  { name: "Postman",        icon: SiPostman },
];

export const CREATIVE = [
  { name: "AWS & Linode",    icon: TbCloud },
  { name: "GitHub",          icon: SiGithub },
  { name: "GitLab",          icon: SiGitlab },
  { name: "Bitbucket",       icon: SiBitbucket },
  { name: "CI/CD",           icon: SiGit },
  { name: "Automated Testing", icon: TbTestPipe },
  { name: "Swagger/OpenAPI", icon: TbApi },
  { name: "Observability",   icon: TbCloud },
];

export const EXPERIENCE = [
  { role: "Full Stack Developer · SolarWave Technology", period: "Sep 2025 – Aug 2026" },
  { role: "Senior Software Engineer · DPOI Solutions", period: "Jan 2024 – Aug 2025" },
  { role: "Software Developer · Navigate360", period: "Mar 2022 – Dec 2023" },
  { role: "Junior Developer · Munika Cipta Teknologi", period: "Jun 2020 – Feb 2022" },
];
