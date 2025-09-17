export interface Service {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: ServiceFeature[];
  category: "core" | "supplementary" | "protection";
  status: "active" | "coming_soon" | "beta";
  coverage: string[];
  pricing: ServicePricing;
  images: ServiceImage[];
}

export interface ServiceFeature {
  title: string;
  description: string;
  icon: string;
}

export interface ServicePricing {
  type: "per_employee" | "flat_rate" | "custom";
  startingPrice: string;
  billingCycle: "monthly" | "quarterly" | "annually";
  customPricing?: boolean;
}

export interface ServiceImage {
  url: string;
  alt: string;
  type: "hero" | "screenshot" | "diagram" | "feature";
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  services: Service[];
}

export interface IndiaLocation {
  region: string;
  states: string[];
}
