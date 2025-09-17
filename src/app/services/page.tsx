import { CompanyStats } from "@/components/organisms";
import { StructuredData } from "@/components/atoms/structured-data";
import { serviceCategories } from "@/data/services";
import { companyStats } from "@/data/company";
import { generatePageMetadata } from "@/lib/metadata";
import { AnimatedSection } from "@/components/templates/animated-section";
import { Typography } from "@/components/atoms/typography";
import { ServiceCard } from "@/components/molecules/service-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = generatePageMetadata({
  title: "EOR Services | Lanzar",
  description: "Comprehensive Employer of Record services for US and European companies hiring in India. Employment contracts, payroll, compliance, and HR support.",
  keywords: ["EOR services", "employer of record", "India hiring", "payroll management", "compliance", "employment services"],
  path: "/services"
});

export default function ServicesPage() {
  return (
    <>
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Lanzar EOR Services",
        "description": "Comprehensive Employer of Record services for hiring in India",
        "provider": {
          "@type": "Organization",
          "name": "Lanzar"
        }
      }} />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="slideUp" className="text-center mb-16">
            <Typography 
              variant="h1" 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 bg-clip-text text-transparent"
            >
              EOR Services for Global Companies
            </Typography>
            <Typography 
              variant="lead" 
              className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8"
            >
              Designed specifically for US and European companies seeking to hire exceptional talent in India. 
              We handle all compliance while you focus on growing your business.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Get Started Today
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">
                  Learn More About Us
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Company Stats */}
      <CompanyStats stats={companyStats} />

      {/* Service Categories */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          {serviceCategories.map((category, index) => (
            <div key={category.id} className={index > 0 ? "mt-20" : ""}>
              <AnimatedSection animation="slideUp" className="text-center mb-12">
                <Typography variant="h2" className="text-3xl md:text-4xl font-bold mb-4">
                  {category.name}
                </Typography>
                <Typography variant="lead" className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  {category.description}
                </Typography>
              </AnimatedSection>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service) => (
                  <ServiceCard 
                    key={service.id}
                    service={service}
                    showPricing={true}
                    variant="default"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="slideUp" className="text-center">
            <Typography variant="h2" className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Hire in India?
            </Typography>
            <Typography variant="lead" className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Join 50+ US and European companies who trust Lanzar for their Indian workforce expansion. 
              Get started in just 7 days with our streamlined onboarding process.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Schedule a Consultation
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/coverage">
                  View Coverage Areas
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
