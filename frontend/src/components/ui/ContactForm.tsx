import { specialties } from "../../data/specialties";
import { useContactForm } from "../../hooks/useContactForm";
import Button from "./Button";

export default function ContactForm() {
	const { form, onSubmit, isLoading, submitStatus } = useContactForm();
	const privacyHref = `${import.meta.env.BASE_URL}politica-de-privacidade`;
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = form;

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
			<div className="sr-only" aria-hidden="true">
				<label htmlFor="contact-honeypot">Empresa</label>
				<input
					id="contact-honeypot"
					type="text"
					tabIndex={-1}
					autoComplete="off"
					{...register("honeypot")}
				/>
			</div>

			<div>
				<label
					htmlFor="contact-name"
					className="block text-sm font-medium text-neutral-dark mb-1.5"
				>
					Nome <span className="text-red-500">*</span>
				</label>
				<input
					id="contact-name"
					type="text"
					placeholder="O seu nome completo"
					{...register("name", { required: "Nome é obrigatório" })}
					autoComplete="name"
					aria-invalid={Boolean(errors.name)}
					aria-describedby={errors.name ? "contact-name-error" : undefined}
					className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30 ${
						errors.name
							? "border-red-400"
							: "border-neutral-beige focus:border-primary"
					}`}
				/>
				{errors.name ? (
					<p id="contact-name-error" className="text-red-500 text-xs mt-1">
						{errors.name.message}
					</p>
				) : null}
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				<div>
					<label
						htmlFor="contact-email"
						className="block text-sm font-medium text-neutral-dark mb-1.5"
					>
						Email <span className="text-red-500">*</span>
					</label>
					<input
						id="contact-email"
						type="email"
						placeholder="email@exemplo.com"
						{...register("email", {
							required: "Email é obrigatório",
							pattern: {
								value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
								message: "Email inválido",
							},
						})}
						autoComplete="email"
						aria-invalid={Boolean(errors.email)}
						aria-describedby={errors.email ? "contact-email-error" : undefined}
						className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30 ${
							errors.email
								? "border-red-400"
								: "border-neutral-beige focus:border-primary"
						}`}
					/>
					{errors.email ? (
						<p id="contact-email-error" className="text-red-500 text-xs mt-1">
							{errors.email.message}
						</p>
					) : null}
				</div>
				<div>
					<label
						htmlFor="contact-phone"
						className="block text-sm font-medium text-neutral-dark mb-1.5"
					>
						Telefone
					</label>
					<input
						id="contact-phone"
						type="tel"
						placeholder="+351 9XX XXX XXX"
						{...register("phone")}
						autoComplete="tel"
						className="w-full px-4 py-2.5 rounded-lg border border-neutral-beige text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
					/>
				</div>
			</div>

			<div>
				<label
					htmlFor="contact-specialty"
					className="block text-sm font-medium text-neutral-dark mb-1.5"
				>
					Especialidade
				</label>
				<select
					id="contact-specialty"
					{...register("specialty")}
					className="w-full px-4 py-2.5 rounded-lg border border-neutral-beige text-sm text-neutral-gray focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-white appearance-none"
				>
					<option value="">Selecione uma especialidade</option>
					{specialties.map((s) => (
						<option key={s.id} value={s.name}>
							{s.name}
						</option>
					))}
				</select>
			</div>

			<div>
				<label
					htmlFor="contact-message"
					className="block text-sm font-medium text-neutral-dark mb-1.5"
				>
					Mensagem
				</label>
				<textarea
					id="contact-message"
					rows={4}
					placeholder="Descreva o motivo da sua consulta..."
					{...register("message")}
					aria-describedby="contact-message-help"
					className="w-full px-4 py-2.5 rounded-lg border border-neutral-beige text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
				/>
				<p id="contact-message-help" className="sr-only">
					Inclua detalhes relevantes sobre a consulta.
				</p>
			</div>

			<div className="flex items-start gap-3 rounded-lg border border-neutral-beige bg-neutral-cream/60 p-4">
				<input
					id="contact-consent"
					type="checkbox"
					{...register("privacyConsent", {
						required: "É necessário aceitar a Política de Privacidade",
					})}
					aria-invalid={Boolean(errors.privacyConsent)}
					className="mt-1 h-4 w-4 rounded border-neutral-beige text-primary focus:ring-primary/30"
				/>
				<label htmlFor="contact-consent" className="text-sm text-neutral-dark leading-relaxed">
					Concordo com o tratamento dos meus dados pessoais conforme a{" "}
					<a href={privacyHref} className="font-medium text-primary hover:underline">
						Política de Privacidade
					</a>
					.
				</label>
			</div>
			{errors.privacyConsent ? (
				<p className="text-red-500 text-xs -mt-2">{errors.privacyConsent.message}</p>
			) : null}

			{submitStatus === "success" ? (
				<div className="bg-green-50 border border-green-200 rounded-lg p-3 text-green-700 text-sm">
					✅ Mensagem enviada com sucesso! Entraremos em contacto brevemente.
				</div>
			) : null}
			{submitStatus === "error" ? (
				<div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-sm">
					❌ Erro ao enviar mensagem. Por favor tente novamente.
				</div>
			) : null}

			<Button
				type="submit"
				variant="primary"
				size="lg"
				loading={isLoading}
				className="w-full"
			>
				Enviar Mensagem
			</Button>
		</form>
	);
}
