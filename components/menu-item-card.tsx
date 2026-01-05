"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Phone, Star, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import CallModal from "./call-modal"

interface MenuItemCardProps {
  name: string
  englishName?: string
  price: string
  description?: string
  image: string
  category?: string
  isVeg?: boolean
  isSpicy?: boolean
  isPopular?: boolean
  isNew?: boolean
  className?: string
}

export default function MenuItemCard({
  name,
  englishName,
  price,
  description,
  image,
  category,
  isVeg = true,
  isSpicy = false,
  isPopular = false,
  isNew = false,
  className,
}: MenuItemCardProps) {
  const [isCallModalOpen, setIsCallModalOpen] = useState(false)

  return (
    <>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className={cn("group relative", className)}
        onClick={() => setIsCallModalOpen(true)}
      >
        <Card className="overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 bg-white rounded-[2rem] cursor-pointer">
          <div className="flex flex-row md:flex-col h-full">
            {/* Content Section */}
            <CardContent className="flex-1 p-5 md:p-6 flex flex-col justify-between order-1 md:order-2">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className={cn(
                    "w-5 h-5 border-2 flex items-center justify-center flex-shrink-0 rounded-sm",
                    isVeg ? "border-green-600" : "border-red-600"
                  )}>
                    <div className={cn(
                      "w-2.5 h-2.5 rounded-full",
                      isVeg ? "bg-green-600" : "bg-red-600"
                    )} />
                  </div>
                  {isPopular && (
                    <Badge className="bg-primary/10 text-primary border-none text-[10px] px-2 py-0.5 h-5 font-black uppercase tracking-tighter">
                      <Star className="w-3 h-3 mr-1 fill-current" /> Bestseller
                    </Badge>
                  )}
                </div>

                <div>
                  <h4 className="font-black text-xl text-gray-900 tracking-tighter leading-tight group-hover:text-primary transition-colors">{name}</h4>
                  {englishName && <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest mt-0.5">{englishName}</p>}
                </div>

                <div className="text-primary font-black text-xl mt-1 tracking-tighter">
                  {price}
                </div>

                {description && (
                  <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed mt-2 font-medium">
                    {description}
                  </p>
                )}
              </div>

              <div className="mt-4 flex items-center justify-between md:hidden">
                <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Order Now</span>
                <ChevronRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
              </div>
            </CardContent>

            {/* Image Section */}
            <div className="relative w-32 h-32 md:w-full md:h-56 flex-shrink-0 order-2 md:order-1 m-4 md:m-0 rounded-2xl md:rounded-none overflow-hidden bg-gray-50">
              <Image
                src={image || "/placeholder.svg"}
                alt={englishName || name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 128px, 400px"
              />

              {/* Overlay for Call Action */}
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-2xl scale-75 group-hover:scale-100 transition-transform">
                  <Phone className="h-6 w-6 text-primary fill-current" />
                </div>
              </div>

              {/* Desktop CTA Button */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:block w-[80%] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                <button className="w-full bg-primary text-primary-foreground font-black py-3 rounded-xl shadow-2xl border-none uppercase text-xs tracking-widest flex items-center justify-center gap-2">
                  <Phone className="h-3.5 w-3.5" /> Call to Order
                </button>
              </div>

              {/* Mobile CTA Tag */}
              <div className="absolute top-2 right-2 md:hidden">
                <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      <CallModal
        isOpen={isCallModalOpen}
        onClose={() => setIsCallModalOpen(false)}
        itemName={name}
      />
    </>
  )
}
