import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ContactFormData } from '../types'
import { sendContactForm } from '../services/api'

export const useContactForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>(
    'idle',
  )

  const form = useForm<ContactFormData>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      specialty: '',
      message: '',
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true)
    setSubmitStatus('idle')
    try {
      await sendContactForm(data)
      setSubmitStatus('success')
      form.reset()
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsLoading(false)
    }
  }

  return { form, onSubmit, isLoading, submitStatus }
}

