import axios from 'axios'
import { ApiResponse, ContactFormData } from '../types'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const sendContactForm = async (
  data: ContactFormData,
): Promise<ApiResponse> => {
  const response = await api.post<ApiResponse>('/api/contact', data)
  return response.data
}

