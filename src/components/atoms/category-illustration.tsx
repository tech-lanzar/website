"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { BRAND_BLUE, BRAND_ORANGE, BRAND_PURPLE } from "@/lib/brand"

type Category = "hr" | "storytelling" | "development"

interface CategoryIllustrationProps {
    category: Category
    type?: "hero" | "thumbnail"
    className?: string
}

const palette: Record<Category, { primary: string; secondary: string; accent: string }> = {
    hr: { primary: BRAND_ORANGE, secondary: BRAND_PURPLE, accent: BRAND_BLUE },
    storytelling: { primary: BRAND_PURPLE, secondary: BRAND_BLUE, accent: BRAND_ORANGE },
    development: { primary: BRAND_BLUE, secondary: BRAND_ORANGE, accent: BRAND_PURPLE },
}

export function CategoryIllustration({ category, type = "hero", className }: CategoryIllustrationProps) {
    const colors = palette[category]
    const sizeClass = type === "hero" ? "aspect-[4/3]" : "aspect-video"
    const headY = type === "hero" ? 190 : 120

    return (
        <div className={cn("relative overflow-hidden rounded-2xl", sizeClass, className)}>
            <svg viewBox="0 0 800 600" className="absolute inset-0 h-full w-full" aria-hidden>
                <defs>
                    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor={colors.secondary} stopOpacity={0.15} />
                        <stop offset="100%" stopColor={colors.accent} stopOpacity={0.15} />
                    </linearGradient>
                </defs>

                {/* soft brand backdrop */}
                <rect x="0" y="0" width="800" height="600" fill="url(#bg)" />

                {/* character group */}
                {renderCharacter(400, headY, colors)}

                {/* small props per category */}
                {category === "hr" && renderClipboard(560, headY + 110, colors.primary)}
                {category === "storytelling" && renderSpeechBubble(560, headY - 20, colors.accent)}
                {category === "development" && renderLaptop(560, headY + 80, colors.secondary)}
            </svg>

            {/* micro animated accents */}
            <motion.div
                className="absolute left-6 top-6 h-8 w-8 rounded-full"
                style={{ background: colors.accent, opacity: 0.12 }}
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute right-8 bottom-8 h-10 w-10 rounded-lg"
                style={{ background: colors.primary, opacity: 0.12 }}
                animate={{ rotate: [0, 6, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>
    )
}

function renderCharacter(cx: number, headY: number, colors: { primary: string; secondary: string; accent: string }) {
    const headR = 46
    const bodyW = 180
    const bodyH = 210
    const bodyX = cx - bodyW / 2
    const bodyY = headY + headR - 10

    return (
        <g>
            {/* head */}
            <circle cx={cx} cy={headY} r={headR} fill={colors.primary} opacity={0.9} />
            {/* neck */}
            <rect x={cx - 18} y={headY + headR - 8} width={36} height={24} rx={8} fill={colors.accent} opacity={0.9} />
            {/* body */}
            <rect x={bodyX} y={bodyY} width={bodyW} height={bodyH} rx={28} fill={colors.secondary} opacity={0.9} />
            {/* arms */}
            <rect x={bodyX - 22} y={bodyY + 38} width={22} height={110} rx={11} fill={colors.accent} opacity={0.9} />
            <rect x={bodyX + bodyW} y={bodyY + 38} width={22} height={110} rx={11} fill={colors.accent} opacity={0.9} />
            {/* legs */}
            <rect x={bodyX + 30} y={bodyY + bodyH - 10} width={28} height={90} rx={12} fill={colors.primary} />
            <rect x={bodyX + bodyW - 58} y={bodyY + bodyH - 10} width={28} height={90} rx={12} fill={colors.primary} />
        </g>
    )
}

function renderClipboard(x: number, y: number, color: string) {
    return (
        <g>
            <rect x={x} y={y} width={80} height={110} rx={10} fill={color} opacity={0.8} />
            <rect x={x + 16} y={y + 24} width={48} height={6} rx={3} fill="#fff" opacity={0.8} />
            <rect x={x + 16} y={y + 42} width={48} height={6} rx={3} fill="#fff" opacity={0.7} />
            <rect x={x + 16} y={y + 60} width={36} height={6} rx={3} fill="#fff" opacity={0.6} />
        </g>
    )
}

function renderSpeechBubble(x: number, y: number, color: string) {
    return (
        <g>
            <rect x={x} y={y} width={130} height={80} rx={18} fill={color} opacity={0.85} />
            <polygon points={`${x + 18},${y + 80} ${x + 40},${y + 80} ${x + 30},${y + 98}`} fill={color} opacity={0.85} />
            <circle cx={x + 34} cy={y + 40} r={6} fill="#fff" />
            <circle cx={x + 58} cy={y + 40} r={6} fill="#fff" />
            <circle cx={x + 82} cy={y + 40} r={6} fill="#fff" />
        </g>
    )
}

function renderLaptop(x: number, y: number, color: string) {
    return (
        <g>
            <rect x={x} y={y} width={120} height={70} rx={8} fill={color} opacity={0.85} />
            <rect x={x - 10} y={y + 70} width={140} height={12} rx={6} fill={color} opacity={0.65} />
            <rect x={x + 10} y={y + 14} width={100} height={8} rx={4} fill="#fff" opacity={0.7} />
            <rect x={x + 10} y={y + 32} width={70} height={8} rx={4} fill="#fff" opacity={0.6} />
        </g>
    )
}
