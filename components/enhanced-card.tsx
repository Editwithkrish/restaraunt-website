"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import type { ReactNode } from "react"

interface EnhancedCardProps {
  children: ReactNode
  className?: string
  hoverEffect?: boolean
  delay?: number
}

export default function EnhancedCard({ children, className = "", hoverEffect = true, delay = 0 }: EnhancedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay }}
      whileHover={
        hoverEffect
          ? {
              y: -4,
              scale: 1.01,
              transition: { duration: 0.3 },
            }
          : {}
      }
      className={className}
    >
      <Card className="overflow-hidden border border-gray-100 shadow-lg bg-white backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
        <CardContent className="p-0">{children}</CardContent>
      </Card>
    </motion.div>
  )
}
