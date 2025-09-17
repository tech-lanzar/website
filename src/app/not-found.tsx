import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/atoms/typography"

export default function NotFound() {
    return (
        <main className="min-h-[70vh] flex items-center justify-center px-6">
            <div className="max-w-md text-center space-y-4">
                <Typography variant="h1" className="text-4xl font-bold">Page not found</Typography>
                <p className="text-muted-foreground">The page you’re looking for doesn’t exist or has been moved.</p>
                <Button asChild>
                    <Link href="/">Back to home</Link>
                </Button>
            </div>
        </main>
    )
}
