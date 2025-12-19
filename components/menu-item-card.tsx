import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface MenuItemCardProps {
  name: string
  englishName?: string
  price: string
  description?: string
  image: string
  category?: string
  isVeg?: boolean
  isSpicy?: boolean
  isPopular?: boolean
  isNew?: boolean
  className?: string
}

export default function MenuItemCard({
  name,
  englishName,
  price,
  description,
  image,
  category,
  isVeg = true,
  isSpicy = false,
  isPopular = false,
  isNew = false,
  className,
}: MenuItemCardProps) {
  return (
    <Card
      className={cn("overflow-hidden hover:shadow-xl transition-all duration-300 dish-card relative h-full", className)}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={englishName || name}
          fill
          className="object-cover dish-image"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

        <div className="price-tag">{price}</div>

        <div className="absolute bottom-2 left-2 flex gap-1">
          {isVeg && (
            <Badge variant="outline" className="bg-forest-600 text-white border-0">
              Veg
            </Badge>
          )}
          {isSpicy && (
            <Badge variant="outline" className="bg-maroon-600 text-white border-0">
              Spicy
            </Badge>
          )}
          {isPopular && (
            <Badge variant="outline" className="bg-gold-600 text-white border-0">
              Popular
            </Badge>
          )}
          {isNew && (
            <Badge variant="outline" className="bg-royal-600 text-white border-0">
              New
            </Badge>
          )}
        </div>
      </div>

      <CardContent className="p-4">
        <div className="space-y-2">
          <div>
            <h4 className="font-bold text-lg text-maroon-900 font-marathi">{name}</h4>
            {englishName && <p className="text-gray-600 text-sm">{englishName}</p>}
          </div>

          {category && <div className="text-xs text-saffron-700 font-medium">{category}</div>}

          {description && <p className="text-gray-700 text-sm mt-2 line-clamp-3">{description}</p>}
        </div>
      </CardContent>
    </Card>
  )
}
