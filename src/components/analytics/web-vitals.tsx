"use client"

import { useEffect } from 'react'
import { useReportWebVitals } from 'next/web-vitals'
import { reportWebVitals } from '@/lib/performance'

export function WebVitals() {
  useReportWebVitals(reportWebVitals)

  useEffect(() => {
    // Initialize performance monitoring
    if (typeof window !== 'undefined') {
      import('@/lib/performance').then(({ observePerformance, preloadCriticalResources }) => {
        observePerformance()
        preloadCriticalResources()
      })
    }
  }, [])

  return null
}