"use client"

import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { forwardRef } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icon } from "@/components/atoms/icon"
import { AlertCircle, CheckCircle2 } from "lucide-react"

interface FormFieldProps {
  label: string
  id: string
  type?: "text" | "email" | "tel" | "password" | "textarea"
  placeholder?: string
  value?: string
  error?: string
  success?: boolean
  required?: boolean
  disabled?: boolean
  className?: string
  rows?: number
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const FormField = forwardRef<HTMLInputElement | HTMLTextAreaElement, FormFieldProps>(
  ({
    label,
    id,
    type = "text",
    placeholder,
    value,
    error,
    success = false,
    required = false,
    disabled = false,
    className,
    rows = 4,
    onChange,
    onBlur,
    ...props
  }, ref) => {
    const hasError = !!error
    const hasSuccess = success && !hasError && value
    const describedById = hasError ? `${id}-error` : hasSuccess ? `${id}-success` : undefined

    return (
      <motion.div
        className={cn("space-y-2", className)}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {/* Label */}
        <Label
          htmlFor={id}
          className={cn(
            "text-sm font-medium transition-colors duration-200",
            hasError && "text-destructive",
            hasSuccess && "text-green-600",
            disabled && "text-muted-foreground"
          )}
        >
          {label}
          {required && (
            <span className="ml-1 text-destructive" aria-hidden>
              *
            </span>
          )}
        </Label>

        {/* Input Container */}
        <div className="relative">
          {type === "textarea" ? (
            <motion.textarea
              ref={ref as React.Ref<HTMLTextAreaElement>}
              id={id}
              rows={rows}
              placeholder={placeholder}
              value={value}
              disabled={disabled}
              aria-invalid={hasError || undefined}
              aria-describedby={describedById}
              className={cn(
                "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background transition-colors duration-200",
                "placeholder:text-muted-foreground",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                "disabled:cursor-not-allowed disabled:opacity-50",
                "resize-none",
                hasError && "border-destructive focus-visible:ring-destructive",
                hasSuccess && "border-green-500 focus-visible:ring-green-500",
                (hasError || hasSuccess) && "pr-10"
              )}
              onChange={onChange as (e: React.ChangeEvent<HTMLTextAreaElement>) => void}
              onBlur={onBlur as (e: React.FocusEvent<HTMLTextAreaElement>) => void}
              whileFocus={{ scale: 1.01 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              {...props}
            />
          ) : (
            <motion.div
              whileFocus={{ scale: 1.01 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
            >
              <Input
                ref={ref as React.Ref<HTMLInputElement>}
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                disabled={disabled}
                aria-invalid={hasError || undefined}
                aria-describedby={describedById}
                className={cn(
                  "transition-colors duration-200",
                  hasError && "border-destructive focus-visible:ring-destructive",
                  hasSuccess && "border-green-500 focus-visible:ring-green-500",
                  (hasError || hasSuccess) && "pr-10"
                )}
                onChange={onChange as (e: React.ChangeEvent<HTMLInputElement>) => void}
                onBlur={onBlur as (e: React.FocusEvent<HTMLInputElement>) => void}
                {...props}
              />
            </motion.div>
          )}

          {/* Status Icon */}
          <AnimatePresence>
            {(hasError || hasSuccess) && (
              <motion.div
                className="absolute right-3 top-1/2 -translate-y-1/2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.15 }}
              >
                {hasError ? (
                  <Icon
                    icon={AlertCircle}
                    size="sm"
                    variant="destructive"
                    className="animate-pulse"
                  />
                ) : (
                  <Icon
                    icon={CheckCircle2}
                    size="sm"
                    variant="success"
                  />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Error Message */}
        <AnimatePresence>
          {hasError && (
            <motion.p
              id={`${id}-error`}
              role="alert"
              className="text-sm text-destructive flex items-center gap-1"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <Icon icon={AlertCircle} size="xs" />
              {error}
            </motion.p>
          )}
        </AnimatePresence>

        {/* Success Message */}
        <AnimatePresence>
          {hasSuccess && (
            <motion.p
              id={`${id}-success`}
              className="text-sm text-green-600 flex items-center gap-1"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <Icon icon={CheckCircle2} size="xs" />
              Looks good!
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    )
  }
)

FormField.displayName = "FormField"

export { FormField }