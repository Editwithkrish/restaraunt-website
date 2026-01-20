"use client"

import { Home, Search, BookOpen, MapPin, ShoppingBag } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useCart } from "@/context/cart-context"
import { Badge } from "@/components/ui/badge"

const navItems = [
    { icon: Home, label: "Home", href: "#" },
    { icon: Search, label: "Search", href: "#menu" },
    { icon: BookOpen, label: "Explore", href: "#menu" },
    { icon: MapPin, label: "Location", href: "#location" },
    { icon: ShoppingBag, label: "Cart", href: "#", isCart: true },
]

export default function BottomNav() {
    const { totalItems, setIsCartOpen } = useCart()

    return (
        <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-[0_-10px_40px_rgba(0,0,0,0.1)] border-t-4 border-primary/20 px-4 py-3 pb-8 md:hidden flex justify-between items-center rounded-t-[2.5rem]"
        >
            {navItems.map((item, index) => {
                const content = (
                    <div className="flex flex-col items-center gap-1 group flex-1">
                        <div className={cn(
                            "relative p-2 rounded-2xl transition-all duration-300",
                            item.isCart ? "bg-primary text-primary-foreground -translate-y-4 shadow-xl border-b-4 border-primary/20 scale-110" : "text-gray-400"
                        )}>
                            <item.icon className={cn(
                                "h-6 w-6 transition-all group-hover:scale-110",
                                item.isCart ? "text-primary-foreground" : "group-hover:text-primary"
                            )} />
                            {item.isCart && totalItems > 0 && (
                                <Badge className="absolute -top-2 -right-2 bg-white text-primary font-black h-5 w-5 p-0 flex items-center justify-center rounded-full border-2 border-primary text-[10px] animate-in zoom-in">
                                    {totalItems}
                                </Badge>
                            )}
                        </div>
                        <span className={cn(
                            "text-[9px] font-black uppercase tracking-widest transition-colors",
                            item.isCart ? "text-primary -mt-2" : "text-gray-400 group-hover:text-primary"
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
