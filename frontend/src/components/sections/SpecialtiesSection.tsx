import { specialties } from "../../data/specialties";
import SectionLabel from "../ui/SectionLabel";
import SpecialtyCard from "../ui/SpecialtyCard";
import { Link } from "react-scroll";

export default function SpecialtiesSection() {
	const primaryCtaClass =
		"inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary/40";

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

				<div className="mt-12 rounded-2xl border border-neutral-beige bg-neutral-cream px-6 py-6 md:flex md:items-center md:justify-between gap-4">
					<div className="max-w-2xl">
						<h3 className="text-xl font-semibold text-neutral-dark mb-2">
							Precisa de ajuda para escolher a especialidade certa?
						</h3>
						<p className="text-neutral-gray text-sm leading-relaxed">
							Fale connosco e encaminhamos a sua marcação para a especialidade
							mais adequada.
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
