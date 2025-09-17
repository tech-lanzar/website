"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { forwardRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Icon } from "@/components/atoms/icon"
import { ExternalLink } from "lucide-react"
import type { Product } from "@/types/product"

interface ProductCardProps {
  product: Product
  className?: string
  showStatus?: boolean
  variant?: "default" | "compact"
}

const statusColors = {
  active: "bg-green-100 text-green-800 border-green-200",
  beta: "bg-yellow-100 text-yellow-800 border-yellow-200",
  "coming-soon": "bg-blue-100 text-blue-800 border-blue-200"
}

const categoryColors = {
  hr: "bg-orange-100 text-orange-800 border-orange-200",
  storytelling: "bg-purple-100 text-purple-800 border-purple-200",
  development: "bg-blue-100 text-blue-800 border-blue-200"
}

const ProductCard = forwardRef<HTMLDivElement, ProductCardProps>(
  ({ product, className, showStatus = true, variant = "default" }, ref) => {
    const heroImage = product.images.find(img => img.type === 'hero') || product.images[0]

    return (
      <motion.div
        ref={ref}
        className={cn("group", className)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        whileHover={{ y: -4 }}
      >
        <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg border-0 shadow-md">
          {/* Product Image */}
          {heroImage && (
            <div className="relative overflow-hidden">
              <motion.div
                className="aspect-video relative bg-gradient-to-br from-primary/5 to-primary/10"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Image
                  src={heroImage.url}
                  alt={heroImage.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>

              {/* Status and Category Badges */}
              {showStatus && (
                <div className="absolute top-3 left-3 flex gap-2">
                  <Badge
                    variant="secondary"
                    className={cn("text-xs font-medium", statusColors[product.status])}
                  >
                    {product.status.replace('-', ' ')}
                  </Badge>
                  <Badge
                    variant="outline"
                    className={cn("text-xs font-medium", categoryColors[product.category])}
                  >
                    {product.category}
                  </Badge>
                </div>
              )}
            </div>
          )}

          <CardHeader className={variant === "compact" ? "p-4" : "p-6"}>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-200">
                  {product.name}
                </CardTitle>
                <CardDescription className="mt-1 text-sm font-medium text-primary/70">
                  {product.tagline}
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent className={cn("flex-1", variant === "compact" ? "px-4 pb-4" : "px-6 pb-6")}>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Features Preview */}
            {product.features.length > 0 && variant !== "compact" && (
              <div className="mt-4">
                <div className="flex flex-wrap gap-2">
                  {product.features.slice(0, 3).map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {feature.title}
                    </Badge>
                  ))}
                  {product.features.length > 3 && (
                    <Badge variant="outline" className="text-xs text-muted-foreground">
                      +{product.features.length - 3} more
                    </Badge>
                  )}
                </div>
              </div>
            )}
          </CardContent>

          <CardFooter className={cn("pt-0", variant === "compact" ? "px-4 pb-4" : "px-6 pb-6")}>
            <div className="flex w-full gap-2">
              <Button asChild className="flex-1 group/btn">
                <Link href={`/products/${product.id}`}>
                  Learn More
                  <motion.div
                    className="ml-1"
                    initial={{ x: 0 }}
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Icon icon={ExternalLink} size="xs" />
                  </motion.div>
                </Link>
              </Button>

              {product.website && (
                <Button variant="outline" size="icon" asChild>
                  <Link
                    href={product.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/external"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Icon icon={ExternalLink} size="sm" />
                    </motion.div>
                  </Link>
                </Button>
              )}
            </div>
          </CardFooter>
        </Card>
      </motion.div>
    )
  }
)

ProductCard.displayName = "ProductCard"

export { ProductCard }