import type { ContactInfo } from "@/types/contact";

export const contactInfo: ContactInfo = {
  email: "contact@lanzar.in",
  phone: "+91 72595 88047",
  address: {
    street: "Block B, G4, Aparna Maple, Kanarayanapura Main Road, R K Hegde Nagar",
    city: "Bangalore",
    state: "Karnataka",
    country: "India",
    postalCode: "560077"
  },
  businessHours: {
    monday: "9:00 AM - 6:00 PM",
    tuesday: "9:00 AM - 6:00 PM",
    wednesday: "9:00 AM - 6:00 PM",
    thursday: "9:00 AM - 6:00 PM",
    friday: "9:00 AM - 6:00 PM",
    saturday: "10:00 AM - 2:00 PM"
  },
  socialMedia: [
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/company/lanzar",
      icon: "linkedin"
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/lanzareor",
      icon: "twitter"
    },
    {
      platform: "GitHub",
      url: "https://github.com/lanzar",
      icon: "github"
    },
    {
      platform: "Email",
      url: "mailto:contact@lanzar.in",
      icon: "mail"
    }
  ]
};

export const inquiryTypes = [
  { value: "hiring", label: "Start Hiring in India" },
  { value: "services", label: "EOR Service Information" },
  { value: "compliance", label: "Compliance Questions" },
  { value: "partnership", label: "Partnership Opportunity" }
] as const;