import { Request, Response } from 'express'
import { ContactFormData } from '../types'
import { sendEmail } from '../services/mail.service'

export const sendContactMessage = async (req: Request, res: Response) => {
  try {
    const data: ContactFormData = req.body
    await sendEmail(data)
    res.status(200).json({ success: true, message: 'Mensagem enviada com sucesso!' })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Erro ao enviar email:', error)
    res
      .status(500)
      .json({ success: false, message: 'Erro interno ao enviar mensagem.' })
  }
}

