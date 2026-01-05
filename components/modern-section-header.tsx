"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface ModernSectionHeaderProps {
  title: string
  subtitle?: string
  description?: string
  icon?: ReactNode
  className?: string
}

export default function ModernSectionHeader({
  title,
  subtitle,
  description,
  icon,
  className = "",
}: ModernSectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`text-left mb-8 px-4 md:px-0 ${className}`}
    >
      <h2 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight mb-1 uppercase tracking-tighter">
        {title}
      </h2>

      {subtitle && (
        <div className="flex items-center gap-2 mb-3">
          <div className="h-[2px] w-8 bg-primary rounded-full" />
          <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">
            {subtitle}
          </p>
        </div>
      )}

      {description && (
        <p className="text-sm text-gray-400 max-w-xl leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  )
}
