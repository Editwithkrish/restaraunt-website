"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Ticket, GraduationCap, Shield, ChevronRight, ChevronLeft, Sparkles, Instagram } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"
import { OFFERS_IMAGES } from "@/lib/image-config"

export default function SpecialOffers() {
  const { t } = useTranslation()
  const [activeIndex, setActiveIndex] = useState(0)

  // Update offers array to use translations:
  const offers = [
    {
      id: "instagram",
      title: t("offers.instagram.title"),
      description: t("offers.instagram.description"),
      icon: Instagram,
      image: OFFERS_IMAGES.instagram,
      color: "from-pink-500 to-purple-600",
      buttonText: t("offers.instagram.button"),
      buttonLink: "#",
    },
    {
      id: "weekendSpecial",
      title: t("offers.weekendSpecial.title"),
      description: t("offers.weekendSpecial.description"),
      icon: Ticket,
      image: OFFERS_IMAGES.weekendSpecial,
      color: "from-maroon-500 to-maroon-700",
    },
    {
      id: "students",
      title: t("offers.students.title"),
      description: t("offers.students.description"),
      icon: GraduationCap,
      image: OFFERS_IMAGES.students,
      color: "from-saffron-500 to-saffron-700",
    },
    {
      id: "defence",
      title: t("offers.defence.title"),
      description: t("offers.defence.description"),
      icon: Shield,
      image: OFFERS_IMAGES.defence,
      color: "from-green-500 to-green-700",
    },
  ]

  const nextOffer = () => {
    setActiveIndex((prev) => (prev === offers.length - 1 ? 0 : prev + 1))
  }

  const prevOffer = () => {
    setActiveIndex((prev) => (prev === 0 ? offers.length - 1 : prev - 1))
  }

  const IconComponent = offers[activeIndex].icon

  return (
    <div className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 to-saffron-50/30">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-saffron-500 to-gold-500 rounded-full mb-6">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-maroon-800 mb-4">{t("offers.title")}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-saffron-500 to-gold-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t("offers.description")}</p>
          </motion.div>

          <div className="relative">
            <div className="flex justify-center">
              <Card className="w-full max-w-5xl overflow-hidden shadow-xl border-0 bg-white">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2">
                    <div className="relative h-80 lg:h-auto">
                      <Image
                        src={offers[activeIndex].image || "/placeholder.svg"}
                        alt={offers[activeIndex].title}
                        fill
                        className="object-cover"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${offers[activeIndex].color} opacity-60`}
                      ></div>
                    </div>

                    <div className="p-8 lg:p-12 flex flex-col justify-center bg-white">
                      <motion.div
                        key={offers[activeIndex].id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                      >
                        <div className="flex items-center mb-6">
                          <div className="p-4 rounded-full bg-gradient-to-r from-saffron-500 to-gold-500 mr-4">
                            <IconComponent className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl lg:text-3xl font-bold text-maroon-800">
                              {offers[activeIndex].title}
                            </h3>
                            <div className="w-16 h-1 bg-saffron-500 mt-2"></div>
                          </div>
                        </div>

                        <p className="text-gray-700 mb-8 text-lg leading-relaxed">{offers[activeIndex].description}</p>

                        <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-500">
                            <span className="font-medium">{t("offers.terms")}</span>
                          </div>
                          <div className="text-3xl font-bold text-saffron-600">{t("offers.discount")}</div>
                        </div>

                        {offers[activeIndex].buttonText && offers[activeIndex].buttonLink && (
                          <div className="mt-6">
                            <Button
                              asChild
                              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full px-6 py-3"
                            >
                              <a
                                href={offers[activeIndex].buttonLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                              >
                                <Instagram className="h-5 w-5" />
                                {offers[activeIndex].buttonText}
                              </a>
                            </Button>
                          </div>
                        )}
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="absolute top-1/2 left-4 -translate-y-1/2">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-white/90 shadow-lg hover:bg-white border-2 border-gray-200 hover:border-saffron-400 w-12 h-12"
                onClick={prevOffer}
              >
                <ChevronLeft className="h-6 w-6 text-gray-600" />
              </Button>
            </div>

            <div className="absolute top-1/2 right-4 -translate-y-1/2">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-white/90 shadow-lg hover:bg-white border-2 border-gray-200 hover:border-saffron-400 w-12 h-12"
                onClick={nextOffer}
              >
                <ChevronRight className="h-6 w-6 text-gray-600" />
              </Button>
            </div>

            <div className="flex justify-center mt-8 space-x-3">
              {offers.map((_, index) => (
                <button
                  key={index}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${index === activeIndex
                    ? "bg-gradient-to-r from-saffron-500 to-gold-500 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
