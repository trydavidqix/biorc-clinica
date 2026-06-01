import { assetPath } from "../../lib/utils";

export default function PoliticaPrivacidade() {
	return (
		<main className="min-h-screen bg-neutral-cream py-16">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="bg-white rounded-3xl shadow-sm border border-neutral-beige p-8 sm:p-10">
					<img
						src={assetPath("/images/brand/com-assinatura/logotipo-09.webp")}
						alt="Clínica Médica BIØRC"
						className="h-16 w-auto mb-8"
					/>
					<p className="text-sm uppercase tracking-wider text-primary font-semibold mb-3">
						Política de Privacidade
					</p>
					<h1 className="text-3xl font-heading font-bold text-neutral-dark mb-6">
						Proteção de dados pessoais
					</h1>
					<div className="space-y-5 text-sm leading-relaxed text-neutral-gray">
						<p>
							<strong className="text-neutral-dark">Responsável pelo tratamento:</strong>{" "}
							Clínica Médica BIØRC, Rua Dr. João Semana nº175, 3880-067 Ovar,
							Portugal. Contacto: geral@clinicamedicabiorc.pt / +351 919 107 717.
						</p>
						<p>
							<strong className="text-neutral-dark">Finalidade do tratamento:</strong>{" "}
							responder a contactos submetidos através do formulário e gerir pedidos de
							informação ou marcação de consultas.
						</p>
						<p>
							<strong className="text-neutral-dark">Prazo de conservação:</strong>{" "}
							os dados são conservados pelo período necessário à resposta ao contacto e
							por um máximo indicativo de 1 ano, salvo obrigação legal em contrário.
						</p>
						<p>
							<strong className="text-neutral-dark">Direitos do titular:</strong> tem
							direito de acesso, retificação, apagamento, limitação e oposição ao
							tratamento, bem como de apresentar reclamação à autoridade de controlo
							competente.
						</p>
						<p>
							<strong className="text-neutral-dark">Base legal:</strong> o tratamento
							assenta no consentimento do titular e/ou em diligências pré-contratuais
							associadas ao pedido de contacto.
						</p>
					</div>

					<div className="mt-8 pt-6 border-t border-neutral-beige flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
						<a
							href={import.meta.env.BASE_URL}
							className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-dark transition-colors"
						>
							Voltar à página inicial
						</a>
					</div>
				</div>
			</div>
		</main>
	);
}