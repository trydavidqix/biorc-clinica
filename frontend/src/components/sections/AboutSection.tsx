import { CheckCircle2 } from "lucide-react";
import { Link } from "react-scroll";
import SectionLabel from "../ui/SectionLabel";
import { assetPath } from "../../lib/utils";

const values = [
	"Excelência clínica",
	"Atendimento humanizado",
	"Tecnologia clínica",
	"Ética e transparência",
];

export default function AboutSection() {
	const primaryCtaClass =
		"inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary/40";

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
							integrada, oferecemos acompanhamento próximo, personalizado e
							ajustado às necessidades de cada pessoa.
						</p>
						<p className="text-neutral-gray leading-relaxed mb-8">
							A nossa missão é colocar o paciente no centro de tudo, combinando
							tecnologia, competência clínica e uma abordagem humana e
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
							src={assetPath(
								"/images/Gemini_Generated_Image_383d09383d09383d.webp",
							)}
							alt="Interior da Clínica BIØRC"
							className="w-full h-[480px] object-cover rounded-2xl shadow-lg"
							loading="lazy"
							decoding="async"
						/>
					</div>
				</div>

				<div className="mt-12 rounded-2xl border border-neutral-beige bg-white px-6 py-6 md:flex md:items-center md:justify-between gap-4 shadow-sm">
					<div>
						<h3 className="text-xl font-semibold text-neutral-dark mb-2">
							Quer falar com a nossa equipa antes de marcar?
						</h3>
						<p className="text-neutral-gray text-sm leading-relaxed">
							Estamos disponíveis por telefone, WhatsApp ou formulário.
						</p>
					</div>
					<div className="flex flex-wrap gap-3">
						<Link
							to="contacto"
							smooth
							duration={600}
							offset={-64}
							className={primaryCtaClass}
						>
							Marcar consulta
						</Link>
						<a
							href="https://wa.me/351919107717"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center justify-center rounded-lg border border-primary px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary/40"
						>
							Falar no WhatsApp
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
