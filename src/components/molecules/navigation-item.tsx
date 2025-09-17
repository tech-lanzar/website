"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import Link from "next/link"
import { forwardRef } from "react"

interface NavigationItemProps {
  href: string
  children: React.ReactNode
  isActive?: boolean
  className?: string
  onClick?: () => void
}

const NavigationItem = forwardRef<HTMLAnchorElement, NavigationItemProps>(
  ({ href, children, isActive = false, className, onClick }, ref) => {
    return (
      <Link
        ref={ref}
        href={href}
        className={cn(
          "relative px-3 py-2 text-sm font-medium transition-colors duration-200",
          "hover:text-primary focus:text-primary focus:outline-none",
          isActive ? "text-primary" : "text-muted-foreground",
          className
        )}
        onClick={onClick}
      >
        <motion.span
          className="relative z-10"
          whileHover={{ y: -1 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
        >
          {children}
        </motion.span>
        
        {/* Animated underline */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-primary"
          initial={{ width: 0 }}
          animate={{ width: isActive ? "100%" : 0 }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        />
        
        {/* Hover background */}
        <motion.div
          className="absolute inset-0 rounded-md bg-primary/5"
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
        />
      </Link>
    )
  }
)

NavigationItem.displayName = "NavigationItem"

export { NavigationItem }