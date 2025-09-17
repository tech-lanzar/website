"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { forwardRef } from "react"
import { Typography } from "@/components/atoms/typography"
import { Card, CardContent } from "@/components/ui/card"

interface CompanyStat {
  label: string
  value: string
  description: string
}

interface CompanyStatsProps {
  stats: CompanyStat[]
  className?: string
}

const CompanyStats = forwardRef<HTMLElement, CompanyStatsProps>(
  ({ stats, className }, ref) => {
    return (
      <section
        ref={ref}
        className={cn("py-16 bg-muted/30", className)}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <Typography 
              variant="h2" 
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              By the Numbers
            </Typography>
            <Typography 
              variant="lead" 
              className="text-xl text-muted-foreground"
            >
              Our achievements and milestones that define our success
            </Typography>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut" 
                }}
              >
                <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow bg-background">
                  <CardContent className="p-8">
                    <motion.div
                      initial={{ scale: 0.5 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.6, 
                        delay: index * 0.1 + 0.2,
                        ease: "easeOut" 
                      }}
                      className="text-4xl md:text-5xl font-bold text-primary mb-2"
                    >
                      {stat.value}
                    </motion.div>
                    
                    <Typography variant="h4" className="text-lg font-semibold mb-2">
                      {stat.label}
                    </Typography>
                    
                    <Typography className="text-sm text-muted-foreground">
                      {stat.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
  }
)

CompanyStats.displayName = "CompanyStats"

export { CompanyStats }