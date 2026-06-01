import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../../data/testimonials";
import SectionLabel from "../ui/SectionLabel";
import TestimonialCard from "../ui/TestimonialCard";
import { Link } from "react-scroll";

export default function TestimonialsSection() {
	const primaryCtaClass =
		"inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary/40";

	const [current, setCurrent] = useState(0);

	const prev = () =>
		setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
	const next = () =>
		setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

	return (
		<section id="testemunhos" className="py-20 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-14">
					<SectionLabel>Testemunhos</SectionLabel>
					<h2 className="text-3xl lg:text-4xl font-heading font-bold text-neutral-dark mt-3">
						O que dizem os nossos pacientes
					</h2>
				</div>

				<div className="relative">
					<div className="grid md:grid-cols-3 gap-6">
						{testimonials.map((t, i) => (
							<TestimonialCard
								key={t.id}
								testimonial={t}
								highlighted={i === current}
							/>
						))}
					</div>

					<div className="flex justify-center gap-3 mt-8">
						<button
							type="button"
							onClick={prev}
							className="w-10 h-10 rounded-full border border-neutral-beige flex items-center justify-center hover:bg-neutral-cream transition-colors"
							aria-label="Anterior"
						>
							<ChevronLeft size={18} />
						</button>
						<button
							type="button"
							onClick={next}
							className="w-10 h-10 rounded-full border border-neutral-beige flex items-center justify-center hover:bg-neutral-cream transition-colors"
							aria-label="Próximo"
						>
							<ChevronRight size={18} />
						</button>
					</div>

					<div className="mt-12 rounded-2xl border border-neutral-beige bg-neutral-cream px-6 py-6 md:flex md:items-center md:justify-between gap-4">
						<div>
							<h3 className="text-xl font-semibold text-neutral-dark mb-2">
								Pronto para marcar a sua consulta?
							</h3>
							<p className="text-neutral-gray text-sm leading-relaxed">
								Fale connosco e avance para o contacto mais rápido.
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
			</div>
		</section>
	);
}
