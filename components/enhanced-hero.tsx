"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import MarathiPattern from "@/components/marathi-pattern"
import FoodDeliveryButtons from "@/components/food-delivery-buttons"

export default function EnhancedHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920&text=Traditional+Restaurant"
          alt="Traditional Restaurant Ambiance"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-maroon-950/60 via-maroon-900/70 to-maroon-950/80"></div>
      </div>

      {/* Marathi patterns */}
      <MarathiPattern />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 z-10 text-center text-white"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div variants={itemVariants} className="mb-8">
            <div className="relative inline-block">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-saffron-400/20 to-gold-500/20 rounded-full blur-xl"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              />
              <div className="relative w-32 h-32 mx-auto">
                <Image
                  src="/placeholder.svg?height=128&width=128&text=🍳"
                  alt="Suruchi's Kitchen Logo"
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-2xl font-marathi bg-gradient-to-r from-saffron-200 to-gold-200 bg-clip-text text-transparent">
              सुरुची किचन अ‍ॅण्ड केटरिंग्स
            </h1>
            <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-saffron-100">Suruchi's Kitchen and Caterings</h2>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <p className="text-2xl md:text-3xl font-medium text-saffron-200 mb-6 font-marathi">
              अस्सल घरगुती चव, आता धनोरीत!
            </p>
            <p className="text-lg md:text-xl text-saffron-200 max-w-3xl mx-auto">
              Authentic Home-Style Cooking Served with Love and Tradition
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-saffron-600 to-gold-600 hover:from-saffron-500 hover:to-gold-500 text-white text-xl py-8 px-12 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Explore Menu
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-saffron-400 text-saffron-100 hover:bg-saffron-400/20 text-xl py-8 px-12 rounded-full backdrop-blur-sm"
            >
              Visit Us Today
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-6">
            <FoodDeliveryButtons variant="hero" className="justify-center" />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="p-6 bg-gradient-to-r from-maroon-900/90 to-saffron-900/90 rounded-2xl inline-block backdrop-blur-sm border border-saffron-400/30 mt-8"
          >
            <p className="font-bold text-xl mb-2 text-saffron-200">🚚 FREE DELIVERY WITHIN 2KM</p>
            <p className="text-saffron-300">Call us: 7417007124</p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <Link href="#about">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="text-saffron-300 hover:text-saffron-200 transition-colors"
          >
            <ChevronDown className="h-12 w-12" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  )
}
