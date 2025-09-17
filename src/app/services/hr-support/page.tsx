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

const service = services.find(s => s.id === 'hr-support');

if (!service) {
  notFound();
}

export const metadata = generateServiceMetadata(service.name, service.description);

export default function HRSupportServicesPage() {
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
              Dedicated HR support services that bridge the gap between your global team and local Indian workforce. 
              Our HR specialists provide ongoing support, guidance, and expertise to ensure smooth operations 
              and excellent employee experiences.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get HR Support
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
              Comprehensive HR support that ensures your Indian team receives the guidance and 
              support they need to thrive in their roles.
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

      {/* HR Support Benefits */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <Typography variant="h2" className="text-3xl md:text-4xl font-bold mb-6">
                Expert HR Guidance & Support
              </Typography>
              <Typography variant="lead" className="text-xl text-muted-foreground mb-6">
                Our experienced HR team provides the local expertise and cultural understanding 
                needed to manage your Indian workforce effectively.
              </Typography>
              <div className="space-y-4">
                {[
                  "Employee relations and conflict resolution",
                  "Performance management and review coordination",
                  "Training and development program management",
                  "Policy development and implementation",
                  "Cultural integration and team building",
                  "HR analytics and workforce insights"
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
                    HR Excellence
                  </Typography>
                  <Typography className="text-muted-foreground">
                    Our dedicated HR support leads to improved team performance and employee satisfaction.
                  </Typography>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <Typography variant="h4" className="text-2xl font-bold text-primary mb-1">24/7</Typography>
                    <Typography className="text-sm text-muted-foreground">HR Support</Typography>
                  </div>
                  <div>
                    <Typography variant="h4" className="text-2xl font-bold text-primary mb-1">15+</Typography>
                    <Typography className="text-sm text-muted-foreground">Years Experience</Typography>
                  </div>
                  <div>
                    <Typography variant="h4" className="text-2xl font-bold text-primary mb-1">98%</Typography>
                    <Typography className="text-sm text-muted-foreground">Client Satisfaction</Typography>
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
              Ready for Expert HR Support?
            </Typography>
            <Typography variant="lead" className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Let our experienced HR team provide the support and guidance your Indian workforce 
              needs to excel and grow with your company.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get HR Support
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
