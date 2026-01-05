"use client"

import { useEffect } from "react"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface AnimatedDishProps {
  name: string
  image: string
  delay?: number
  className?: string
}

export default function AnimatedDish({ name, image, delay = 0, className }: AnimatedDishProps) {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delay: delay,
          },
        },
      }}
    >
      <motion.div
        className="relative h-32 w-32 md:h-40 md:w-40 mx-auto"
        whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
        transition={{ duration: 0.5 }}
      >
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-contain" />
      </motion.div>
      <p className="text-center mt-2 font-medium text-maroon-800">{name}</p>
    </motion.div>
  )
}
