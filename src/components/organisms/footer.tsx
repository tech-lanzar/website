"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import Link from "next/link"
import { Logo } from "@/components/atoms/logo"
import { Typography } from "@/components/atoms/typography"
import { company } from "@/data/company"
import { SocialLink } from "@/components/molecules/social-link"
import { Separator } from "@/components/ui/separator"
import type { SocialLink as SocialLinkType } from "@/types/company"

const socialLinks: SocialLinkType[] = [
  { platform: "linkedin", url: "https://linkedin.com/company/lanzar", icon: "linkedin" },
  { platform: "twitter", url: "https://twitter.com/lanzareor", icon: "twitter" },
  { platform: "github", url: "https://github.com/lanzar", icon: "github" },
  { platform: "email", url: "mailto:contact@lanzar.in", icon: "email" }
]

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about#team" },
    { label: "Careers", href: "/careers" },
    { label: "News", href: "/news" }
  ],
  services: [
    { label: "Employment Services", href: "/services/employment" },
    { label: "Payroll Management", href: "/services/payroll" },
    { label: "Legal & Compliance", href: "/services/compliance" },
    { label: "All Services", href: "/services" }
  ],
  resources: [
    { label: "Coverage Areas", href: "/coverage" },
    { label: "Compliance Guide", href: "/compliance" },
    { label: "Support", href: "/support" },
    { label: "Knowledge Base", href: "/kb" }
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "Financial Reports", href: "/financials" }
  ]
}

interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={cn("bg-muted/30 border-t", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
            {/* Company Info */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
            >
              <Logo size="lg" showText={false} variant="emblem" animated={false} className="mb-4" />
              <Typography variant="bodySmall" className="text-muted-foreground mb-4 max-w-sm">
                {company.description}
              </Typography>

              {/* Contact Info */}
              <div className="space-y-2 mb-6">
                <Typography variant="caption" className="text-muted-foreground">
                  {company.headquarters.street}, {company.headquarters.city}
                </Typography>
                <Typography variant="caption" className="text-muted-foreground">
                  {company.headquarters.state}, {company.headquarters.country} {company.headquarters.postalCode}
                </Typography>
              </div>
              
              <div className="flex gap-2 mb-6 ">
                <Typography variant="caption" className="text-muted-foreground">
                  {company.email} • {company.phone}
                </Typography>
              </div>

              {/* Social Links */}
              <div className="flex gap-2">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.platform}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <SocialLink
                      socialLink={social}
                      variant="minimal"
                      size="md"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Company Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Typography variant="h6" className="mb-4">
                Company
              </Typography>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.15 }}
              viewport={{ once: true }}
            >
              <Typography variant="h6" className="mb-4">
                Services
              </Typography>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Typography variant="h6" className="mb-4">
                Resources
              </Typography>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.25 }}
              viewport={{ once: true }}
            >
              <Typography variant="h6" className="mb-4">
                Legal
              </Typography>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        <Separator />

        {/* Footer Bottom */}
        <motion.div
          className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Typography variant="caption" className="text-muted-foreground">
            © {currentYear} {company.name}. All rights reserved.
          </Typography>

          <div className="flex items-center gap-4">
            <Typography variant="caption" className="text-muted-foreground">
              CIN: {company.cin}
            </Typography>
            <Typography variant="caption" className="text-muted-foreground">
              Made with ❤️ in India
            </Typography>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}