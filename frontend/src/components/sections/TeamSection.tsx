import { useEffect, useState } from "react";
import { team } from "../../data/team";
import DoctorCard from "../ui/DoctorCard";
import SectionLabel from "../ui/SectionLabel";
import { Link } from "react-scroll";

const PAGE_SIZE = 4;
const AUTO_PLAY_DELAY = 4000;

export default function TeamSection() {
	const primaryCtaClass =
		"inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary/40";

	const pageCount = Math.max(1, Math.ceil(team.length / PAGE_SIZE));
	const carouselPages = Array.from({ length: pageCount }, (_, index) => {
		const doctors = team.slice(
			index * PAGE_SIZE,
			index * PAGE_SIZE + PAGE_SIZE,
		);

		return {
			key: doctors[0]?.id ?? `slide-${index}`,
			doctors,
		};
	});
	const slideWidth = 100 / carouselPages.length;
	const [activeSlide, setActiveSlide] = useState(0);

	useEffect(() => {
		if (pageCount <= 1) {
			return;
		}

		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			return;
		}

		const intervalId = window.setInterval(() => {
			setActiveSlide((currentSlide) => (currentSlide + 1) % pageCount);
		}, AUTO_PLAY_DELAY);

		return () => window.clearInterval(intervalId);
	}, [pageCount]);

	const currentSlideIndex = pageCount > 1 ? activeSlide % pageCount : 0;

	return (
		<section id="equipa" className="py-20 bg-neutral-cream">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-14">
					<SectionLabel>A Nossa Equipa</SectionLabel>
					<h2 className="text-3xl lg:text-4xl font-heading font-bold text-neutral-dark mt-3 mb-4">
						Profissionais de confiança
					</h2>
				</div>
				<div className="overflow-hidden rounded-[2rem] bg-white shadow-xl ring-1 ring-black/5">
					<div
						className="flex"
						style={{
							width: `${carouselPages.length * 100}%`,
							transform: `translateX(-${currentSlideIndex * slideWidth}%)`,
							transition: "transform 0.6s ease",
						}}
					>
						{carouselPages.map((slide) => (
							<div
								key={slide.key}
								className="shrink-0"
								style={{ flex: `0 0 ${slideWidth}%` }}
							>
								<div className="p-1 sm:p-3">
									<div className="flex flex-wrap justify-center gap-6">
										{slide.doctors.map((doctor) => (
											<div
												key={doctor.id}
												className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
											>
												<DoctorCard doctor={doctor} />
											</div>
										))}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="mt-12 rounded-2xl border border-neutral-beige bg-white px-6 py-6 md:flex md:items-center md:justify-between gap-4 shadow-sm">
				<div>
					<h3 className="text-xl font-semibold text-neutral-dark mb-2">
						Fale com a nossa equipa e marque a sua consulta.
					</h3>
					<p className="text-neutral-gray text-sm leading-relaxed">
						Escolha a melhor forma de contacto e nós tratamos do resto.
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
						WhatsApp
					</a>
				</div>
			</div>
		</section>
	);
}
                                        	
