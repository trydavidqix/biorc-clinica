import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '../../data/testimonials'
import SectionLabel from '../ui/SectionLabel'
import TestimonialCard from '../ui/TestimonialCard'

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  return (
    <section id="testemunhos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <SectionLabel>Testemunhos</SectionLabel>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-neutral-dark mt-3">
            O que dizem os nossos pacientes
          </h2>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard
                key={t.id}
                testimonial={t}
                highlighted={i === current}
              />
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-neutral-beige flex items-center justify-center hover:bg-neutral-cream transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-neutral-beige flex items-center justify-center hover:bg-neutral-cream transition-colors"
              aria-label="Próximo"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

