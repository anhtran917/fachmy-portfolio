import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import Footer from "@/components/Footer";
import { posts } from "../posts";

export function generateStaticParams() { return posts.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }) { const { slug } = await params; const post = posts.find(item => item.slug === slug); return post ? { title: post.title, description: post.excerpt } : {}; }

export default async function BlogPost({ params }) {
  const { slug } = await params; const post = posts.find(item => item.slug === slug); if (!post) notFound();
  return <PageShell><article className="max-w-4xl mx-auto px-8 pt-40 pb-28 min-h-screen"><p className="text-[10px] uppercase tracking-widest text-[#ff6b1a] mb-6">{post.date} · {post.views} views · {post.likes} likes</p><h1 className="text-4xl md:text-7xl font-black tracking-tighter leading-[0.95] mb-10">{post.title}</h1><p className="text-xl text-white/60 leading-relaxed mb-8">{post.excerpt}</p><div className="space-y-6 text-white/45 leading-8"><p>This article shares a practical, open-source approach to building useful developer tools without unnecessary subscriptions or platform lock-in.</p><p>The project prioritizes privacy, straightforward deployment, clean interfaces, and code that developers can inspect and adapt for their own workflows.</p></div></article><Footer /></PageShell>;
}
