import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Menu, Phone, X } from "lucide-react";
import { assetPath } from "../../lib/utils";

const navLinks = [
	{ label: "Especialidades", to: "especialidades" },
	{ label: "Sobre", to: "sobre" },
	{ label: "Equipa", to: "equipa" },
	{ label: "Testemunhos", to: "testemunhos" },
	{ label: "Contacto", to: "contacto" },
];

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);
	const ctaClass =
		"inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary/40";

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 20);
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setMobileOpen(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	return (
		<nav
			aria-label="Navegação principal"
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled ? "bg-white shadow-md" : "bg-white/90 backdrop-blur-sm"
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex-shrink-0">
						<a href="#hero" className="flex items-center">
							<img
								src={assetPath("/images/logo.webp")}
								alt="Clínica Médica BIØRC"
								className="h-[64px] md:h-[68px] w-auto"
							/>
						</a>
					</div>

					<div className="hidden md:flex items-center gap-8">
						{navLinks.map((link) => (
							<Link
								key={link.to}
								to={link.to}
								smooth
								duration={600}
								offset={-64}
								className="text-sm text-neutral-gray hover:text-primary cursor-pointer transition-colors font-medium"
							>
								{link.label}
							</Link>
						))}
					</div>

					<div className="hidden md:flex items-center gap-4">
						<a
							href="tel:+351919107717"
							className="flex items-center gap-1.5 text-sm text-neutral-gray hover:text-primary transition-colors"
						>
							<Phone size={14} />
							<span>919 107 717</span>
						</a>
						<Link
							to="contacto"
							smooth
							duration={600}
							offset={-64}
							className={ctaClass}
						>
							Marcar Consulta
						</Link>
					</div>

					<button
						type="button"
						className="md:hidden p-2"
						onClick={() => setMobileOpen((v) => !v)}
						aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
						aria-expanded={mobileOpen}
						aria-controls="mobile-menu"
						aria-haspopup="menu"
					>
						{mobileOpen ? <X size={22} /> : <Menu size={22} />}
					</button>
				</div>

				{mobileOpen ? (
					<div
						id="mobile-menu"
						className="md:hidden py-4 border-t border-neutral-beige"
					>
						{navLinks.map((link) => (
							<Link
								key={link.to}
								to={link.to}
								smooth
								duration={600}
								offset={-64}
								className="block py-3 text-sm text-neutral-gray hover:text-primary cursor-pointer"
								onClick={() => setMobileOpen(false)}
							>
								{link.label}
							</Link>
						))}
						<Link
							to="contacto"
							smooth
							duration={600}
							offset={-64}
							onClick={() => setMobileOpen(false)}
							className={ctaClass + " mt-3 w-full"}
						>
							Marcar Consulta
						</Link>
					</div>
				) : null}
			</div>
		</nav>
	);
}
