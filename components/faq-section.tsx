"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, HelpCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import ModernSectionHeader from "@/components/modern-section-header"
import { useTranslation } from "@/hooks/use-translation"

interface FAQItem {
  question: string
  answer: string
}

export default function FAQSection() {
  const { t } = useTranslation()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs: FAQItem[] = [
    {
      question: t("faq.deliveryTime.question"),
      answer: t("faq.deliveryTime.answer"),
    },
    {
      question: t("faq.openingHours.question"),
      answer: t("faq.openingHours.answer"),
    },
    {
      question: t("faq.vegetarian.question"),
      answer: t("faq.vegetarian.answer"),
    },
    {
      question: t("faq.parking.question"),
      answer: t("faq.parking.answer"),
    },
    {
      question: t("faq.reservations.question"),
      answer: t("faq.reservations.answer"),
    },
    {
      question: t("faq.payment.question"),
      answer: t("faq.payment.answer"),
    },
    {
      question: t("faq.specialDiet.question"),
      answer: t("faq.specialDiet.answer"),
    },
    {
      question: t("faq.location.question"),
      answer: t("faq.location.answer"),
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-saffron-50/30 to-gold-50/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <ModernSectionHeader
            title={t("faq.title")}
            subtitle={t("faq.subtitle")}
            description={t("faq.description")}
            icon={<HelpCircle className="h-8 w-8 text-white" />}
          />

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="overflow-hidden border border-gray-200 hover:border-saffron-300 transition-colors duration-300">
                  <CardContent className="p-0">
                    <motion.button
                      className="w-full p-6 text-left flex justify-between items-center hover:bg-saffron-50/50 transition-colors duration-300"
                      onClick={() => toggleFAQ(index)}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <h3 className="text-lg font-semibold text-maroon-800 pr-4">{faq.question}</h3>
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <ChevronDown className="h-5 w-5 text-saffron-600" />
                      </motion.div>
                    </motion.button>

                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-2">
                            <motion.p
                              initial={{ y: -10, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              exit={{ y: -10, opacity: 0 }}
                              transition={{ delay: 0.1, duration: 0.2 }}
                              className="text-gray-700 leading-relaxed"
                            >
                              {faq.answer}
                            </motion.p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Card className="inline-block bg-gradient-to-r from-saffron-50 to-gold-50 border border-saffron-200">
              <CardContent className="p-6">
                <h4 className="font-bold text-maroon-800 mb-2">{t("faq.stillHaveQuestions")}</h4>
                <p className="text-gray-600 mb-4">{t("faq.contactUs")}</p>
                <div className="flex flex-col sm:flex-row gap-2 text-sm text-[#E25822]">
                  <span>📞 7417007124</span>
                  <span className="hidden sm:inline">|</span>
                  <span>📧 suruchikitchen7@gmail.com</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
