"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

export default function LoadingAnimation() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          setTimeout(() => setLoading(false), 800)
          return 100
        }
        return prev + Math.random() * 20
      })
    }, 100)

    return () => clearInterval(progressInterval)
  }, [])

  if (!loading) return null

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-black text-gray-900 tracking-tighter">
              SURUCHI<span className="text-red-600">.</span>
            </h1>
          </motion.div>

          <div className="w-48 h-[2px] bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-red-600"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.2 }}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
