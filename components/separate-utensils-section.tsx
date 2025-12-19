"use client"

import { motion } from "framer-motion"
import { ChefHat, Utensils, CheckCircle, Shield } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"
import ModernSectionHeader from "./modern-section-header"
import EnhancedCard from "./enhanced-card"

export default function SeparateUtensilsSection() {
  const { t } = useTranslation()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-white to-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <ModernSectionHeader
            title={t("separateUtensils.title")}
            subtitle={t("separateUtensils.subtitle")}
            description={t("separateUtensils.description")}
            icon={<Shield className="h-8 w-8 text-white" />}
          />

          <motion.div
            className="grid md:grid-cols-3 gap-8 mt-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <EnhancedCard className="text-center h-full">
                <motion.div
                  className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full mb-6 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <ChefHat className="h-10 w-10 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-green-800">{t("separateUtensils.vegSection")}</h3>
                <p className="text-gray-600 leading-relaxed">{t("separateUtensils.vegDesc")}</p>
              </EnhancedCard>
            </motion.div>

            <motion.div variants={itemVariants}>
              <EnhancedCard className="text-center h-full">
                <motion.div
                  className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-6 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Utensils className="h-10 w-10 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-orange-800">{t("separateUtensils.nonVegSection")}</h3>
                <p className="text-gray-600 leading-relaxed">{t("separateUtensils.nonVegDesc")}</p>
              </EnhancedCard>
            </motion.div>

            <motion.div variants={itemVariants}>
              <EnhancedCard className="text-center h-full">
                <motion.div
                  className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-6 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <CheckCircle className="h-10 w-10 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-blue-800">{t("separateUtensils.hygieneTitle")}</h3>
                <p className="text-gray-600 leading-relaxed">{t("separateUtensils.hygieneDesc")}</p>
              </EnhancedCard>
            </motion.div>
          </motion.div>

          {/* Visual Separator */}
          <motion.div
            className="mt-16 p-8 bg-white rounded-2xl shadow-lg border-2 border-green-100"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row items-center justify-around gap-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🥗</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-green-800">Vegetarian</h4>
                  <p className="text-sm text-gray-600">Dedicated Kitchen</p>
                </div>
              </div>

              <div className="text-4xl text-gray-300">|</div>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🍗</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-orange-800">Non-Vegetarian</h4>
                  <p className="text-sm text-gray-600">Separate Kitchen</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
