import { team } from '../../data/team'
import DoctorCard from '../ui/DoctorCard'
import SectionLabel from '../ui/SectionLabel'

export default function TeamSection() {
  return (
    <section id="equipa" className="py-20 bg-neutral-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <SectionLabel>A Nossa Equipa</SectionLabel>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-neutral-dark mt-3 mb-4">
            Profissionais de confiança
          </h2>
          <p className="text-neutral-gray">
            Conheça os especialistas que cuidam de si e da sua família todos os
            dias.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </section>
  )
}

