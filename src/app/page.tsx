import { HeroSection, ServicesOverview } from "@/components/organisms";
import { StructuredData } from "@/components/atoms/structured-data";
import { services } from "@/data/services";
import { company } from "@/data/company";
import { generateOrganizationSchema } from "@/lib/structured-data";

export default function HomePage() {
  return (
    <>
      <StructuredData data={generateOrganizationSchema(company)} />
      <HeroSection />
      <ServicesOverview services={services} />
    </>
  );
}