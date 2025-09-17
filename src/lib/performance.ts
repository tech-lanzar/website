"use client"

interface WebVitalMetric {
  name: string
  value: number
  id: string
}

interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number
}

interface LayoutShift extends PerformanceEntry {
  value: number
  hadRecentInput: boolean
}

// Web Vitals monitoring
export function reportWebVitals(metric: WebVitalMetric) {
  if (process.env.NODE_ENV === 'production') {
    // Log to console in development, send to analytics in production
    // eslint-disable-next-line no-console
    console.log(metric)
    
    // Example: Send to Google Analytics
    // gtag('event', metric.name, {
    //   event_category: 'Web Vitals',
    //   value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
    //   event_label: metric.id,
    //   non_interaction: true,
    // })
  }
}

// Performance observer for custom metrics
export function observePerformance() {
  if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
    // Observe Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const lastEntry = entries[entries.length - 1]
      // eslint-disable-next-line no-console
      console.log('LCP:', lastEntry.startTime)
    })
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

    // Observe First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      entries.forEach((entry) => {
        const perfEntry = entry as PerformanceEventTiming
        // eslint-disable-next-line no-console
        console.log('FID:', perfEntry.processingStart - perfEntry.startTime)
      })
    })
    fidObserver.observe({ entryTypes: ['first-input'] })

    // Observe Cumulative Layout Shift
    const clsObserver = new PerformanceObserver((list) => {
      let clsValue = 0
      const entries = list.getEntries()
      entries.forEach((entry) => {
        const layoutShift = entry as LayoutShift
        if (!layoutShift.hadRecentInput) {
          clsValue += layoutShift.value
        }
      })
      // eslint-disable-next-line no-console
      console.log('CLS:', clsValue)
    })
    clsObserver.observe({ entryTypes: ['layout-shift'] })
  }
}

// Preload critical resources
export function preloadCriticalResources() {
  if (typeof window !== 'undefined') {
    // Preload critical fonts
    const fontLink = document.createElement('link')
    fontLink.rel = 'preload'
    fontLink.href = '/fonts/GeistVF.woff'
    fontLink.as = 'font'
    fontLink.type = 'font/woff'
    fontLink.crossOrigin = 'anonymous'
    document.head.appendChild(fontLink)

    // Preload critical images
    const heroImage = new Image()
    heroImage.src = '/images/hero-bg.jpg'
  }
}

// Lazy load non-critical resources
export function lazyLoadResources() {
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[data-src]')
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement
          img.src = img.dataset.src!
          img.classList.remove('lazy')
          imageObserver.unobserve(img)
        }
      })
    })

    lazyImages.forEach((img) => imageObserver.observe(img))
  }
}