"use client"

import { motion } from "framer-motion"
import { Phone, Truck, MapPin, CheckCircle } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"
import ModernSectionHeader from "./modern-section-header"
import EnhancedButton from "./enhanced-button"

export default function FreeDeliverySection() {
  const { t } = useTranslation()

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#1C5D3D] rounded-[2.5rem] overflow-hidden shadow-2xl relative border-b-8 border-[#1C5D3D]/30">
            {/* Logo Theme Decorative Element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12 blur-2xl" />

            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="space-y-4 text-center md:text-left">
                  <div className="flex items-center gap-2 justify-center md:justify-start">
                    <Truck className="h-5 w-5 text-[#F9B826]" />
                    <span className="text-[10px] font-black text-[#F9B826] uppercase tracking-[0.2em]">Free Delivery Under 2KM</span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">
                    Hungry? <span className="text-[#F9B826] underline decoration-4 decoration-[#F9B826]/30">Call Us</span> Directly.
                  </h3>
                  <p className="text-white/90 text-sm max-w-sm font-bold uppercase tracking-widest leading-relaxed">
                    Get authentic home-style food delivered fresh to your doorstep.
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <motion.a
                    href="tel:7417007124"
                    whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center group"
                  >
                    <div className="w-24 h-24 bg-[#F9B826] rounded-[2rem] flex items-center justify-center text-[#3D1B0B] shadow-2xl shadow-black/20 mb-6 group-hover:bg-[#F9B826]/90 transition-all border-b-4 border-[#F9B826]/20">
                      <Phone className="h-10 w-10 fill-current" />
                    </div>
                    <span className="text-3xl font-black text-white tracking-tighter border-b-2 border-[#F9B826]/30 pb-1">7417007124</span>
                  </motion.a>
                </div>
              </div>

              <div className="mt-12 flex flex-wrap justify-center md:justify-start gap-8 border-t border-white/10 pt-8">
                {[
                  { icon: Phone, label: "Order on Call" },
                  { icon: MapPin, label: "Confirm Location" },
                  { icon: CheckCircle, label: "Enjoy Your Meal" }
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/10 rounded-2xl flex items-center justify-center text-[#F9B826] border border-white/5">
                      <step.icon className="h-4 w-4" />
                    </div>
                    <span className="text-[10px] font-black text-white uppercase tracking-widest">{step.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-center mt-8 text-[12px] font-black text-gray-900 uppercase tracking-[0.3em] leading-loose">
            *Authentic Kitchen Experience. Freshness Guaranteed.
          </p>
        </div>
      </div>
    </section>
  )
}
