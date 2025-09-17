"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FormField } from "@/components/molecules/form-field"
import { Icon } from "@/components/atoms/icon"
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react"
import { inquiryTypes } from "@/data/contact"

// Zod validation schema
const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .min(5, "Email must be at least 5 characters")
    .max(100, "Email must be less than 100 characters"),
  company: z
    .string()
    .min(2, "Company name is required")
    .max(100, "Company name must be less than 100 characters"),
  companyLocation: z
    .string()
    .min(2, "Company location is required")
    .max(100, "Company location must be less than 100 characters"),
  employeeCount: z
    .string()
    .min(1, "Please select employee count"),
  timeline: z
    .string()
    .min(1, "Please select timeline"),
  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters")
    .max(100, "Subject must be less than 100 characters"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
  inquiryType: z.enum(["hiring", "services", "compliance", "partnership"]).refine(val => val !== undefined, {
    message: "Please select an inquiry type",
  }),
})

type ContactFormData = z.infer<typeof contactSchema>

interface FormStatus {
  type: "idle" | "loading" | "success" | "error"
  message?: string
  canRetry?: boolean
}

export function ContactForm() {
  const [formStatus, setFormStatus] = useState<FormStatus>({ type: "idle" })
  const [retryCount, setRetryCount] = useState(0)

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
    reset,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
  })

  const watchedFields = watch()

  const onSubmit = async (data: ContactFormData) => {
    setFormStatus({ type: "loading" })

    try {
      // Create a timeout promise
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Request timeout')), 10000)
      )

      // Create the fetch promise
      const fetchPromise = fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      // Race between fetch and timeout
      const response = await Promise.race([fetchPromise, timeoutPromise]) as Response

      const result = await response.json()

      if (!response.ok) {
        // Handle validation errors from server
        if (response.status === 400 && result.details) {
          const errorMessages = (result.details as Array<{ message: string }>).map((err) => err.message).join(', ')
          throw new Error(`Validation error: ${errorMessages}`)
        }
        throw new Error(result.error || 'Failed to submit form')
      }

      if (result.success) {
        setFormStatus({
          type: "success",
          message: result.message || "Thank you for your inquiry! Our EOR experts will get back to you within 24 hours to discuss your India expansion plans.",
        })

        // Reset form after successful submission
        reset()
        setRetryCount(0) // Reset retry count on success

        // Clear status message after 5 seconds
        setTimeout(() => {
          setFormStatus({ type: "idle" })
        }, 5000)
      } else {
        throw new Error(result.error || 'Form submission failed')
      }
    } catch (error) {
      let errorMessage = "Something went wrong. Please try again or contact us directly."

      if (error instanceof Error) {
        if (error.message === 'Request timeout') {
          errorMessage = "Request timed out. Please check your connection and try again."
        } else if (error.message.includes('Validation error')) {
          errorMessage = error.message
        } else if (error.message.includes('Failed to fetch')) {
          errorMessage = "Network error. Please check your connection and try again."
        } else {
          errorMessage = error.message
        }
      }

      setFormStatus({
        type: "error",
        message: errorMessage,
        canRetry: retryCount < 3,
      })

      // Clear error message after 8 seconds
      setTimeout(() => {
        setFormStatus({ type: "idle" })
      }, 8000)
    }
  }

  const getFieldSuccess = (fieldName: keyof ContactFormData): boolean => {
    return !!(dirtyFields[fieldName] && !errors[fieldName] && watchedFields[fieldName])
  }

  const handleRetry = () => {
    setRetryCount(prev => prev + 1)
    setFormStatus({ type: "idle" })
    // Re-submit with current form data
    handleSubmit(onSubmit)()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name Field */}
      <FormField
        label="Full Name"
        id="name"
        type="text"
        placeholder="Enter your full name"
        required
        error={errors.name?.message}
        success={getFieldSuccess("name")}
        {...register("name")}
      />

      {/* Email Field */}
      <FormField
        label="Email Address"
        id="email"
        type="email"
        placeholder="Enter your email address"
        required
        error={errors.email?.message}
        success={getFieldSuccess("email")}
        {...register("email")}
      />

      {/* Company Field */}
      <FormField
        label="Company"
        id="company"
        type="text"
        placeholder="Enter your company name"
        required
        error={errors.company?.message}
        success={getFieldSuccess("company")}
        {...register("company")}
      />

      {/* Company Location Field */}
      <FormField
        label="Company Location (Country)"
        id="companyLocation"
        type="text"
        placeholder="e.g., United States, Germany, United Kingdom"
        required
        error={errors.companyLocation?.message}
        success={getFieldSuccess("companyLocation")}
        {...register("companyLocation")}
      />

      {/* Employee Count */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">
          Number of Employees to Hire <span className="text-destructive">*</span>
        </label>
        <select
          {...register("employeeCount")}
          className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          <option value="">Select employee count</option>
          <option value="1-5">1-5 employees</option>
          <option value="6-10">6-10 employees</option>
          <option value="11-25">11-25 employees</option>
          <option value="26-50">26-50 employees</option>
          <option value="51+">51+ employees</option>
        </select>
        {errors.employeeCount && (
          <motion.p
            className="text-sm text-destructive flex items-center gap-1"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <Icon icon={AlertCircle} size="xs" />
            {errors.employeeCount.message}
          </motion.p>
        )}
      </div>

      {/* Timeline */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">
          When do you plan to start hiring? <span className="text-destructive">*</span>
        </label>
        <select
          {...register("timeline")}
          className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          <option value="">Select timeline</option>
          <option value="immediate">Immediately (within 1 week)</option>
          <option value="1month">Within 1 month</option>
          <option value="3months">Within 3 months</option>
          <option value="6months">Within 6 months</option>
          <option value="exploring">Just exploring options</option>
        </select>
        {errors.timeline && (
          <motion.p
            className="text-sm text-destructive flex items-center gap-1"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <Icon icon={AlertCircle} size="xs" />
            {errors.timeline.message}
          </motion.p>
        )}
      </div>

      {/* Inquiry Type */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">
          Inquiry Type <span className="text-destructive">*</span>
        </label>
        <div className="grid grid-cols-2 gap-3">
          {inquiryTypes.map((type) => (
            <motion.label
              key={type.value}
              className="relative flex items-center space-x-3 cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <input
                type="radio"
                value={type.value}
                {...register("inquiryType")}
                className="sr-only"
              />
              <div className={`
                w-4 h-4 rounded-full border-2 transition-all duration-200
                ${watchedFields.inquiryType === type.value
                  ? "border-primary-orange bg-primary-orange"
                  : "border-muted-foreground"
                }
              `}>
                {watchedFields.inquiryType === type.value && (
                  <motion.div
                    className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.15 }}
                  />
                )}
              </div>
              <span className="text-sm text-foreground">{type.label}</span>
            </motion.label>
          ))}
        </div>
        {errors.inquiryType && (
          <motion.p
            className="text-sm text-destructive flex items-center gap-1"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <Icon icon={AlertCircle} size="xs" />
            {errors.inquiryType.message}
          </motion.p>
        )}
      </div>

      {/* Subject Field */}
      <FormField
        label="Subject"
        id="subject"
        type="text"
        placeholder="Brief description of your EOR inquiry"
        required
        error={errors.subject?.message}
        success={getFieldSuccess("subject")}
        {...register("subject")}
      />

      {/* Message Field */}
      <FormField
        label="Message"
        id="message"
        type="textarea"
        placeholder="Tell us about your hiring needs in India, number of employees, timeline, and any specific requirements..."
        rows={6}
        required
        error={errors.message?.message}
        success={getFieldSuccess("message")}
        {...register("message")}
      />

      {/* Submit Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <Button
          type="submit"
          size="lg"
          disabled={formStatus.type === "loading"}
          className="w-full"
        >
          {formStatus.type === "loading" ? (
            <>
              <Icon icon={Loader2} size="sm" className="animate-spin" />
              Sending Message...
            </>
          ) : (
            <>
              <Icon icon={Send} size="sm" />
              Send Message
            </>
          )}
        </Button>
      </motion.div>

      {/* Status Messages */}
      <AnimatePresence>
        {formStatus.message && (
          <motion.div
            initial={{ opacity: 0, y: 10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`
              p-4 rounded-lg border
              ${formStatus.type === "success"
                ? "bg-emerald-900/20 border-emerald-700 text-emerald-300"
                : "bg-red-900/20 border-red-700 text-red-300"
              }
            `}
          >
            <div className="flex items-start gap-3">
              <Icon
                icon={formStatus.type === "success" ? CheckCircle2 : AlertCircle}
                size="sm"
                className={formStatus.type === "success" ? "text-green-600" : "text-red-600"}
              />
              <div className="flex-1">
                <p className="text-sm leading-relaxed">{formStatus.message}</p>
                {formStatus.type === "error" && formStatus.canRetry && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-3"
                  >
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={handleRetry}
                      className="text-red-700 border-red-300 hover:bg-red-100"
                    >
                      Try Again
                    </Button>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  )
}