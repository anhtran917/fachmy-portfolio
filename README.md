<div align="center">

# 🎬 Fachmy — Ultimate Open-Source Cinematic Next.js Developer Portfolio

### The Most Immersive, High-Performance, and AI-Ready Portfolio Template for Developers, Designers & Creative Engineers.

Built with **Next.js 16 (App Router)** · **React 19** · **GSAP 3** · **Three.js** · **Framer Motion** · **Tailwind CSS v4** · **Supabase** · **Resend**

[![Live Demo](https://img.shields.io/badge/Live_Demo-fachmy--portfolio.pages.dev-ff6b1a?style=for-the-badge)](https://fachmy-portfolio.pages.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/anhtran917/fachmy-portfolio)

<br />

> *"From first impression to final interaction, Fachmy helps you build a portfolio that feels like a premium digital product—not just another personal website."*

</div>

---

## 🌟 Overview

**Fachmy** is a 100% free, open-source, production-ready cinematic developer portfolio template designed to give developers, designers, video editors, and creative engineers an award-quality digital signature. 

Unlike standard grid-based portfolios, **Fachmy** merges scroll-driven video scrubbing, fluid GSAP micro-animations, 3D WebGL effects, built-in dashboard analytics, a full markdown blogging engine with user comments, and an intuitive administrative CMS dashboard into one seamless experience.

⭐ **100% Free** | ⭐ **MIT Licensed** | ⭐ **Production Ready** | ⭐ **SEO & AI-LLM Optimized**

---

## 👤 Created By & Official Links

- **Author**: Fachmy Faiz Bentra Kabila
- **Website**: [https://fachmy-portfolio.pages.dev](https://fachmy-portfolio.pages.dev) (or [fachmy-portfolio.pages.dev](https://fachmy-portfolio.pages.dev))
- **LinkedIn**: [Fachmy Kabila](https://www.linkedin.com/in/fachmy-kabila)
- **GitHub**: [anhtran917/fachmy-portfolio](https://github.com/anhtran917/fachmy-portfolio)
- **Contact / Hire**: [https://fachmy-portfolio.pages.dev/contact](https://fachmy-portfolio.pages.dev/contact)

---

## ✨ Why Choose Fachmy?

Unlike traditional portfolio templates, **Fachmy** is built as a complete production-ready portfolio platform. It combines cinematic scroll animations, a modern content management workflow, built-in privacy analytics, markdown blogging, testimonials, SEO optimization, AI-friendly metadata, and an intuitive admin dashboard into one seamless experience.

*   **🎥 Scroll-Driven Video Scrubbing:** Frame-accurate video playback synchronized directly to user scrolling speeds.
*   **✨ 120fps GSAP Animations:** Fully responsive scroll-triggered layouts and magnetic interaction effects for dynamic responsiveness.
*   **📱 Unified & Collapsible Admin Dashboard:** Desktop collapsed icon-only sidebar (`localStorage` persistence) with mobile blur overlay drawer.
*   **📊 Native Dashboard Analytics:** Privacy-friendly visitor tracking, link clicks, page loads, and active user analytics without bloat.
*   **💬 Interactive Blog & CMS:** Full markdown blog manager with admin-repliable threaded user comments and dynamic tag filtering.
*   **✉️ Seamless Contact System:** Custom inquiry routing backed by Resend for instant email notifications.
*   **🔐 Launch Protection:** Optional Coming Soon splash screen with password bypass validation logic.
*   **🤖 AI Chatbot Compatibility (`/llms.txt`):** Native machine-readable profile designed for AI agents (Gemini, Claude, ChatGPT, Perplexity).

---

## ⚡ Tech Stack

| Domain | Technologies Used |
| :--- | :--- |
| **Framework** | Next.js 16 (App Router), React 19 |
| **Animation & 3D** | GSAP 3 (ScrollTrigger), Three.js, React Three Fiber, Framer Motion |
| **Styling** | Tailwind CSS v4, Vanilla CSS variables (`--orange: #ff6b1a`) |
| **Backend & Database** | Supabase (PostgreSQL), Next.js API Routes |
| **Email Service** | Resend API |
| **Deployment** | Vercel, Netlify, Custom Node.js servers |
| **Metadata & SEO** | Open Graph, JSON-LD Schema (`Person`, `SoftwareSourceCode`), `llms.txt`, Dynamic Sitemaps |

---

## 📊 Feature Comparison

| Feature | 🎬 Fachmy | Typical Portfolio Templates |
| :--- | :---: | :---: |
| **Scroll Video Scrubbing** | ✅ | ❌ |
| **GSAP & 3D Integration** | ✅ | ❌ |
| **Built-in CMS & Admin Dashboard** | ✅ | ❌ |
| **Native Analytics** | ✅ | ❌ |
| **Blog with Comment Threads** | ✅ | ❌ |
| **AI LLM Indexing (`/llms.txt`)** | ✅ | ❌ |
| **Custom Accent Customization** | ✅ | ⚠️ |
| **MIT Free & Open Source** | ✅ | ⚠️ |

---

## 🎯 Who Is This For?

- ✅ **Software Engineers & Full Stack Developers:** Showcase your full-stack projects, architecture, and live demos.
- ✅ **Frontend & UI/UX Engineers:** Display interactive micro-animations and responsive components.
- ✅ **Creative Engineers & 3D Creators:** Demonstrate WebGL, Three.js, and GSAP visual masterpieces.
- ✅ **Freelancers & Agencies:** Collect inbound inquiries with integrated email routing and analytics.
- ✅ **Content Creators & Technical Writers:** Publish blog posts with markdown support and user discussions.
- ✅ **Video Editors & Motion Designers:** Feature video reels with frame-accurate scroll scrubbing.

---

## 🛠️ Step-by-Step Installation

Technical setup guidelines, database schemas, and deployment instructions are stored in our dedicated setup guide:

### 👉 **[Read the INSTALL.md Setup Guide](INSTALL.md)**

*   🔧 **[Local Development Setup](INSTALL.md#-local-installation)** (Cloning, dependencies, environment setup)
*   🗄️ **[Database Table Script](INSTALL.md#-database-setup-supabase)** (Supabase SQL queries)
*   ⚙️ **[Environment Variables Config](INSTALL.md#-environment-variables-envlocal)** (Detailed parameter reference)
*   🌍 **[Production Deployment Instructions](INSTALL.md#-production-deployments)** (Vercel deployment)

---

## 🎨 Content & Theme Customization

Customizing theme accents, copy, and profile information takes only a few minutes:

### 1. Changing the Primary Accent Color
The signature accent color throughout Fachmy is orange (`#ff6b1a`). Change it globally in `src/app/globals.css`:
```css
:root {
  --orange: #ff6b1a; /* Swap this hex code with your custom accent color */
}
```

### 2. Modifying Personal Copy & Bio
- **Biography & Skills:** Edit [`src/app/about/content.js`](file:///c:/Users/Asus/Downloads/portiflo-main/src/app/about/content.js)
- **Projects Fallback Data:** Edit [`src/app/work/content.js`](file:///c:/Users/Asus/Downloads/portiflo-main/src/app/work/content.js)
- **Contact Info & Socials:** Edit [`src/app/contact/content.js`](file:///c:/Users/Asus/Downloads/portiflo-main/src/app/contact/content.js)

---

## 🤖 SEO & AI / LLM Compatibility

Fachmy is built from the ground up to be discovered and parsed accurately by modern search engines and AI assistants (ChatGPT, Gemini, Claude, Perplexity, Copilot):

*   **`llms.txt` & `llms-full.txt` Standards:** Machine-readable profile feeds providing structured context to AI agents.
*   **Structured Data (JSON-LD):** Auto-injected `Person`, `WebSite`, and `SoftwareSourceCode` schemas in page head.
*   **Dynamic XML Sitemaps (`/sitemap.xml`):** Re-generated automatically on builds to index projects and articles.
*   **Robots & Canonical Tags:** Standard `robots.txt` directives with canonical URL enforcement.
*   **Open Graph & Twitter Cards:** Pre-configured social media sharing previews.

---

## 🔎 Searchable Keywords Index

`Next.js Portfolio` · `Developer Portfolio` · `Portfolio Template` · `Open Source Portfolio` · `Next.js Portfolio Template` · `Cinematic Portfolio` · `Creative Portfolio` · `GSAP Portfolio` · `Three.js Portfolio` · `Framer Motion Portfolio` · `Tailwind CSS Portfolio` · `React Portfolio` · `Personal Website` · `Modern Portfolio` · `Software Engineer Portfolio`

---

## 🗺️ Project Roadmap

- [x] Next.js 16 & React 19 Migration
- [x] Collapsible Admin Dashboard & Native Analytics
- [x] Full Markdown Blog with Threaded Comments
- [x] AI Agent Compatibility Engine (`/llms.txt`)
- [ ] Multi-language i18n support
- [ ] Customizable Theme Preset Switcher
- [ ] Custom Plugin API Architecture
- [ ] AI-Powered CMS Writing Assistant
- [ ] Open-Source Portfolio Template Marketplace

---

## ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=anhtran917/fachmy-portfolio&type=Date)](https://star-history.com/#anhtran917/fachmy-portfolio&Date)

---

## 💬 Frequently Asked Questions (FAQ)

<details>
<summary><b>1. Can I use Fachmy for commercial projects?</b></summary>
<br />
Yes! Fachmy is 100% free and open-source under the MIT License. You can modify, brand, host, and deploy it commercially without restriction.
</details>

<details>
<summary><b>2. Can I remove credits or alter footer links?</b></summary>
<br />
Yes! You have complete freedom to remove, modify, or add any credits, footer links, and branding elements.
</details>

<details>
<summary><b>3. Do I need Supabase to run Fachmy?</b></summary>
<br />
Supabase powers the CMS, blog comments, and native analytics. However, static fallbacks exist in <code>content.js</code> files so you can run the portfolio offline or without a database setup.
</details>

<details>
<summary><b>4. Can I deploy Fachmy on Vercel?</b></summary>
<br />
Yes! Fachmy is optimized for zero-config deployment on Vercel. Simply import your GitHub repository and set your environment variables.
</details>

<details>
<summary><b>5. Can I customize all text, colors, and layout components?</b></summary>
<br />
Absolutely. Everything in Fachmy is modular, componentized, and completely customizable.
</details>

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

<div align="center">

**Created by Fachmy Faiz Bentra Kabila**

🌐 **[Live Demo](https://fachmy-portfolio.pages.dev)** · 📖 **[Setup Guide](INSTALL.md)** · 🐛 **[Report Issue](https://github.com/anhtran917/fachmy-portfolio/issues)** · **[LinkedIn](https://www.linkedin.com/in/fachmy-kabila)**

</div>
