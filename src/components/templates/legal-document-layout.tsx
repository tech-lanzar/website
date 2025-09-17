'use client';

import { useState, useEffect } from 'react';
import { Typography } from '@/components/atoms/typography';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, Clock, FileText, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

interface TableOfContentsItem {
  id: string;
  title: string;
  level: number;
}

interface LegalDocumentLayoutProps {
  title: string;
  lastUpdated: string;
  effectiveDate: string;
  children: React.ReactNode;
  tableOfContents: TableOfContentsItem[];
}

export function LegalDocumentLayout({
  title,
  lastUpdated,
  effectiveDate,
  children,
  tableOfContents,
}: LegalDocumentLayoutProps) {
  const [activeSection, setActiveSection] = useState<string>('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll to show/hide scroll-to-top button and update active section
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);

      // Find the current active section
      const sections = tableOfContents.map((item) =>
        document.getElementById(item.id)
      );
      const currentSection = sections.find((section) => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tableOfContents]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of Contents - Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="shadow-sm bg-card text-card-foreground">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <FileText className="h-5 w-5 text-primary" />
                    <Typography variant="h4" className="text-lg font-semibold">
                      Contents
                    </Typography>
                  </div>

                  <nav className="space-y-1">
                    {tableOfContents.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`
                          w-full text-left px-3 py-2 rounded-md text-sm transition-colors
                          ${item.level === 1 ? 'font-medium' : 'font-normal ml-4'}
                          ${
                            activeSection === item.id
                              ? 'bg-primary/10 text-primary border-l-2 border-primary'
                              : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                          }
                        `}
                      >
                        <div className="flex items-center gap-2">
                          {item.level === 2 && (
                            <ChevronRight className="h-3 w-3" />
                          )}
                          {item.title}
                        </div>
                      </button>
                    ))}
                  </nav>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <Typography variant="h1" className="text-4xl font-bold mb-4">
                {title}
              </Typography>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>Last updated: {lastUpdated}</span>
                </div>
                <Separator orientation="vertical" className="h-4" />
                <div className="flex items-center gap-2">
                  <Badge variant="outline">Effective: {effectiveDate}</Badge>
                </div>
              </div>
            </motion.div>

            {/* Document Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="shadow-sm bg-card text-card-foreground">
                <CardContent className="p-8">
                  <div className="prose prose-invert max-w-none">
                    {children}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8"
            >
              <Card className="bg-muted border">
                <CardContent className="p-6">
                  <Typography
                    variant="h3"
                    className="text-lg font-semibold mb-3"
                  >
                    Questions or Concerns?
                  </Typography>
                  <Typography className="text-muted-foreground mb-4">
                    If you have any questions about this document or our
                    practices, please don&apos;t hesitate to contact us.
                  </Typography>
                  <div className="space-y-2 text-sm">
                    <div>
                      <strong>Email:</strong> contact@vikpalla.in
                    </div>
                    <div>
                      <strong>Address:</strong> Vikpalla Software Private
                      Limited, Bangalore, Karnataka, India
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-8 right-8 z-50"
          >
            <Button
              onClick={scrollToTop}
              size="icon"
              className="rounded-full shadow-lg"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
