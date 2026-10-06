import PageShell from "@/components/PageShell";
import Footer from "@/components/Footer";
import OpenSourceView from "@/views/open-source";

export const metadata = {
  title: "Technology Stack & Architecture | Fachmy Kabila",
  description: "Explore Fachmy Kabila's full-stack engineering capabilities across React, Next.js, C#/.NET, ASP.NET Core, SQL, cloud infrastructure, testing, and CI/CD.",
  alternates: { canonical: "https://fachmy-portfolio.pages.dev/open-source" },
};

export default function OpenSourcePage() {
  return <PageShell><OpenSourceView /><Footer /></PageShell>;
}
