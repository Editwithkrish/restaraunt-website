"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

interface FloatingElementsProps {
  count?: number
  className?: string
}

interface ElementStyle {
  left: string
  top: string
  duration: number
  delay: number
  x: number
}

export default function FloatingElements({ count = 6, className = "" }: FloatingElementsProps) {
  const [isMounted, setIsMounted] = useState(false)
  const [elements, setElements] = useState<ElementStyle[]>([])

  useEffect(() => {
    setIsMounted(true)
    const newElements = [...Array(count)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 4 + Math.random() * 2,
      delay: Math.random() * 2,
      x: Math.random() * 20 - 10,
    }))
    setElements(newElements)
  }, [count])

  if (!isMounted) return null

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {elements.map((el, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-saffron-400/20 rounded-full"
          style={{
            left: el.left,
            top: el.top,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, el.x, 0],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: el.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: el.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
