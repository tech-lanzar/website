"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/atoms/icon"
import { Moon, Sun } from "lucide-react"

type Theme = "light" | "dark"

// Utility kept for reference; eslint-disable-next-line used since we rely on head init script instead
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getSystemTheme(): Theme {
    if (typeof window === "undefined") return "dark"
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

function applyTheme(theme: Theme) {
    const root = document.documentElement
    if (theme === "dark") {
        root.classList.add("dark")
    } else {
        root.classList.remove("dark")
    }
}

export function ThemeToggle() {
    const [theme, setTheme] = useState<Theme>("light")
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        const stored = (localStorage.getItem("theme") as Theme | null)
        // Default to dark when no stored preference
        const initial = stored ?? "dark"
        setTheme(initial)
        applyTheme(initial)
        setMounted(true)
    }, [])

    const toggle = () => {
        const next: Theme = theme === "light" ? "dark" : "light"
        setTheme(next)
        localStorage.setItem("theme", next)
        applyTheme(next)
    }

    if (!mounted) {
        return (
            <Button variant="ghost" size="icon" className="rounded-xl" aria-label="Toggle theme" disabled>
                <Icon icon={Sun} size="sm" />
            </Button>
        )
    }

    return (
        <Button variant="ghost" size="icon" className="rounded-xl" aria-label="Toggle theme" onClick={toggle}>
            {theme === "dark" ? <Icon icon={Sun} size="sm" /> : <Icon icon={Moon} size="sm" />}
        </Button>
    )
}


