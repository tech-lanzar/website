"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { forwardRef } from "react"
import Image from "next/image"
import { LOGO_SHORT_SRC, LOGO_LONG_SRC } from "@/lib/constants"

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl"
  animated?: boolean
  showText?: boolean
  className?: string
  onClick?: () => void
  // When true, uses the long wordmark instead of just the emblem
  variant?: "emblem" | "wordmark"
}

const sizeVariants = {
  sm: { container: "h-8 w-8", text: "text-lg font-bold ml-2" },
  md: { container: "h-10 w-10", text: "text-xl font-bold ml-3" },
  lg: { container: "h-12 w-12", text: "text-2xl font-bold ml-3" },
  xl: { container: "h-16 w-16", text: "text-3xl font-bold ml-4" },
  xxl: { container: "h-20 w-20", text: "text-4xl font-bold ml-5" },
  xxxl: { container: "h-40 w-40", text: "text-5xl font-bold ml-6" },
} as const

const wordmarkSizeVariants = {
  sm: { container: "h-6 w-[80px]", text: "text-base font-bold ml-2" },
  md: { container: "h-8 w-[120px]", text: "text-lg font-bold ml-3" },
  lg: { container: "h-10 w-[160px]", text: "text-xl font-bold ml-3" },
  xl: { container: "h-12 w-[200px]", text: "text-2xl font-bold ml-4" },
  xxl: { container: "h-16 w-[240px]", text: "text-3xl font-bold ml-4" },
  xxxl: { container: "h-16 w-[240px]", text: "text-3xl font-bold ml-4" },
} as const

const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ className, size = "md", animated = true, showText = true, onClick, variant = "emblem" }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn("flex items-center cursor-pointer", className)}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        onClick={onClick}
      >
        <motion.div
          className={cn(
            "relative",
            (variant === "wordmark" ? wordmarkSizeVariants : sizeVariants)[size].container
          )}
          initial={{ rotate: 0, scale: 1 }}
          animate={animated && variant !== "wordmark" ? { rotate: [0, 5, -5, 0] } : { rotate: 0 }}
          whileHover={variant !== "wordmark" && animated ? { rotate: 360, scale: 1.05 } : {}}
          transition={{
            duration: animated && variant !== "wordmark" ? 4 : 0.6,
            repeat: animated && variant !== "wordmark" ? Infinity : 0,
            ease: "easeInOut"
          }}
        >
          <Image
            src={variant === "emblem" ? LOGO_SHORT_SRC : LOGO_LONG_SRC}
            alt="Lanzar logo"
            fill
            className={cn("object-contain")}
            sizes={variant === "wordmark" ? "(max-width: 768px) 120px, 160px" : "(max-width: 768px) 40px, 64px"}
            priority
          />
        </motion.div>

        {showText && variant === "emblem" && (
          <motion.span
            className={cn("text-foreground select-none", sizeVariants[size].text)}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Lanzar
          </motion.span>
        )}
      </motion.div>
    )
  }
)

Logo.displayName = "Logo"

export { Logo }