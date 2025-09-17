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
import { ArrowRight, MapPin } from "lucide-react"
import type { Service } from "@/types/service"

interface ServiceCardProps {
  service: Service
  className?: string
  showPricing?: boolean
  variant?: "default" | "compact"
}

const statusColors = {
  active: "bg-green-100 text-green-800 border-green-200",
  beta: "bg-yellow-100 text-yellow-800 border-yellow-200",
  "coming_soon": "bg-blue-100 text-blue-800 border-blue-200"
}

const categoryColors = {
  core: "bg-orange-100 text-orange-800 border-orange-200",
  supplementary: "bg-purple-100 text-purple-800 border-purple-200",
  protection: "bg-blue-100 text-blue-800 border-blue-200"
}

const ServiceCard = forwardRef<HTMLDivElement, ServiceCardProps>(
  ({ service, className, showPricing = true, variant = "default" }, ref) => {
    const heroImage = service.images.find(img => img.type === 'hero') || service.images[0]

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
          {/* Service Image */}
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
              <div className="absolute top-3 left-3 flex gap-2">
                <Badge
                  variant="secondary"
                  className={cn("text-xs font-medium", statusColors[service.status])}
                >
                  {service.status.replace('_', ' ')}
                </Badge>
                <Badge
                  variant="outline"
                  className={cn("text-xs font-medium", categoryColors[service.category])}
                >
                  {service.category}
                </Badge>
              </div>
            </div>
          )}

          <CardHeader className={variant === "compact" ? "p-4" : "p-6"}>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-200">
                  {service.name}
                </CardTitle>
                <CardDescription className="mt-1 text-sm font-medium text-primary/70">
                  {service.tagline}
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent className={cn("flex-1", variant === "compact" ? "px-4 pb-4" : "px-6 pb-6")}>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {service.description}
            </p>

            {/* Features Preview */}
            {service.features.length > 0 && variant !== "compact" && (
              <div className="mt-4">
                <div className="flex flex-wrap gap-2">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {feature.title}
                    </Badge>
                  ))}
                  {service.features.length > 3 && (
                    <Badge variant="outline" className="text-xs text-muted-foreground">
                      +{service.features.length - 3} more
                    </Badge>
                  )}
                </div>
              </div>
            )}

            {/* Coverage Info */}
            {service.coverage.length > 0 && (
              <div className="mt-3 flex items-center gap-1 text-xs text-muted-foreground">
                <Icon icon={MapPin} size="xs" />
                <span>{service.coverage[0]}</span>
                {service.coverage.length > 1 && (
                  <span className="font-medium">+{service.coverage.length - 1} more</span>
                )}
              </div>
            )}

            {/* Pricing */}
            {showPricing && (
              <div className="mt-3 pt-3 border-t border-border/50">
                <div className="flex items-baseline gap-1">
                  <span className="text-lg font-bold text-primary">{service.pricing.startingPrice}</span>
                  <span className="text-xs text-muted-foreground">
                    /{service.pricing.billingCycle}
                  </span>
                  <span className="text-xs text-muted-foreground ml-1">
                    per employee
                  </span>
                </div>
              </div>
            )}
          </CardContent>

          <CardFooter className={cn("pt-0", variant === "compact" ? "px-4 pb-4" : "px-6 pb-6")}>
            <div className="flex w-full gap-2">
              <Button asChild className="flex-1 group/btn">
                <Link href={`/services/${service.id}`}>
                  Learn More
                  <motion.div
                    className="ml-1"
                    initial={{ x: 0 }}
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Icon icon={ArrowRight} size="xs" />
                  </motion.div>
                </Link>
              </Button>

              <Button variant="outline" asChild>
                <Link href="/contact">
                  Get Quote
                </Link>
              </Button>
            </div>
          </CardFooter>
        </Card>
      </motion.div>
    )
  }
)

ServiceCard.displayName = "ServiceCard"

export { ServiceCard }
