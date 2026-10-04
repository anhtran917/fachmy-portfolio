"use client";

import { useState } from "react";
import Link from "next/link";

const tabs = [
  ["all", "All Services & Tools"],
  ["tools", "Free Creator Utilities"],
  ["bespoke", "Client Engineering & Design"],
];

const utilities = [
  { badge: "PRO 4.0", badgeClass: "border-[#ff6b1a]/40 bg-[#ff6b1a]/20 text-[#ff6b1a]", title: "QR Code Studio", description: "Generate custom, high-resolution vector & raster QR codes with custom styling, logos, and frame banners.", tags: ["Instant Vector SVG", "Level H ECC", "Custom Logos", "Dot Shapes", "Gradients"] },
  { badge: "CLIENT-SIDE", badgeClass: "border-white/20 bg-white/10 text-white", title: "PDF Studio Suite", description: "Convert images to PDF, generate branded client invoices, format Markdown documents, and apply security watermarks.", tags: ["Images to PDF", "Invoice Maker", "Markdown Doc", "Watermarker", "100% Private"] },
  { badge: "CSS UTILITY", badgeClass: "border-purple-500/40 bg-purple-500/20 text-purple-400", title: "Cyber Gradient & Mesh Lab", description: "Design glowing modern dark-mode gradient palettes, CSS mesh glows, and radial lighting with 1-click CSS copying.", tags: ["CSS Tokens", "Radial Mesh", "Dark Mode", "Copy CSS"] },
  { badge: "DEV TOOL", badgeClass: "border-blue-500/40 bg-blue-500/20 text-blue-400", title: "Social Card & Meta Inspector", description: "Simulate how your URL looks when shared on Twitter/X, WhatsApp, LinkedIn, iMessage, and Discord.", tags: ["OpenGraph", "Twitter Cards", "Meta Tags", "Instant Check"] },
];

const clientServices = [
  { title: "Shopify & E-Commerce Engineering", description: "Custom Liquid & Hydrogen theme development, lightning-fast cart architectures, conversion-focused product pages, and checkout integrations.", deliverables: "Bespoke storefronts, speed optimization, cart drawers, third-party integrations.", tags: ["Shopify Plus", "Liquid", "Hydrogen", "Conversion Rate", "Custom Apps"] },
  { title: "Next.js & Full-Stack Web Apps", description: "Production-ready web applications built with Next.js 15, React 19, Supabase, and TailwindCSS. Engineered for sub-second speeds and top SEO scores.", deliverables: "High-performance apps, custom CMS, interactive dashboards, Edge APIs.", tags: ["Next.js 15", "React 19", "Supabase", "TypeScript", "TailwindCSS"] },
  { title: "UI/UX & Design Systems", description: "Modern digital interfaces crafted in Figma with comprehensive component libraries, interactive design systems, and responsive layouts.", deliverables: "Wireframes, hi-fi mockups, design tokens, interactive micro-interactions.", tags: ["Figma", "Design Systems", "Prototyping", "User Journeys"] },
  { title: "Interactive 3D & Motion Graphics", description: "GSAP scroll animations, Three.js shaders, WebGL interactive elements, and video post-production that elevate brand perception.", deliverables: "Smooth scroll experiences, 3D product visualizers, cinematic landing pages.", tags: ["GSAP", "Three.js", "WebGL", "Framer Motion", "Video Editing"] },
];

