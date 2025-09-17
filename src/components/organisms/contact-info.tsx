"use client"

import { motion } from "framer-motion"
import { Typography } from "@/components/atoms/typography"
import { Icon } from "@/components/atoms/icon"
import { SocialLink } from "@/components/molecules/social-link"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Building2,
  Users,
  Award,
  Zap
} from "lucide-react"
import { contactInfo } from "@/data/contact"
import { company } from "@/data/company"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function ContactInfo() {
  return (
    <motion.div
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Contact Details */}
      <motion.div
        className="bg-card border rounded-2xl p-8 shadow-lg"
        variants={itemVariants}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      >
        <Typography variant="h3" className="mb-6 text-foreground">Contact Information</Typography>

        <div className="space-y-6">
          {/* Address */}
          <motion.div
            className="flex items-start gap-4 group"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex-shrink-0 w-12 h-12 bg-primary-orange/10 rounded-xl flex items-center justify-center group-hover:bg-primary-orange/20 transition-colors duration-200">
              <Icon icon={MapPin} size="sm" className="text-primary-orange" />
            </div>
            <div>
              <Typography variant="h4" className="mb-1 text-foreground">Office Address</Typography>
              <p className="text-muted-foreground leading-relaxed">
                {company.headquarters.street}<br />
                {company.headquarters.city}, {company.headquarters.state} {company.headquarters.postalCode}<br />
                {company.headquarters.country}
              </p>
            </div>
          </motion.div>

          {/* Phone */}
          <motion.div
            className="flex items-start gap-4 group"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex-shrink-0 w-12 h-12 bg-primary-purple/10 rounded-xl flex items-center justify-center group-hover:bg-primary-purple/20 transition-colors duration-200">
              <Icon icon={Phone} size="sm" className="text-primary-purple" />
            </div>
            <div>
              <Typography variant="h4" className="mb-1 text-foreground">Phone</Typography>
              <a
                href={`tel:${company.phone}`}
                className="text-muted-foreground hover:text-primary-purple transition-colors duration-200"
              >
                {company.phone}
              </a>
            </div>
          </motion.div>

          {/* Email */}
          <motion.div
            className="flex items-start gap-4 group"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex-shrink-0 w-12 h-12 bg-primary-blue/10 rounded-xl flex items-center justify-center group-hover:bg-primary-blue/20 transition-colors duration-200">
              <Icon icon={Mail} size="sm" className="text-primary-blue" />
            </div>
            <div>
              <Typography variant="h4" className="mb-1 text-foreground">Email</Typography>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-muted-foreground hover:text-primary-blue transition-colors duration-200"
              >
                {contactInfo.email}
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Business Hours */}
      <motion.div
        className="bg-card border rounded-2xl p-8 shadow-lg"
        variants={itemVariants}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-primary-orange to-primary-purple rounded-xl flex items-center justify-center">
            <Icon icon={Clock} size="sm" className="text-white" />
          </div>
          <Typography variant="h3" className="text-foreground">Business Hours</Typography>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center py-2 border-b border-border/50">
            <span className="text-foreground font-medium">Monday - Friday</span>
            <span className="text-muted-foreground">{contactInfo.businessHours.monday}</span>
          </div>
          {contactInfo.businessHours.saturday && (
            <div className="flex justify-between items-center py-2 border-b border-border/50">
              <span className="text-foreground font-medium">Saturday</span>
              <span className="text-muted-foreground">{contactInfo.businessHours.saturday}</span>
            </div>
          )}
          <div className="flex justify-between items-center py-2">
            <span className="text-foreground font-medium">Sunday</span>
            <span className="text-muted-foreground">Closed</span>
          </div>
        </div>
      </motion.div>

      {/* Social Media */}
      <motion.div
        className="bg-card border rounded-2xl p-8 shadow-lg"
        variants={itemVariants}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      >
        <Typography variant="h3" className="mb-6 text-foreground">Connect With Us</Typography>

        <div className="grid grid-cols-2 gap-4">
          {contactInfo.socialMedia.map((social, index) => (
            <motion.div
              key={social.platform}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <SocialLink
                socialLink={social}
                variant="card"
                size="md"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Why Choose Us */}
      <motion.div
        className="bg-gradient-to-br from-primary-orange/5 via-primary-purple/5 to-primary-blue/5 border rounded-2xl p-8"
        variants={itemVariants}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      >
        <Typography variant="h3" className="mb-6 text-foreground">Why Choose Vikpalla?</Typography>

        <div className="grid grid-cols-2 gap-6">
          <motion.div
            className="text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-16 h-16 bg-primary-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <Icon icon={Building2} size="md" className="text-primary-orange" />
            </div>
            <Typography variant="h4" className="mb-2 text-foreground">4+ Years</Typography>
            <p className="text-sm text-muted-foreground">Industry Experience</p>
          </motion.div>

          <motion.div
            className="text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-16 h-16 bg-primary-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <Icon icon={Users} size="md" className="text-primary-purple" />
            </div>
            <Typography variant="h4" className="mb-2 text-foreground">25+ Team</Typography>
            <p className="text-sm text-muted-foreground">Expert Professionals</p>
          </motion.div>

          <motion.div
            className="text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-16 h-16 bg-primary-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <Icon icon={Award} size="md" className="text-primary-blue" />
            </div>
            <Typography variant="h4" className="mb-2 text-foreground">98%</Typography>
            <p className="text-sm text-muted-foreground">Client Satisfaction</p>
          </motion.div>

          <motion.div
            className="text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-primary-purple rounded-2xl flex items-center justify-center mx-auto mb-3">
              <Icon icon={Zap} size="md" className="text-white" />
            </div>
            <Typography variant="h4" className="mb-2 text-foreground">Fast</Typography>
            <p className="text-sm text-muted-foreground">Delivery & Support</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}