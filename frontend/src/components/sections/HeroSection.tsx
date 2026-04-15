import { Link } from 'react-scroll'
import { MessageCircle } from 'lucide-react'
import Button from '../ui/Button'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          <p className="text-white/60 text-sm mb-4 tracking-wider uppercase">
            Clínica Médica BIØRC — Ovar, Portugal
          </p>

          <h1 className="font-heading text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-white">Amor em cada gesto,</span>
            <br />
            <span className="text-primary-light">Saúde em cada cuidado</span>
          </h1>

          <p className="text-white/80 text-lg mb-10 leading-relaxed max-w-xl">
            Clínica Multidisciplinar com abordagem humanizada, a mais avançada
            integrada. Trate-se da forma completa e integrada.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="contacto" smooth duration={600} offset={-64}>
              <Button variant="primary" size="lg">
                Marcar Consulta
              </Button>
            </Link>
            <a
              href="https://wa.me/351919107717"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline-white" size="lg">
                <MessageCircle size={18} className="mr-2" />
                Falar no WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

