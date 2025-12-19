"use client"

import { motion } from "framer-motion"
import { Phone, Truck, MapPin, CheckCircle } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"
import ModernSectionHeader from "./modern-section-header"
import EnhancedButton from "./enhanced-button"

export default function FreeDeliverySection() {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <ModernSectionHeader
            title={t("freeDelivery.title")}
            subtitle={t("freeDelivery.subtitle")}
            description={t("freeDelivery.description")}
            icon={<Truck className="h-8 w-8 text-white" />}
          />

          {/* Main Card */}
          <motion.div
            className="mt-12 bg-white rounded-3xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative p-12 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400/30 via-indigo-400/30 to-purple-400/30 blur-xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              <div className="relative z-10 text-center text-white">
                <motion.div
                  className="inline-block mb-6"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto">
                    <Truck className="h-12 w-12 text-white" />
                  </div>
                </motion.div>

                <h3 className="text-4xl md:text-5xl font-bold mb-4">{t("freeDelivery.callUs")}</h3>
                <motion.a
                  href="tel:7417007124"
                  className="inline-block text-5xl md:text-6xl font-extrabold mb-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {t("freeDelivery.phone")}
                </motion.a>
                <p className="text-xl md:text-2xl opacity-90">{t("freeDelivery.description")}</p>
              </div>
            </div>

            {/* How it Works */}
            <div className="p-8 bg-gradient-to-br from-gray-50 to-white">
              <h4 className="text-2xl font-bold text-center mb-8 text-gray-800">{t("freeDelivery.howItWorks")}</h4>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: Phone, step: "1", text: t("freeDelivery.step1") },
                  { icon: MapPin, step: "2", text: t("freeDelivery.step2") },
                  { icon: CheckCircle, step: "3", text: t("freeDelivery.step3") },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                  >
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mb-4 shadow-lg relative"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="absolute -top-2 -right-2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {item.step}
                      </span>
                      <item.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <p className="font-semibold text-gray-800">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="p-8 bg-gray-100 text-center">
              <EnhancedButton
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xl py-6 px-12 rounded-full shadow-xl"
                onClick={() => (window.location.href = "tel:7417007124")}
              >
                <Phone className="mr-3 h-6 w-6" />
                {t("contact.callNow")}
              </EnhancedButton>
              <p className="text-sm text-gray-500 mt-4">{t("freeDelivery.terms")}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
