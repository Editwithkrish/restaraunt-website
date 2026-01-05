"use client"

import { motion } from "framer-motion"

interface MarathiPatternBackgroundProps {
  className?: string
  variant?: "light" | "dark"
  animate?: boolean
}

export default function MarathiPatternBackground({
  className = "",
  variant = "light",
  animate = true,
}: MarathiPatternBackgroundProps) {
  const baseColor = variant === "light" ? "#FEF3C7" : "#7F1D1D"
  const opacity = variant === "light" ? "0.1" : "0.15"

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Traditional Paithani border pattern */}
      <motion.svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-10 right-10"
        style={{ opacity }}
        animate={animate ? { rotate: 360 } : undefined}
        transition={animate ? { duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" } : undefined}
      >
        <path d="M100 10L115 60L165 75L115 90L100 140L85 90L35 75L85 60L100 10Z" fill={baseColor} />
        <path
          d="M100 40L110 80L150 90L110 100L100 140L90 100L50 90L90 80L100 40Z"
          fill="none"
          stroke={baseColor}
          strokeWidth="2"
        />
        <circle cx="100" cy="75" r="15" fill="none" stroke={baseColor} strokeWidth="1" />
      </motion.svg>

      {/* Warli art inspired dancing figures */}
      <motion.svg
        width="150"
        height="150"
        viewBox="0 0 150 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-20 left-20"
        style={{ opacity }}
        animate={animate ? { rotate: -360 } : undefined}
        transition={animate ? { duration: 50, repeat: Number.POSITIVE_INFINITY, ease: "linear" } : undefined}
      >
        {/* Traditional Warli dancing figures in circle */}
        <circle cx="75" cy="75" r="60" fill="none" stroke={baseColor} strokeWidth="2" />
        <g transform="translate(75,75)">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <g key={i} transform={`rotate(${angle})`}>
              <g transform="translate(0,-50)">
                <circle cx="0" cy="-5" r="3" fill={baseColor} />
                <line x1="0" y1="-2" x2="0" y2="8" stroke={baseColor} strokeWidth="1" />
                <line x1="-4" y1="2" x2="4" y2="2" stroke={baseColor} strokeWidth="1" />
                <line x1="0" y1="8" x2="-3" y2="15" stroke={baseColor} strokeWidth="1" />
                <line x1="0" y1="8" x2="3" y2="15" stroke={baseColor} strokeWidth="1" />
              </g>
            </g>
          ))}
        </g>
      </motion.svg>

      {/* Traditional Kolam pattern */}
      <svg
        width="300"
        height="100"
        viewBox="0 0 300 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-1/2 left-0 transform -translate-y-1/2"
        style={{ opacity }}
      >
        <g>
          {[0, 1, 2, 3, 4].map((i) => (
            <g key={i} transform={`translate(${i * 60}, 0)`}>
              <circle cx="30" cy="50" r="20" fill="none" stroke={baseColor} strokeWidth="2" />
              <path d="M10 50 L50 50 M30 30 L30 70 M18 38 L42 62 M42 38 L18 62" stroke={baseColor} strokeWidth="1" />
              <circle cx="30" cy="50" r="8" fill="none" stroke={baseColor} strokeWidth="1" />
            </g>
          ))}
        </g>
      </svg>

      {/* Replaced temple-inspired pattern with modern subtle dots */}
      <svg
        width="100"
        height="300"
        viewBox="0 0 100 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 right-1/4"
        style={{ opacity }}
      >
        <g>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <circle key={i} cx="50" cy={25 + i * 50} r="2" fill={baseColor} />
          ))}
        </g>
      </svg>

      {/* Scattered traditional motifs */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-6 h-6"
            style={{
              left: `${20 + ((i * 15) % 60)}%`,
              top: `${15 + ((i * 20) % 70)}%`,
              opacity: opacity,
            }}
            animate={
              animate
                ? {
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }
                : undefined
            }
            transition={
              animate
                ? {
                  duration: 8 + i,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }
                : undefined
            }
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L14 8L20 10L14 12L12 18L10 12L4 10L10 8L12 2Z" fill={baseColor} />
            </svg>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
