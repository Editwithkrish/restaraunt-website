"use client"

import { motion } from "framer-motion"
import { Phone, MessageSquare, Clock, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface FoodDeliveryButtonsProps {
  className?: string
  variant?: "default" | "hero" | "footer"
}

export default function FoodDeliveryButtons({ className = "", variant = "default" }: FoodDeliveryButtonsProps) {
  const phoneNumber = "7417007124"
  const isFooter = variant === "footer"

  // Replace these with actual Zomato/Swiggy links when available
  const zomatoLink = "https://www.zomato.com/pune/suruchis-kitchen-dhanori"
  const swiggyLink = "https://www.swiggy.com/restaurants/suruchis-kitchen-dhanori-pune"

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {/* Primary CTA - Call to Order */}
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <a href={`tel:${phoneNumber}`} className="w-full block">
          <Button
            className="w-full flex items-center justify-center gap-3 h-14 rounded-2xl font-black uppercase tracking-widest transition-all shadow-xl active:shadow-none bg-primary text-primary-foreground hover:bg-primary/90 border-b-4 border-primary/20"
          >
            <Phone className="h-5 w-5" />
            <span>Call to Order</span>
          </Button>
        </a>
      </motion.div>

      {/* WhatsApp Order */}
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <a
          href={`https://wa.me/${phoneNumber}?text=Hi, I would like to place an order.`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full block"
        >
          <Button
            className="w-full flex items-center justify-center gap-3 h-14 rounded-2xl font-black uppercase tracking-widest transition-all shadow-xl active:shadow-none bg-[#25D366] text-white hover:bg-[#22c55e] border-b-4 border-[#1da851]/30"
          >
            <MessageSquare className="h-5 w-5" />
            <span>Order on WhatsApp</span>
          </Button>
        </a>
      </motion.div>

      {/* Delivery Apps Section */}
      <div className="mt-2">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 text-center mb-3">
          Also Order From
        </p>
        <div className="grid grid-cols-2 gap-3">
          {/* Zomato Button */}
          <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }}>
            <a
              href={zomatoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="relative overflow-hidden bg-gradient-to-br from-[#E23744] to-[#cb2d3a] text-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all border-b-4 border-[#b22530]">
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center gap-2">
                    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 16.106c-.472 1.053-1.42 1.894-2.473 2.366-.472.196-.944.392-1.521.392h-3.8c-.577 0-1.049-.196-1.521-.392-1.053-.472-2.001-1.313-2.473-2.366-.196-.472-.392-.944-.392-1.521V9.415c0-.577.196-1.049.392-1.521C6.578 6.841 7.526 6 8.579 5.528c.472-.196.944-.392 1.521-.392h3.8c.577 0 1.049.196 1.521.392 1.053.472 2.001 1.313 2.473 2.366.196.472.392.944.392 1.521v5.17c0 .577-.196 1.049-.392 1.521z" />
                    </svg>
                    <span className="font-black text-sm uppercase tracking-tight">Zomato</span>
                  </div>
                  <div className="flex items-center gap-1 text-[9px] font-bold opacity-90">
                    <span>Order Now</span>
                    <ExternalLink className="h-3 w-3" />
                  </div>
                </div>
                {/* Decorative element */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-white/10 rounded-full blur-xl" />
              </div>
            </a>
          </motion.div>

          {/* Swiggy Button */}
          <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }}>
            <a
              href={swiggyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="relative overflow-hidden bg-gradient-to-br from-[#FC8019] to-[#e6740f] text-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all border-b-4 border-[#d36a0d]">
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center gap-2">
                    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.5 9c0 2.485-2.015 4.5-4.5 4.5S7.5 11.485 7.5 9 9.515 4.5 12 4.5s4.5 2.015 4.5 4.5zm-4.5 6c3.315 0 6 1.685 6 3.75V21H6v-2.25c0-2.065 2.685-3.75 6-3.75z" />
                    </svg>
                    <span className="font-black text-sm uppercase tracking-tight">Swiggy</span>
                  </div>
                  <div className="flex items-center gap-1 text-[9px] font-bold opacity-90">
                    <span>Order Now</span>
                    <ExternalLink className="h-3 w-3" />
                  </div>
                </div>
                {/* Decorative element */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-white/10 rounded-full blur-xl" />
              </div>
            </a>
          </motion.div>
        </div>
      </div>

      {!isFooter && (
        <div className="flex items-center justify-center gap-2 text-gray-400 mt-3">
          <Clock className="h-3 w-3" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">Fresh home-cooked food</span>
        </div>
      )}
    </div>
  )
}
