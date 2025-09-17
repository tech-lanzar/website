"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { forwardRef } from "react"
import Image from "next/image"
import { Typography } from "@/components/atoms/typography"
import { Card, CardContent } from "@/components/ui/card"
import { Icon } from "@/components/atoms/icon"
import { Lightbulb, Rocket } from "lucide-react"
import type { Company } from "@/types/company"

interface CompanyStoryProps {
  company: Company
  className?: string
}

const CompanyStory = forwardRef<HTMLElement, CompanyStoryProps>(
  ({ company, className }, ref) => {
    const milestones = [
      {
        year: "2024",
        title: "Lanzar Founded",
        description: "Started with a vision to simplify global employment in India",
        icon: Rocket
      },
      {
        year: "2025",
        title: "EOR Services Launch",
        description: "Launched comprehensive Employer of Record services for US and European companies",
        icon: Lightbulb
      }
    ]

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
              Our Story
            </Typography>
            <Typography
              variant="lead"
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              From recognizing the complexities of global hiring to becoming India&apos;s trusted EOR partner
              for US and European companies
            </Typography>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Story Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Typography variant="h3" className="text-2xl md:text-3xl font-bold mb-6">
                Simplifying Global Employment, One Hire at a Time
              </Typography>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in {company.founded.getFullYear()}, Lanzar was born from a clear recognition:
                  US and European companies faced significant barriers when trying to hire exceptional 
                  talent in India. Complex compliance requirements, regulatory hurdles, and 
                  administrative burdens were preventing global businesses from accessing India&apos;s 
                  vast talent pool.
                </p>

                <p>
                  Our journey began when we witnessed firsthand how talented professionals and 
                  innovative companies were held back by bureaucratic complexities. We set out to 
                  eliminate these barriers by creating a comprehensive Employer of Record service 
                  that handles all compliance while allowing companies to focus on what they do best.
                </p>

                <p>
                  Today, we&apos;re proud to be the trusted partner for 50+ US and European companies, 
                  managing over 1000 employees across India. Our team of compliance experts, HR 
                  professionals, and technology specialists work tirelessly to ensure 100% regulatory 
                  compliance while delivering exceptional service to both our clients and their employees.
                </p>

                <p>
                  Through our integration with Clave HR, we&apos;ve expanded beyond basic EOR services to 
                  offer comprehensive workforce management solutions that enhance employee engagement 
                  and streamline operations for global teams.
                </p>
              </div>
            </motion.div>

            {/* Story Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&crop=center"
                  alt="Global team collaboration at Lanzar"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Typography variant="h3" className="text-2xl md:text-3xl font-bold text-center mb-12">
              Our Journey
            </Typography>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                >
                  <Card className="h-full border-0 shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Icon icon={milestone.icon} size="md" className="text-primary" />
                      </div>

                      <div className="text-2xl font-bold text-primary mb-2">
                        {milestone.year}
                      </div>

                      <Typography variant="h4" className="text-lg font-semibold mb-3">
                        {milestone.title}
                      </Typography>

                      <Typography className="text-sm text-muted-foreground">
                        {milestone.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    )
  }
)

CompanyStory.displayName = "CompanyStory"

export { CompanyStory }