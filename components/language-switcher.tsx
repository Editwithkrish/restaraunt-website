"use client"

import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { motion } from "framer-motion"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "mr" : "en")
  }

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button
        variant="outline"
        size="sm"
        onClick={toggleLanguage}
        className="flex items-center gap-2 border-saffron-300 text-saffron-700 hover:bg-saffron-50"
      >
        <Globe className="h-4 w-4" />
        <span className="font-medium">{language === "en" ? "मराठी" : "English"}</span>
      </Button>
    </motion.div>
  )
}
