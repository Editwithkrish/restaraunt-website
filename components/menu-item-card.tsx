"use client"

import React, { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Star, ShoppingBag, Plus, Minus, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { useCart } from "@/context/cart-context"
import { Button } from "@/components/ui/button"

interface MenuItemCardProps {
  id: string
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
  id,
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
  const [showAddedFeedback, setShowAddedFeedback] = useState(false)
  const { addItem, items, updateQuantity } = useCart()

  // Find if item is in cart
  const cartItem = items.find(item => item.id === id)

  // Parse price string like "₹50", "₹150 / ₹220" or "50" to number
  // For dual prices (Half/Full), it takes the first one as default for the cart
  const basePrice = price.includes('/') ? price.split('/')[0] : price;
  const numericPrice = parseInt(basePrice.replace(/[^0-9]/g, "")) || 0

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation()
    addItem({
      id,
      name,
      price: numericPrice,
      quantity: 1,
      image
    })
    setShowAddedFeedback(true)
    setTimeout(() => setShowAddedFeedback(false), 2000)
  }

  const handleUpdateQuantity = (e: React.MouseEvent, delta: number) => {
    e.stopPropagation()
    if (cartItem) {
      updateQuantity(id, cartItem.quantity + delta)
    }
  }

  return (
    <>
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 300 }}
        className={cn("group relative", className)}
      >
        <Card className="overflow-hidden border-2 border-primary/5 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white rounded-[2.5rem]">
          <div className="flex flex-row md:flex-col h-full">
            {/* Image Section */}
            <div className="relative w-32 h-32 md:w-full md:h-64 flex-shrink-0 order-2 md:order-1 m-4 md:m-0 rounded-3xl md:rounded-none overflow-hidden bg-gray-50">
              <Image
                src={image || "/placeholder.svg"}
                alt={englishName || name}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 768px) 128px, 400px"
              />

              {/* Badges Overlay */}
              <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                {isPopular && (
                  <Badge className="bg-primary text-white border-none text-[10px] px-3 py-1 font-black uppercase tracking-tighter shadow-lg">
                    <Star className="w-3 h-3 mr-1 fill-current" /> Bestseller
                  </Badge>
                )}
                {isNew && (
                  <Badge className="bg-accent text-white border-none text-[10px] px-3 py-1 font-black uppercase tracking-tighter shadow-lg">
                    New Launch
                  </Badge>
                )}
              </div>

              {/* Add to Cart Web Button Overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center hidden md:flex">
                {!cartItem ? (
                  <Button
                    onClick={handleAddToCart}
                    className="bg-yellow-400 text-black hover:bg-yellow-500 font-black h-12 px-6 rounded-2xl shadow-2xl scale-90 group-hover:scale-100 transition-all border-none uppercase tracking-widest text-xs flex items-center gap-2"
                  >
                    <ShoppingBag className="h-4 w-4" /> Add to Cart
                  </Button>
                ) : (
                  <div className="flex items-center bg-white rounded-2xl p-1 shadow-2xl scale-90 group-hover:scale-100 transition-all">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-10 w-10 text-primary hover:bg-primary/5 rounded-xl"
                      onClick={(e) => handleUpdateQuantity(e, -1)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-10 text-center font-black text-primary">{cartItem.quantity}</span>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-10 w-10 text-primary hover:bg-primary/5 rounded-xl"
                      onClick={(e) => handleUpdateQuantity(e, 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            </div>

            {/* Content Section */}
            <CardContent className="flex-1 p-5 md:p-8 flex flex-col justify-between order-1 md:order-2">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className={cn(
                    "w-6 h-6 border-2 flex items-center justify-center flex-shrink-0 rounded-md",
                    isVeg ? "border-green-600 shadow-[0_0_10px_rgba(22,163,74,0.1)]" : "border-red-600 shadow-[0_0_10px_rgba(220,38,38,0.1)]"
                  )}>
                    <div className={cn(
                      "w-3 h-3 rounded-full",
                      isVeg ? "bg-green-600" : "bg-red-600"
                    )} />
                  </div>
                  <div className="text-primary font-black text-2xl tracking-tighter">
                    {price}
                  </div>
                </div>

                <div>
                  <h4 className="font-black text-2xl text-gray-900 tracking-tighter leading-tight group-hover:text-primary transition-colors">{name}</h4>
                  {englishName && <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest mt-1">{englishName}</p>}
                </div>

                {description && (
                  <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed font-medium">
                    {description}
                  </p>
                )}
              </div>

              {/* Mobile Action Area */}
              <div className="mt-6 md:hidden">
                {!cartItem ? (
                  <Button
                    onClick={handleAddToCart}
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-black h-12 rounded-2xl shadow-xl shadow-yellow-400/20 transition-all flex items-center justify-center gap-2 uppercase tracking-widest text-[10px]"
                  >
                    <ShoppingBag className="h-4 w-4" />
                    {showAddedFeedback ? "Added!" : "Add to Cart"}
                  </Button>
                ) : (
                  <div className="flex items-center justify-between bg-primary/5 rounded-2xl p-1 border-2 border-primary/10">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-10 w-10 text-primary"
                      onClick={(e) => handleUpdateQuantity(e, -1)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="font-black text-primary text-base">{cartItem.quantity} Added</span>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-10 w-10 text-primary"
                      onClick={(e) => handleUpdateQuantity(e, 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>

              {/* Web Feedback */}
              <AnimatePresence>
                {showAddedFeedback && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: -10 }}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-2xl flex items-center gap-2 z-50 pointer-events-none"
                  >
                    <Check className="h-3 w-3" /> Added to your bag
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </div>
        </Card>
      </motion.div>

    </>
  )
}
