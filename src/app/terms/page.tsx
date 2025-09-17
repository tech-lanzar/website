import { LegalDocumentLayout } from '@/components/templates/legal-document-layout';
import { Typography } from '@/components/atoms/typography';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Lanzar',
  description: 'Review the terms and conditions for using Lanzar EOR services. Understand your rights and responsibilities as a client or employee.',
  keywords: 'terms of service, terms and conditions, EOR agreement, legal terms, Lanzar, employer of record',
};

const tableOfContents = [
  { id: 'acceptance', title: 'Acceptance of Terms', level: 1 },
  { id: 'description', title: 'Description of EOR Services', level: 1 },
  { id: 'service-scope', title: 'Service Scope and Responsibilities', level: 2 },
  { id: 'client-obligations', title: 'Client Obligations', level: 2 },
  { id: 'employee-rights', title: 'Employee Rights and Responsibilities', level: 1 },
  { id: 'compliance', title: 'Compliance and Legal Requirements', level: 1 },
  { id: 'payment-terms', title: 'Payment Terms and Billing', level: 1 },
  { id: 'data-protection', title: 'Data Protection and Privacy', level: 1 },
  { id: 'limitation-liability', title: 'Limitation of Liability', level: 1 },
  { id: 'indemnification', title: 'Indemnification', level: 1 },
  { id: 'termination', title: 'Termination of Services', level: 1 },
  { id: 'governing-law', title: 'Governing Law and Jurisdiction', level: 1 },
  { id: 'changes-to-terms', title: 'Changes to These Terms', level: 1 },
  { id: 'contact-information', title: 'Contact Information', level: 1 },
];

