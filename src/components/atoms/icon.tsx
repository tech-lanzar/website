"use client"

import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { LucideIcon } from "lucide-react"
import { forwardRef } from "react"

const iconVariants = cva("text-current", {
  variants: {
    size: {
      xs: "h-3 w-3",
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
      xl: "h-8 w-8",
      "2xl": "h-10 w-10",
    },
    variant: {
      default: "",
      muted: "text-muted-foreground",
      primary: "text-primary",
      secondary: "text-secondary-foreground",
      destructive: "text-destructive",
      success: "text-green-600",
      warning: "text-yellow-600",
      info: "text-blue-600",
    },
  },
  defaultVariants: {
    size: "md",
    variant: "default",
  },
})

export interface IconProps
  extends React.HTMLAttributes<SVGElement>,
  VariantProps<typeof iconVariants> {
  icon: LucideIcon
  strokeWidth?: number
}

const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, size, variant, icon: IconComponent, strokeWidth = 2, ...props }, ref) => {
    return (
      <IconComponent
        ref={ref}
        className={cn(iconVariants({ size, variant, className }))}
        strokeWidth={strokeWidth}
        {...props}
      />
    )
  }
)

Icon.displayName = "Icon"

export { Icon, iconVariants }