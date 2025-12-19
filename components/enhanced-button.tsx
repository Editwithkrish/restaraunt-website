"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { ReactNode } from "react"

interface EnhancedButtonProps {
  children: ReactNode
  className?: string
  variant?: "default" | "outline" | "ghost"
  size?: "sm" | "default" | "lg"
  onClick?: () => void
  disabled?: boolean
  asChild?: boolean
  href?: string
}

export default function EnhancedButton({
  children,
  className = "",
  variant = "default",
  size = "default",
  onClick,
  disabled = false,
  asChild = false,
  href,
}: EnhancedButtonProps) {
  const MotionButton = motion(Button)

  return (
    <MotionButton
      variant={variant}
      size={size}
      className={className}
      onClick={onClick}
      disabled={disabled}
      asChild={asChild}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      whileTap={{
        scale: 0.95,
        transition: { duration: 0.1 },
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </MotionButton>
  )
}
