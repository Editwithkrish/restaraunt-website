"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, X, MessageSquare, ExternalLink } from "lucide-react"

export default function FloatingOrderButton() {
    const [isVisible, setIsVisible] = useState(false)
    const [isExpanded, setIsExpanded] = useState(false)
    const phoneNumber = "7417007124"

    // Replace these with actual links when available
    const zomatoLink = "https://www.zomato.com/pune/suruchis-kitchen-dhanori"
    const swiggyLink = "https://www.swiggy.com/restaurants/suruchis-kitchen-dhanori-pune"

    useEffect(() => {
        const handleScroll = () => {
            // Show button after scrolling 400px
            setIsVisible(window.scrollY > 400)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    className="fixed bottom-24 right-4 z-40 md:bottom-6 md:right-6"
                >
                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                                className="absolute bottom-full right-0 mb-3 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 min-w-[200px]"
                            >
                                <div className="space-y-2">
                                    {/* Call */}
                                    <motion.a
                                        href={`tel:${phoneNumber}`}
                                        whileHover={{ x: 5 }}
                                        className="flex items-center gap-3 p-3 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors group"
                                    >
                                        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-md">
                                            <Phone className="h-5 w-5 text-white fill-current" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-black text-gray-900 uppercase tracking-tight">Call to Order</p>
                                            <p className="text-[10px] text-gray-500 font-bold">{phoneNumber}</p>
                                        </div>
                                    </motion.a>

                                    {/* WhatsApp */}
                                    <motion.a
                                        href={`https://wa.me/${phoneNumber}?text=Hi, I would like to place an order.`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ x: 5 }}
                                        className="flex items-center gap-3 p-3 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 transition-colors group"
                                    >
                                        <div className="w-10 h-10 bg-[#25D366] rounded-xl flex items-center justify-center shadow-md">
                                            <MessageSquare className="h-5 w-5 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-black text-gray-900 uppercase tracking-tight">WhatsApp</p>
                                            <p className="text-[10px] text-gray-500 font-bold">Quick Order</p>
                                        </div>
                                    </motion.a>

                                    {/* Divider */}
                                    <div className="border-t border-gray-100 my-2" />

                                    {/* Delivery Apps */}
                                    <div className="flex gap-2">
                                        <motion.a
                                            href={zomatoLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-[#E23744]/10 hover:bg-[#E23744]/20 transition-colors"
                                        >
                                            <div className="w-6 h-6 bg-[#E23744] rounded-md flex items-center justify-center">
                                                <span className="text-white text-[9px] font-black">Z</span>
                                            </div>
                                            <span className="text-[10px] font-black text-[#E23744]">Zomato</span>
                                        </motion.a>

                                        <motion.a
                                            href={swiggyLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-[#FC8019]/10 hover:bg-[#FC8019]/20 transition-colors"
                                        >
                                            <div className="w-6 h-6 bg-[#FC8019] rounded-md flex items-center justify-center">
                                                <span className="text-white text-[9px] font-black">S</span>
                                            </div>
                                            <span className="text-[10px] font-black text-[#FC8019]">Swiggy</span>
                                        </motion.a>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Main Button */}
                    <motion.button
                        onClick={() => setIsExpanded(!isExpanded)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`relative w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all ${isExpanded
                                ? "bg-gray-900 text-white"
                                : "bg-gradient-to-br from-primary to-primary/80 text-primary-foreground"
                            }`}
                        style={{
                            boxShadow: isExpanded
                                ? "0 10px 40px rgba(0,0,0,0.3)"
                                : "0 10px 40px rgba(249, 184, 38, 0.4)"
                        }}
                    >
                        <AnimatePresence mode="wait">
                            {isExpanded ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                >
                                    <X className="h-7 w-7" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="phone"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    className="relative"
                                >
                                    <Phone className="h-7 w-7 fill-current" />
                                    {/* Pulse animation */}
                                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>

                    {/* Tooltip */}
                    {!isExpanded && (
                        <motion.div
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="absolute right-full top-1/2 -translate-y-1/2 mr-3 bg-gray-900 text-white px-3 py-2 rounded-lg text-[10px] font-black uppercase tracking-wide whitespace-nowrap hidden md:block"
                        >
                            Order Now
                            <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45" />
                        </motion.div>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    )
}
