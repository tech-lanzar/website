"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { forwardRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Typography } from "@/components/atoms/typography"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Icon } from "@/components/atoms/icon"
import {
  ExternalLink,
  ChevronRight,
  Star,
  Users,
  Zap,
  CheckCircle,
  ArrowRight
} from "lucide-react"
import type { Product } from "@/types/product"

interface ProductDetailSectionProps {
  product: Product
  reversed?: boolean
  className?: string
}

const statusColors = {
  active: "bg-green-100 text-green-800 border-green-200",
  beta: "bg-yellow-100 text-yellow-800 border-yellow-200",
  "coming-soon": "bg-blue-100 text-blue-800 border-blue-200"
}

const categoryColors = {
  hr: "bg-orange-100 text-orange-800 border-orange-200",
  storytelling: "bg-purple-100 text-purple-800 border-purple-200",
  development: "bg-blue-100 text-blue-800 border-blue-200"
}

const ProductDetailSection = forwardRef<HTMLElement, ProductDetailSectionProps>(
  ({ product, reversed = false, className }, ref) => {
    const [activeTab, setActiveTab] = useState<'features' | 'benefits' | 'specs'>('features')
    const heroImage = product.images.find(img => img.type === 'hero') || product.images[0]
    const screenshots = product.images.filter(img => img.type === 'screenshot')

    const tabs = [
      { id: 'features' as const, label: 'Features' },
      { id: 'benefits' as const, label: 'Benefits' },
      { id: 'specs' as const, label: 'Specifications' },
    ]

    return (
      <section
        ref={ref}
        id={product.id === 'clavehr' ? 'products-detail' : undefined}
        className={cn("py-16", className)}
      >
        <div className="container mx-auto px-4">
          <div className={cn(
            "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
            reversed && "lg:grid-flow-col-dense"
          )}>
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: reversed ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={cn(reversed && "lg:col-start-2")}
            >
              <div className="relative">
                {/* Main Product Image */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10 shadow-2xl">
                  {heroImage && (
                    <Image
                      src={heroImage.url}
                      alt={heroImage.alt}
                      fill
                      className="object-cover"
                    />
                  )}

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge
                      className={cn("text-xs font-medium", statusColors[product.status])}
                    >
                      {product.status.replace('-', ' ')}
                    </Badge>
                  </div>
                </div>

                {/* Screenshot Gallery */}
                {screenshots.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex gap-4 mt-6 overflow-x-auto pb-2"
                  >
                    {screenshots.map((screenshot, index) => (
                      <div
                        key={index}
                        className="flex-shrink-0 w-32 h-24 rounded-lg overflow-hidden bg-muted shadow-md hover:shadow-lg transition-shadow"
                      >
                        <Image
                          src={screenshot.url}
                          alt={screenshot.alt}
                          width={128}
                          height={96}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Product Content */}
            <motion.div
              initial={{ opacity: 0, x: reversed ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={cn(reversed && "lg:col-start-1")}
            >
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Badge
                    variant="outline"
                    className={cn("text-xs font-medium", categoryColors[product.category])}
                  >
                    {product.category}
                  </Badge>
                  <Icon icon={ChevronRight} size="sm" className="text-muted-foreground" />
                  <span className="text-sm text-muted-foreground font-medium">
                    {product.name}
                  </span>
                </div>

                <Typography variant="h2" className="text-3xl md:text-4xl font-bold mb-4">
                  {product.name}
                </Typography>

                <Typography variant="lead" className="text-xl text-primary font-semibold mb-4">
                  {product.tagline}
                </Typography>

                <Typography className="text-muted-foreground leading-relaxed">
                  {product.description}
                </Typography>
              </div>

              {/* Tabbed Content */}
              <div className="mb-8">
                {/* Tab Navigation */}
                <div className="flex gap-1 mb-6 p-1 bg-muted rounded-lg">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={cn(
                        "flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all",
                        activeTab === tab.id
                          ? "bg-background text-foreground shadow-sm"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {activeTab === tab.id && tab.id === 'features' && <Icon icon={Star} size="xs" />}
                      {activeTab === tab.id && tab.id === 'benefits' && <Icon icon={Users} size="xs" />}
                      {activeTab === tab.id && tab.id === 'specs' && <Icon icon={Zap} size="xs" />}
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeTab === 'features' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {product.features.map((feature, index) => (
                        <Card key={index} className="border-0 shadow-sm">
                          <CardContent className="p-4">
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center">
                                <Icon icon={CheckCircle} size="sm" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-sm mb-1">{feature.title}</h4>
                                <p className="text-xs text-muted-foreground">{feature.description}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}

                  {activeTab === 'benefits' && (
                    <div className="space-y-4">
                      <Card className="border-0 shadow-sm">
                        <CardContent className="p-6">
                          <h4 className="font-semibold mb-3">Key Benefits</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-sm text-foreground">
                              <Icon icon={CheckCircle} size="xs" />
                              <span>Increased operational efficiency</span>
                            </li>
                            <li className="flex items-center gap-2 text-sm text-foreground">
                              <Icon icon={CheckCircle} size="xs" />
                              <span>Reduced manual workload</span>
                            </li>
                            <li className="flex items-center gap-2 text-sm text-foreground">
                              <Icon icon={CheckCircle} size="xs" />
                              <span>Improved data-driven decision making</span>
                            </li>
                            <li className="flex items-center gap-2 text-sm text-foreground">
                              <Icon icon={CheckCircle} size="xs" />
                              <span>Scalable solution for growing businesses</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  )}

                  {activeTab === 'specs' && (
                    <div className="space-y-4">
                      <Card className="border-0 shadow-sm">
                        <CardContent className="p-6">
                          <h4 className="font-semibold mb-3">Technical Specifications</h4>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="text-muted-foreground">Platform:</span>
                              <span className="ml-2 font-medium">Web-based</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Deployment:</span>
                              <span className="ml-2 font-medium">Cloud & On-premise</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Integration:</span>
                              <span className="ml-2 font-medium">REST API</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Support:</span>
                              <span className="ml-2 font-medium">24/7 Available</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  )}
                </motion.div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="group">
                  <Link href={product.website} target="_blank" rel="noopener noreferrer">
                    Visit {product.name}
                    <motion.div
                      className="ml-2"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon icon={ExternalLink} size="sm" />
                    </motion.div>
                  </Link>
                </Button>

                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">
                    Get Started
                    <Icon icon={ArrowRight} size="sm" className="ml-2" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    )
  }
)

ProductDetailSection.displayName = "ProductDetailSection"

export { ProductDetailSection }