export default function ServicesCatalog() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <main className="relative min-h-screen overflow-hidden px-4 pb-32 pt-28 text-white selection:bg-[#ff6b1a] selection:text-black md:px-12 lg:px-20">
      <div className="pointer-events-none fixed left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-[#ff6b1a]/5 blur-[180px]" />
      <div className="pointer-events-none fixed bottom-1/4 right-1/4 h-[600px] w-[600px] rounded-full bg-orange-600/5 blur-[200px]" />

      <header className="relative mx-auto mb-16 max-w-7xl md:mb-20">
        <div className="mb-4 flex items-center gap-3">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-[#ff6b1a]">Services &amp; Utilities</span>
          <span className="h-px w-8 bg-[#ff6b1a]/40" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">Always Fast &amp; Free</span>
        </div>
        <h1 className="font-black uppercase leading-none tracking-tighter text-white" style={{ fontSize: "clamp(2.8rem, 8vw, 6.5rem)" }}>Services <span className="text-[#ff6b1a]">.</span></h1>
        <p className="mt-4 max-w-3xl text-sm font-light leading-relaxed text-white/50 md:text-base">Explore free creative developer tools built for speed and privacy, alongside bespoke engineering services for e-commerce, high-performance web applications, and interactive brand experiences.</p>
        <div className="scrollbar-hide mt-8 flex items-center gap-2 overflow-x-auto border-b border-white/10 pb-4">
          {tabs.map(([id, label]) => <button key={id} type="button" onClick={() => setActiveTab(id)} className={`whitespace-nowrap rounded-xl px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all ${activeTab === id ? "bg-[#ff6b1a] font-bold text-black shadow-lg shadow-[#ff6b1a]/20" : "border border-white/5 bg-white/[0.03] text-white/60 hover:bg-white/[0.08] hover:text-white"}`}>{label}</button>)}
        </div>
      </header>

      {(activeTab === "all" || activeTab === "tools") && <section className="relative mx-auto mb-24 max-w-7xl">
        <div className="mb-8">
          <p className="font-mono text-xs uppercase tracking-widest text-[#ff6b1a]">Instant • Browser-Powered • 100% Private</p>
          <h2 className="mt-1 text-2xl font-black uppercase tracking-tight md:text-3xl">Free Creator &amp; Dev Utilities</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {utilities.map((utility) => <article key={utility.title} className="service-card group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-[#ff6b1a]/50 hover:bg-white/[0.04]">
            <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-[#ff6b1a]/10 blur-3xl transition-transform duration-700 group-hover:scale-150" />
            <div className="relative">
              <div className="mb-6 flex items-center justify-between"><div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-lg transition-all group-hover:border-[#ff6b1a] group-hover:text-[#ff6b1a]">✦</div><div className="flex items-center gap-2"><span className={`rounded-full border px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider ${utility.badgeClass}`}>{utility.badge}</span><span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 transition-all group-hover:bg-[#ff6b1a] group-hover:text-black">↗</span></div></div>
              <h3 className="mb-3 text-2xl font-black uppercase tracking-tight transition-colors group-hover:text-[#ff6b1a]">{utility.title}</h3>
              <p className="mb-6 text-xs font-light leading-relaxed text-white/50 md:text-sm">{utility.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 border-t border-white/5 pt-4">{utility.tags.map(tag => <span key={tag} className="rounded-lg border border-white/5 bg-black/40 px-2.5 py-1 font-mono text-[10px] text-white/60">{tag}</span>)}</div>
          </article>)}
        </div>
      </section>}

      {(activeTab === "all" || activeTab === "bespoke") && <section className="relative mx-auto mb-24 max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-4 border-b border-white/10 pb-4 md:flex-row md:items-end">
          <div><p className="font-mono text-xs uppercase tracking-widest text-[#ff6b1a]">Freelance &amp; Contract Engineering</p><h2 className="mt-1 text-2xl font-black uppercase tracking-tight md:text-4xl">Client Services &amp; Capabilities</h2></div>
          <Link href="/contact" className="self-start rounded-full bg-[#ff6b1a] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-white md:self-auto">Start a Project</Link>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {clientServices.map((service, index) => <article key={service.title} className="service-card flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.015] p-8 transition-all duration-300 hover:border-white/20">
            <div><div className="mb-4 flex items-baseline justify-between"><span className="font-mono text-lg font-bold text-[#ff6b1a]">{String(index + 1).padStart(2, "0")}</span><span className="font-mono text-[10px] uppercase tracking-widest text-white/30">Custom Solutions</span></div><h3 className="mb-3 text-xl font-black uppercase tracking-tight md:text-2xl">{service.title}</h3><p className="mb-4 text-xs font-light leading-relaxed text-white/50 md:text-sm">{service.description}</p><p className="mb-6 font-mono text-xs text-white/40"><span className="mr-1.5 text-[#ff6b1a]">—</span><strong>Deliverables:</strong> {service.deliverables}</p></div>
            <div className="flex flex-wrap gap-1.5 border-t border-white/5 pt-4">{service.tags.map(tag => <span key={tag} className="rounded-md border border-white/5 bg-white/[0.03] px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-white/50">{tag}</span>)}</div>
          </article>)}
        </div>
      </section>}
    </main>
  );
}
