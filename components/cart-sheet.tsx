"use client"

import React, { useState } from "react"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetFooter,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { ShoppingBag, Plus, Minus, Trash2, Send, MapPin, User, Phone } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export default function CartSheet() {
    const { items, removeItem, updateQuantity, totalPrice, totalItems, clearCart, isCartOpen, setIsCartOpen, customer, updateCustomer } = useCart()
    const [step, setStep] = useState<"cart" | "checkout">("cart")

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target
        updateCustomer({ [id]: value })
    }

    const placeOrder = () => {
        if (!customer.name || !customer.phone || !customer.address) {
            alert("Please fill in all details")
            return
        }

        const orderItems = items
            .map((item) => `• ${item.name} x${item.quantity} - ₹${item.price * item.quantity}`)
            .join("\n")

        const message = `*NEW ORDER FROM SURUCHI'S KITCHEN*\n\n` +
            `*Customer Details:*\n` +
            `Name: ${customer.name}\n` +
            `Phone: ${customer.phone}\n` +
            `Address: ${customer.address}\n\n` +
            `*Order Details:*\n` +
            `${orderItems}\n\n` +
            `*Total Amount: ₹${totalPrice}*\n\n` +
            `Please confirm my order!`

        const whatsappUrl = `https://wa.me/917417007124?text=${encodeURIComponent(message)}`

        window.open(whatsappUrl, "_blank")
        clearCart()
        setIsCartOpen(false)
        setStep("cart")
    }

    return (
        <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
            <SheetTrigger asChild>
                <div className="fixed bottom-6 right-6 z-[60] md:flex hidden">
                    {totalItems > 0 && (
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.5, 0.2, 0.5]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute inset-0 bg-primary rounded-full blur-xl"
                        />
                    )}
                    <Button
                        variant="default"
                        className="relative h-16 px-8 rounded-full shadow-[0_20px_50px_rgba(239,68,68,0.4)] bg-primary hover:bg-red-700 transition-all hover:scale-105 active:scale-95 group border-none flex items-center gap-3 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />

                        <div className="relative">
                            <ShoppingBag className="h-6 w-6 text-white" />
                            {totalItems > 0 && (
                                <Badge className="absolute -top-3 -right-3 bg-white text-primary font-black h-5 w-5 p-0 flex items-center justify-center rounded-full border-2 border-primary text-[10px]">
                                    {totalItems}
                                </Badge>
                            )}
                        </div>

                        <div className="flex flex-col items-start leading-none mt-0.5">
                            <span className="font-black uppercase tracking-widest text-[11px] text-white/90">Your Order</span>
                            {totalItems > 0 ? (
                                <span className="font-black text-lg text-white">₹{totalPrice}</span>
                            ) : (
                                <span className="font-black text-lg text-white">View Cart</span>
                            )}
                        </div>
                    </Button>
                </div>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-md flex flex-col p-0 border-none bg-white shadow-2xl">
                <SheetHeader className="p-8 bg-white border-b border-gray-100 text-left relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl" />
                    <div className="flex items-center justify-between relative z-10">
                        <SheetTitle className="text-3xl font-black uppercase tracking-tighter text-gray-900 flex items-center gap-3">
                            <div className="bg-primary p-2 rounded-xl text-white shadow-lg shadow-primary/20">
                                <ShoppingBag className="h-6 w-6" />
                            </div>
                            {step === "cart" ? "Your Order" : "Checkout"}
                        </SheetTitle>
                        {step === "cart" && items.length > 0 && (
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={clearCart}
                                className="text-gray-400 hover:text-red-500 hover:bg-red-50 font-black uppercase tracking-widest text-[10px] h-8 rounded-lg"
                            >
                                Clear All
                            </Button>
                        )}
                    </div>
                </SheetHeader>

                <div className="flex-1 overflow-hidden flex flex-col bg-gray-50/30">
                    {/* Step Indicator */}
                    <div className="px-8 py-4 flex gap-2">
                        <div className={cn("h-1.5 flex-1 rounded-full transition-all duration-500", step === "cart" || step === "checkout" ? "bg-primary" : "bg-gray-200")} />
                        <div className={cn("h-1.5 flex-1 rounded-full transition-all duration-500", step === "checkout" ? "bg-primary" : "bg-gray-200")} />
                    </div>

                    {step === "cart" ? (
                        <>
                            {items.length === 0 ? (
                                <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-6">
                                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl shadow-gray-200/50">
                                        <ShoppingBag className="h-10 w-10 text-gray-200" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Your cart is empty</h3>
                                        <p className="text-gray-400 text-sm font-bold uppercase tracking-widest leading-relaxed">Delicious flavors are just <br />a few clicks away!</p>
                                    </div>
                                    <Button onClick={() => setIsCartOpen(false)} className="bg-primary hover:bg-red-700 text-white font-black uppercase tracking-widest text-xs h-14 px-8 rounded-2xl shadow-xl shadow-primary/20">
                                        Browse Our Menu
                                    </Button>
                                </div>
                            ) : (
                                <ScrollArea className="flex-1 px-8">
                                    <div className="py-2 space-y-4">
                                        {items.map((item) => (
                                            <motion.div
                                                layout
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                key={item.id}
                                                className="flex gap-4 p-4 bg-white rounded-[2rem] shadow-sm border border-gray-100 group hover:shadow-md transition-all relative overflow-hidden"
                                            >
                                                <div className="relative h-20 w-20 rounded-2xl overflow-hidden shadow-md flex-shrink-0">
                                                    <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                                                </div>
                                                <div className="flex-1 min-w-0 flex flex-col justify-between py-1">
                                                    <div>
                                                        <div className="flex justify-between items-start">
                                                            <h4 className="font-black text-gray-900 uppercase tracking-tighter text-sm truncate pr-2">{item.name}</h4>
                                                            <button
                                                                onClick={() => removeItem(item.id)}
                                                                className="text-gray-300 hover:text-red-500 transition-colors"
                                                            >
                                                                <Trash2 className="h-4 w-4" />
                                                            </button>
                                                        </div>
                                                        <p className="text-primary font-black text-lg">₹{item.price}</p>
                                                    </div>

                                                    <div className="flex items-center justify-between mt-2">
                                                        <div className="flex items-center bg-gray-50 rounded-xl p-1 border border-gray-100">
                                                            <button
                                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                                className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-primary transition-colors"
                                                            >
                                                                <Minus className="h-4 w-4" />
                                                            </button>
                                                            <span className="w-8 text-center font-black text-sm">{item.quantity}</span>
                                                            <button
                                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                                className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-primary transition-colors"
                                                            >
                                                                <Plus className="h-4 w-4" />
                                                            </button>
                                                        </div>
                                                        <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                                                            Sub: ₹{item.price * item.quantity}
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                    <div className="h-8" />
                                </ScrollArea>
                            )}
                        </>
                    ) : (
                        <ScrollArea className="flex-1 px-8">
                            <div className="py-4 space-y-8">
                                <div className="space-y-6">
                                    <div className="space-y-3">
                                        <Label htmlFor="name" className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 flex items-center gap-2 px-1">
                                            <User className="h-3 w-3 text-primary" /> Full Name
                                        </Label>
                                        <Input
                                            id="name"
                                            placeholder="John Doe"
                                            value={customer.name}
                                            onChange={handleInputChange}
                                            className="rounded-2xl border-2 border-gray-100 bg-white focus:border-primary focus:ring-0 h-14 font-black text-gray-900 placeholder:text-gray-300"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <Label htmlFor="phone" className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 flex items-center gap-2 px-1">
                                            <Phone className="h-3 w-3 text-primary" /> Phone Number
                                        </Label>
                                        <Input
                                            id="phone"
                                            placeholder="98765 43210"
                                            value={customer.phone}
                                            onChange={handleInputChange}
                                            className="rounded-2xl border-2 border-gray-100 bg-white focus:border-primary focus:ring-0 h-14 font-black text-gray-900 placeholder:text-gray-300"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <Label htmlFor="address" className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 flex items-center gap-2 px-1">
                                            <MapPin className="h-3 w-3 text-primary" /> Delivery Address
                                        </Label>
                                        <Textarea
                                            id="address"
                                            placeholder="Apartment, Street, Landmark..."
                                            value={customer.address}
                                            onChange={handleInputChange}
                                            className="rounded-2xl border-2 border-gray-100 bg-white focus:border-primary focus:ring-0 min-h-[140px] font-black text-gray-900 placeholder:text-gray-300 py-4"
                                        />
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-[2.5rem] border-2 border-gray-100 shadow-sm space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                                            <ShoppingBag className="h-5 w-5 text-primary" />
                                        </div>
                                        <h5 className="font-black uppercase text-xs tracking-widest text-gray-900">Order Summary</h5>
                                    </div>
                                    <div className="space-y-3">
                                        {items.map(item => (
                                            <div key={item.id} className="flex justify-between items-center bg-gray-50/50 p-2 rounded-xl border border-gray-100/50">
                                                <div className="flex items-center gap-2">
                                                    <span className="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-[10px] font-black shadow-sm">{item.quantity}×</span>
                                                    <span className="text-[11px] font-black text-gray-600 truncate max-w-[150px] uppercase">{item.name}</span>
                                                </div>
                                                <span className="text-xs font-black text-gray-900">₹{item.price * item.quantity}</span>
                                            </div>
                                        ))}
                                        <div className="pt-2 border-t-2 border-dashed border-gray-100 flex justify-between items-center">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Total Payable</span>
                                            <span className="text-2xl font-black text-primary">₹{totalPrice}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="h-8" />
                        </ScrollArea>
                    )}
                </div>

                {items.length > 0 && (
                    <SheetFooter className="p-8 bg-white border-t border-gray-100 shadow-[0_-20px_50px_rgba(0,0,0,0.05)] relative z-20">
                        <div className="w-full space-y-6">
                            {step === "cart" && (
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-1">Total Amount</p>
                                        <p className="text-4xl font-black text-gray-900 tracking-tighter">₹{totalPrice}</p>
                                    </div>
                                    <div className="text-right">
                                        <Badge className="bg-gray-900 text-white font-black uppercase tracking-[0.1em] px-4 py-2 rounded-xl text-xs">
                                            {totalItems} Items
                                        </Badge>
                                    </div>
                                </div>
                            )}

                            <div className="flex gap-3">
                                {step === "cart" ? (
                                    <Button
                                        onClick={() => setStep("checkout")}
                                        className="w-full bg-primary hover:bg-red-700 text-white h-16 rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-2xl shadow-primary/30 active:translate-y-1 transition-all group overflow-hidden relative"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                                        Checkout Now
                                    </Button>
                                ) : (
                                    <>
                                        <Button
                                            variant="outline"
                                            onClick={() => setStep("cart")}
                                            className="w-20 h-16 rounded-2xl font-black uppercase tracking-widest border-2 border-gray-100 flex items-center justify-center hover:bg-gray-50 active:translate-y-1 transition-all"
                                        >
                                            Back
                                        </Button>
                                        <Button
                                            onClick={placeOrder}
                                            className="flex-1 bg-green-600 hover:bg-green-700 text-white h-16 rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-2xl shadow-green-600/30 active:translate-y-1 transition-all flex items-center justify-center gap-3 group"
                                        >
                                            <Send className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            Place Order
                                        </Button>
                                    </>
                                )}
                            </div>
                        </div>
                    </SheetFooter>
                )}
            </SheetContent>
        </Sheet>
    )
}
