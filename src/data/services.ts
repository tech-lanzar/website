import type { Service } from "@/types/service";

export const services: Service[] = [
  {
    id: "employment",
    name: "Employment Services",
    tagline: "Compliant Hiring Across India",
    description: "Hire top talent anywhere in India without establishing a local entity. We handle all employment contracts, onboarding, and legal compliance, ensuring your team is properly employed according to Indian labor laws.",
    features: [
      {
        title: "Employment Contracts",
        description: "Legally compliant Indian employment contracts",
        icon: "contract"
      },
      {
        title: "Employee Onboarding",
        description: "Streamlined onboarding process and documentation",
        icon: "user-plus"
      },
      {
        title: "Labor Law Compliance",
        description: "Full adherence to Indian labor regulations",
        icon: "shield-check"
      },
      {
        title: "Employee Relations",
        description: "Professional HR support and conflict resolution",
        icon: "users"
      }
    ],
    category: "core",
    status: "active",
    coverage: ["All Indian States", "Union Territories"],
    pricing: {
      type: "per_employee",
      startingPrice: "$80",
      billingCycle: "monthly"
    },
    images: [
      {
        url: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop&crop=center",
        alt: "Employment Services India",
        type: "hero"
      }
    ]
  },
  {
    id: "payroll",
    name: "Payroll Management",
    tagline: "Accurate Indian Payroll Processing",
    description: "Complete payroll management service including salary processing, tax deductions, EPF, ESI, and statutory compliance. Ensure timely and accurate payments while maintaining full compliance with Indian payroll regulations.",
    features: [
      {
        title: "Salary Processing",
        description: "Monthly salary calculations and disbursements",
        icon: "calculator"
      },
      {
        title: "Tax Management",
        description: "TDS calculations and Form 16 generation",
        icon: "receipt-tax"
      },
      {
        title: "Statutory Compliance",
        description: "EPF, ESI, Professional Tax management",
        icon: "file-check"
      },
      {
        title: "Payroll Reports",
        description: "Detailed payroll analytics and reporting",
        icon: "chart-bar"
      }
    ],
    category: "core",
    status: "active",
    coverage: ["Pan India", "All States & UTs"],
    pricing: {
      type: "per_employee",
      startingPrice: "$30",
      billingCycle: "monthly"
    },
    images: [
      {
        url: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&crop=center",
        alt: "Payroll Management India",
        type: "hero"
      }
    ]
  },
  {
    id: "compliance",
    name: "Legal & Compliance",
    tagline: "Complete Regulatory Compliance",
    description: "Navigate India's complex regulatory landscape with confidence. We ensure full compliance with labor laws, tax regulations, and statutory requirements across all states and union territories.",
    features: [
      {
        title: "Labor Law Compliance",
        description: "Shops & Establishments, Contract Labor Act",
        icon: "scale"
      },
      {
        title: "Tax Compliance",
        description: "Income Tax, GST, and state tax obligations",
        icon: "receipt"
      },
      {
        title: "Statutory Filings",
        description: "Timely submission of all required forms",
        icon: "file-text"
      },
      {
        title: "Legal Updates",
        description: "Stay updated with changing regulations",
        icon: "bell"
      }
    ],
    category: "core",
    status: "active",
    coverage: ["Central Laws", "State Regulations", "Local Compliance"],
    pricing: {
      type: "per_employee",
      startingPrice: "$18",
      billingCycle: "monthly"
    },
    images: [
      {
        url: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop&crop=center",
        alt: "Legal Compliance India",
        type: "hero"
      }
    ]
  },
  {
    id: "benefits",
    name: "Benefits Administration",
    tagline: "Comprehensive Employee Benefits",
    description: "Manage employee benefits including health insurance, provident fund, gratuity, and other statutory and voluntary benefits. Provide competitive benefit packages that attract and retain top talent.",
    features: [
      {
        title: "Health Insurance",
        description: "Group health insurance plans and claims",
        icon: "heart"
      },
      {
        title: "Provident Fund",
        description: "EPF account management and tracking",
        icon: "piggy-bank"
      },
      {
        title: "Gratuity Management",
        description: "Gratuity calculations and fund management",
        icon: "gift"
      },
      {
        title: "Leave Management",
        description: "Annual, sick, and statutory leave tracking",
        icon: "calendar"
      }
    ],
    category: "supplementary",
    status: "active",
    coverage: ["Insurance Partners", "EPF Organization", "Gratuity Trust"],
    pricing: {
      type: "per_employee",
      startingPrice: "$36",
      billingCycle: "monthly"
    },
    images: [
      {
        url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&crop=center",
        alt: "Employee Benefits India",
        type: "hero"
      }
    ]
  },
  {
    id: "hr-support",
    name: "HR Support Services",
    tagline: "Dedicated HR Partnership",
    description: "Get dedicated HR support for performance management, employee engagement, policy development, and workforce planning. Scale your team with professional HR expertise.",
    features: [
      {
        title: "Performance Management",
        description: "Appraisal systems and goal tracking",
        icon: "target"
      },
      {
        title: "Policy Development",
        description: "HR policies aligned with Indian laws",
        icon: "book-open"
      },
      {
        title: "Employee Engagement",
        description: "Surveys, feedback, and engagement programs",
        icon: "heart-handshake"
      },
      {
        title: "Workforce Planning",
        description: "Strategic hiring and resource planning",
        icon: "users-cog"
      }
    ],
    category: "supplementary",
    status: "active",
    coverage: ["Remote HR Support", "On-site Consultations", "Training Programs"],
    pricing: {
      type: "per_employee",
      startingPrice: "$24",
      billingCycle: "monthly"
    },
    images: [
      {
        url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop&crop=center",
        alt: "HR Support Services",
        type: "hero"
      }
    ]
  },
  {
    id: "risk-management",
    name: "Risk & Liability Management",
    tagline: "Protect Your Business Interests",
    description: "Minimize employment-related risks and liabilities with our comprehensive risk management services. We assume legal responsibilities and provide insurance coverage for employment disputes.",
    features: [
      {
        title: "Employment Liability",
        description: "We assume employment-related legal risks",
        icon: "shield"
      },
      {
        title: "Dispute Resolution",
        description: "Professional handling of employment disputes",
        icon: "gavel"
      },
      {
        title: "Insurance Coverage",
        description: "Comprehensive employment liability insurance",
        icon: "umbrella"
      },
      {
        title: "Legal Support",
        description: "Expert legal counsel for employment matters",
        icon: "balance-scale"
      }
    ],
    category: "protection",
    status: "active",
    coverage: ["Employment Disputes", "Labor Court", "Legal Consultation"],
    pricing: {
      type: "per_employee",
      startingPrice: "$12",
      billingCycle: "monthly"
    },
    images: [
      {
        url: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&h=600&fit=crop&crop=center",
        alt: "Risk Management Services",
        type: "hero"
      }
    ]
  }
];

