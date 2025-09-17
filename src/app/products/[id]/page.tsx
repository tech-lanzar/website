import { Metadata } from "next"
import { notFound } from "next/navigation"
import { products } from "@/data/products"
import { ProductDetailSection } from "@/components/organisms/product-detail-section"
import { Typography } from "@/components/atoms/typography"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

interface ProductPageProps {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = products.find((p) => p.id === params.id)

  if (!product) {
    return {
      title: "Product Not Found | Vikpalla Software",
    }
  }

  return {
    title: `${product.name} - ${product.tagline} | Vikpalla Software`,
    description: product.description,
    keywords: [product.name, product.tagline, product.category, "Vikpalla Software"],
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === params.id)

  if (!product) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <div className="container mx-auto px-4 pt-8">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/products" className="group inline-flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Products
          </Link>
        </Button>
      </div>

      {/* Product Hero */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <Typography variant="h1" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {product.name}
          </Typography>
          <Typography variant="lead" className="text-xl md:text-2xl text-primary font-semibold mb-4">
            {product.tagline}
          </Typography>
          <Typography className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {product.description}
          </Typography>
        </div>
      </div>

      {/* Detailed Product Section */}
      <ProductDetailSection product={product} />
    </main>
  )
}