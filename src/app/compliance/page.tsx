import { generatePageMetadata } from "@/lib/metadata";
import { AnimatedSection } from "@/components/templates/animated-section";
import { Typography } from "@/components/atoms/typography";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, FileText, Scale, AlertTriangle, CheckCircle, Clock } from "lucide-react";
import Link from "next/link";

export const metadata = generatePageMetadata({
  title: "Compliance Guide | Lanzar",
  description: "Complete guide to Indian labor law compliance for EOR services. Understand employment regulations, tax requirements, and statutory obligations.",
  keywords: ["India compliance", "labor law", "employment law", "tax compliance", "statutory requirements", "EOR compliance"],
  path: "/compliance"
});

const complianceAreas = [
  {
    title: "Employment Laws",
    description: "Central and state employment regulations",
    items: [
      "Industrial Relations Code, 2020",
      "Wages Code, 2019", 
      "Social Security Code, 2020",
      "Occupational Safety Code, 2020",
      "Contract Labour Act",
      "Payment of Wages Act"
    ],
    icon: FileText,
    color: "blue"
  },
  {
    title: "Tax Compliance",
    description: "Income tax and statutory deductions",
    items: [
      "Income Tax Act, 1961",
      "TDS (Tax Deducted at Source)",
      "Form 16 generation",
      "Professional Tax",
      "Advance Tax payments",
      "ITR filings"
    ],
    icon: Scale,
    color: "green"
  },
  {
    title: "Social Security",
    description: "Employee benefits and welfare schemes",
    items: [
      "Employee Provident Fund (EPF)",
      "Employee State Insurance (ESI)",
      "Employees' Deposit Linked Insurance",
      "Gratuity calculations",
      "Maternity Benefits",
      "Workmen's Compensation"
    ],
    icon: Shield,
    color: "purple"
  },
  {
    title: "State Regulations",
    description: "State-specific compliance requirements",
    items: [
      "Shops & Establishments Act",
      "State Professional Tax",
      "Labour Welfare Fund",
      "State-specific minimum wages",
      "Local municipality rules",
      "Regional language requirements"
    ],
    icon: AlertTriangle,
    color: "orange"
  }
];

const complianceProcess = [
  {
    step: 1,
    title: "Registration & Setup",
    description: "Company registration with relevant authorities",
    details: [
      "EPF registration",
      "ESI registration", 
      "Professional Tax registration",
      "Labour Department registration",
      "Shops & Establishments license"
    ]
  },
  {
    step: 2,
    title: "Employee Onboarding",
    description: "Compliant employee documentation and setup",
    details: [
      "Employment agreement preparation",
      "EPF account opening",
      "ESI enrollment",
      "Tax declarations (Form 12BB)",
      "Bank account verification"
    ]
  },
  {
    step: 3,
    title: "Monthly Compliance",
    description: "Regular monthly compliance activities",
    details: [
      "Salary processing",
      "TDS calculations and payments",
      "EPF & ESI contributions",
      "Professional Tax payments",
      "Statutory returns filing"
    ]
  },
  {
    step: 4,
    title: "Annual Compliance",
    description: "Year-end compliance and documentation",
    details: [
      "Form 16 generation",
      "Annual returns filing",
      "Gratuity calculations",
      "Bonus calculations",
      "Compliance audits"
    ]
  }
];

export default function CompliancePage() {
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
              Indian Compliance Guide
            </Typography>
            <Typography 
              variant="lead" 
              className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8"
            >
              Complete guide to employment compliance in India for global companies
            </Typography>
            <Typography 
              variant="bodyLarge" 
              className="text-lg text-foreground/80 max-w-4xl mx-auto mb-8"
            >
              Navigate India&apos;s complex regulatory landscape with confidence. Our comprehensive compliance 
              framework ensures 100% adherence to all central and state regulations, protecting your 
              business from legal risks and penalties.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Get Compliance Assessment
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

      {/* Compliance Statistics */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <Card className="border-0 shadow-md text-center">
              <CardHeader className="pb-3">
                <div className="mx-auto h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <CardTitle className="text-2xl font-bold">100%</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Compliance Rate</CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md text-center">
              <CardHeader className="pb-3">
                <div className="mx-auto h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <FileText className="h-5 w-5 text-blue-600" />
                </div>
                <CardTitle className="text-2xl font-bold">50+</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Regulations Monitored</CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md text-center">
              <CardHeader className="pb-3">
                <div className="mx-auto h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                  <Shield className="h-5 w-5 text-purple-600" />
                </div>
                <CardTitle className="text-2xl font-bold">Zero</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Compliance Violations</CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md text-center">
              <CardHeader className="pb-3">
                <div className="mx-auto h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center mb-3">
                  <Clock className="h-5 w-5 text-orange-600" />
                </div>
                <CardTitle className="text-2xl font-bold">24/7</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Compliance Monitoring</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Compliance Areas */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="slideUp" className="text-center mb-16">
            <Typography variant="h2" className="text-3xl md:text-4xl font-bold mb-6">
              Key Compliance Areas
            </Typography>
            <Typography variant="lead" className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive coverage across all regulatory requirements
            </Typography>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {complianceAreas.map((area) => (
              <Card key={area.title} className="border-0 shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={`h-10 w-10 bg-${area.color}-100 rounded-lg flex items-center justify-center`}>
                      <area.icon className={`h-4 w-4 text-${area.color}-600`} />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{area.title}</CardTitle>
                      <CardDescription>{area.description}</CardDescription>
                    </div>
                  </div>
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

      {/* Compliance Process */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="slideUp" className="text-center mb-16">
            <Typography variant="h2" className="text-3xl md:text-4xl font-bold mb-6">
              Our Compliance Process
            </Typography>
            <Typography variant="lead" className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Systematic approach to ensuring complete compliance
            </Typography>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {complianceProcess.map((process) => (
              <Card key={process.step} className="border-0 shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{process.step}</span>
                    </div>
                    <div>
                      <CardTitle className="text-xl">{process.title}</CardTitle>
                      <CardDescription>{process.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {process.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-600" />
                        <span className="text-sm">{detail}</span>
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
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="slideUp" className="text-center mb-16">
            <Typography variant="h2" className="text-3xl md:text-4xl font-bold mb-6">
              Risk Management & Protection
            </Typography>
            <Typography variant="lead" className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive protection against compliance risks
            </Typography>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Legal Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Full legal protection and liability coverage for all employment-related compliance matters.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Penalty Insurance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Coverage against any penalties or fines resulting from compliance violations (rare but covered).
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Regular Audits</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Quarterly compliance audits and regular reviews to ensure continued adherence to all regulations.
                </CardDescription>
              </CardContent>
            </Card>
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
              Don&apos;t risk non-compliance penalties or legal issues. Our expert team ensures 100% compliance 
              with all Indian regulations so you can focus on growing your business.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Get Compliance Consultation
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">
                  View All EOR Services
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
