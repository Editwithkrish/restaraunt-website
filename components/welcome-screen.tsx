"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export default function WelcomeScreen() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const hasSeenWelcome = sessionStorage.getItem("hasSeenWelcome")
    if (hasSeenWelcome) {
      setShow(false)
    }
  }, [])

  const handleEnter = () => {
    sessionStorage.setItem("hasSeenWelcome", "true")
    setShow(false)
  }

  if (!show) return null

  return (
    <motion.div
      className="fixed inset-0 z-40 flex items-center justify-center bg-gradient-to-br from-maroon-950 via-maroon-900 to-saffron-900 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.8 }}
    >
      {/* Decorative elements with traditional patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 border-2 border-saffron-400/30 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 border border-gold-400/20"
          style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-r from-saffron-500/20 to-gold-500/20 rounded-lg"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 45, 0],
          }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <motion.div
          initial={{ y: -50, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, type: "spring" }}
          className="mb-8"
        >
          <div className="relative w-40 h-40 mx-auto mb-6">
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-saffron-400 to-gold-500"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
            <div className="absolute inset-2 rounded-full bg-maroon-900 flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=100&width=100&text=🕉"
                alt="Hotel Shree Raghunandan Logo"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 font-marathi">होटेल श्री राघुनंदन</h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-saffron-200 mb-6">Hotel Shree Raghunandan</h2>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mb-8"
        >
          <p className="text-xl md:text-2xl text-saffron-200 mb-4 font-marathi flex items-center justify-center gap-2">
            <Sparkles className="h-6 w-6" />
            "स्वादाचा वैभव, श्री रामाच्या आशीर्वादाने"
            <Sparkles className="h-6 w-6" />
          </p>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Welcome to Hotel Shree Raghunandan, where ancient traditions meet modern hospitality. Experience the divine
            flavors of Maharashtra in the heart of historic Pune.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col items-center"
        >
          <Button
            onClick={handleEnter}
            size="lg"
            className="bg-gradient-to-r from-saffron-600 to-gold-600 hover:from-saffron-500 hover:to-gold-500 text-white px-12 py-6 text-xl rounded-full group shadow-2xl"
          >
            Enter Restaurant
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </motion.div>
  )
}
