import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import SectionLabel from '../ui/SectionLabel'
import ContactForm from '../ui/ContactForm'

const contactInfo = [
  {
    icon: MapPin,
    label: 'Morada',
    value: 'Rua Dr. João Semana nº175\n3880-067 Ovar',
  },
  {
    icon: Phone,
    label: 'Telefone',
    value: '+351 919 107 717',
    href: 'tel:+351919107717',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+351 919 107 717',
    href: 'https://wa.me/351919107717',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'geral@clinicamedicabiorc.pt',
    href: 'mailto:geral@clinicamedicabiorc.pt',
  },
  {
    icon: Clock,
    label: 'Horário',
    value: 'Seg–Sex: 7h30–13h15 / 14h30–20h\nSábado: 7h30–13h',
  },
]

export default function ContactSection() {
  return (
    <section id="contacto" className="py-20 bg-neutral-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <SectionLabel>Contacte-nos</SectionLabel>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-neutral-dark mt-3 mb-4">
            Marque a sua consulta agora
          </h2>
          <p className="text-neutral-gray max-w-2xl mx-auto">
            Estamos disponíveis para si. Escolha a forma de contacto que
            preferir e a nossa equipa responderá com a maior brevidade possível.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          <div className="grid grid-rows-[auto_1fr] gap-6">
            <div className="bg-white rounded-2xl border border-neutral-beige p-7 shadow-sm h-fit">
              <div className="space-y-5">
                {contactInfo.map((info) => {
                  const Icon = info.icon
                  return (
                    <div key={info.label} className="flex gap-4">
                      <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-primary" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] text-neutral-gray uppercase tracking-wider mb-1">
                          {info.label}
                        </p>
                        {'href' in info && info.href ? (
                          <a
                            href={info.href}
                            className="text-neutral-dark font-medium hover:text-primary transition-colors whitespace-pre-line text-sm"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-neutral-dark font-medium whitespace-pre-line text-sm">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-neutral-beige overflow-hidden shadow-sm flex flex-col min-h-[320px]">
              <div className="px-6 py-4 border-b border-neutral-beige flex items-center justify-between">
                <p className="text-sm font-semibold text-neutral-dark">Localização</p>
                <a
                  href="https://maps.google.com/?q=Rua%20Dr.%20Jo%C3%A3o%20Semana%20n%C2%BA175%2C%203880-067%20Ovar"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-medium text-primary hover:underline"
                >
                  Abrir no Maps
                </a>
              </div>
              <div className="flex-1 min-h-[240px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001!2d-8.63!3d40.86!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDUxJzM2LjAiTiA4wrAzNyc0OC4wIlc!5e0!3m2!1spt!2spt!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Clínica BIØRC"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-7 shadow-sm border border-neutral-beige h-full">
            <h3 className="text-lg font-semibold text-neutral-dark mb-1">
              Envie-nos uma mensagem
            </h3>
            <p className="text-sm text-neutral-gray mb-6">
              Responderemos com a maior brevidade possível.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

