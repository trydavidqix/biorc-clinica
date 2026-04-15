export interface Specialty {
  id: string
  name: string
  description: string
  icon: string
  category: 'tecnica' | 'medica'
  doctor?: Doctor
}

export interface Doctor {
  id: string
  name: string
  title: string
  bio: string
  image: string
  specialties: string[]
}

export interface Testimonial {
  id: string
  name: string
  text: string
  rating: number
  specialty: string
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  specialty: string
  message: string
}

export interface ApiResponse {
  success: boolean
  message: string
}

