import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2D7D6F',
          light: '#3D9B8A',
          dark: '#1F5A50',
        },
        accent: {
          DEFAULT: '#5BB5A4',
        },
        neutral: {
          cream: '#F5F3EE',
          beige: '#EBE8E0',
          dark: '#1A1A1A',
          gray: '#6B7280',
          light: '#F9F8F5',
        },
        text: {
          primary: '#1A1A1A',
          secondary: '#6B7280',
          muted: '#9CA3AF',
        },
      },
      fontFamily: {
        // Fontes originais do cliente (Abadi/Avenir/Gabriola) não existem no Google Fonts.
        // Substituições próximas via Google Fonts para manter o site leve:
        // - Avenir Next -> Montserrat
        // - Abadi MT Condensed -> Roboto Condensed
        sans: ['Montserrat', 'sans-serif'],
        heading: ['Playfair Display', 'serif'],
        condensed: ['Roboto Condensed', 'sans-serif'],
      },
      fontSize: {
        hero: ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'hero-sm': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
      },
      backgroundImage: {
        'hero-overlay':
          'linear-gradient(to right, rgba(0,0,0,0.55) 40%, rgba(0,0,0,0.1) 100%)',
      },
    },
  },
  plugins: [],
}

export default config

