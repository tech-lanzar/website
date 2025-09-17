"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { forwardRef } from "react"
import { Typography } from "@/components/atoms/typography"
import { ServiceCard } from "@/components/molecules/service-card"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/atoms/icon"
import { ArrowRight } from "lucide-react"
import { AnimatedSection, StaggeredContainer } from "@/components/templates/animated-section"
import Link from "next/link"
import type { Service } from "@/types/service"

interface ServicesOverviewProps {
  services: Service[]
  className?: string
}

const ServicesOverview = forwardRef<HTMLElement, ServicesOverviewProps>(
  ({ services, className }, ref) => {
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
              Our EOR Services
            </Typography>
            <Typography 
              variant="lead" 
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Designed for US and European companies seeking to hire exceptional talent in India. 
              Focus on scaling your team while we handle all compliance and administrative burden.
            </Typography>
          </AnimatedSection>

          {/* Services Grid */}
          <StaggeredContainer 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            staggerDelay={0.15}
          >
            {services.slice(0, 6).map((service) => (
              <ServiceCard 
                key={service.id}
                service={service}
                showPricing={true}
                variant="default"
              />
            ))}
          </StaggeredContainer>

          {/* Call to Action */}
          <AnimatedSection animation="fadeIn" delay={0.2} className="text-center">
            <Button asChild size="lg" className="group">
              <Link href="/services">
                View All Services
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

ServicesOverview.displayName = "ServicesOverview"

export { ServicesOverview }
