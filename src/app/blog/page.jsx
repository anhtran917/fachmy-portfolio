import Link from "next/link";
import PageShell from "@/components/PageShell";
import Footer from "@/components/Footer";
import { posts } from "./posts";

export const metadata = { title: "Fachmy Blog | E-commerce, Shopify & Web Design Insights", description: "Insights about Shopify, Next.js, open-source tools, web engineering, and digital design.", alternates: { canonical: "https://fachmy-portfolio.pages.dev/blog" } };

export default function BlogPage() {
  return <PageShell><section className="px-10 md:px-20 pt-40 pb-28 min-h-screen"><p className="text-[10px] text-[#ff6b1a] tracking-[0.5em] uppercase mb-5">Journal</p><h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] mb-16">Insights<br/><span className="ghost">& Stories</span></h1><div className="grid md:grid-cols-3 gap-4">{posts.map(post => <Link key={post.slug} href={`/blog/${post.slug}`} className="group p-7 rounded-2xl border border-white/10 bg-white/[0.025] hover:bg-white/[0.055] transition-colors"><p className="text-[9px] uppercase tracking-widest text-[#ff6b1a] mb-5">{post.date} · {post.views} views · {post.likes} likes</p><h2 className="text-xl font-bold leading-tight mb-5 group-hover:text-[#ff6b1a] transition-colors">{post.title}</h2><p className="text-sm text-white/40 leading-relaxed">{post.excerpt}</p></Link>)}</div></section><Footer /></PageShell>;
}
