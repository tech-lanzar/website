"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { forwardRef } from "react"
import { Typography } from "@/components/atoms/typography"
import { ProductCard } from "@/components/molecules/product-card"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/atoms/icon"
import { ArrowRight } from "lucide-react"
import { AnimatedSection, StaggeredContainer } from "@/components/templates/animated-section"
import Link from "next/link"
import type { Product } from "@/types/product"

interface ProductsOverviewProps {
  products: Product[]
  className?: string
}

const ProductsOverview = forwardRef<HTMLElement, ProductsOverviewProps>(
  ({ products, className }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "py-24 bg-gradient-to-b from-background to-muted/20",
          className
        )}
      >
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <AnimatedSection animation="slideUp" className="text-center mb-16">
            <Typography 
              variant="h2" 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            >
              Our Products
            </Typography>
            <Typography 
              variant="lead" 
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Discover our suite of innovative solutions designed to transform 
              your business operations and accelerate growth
            </Typography>
          </AnimatedSection>

          {/* Products Grid */}
          <StaggeredContainer 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            staggerDelay={0.15}
          >
            {products.map((product) => (
              <ProductCard 
                key={product.id}
                product={product}
                showStatus={true}
                variant="default"
              />
            ))}
          </StaggeredContainer>

          {/* Call to Action */}
          <AnimatedSection animation="fadeIn" delay={0.2} className="text-center">
            <Button asChild size="lg" className="group">
              <Link href="/products">
                View All Products
                <motion.div
                  className="ml-2"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon icon={ArrowRight} size="sm" />
                </motion.div>
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    )
  }
)

ProductsOverview.displayName = "ProductsOverview"

export { ProductsOverview }