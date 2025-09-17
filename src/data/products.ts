import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "clavehr",
    name: "ClaveHR",
    tagline: "AI-Powered HR Super App",
    description: "Revolutionary HR management platform that leverages artificial intelligence to streamline recruitment, employee management, and organizational workflows. Transform your HR operations with intelligence and data-driven insights.",
    features: [
      {
        title: "AI Recruitment",
        description: "Intelligent candidate screening and matching",
        icon: "brain"
      },
      {
        title: "Employee Analytics",
        description: "Data-driven workforce insights",
        icon: "chart"
      },
      {
        title: "Automated Workflows",
        description: "Streamlined HR processes",
        icon: "workflow"
      },
      {
        title: "Performance Tracking",
        description: "Real-time employee performance monitoring",
        icon: "target"
      }
    ],
    website: "https://www.clavehr.in",
    category: "hr",
    status: "active",
    images: [
      {
        url: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&crop=center",
        alt: "ClaveHR HR Management Dashboard",
        type: "hero"
      },
      {
        url: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop&crop=center",
        alt: "ClaveHR Interface Screenshot",
        type: "screenshot"
      }
    ]
  },
  {
    id: "tymlnkd",
    name: "Tymlnkd",
    tagline: "Chronological Story Website",
    description: "Innovative storytelling platform that presents narratives in a unique chronological format. Perfect for personal stories, business journeys, project timelines, and historical documentation with beautiful visual presentation.",
    features: [
      {
        title: "Timeline View",
        description: "Beautiful chronological story presentation",
        icon: "timeline"
      },
      {
        title: "Rich Media",
        description: "Support for images, videos, and documents",
        icon: "media"
      },
      {
        title: "Interactive Elements",
        description: "Engaging user interactions",
        icon: "interaction"
      },
      {
        title: "Responsive Design",
        description: "Perfect on all devices",
        icon: "responsive"
      }
    ],
    website: "https://www.tymlnkd.com",
    category: "storytelling",
    status: "active",
    images: [
      {
        url: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&crop=center",
        alt: "Tymlnkd Timeline Interface",
        type: "hero"
      },
      {
        url: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=center",
        alt: "Tymlnkd Story View",
        type: "screenshot"
      }
    ]
  },
  {
    id: "lanzar",
    name: "Lanzar",
    tagline: "Rapid Software Development",
    description: "Our elite software development wing that delivers high-quality applications in just one month. From concept to deployment, we accelerate your digital transformation with proven methodologies and cutting-edge technologies.",
    features: [
      {
        title: "30-Day Delivery",
        description: "Complete applications in one month",
        icon: "clock"
      },
      {
        title: "Full-Stack Solutions",
        description: "End-to-end development services",
        icon: "stack"
      },
      {
        title: "Modern Tech Stack",
        description: "Latest technologies and frameworks",
        icon: "tech"
      },
      {
        title: "Quality Assurance",
        description: "Rigorous testing and optimization",
        icon: "quality"
      }
    ],
    website: "https://www.lanzar.in",
    category: "development",
    status: "active",
    images: [
      {
        url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop&crop=center",
        alt: "Lanzar Development Process",
        type: "hero"
      },
      {
        url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&crop=center",
        alt: "Lanzar Project Dashboard",
        type: "screenshot"
      }
    ]
  }
];