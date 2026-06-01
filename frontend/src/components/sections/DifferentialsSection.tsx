import { Link } from "react-scroll";
import SectionLabel from "../ui/SectionLabel";
import { assetPath } from "../../lib/utils";

const differentials = [
	{
		// ficheiro colocado em public/icons
		iconPath: "/icons/Atendimento Humanizado.gif",
		title: "Atendimento Humanizado",
		description:
			"Cada paciente é único. Oferecemos cuidados personalizados, ouvindo e compreendendo cada situação, com empatia e dedicação.",
	},
	{
		iconPath: "/icons/Equipa Especializada.gif",
		title: "Equipa Especializada",
		description:
			"Contamos com médicos e técnicos altamente qualificados, com formação e experiência em diversas áreas da saúde.",
	},
	{
		iconPath: "/icons/Tecnologia Moderna.gif",
		title: "Tecnologia Moderna",
		description:
			"Equipamentos de última geração para diagnósticos precisos e tratamentos eficazes, aliando inovação à medicina de excelência.",
	},
];

export default function DifferentialsSection() {
	const primaryCtaClass =
		"inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary/40";

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
						return (
							<div key={item.title} className="text-center">
								<div className="flex items-center justify-center mx-auto mb-5">
									<img
										src={assetPath(item.iconPath)}
										alt={item.title}
										className="w-14 h-14 object-contain"
										loading="lazy"
									/>
								</div>
								<h3 className="text-lg font-semibold text-neutral-dark mb-3">
									{item.title}
								</h3>
								<p className="text-neutral-gray text-sm leading-relaxed">
									{item.description}
								</p>
							</div>
						);
					})}
				</div>

				<div className="w-full h-64 lg:h-80 overflow-hidden rounded-2xl">
					<img
						src={assetPath("/images/differentials-team.webp")}
						alt="Equipa BIØRC"
						className="w-full h-full object-cover"
						loading="lazy"
						decoding="async"
					/>
				</div>

				<div className="mt-12 rounded-2xl border border-neutral-beige bg-neutral-cream px-6 py-6 md:flex md:items-center md:justify-between gap-4">
					<div>
						<h3 className="text-xl font-semibold text-neutral-dark mb-2">
							Quer uma resposta rápida sobre a sua consulta?
						</h3>
						<p className="text-neutral-gray text-sm leading-relaxed">
							Fale connosco por telefone ou WhatsApp e siga diretamente para a
							marcação.
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
							href="tel:+351919107717"
							className="inline-flex items-center justify-center rounded-lg border border-primary px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary/40"
						>
							Ligar agora
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
