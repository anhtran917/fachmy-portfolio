import PageShell from "@/components/PageShell";
import Footer from "@/components/Footer";
import { FinalCTA } from "@/components/HomeSections";
import ServicesCatalog from "@/components/ServicesCatalog";

export const metadata = {
  title: "Services & Free Tools — QR Code Studio, PDF Suite & Web Engineering | Fachmy",
  description: "Free browser-powered creator utilities and custom Shopify, Next.js, UI/UX, and interactive development services.",
  alternates: { canonical: "https://fachmy-portfolio.pages.dev/services" },
};

export default function ServicesPage() {
  return (
    <PageShell>
      <ServicesCatalog />
      <FinalCTA />
      <Footer />
    </PageShell>
  );
}
