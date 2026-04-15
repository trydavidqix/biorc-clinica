import * as Icons from 'lucide-react'
import { Specialty } from '../../types'

interface SpecialtyCardProps {
  specialty: Specialty
  onClick?: () => void
}

export default function SpecialtyCard({ specialty, onClick }: SpecialtyCardProps) {
  const Icon =
    ((Icons as unknown) as Record<string, Icons.LucideIcon>)[specialty.icon] ||
    Icons.Stethoscope

  return (
    <div
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : -1}
      className="group p-6 rounded-xl border border-neutral-beige hover:border-primary/30 hover:shadow-md transition-all duration-200 cursor-pointer bg-white border-l-4 border-l-transparent hover:border-l-primary"
    >
      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        <Icon size={20} className="text-primary" />
      </div>
      <h3 className="font-semibold text-neutral-dark mb-2">{specialty.name}</h3>
      <p className="text-neutral-gray text-sm leading-relaxed mb-4">
        {specialty.description}
      </p>
      <span className="text-primary text-sm font-medium group-hover:underline">
        Saber mais →
      </span>
    </div>
  )
}

