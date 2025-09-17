export interface PricingTier {
  id: string;
  name: string;
  amount: number;
  currency: "INR" | "USD" | "EUR";
  period: "month" | "year" | "one-time";
  unit: "employee" | "project" | "service";
  description?: string;
  features?: string[];
  popular?: boolean;
}

export interface ServicePricing {
  serviceId: string;
  tiers: PricingTier[];
}

// Base pricing for EOR services
export const eorServicePricing: ServicePricing[] = [
  {
    serviceId: "employment",
    tiers: [
      {
        id: "employment-standard",
        name: "Standard Employment",
        amount: 5000,
        currency: "INR",
        period: "month",
        unit: "employee",
        description: "Complete employment management for your Indian workforce",
        features: [
          "Employment contract creation",
          "HR administration",
          "Onboarding & offboarding",
          "Performance management support",
          "Employee helpdesk",
          "Compliance monitoring"
        ],
        popular: true
      }
    ]
  },
  {
    serviceId: "payroll",
    tiers: [
      {
        id: "payroll-standard",
        name: "Payroll Management",
        amount: 2500,
        currency: "INR",
        period: "month",
        unit: "employee",
        description: "Comprehensive payroll processing and tax management",
        features: [
          "Monthly payroll processing",
          "Tax calculations and filings",
          "Statutory compliance (EPF, ESI)",
          "Salary slips and certificates",
          "Year-end tax documents",
          "Payroll analytics and reporting"
        ]
      }
    ]
  },
  {
    serviceId: "compliance",
    tiers: [
      {
        id: "compliance-standard",
        name: "Legal & Compliance",
        amount: 1500,
        currency: "INR",
        period: "month",
        unit: "employee",
        description: "Full legal compliance and regulatory management",
        features: [
          "Labour law compliance",
          "Regulatory filings",
          "Legal documentation",
          "Compliance audits",
          "Risk assessments",
          "Legal advisory support"
        ]
      }
    ]
  },
  {
    serviceId: "benefits",
    tiers: [
      {
        id: "benefits-standard",
        name: "Benefits Administration",
        amount: 3000,
        currency: "INR",
        period: "month",
        unit: "employee",
        description: "Comprehensive employee benefits management",
        features: [
          "Health insurance management",
          "Retirement planning (EPF/NPS)",
          "Leave management",
          "Wellness programs",
          "Employee assistance programs",
          "Benefits enrollment and claims"
        ]
      }
    ]
  },
  {
    serviceId: "hr-support",
    tiers: [
      {
        id: "hr-support-standard",
        name: "HR Support Services",
        amount: 2000,
        currency: "INR",
        period: "month",
        unit: "employee",
        description: "Dedicated HR support and employee relations",
        features: [
          "Employee relations management",
          "Performance review coordination",
          "Training and development",
          "Conflict resolution",
          "Policy development",
          "HR analytics and insights"
        ]
      }
    ]
  },
  {
    serviceId: "risk-management",
    tiers: [
      {
        id: "risk-management-standard",
        name: "Risk Management",
        amount: 1000,
        currency: "INR",
        period: "month",
        unit: "employee",
        description: "Comprehensive risk assessment and mitigation",
        features: [
          "Employment risk assessment",
          "Insurance coverage management",
          "Liability protection",
          "Incident management",
          "Risk reporting and analytics",
          "Emergency response planning"
        ]
      }
    ]
  }
];

// Helper function to get pricing for a specific service
export const getServicePricing = (serviceId: string): ServicePricing | undefined => {
  return eorServicePricing.find(pricing => pricing.serviceId === serviceId);
};

// Helper function to get the primary pricing tier for a service
export const getPrimaryPricing = (serviceId: string): PricingTier | undefined => {
  const servicePricing = getServicePricing(serviceId);
  return servicePricing?.tiers.find(tier => tier.popular) || servicePricing?.tiers[0];
};

// Helper function to format pricing
export const formatPricing = (pricing: PricingTier): string => {
  const currencySymbol = pricing.currency === "INR" ? "₹" : pricing.currency === "USD" ? "$" : "€";
  const amount = pricing.amount.toLocaleString();
  return `${currencySymbol}${amount}/${pricing.period}/${pricing.unit}`;
};

// Enterprise pricing (contact for custom pricing)
export const enterprisePricing: PricingTier = {
  id: "enterprise",
  name: "Enterprise",
  amount: 0,
  currency: "INR",
  period: "month",
  unit: "service",
  description: "Custom solutions for large organizations",
  features: [
    "Custom service configurations",
    "Dedicated account management",
    "Advanced compliance support",
    "Priority support and SLAs",
    "Custom integrations",
    "Volume discounts available"
  ]
};
