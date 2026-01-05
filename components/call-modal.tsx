"use client"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Clock, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

interface CallModalProps {
    isOpen: boolean
    onClose: () => void
    itemName?: string
}

export default function CallModal({ isOpen, onClose, itemName }: CallModalProps) {
    const phoneNumber = "7417007124"

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md bg-white rounded-3xl border-none p-0 overflow-hidden">
                <div className="bg-primary p-10 text-center relative overflow-hidden">
                    {/* Decorative background elements */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-20 -mt-20 blur-2xl" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full -ml-16 -mb-16 blur-xl" />

                    <motion.div
                        initial={{ scale: 0, rotate: -20 }}
                        animate={{ scale: 1, rotate: 0 }}
                        className="w-24 h-24 bg-white rounded-[2.5rem] flex items-center justify-center mx-auto mb-8 shadow-2xl relative z-10"
                    >
                        <Phone className="h-10 w-10 text-primary fill-current" />
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center shadow-lg animate-bounce">
                            <Sparkles className="h-4 w-4 text-white" />
                        </div>
                    </motion.div>

                    <h2 className="text-3xl font-black text-primary-foreground uppercase tracking-tighter leading-[0.9] mb-3 relative z-10">
                        Traditional <br /> <span className="text-secondary">Home Taste</span>
                    </h2>
                    {itemName && (
                        <div className="inline-block px-4 py-1.5 bg-secondary text-primary font-black text-[10px] uppercase tracking-widest rounded-full relative z-10 shadow-lg">
                            Order: {itemName}
                        </div>
                    )}
                </div>

                <div className="p-8 space-y-6">
                    <div className="text-center">
                        <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-2">Available Phone Number</p>
                        <a
                            href={`tel:${phoneNumber}`}
                            className="text-4xl font-black text-gray-900 tracking-tighter hover:text-primary transition-colors"
                        >
                            {phoneNumber}
                        </a>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        <Button
                            size="lg"
                            className="w-full h-16 bg-primary hover:bg-primary/90 text-primary-foreground text-xl font-black uppercase tracking-widest rounded-3xl shadow-2xl shadow-primary/30 transition-all active:scale-95 border-b-4 border-primary/20"
                            onClick={() => window.location.href = `tel:${phoneNumber}`}
                        >
                            <Phone className="mr-3 h-6 w-6 fill-current" />
                            Call to order
                        </Button>

                        <div className="flex items-center gap-3">
                            <div className="h-px flex-1 bg-gray-100" />
                            <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">or message us</span>
                            <div className="h-px flex-1 bg-gray-100" />
                        </div>

                        <Button
                            size="lg"
                            variant="outline"
                            className="w-full h-16 border-2 border-secondary/20 hover:bg-secondary/5 text-secondary text-xl font-black uppercase tracking-widest rounded-3xl transition-all active:scale-95"
                            onClick={() => window.location.href = `https://wa.me/${phoneNumber}?text=Hi, I want to order ${itemName || 'food'}`}
                        >
                            <MessageCircle className="mr-3 h-6 w-6 fill-current" />
                            WhatsApp
                        </Button>
                    </div>

                    <div className="pt-6 flex items-center justify-center gap-2 text-gray-400 border-t border-gray-100">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">Authentic Preparation: 30-45 mins</span>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
