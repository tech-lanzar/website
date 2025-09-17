import { Metadata } from "next"
import { products } from "@/data/products"
import { ProductsHero } from "@/components/organisms/products-hero"
import { ProductDetailSection } from "@/components/organisms/product-detail-section"
import { StructuredData } from "@/components/atoms/structured-data"
import { generateSoftwareApplicationSchema, generateBreadcrumbSchema } from "@/lib/structured-data"

export const metadata: Metadata = {
  title: "Our Products | Vikpalla Software",
  description: "Discover our innovative software solutions: ClaveHR AI-powered HR platform, Tymlnkd chronological storytelling, and Lanzar rapid development services.",
  keywords: ["HR software", "AI recruitment", "storytelling platform", "software development", "business solutions"],
  openGraph: {
    title: "Innovative Software Products | Vikpalla Software",
    description: "Explore ClaveHR, Tymlnkd, and Lanzar - our suite of cutting-edge software solutions designed to transform your business operations.",
    url: "https://vikpalla.in/products",
    siteName: "Vikpalla Software",
    type: "website",
    images: [
      {
        url: "https://vikpalla.in/images/products-og.jpg",
        width: 1200,
        height: 630,
        alt: "Vikpalla Software Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Innovative Software Products | Vikpalla Software",
    description: "Explore ClaveHR, Tymlnkd, and Lanzar - our suite of cutting-edge software solutions designed to transform your business operations.",
    images: ["https://vikpalla.in/images/products-og.jpg"],
  },
}

export default function ProductsPage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://vikpalla.in" },
    { name: "Products", url: "https://vikpalla.in/products" }
  ]

  return (
    <>
      <StructuredData data={generateBreadcrumbSchema(breadcrumbItems)} />
      {products.map((product) => (
        <StructuredData key={product.id} data={generateSoftwareApplicationSchema(product)} />
      ))}

      <ProductsHero />

      <div className="container mx-auto px-4 py-16 space-y-24">
        {products.map((product, index) => (
          <ProductDetailSection
            key={product.id}
            product={product}
            reversed={index % 2 === 1}
          />
        ))}
      </div>
    </>
  )
}