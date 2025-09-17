"use client"

import { motion, useScroll, useSpring } from "framer-motion"
import { useReducedMotion } from "@/hooks/use-scroll-animation"

interface ScrollProgressProps {
  className?: string
}

export function ScrollProgress({ className }: ScrollProgressProps) {
  const { scrollYProgress } = useScroll()
  const prefersReducedMotion = useReducedMotion()
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  if (prefersReducedMotion) {
    return null
  }

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 origin-left z-50 ${className}`}
      style={{ scaleX }}
    />
  )
}