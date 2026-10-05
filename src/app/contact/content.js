// ─────────────────────────────────────────────
//  CONTACT SECTION — edit everything here
// ─────────────────────────────────────────────

import {
  SiReact, SiNextdotjs, SiTailwindcss,
  SiFlutter, SiShopify,
  SiDavinciresolve, SiFigma,
  SiHtml5, SiCss,
  SiGit, SiDocker, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiMysql, SiRedis,
  SiVercel, SiNetlify, SiPostman,
} from "react-icons/si";
import {
  TbCut, TbPhoto, TbCode,
  TbBrandAdobeAfterEffect, TbBrandAdobePremier,
  TbBrandAdobePhotoshop, TbBrandAdobeIllustrator,
} from "react-icons/tb";
import { PROGRAMMING_LANGUAGES } from "@/data/programmingLanguages";

export const SECTION = {
  label: "Get In Touch",
};

// Add / remove countries as needed. code = dial prefix (no +).
export const COUNTRIES = [
  { code: "62",  name: "Indonesia",     flag: "🇮🇩" },
  { code: "91",  name: "India",         flag: "🇮🇳" },
  { code: "1",   name: "US / Canada",   flag: "🇺🇸" },
  { code: "44",  name: "UK",            flag: "🇬🇧" },
  { code: "971", name: "UAE",           flag: "🇦🇪" },
  { code: "966", name: "Saudi Arabia",  flag: "🇸🇦" },
  { code: "974", name: "Qatar",         flag: "🇶🇦" },
  { code: "92",  name: "Pakistan",      flag: "🇵🇰" },
  { code: "880", name: "Bangladesh",    flag: "🇧🇩" },
  { code: "94",  name: "Sri Lanka",     flag: "🇱🇰" },
  { code: "60",  name: "Malaysia",      flag: "🇲🇾" },
  { code: "65",  name: "Singapore",     flag: "🇸🇬" },
  { code: "61",  name: "Australia",     flag: "🇦🇺" },
  { code: "49",  name: "Germany",       flag: "🇩🇪" },
  { code: "33",  name: "France",        flag: "🇫🇷" },
  { code: "39",  name: "Italy",         flag: "🇮🇹" },
  { code: "34",  name: "Spain",         flag: "🇪🇸" },
  { code: "55",  name: "Brazil",        flag: "🇧🇷" },
  { code: "81",  name: "Japan",         flag: "🇯🇵" },
  { code: "82",  name: "South Korea",   flag: "🇰🇷" },
  { code: "86",  name: "China",         flag: "🇨🇳" },
  { code: "7",   name: "Russia",        flag: "🇷🇺" },
];

export const TECH = [
  ...PROGRAMMING_LANGUAGES.map((name) => ({ name, icon: TbCode })),
  { name: "React",          icon: SiReact },
  { name: "Next.js",        icon: SiNextdotjs },
  { name: "HTML5",          icon: SiHtml5 },
  { name: "CSS3",           icon: SiCss },
  { name: "Tailwind CSS",   icon: SiTailwindcss },
  { name: "Node.js",        icon: SiNodedotjs },
  { name: "Express",        icon: SiExpress },
  { name: "Flutter",        icon: SiFlutter },
  { name: "Shopify Liquid", icon: SiShopify },
  { name: "MongoDB",        icon: SiMongodb },
  { name: "PostgreSQL",     icon: SiPostgresql },
  { name: "MySQL",          icon: SiMysql },
  { name: "Redis",          icon: SiRedis },
  { name: "Git",            icon: SiGit },
  { name: "Docker",         icon: SiDocker },
  { name: "Vercel",         icon: SiVercel },
  { name: "Netlify",        icon: SiNetlify },
  { name: "Postman",        icon: SiPostman },
];

export const CREATIVE = [
  { name: "After Effects",   icon: TbBrandAdobeAfterEffect },
  { name: "Premiere Pro",    icon: TbBrandAdobePremier },
  { name: "DaVinci Resolve", icon: SiDavinciresolve },
  { name: "CapCut",          icon: TbCut },
  { name: "Photoshop",       icon: TbBrandAdobePhotoshop },
  { name: "Lightroom",       icon: TbPhoto },
  { name: "Figma",           icon: SiFigma },
  { name: "Illustrator",     icon: TbBrandAdobeIllustrator },
];
