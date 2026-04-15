import { CheckCircle2 } from 'lucide-react'
import SectionLabel from '../ui/SectionLabel'

const values = [
  'Excelência clínica',
  'Atendimento humanizado',
  'Tecnologia clínica',
  'Ética e transparência',
]

export default function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-neutral-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>Sobre Nós</SectionLabel>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-neutral-dark mt-3 mb-6 leading-snug">
              Uma clínica pensada para si e para a sua família
            </h2>
            <p className="text-neutral-gray leading-relaxed mb-4">
              A Clínica Médica BIØRC nasceu do desejo de oferecer cuidados de
              saúde de excelência em Ovar. Com uma equipa multidisciplinar
              integrada, oferecemos qualidade, acompanhamento em áreas distintas
              e personalizado e integrado.
            </p>
            <p className="text-neutral-gray leading-relaxed mb-8">
              A nossa missão é colocar o paciente no centro de tudo, combinando
              tecnologia e clínica e a competência com uma abordagem humana e
              multidisciplinar. Porque acreditamos que a saúde começa com
              confiança.
            </p>

            <ul className="space-y-3">
              {values.map((value) => (
                <li key={value} className="flex items-center gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-primary flex-shrink-0"
                  />
                  <span className="text-neutral-dark font-medium">{value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <img
              src="/images/Gemini_Generated_Image_383d09383d09383d.png"
              alt="Interior da Clínica BIØRC"
              className="w-full h-[480px] object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

