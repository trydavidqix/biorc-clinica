import { specialties } from '../../data/specialties'
import SectionLabel from '../ui/SectionLabel'
import SpecialtyCard from '../ui/SpecialtyCard'

export default function SpecialtiesSection() {
  return (
    <section id="especialidades" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <SectionLabel>Especialidades</SectionLabel>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-neutral-dark mt-3 mb-4">
            Cuidados especializados para si
          </h2>
          <p className="text-neutral-gray max-w-2xl mx-auto">
            Oferecemos uma vasta gama de especialidades médicas para cuidar da
            sua saúde de forma completa e integrada.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((specialty) => (
            <SpecialtyCard key={specialty.id} specialty={specialty} />
          ))}
        </div>
      </div>
    </section>
  )
}

