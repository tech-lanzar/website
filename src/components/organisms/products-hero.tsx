"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { forwardRef } from "react"
import { Typography } from "@/components/atoms/typography"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/atoms/icon"
import { ArrowDown, Sparkles, Zap, Target } from "lucide-react"
import { GenZIllustration } from "@/components/atoms/genz-illustration"

interface ProductsHeroProps {
  className?: string
}

const ProductsHero = forwardRef<HTMLElement, ProductsHeroProps>(
  ({ className }, ref) => {
    const scrollToProducts = () => {
      const element = document.getElementById('products-detail')
      element?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
      <section
        ref={ref}
        className={cn(
          "relative min-h-[70vh] flex items-center justify-center overflow-hidden",
          "bg-gradient-to-br from-background via-background to-primary/5",
          className
        )}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <GenZIllustration variant="shapes" />
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/10 blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-secondary/10 blur-xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <Icon icon={Sparkles} size="sm" className="text-primary" />
              <span className="text-sm font-medium text-primary">Our Solutions</span>
            </motion.div>

            {/* Main Headline */}
            <Typography
              variant="h1"
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
            >
              Innovative Software
              <br />
              <span className="text-primary">Solutions</span>
            </Typography>

            {/* Subtitle */}
            <Typography
              variant="lead"
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Discover our suite of cutting-edge products designed to transform
              your business operations and accelerate digital growth
            </Typography>

            {/* Feature Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-6 mb-10"
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon icon={Zap} size="sm" className="text-primary" />
                <span>AI-Powered Solutions</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon icon={Target} size="sm" className="text-primary" />
                <span>Business-Focused</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon icon={Sparkles} size="sm" className="text-primary" />
                <span>Innovation-Driven</span>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button
                size="lg"
                onClick={scrollToProducts}
                className="group px-8 py-3 text-lg"
              >
                Explore Products
                <motion.div
                  className="ml-2"
                  animate={{ y: [0, 4, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Icon icon={ArrowDown} size="sm" />
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    )
  }
)

ProductsHero.displayName = "ProductsHero"

export { ProductsHero }