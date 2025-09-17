import { generatePageMetadata } from "@/lib/metadata";
import { AnimatedSection } from "@/components/templates/animated-section";
import { Typography } from "@/components/atoms/typography";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Eye, Database, CheckCircle, AlertTriangle } from "lucide-react";
import Link from "next/link";

export const metadata = generatePageMetadata({
  title: "Security & Data Protection | Lanzar",
  description: "Enterprise-grade security and data protection for EOR services. Learn about our security measures, compliance standards, and data privacy practices.",
  keywords: ["data security", "privacy protection", "EOR security", "compliance security", "employee data protection"],
  path: "/security"
});

const securityMeasures = [
  {
    title: "Data Encryption",
    description: "End-to-end encryption for all employee and company data",
    details: [
      "AES-256 encryption at rest",
      "TLS 1.3 encryption in transit",
      "Encrypted database storage",
      "Secure API communications"
    ],
    icon: Lock,
    color: "blue"
  },
  {
    title: "Access Controls",
    description: "Strict access controls and authentication protocols",
    details: [
      "Multi-factor authentication (MFA)",
      "Role-based access control (RBAC)",
      "Single Sign-On (SSO) support",
      "Regular access reviews"
    ],
    icon: Shield,
    color: "green"
  },
  {
    title: "Data Privacy",
    description: "Comprehensive data privacy and protection measures",
    details: [
      "GDPR compliance framework",
      "Data minimization practices",
      "Purpose limitation controls",
      "Employee consent management"
    ],
    icon: Eye,
    color: "purple"
  },
  {
    title: "Infrastructure Security",
    description: "Secure cloud infrastructure and monitoring",
    details: [
      "ISO 27001 certified data centers",
      "24/7 security monitoring",
      "Regular security audits",
      "Incident response procedures"
    ],
    icon: Database,
    color: "orange"
  }
];

const complianceFrameworks = [
  {
    name: "ISO 27001",
    description: "Information Security Management System",
    status: "Certified",
    details: "Internationally recognized standard for information security management"
  },
  {
    name: "SOC 2 Type II",
    description: "Security, Availability, and Confidentiality",
    status: "Audited",
    details: "Regular third-party audits for security and availability controls"
  },
  {
    name: "GDPR",
    description: "General Data Protection Regulation",
    status: "Compliant",
    details: "Full compliance with European data protection requirements"
  },
  {
    name: "PCI DSS",
    description: "Payment Card Industry Data Security Standard",
    status: "Compliant",
    details: "Secure handling of payment and financial information"
  }
];

export default function SecurityPage() {
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
              Security & Data Protection
            </Typography>
            <Typography 
              variant="lead" 
              className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8"
            >
              Enterprise-grade security protecting your employees&apos; data and your business
            </Typography>
            <Typography 
              variant="bodyLarge" 
              className="text-lg text-foreground/80 max-w-4xl mx-auto mb-8"
            >
              We understand that handling employee data comes with significant responsibility. 
              Our comprehensive security framework ensures your sensitive information is protected 
              with bank-level security measures and industry-leading compliance standards.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Discuss Security Requirements
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/compliance">
                  View Compliance Guide
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Security Overview */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <Card className="border-0 shadow-md text-center">
              <CardHeader className="pb-3">
                <div className="mx-auto h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <Shield className="h-5 w-5 text-blue-600" />
                </div>
                <CardTitle className="text-2xl font-bold">256-bit</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>AES Encryption Standard</CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md text-center">
              <CardHeader className="pb-3">
                <div className="mx-auto h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <CardTitle className="text-2xl font-bold">ISO 27001</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Security Certification</CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md text-center">
              <CardHeader className="pb-3">
                <div className="mx-auto h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                  <Eye className="h-5 w-5 text-purple-600" />
                </div>
                <CardTitle className="text-2xl font-bold">24/7</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Security Monitoring</CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md text-center">
              <CardHeader className="pb-3">
                <div className="mx-auto h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center mb-3">
                  <AlertTriangle className="h-5 w-5 text-orange-600" />
                </div>
                <CardTitle className="text-2xl font-bold">Zero</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Security Breaches</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="slideUp" className="text-center mb-16">
            <Typography variant="h2" className="text-3xl md:text-4xl font-bold mb-6">
              Security Measures
            </Typography>
            <Typography variant="lead" className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Multi-layered security approach protecting every aspect of your data
            </Typography>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityMeasures.map((measure) => (
              <Card key={measure.title} className="border-0 shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={`h-10 w-10 bg-${measure.color}-100 rounded-lg flex items-center justify-center`}>
                      <measure.icon className={`h-4 w-4 text-${measure.color}-600`} />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{measure.title}</CardTitle>
                      <CardDescription>{measure.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {measure.details.map((detail, detailIndex) => (
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

      {/* Compliance Frameworks */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="slideUp" className="text-center mb-16">
            <Typography variant="h2" className="text-3xl md:text-4xl font-bold mb-6">
              Compliance & Certifications
            </Typography>
            <Typography variant="lead" className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Industry-leading compliance standards and certifications
            </Typography>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {complianceFrameworks.map((framework) => (
              <Card key={framework.name} className="border-0 shadow-md">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">{framework.name}</CardTitle>
                      <CardDescription>{framework.description}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {framework.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{framework.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Data Handling Practices */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="slideUp" className="text-center mb-16">
            <Typography variant="h2" className="text-3xl md:text-4xl font-bold mb-6">
              Data Handling Practices
            </Typography>
            <Typography variant="lead" className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transparent and responsible data management practices
            </Typography>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Data Minimization</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We collect and process only the minimum data necessary for EOR services, ensuring privacy by design.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Purpose Limitation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Employee data is used strictly for employment, payroll, and compliance purposes as agreed.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Data Retention</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Data is retained only as long as necessary for legal and business requirements, then securely deleted.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Employee Rights</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Employees have full rights to access, correct, and request deletion of their personal data.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Data Portability</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Employee data can be exported in standard formats when requested or upon service termination.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Incident Response</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Comprehensive incident response plan with immediate notification and remediation procedures.
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
              Your Data Security is Our Priority
            </Typography>
            <Typography variant="lead" className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Trust Lanzar with your employee data. Our enterprise-grade security measures and 
              compliance standards ensure your information is always protected.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Discuss Security Requirements
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/privacy">
                  Read Privacy Policy
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
