"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { BRAND_BLUE, BRAND_ORANGE, BRAND_PURPLE } from "@/lib/brand"

interface GenZIllustrationProps {
    className?: string
    variant?: "blobs" | "shapes"
}

export function GenZIllustration({ className, variant = "blobs" }: GenZIllustrationProps) {
    if (variant === "shapes") {
        return (
            <div className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)} aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute opacity-30"
                        style={{ left: `${10 + i * 15}%`, top: `${15 + (i % 3) * 20}%` }}
                        initial={{ rotate: 0, scale: 0.8 }}
                        animate={{ rotate: 360, scale: [0.9, 1.05, 0.9] }}
                        transition={{ duration: 18 + i * 2, repeat: Infinity, ease: "linear" }}
                    >
                        <svg width="120" height="120" viewBox="0 0 120 120" className="drop-shadow-sm">
                            <defs>
                                <linearGradient id={`g-${i}`} x1="0" y1="0" x2="1" y2="1">
                                    <stop offset="0%" stopColor="rgb(255 87 34 / 0.35)" />
                                    <stop offset="100%" stopColor="rgb(33 150 243 / 0.35)" />
                                </linearGradient>
                            </defs>
                            <path d="M60 5 C90 10 115 35 110 65 C105 95 80 115 50 110 C20 105 5 80 10 50 C15 20 30 10 60 5 Z" fill={`url(#g-${i})`} />
                        </svg>
                    </motion.div>
                ))}
            </div>
        )
    }

    // blobs
    return (
        <div className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)} aria-hidden>
            <motion.div
                className="absolute -top-10 -left-10 w-[28rem] h-[28rem] rounded-full blur-3xl"
                style={{ background: `radial-gradient(circle at 30% 30%, ${hexToRgba(BRAND_ORANGE, 0.28)}, transparent 60%)` }}
                animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute -bottom-10 -right-10 w-[26rem] h-[26rem] rounded-full blur-3xl"
                style={{ background: `radial-gradient(circle at 70% 70%, ${hexToRgba(BRAND_PURPLE, 0.26)}, transparent 60%)` }}
                animate={{ scale: [1.1, 0.95, 1.1], opacity: [0.35, 0.5, 0.35] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute left-1/3 top-1/2 w-72 h-72 rounded-[3rem] rotate-12 blur-2xl"
                style={{ background: `linear-gradient(135deg, ${hexToRgba(BRAND_BLUE, 0.22)}, ${hexToRgba(BRAND_PURPLE, 0.22)})` }}
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>
    )
}

function hexToRgba(hex: string, alpha: number) {
    const clean = hex.replace('#', '');
    const bigint = parseInt(clean, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
