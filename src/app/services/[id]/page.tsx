import { StructuredData } from "@/components/atoms/structured-data";
import { services } from "@/data/services";
import { generateServiceMetadata } from "@/lib/metadata";
import { AnimatedSection } from "@/components/templates/animated-section";
import { Typography } from "@/components/atoms/typography";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, MapPin, DollarSign } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";

interface ServicePageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const service = services.find(s => s.id === params.id);
  
  if (!service) {
    return {
      title: "Service Not Found | Lanzar"
    };
  }

  return generateServiceMetadata(service.name, service.description);
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = services.find(s => s.id === params.id);

  if (!service) {
    notFound();
  }

  const heroImage = service.images.find(img => img.type === 'hero') || service.images[0];

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slideUp">
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
                className="text-xl md:text-2xl text-muted-foreground mb-6"
              >
                {service.tagline}
              </Typography>
              <Typography 
                variant="bodyLarge" 
                className="text-lg text-foreground/80 mb-8"
              >
                {service.description}
              </Typography>
              
              {/* Pricing */}
              <div className="flex items-center gap-4 mb-8 p-4 bg-muted/30 rounded-lg">
                <DollarSign className="h-5 w-5 text-primary" />
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-primary">{service.pricing.startingPrice}</span>
                    <span className="text-sm text-muted-foreground">/{service.pricing.billingCycle}</span>
                    <span className="text-sm text-muted-foreground ml-1">per employee</span>
                  </div>
                  <span className="text-sm text-muted-foreground">Starting price</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Get Started Today
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services">
                    View All Services
                  </Link>
                </Button>
              </div>
            </AnimatedSection>

            {/* Hero Image */}
            {heroImage && (
              <AnimatedSection animation="slideUp" delay={0.2}>
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src={heroImage.url}
                    alt={heroImage.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </AnimatedSection>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="slideUp" className="text-center mb-16">
            <Typography variant="h2" className="text-3xl md:text-4xl font-bold mb-6">
              What&apos;s Included
            </Typography>
            <Typography variant="lead" className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive {service.name.toLowerCase()} to ensure your success in India
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

      {/* Coverage Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="slideUp" className="text-center mb-16">
            <Typography variant="h2" className="text-3xl md:text-4xl font-bold mb-6">
              Coverage Areas
            </Typography>
            <Typography variant="lead" className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Available across India with complete local compliance
            </Typography>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {service.coverage.map((area, index) => (
              <div key={index} className="flex items-center gap-2 p-3 bg-background rounded-lg shadow-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{area}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="outline">
                <Link href="/coverage">
                View Complete Coverage Map
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="slideUp" className="text-center mb-16">
            <Typography variant="h2" className="text-3xl md:text-4xl font-bold mb-6">
              Related Services
            </Typography>
            <Typography variant="lead" className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete your EOR setup with our complementary services
            </Typography>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services
              .filter(s => s.id !== service.id)
              .slice(0, 3)
              .map((relatedService) => (
                <Card key={relatedService.id} className="border-0 shadow-md group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {relatedService.name}
                    </CardTitle>
                    <CardDescription>{relatedService.tagline}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline gap-1">
                        <span className="text-lg font-bold text-primary">{relatedService.pricing.startingPrice}</span>
                        <span className="text-xs text-muted-foreground">/{relatedService.pricing.billingCycle}</span>
                      </div>
                      <Button asChild variant="ghost" size="sm">
                        <Link href={`/services/${relatedService.id}`}>
                          Learn More
                          <ArrowRight className="h-3 w-3 ml-1" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-orange-50 to-purple-50 dark:from-orange-950/20 dark:to-purple-950/20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="slideUp" className="text-center">
            <Typography variant="h2" className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </Typography>
            <Typography variant="lead" className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Join US and European companies who trust Lanzar for their Indian workforce expansion. 
              Get started in just 7 days.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Schedule Consultation
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">
                  Explore All Services
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
