import { StructuredData } from "@/components/atoms/structured-data";
import { services } from "@/data/services";
import { generateServiceMetadata } from "@/lib/metadata";
import { AnimatedSection } from "@/components/templates/animated-section";
import { Typography } from "@/components/atoms/typography";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Scale, Bell, Shield } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

const service = services.find(s => s.id === 'compliance');

if (!service) {
  notFound();
}

export const metadata = generateServiceMetadata(service.name, service.description);

const complianceAreas = [
  {
    title: "Central Government Laws",
    description: "Compliance with central labor laws including Contract Labor Act, Payment of Wages Act, and more",
    items: ["Contract Labor Act", "Payment of Wages Act", "Minimum Wages Act", "Equal Remuneration Act"]
  },
  {
    title: "State Regulations",
    description: "State-specific compliance including Shops & Establishments Act and local labor laws",
    items: ["Shops & Establishments", "State Labor Laws", "Professional Tax", "Local Municipality Rules"]
  },
  {
    title: "Tax Compliance",
    description: "Complete tax compliance including income tax, GST, and state taxes",
    items: ["Income Tax Act", "GST Compliance", "State Tax Laws", "TDS Regulations"]
  },
  {
    title: "Statutory Filings",
    description: "Timely submission of all mandatory forms and returns",
    items: ["EPF Returns", "ESI Returns", "Tax Returns", "Labor Department Filings"]
  }
];

export default function ComplianceServicesPage() {
  if (!service) {
    notFound();
  }

  return (
    <>
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.name,
        "description": service.description,
        "provider": {
          "@type": "Organization",
          "name": "Lanzar"
        }
      }} />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="slideUp" className="text-center mb-16">
            <Badge className="mb-4" variant="secondary">
              {service.category} service
            </Badge>
            <Typography 
              variant="h1" 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              {service.name}
            </Typography>
            <Typography 
              variant="lead" 
              className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8"
            >
              {service.tagline}
            </Typography>
            <Typography 
              variant="bodyLarge" 
              className="text-lg text-foreground/80 max-w-4xl mx-auto mb-8"
            >
              {service.description}
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Get Started - {service.pricing.startingPrice}/{service.pricing.billingCycle}
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services/benefits">
                  View Benefits Services
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="slideUp" className="text-center mb-16">
            <Typography variant="h2" className="text-3xl md:text-4xl font-bold mb-6">
              Complete Compliance Coverage
            </Typography>
            <Typography variant="lead" className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Navigate India&apos;s complex regulatory landscape with confidence
            </Typography>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Areas */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="slideUp" className="text-center mb-16">
            <Typography variant="h2" className="text-3xl md:text-4xl font-bold mb-6">
              Areas of Compliance
            </Typography>
            <Typography variant="lead" className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive coverage across all regulatory requirements
            </Typography>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {complianceAreas.map((area, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl">{area.title}</CardTitle>
                  <CardDescription className="text-base">{area.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {area.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-600" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Management */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="slideUp" className="text-center mb-16">
            <Typography variant="h2" className="text-3xl md:text-4xl font-bold mb-6">
              Risk-Free Operations
            </Typography>
            <Typography variant="lead" className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We assume all compliance risks so you can focus on your business
            </Typography>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-md text-center">
              <CardHeader>
                  <div className="mx-auto h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>100% Compliance Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Perfect track record of compliance with zero penalties or violations across all our clients.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md text-center">
              <CardHeader>
                  <div className="mx-auto h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Bell className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Proactive Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Stay ahead of regulatory changes with our proactive monitoring and update system.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md text-center">
              <CardHeader>
                  <div className="mx-auto h-16 w-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Scale className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Legal Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Full legal protection and support in case of any compliance-related issues or disputes.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="slideUp" className="text-center mb-16">
            <Typography variant="h2" className="text-3xl md:text-4xl font-bold mb-6">
              Geographic Coverage
            </Typography>
            <Typography variant="lead" className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Complete compliance support across all Indian jurisdictions
            </Typography>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {service.coverage.map((area, index) => (
              <Badge key={index} variant="outline" className="text-center py-2 text-sm">
                {area}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="slideUp" className="text-center">
            <Typography variant="h2" className="text-3xl md:text-4xl font-bold mb-6">
              Ensure Perfect Compliance Today
            </Typography>
            <Typography variant="lead" className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                  Don&apos;t risk non-compliance penalties. Let our experts handle all regulatory requirements
              while you focus on scaling your Indian operations.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Get Compliance Assessment
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services/hr-support">
                  View HR Support Services
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
