import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import TrackVisit from "@/components/TrackVisit";
import { Analytics } from "@vercel/analytics/next";
import NewsletterPopup from "@/components/NewsletterPopup";
import { PROGRAMMING_LANGUAGES } from "@/data/programmingLanguages";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap"
});

const BASE = "https://fachmy-portfolio.pages.dev";

export const viewport = {
  themeColor: "#ff6b1a",
};

export const metadata = {
  metadataBase: new URL(BASE),

  title: {
    default: "Fachmy Faiz Bentra Kabila | Full Stack Engineer",
    template: "%s — Fachmy Kabila | Full Stack Engineer",
  },
  description:
    "Full Stack Engineer in Bandung with six years of experience in React, Next.js, TypeScript, C#/.NET, ASP.NET Core, SQL, cloud infrastructure, and production applications.",
  keywords: [
    "Fachmy Kabila", "Full Stack Engineer", "React Developer", "Next.js Developer",
    "TypeScript", "C# Developer", ".NET Engineer", "ASP.NET Core", "SQL Developer",
    "Software Engineer Bandung", "Indonesia Full Stack Developer"
  ],
  authors: [{ name: "Fachmy Faiz Bentra Kabila", url: BASE }],
  creator: "Fachmy Faiz Bentra Kabila",
  publisher: "Fachmy Faiz Bentra Kabila",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE,
    siteName: "Fachmy Kabila — Engineering Portfolio",
    title: "Fachmy Faiz Bentra Kabila | Full Stack Engineer",
    description: "Six years building production applications with React, Next.js, TypeScript, C#/.NET, ASP.NET Core, and SQL.",
    images: [{
      url: "/photo/hero.webp",
      width: 1200,
      height: 630,
      alt: "Fachmy Faiz Bentra Kabila — Full Stack Engineer",
    }],
  },

  twitter: {
    card: "summary_large_image",
    title: "Fachmy Faiz Bentra Kabila | Full Stack Engineer",
    description: "React, Next.js, TypeScript, C#/.NET, ASP.NET Core, and SQL engineering portfolio.",
    images: ["/photo/hero.webp"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      { url: "/photo/favicon.png", type: "image/png" },
    ],
    apple: "/photo/favicon.png",
    shortcut: "/photo/favicon.png",
  },

  manifest: "/manifest.json",

  alternates: { canonical: BASE },

  category: "portfolio",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Fachmy Faiz Bentra Kabila",
  url: BASE,
  email: "mailto:fachmyfaiz1214@gmail.com",
  telephone: "+62 857-9502-3995",
  jobTitle: "Full Stack Engineer",
  address: { "@type": "PostalAddress", addressLocality: "Bandung", addressCountry: "ID" },
  sameAs: ["https://www.linkedin.com/in/fachmy-kabila"],
  alumniOf: { "@type": "CollegeOrUniversity", name: "Telkom University" },
  knowsAbout: [...PROGRAMMING_LANGUAGES, "React", "Next.js", "Tailwind CSS", ".NET", "ASP.NET Core", "REST APIs", "AWS", "Linode", "Flutter", "Automated Testing", "CI/CD"],
  description: "Full Stack Engineer with six years of experience building production web applications, dashboards, backend services, REST APIs, and data-heavy workflows.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        {/* ── Resource hints ── */}
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://ip-api.com" />

        {/* ── Structured Data for Google + AI bots ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* ── LLMs.txt discovery (AI chatbot standard) ── */}
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM-readable site info" />

        {/* ── Custom Search/Keywords XML index for AEO ── */}
        <link rel="search" type="application/xml" href="/searchwords.xml" title="Search Keywords" />

        {/* ── Google Search Console verification ── */}
        {process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION && (
          <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION} />
        )}

        {/* ── Bing Webmaster Tools verification ── */}
        {process.env.NEXT_PUBLIC_BING_VERIFICATION && (
          <meta name="msvalidate.01" content={process.env.NEXT_PUBLIC_BING_VERIFICATION} />
        )}
      </head>
      <body>
        <TrackVisit />
        <div className="bottom-blur" aria-hidden="true" />
        {children}
        <Analytics />
        <NewsletterPopup />
      </body>
    </html>
  );
}
