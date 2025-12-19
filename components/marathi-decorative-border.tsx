"use client"

import type React from "react"

import { motion } from "framer-motion"

interface MarathiDecorativeBorderProps {
  children: React.ReactNode
  className?: string
  animate?: boolean
}

export default function MarathiDecorativeBorder({
  children,
  className = "",
  animate = true,
}: MarathiDecorativeBorderProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Traditional Marathi Kolam pattern corners */}
      <motion.div
        className="absolute -top-4 -left-4 w-8 h-8"
        animate={animate ? { rotate: [0, 360] } : undefined}
        transition={animate ? { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" } : undefined}
      >
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2L20 12L30 16L20 20L16 30L12 20L2 16L12 12L16 2Z" fill="#C2410C" />
          <circle cx="16" cy="16" r="6" fill="none" stroke="#EA580C" strokeWidth="1" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute -top-4 -right-4 w-8 h-8"
        animate={animate ? { rotate: [0, -360] } : undefined}
        transition={animate ? { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" } : undefined}
      >
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2L20 12L30 16L20 20L16 30L12 20L2 16L12 12L16 2Z" fill="#C2410C" />
          <circle cx="16" cy="16" r="6" fill="none" stroke="#EA580C" strokeWidth="1" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute -bottom-4 -left-4 w-8 h-8"
        animate={animate ? { rotate: [0, -360] } : undefined}
        transition={animate ? { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" } : undefined}
      >
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2L20 12L30 16L20 20L16 30L12 20L2 16L12 12L16 2Z" fill="#C2410C" />
          <circle cx="16" cy="16" r="6" fill="none" stroke="#EA580C" strokeWidth="1" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute -bottom-4 -right-4 w-8 h-8"
        animate={animate ? { rotate: [0, 360] } : undefined}
        transition={animate ? { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" } : undefined}
      >
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2L20 12L30 16L20 20L16 30L12 20L2 16L12 12L16 2Z" fill="#C2410C" />
          <circle cx="16" cy="16" r="6" fill="none" stroke="#EA580C" strokeWidth="1" />
        </svg>
      </motion.div>

      {/* Traditional borders with Warli art inspired patterns */}
      <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-saffron-500 via-gold-500 to-saffron-500"></div>
      <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-saffron-500 via-gold-500 to-saffron-500"></div>
      <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-saffron-500 via-gold-500 to-saffron-500"></div>
      <div className="absolute right-0 top-8 bottom-8 w-1 bg-gradient-to-b from-saffron-500 via-gold-500 to-saffron-500"></div>

      {/* Content */}
      <div className="px-8 py-6">{children}</div>
    </div>
  )
}
