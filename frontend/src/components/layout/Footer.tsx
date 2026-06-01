import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<footer className="bg-neutral-dark text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
				<div className="text-center text-sm text-white/80">
					<p>© 2026 Clínica Médica BIØRC. Todos os direitos reservados.</p>
				</div>

				<div className="mt-3 text-center text-sm text-white/70">
					<Link to="/termos-de-uso" className="hover:text-primary-light transition-colors">
						Termos de Uso
					</Link>
					<span className="mx-3">·</span>
					<Link to="/politica-de-privacidade" className="hover:text-primary-light transition-colors">
						Política de Privacidade
					</Link>
					<span className="mx-3">·</span>
					<Link to="/politica-de-cookies" className="hover:text-primary-light transition-colors">
						Política de Cookies
					</Link>
				</div>

				<div className="my-4 border-t border-white/10" />

				<div className="text-center text-xs text-white/50">
					<a
						href="https://github.com/trydavidqix"
						target="_blank"
						rel="noreferrer"
						className="hover:text-primary-light transition-colors"
					>
						Desenvolvido por David William
					</a>
				</div>
			</div>
		</footer>
	);
}
