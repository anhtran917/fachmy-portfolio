import PageShell from "@/components/PageShell";
import AboutPage from "@/views/about";

export const metadata = {
  title:       { absolute: "About Fachmy Kabila | Full Stack Engineer" },
  description: "Meet Fachmy Faiz Bentra Kabila, a Full Stack Engineer with six years of experience across React, Next.js, C#/.NET, ASP.NET Core, and SQL.",
  keywords:    ["Fachmy Kabila", "full stack engineer Indonesia", "React developer Bandung", "C# .NET engineer", "Next.js developer"],
  alternates:  { canonical: "https://fachmy-portfolio.pages.dev/about" },
  openGraph: {
    title: "About Fachmy Kabila — Full Stack Engineer",
    description: "Six years delivering production frontend, backend, database, testing, and cloud solutions.",
  },
};

export default function Page() {
  return (
    <PageShell>
      <style>{`.bottom-blur { display: none !important; }`}</style>
      <AboutPage />
    </PageShell>
  );
}