export const serviceCategories = [
  {
    id: "core",
    name: "Core EOR Services",
    description: "Essential services for employment and compliance",
    services: services.filter(service => service.category === "core")
  },
  {
    id: "supplementary", 
    name: "Supplementary Services",
    description: "Additional HR and benefits support",
    services: services.filter(service => service.category === "supplementary")
  },
  {
    id: "protection",
    name: "Risk Protection",
    description: "Legal and liability protection services",
    services: services.filter(service => service.category === "protection")
  }
];

export const indiaLocations = [
  {
    region: "North India",
    states: ["Delhi", "Haryana", "Punjab", "Uttar Pradesh", "Uttarakhand", "Himachal Pradesh", "Jammu & Kashmir", "Ladakh"]
  },
  {
    region: "West India", 
    states: ["Maharashtra", "Gujarat", "Rajasthan", "Goa", "Madhya Pradesh", "Chhattisgarh", "Daman & Diu", "Dadra & Nagar Haveli"]
  },
  {
    region: "South India",
    states: ["Karnataka", "Tamil Nadu", "Andhra Pradesh", "Telangana", "Kerala", "Puducherry", "Lakshadweep"]
  },
  {
    region: "East India",
    states: ["West Bengal", "Odisha", "Jharkhand", "Bihar", "Sikkim", "Andaman & Nicobar Islands"]
  },
  {
    region: "Northeast India",
    states: ["Assam", "Arunachal Pradesh", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Tripura"]
  }
];
