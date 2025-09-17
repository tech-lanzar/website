"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import Link from "next/link"
import { forwardRef } from "react"
import { Icon } from "@/components/atoms/icon"
import { Typography } from "@/components/atoms/typography"
import {
  Github,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Globe,
  type LucideIcon
} from "lucide-react"
import type { SocialLink as SocialLinkType } from "@/types/company"

interface SocialLinkProps {
  socialLink: SocialLinkType
  showLabel?: boolean
  variant?: "default" | "minimal" | "card"
  size?: "sm" | "md" | "lg"
  className?: string
}

// Map platform names to Lucide icons
const platformIcons: Record<string, LucideIcon> = {
  github: Github,
  twitter: Twitter,
  linkedin: Linkedin,
  facebook: Facebook,
  instagram: Instagram,
  youtube: Youtube,
  email: Mail,
  website: Globe,
  // Add more platforms as needed
}

// Platform-specific colors for hover effects
const platformColors: Record<string, string> = {
  github: "hover:text-gray-900 hover:bg-gray-100",
  twitter: "hover:text-blue-500 hover:bg-blue-50",
  linkedin: "hover:text-blue-700 hover:bg-blue-50",
  facebook: "hover:text-blue-600 hover:bg-blue-50",
  instagram: "hover:text-pink-600 hover:bg-pink-50",
  youtube: "hover:text-red-600 hover:bg-red-50",
  email: "hover:text-green-600 hover:bg-green-50",
  website: "hover:text-purple-600 hover:bg-purple-50",
}

const sizeVariants = {
  sm: {
    icon: "sm" as const,
    container: "p-2",
    text: "text-xs"
  },
  md: {
    icon: "md" as const,
    container: "p-3",
    text: "text-sm"
  },
  lg: {
    icon: "lg" as const,
    container: "p-4",
    text: "text-base"
  }
}

const SocialLink = forwardRef<HTMLAnchorElement, SocialLinkProps>(
  ({
    socialLink,
    showLabel = false,
    variant = "default",
    size = "md",
    className
  }, ref) => {
    const platformKey = socialLink.platform.toLowerCase()
    const IconComponent = platformIcons[platformKey] || Globe
    const platformColor = platformColors[platformKey] || "hover:text-primary hover:bg-primary/10"
    const sizeConfig = sizeVariants[size]

    const baseClasses = cn(
      "inline-flex items-center justify-center rounded-full transition-all duration-200",
      "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
      "group relative overflow-hidden"
    )

    const content = (
      <>
        <motion.div
          className="relative z-10 flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
        >
          <Icon
            icon={IconComponent}
            size={sizeConfig.icon}
            className="transition-colors duration-200"
          />
          {showLabel && (
            <Typography
              variant="bodySmall"
              className={cn("font-medium capitalize", sizeConfig.text)}
            >
              {socialLink.platform}
            </Typography>
          )}
        </motion.div>

        {/* Hover background effect */}
        <motion.div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
          initial={{ scale: 0 }}
          whileHover={{ scale: 1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          style={{
            background: `linear-gradient(135deg, var(--primary) 0%, var(--primary)/80 100%)`
          }}
        />
      </>
    )

    if (variant === "minimal") {
      return (
        <Link
          ref={ref}
          href={socialLink.url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "text-muted-foreground transition-colors duration-200",
            platformColor,
            className
          )}
          aria-label={`Visit our ${socialLink.platform} page`}
        >
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            <Icon icon={IconComponent} size={sizeConfig.icon} />
          </motion.div>
        </Link>
      )
    }

    if (variant === "card") {
      return (
        <Link
          ref={ref}
          href={socialLink.url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "flex items-center gap-3 p-4 rounded-lg border bg-card hover:bg-accent transition-colors duration-200",
            "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
            className
          )}
          aria-label={`Visit our ${socialLink.platform} page`}
        >
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            <Icon icon={IconComponent} size={sizeConfig.icon} className="text-primary" />
          </motion.div>
          <div className="flex-1 min-w-0">
            <Typography variant="bodySmall" className="font-medium capitalize">
              {socialLink.platform}
            </Typography>
          </div>
        </Link>
      )
    }

    return (
      <Link
        ref={ref}
        href={socialLink.url}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          baseClasses,
          sizeConfig.container,
          "text-muted-foreground bg-background border",
          platformColor,
          showLabel && "px-4",
          className
        )}
        aria-label={`Visit our ${socialLink.platform} page`}
      >
        {content}
      </Link>
    )
  }
)

SocialLink.displayName = "SocialLink"

export { SocialLink }