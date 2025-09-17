import { generateServiceMetadata } from "@/lib/metadata";
import { AnimatedSection } from "@/components/templates/animated-section";
import { Typography } from "@/components/atoms/typography";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, AlertTriangle, FileCheck, BarChart } from "lucide-react";
import Link from "next/link";
import { services } from "@/data/services";
import { notFound } from "next/navigation";
import { StructuredData } from "@/components/atoms/structured-data";

const service = services.find(s => s.id === 'risk-management');

if (!service) {
  notFound();
}

export const metadata = generateServiceMetadata(service.name, service.description);

export default function RiskManagementServicesPage() {
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
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4">
              {service.category === 'core' ? 'Core Service' : 
               service.category === 'supplementary' ? 'Supplementary Service' : 
               'Protection Service'}
            </Badge>
            <Typography variant="h1" className="mb-6 bg-gradient-to-r from-primary-orange via-primary-purple to-primary-blue bg-clip-text text-transparent">
              {service.name}
            </Typography>
            <Typography
              variant="bodyLarge"
              className="text-lg text-foreground/80 max-w-4xl mx-auto mb-8"
            >
              Comprehensive risk management and liability protection for your Indian operations. 
              We identify, assess, and mitigate employment-related risks while providing robust 
              insurance coverage and emergency response planning.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Protect Your Business
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/services">
                  View All Services
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <Typography variant="h2" className="text-3xl md:text-4xl font-bold mb-6">
              What&apos;s Included
            </Typography>
            <Typography variant="lead" className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Proactive risk management services that protect your business from employment-related 
              liabilities and ensure business continuity in India.
            </Typography>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="h-full border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <div className="w-6 h-6 bg-primary rounded-sm"></div>
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Typography className="text-muted-foreground">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Protection Benefits */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <Typography variant="h2" className="text-3xl md:text-4xl font-bold mb-6">
                Comprehensive Risk Protection
              </Typography>
              <Typography variant="lead" className="text-xl text-muted-foreground mb-6">
                Protect your business from employment-related risks and liabilities with our 
                comprehensive risk management framework tailored for Indian operations.
              </Typography>
              <div className="space-y-4">
                {[
                  "Employment liability insurance and coverage",
                  "Regular risk assessments and compliance audits",
                  "Incident response and crisis management",
                  "Legal liability protection and support",
                  "Business continuity planning",
                  "Emergency response coordination"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <Typography>{benefit}</Typography>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="p-8 border-0 shadow-lg">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-primary rounded-sm"></div>
                  </div>
                  <Typography variant="h3" className="text-2xl font-bold mb-2">
                    Risk Mitigation
                  </Typography>
                  <Typography className="text-muted-foreground">
                    Our proactive risk management approach significantly reduces business liabilities and exposure.
                  </Typography>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <Typography variant="h4" className="text-2xl font-bold text-primary mb-1">99%</Typography>
                    <Typography className="text-sm text-muted-foreground">Risk Mitigation</Typography>
                  </div>
                  <div>
                    <Typography variant="h4" className="text-2xl font-bold text-primary mb-1">24/7</Typography>
                    <Typography className="text-sm text-muted-foreground">Monitoring</Typography>
                  </div>
                  <div>
                    <Typography variant="h4" className="text-2xl font-bold text-primary mb-1">100%</Typography>
                    <Typography className="text-sm text-muted-foreground">Coverage</Typography>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Risk Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <Typography variant="h2" className="text-3xl md:text-4xl font-bold mb-6">
              Risk Categories We Cover
            </Typography>
            <Typography variant="lead" className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Comprehensive protection across all aspects of employment and business operations in India.
            </Typography>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Employment Risks",
                description: "Wrongful termination, discrimination, harassment claims",
                icon: AlertTriangle
              },
              {
                title: "Compliance Risks",
                description: "Regulatory violations, statutory non-compliance",
                icon: FileCheck
              },
              {
                title: "Operational Risks",
                description: "Business interruption, workplace incidents",
                icon: Shield
              },
              {
                title: "Financial Risks",
                description: "Payroll errors, tax liabilities, penalties",
                icon: BarChart
              }
            ].map((risk, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="h-full border-0 shadow-md hover:shadow-lg transition-shadow text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <risk.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{risk.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Typography className="text-muted-foreground text-sm">
                      {risk.description}
                    </Typography>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <Typography variant="h2" className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Protect Your Business?
            </Typography>
            <Typography variant="lead" className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Don&apos;t leave your Indian operations exposed to unnecessary risks. Our comprehensive 
              risk management services provide the protection and peace of mind you need.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get Risk Assessment
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
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
