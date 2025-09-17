import { StructuredData } from "@/components/atoms/structured-data";
import { services } from "@/data/services";
import { generateServiceMetadata } from "@/lib/metadata";
import { AnimatedSection } from "@/components/templates/animated-section";
import { Typography } from "@/components/atoms/typography";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Calculator, FileCheck, IndianRupee, Shield } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

const service = services.find(s => s.id === 'payroll');

if (!service) {
  notFound();
}

export const metadata = generateServiceMetadata(service.name, service.description);

export default function PayrollServicesPage() {
  if (!service) {
    notFound();
  }

  const payrollFeatures = [
    {
      title: "TDS & Tax Compliance",
      description: "Automatic TDS calculations, Form 16 generation, and income tax compliance",
      icon: FileCheck
    },
    {
      title: "EPF & ESI Management", 
      description: "Employee Provident Fund and Employee State Insurance handling",
      icon: Shield
    },
    {
      title: "Professional Tax",
      description: "State-wise professional tax calculations and payments",
      icon: Calculator
    },
    {
      title: "Gratuity Management",
      description: "Gratuity calculations and fund management as per Indian law",
      icon: IndianRupee
    }
  ];

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
                <Link href="/services/employment">
                  View Employment Services
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
              Complete Payroll Solution
            </Typography>
            <Typography variant="lead" className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From salary processing to statutory compliance, we handle every aspect of Indian payroll
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

      {/* Additional Payroll Features */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="slideUp" className="text-center mb-16">
            <Typography variant="h2" className="text-3xl md:text-4xl font-bold mb-6">
              Statutory Compliance Included
            </Typography>
            <Typography variant="lead" className="text-xl text-muted-foreground max-w-3xl mx-auto">
              All Indian statutory requirements handled automatically
            </Typography>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {payrollFeatures.map((feature, index) => (
              <Card key={index} className="border-0 shadow-md text-center">
                <CardHeader className="pb-3">
                    <div className="mx-auto h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                    <feature.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="slideUp" className="text-center mb-16">
            <Typography variant="h2" className="text-3xl md:text-4xl font-bold mb-6">
              How Our Payroll Process Works
            </Typography>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-orange-600 font-bold text-lg">1</span>
                </div>
                <CardTitle>Data Collection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We collect attendance, leave, and salary data through our secure platform or integrate with your existing systems.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-purple-600 font-bold text-lg">2</span>
                </div>
                <CardTitle>Processing & Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Our system automatically calculates salaries, deductions, and ensures all statutory compliance requirements are met.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-600 font-bold text-lg">3</span>
                </div>
                <CardTitle>Payment & Reporting</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Salaries are disbursed on time, and detailed reports are provided for your records and auditing purposes.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="slideUp" className="text-center">
            <Typography variant="h2" className="text-3xl md:text-4xl font-bold mb-6">
              Simplify Your Indian Payroll Today
            </Typography>
            <Typography variant="lead" className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Let us handle the complexities of Indian payroll while you focus on growing your team. 
              Perfect accuracy and compliance guaranteed.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Get Payroll Quote
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services/compliance">
                  View Compliance Services
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
