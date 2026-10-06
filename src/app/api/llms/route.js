import { NextResponse } from "next/server";
import { PROGRAMMING_LANGUAGES } from "@/data/programmingLanguages";

export async function GET() {
  const website = "https://fachmy-portfolio.pages.dev";

  const data = {
    name: "Fachmy Faiz Bentra Kabila",
    title: "Full Stack Engineer",
    website,
    email: "fachmyfaiz1214@gmail.com",
    location: "Bandung, Indonesia",
    available_for_hire: true,
    summary:
      "Fachmy is a Full Stack Engineer with six years of experience building production applications across frontend, backend, database, mobile, and cloud environments.",
    services: [
      {
        name: "Frontend Engineering",
        description: "Responsive React and Next.js applications, reusable UI systems, accessibility, and performance optimization.",
      },
      {
        name: "Backend Engineering",
        description: "C#/.NET and ASP.NET Core services, REST APIs, integrations, authentication, and secure workflows.",
      },
      {
        name: "Data and Cloud",
        description: "SQL data modeling, stored procedures, query optimization, AWS, Linode, observability, and production support.",
      },
      {
        name: "Mobile Engineering",
        description: "Flutter, Android, Kotlin, Swift, Dart, and cross-platform mobile delivery.",
      },
    ],
    skills: {
      programming_languages: PROGRAMMING_LANGUAGES,
      frontend: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "GSAP", "Three.js", "WebGL"],
      backend: ["Node.js", "Express", ".NET", "ASP.NET Core", "REST APIs"],
      mobile: ["Flutter", "Android", "Kotlin", "Dart", "Swift"],
      database: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Supabase"],
      devops: ["Git", "GitHub", "GitLab", "Bitbucket", "Docker", "AWS", "Linode", "CI/CD"],
    },
    experience: [
      { role: "Full Stack Developer", company: "SolarWave Technology LLC", period: "Sep 2025–Aug 2026" },
      { role: "Senior Software Engineer", company: "DPOI Solutions", period: "Jan 2024–Aug 2025" },
      { role: "Software Developer", company: "Navigate360", period: "Mar 2022–Dec 2023" },
      { role: "Junior Developer", company: "Munika Cipta Teknologi", period: "Jun 2020–Feb 2022" },
    ],
    education: {
      degree: "Bachelor of Computer Science",
      institution: "Telkom University",
      location: "Bandung, Indonesia",
      period: "2015–2019",
    },
    pages: {
      home: `${website}/`,
      about: `${website}/about`,
      resume: `${website}/resume`,
      projects: `${website}/projects`,
      services: `${website}/services`,
      blog: `${website}/blog`,
      contact: `${website}/contact`,
    },
    llms_txt: `${website}/llms.txt`,
    llms_full_txt: `${website}/llms-full.txt`,
  };

  return NextResponse.json(data, {
    headers: {
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
      "Content-Type": "application/json",
    },
  });
}
