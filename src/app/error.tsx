"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/atoms/typography"

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    useEffect(() => {
        // TODO: send error to monitoring
    }, [error])

    return (
        <html>
            <body>
                <main className="min-h-[70vh] flex items-center justify-center px-6">
                    <div className="max-w-md text-center space-y-4">
                        <Typography variant="h1" className="text-4xl font-bold">Something went wrong</Typography>
                        <p className="text-muted-foreground">An unexpected error occurred. You can retry or go back home.</p>
                        <div className="flex items-center justify-center gap-3">
                            <Button onClick={reset}>Try again</Button>
                            <Button variant="outline" asChild>
                                <Link href="/">Go home</Link>
                            </Button>
                        </div>
                    </div>
                </main>
            </body>
        </html>
    )
}
