"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { forwardRef } from "react"
import { Typography } from "@/components/atoms/typography"
import { Card, CardContent } from "@/components/ui/card"
import { Icon } from "@/components/atoms/icon"
import { 
  Lightbulb, 
  Users, 
  Award, 
  Shield, 
  BookOpen, 
  Handshake 
} from "lucide-react"

interface CompanyValuesProps {
  values: string[]
  className?: string
}

const valueIcons = [
  Lightbulb,    // Innovation-driven development
  Users,        // Customer-centric solutions
  Award,        // Quality and excellence
  Shield,       // Transparency and integrity
  BookOpen,     // Continuous learning
  Handshake,    // Collaborative teamwork
]

const CompanyValues = forwardRef<HTMLElement, CompanyValuesProps>(
  ({ values, className }, ref) => {
    return (
      <section
        ref={ref}
        className={cn("py-24 bg-gradient-to-b from-background to-muted/20", className)}
      >
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <Typography 
              variant="h2" 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            >
              Our Values
            </Typography>
            <Typography 
              variant="lead" 
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              The core principles that guide everything we do and shape our company culture
            </Typography>
          </motion.div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = valueIcons[index] || Lightbulb
              
              return (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: "easeOut" 
                  }}
                >
                  <Card className="h-full border-0 shadow-md hover:shadow-lg transition-all duration-300 group">
                    <CardContent className="p-8 text-center">
                      {/* Value Icon */}
                      <motion.div
                        className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon icon={IconComponent} size="lg" className="text-primary" />
                      </motion.div>

                      {/* Value Text */}
                      <Typography variant="h3" className="text-lg font-bold mb-4 group-hover:text-primary transition-colors">
                        {value}
                      </Typography>
                      
                      {/* Value Description */}
                      <Typography className="text-sm text-muted-foreground leading-relaxed">
                        {getValueDescription(value)}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
)

// Helper function to get descriptions for values
function getValueDescription(value: string): string {
  const descriptions: Record<string, string> = {
    "Innovation-driven development": "We constantly push boundaries and embrace new technologies to create cutting-edge solutions that solve real-world problems.",
    "Customer-centric solutions": "Every decision we make is guided by our commitment to delivering exceptional value and experiences to our customers.",
    "Quality and excellence": "We maintain the highest standards in everything we do, from code quality to customer service and product delivery.",
    "Transparency and integrity": "We believe in honest communication, ethical practices, and building trust through transparency in all our relationships.",
    "Continuous learning": "We foster a culture of growth and learning, encouraging our team to stay curious and adapt to evolving technologies.",
    "Collaborative teamwork": "We achieve our best results through collaboration, diverse perspectives, and supporting each other's success."
  }
  
  return descriptions[value] || "A core principle that drives our company culture and decision-making process."
}

CompanyValues.displayName = "CompanyValues"

export { CompanyValues }