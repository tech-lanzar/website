"use client"

import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { forwardRef } from "react"

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
      h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
      h4: "scroll-m-20 text-xl font-semibold tracking-tight",
      h5: "scroll-m-20 text-lg font-semibold tracking-tight",
      h6: "scroll-m-20 text-base font-semibold tracking-tight",
      body: "leading-7 [&:not(:first-child)]:mt-6",
      bodyLarge: "text-lg leading-7 [&:not(:first-child)]:mt-6",
      bodySmall: "text-sm leading-6 [&:not(:first-child)]:mt-4",
      caption: "text-sm text-muted-foreground",
      lead: "text-xl text-muted-foreground",
      muted: "text-sm text-muted-foreground",
    },
  },
  defaultVariants: {
    variant: "body",
  },
})

export interface TypographyProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof typographyVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div"
}

const Typography = forwardRef<HTMLDivElement, TypographyProps>(
  ({ className, variant, as, children, ...props }, ref) => {
    const Component = as || getDefaultElement(variant)
    
    if (Component === "h1") {
      return (
        <h1 className={cn(typographyVariants({ variant, className }))} {...props}>
          {children}
        </h1>
      )
    }
    if (Component === "h2") {
      return (
        <h2 className={cn(typographyVariants({ variant, className }))} {...props}>
          {children}
        </h2>
      )
    }
    if (Component === "h3") {
      return (
        <h3 className={cn(typographyVariants({ variant, className }))} {...props}>
          {children}
        </h3>
      )
    }
    if (Component === "h4") {
      return (
        <h4 className={cn(typographyVariants({ variant, className }))} {...props}>
          {children}
        </h4>
      )
    }
    if (Component === "h5") {
      return (
        <h5 className={cn(typographyVariants({ variant, className }))} {...props}>
          {children}
        </h5>
      )
    }
    if (Component === "h6") {
      return (
        <h6 className={cn(typographyVariants({ variant, className }))} {...props}>
          {children}
        </h6>
      )
    }
    if (Component === "p") {
      return (
        <p className={cn(typographyVariants({ variant, className }))} {...props}>
          {children}
        </p>
      )
    }
    if (Component === "span") {
      return (
        <span className={cn(typographyVariants({ variant, className }))} {...props}>
          {children}
        </span>
      )
    }
    
    return (
      <div 
        ref={ref}
        className={cn(typographyVariants({ variant, className }))} 
        {...props}
      >
        {children}
      </div>
    )
  }
)

function getDefaultElement(variant: TypographyProps["variant"]) {
  switch (variant) {
    case "h1":
      return "h1"
    case "h2":
      return "h2"
    case "h3":
      return "h3"
    case "h4":
      return "h4"
    case "h5":
      return "h5"
    case "h6":
      return "h6"
    case "lead":
    case "body":
    case "bodyLarge":
    case "bodySmall":
      return "p"
    case "caption":
    case "muted":
      return "span"
    default:
      return "p"
  }
}

Typography.displayName = "Typography"

export { Typography, typographyVariants }