"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedTextProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  variant?: "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scale" | "typewriter"
}

export default function AnimatedText({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  variant = "fadeUp",
}: AnimatedTextProps) {
  const variants = {
    fadeUp: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
    },
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
    slideLeft: {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
    },
    slideRight: {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: 1, x: 0 },
    },
    scale: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
    },
    typewriter: {
      initial: { width: 0 },
      animate: { width: "auto" },
    },
  }

  return (
    <motion.div
      className={className}
      initial={variants[variant].initial}
      whileInView={variants[variant].animate}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  )
}
