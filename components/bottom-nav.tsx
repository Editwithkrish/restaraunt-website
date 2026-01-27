"use client"

import { Home, Search, BookOpen, MapPin, ShoppingBag, Phone } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useCart } from "@/context/cart-context"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

const navItems = [
    { icon: Home, label: "Home", href: "#" },
    { icon: BookOpen, label: "Menu", href: "#menu" },
    { icon: Phone, label: "Order", href: "tel:7417007124", isOrder: true },
    { icon: MapPin, label: "Location", href: "#location" },
    { icon: ShoppingBag, label: "Cart", href: "#", isCart: true },
]

export default function BottomNav() {
    const { totalItems, setIsCartOpen } = useCart()

    return (
        <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg shadow-[0_-10px_40px_rgba(0,0,0,0.1)] border-t border-gray-100 px-2 py-2 pb-6 md:hidden flex justify-around items-center rounded-t-[2rem]"
        >
            {navItems.map((item) => {
                const content = (
                    <div className="flex flex-col items-center gap-1 group">
                        <div className={cn(
                            "relative p-2.5 rounded-2xl transition-all duration-300",
                            item.isOrder
                                ? "bg-gradient-to-br from-primary to-primary/80 text-primary-foreground -translate-y-5 shadow-xl shadow-primary/30 scale-125 border-4 border-white"
                                : item.isCart
                                    ? "bg-gray-100 text-gray-600"
                                    : "text-gray-400"
                        )}>
                            <item.icon className={cn(
                                "h-5 w-5 transition-all group-hover:scale-110",
                                item.isOrder ? "text-primary-foreground fill-current" : "group-hover:text-primary"
                            )} />
                            {item.isCart && totalItems > 0 && (
                                <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground font-black h-5 w-5 p-0 flex items-center justify-center rounded-full border-2 border-white text-[10px] animate-in zoom-in">
                                    {totalItems}
                                </Badge>
                            )}
                            {item.isOrder && (
                                <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse border-2 border-white" />
                            )}
                        </div>
                        <span className={cn(
                            "text-[9px] font-black uppercase tracking-widest transition-colors",
                            item.isOrder
                                ? "text-primary -mt-3"
                                : item.isCart
                                    ? "text-gray-500 group-hover:text-primary"
                                    : "text-gray-400 group-hover:text-primary"
                        )}>
                            {item.label}
                        </span>
                    </div>
                )

                if (item.isCart) {
                    return (
                        <button
                            key={item.label}
                            onClick={() => setIsCartOpen(true)}
                            className="flex-1 flex flex-col items-center"
                        >
                            {content}
                        </button>
                    )
                }

                if (item.isOrder) {
                    return (
                        <a
                            key={item.label}
                            href={item.href}
                            className="flex-1 flex flex-col items-center"
                        >
                            {content}
                        </a>
                    )
                }

                return (
                    <Link
                        key={item.label}
                        href={item.href}
                        className="flex-1 flex flex-col items-center"
                    >
                        {content}
                    </Link>
                )
            })}
        </motion.div>
    )
}