export default function TermsOfServicePage() {
  return (
    <LegalDocumentLayout
      title="Terms of Service"
      lastUpdated="December 15, 2024"
      effectiveDate="December 15, 2024"
      tableOfContents={tableOfContents}
    >
      <section id="acceptance">
        <Typography variant="h2" className="text-2xl font-bold mb-4">
          Acceptance of Terms
        </Typography>
        <Typography className="mb-4">
          Welcome to Lanzar Private Limited (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). These Terms of Service (&quot;Terms&quot;) govern your use of our Employer of Record (EOR) services, website, and related services (collectively, the &quot;Services&quot;).
        </Typography>
        <Typography className="mb-4">
          These Terms apply to both clients who engage our EOR services and employees who are managed under our EOR arrangements. By accessing or using our Services, you agree to be bound by these Terms.
        </Typography>
        <Typography className="mb-6">
          If you disagree with any part of these terms, then you may not access or use the Services.
        </Typography>
      </section>

      <section id="description">
        <Typography variant="h2" className="text-2xl font-bold mb-4">
          Description of EOR Services
        </Typography>
        <Typography className="mb-4">
          Lanzar provides Employer of Record services to enable US and European companies to hire and manage employees in India without establishing a local legal entity. Our services include employment management, payroll processing, compliance, benefits administration, and HR support.
        </Typography>

        <div id="service-scope" className="mb-6">
          <Typography variant="h3" className="text-xl font-semibold mb-3">
            Service Scope and Responsibilities
          </Typography>
          <Typography className="mb-3">
            Our EOR services include but are not limited to:
          </Typography>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Legal employment of individuals on behalf of clients</li>
            <li>Payroll processing and salary disbursement</li>
            <li>Tax calculations, deductions, and filings</li>
            <li>Statutory compliance (EPF, ESI, professional tax)</li>
            <li>Benefits administration and insurance management</li>
            <li>Employment contract creation and management</li>
            <li>HR support and performance management coordination</li>
            <li>Onboarding and offboarding processes</li>
            <li>Regulatory compliance and reporting</li>
          </ul>
        </div>

        <div id="client-obligations" className="mb-6">
          <Typography variant="h3" className="text-xl font-semibold mb-3">
            Client Obligations
          </Typography>
          <Typography className="mb-3">
            Clients engaging our EOR services agree to:
          </Typography>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Provide accurate and complete information about employees and job requirements</li>
            <li>Ensure work assignments comply with applicable laws and regulations</li>
            <li>Respect employee rights and maintain appropriate working conditions</li>
            <li>Pay all fees and charges as outlined in the service agreement</li>
            <li>Notify Lanzar of any changes to employee status or requirements</li>
            <li>Cooperate with compliance requirements and audits</li>
            <li>Maintain confidentiality of employee information</li>
          </ul>
        </div>
      </section>

      <section id="employee-rights">
        <Typography variant="h2" className="text-2xl font-bold mb-4">
          Employee Rights and Responsibilities
        </Typography>
        <Typography className="mb-3">
          Employees managed under our EOR services have the following rights:
        </Typography>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Fair treatment and non-discrimination</li>
          <li>Timely payment of salaries and benefits</li>
          <li>Compliance with Indian labor laws and regulations</li>
          <li>Access to statutory benefits and social security</li>
          <li>Data privacy and protection of personal information</li>
          <li>Grievance resolution and support mechanisms</li>
        </ul>
        <Typography className="mb-6">
          Employees are responsible for performing their duties professionally, maintaining confidentiality, and complying with applicable policies and procedures.
        </Typography>
      </section>

      <section id="compliance">
        <Typography variant="h2" className="text-2xl font-bold mb-4">
          Compliance and Legal Requirements
        </Typography>
        <Typography className="mb-4">
          Lanzar ensures full compliance with Indian labor laws, tax regulations, and statutory requirements. We maintain certifications and follow best practices for:
        </Typography>
        <ul className="list-disc pl-6 mb-6 space-y-1">
          <li>Industrial Relations Code, 2020</li>
          <li>Wages Code, 2019</li>
          <li>Social Security Code, 2020</li>
          <li>Occupational Safety Code, 2020</li>
          <li>Income Tax Act, 1961</li>
          <li>Employee Provident Fund and Miscellaneous Provisions Act</li>
          <li>Employee State Insurance Act</li>
          <li>State-specific labor regulations</li>
        </ul>
      </section>

      <section id="payment-terms">
        <Typography variant="h2" className="text-2xl font-bold mb-4">
          Payment Terms and Billing
        </Typography>
        <Typography className="mb-3">
          Payment terms for our EOR services are as follows:
        </Typography>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Service fees are charged monthly in advance</li>
          <li>Employee salaries and statutory payments are processed on agreed schedules</li>
          <li>Additional charges may apply for expedited services or special requirements</li>
          <li>All payments must be made in Indian Rupees unless otherwise agreed</li>
          <li>Late payment charges may apply as per the service agreement</li>
          <li>Refunds are subject to the terms of the specific service agreement</li>
        </ul>
        <Typography className="mb-6">
          Detailed billing information is provided in individual service agreements with clients.
        </Typography>
      </section>

      <section id="data-protection">
        <Typography variant="h2" className="text-2xl font-bold mb-4">
          Data Protection and Privacy
        </Typography>
        <Typography className="mb-4">
          We are committed to protecting the privacy and security of all personal data processed through our EOR services. Our data handling practices are governed by our Privacy Policy and comply with applicable data protection laws including:
        </Typography>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Digital Personal Data Protection Act (India)</li>
          <li>General Data Protection Regulation (GDPR) for EU data subjects</li>
          <li>ISO 27001 information security standards</li>
          <li>SOC 2 Type II compliance requirements</li>
        </ul>
        <Typography className="mb-6">
          Please refer to our Privacy Policy for detailed information about data collection, use, and protection practices.
        </Typography>
      </section>

      <section id="limitation-liability">
        <Typography variant="h2" className="text-2xl font-bold mb-4">
          Limitation of Liability
        </Typography>
        <Typography className="mb-4">
          To the maximum extent permitted by law, Lanzar&apos;s liability for any claims arising from our EOR services shall be limited to the total fees paid by the client for the services in the twelve months preceding the claim.
        </Typography>
        <Typography className="mb-6">
          We shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities.
        </Typography>
      </section>

      <section id="indemnification">
        <Typography variant="h2" className="text-2xl font-bold mb-4">
          Indemnification
        </Typography>
        <Typography className="mb-6">
          Clients agree to indemnify and hold harmless Lanzar from any claims, damages, or expenses arising from the client&apos;s breach of these Terms, violation of applicable laws, or actions that exceed the scope of our EOR services.
        </Typography>
      </section>

      <section id="termination">
        <Typography variant="h2" className="text-2xl font-bold mb-4">
          Termination of Services
        </Typography>
        <Typography className="mb-4">
          Either party may terminate EOR services with appropriate notice as specified in the service agreement. Upon termination:
        </Typography>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>All outstanding obligations must be settled</li>
          <li>Employee data will be transferred or securely destroyed as requested</li>
          <li>Final payments and statutory filings will be completed</li>
          <li>Transition support will be provided as agreed</li>
        </ul>
        <Typography className="mb-6">
          Specific termination procedures are outlined in individual service agreements.
        </Typography>
      </section>

      <section id="governing-law">
        <Typography variant="h2" className="text-2xl font-bold mb-4">
          Governing Law and Jurisdiction
        </Typography>
        <Typography className="mb-6">
          These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka, India.
        </Typography>
      </section>

      <section id="changes-to-terms">
        <Typography variant="h2" className="text-2xl font-bold mb-4">
          Changes to These Terms
        </Typography>
        <Typography className="mb-6">
          We may update these Terms from time to time. We will notify clients and affected employees of any material changes. Continued use of our services after such changes constitutes acceptance of the updated Terms.
        </Typography>
      </section>

      <section id="contact-information">
        <Typography variant="h2" className="text-2xl font-bold mb-4">
          Contact Information
        </Typography>
        <Typography className="mb-3">
          For questions about these Terms or our EOR services, please contact us:
        </Typography>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="space-y-2">
            <div><strong>Email:</strong> contact@lanzar.in</div>
            <div><strong>Legal:</strong> legal@lanzar.in</div>
            <div><strong>Address:</strong> Lanzar Private Limited</div>
            <div className="ml-16">Block B, G4, Aparna Maple, Kanarayanapura Main Road</div>
            <div className="ml-16">R K Hegde Nagar, Bangalore, Karnataka 560077, India</div>
            <div><strong>Phone:</strong> +91 72595 88047</div>
          </div>
        </div>
      </section>
    </LegalDocumentLayout>
  );
}