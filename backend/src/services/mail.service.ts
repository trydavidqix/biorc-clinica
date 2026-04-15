import nodemailer from 'nodemailer'
import { ContactFormData } from '../types'

export const sendEmail = async (data: ContactFormData): Promise<void> => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  await transporter.sendMail({
    from: `"Site BIØRC" <${process.env.SMTP_USER}>`,
    to: process.env.CLINIC_EMAIL || 'geral@clinicamedicabiorc.pt',
    replyTo: data.email,
    subject: `Nova mensagem de ${data.name} — Consulta: ${
      data.specialty || 'Não especificada'
    }`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2D7D6F; border-bottom: 2px solid #2D7D6F; padding-bottom: 10px;">
          Nova Marcação — Clínica Médica BIØRC
        </h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Nome:</td><td style="padding: 8px 0;">${data.name}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Email:</td><td style="padding: 8px 0;">${data.email}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Telefone:</td><td style="padding: 8px 0;">${
            data.phone || 'Não fornecido'
          }</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Especialidade:</td><td style="padding: 8px 0;">${
            data.specialty || 'Não especificada'
          }</td></tr>
        </table>
        <div style="margin-top: 16px;">
          <strong style="color: #333;">Mensagem:</strong>
          <p style="background: #f5f3ee; padding: 12px; border-radius: 6px; margin-top: 8px;">
            ${data.message || 'Sem mensagem adicional'}
          </p>
        </div>
      </div>
    `,
  })
}

