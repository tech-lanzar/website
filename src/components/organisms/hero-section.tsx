"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { forwardRef } from "react"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/atoms/typography"
import { Logo } from "@/components/atoms/logo"
import { Icon } from "@/components/atoms/icon"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"
import { GenZIllustration } from "@/components/atoms/genz-illustration"

interface HeroSectionProps {
  className?: string
}

const HeroSection = forwardRef<HTMLElement, HeroSectionProps>(
  ({ className }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5",
          className
        )}
      >
        {/* Animated Background Elements + GenZ Illustration */}
        <div className="absolute inset-0 overflow-hidden">
          <GenZIllustration variant="blobs" />
          {/* Floating hexagonal elements */}
          {Array.from({ length: 6 }).map((_, i) => {
            const positions = [
              { x: '10%', y: '20%' },
              { x: '80%', y: '10%' },
              { x: '20%', y: '70%' },
              { x: '90%', y: '60%' },
              { x: '60%', y: '30%' },
              { x: '30%', y: '80%' }
            ];

            return (
              <motion.div
                key={i}
                className="absolute opacity-10"
                style={{
                  left: positions[i].x,
                  top: positions[i].y,
                }}
                initial={{
                  rotate: 0,
                  scale: 0.5 + (i * 0.1)
                }}
                animate={{
                  rotate: 360,
                  scale: 0.3 + (i * 0.1)
                }}
                transition={{
                  duration: 20 + (i * 2),
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear"
                }}
              >
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 100 100"
                  className="text-primary"
                >
                  <polygon
                    points="50,5 85,25 85,75 50,95 15,75 15,25"
                    fill="currentColor"
                    opacity="0.3"
                  />
                </svg>
              </motion.div>
            )
          })}

          {/* Gradient orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <Logo size="xxxl" animated={false} showText={false} variant="wordmark" />
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              {/* <Typography
                variant="h1"
                className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 bg-clip-text text-transparent"
              >
                Lanzar
              </Typography> */}
              <Typography
                variant="lead"
                className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
              >
                Your gateway to India&apos;s top talent
              </Typography>
            </motion.div>

            {/* Company Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <Typography
                variant="bodyLarge"
                className="text-foreground/80 leading-relaxed"
              >
                Designed for US and European companies seeking to hire exceptional talent in India. We act as your legal employer, ensuring full compliance with Indian labor laws while you retain complete control over day-to-day work and performance management. Scale your team with confidence and focus on what matters most - growing your business.
              </Typography>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            >
              <Button asChild size="lg" className="group">
                <Link href="/services">
                  Explore Our Services
                  <motion.div
                    className="ml-2"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon icon={ArrowRight} size="sm" />
                  </motion.div>
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg" className="group">
                <Link href="/about">
                  <Icon icon={Play} size="sm" className="mr-2" />
                  Learn About Us
                </Link>
              </Button>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="pt-16"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="flex flex-col items-center text-muted-foreground"
              >
                <Typography variant="caption" className="mb-2">
                  Scroll to explore
                </Typography>
                <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    )
  }
)

HeroSection.displayName = "HeroSection"

export { HeroSection }