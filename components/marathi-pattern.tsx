"use client"

import { motion } from "framer-motion"

interface MarathiPatternProps {
  className?: string
  variant?: "light" | "dark"
  animate?: boolean
}

export default function MarathiPattern({ className = "", variant = "light", animate = true }: MarathiPatternProps) {
  const baseColor = variant === "light" ? "#FEF3C7" : "#7F1D1D"
  const opacity = variant === "light" ? "0.2" : "0.15"

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Traditional Kolam/Rangoli pattern */}
      <motion.svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-10 right-10 opacity-20"
        animate={animate ? { rotate: 360 } : undefined}
        transition={animate ? { duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" } : undefined}
      >
        <path
          d="M100 0L108 36.7L129.4 8.2L122.9 46.2L154.5 25.5L135.8 57.1L173.8 50.6L145.3 72L182 80L145.3 88L173.8 109.4L135.8 102.9L154.5 134.5L122.9 115.8L129.4 153.8L108 125.3L100 162L92 125.3L70.6 153.8L77.1 115.8L45.5 134.5L64.2 102.9L26.2 109.4L54.7 88L18 80L54.7 72L26.2 50.6L64.2 57.1L45.5 25.5L77.1 46.2L70.6 8.2L92 36.7L100 0Z"
          fill={baseColor}
        />
      </motion.svg>

      {/* Paithani border pattern */}
      <motion.svg
        width="150"
        height="150"
        viewBox="0 0 150 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-10 left-10 opacity-20"
        animate={animate ? { rotate: -360 } : undefined}
        transition={animate ? { duration: 50, repeat: Number.POSITIVE_INFINITY, ease: "linear" } : undefined}
      >
        <path d="M75 0L92.5 57.5L150 75L92.5 92.5L75 150L57.5 92.5L0 75L57.5 57.5L75 0Z" fill={baseColor} />
      </motion.svg>

      {/* Warli art inspired pattern */}
      <svg
        width="300"
        height="100"
        viewBox="0 0 300 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-1/2 left-0 transform -translate-y-1/2 opacity-10"
      >
        <g opacity={opacity}>
          <circle cx="50" cy="50" r="20" stroke={baseColor} strokeWidth="2" />
          <circle cx="150" cy="50" r="20" stroke={baseColor} strokeWidth="2" />
          <circle cx="250" cy="50" r="20" stroke={baseColor} strokeWidth="2" />
          <line x1="70" y1="50" x2="130" y2="50" stroke={baseColor} strokeWidth="2" />
          <line x1="170" y1="50" x2="230" y2="50" stroke={baseColor} strokeWidth="2" />
          <line x1="50" y1="30" x2="50" y2="10" stroke={baseColor} strokeWidth="2" />
          <line x1="150" y1="30" x2="150" y2="10" stroke={baseColor} strokeWidth="2" />
          <line x1="250" y1="30" x2="250" y2="10" stroke={baseColor} strokeWidth="2" />
          <line x1="40" y1="40" x2="20" y2="20" stroke={baseColor} strokeWidth="2" />
          <line x1="140" y1="40" x2="120" y2="20" stroke={baseColor} strokeWidth="2" />
          <line x1="240" y1="40" x2="220" y2="20" stroke={baseColor} strokeWidth="2" />
          <line x1="60" y1="40" x2="80" y2="20" stroke={baseColor} strokeWidth="2" />
          <line x1="160" y1="40" x2="180" y2="20" stroke={baseColor} strokeWidth="2" />
          <line x1="260" y1="40" x2="280" y2="20" stroke={baseColor} strokeWidth="2" />
        </g>
      </svg>

      {/* Replaced temple-inspired pattern with modern subtle dots */}
      <svg
        width="100"
        height="300"
        viewBox="0 0 100 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 right-1/4 opacity-10"
      >
        <g opacity={opacity}>
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <circle key={i} cx="50" cy={20 + i * 40} r="3" fill={baseColor} />
          ))}
        </g>
      </svg>
    </div>
  )
}
