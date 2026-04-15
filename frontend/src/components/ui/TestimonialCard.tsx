import { Star } from 'lucide-react'
import { Testimonial } from '../../types'

export default function TestimonialCard({
  testimonial,
  highlighted,
}: {
  testimonial: Testimonial
  highlighted?: boolean
}) {
  return (
    <div
      className={`bg-neutral-cream rounded-xl p-6 transition-all duration-300 ${
        highlighted ? 'ring-2 ring-primary/30' : ''
      }`}
    >
      <p className="text-neutral-gray text-sm leading-relaxed italic mb-6">
        "{testimonial.text}"
      </p>
      <div className="flex gap-1 mb-3">
        {Array.from({ length: testimonial.rating }).map((_, j) => (
          <Star
            key={j}
            size={14}
            className="text-yellow-400 fill-yellow-400"
          />
        ))}
      </div>
      <p className="font-semibold text-neutral-dark text-sm">{testimonial.name}</p>
      <p className="text-neutral-gray text-xs">{testimonial.specialty}</p>
    </div>
  )
}

