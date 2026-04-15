import { Cpu, Heart, Users } from 'lucide-react'
import SectionLabel from '../ui/SectionLabel'

const differentials = [
  {
    icon: Heart,
    title: 'Atendimento Humanizado',
    description:
      'Cada paciente é único. Oferecemos cuidados personalizados, ouvindo e compreendendo cada situação, com empatia e dedicação.',
  },
  {
    icon: Users,
    title: 'Equipa Especializada',
    description:
      'Contamos com médicos e técnicos altamente qualificados, com formação e experiência em diversas áreas da saúde.',
  },
  {
    icon: Cpu,
    title: 'Tecnologia Moderna',
    description:
      'Equipamentos de última geração para diagnósticos precisos e tratamentos eficazes, aliando inovação à medicina de excelência.',
  },
]

export default function DifferentialsSection() {
  return (
    <section id="diferenciais" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <SectionLabel>Por que nós</SectionLabel>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-neutral-dark mt-3">
            O que nos distingue
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {differentials.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 bg-neutral-cream rounded-full flex items-center justify-center mx-auto mb-5">
                  <Icon size={28} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-neutral-gray text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="w-full h-64 lg:h-80 overflow-hidden rounded-2xl">
          <img
            src="/images/Firefly_Gemini Flash_Create a highly realistic image of multiple doctors sitting together around a table i 191070.png"
            alt="Equipa BIØRC"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

