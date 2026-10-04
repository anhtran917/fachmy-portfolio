import PageShell from "@/components/PageShell";
import Footer from "@/components/Footer";
import { FinalCTA } from "@/components/HomeSections";
import ServicesCatalog from "@/components/ServicesCatalog";

export const metadata = {
  title: "Services & Free Tools — QR Code Studio, PDF Suite & Web Engineering | Sarang",
  description: "Free browser-powered creator utilities and custom Shopify, Next.js, UI/UX, and interactive development services.",
  alternates: { canonical: "https://www.sarang-space.site/services" },
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
