"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Filter, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
                {activeFilters.length}
              </Badge>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 rounded-2xl border-2 border-primary/10 p-2 shadow-2xl">
          <DropdownMenuLabel className="font-black uppercase tracking-widest text-[10px] text-gray-400 p-2">Refine Menu</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            {availableFilters.map((filter) => (
              <DropdownMenuItem
                key={filter.id}
                className="flex items-center justify-between cursor-pointer rounded-xl h-10 px-3 font-bold text-sm"
                onClick={() => toggleFilter(filter.id)}
              >
                <span>{filter.label}</span>
                {activeFilters.includes(filter.id) && <Check className="h-4 w-4 text-primary" />}
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
          {activeFilters.length > 0 && (
            <>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={clearFilters} className="text-primary font-black uppercase text-[10px] tracking-widest focus:text-primary focus:bg-primary/5 rounded-xl">
                Reset All Filters
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>

      <AnimatePresence>
        {activeFilters.length > 0 && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="flex flex-wrap gap-2 items-center"
          >
            {activeFilters.map((filterId) => {
              const filter = availableFilters.find((f) => f.id === filterId)
              if (!filter) return null

              return (
                <Badge
                  key={filterId}
                  variant="outline"
                  className={cn(getFilterBadgeColor(filterId), "flex items-center gap-2 px-4 py-1.5 border shadow-sm font-black text-[10px] uppercase tracking-[0.1em] rounded-xl")}
                >
                  {filter.label}
                  <X
                    className="h-3 w-3 cursor-pointer ml-1 text-inherit opacity-60 hover:opacity-100"
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleFilter(filterId)
                    }}
                  />
                </Badge>
              )
            })}

            <Button variant="ghost" size="sm" onClick={clearFilters} className="h-10 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-primary transition-colors">
              Reset
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
