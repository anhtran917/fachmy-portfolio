import PageShell from "@/components/PageShell";
import ContactPage from "@/views/contact";

export const metadata = {
  title:       { absolute: "Contact Fachmy Kabila | Full Stack Engineer" },
  description: "Contact Fachmy Faiz Bentra Kabila for full-stack, React, Next.js, C#/.NET, ASP.NET Core, SQL, and software engineering opportunities.",
  keywords:    ["contact Fachmy Kabila", "hire full stack engineer", "React developer Indonesia", "C# .NET developer"],
  alternates:  { canonical: "https://www.sarang-space.site/contact" },
  openGraph: {
    title: "Contact Fachmy Kabila — Full Stack Engineer",
    description: "Get in touch about full-stack engineering roles and software projects.",
  },
};

export default function Page() {
  return (
    <PageShell>
      <ContactPage />
    </PageShell>
  );
}
