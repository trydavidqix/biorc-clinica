import { Link } from 'react-scroll'

export default function Footer() {
  return (
    <footer className="bg-neutral-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <img
              src="/images/logo.png"
              alt="Clínica Médica BIØRC"
              className="h-[100px] w-auto mb-4 brightness-0 invert"
            />
            <p className="text-white/50 text-sm leading-relaxed">
              Clínica multidisciplinar com abordagem humanizada e integrada. A
              saúde em cada fase da sua vida.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-5">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {['Especialidades', 'Equipa', 'Sobre', 'Testemunhos', 'Contacto'].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={item.toLowerCase()}
                      smooth
                      duration={600}
                      offset={-64}
                      className="text-white/50 hover:text-primary-light text-sm cursor-pointer transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-5">
              Contacto
            </h4>
            <ul className="space-y-3 text-white/50 text-sm">
              <li>+351 919 107 717</li>
              <li>geral@clinicamedicabiorc.pt</li>
              <li>
                Rua Dr. João Semana nº175
                <br />
                3880-067 Ovar, Portugal
              </li>
              <li className="text-white/30 text-xs pt-2">
                Seg–Sex: 7h30–20h
                <br />
                Sáb: 7h30–13h
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Clínica Médica BIØRC. Todos os direitos
            reservados.
          </p>
          <p className="text-white/20 text-xs">www.clinicamedicabiorc.pt</p>
        </div>
      </div>
    </footer>
  )
}

