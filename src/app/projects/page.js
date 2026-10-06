import { Suspense } from "react";
import Cursor from "../../components/Cursor";
import Navbar from "../../components/Navbar";
import ProjectsPage from "../../views/projects";

export const metadata = {
  title:       "Projects — Case Studies & Client Work by Fachmy",
  description: "Explore detailed case studies of Fachmy's full-stack engineering projects with technical breakdowns.",
  keywords:    ["portfolio projects", "case studies", "freelance work", "client projects"],
  alternates:  { canonical: "https://fachmy-portfolio.pages.dev/projects" },
  openGraph: {
    title: "Projects — Fachmy | Case Studies & Client Work",
    description: "Detailed case studies of full-stack engineering projects by Fachmy.",
  },
};

export default function Page() {
  return (
    <main>
      <div className="grain-overlay" />
      <Cursor />
      <Navbar />
      <div className="relative z-10">
        <Suspense fallback={<div className="min-h-screen bg-[#060606]" />}>
          <ProjectsPage />
        </Suspense>
      </div>
    </main>
  );
}
