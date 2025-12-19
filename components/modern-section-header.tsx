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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className={`text-center mb-16 ${className}`}
    >
      {icon && (
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
          className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-saffron-500 to-gold-500 rounded-full mb-6 shadow-lg"
        >
          {icon}
        </motion.div>
      )}

      <div className="relative inline-block mb-6">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-saffron-500 to-gold-500"
        />
        <h2 className="text-4xl md:text-5xl font-bold text-maroon-800 pb-2 relative">
          {title}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="absolute -top-2 -right-2 w-3 h-3 bg-saffron-500 rounded-full"
          />
        </h2>
      </div>

      {subtitle && (
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-xl md:text-2xl font-semibold text-saffron-700 mb-4"
        >
          {subtitle}
        </motion.h3>
      )}

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}
