"use client"

import { motion } from "framer-motion"
import { Phone, MessageSquare, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FoodDeliveryButtonsProps {
  className?: string
  variant?: "default" | "hero" | "footer"
}

export default function FoodDeliveryButtons({ className = "", variant = "default" }: FoodDeliveryButtonsProps) {
  const phoneNumber = "7417007124"
  const isFooter = variant === "footer"

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <a href={`tel:${phoneNumber}`} className="w-full">
          <Button
            className={`w-full flex items-center justify-center gap-3 h-14 rounded-2xl font-black uppercase tracking-widest transition-all shadow-xl active:shadow-none bg-primary text-primary-foreground hover:bg-primary/90 border-b-4 border-primary/20`}
          >
            <Phone className="h-5 w-5" />
            <span>Call to Order</span>
          </Button>
        </a>
      </motion.div>

      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <a
          href={`https://wa.me/${phoneNumber}?text=Hi, I would like to place an order.`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <Button
            className={`w-full flex items-center justify-center gap-3 h-14 rounded-2xl font-black uppercase tracking-widest transition-all shadow-xl active:shadow-none bg-secondary text-white hover:bg-secondary/90 border-b-4 border-secondary/20`}
          >
            <MessageSquare className="h-5 w-5" />
            <span>Order on WhatsApp</span>
          </Button>
        </a>
      </motion.div>

      {!isFooter && (
        <div className="flex items-center justify-center gap-2 text-gray-400 mt-2">
          <Clock className="h-3 w-3" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">Fresh home-cooked food</span>
        </div>
      )}
    </div>
  )
}
