import type { Company } from "@/types/company";

export const company: Company = {
  name: "Lanzar",
  tagline: "Your Gateway to India's Top Talent",
  description: "Lanzar is an Employer of Record (EOR) service provider in India, designed to support US and European companies that wish to hire talent in India without setting up their own legal entity. By acting as the legal employer, we ensure full compliance with Indian labor laws while you retain complete control over day-to-day work and performance management.",
  founded: new Date("2024-11-29"),
  phone: "+91 72595 88047",
  cin: "U62011KA2024PTC195460",
  email: "contact@lanzar.in",
  headquarters: {
    street: "Vikpalla Software Private Limited, Corporate Membership No 031, WeWork Manyata Mahogany, Embassy Manyata Business Park, F2 Block-Mahogany Outer Ring Road, Nagavara",
    city: "Bangalore",
    state: "Karnataka",
    country: "India",
    postalCode: "560077"
  },
  leadership: [
    {
      name: "Ramya Balendiran ",
      position: "Founder & CEO",
      bio: "Founder of Lanzar, India's trusted Employer of Record service provider for US and European companies. Ramya is a visionary leader with over 10 years of experience in business strategy, HR compliance, and international employment solutions. Passionate about enabling global companies to access India's top talent seamlessly.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      socialLinks: [
        {
          platform: "LinkedIn",
          url: "https://linkedin.com/in/ramya-balendiran",
          icon: "linkedin"
        }
      ]
    },
    {
      name: "Manibabu, Pippalla",
      position: "Co-Founder & CTO",
      bio: "Co-Founder of Lanzar, specializing in HR technology and compliance automation. Manibabu is a technology expert with deep expertise in payroll systems, compliance automation, and scalable HR infrastructure. Also leads the development of Clave HR, our integrated HRMS platform for enhanced workforce engagement.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      socialLinks: [
        {
          platform: "LinkedIn",
          url: "https://linkedin.com/in/pippalla",
          icon: "linkedin"
        }
      ]
    },
    {
      name: "Visweswara Srinivas, Pippalla",
      position: "GM Finance & Strategy",
      bio: "GM Finance & Strategy of Lanzar, overseeing financial compliance and regulatory strategy for EOR operations. Visweswara is a finance strategist with expertise in international payroll, tax compliance, and regulatory frameworks. Ensures risk-free operations and maintains perfect compliance records for our global clients.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      socialLinks: [
        {
          platform: "LinkedIn",
          url: "https://linkedin.com/in/visweswara-srinivas-pippalla-636398157",
          icon: "linkedin"
        }
      ]
    }
  ],
  values: [
    "Compliance",
    "Transparency",
    "Reliability", 
    "Innovation",
    "Integrity",
    "Excellence"
  ]
};

export const companyStats = [
  {
    label: "US & EU Companies",
    value: "50+",
    description: "Successfully expanded to India"
  },
  {
    label: "Employees Managed",
    value: "1000+",
    description: "Across India through our EOR services"
  },
  {
    label: "Compliance Rate",
    value: "100%",
    description: "Risk-free operations guaranteed"
  }
];