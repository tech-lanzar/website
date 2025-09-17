import type { Company } from "@/types/company"
import type { Product } from "@/types/product"

export function generateOrganizationSchema(company: Company) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": company.name,
    "description": company.description,
    "url": "https://vikpalla.in",
    "logo": "https://vikpalla.in/images/Header.png",
    "foundingDate": company.founded.toISOString().split('T')[0],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": company.headquarters.street,
      "addressLocality": company.headquarters.city,
      "addressRegion": company.headquarters.state,
      "postalCode": company.headquarters.postalCode,
      "addressCountry": company.headquarters.country
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-80-1234-5678",
      "contactType": "customer service",
      "email": "contact@vikpalla.in"
    },
    "sameAs": [
      "https://linkedin.com/company/vikpalla",
      "https://twitter.com/vikpalla",
      "https://github.com/vikpalla"
    ]
  }
}

export function generateSoftwareApplicationSchema(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": product.name,
    "description": product.description,
    "url": product.website,
    "applicationCategory": getCategoryName(product.category),
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "author": {
      "@type": "Organization",
      "name": "Vikpalla Software Private Limited"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Vikpalla Software Private Limited"
    }
  }
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Vikpalla Software",
    "description": "Building the future with AI-powered HR solutions, storytelling platforms, and rapid software development.",
    "url": "https://vikpalla.in",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://vikpalla.in/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }
}

function getCategoryName(category: string): string {
  switch (category) {
    case 'hr':
      return 'BusinessApplication'
    case 'storytelling':
      return 'WebApplication'
    case 'development':
      return 'DeveloperApplication'
    default:
      return 'SoftwareApplication'
  }
}