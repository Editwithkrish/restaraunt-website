import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface MenuItem {
  name: string
  englishName?: string
  price: string
  description?: string
}

interface MenuSectionProps {
  title: string
  subtitle?: string
  items: MenuItem[]
  compact?: boolean
}

export default function MenuSection({ title, subtitle, items, compact = false }: MenuSectionProps) {
  return (
    <div className="mb-8">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-amber-900">{title}</h3>
        {subtitle && <p className="text-gray-600">{subtitle}</p>}
      </div>

      <div
        className={cn(
          "grid gap-4",
          compact ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
        )}
      >
        {items.map((item, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-lg">{item.name}</h4>
                  {item.englishName && <p className="text-gray-600 text-sm">{item.englishName}</p>}
                  {item.description && <p className="text-gray-600 text-sm mt-1">{item.description}</p>}
                </div>
                <div className="bg-amber-100 px-3 py-1 rounded-full text-amber-800 font-bold">{item.price}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
