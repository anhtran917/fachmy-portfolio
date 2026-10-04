import { createClient } from "@supabase/supabase-js";

const BASE = "https://www.sarang-space.site";

export default async function sitemap() {
  const staticPages = [
    { url: BASE,                       lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0  },
    { url: `${BASE}/projects`,         lastModified: new Date(), changeFrequency: "weekly",  priority: 0.9  },
    { url: `${BASE}/about`,            lastModified: new Date(), changeFrequency: "monthly", priority: 0.8  },
    { url: `${BASE}/services`,         lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/open-source`,      lastModified: new Date(), changeFrequency: "monthly", priority: 0.8  },
    { url: `${BASE}/blog`,             lastModified: new Date(), changeFrequency: "weekly",  priority: 0.8  },
    { url: `${BASE}/contact`,          lastModified: new Date(), changeFrequency: "yearly",  priority: 0.75 },
    { url: `${BASE}/resume`,           lastModified: new Date(), changeFrequency: "yearly",  priority: 0.6  },
  ];

  let projectPages = [];

  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    // ── Project pages ─────────────────────────────────────────────────
    const { data: projects } = await supabase
      .from("projects")
      .select("id, updated_at")
      .order("created_at", { ascending: false });

    if (projects) {
      projectPages = projects.map((p) => ({
        url: `${BASE}/project/${p.id}`,
        lastModified: p.updated_at ? new Date(p.updated_at) : new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      }));
    }
  } catch {
    // DB unreachable — serve static pages only
  }

  const blogPages = [
    "videoad-open-source-video-downloader",
    "free-india-post-tracking-api",
    "free-self-hosted-whatsapp-api",
  ].map((slug) => ({ url: `${BASE}/blog/${slug}`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.65 }));

  return [...staticPages, ...blogPages, ...projectPages];
}
