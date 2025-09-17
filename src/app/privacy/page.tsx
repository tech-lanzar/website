import { LegalDocumentLayout } from '@/components/templates/legal-document-layout';
import { Typography } from '@/components/atoms/typography';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Lanzar',
  description: 'Learn how Lanzar collects, uses, and protects your personal information in our EOR services. Our comprehensive privacy policy explains our data handling practices.',
  keywords: 'privacy policy, data protection, GDPR, personal information, EOR, employee data, Lanzar',
};

const tableOfContents = [
  { id: 'introduction', title: 'Introduction', level: 1 },
  { id: 'information-we-collect', title: 'Information We Collect', level: 1 },
  { id: 'employee-data', title: 'Employee Data', level: 2 },
  { id: 'client-information', title: 'Client Information', level: 2 },
  { id: 'usage-data', title: 'Usage Data', level: 2 },
  { id: 'cookies', title: 'Cookies and Tracking', level: 2 },
  { id: 'how-we-use-information', title: 'How We Use Your Information', level: 1 },
  { id: 'eor-data-processing', title: 'EOR Data Processing', level: 2 },
  { id: 'information-sharing', title: 'Information Sharing and Disclosure', level: 1 },
  { id: 'data-security', title: 'Data Security', level: 1 },
  { id: 'data-retention', title: 'Data Retention', level: 1 },
  { id: 'your-rights', title: 'Your Rights and Choices', level: 1 },
  { id: 'international-transfers', title: 'International Data Transfers', level: 1 },
  { id: 'compliance', title: 'Compliance Frameworks', level: 1 },
  { id: 'changes-to-policy', title: 'Changes to This Policy', level: 1 },
  { id: 'contact-us', title: 'Contact Us', level: 1 },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalDocumentLayout
      title="Privacy Policy"
      lastUpdated="December 8, 2024"
      effectiveDate="December 8, 2024"
      tableOfContents={tableOfContents}
    >
      <section id="introduction">
        <Typography variant="h2" className="text-2xl font-bold mb-4">
          Introduction
        </Typography>
        <Typography className="mb-4">
          At Lanzar Private Limited (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our Employer of Record (EOR) services, or interact with us as clients or employees under our management.
        </Typography>
        <Typography className="mb-4">
          As an EOR service provider, we handle sensitive employee data on behalf of our clients and are committed to maintaining the highest standards of data protection and privacy. This policy covers both client data and employee data processed through our EOR services.
        </Typography>
        <Typography className="mb-6">
          By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
        </Typography>
      </section>

      <section id="information-we-collect">
        <Typography variant="h2" className="text-2xl font-bold mb-4">
          Information We Collect
        </Typography>
        <Typography className="mb-4">
          We collect several types of information from and about users of our services:
        </Typography>

        <div id="employee-data" className="mb-6">
          <Typography variant="h3" className="text-xl font-semibold mb-3">
            Employee Data (EOR Services)
          </Typography>
          <Typography className="mb-3">
            As part of our EOR services, we collect and process employee data on behalf of our clients, including:
          </Typography>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Personal identification information (name, address, phone, email, government IDs)</li>
            <li>Employment information (job title, department, start date, salary, benefits)</li>
            <li>Tax and payroll information (PAN, Aadhaar, bank details, tax declarations)</li>
            <li>Legal compliance data (EPF, ESI, professional tax information)</li>
            <li>Performance and HR records</li>
            <li>Emergency contact information</li>
            <li>Background verification data</li>
            <li>Medical information (for benefits administration, with consent)</li>
          </ul>
        </div>

        <div id="client-information" className="mb-6">
          <Typography variant="h3" className="text-xl font-semibold mb-3">
            Client Information
          </Typography>
          <Typography className="mb-3">
            We collect information from our corporate clients, including:
          </Typography>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Company information and registration details</li>
            <li>Authorized contact persons and their details</li>
            <li>Service requirements and preferences</li>
            <li>Payment and billing information</li>
            <li>Communication records and service history</li>
          </ul>
        </div>

        <div id="usage-data" className="mb-6">
          <Typography variant="h3" className="text-xl font-semibold mb-3">
            Usage Data
          </Typography>
          <Typography className="mb-3">
            We automatically collect certain information about your device and usage patterns:
          </Typography>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>IP address and location information</li>
            <li>Browser type and version</li>
            <li>Operating system and device information</li>
            <li>Pages visited and time spent on our services</li>
            <li>Referring website and search terms</li>
            <li>Log files and analytics data</li>
          </ul>
        </div>

        <div id="cookies" className="mb-6">
          <Typography variant="h3" className="text-xl font-semibold mb-3">
            Cookies and Tracking Technologies
          </Typography>
          <Typography className="mb-4">
            We use cookies, web beacons, and similar tracking technologies to enhance your experience and collect information about usage patterns. You can control cookie settings through your browser preferences.
          </Typography>
        </div>
      </section>

      <section id="how-we-use-information">
        <Typography variant="h2" className="text-2xl font-bold mb-4">
          How We Use Your Information
        </Typography>
        <Typography className="mb-3">
          We use the information we collect for various purposes, including:
        </Typography>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Providing EOR services including employment, payroll, and compliance</li>
          <li>Processing payroll, benefits, and tax obligations</li>
          <li>Ensuring compliance with Indian labor laws and regulations</li>
          <li>Managing employee onboarding, performance, and offboarding</li>
          <li>Communicating with clients and employees about services</li>
          <li>Responding to customer service and HR requests</li>
          <li>Analyzing usage patterns and improving user experience</li>
          <li>Detecting and preventing fraud and security threats</li>
          <li>Complying with legal and regulatory obligations</li>
        </ul>

        <div id="eor-data-processing" className="mb-6">
          <Typography variant="h3" className="text-xl font-semibold mb-3">
            EOR Data Processing
          </Typography>
          <Typography className="mb-3">
            For our EOR services, we process employee data specifically for:
          </Typography>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Employment contract creation and management</li>
            <li>Payroll processing and salary disbursement</li>
            <li>Tax calculations, deductions, and filings</li>
            <li>Statutory compliance (EPF, ESI, professional tax)</li>
            <li>Benefits administration and health insurance</li>
            <li>Performance management and appraisals</li>
            <li>Leave management and attendance tracking</li>
            <li>Background verification and compliance checks</li>
            <li>Reporting to clients and regulatory authorities</li>
          </ul>
        </div>
      </section>

      <section id="information-sharing">
        <Typography variant="h2" className="text-2xl font-bold mb-4">
          Information Sharing and Disclosure
        </Typography>
        <Typography className="mb-3">
          We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
        </Typography>
        <ul className="list-disc pl-6 mb-6 space-y-1">
          <li><strong>Service Providers:</strong> With trusted third-party vendors who assist in operating our business</li>
          <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
          <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
          <li><strong>Consent:</strong> With your explicit consent for specific purposes</li>
        </ul>
      </section>

      <section id="data-security">
        <Typography variant="h2" className="text-2xl font-bold mb-4">
          Data Security
        </Typography>
        <Typography className="mb-4">
          We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
        </Typography>
        <ul className="list-disc pl-6 mb-6 space-y-1">
          <li>Encryption of data in transit and at rest</li>
          <li>Regular security assessments and updates</li>
          <li>Access controls and authentication mechanisms</li>
          <li>Employee training on data protection practices</li>
          <li>Incident response and breach notification procedures</li>
        </ul>
      </section>

      <section id="data-retention">
        <Typography variant="h2" className="text-2xl font-bold mb-4">
          Data Retention
        </Typography>
        <Typography className="mb-6">
          We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements. When information is no longer needed, we securely delete or anonymize it.
        </Typography>
      </section>

      <section id="your-rights">
        <Typography variant="h2" className="text-2xl font-bold mb-4">
          Your Rights and Choices
        </Typography>
        <Typography className="mb-3">
          Depending on your location, you may have certain rights regarding your personal information:
        </Typography>
        <ul className="list-disc pl-6 mb-6 space-y-1">
          <li><strong>Access:</strong> Request access to your personal information</li>
          <li><strong>Correction:</strong> Request correction of inaccurate information</li>
          <li><strong>Deletion:</strong> Request deletion of your personal information</li>
          <li><strong>Portability:</strong> Request transfer of your data to another service</li>
          <li><strong>Objection:</strong> Object to certain processing activities</li>
          <li><strong>Restriction:</strong> Request restriction of processing</li>
          <li><strong>Withdrawal:</strong> Withdraw consent for processing based on consent</li>
        </ul>
        <Typography className="mb-6">
          To exercise these rights, please contact us using the information provided in the &quot;Contact Us&quot; section.
        </Typography>
      </section>

      <section id="international-transfers">
        <Typography variant="h2" className="text-2xl font-bold mb-4">
          International Data Transfers
        </Typography>
        <Typography className="mb-4">
          Your information may be transferred to and processed in countries other than your country of residence. For our EOR services, employee data is primarily processed within India in compliance with local data protection laws.
        </Typography>
        <Typography className="mb-6">
          When international transfers are necessary (such as for global clients), we ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards including standard contractual clauses and adequate safeguards to protect your information.
        </Typography>
      </section>

      <section id="compliance">
        <Typography variant="h2" className="text-2xl font-bold mb-4">
          Compliance Frameworks
        </Typography>
        <Typography className="mb-3">
          We maintain compliance with multiple data protection and security frameworks:
        </Typography>
        <ul className="list-disc pl-6 mb-6 space-y-1">
          <li><strong>ISO 27001:</strong> Information Security Management System certification</li>
          <li><strong>SOC 2 Type II:</strong> Security, Availability, and Confidentiality controls</li>
          <li><strong>GDPR:</strong> European General Data Protection Regulation compliance</li>
          <li><strong>Indian Data Protection Laws:</strong> Compliance with Digital Personal Data Protection Act</li>
          <li><strong>Industry Standards:</strong> Following best practices for EOR data handling</li>
        </ul>
      </section>

      <section id="changes-to-policy">
        <Typography variant="h2" className="text-2xl font-bold mb-4">
          Changes to This Privacy Policy
        </Typography>
        <Typography className="mb-6">
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date. We encourage you to review this Privacy Policy periodically for any changes.
        </Typography>
      </section>

      <section id="contact-us">
        <Typography variant="h2" className="text-2xl font-bold mb-4">
          Contact Us
        </Typography>
        <Typography className="mb-3">
          If you have any questions about this Privacy Policy or our data practices, please contact us:
        </Typography>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="space-y-2">
            <div><strong>Email:</strong> contact@lanzar.in</div>
            <div><strong>Data Protection Officer:</strong> dpo@lanzar.in</div>
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