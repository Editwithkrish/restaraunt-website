"use client"

import { motion } from "framer-motion"
import { ChefHat, Utensils, CheckCircle, Shield } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"
import ModernSectionHeader from "./modern-section-header"

export default function SeparateUtensilsSection() {
  const { t } = useTranslation()

  return (
    <section className="py-16 bg-white border-y border-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <ModernSectionHeader
            title="SAFETY & HYGIENE"
            subtitle="Our Commitment"
            description="We understand and respect your food preferences. That's why we maintain strictly independent environments for veg and non-veg preparation."
          />

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="p-8 bg-green-50/50 rounded-3xl border border-green-100 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-green-200">
                <ChefHat className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-black text-green-900 uppercase tracking-tighter mb-2">100% Pure Veg Section</h3>
              <p className="text-sm text-green-700 font-medium leading-relaxed opacity-80">Dedicated utensils, separate storage, and a specialized team for all vegetarian preparations.</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="p-8 bg-red-50/50 rounded-3xl border border-red-100 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-red-200">
                <Utensils className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-black text-red-900 uppercase tracking-tighter mb-2">Independent Non-Veg Kitchen</h3>
              <p className="text-sm text-red-700 font-medium leading-relaxed opacity-80">Completely separate kitchen area and staff for non-vegetarian dishes to ensure absolute integrity.</p>
            </motion.div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {[
              "Sanitized Kitchen",
              "Daily Fresh Ingredients",
              "Independent Staff",
              "Separate Utensils"
            ].map((tag) => (
              <div key={tag} className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-100">
                <CheckCircle className="h-4 w-4 text-gray-400" />
                <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
