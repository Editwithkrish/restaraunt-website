"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

interface FoodDeliveryButtonsProps {
  className?: string
  variant?: "default" | "hero" | "footer"
}

export default function FoodDeliveryButtons({ className = "", variant = "default" }: FoodDeliveryButtonsProps) {
  const { t } = useTranslation()
  const zomatoLink = "https://www.zomato.com/pune/hotel-shree-raghunandan"
  const swiggyLink = "https://www.swiggy.com/restaurants/hotel-shree-raghunandan-pune"

  const isHero = variant === "hero"
  const isFooter = variant === "footer"

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link href={zomatoLink} target="_blank" rel="noopener noreferrer">
          <Button
            variant={isFooter ? "outline" : "default"}
            size={isHero ? "lg" : "sm"}
            className={`w-full flex items-center gap-2 ${
              isFooter
                ? "bg-transparent border-saffron-300 hover:bg-saffron-800/20 text-saffron-300 text-sm"
                : "bg-[#CB202D] hover:bg-[#B71C1C] text-white"
            } ${isHero ? "py-4 px-6 text-base rounded-xl" : "rounded-lg py-2"}`}
          >
            <div className="relative w-4 h-4">
              <Image
                src="/placeholder.svg?height=16&width=16&text=Z"
                alt="Zomato"
                width={16}
                height={16}
                className="object-contain"
              />
            </div>
            {t("common.orderZomato")}
            <ExternalLink className="h-3 w-3 ml-1" />
          </Button>
        </Link>
      </motion.div>

      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link href={swiggyLink} target="_blank" rel="noopener noreferrer">
          <Button
            variant={isFooter ? "outline" : "default"}
            size={isHero ? "lg" : "sm"}
            className={`w-full flex items-center gap-2 ${
              isFooter
                ? "bg-transparent border-saffron-300 hover:bg-saffron-800/20 text-saffron-300 text-sm"
                : "bg-[#FC8019] hover:bg-[#E67E22] text-white"
            } ${isHero ? "py-4 px-6 text-base rounded-xl" : "rounded-lg py-2"}`}
          >
            <div className="relative w-4 h-4">
              <Image
                src="/placeholder.svg?height=16&width=16&text=S"
                alt="Swiggy"
                width={16}
                height={16}
                className="object-contain"
              />
            </div>
            {t("common.orderSwiggy")}
            <ExternalLink className="h-3 w-3 ml-1" />
          </Button>
        </Link>
      </motion.div>
    </div>
  )
}
