import { generatePageMetadata } from "@/lib/metadata";
import { AnimatedSection } from "@/components/templates/animated-section";
import { Typography } from "@/components/atoms/typography";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, CheckCircle, Globe, Building } from "lucide-react";
import Link from "next/link";
import { indiaLocations } from "@/data/compliance";

export const metadata = generatePageMetadata({
  title: "Coverage Areas | Lanzar",
  description: "Complete EOR coverage across India. Hire employees in all Indian states and union territories with full compliance and local expertise.",
  keywords: ["India coverage", "EOR coverage", "Indian states", "employment coverage", "pan India hiring"],
  path: "/coverage"
});

export default function CoveragePage() {
  const totalStates = indiaLocations.reduce((total, region) => total + (region.states?.length || 0), 0);

  return (
    <>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="slideUp" className="text-center mb-16">
            <Typography 
              variant="h1" 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 bg-clip-text text-transparent"
            >
              Pan-India EOR Coverage
            </Typography>
            <Typography 
              variant="lead" 
              className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8"
            >
              Comprehensive Employer of Record services across all {totalStates} states and union territories of India
            </Typography>
            <Typography 
              variant="bodyLarge" 
              className="text-lg text-foreground/80 max-w-4xl mx-auto mb-8"
            >
              From metropolitan cities to emerging markets, we ensure full compliance with local laws, 
              state-specific regulations, and regional requirements across every corner of India.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Start Hiring Today
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">
                  View Our Services
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Coverage Statistics */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <Card className="border-0 shadow-md text-center">
              <CardHeader className="pb-3">
                <div className="mx-auto h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <Globe className="h-5 w-5 text-blue-600" />
                </div>
                <CardTitle className="text-2xl font-bold">{totalStates}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>States & Union Territories</CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md text-center">
              <CardHeader className="pb-3">
                <div className="mx-auto h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <CardTitle className="text-2xl font-bold">100%</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Compliance Coverage</CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md text-center">
              <CardHeader className="pb-3">
                <div className="mx-auto h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center mb-3">
                  <Building className="h-5 w-5 text-orange-600" />
                </div>
                <CardTitle className="text-2xl font-bold">5</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Regional Offices</CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md text-center">
              <CardHeader className="pb-3">
                <div className="mx-auto h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                  <MapPin className="h-5 w-5 text-purple-600" />
                </div>
                <CardTitle className="text-2xl font-bold">24/7</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Local Support</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Regional Coverage */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="slideUp" className="text-center mb-16">
            <Typography variant="h2" className="text-3xl md:text-4xl font-bold mb-6">
              Regional Coverage
            </Typography>
            <Typography variant="lead" className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete coverage across all regions of India with local expertise and compliance
            </Typography>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {indiaLocations.map((region) => (
              <Card key={region.region} className="border-0 shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{region.region}</CardTitle>
                      <CardDescription>{region.states?.length || 0} states/territories</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {region.states?.map((state) => (
                      <Badge key={state} variant="outline" className="text-xs text-center py-1">
                        {state}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="slideUp" className="text-center mb-16">
            <Typography variant="h2" className="text-3xl md:text-4xl font-bold mb-6">
              Why Our Coverage Matters
            </Typography>
            <Typography variant="lead" className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Local expertise and compliance knowledge for every region
            </Typography>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Local Compliance Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Deep understanding of state-specific labor laws, tax regulations, and local compliance requirements.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Regional Support Teams</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Dedicated regional teams with local language support and cultural understanding.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">State Government Relations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Established relationships with state labor departments and regulatory authorities.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Local Banking Partnerships</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Regional banking partnerships for seamless salary disbursements and local transactions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Real-time Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Stay updated with changing state regulations and compliance requirements.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Uniform Standards</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Consistent service quality and compliance standards across all regions.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-orange-50 to-purple-50 dark:from-orange-950/20 dark:to-purple-950/20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="slideUp" className="text-center">
            <Typography variant="h2" className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Hire Anywhere in India?
            </Typography>
            <Typography variant="lead" className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              With our comprehensive coverage, you can hire top talent from any corner of India 
              with complete confidence in compliance and local support.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Schedule Consultation
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">
                  Explore EOR Services
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
