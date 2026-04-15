import { specialties } from '../../data/specialties'
import { useContactForm } from '../../hooks/useContactForm'
import Button from './Button'

export default function ContactForm() {
  const { form, onSubmit, isLoading, submitStatus } = useContactForm()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div>
        <label className="block text-sm font-medium text-neutral-dark mb-1.5">
          Nome <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="O seu nome completo"
          {...register('name', { required: 'Nome é obrigatório' })}
          className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30 ${
            errors.name ? 'border-red-400' : 'border-neutral-beige focus:border-primary'
          }`}
        />
        {errors.name ? (
          <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
        ) : null}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-neutral-dark mb-1.5">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="email@exemplo.com"
            {...register('email', {
              required: 'Email é obrigatório',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Email inválido',
              },
            })}
            className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30 ${
              errors.email ? 'border-red-400' : 'border-neutral-beige focus:border-primary'
            }`}
          />
          {errors.email ? (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          ) : null}
        </div>
        <div>
          <label className="block text-sm font-medium text-neutral-dark mb-1.5">
            Telefone
          </label>
          <input
            type="tel"
            placeholder="+351 9XX XXX XXX"
            {...register('phone')}
            className="w-full px-4 py-2.5 rounded-lg border border-neutral-beige text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-neutral-dark mb-1.5">
          Especialidade
        </label>
        <select
          {...register('specialty')}
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
        <label className="block text-sm font-medium text-neutral-dark mb-1.5">
          Mensagem
        </label>
        <textarea
          rows={4}
          placeholder="Descreva o motivo da sua consulta..."
          {...register('message')}
          className="w-full px-4 py-2.5 rounded-lg border border-neutral-beige text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
        />
      </div>

      {submitStatus === 'success' ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-green-700 text-sm">
          ✅ Mensagem enviada com sucesso! Entraremos em contacto brevemente.
        </div>
      ) : null}
      {submitStatus === 'error' ? (
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
  )
}

