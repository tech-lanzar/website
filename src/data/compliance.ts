export interface ComplianceInfo {
  framework: string;
  description: string;
  status: "certified" | "compliant" | "audited";
  lastUpdated: Date;
  coverage: string[];
  details: string[];
}

export interface GeographicCoverage {
  region: string;
  countries: string[];
  states?: string[];
  compliance: {
    laborLaws: boolean;
    taxRegulations: boolean;
    socialSecurity: boolean;
    dataProtection: boolean;
  };
  localSupport: boolean;
}

export const complianceFrameworks: ComplianceInfo[] = [
  {
    framework: "ISO 27001",
    description: "Information Security Management System",
    status: "certified",
    lastUpdated: new Date("2024-12-01"),
    coverage: ["Global"],
    details: [
      "Internationally recognized standard for information security management",
      "Annual third-party audits and assessments",
      "Comprehensive risk management framework",
      "Continuous monitoring and improvement"
    ]
  },
  {
    framework: "SOC 2 Type II",
    description: "Security, Availability, and Confidentiality",
    status: "audited",
    lastUpdated: new Date("2024-11-15"),
    coverage: ["United States", "Europe"],
    details: [
      "Regular third-party audits for security and availability controls",
      "Comprehensive evaluation of security policies and procedures",
      "Annual compliance verification and reporting",
      "Focus on data protection and system availability"
    ]
  },
  {
    framework: "GDPR",
    description: "General Data Protection Regulation",
    status: "compliant",
    lastUpdated: new Date("2024-12-01"),
    coverage: ["European Union", "Global Operations"],
    details: [
      "Full compliance with European data protection requirements",
      "Data minimization and purpose limitation practices",
      "Individual rights management and data portability",
      "Privacy by design implementation"
    ]
  },
  {
    framework: "PCI DSS",
    description: "Payment Card Industry Data Security Standard",
    status: "compliant",
    lastUpdated: new Date("2024-10-30"),
    coverage: ["Global"],
    details: [
      "Secure handling of payment and financial information",
      "Regular security assessments and penetration testing",
      "Encrypted data transmission and storage",
      "Comprehensive access control measures"
    ]
  },
  {
    framework: "India Labour Laws",
    description: "Complete Indian Employment Law Compliance",
    status: "certified",
    lastUpdated: new Date("2024-12-15"),
    coverage: ["All Indian States and Union Territories"],
    details: [
      "Industrial Relations Code, 2020 compliance",
      "Wages Code, 2019 implementation",
      "Social Security Code, 2020 adherence", 
      "Occupational Safety Code, 2020 compliance",
      "State-specific regulations and requirements",
      "Regular updates for changing regulations"
    ]
  }
];

export const indiaLocations: GeographicCoverage[] = [
  {
    region: "North India",
    countries: ["India"],
    states: [
      "Delhi", "Punjab", "Haryana", "Himachal Pradesh", 
      "Uttarakhand", "Uttar Pradesh", "Rajasthan", "Jammu and Kashmir", "Ladakh"
    ],
    compliance: {
      laborLaws: true,
      taxRegulations: true,
      socialSecurity: true,
      dataProtection: true
    },
    localSupport: true
  },
  {
    region: "South India", 
    countries: ["India"],
    states: [
      "Karnataka", "Tamil Nadu", "Andhra Pradesh", "Telangana",
      "Kerala", "Puducherry"
    ],
    compliance: {
      laborLaws: true,
      taxRegulations: true,
      socialSecurity: true,
      dataProtection: true
    },
    localSupport: true
  },
  {
    region: "West India",
    countries: ["India"],
    states: [
      "Maharashtra", "Gujarat", "Goa", "Rajasthan",
      "Dadra and Nagar Haveli and Daman and Diu"
    ],
    compliance: {
      laborLaws: true,
      taxRegulations: true,
      socialSecurity: true,
      dataProtection: true
    },
    localSupport: true
  },
  {
    region: "East India",
    countries: ["India"],
    states: [
      "West Bengal", "Bihar", "Jharkhand", "Odisha"
    ],
    compliance: {
      laborLaws: true,
      taxRegulations: true,
      socialSecurity: true,
      dataProtection: true
    },
    localSupport: true
  },
  {
    region: "Northeast India",
    countries: ["India"],
    states: [
      "Assam", "Arunachal Pradesh", "Manipur", "Meghalaya",
      "Mizoram", "Nagaland", "Sikkim", "Tripura"
    ],
    compliance: {
      laborLaws: true,
      taxRegulations: true,
      socialSecurity: true,
      dataProtection: true
    },
    localSupport: true
  },
  {
    region: "Central India",
    countries: ["India"],
    states: [
      "Madhya Pradesh", "Chhattisgarh"
    ],
    compliance: {
      laborLaws: true,
      taxRegulations: true,
      socialSecurity: true,
      dataProtection: true
    },
    localSupport: true
  }
];

export const legalDocuments = [
  {
    title: "Employment Agreement Templates",
    description: "Standard employment contracts compliant with Indian labor laws",
    scope: "All Indian states and union territories",
    lastUpdated: new Date("2024-12-01")
  },
  {
    title: "Privacy Policy Framework",
    description: "Comprehensive privacy policies for employee data protection",
    scope: "Global with India-specific provisions", 
    lastUpdated: new Date("2024-11-15")
  },
  {
    title: "Data Processing Agreements",
    description: "GDPR-compliant data processing agreements for international clients",
    scope: "European Union and global clients",
    lastUpdated: new Date("2024-10-30")
  },
  {
    title: "Terms of Service",
    description: "Service agreements covering EOR services and responsibilities",
    scope: "Global EOR services",
    lastUpdated: new Date("2024-12-10")
  }
];

export const certifications = [
  {
    name: "ISO 27001:2013",
    issuer: "BSI (British Standards Institution)",
    validUntil: new Date("2025-12-01"),
    scope: "Information Security Management System",
    certificateId: "ISO27001-2024-LZ-001"
  },
  {
    name: "SOC 2 Type II",
    issuer: "Ernst & Young",
    validUntil: new Date("2025-11-15"),
    scope: "Security, Availability, and Confidentiality",
    certificateId: "SOC2-2024-EY-002"
  },
  {
    name: "India Labour Compliance Certificate",
    issuer: "Ministry of Labour and Employment, Government of India",
    validUntil: new Date("2025-12-31"),
    scope: "All Indian Labour Laws and Regulations",
    certificateId: "IND-LAB-2024-003"
  }
];

