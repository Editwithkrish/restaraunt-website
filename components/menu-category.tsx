"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"
import MenuItemCard from "@/components/menu-item-card"
import { cn } from "@/lib/utils"
import MenuFilters, { type FilterOption } from "@/components/menu-filters"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslation } from "@/hooks/use-translation"
import MarathiDecorativeBorder from "@/components/marathi-decorative-border"

interface MenuItem {
  id: string
  name: string
  englishName?: string
  price: string
  description?: string
  image: string
  isVeg?: boolean
  isSpicy?: boolean
  isPopular?: boolean
  isNew?: boolean
}

interface MenuCategoryProps {
  title: string
  subtitle?: string
  items: MenuItem[]
  className?: string
  initialItemCount?: number
}

export default function MenuCategory({ title, subtitle, items, className, initialItemCount = 6 }: MenuCategoryProps) {
  const { t } = useTranslation()
  const [expanded, setExpanded] = useState(false)
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>(items)
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  const availableFilters: FilterOption[] = [
    { id: "veg", label: t("common.vegetarian"), color: "bg-forest-600 text-white" },
    { id: "spicy", label: t("common.spicy"), color: "bg-maroon-600 text-white" },
    { id: "popular", label: t("common.popular"), color: "bg-gold-600 text-white" },
    { id: "new", label: t("common.new"), color: "bg-royal-600 text-white" },
  ]

  useEffect(() => {
    if (activeFilters.length === 0) {
      setFilteredItems(items)
      return
    }

    const filtered = items.filter((item) => {
      return activeFilters.every((filter) => {
        switch (filter) {
          case "veg":
            return item.isVeg
          case "spicy":
            return item.isSpicy
          case "popular":
            return item.isPopular
          case "new":
            return item.isNew
          default:
            return true
        }
      })
    })

    setFilteredItems(filtered)
  }, [activeFilters, items])

  const displayItems = expanded ? filteredItems : filteredItems.slice(0, initialItemCount)

  const handleFilterChange = (filters: string[]) => {
    setActiveFilters(filters)
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  }

  return (
    <div className={cn("mb-12", className)}>
      <div className="mb-8 text-center">
        <MarathiDecorativeBorder>
          <h3 className="text-2xl md:text-3xl font-bold text-maroon-800 font-marathi">{title}</h3>
          {subtitle && <p className="text-saffron-700 mt-2">{subtitle}</p>}
        </MarathiDecorativeBorder>
      </div>

      <div className="mb-6">
        <MenuFilters
          onFilterChange={handleFilterChange}
          availableFilters={availableFilters}
          className="justify-center"
        />
      </div>

      <AnimatePresence>
        {filteredItems.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="text-center py-12"
          >
            <p className="text-gray-500">{t("common.noItems")}</p>
            <Button
              variant="outline"
              onClick={() => setActiveFilters([])}
              className="mt-4 border-saffron-600 text-saffron-800 hover:bg-saffron-50"
            >
              {t("common.clearFilters")}
            </Button>
          </motion.div>
        ) : (
          <motion.div variants={container} initial="hidden" animate="show" className="menu-grid">
            {displayItems.map((item) => (
              <motion.div key={item.id} variants={item}>
                <MenuItemCard
                  name={item.name}
                  englishName={item.englishName}
                  price={item.price}
                  description={item.description}
                  image={item.image}
                  category={subtitle}
                  isVeg={item.isVeg}
                  isSpicy={item.isSpicy}
                  isPopular={item.isPopular}
                  isNew={item.isNew}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {filteredItems.length > initialItemCount && (
        <div className="mt-6 text-center">
          <Button
            variant="outline"
            onClick={() => setExpanded(!expanded)}
            className="border-saffron-600 text-saffron-800 hover:bg-saffron-50"
          >
            {expanded ? (
              <>
                <ChevronUp className="mr-2 h-4 w-4" /> {t("common.showLess")}
              </>
            ) : (
              <>
                <ChevronDown className="mr-2 h-4 w-4" /> {t("common.showMore")} (
                {filteredItems.length - initialItemCount} {t("common.moreItems")})
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  )
}
