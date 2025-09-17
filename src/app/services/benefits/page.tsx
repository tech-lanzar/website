import { generateServiceMetadata } from "@/lib/metadata";
import { AnimatedSection } from "@/components/templates/animated-section";
import { Typography } from "@/components/atoms/typography";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { services } from "@/data/services";
import { notFound } from "next/navigation";
import { StructuredData } from "@/components/atoms/structured-data";

const service = services.find(s => s.id === 'benefits');

if (!service) {
  notFound();
}

export const metadata = generateServiceMetadata(service.name, service.description);

export default function BenefitsServicesPage() {
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
              Comprehensive employee benefits management designed to attract and retain top talent in India. 
              From health insurance to retirement planning, we handle all aspects of your employee benefits program 
              with care and compliance.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get Started Today
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
              Comprehensive benefits administration that keeps your employees happy and your 
              business compliant with Indian regulations.
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

      {/* Benefits Details */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <Typography variant="h2" className="text-3xl md:text-4xl font-bold mb-6">
                Attract & Retain Top Talent
              </Typography>
              <Typography variant="lead" className="text-xl text-muted-foreground mb-6">
                Competitive benefits packages are essential for attracting and retaining the best talent in India&apos;s 
                competitive job market.
              </Typography>
              <div className="space-y-4">
                {[
                  "Health insurance coverage for employees and families",
                  "Provident Fund (EPF) and National Pension Scheme (NPS)",
                  "Flexible leave policies and time-off management",
                  "Wellness programs and mental health support",
                  "Professional development and training allowances",
                  "Performance bonuses and recognition programs"
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
                    Employee Satisfaction
                  </Typography>
                  <Typography className="text-muted-foreground">
                    Our comprehensive benefits administration leads to higher employee satisfaction and retention rates.
                  </Typography>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <Typography variant="h4" className="text-2xl font-bold text-primary mb-1">95%</Typography>
                    <Typography className="text-sm text-muted-foreground">Employee Satisfaction</Typography>
                  </div>
                  <div>
                    <Typography variant="h4" className="text-2xl font-bold text-primary mb-1">90%</Typography>
                    <Typography className="text-sm text-muted-foreground">Retention Rate</Typography>
                  </div>
                  <div>
                    <Typography variant="h4" className="text-2xl font-bold text-primary mb-1">100%</Typography>
                    <Typography className="text-sm text-muted-foreground">Compliance</Typography>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <Typography variant="h2" className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Enhance Your Employee Benefits?
            </Typography>
            <Typography variant="lead" className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Let our benefits specialists design a comprehensive package that attracts top talent 
              and keeps your team motivated and engaged.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Start Your Benefits Program
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
