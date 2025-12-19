import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

interface TestimonialCardProps {
  name: string
  quote: string
  rating: number
  image?: string
}

export default function TestimonialCard({ name, quote, rating, image }: TestimonialCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative h-12 w-12 rounded-full overflow-hidden bg-amber-200">
            {image ? (
              <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
            ) : (
              <div className="h-full w-full flex items-center justify-center text-amber-800 font-bold text-xl">
                {name.charAt(0)}
              </div>
            )}
          </div>
          <div>
            <h4 className="font-bold">{name}</h4>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < rating ? "text-amber-500 fill-amber-500" : "text-gray-300"}`} />
              ))}
            </div>
          </div>
        </div>

        <blockquote className="italic text-gray-700">"{quote}"</blockquote>
      </CardContent>
    </Card>
  )
}
