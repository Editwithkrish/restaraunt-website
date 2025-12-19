"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface TraditionalBorderProps {
  children: ReactNode
  className?: string
  animate?: boolean
}

export default function TraditionalBorder({ children, className = "", animate = true }: TraditionalBorderProps) {
  return (
    <div className={`relative inline-block ${className}`}>
      {/* Top left corner */}
      <motion.div
        className="absolute -top-3 -left-3 w-6 h-6"
        animate={animate ? { rotate: [0, 360] } : undefined}
        transition={animate ? { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" } : undefined}
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L14 8L20 10L14 12L12 18L10 12L4 10L10 8L12 2Z" fill="#C2410C" />
        </svg>
      </motion.div>

      {/* Top right corner */}
      <motion.div
        className="absolute -top-3 -right-3 w-6 h-6"
        animate={animate ? { rotate: [0, -360] } : undefined}
        transition={animate ? { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" } : undefined}
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L14 8L20 10L14 12L12 18L10 12L4 10L10 8L12 2Z" fill="#C2410C" />
        </svg>
      </motion.div>

      {/* Bottom left corner */}
      <motion.div
        className="absolute -bottom-3 -left-3 w-6 h-6"
        animate={animate ? { rotate: [0, -360] } : undefined}
        transition={animate ? { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" } : undefined}
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L14 8L20 10L14 12L12 18L10 12L4 10L10 8L12 2Z" fill="#C2410C" />
        </svg>
      </motion.div>

      {/* Bottom right corner */}
      <motion.div
        className="absolute -bottom-3 -right-3 w-6 h-6"
        animate={animate ? { rotate: [0, 360] } : undefined}
        transition={animate ? { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" } : undefined}
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L14 8L20 10L14 12L12 18L10 12L4 10L10 8L12 2Z" fill="#C2410C" />
        </svg>
      </motion.div>

      {/* Top border */}
      <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-saffron-500 via-gold-500 to-saffron-500"></div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-saffron-500 via-gold-500 to-saffron-500"></div>

      {/* Left border */}
      <div className="absolute left-0 top-6 bottom-6 w-0.5 bg-gradient-to-b from-saffron-500 via-gold-500 to-saffron-500"></div>

      {/* Right border */}
      <div className="absolute right-0 top-6 bottom-6 w-0.5 bg-gradient-to-b from-saffron-500 via-gold-500 to-saffron-500"></div>

      {/* Content */}
      <div className="px-6 py-4">{children}</div>
    </div>
  )
}
