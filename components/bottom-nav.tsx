"use client"

import { Home, Search, BookOpen, MapPin, Phone } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navItems = [
    { icon: Home, label: "Home", href: "#" },
    { icon: Search, label: "Search", href: "#menu" },
    { icon: BookOpen, label: "Explore", href: "#menu" },
    { icon: MapPin, label: "Location", href: "#location" },
    { icon: Phone, label: "ORDER", href: "tel:7417007124" },
]

export default function BottomNav() {
    return (
        <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-[0_-10px_40px_rgba(0,0,0,0.1)] border-t-4 border-primary/20 px-4 py-3 pb-8 md:hidden flex justify-between items-center rounded-t-[2.5rem]"
        >
            {navItems.map((item, index) => (
                <Link
                    key={item.label}
                    href={item.href}
                    className="flex flex-col items-center gap-1 group flex-1"
                >
                    <div className={cn(
                        "relative p-2 rounded-2xl transition-all duration-300",
                        item.label === "ORDER" ? "bg-primary text-primary-foreground -translate-y-4 shadow-xl border-b-4 border-primary/20 scale-110" : "text-gray-400"
                    )}>
                        <item.icon className={cn(
                            "h-6 w-6 transition-all group-hover:scale-110",
                            item.label === "ORDER" ? "text-primary-foreground" : "group-hover:text-primary"
                        )} />
                    </div>
                    <span className={cn(
                        "text-[9px] font-black uppercase tracking-widest transition-colors",
                        item.label === "ORDER" ? "text-primary -mt-2" : "text-gray-400 group-hover:text-primary"
                    )}>
                        {item.label}
                    </span>
                </Link>
            ))}
        </motion.div>
    )
}
