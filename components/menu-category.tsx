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

export default function MenuCategory({ title, subtitle, items, className, initialItemCount = 10 }: MenuCategoryProps) {
  const { t } = useTranslation()
  const [expanded, setExpanded] = useState(false)
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>(items)
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  const availableFilters: FilterOption[] = [
    { id: "veg", label: "Pure Veg 🌿", color: "bg-secondary/10 text-secondary border-secondary/20" },
    { id: "spicy", label: "Spicy 🌶️", color: "bg-accent/10 text-accent border-accent/20" },
    { id: "popular", label: "Bestseller 🔥", color: "bg-primary/10 text-primary-foreground border-primary/20" },
    { id: "new", label: "New ✨", color: "bg-gray-100 text-gray-700 border-gray-200" },
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
        staggerChildren: 0.05,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  }

  return (
    <div className={cn("mb-12", className)}>
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6 px-4">
        <div className="border-l-4 border-primary pl-4">
          <h3 className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tighter leading-none">{title}</h3>
          <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.3em] mt-2">
            {filteredItems.length} Authentic Choices
          </p>
        </div>

        <MenuFilters
          onFilterChange={handleFilterChange}
          availableFilters={availableFilters}
          className="justify-start md:justify-end"
        />
      </div>

      <AnimatePresence mode="wait">
        {filteredItems.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="text-center py-20 bg-white rounded-[2.5rem] border-4 border-dashed border-gray-100"
          >
            <p className="text-gray-400 font-black uppercase tracking-widest text-sm">{t("common.noItems")}</p>
            <Button
              variant="link"
              onClick={() => setActiveFilters([])}
              className="mt-4 text-primary font-black uppercase text-xs p-0 h-auto tracking-widest"
            >
              Clear All Filters
            </Button>
          </motion.div>
        ) : (
          <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {displayItems.map((itemValue) => (
              <motion.div key={itemValue.id} variants={item}>
                <MenuItemCard
                  id={itemValue.id}
                  name={itemValue.name}
                  englishName={itemValue.englishName}
                  price={itemValue.price}
                  description={itemValue.description}
                  image={itemValue.image}
                  category={subtitle}
                  isVeg={itemValue.isVeg}
                  isSpicy={itemValue.isSpicy}
                  isPopular={itemValue.isPopular}
                  isNew={itemValue.isNew}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {filteredItems.length > initialItemCount && (
        <div className="mt-12 text-center px-4">
          <Button
            variant="ghost"
            onClick={() => setExpanded(!expanded)}
            className="w-full md:w-auto bg-white border-2 border-primary/10 text-gray-900 font-black uppercase tracking-widest hover:bg-primary hover:text-primary-foreground h-14 px-10 rounded-2xl shadow-xl transition-all"
          >
            {expanded ? (
              <>
                <ChevronUp className="mr-2 h-5 w-5" /> Pack Up Menu
              </>
            ) : (
              <>
                <ChevronDown className="mr-2 h-5 w-5" /> Explore Full Range (
                {filteredItems.length - initialItemCount} More)
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  )
}
