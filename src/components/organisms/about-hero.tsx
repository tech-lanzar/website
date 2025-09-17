"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { forwardRef } from "react"
import { Typography } from "@/components/atoms/typography"
import { Icon } from "@/components/atoms/icon"
import { AnimatedSection } from "@/components/templates/animated-section"
import { Building2, Calendar, MapPin } from "lucide-react"
import type { Company } from "@/types/company"
import { GenZIllustration } from "@/components/atoms/genz-illustration"

interface AboutHeroProps {
  company: Company
  className?: string
}

const AboutHero = forwardRef<HTMLElement, AboutHeroProps>(
  ({ company, className }, ref) => {
    const foundedYear = company.founded.getFullYear()
    const yearsInBusiness = new Date().getFullYear() - foundedYear

    return (
      <section
        ref={ref}
        className={cn(
          "relative min-h-[80vh] flex items-center justify-center overflow-hidden",
          "bg-gradient-to-br from-background via-background to-primary/5",
          className
        )}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <GenZIllustration variant="blobs" />
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
          <AnimatedSection animation="slideUp" className="max-w-4xl mx-auto">
            {/* Company Badge */}
            <AnimatedSection animation="scale" delay={0.2} className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Icon icon={Building2} size="sm" className="text-primary" />
                <span className="text-sm font-medium text-primary">About Us</span>
              </div>
            </AnimatedSection>

            {/* Main Headline */}
            <Typography
              variant="h1"
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
            >
              {company.name}
            </Typography>

            {/* Tagline */}
            <Typography
              variant="lead"
              className="text-xl md:text-2xl text-primary font-semibold mb-6"
            >
              {company.tagline}
            </Typography>

            {/* Description */}
            <Typography
              className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              {company.description}
            </Typography>

            {/* Company Info */}
            <AnimatedSection animation="fadeIn" delay={0.4}>
              <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon icon={Calendar} size="sm" className="text-primary" />
                  <span>Founded in {foundedYear} • {yearsInBusiness}+ years</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon icon={MapPin} size="sm" className="text-primary" />
                  <span>{company.headquarters.city}, {company.headquarters.country}</span>
                </div>
              </div>
            </AnimatedSection>
          </AnimatedSection>
        </div>
      </section>
    )
  }
)

AboutHero.displayName = "AboutHero"

export { AboutHero }