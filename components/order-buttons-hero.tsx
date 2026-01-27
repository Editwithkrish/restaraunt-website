"use client"

import { motion } from "framer-motion"
import { Phone, MessageSquare, ExternalLink, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

interface OrderButtonsHeroProps {
    className?: string
}

export default function OrderButtonsHero({ className = "" }: OrderButtonsHeroProps) {
    const phoneNumber = "7417007124"

    // Replace these with actual Zomato/Swiggy links when available
    const zomatoLink = "https://www.zomato.com/pune/suruchis-kitchen-dhanori"
    const swiggyLink = "https://www.swiggy.com/restaurants/suruchis-kitchen-dhanori-pune"

    return (
        <div className={`space-y-4 ${className}`}>
            {/* Main Order Buttons */}
            <div className="flex flex-wrap gap-3">
                <motion.a
                    href={`tel:${phoneNumber}`}
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 min-w-[140px]"
                >
                    <Button className="w-full h-14 bg-maroon-900 hover:bg-maroon-950 text-white rounded-2xl font-black uppercase text-xs tracking-[0.15em] shadow-2xl shadow-maroon-900/30 flex items-center justify-center gap-3 border-b-4 border-maroon-950">
                        <Phone className="h-5 w-5 fill-current" />
                        <span>Call Now</span>
                    </Button>
                </motion.a>

                <motion.a
                    href={`https://wa.me/${phoneNumber}?text=Hi, I would like to place an order.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 min-w-[140px]"
                >
                    <Button className="w-full h-14 bg-[#25D366] hover:bg-[#22c55e] text-white rounded-2xl font-black uppercase text-xs tracking-[0.15em] shadow-2xl shadow-[#25D366]/30 flex items-center justify-center gap-3 border-b-4 border-[#1da851]">
                        <MessageSquare className="h-5 w-5" />
                        <span>WhatsApp</span>
                    </Button>
                </motion.a>
            </div>

            {/* Delivery Platforms */}
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-maroon-900/60">
                    <Sparkles className="h-4 w-4" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">Also on</span>
                </div>

                <div className="flex gap-3">
                    {/* Zomato */}
                    <motion.a
                        href={zomatoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg border-2 border-[#E23744]/20 hover:border-[#E23744] transition-all"
                    >
                        <div className="w-5 h-5 bg-[#E23744] rounded-md flex items-center justify-center">
                            <span className="text-white text-[10px] font-black">Z</span>
                        </div>
                        <span className="text-[10px] font-black text-[#E23744] uppercase tracking-wide hidden sm:inline">Zomato</span>
                        <ExternalLink className="h-3 w-3 text-[#E23744] opacity-70" />
                    </motion.a>

                    {/* Swiggy */}
                    <motion.a
                        href={swiggyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg border-2 border-[#FC8019]/20 hover:border-[#FC8019] transition-all"
                    >
                        <div className="w-5 h-5 bg-[#FC8019] rounded-md flex items-center justify-center">
                            <span className="text-white text-[10px] font-black">S</span>
                        </div>
                        <span className="text-[10px] font-black text-[#FC8019] uppercase tracking-wide hidden sm:inline">Swiggy</span>
                        <ExternalLink className="h-3 w-3 text-[#FC8019] opacity-70" />
                    </motion.a>
                </div>
            </div>
        </div>
    )
}
