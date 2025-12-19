"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Filter, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export type FilterOption = {
  id: string
  label: string
  color?: string
}

interface MenuFiltersProps {
  onFilterChange: (filters: string[]) => void
  availableFilters: FilterOption[]
  className?: string
}

export default function MenuFilters({ onFilterChange, availableFilters, className }: MenuFiltersProps) {
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  const toggleFilter = (filterId: string) => {
    setActiveFilters((prev) => {
      const newFilters = prev.includes(filterId) ? prev.filter((id) => id !== filterId) : [...prev, filterId]
      onFilterChange(newFilters)
      return newFilters
    })
  }

  const clearFilters = () => {
    setActiveFilters([])
    onFilterChange([])
  }

  const getFilterBadgeColor = (filterId: string) => {
    const filter = availableFilters.find((f) => f.id === filterId)
    return filter?.color || "bg-gray-200 text-gray-800"
  }

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
            {activeFilters.length > 0 && (
              <Badge variant="secondary" className="ml-1 bg-saffron-100 text-saffron-800">
                {activeFilters.length}
              </Badge>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Filter Menu Items</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            {availableFilters.map((filter) => (
              <DropdownMenuItem
                key={filter.id}
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleFilter(filter.id)}
              >
                <span>{filter.label}</span>
                {activeFilters.includes(filter.id) && <Check className="h-4 w-4" />}
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
          {activeFilters.length > 0 && (
            <>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={clearFilters} className="text-red-500 focus:text-red-500">
                Clear all filters
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>

      <AnimatePresence>
        {activeFilters.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex flex-wrap gap-2 items-center"
          >
            {activeFilters.map((filterId) => {
              const filter = availableFilters.find((f) => f.id === filterId)
              if (!filter) return null

              return (
                <Badge
                  key={filterId}
                  variant="outline"
                  className={`${getFilterBadgeColor(filterId)} flex items-center gap-1 px-3 py-1`}
                >
                  {filter.label}
                  <X
                    className="h-3 w-3 cursor-pointer ml-1"
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleFilter(filterId)
                    }}
                  />
                </Badge>
              )
            })}

            <Button variant="ghost" size="sm" onClick={clearFilters} className="h-7 text-xs">
              Clear all
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
