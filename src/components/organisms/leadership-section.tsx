"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { forwardRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Typography } from "@/components/atoms/typography"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/atoms/icon"
import { Linkedin, Twitter, Github, ExternalLink } from "lucide-react"
import type { Leader } from "@/types/company"

interface LeadershipSectionProps {
  leaders: Leader[]
  className?: string
}

const socialIcons = {
  linkedin: Linkedin,
  twitter: Twitter,
  github: Github,
}

const LeadershipSection = forwardRef<HTMLElement, LeadershipSectionProps>(
  ({ leaders, className }, ref) => {
    return (
      <section
        ref={ref}
        className={cn("py-24", className)}
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
              Leadership Team
            </Typography>
            <Typography 
              variant="lead" 
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Meet the visionary leaders driving innovation and excellence at Vikpalla Software
            </Typography>
          </motion.div>

          {/* Leadership Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  ease: "easeOut" 
                }}
              >
                <Card className="h-full border-0 shadow-md hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    {/* Leader Image */}
                    <motion.div
                      className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </motion.div>

                    {/* Leader Info */}
                    <Typography variant="h3" className="text-xl font-bold mb-2">
                      {leader.name}
                    </Typography>
                    
                    <Typography className="text-primary font-semibold mb-4">
                      {leader.position}
                    </Typography>
                    
                    <Typography className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {leader.bio}
                    </Typography>

                    {/* Social Links */}
                    {leader.socialLinks.length > 0 && (
                      <div className="flex justify-center gap-3">
                        {leader.socialLinks.map((social) => {
                          const IconComponent = socialIcons[social.icon as keyof typeof socialIcons] || ExternalLink
                          
                          return (
                            <Button
                              key={social.platform}
                              variant="outline"
                              size="icon"
                              asChild
                              className="w-10 h-10 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                            >
                              <Link 
                                href={social.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group/social"
                              >
                                <motion.div
                                  whileHover={{ scale: 1.1 }}
                                  transition={{ duration: 0.15 }}
                                >
                                  <Icon icon={IconComponent} size="sm" />
                                </motion.div>
                                <span className="sr-only">{social.platform}</span>
                              </Link>
                            </Button>
                          )
                        })}
                      </div>
                    )}
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

LeadershipSection.displayName = "LeadershipSection"

export { LeadershipSection }