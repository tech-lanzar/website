import dynamic from 'next/dynamic'
import { Skeleton } from '@/components/atoms/skeleton'

// Dynamic imports for heavy components with loading states
export const DynamicContactForm = dynamic(
    () => import('@/components/organisms/contact-form'),
    {
        loading: () => (
            <div className="space-y-4">
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-32 w-full" />
                <Skeleton className="h-10 w-32" />
            </div>
        ),
        ssr: false,
    }
)

export const DynamicFinancialDashboard = dynamic(
    () => import('@/components/organisms/financial-dashboard'),
    {
        loading: () => (
            <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Skeleton className="h-32 w-full" />
                    <Skeleton className="h-32 w-full" />
                    <Skeleton className="h-32 w-full" />
                </div>
                <Skeleton className="h-64 w-full" />
            </div>
        ),
    }
)

export const DynamicProductDetailSection = dynamic(
    () => import('@/components/organisms/product-detail-section'),
    {
        loading: () => (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Skeleton className="h-64 w-full" />
                <div className="space-y-4">
                    <Skeleton className="h-8 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                    <Skeleton className="h-10 w-32" />
                </div>
            </div>
        ),
    }
)
