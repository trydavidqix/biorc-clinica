import { Link } from "react-scroll";
import { MessageCircle } from "lucide-react";
import { assetPath } from "../../lib/utils";

export default function HeroSection() {
	const primaryCtaClass =
		"inline-flex items-center justify-center rounded-lg bg-primary px-7 py-3.5 text-base font-medium text-white transition-colors hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary/40";

	return (
		<section
			id="hero"
			className="relative min-h-screen flex items-center bg-cover bg-center"
			style={{ backgroundImage: `url(${assetPath("/images/hero-bg.webp")})` }}
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
						Clínica multidisciplinar em Ovar com abordagem humanizada e
						acompanhamento integrado para si e para a sua família.
					</p>

					<div className="flex flex-wrap gap-4">
						<Link
							to="contacto"
							smooth
							duration={600}
							offset={-64}
							className={primaryCtaClass}
						>
							Marcar Consulta
						</Link>
						<a
							href="https://wa.me/351919107717"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span className="inline-flex items-center justify-center rounded-lg border border-white text-white hover:bg-white hover:text-primary px-7 py-3.5 text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-white/60">
								<MessageCircle size={18} className="mr-2" />
								Falar no WhatsApp
							</span>
						</a>
						<a
							href="tel:+351919107717"
							className="inline-flex items-center justify-center rounded-lg border border-white/70 px-7 py-3.5 text-base font-medium text-white transition-colors hover:bg-white hover:text-primary focus:outline-none focus:ring-2 focus:ring-white/60"
						>
							Ligar agora
						</a>
					</div>

					<div className="mt-6 flex flex-wrap gap-3 text-sm text-white/75">
						<span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-sm">
							Ovar e arredores
						</span>
						<span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-sm">
							Marcações por telefone e WhatsApp
						</span>
						<span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-sm">
							Equipa multidisciplinar
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}
