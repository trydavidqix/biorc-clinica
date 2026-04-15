import { Doctor } from '../../types'

interface DoctorCardProps {
  doctor: Doctor
}

export default function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200">
      <div className="relative h-56 overflow-hidden">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      <div className="p-5">
        <h3 className="font-semibold text-neutral-dark">{doctor.name}</h3>
        <p className="text-primary text-sm font-medium mb-2">{doctor.title}</p>
        <p className="text-neutral-gray text-xs leading-relaxed line-clamp-3">
          {doctor.bio}
        </p>
      </div>
    </div>
  )
}

