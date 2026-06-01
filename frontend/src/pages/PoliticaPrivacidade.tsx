export default function PoliticaPrivacidade() {
	return (
		<main className="min-h-screen bg-neutral-cream py-16">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="bg-white rounded-3xl shadow-sm border border-neutral-beige p-8 sm:p-10">
					<p className="text-sm uppercase tracking-wider text-primary font-semibold mb-3">
						Política de Privacidade
					</p>
					<h1 className="text-3xl font-heading font-bold text-neutral-dark mb-6">
						Proteção de dados pessoais
					</h1>

					<div className="space-y-6 text-sm leading-relaxed text-neutral-gray">
						<section>
							<h2 className="text-neutral-dark font-semibold mb-2">Responsável pelo tratamento</h2>
							<p>
								Clínica Médica BIØRC
								<br />
								Rua Dr. João Semana nº175
								<br />
								3880-067 Ovar, Portugal
								<br />
								geral@clinicamedicabiorc.pt
								<br />
								+351 919 107 717
							</p>
						</section>

						<section>
							<h2 className="text-neutral-dark font-semibold mb-2">Finalidade do tratamento</h2>
							<p>
								Os dados pessoais recolhidos no formulário de contacto são usados para
								responder a pedidos de informação e marcação de consultas.
							</p>
						</section>

						<section>
							<h2 className="text-neutral-dark font-semibold mb-2">Prazo de conservação</h2>
							<p>
								Os dados serão conservados pelo período necessário ao tratamento do
								pedido e, em regra, por até 1 ano, salvo obrigação legal diferente.
							</p>
						</section>

						<section>
							<h2 className="text-neutral-dark font-semibold mb-2">Direitos do titular</h2>
							<p>
								O titular dos dados pode solicitar acesso, retificação, apagamento,
								limitação e oposição ao tratamento dos seus dados pessoais.
							</p>
						</section>

						<section>
							<h2 className="text-neutral-dark font-semibold mb-2">Base legal do tratamento</h2>
							<p>
								O tratamento baseia-se no consentimento do titular e em diligências
								pré-contratuais associadas ao pedido de contacto.
							</p>
						</section>
					</div>
				</div>
			</div>
		</main>
	)
}