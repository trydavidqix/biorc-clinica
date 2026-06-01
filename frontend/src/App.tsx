import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import SpecialtiesSection from './components/sections/SpecialtiesSection'
import AboutSection from './components/sections/AboutSection'
import DifferentialsSection from './components/sections/DifferentialsSection'
import TeamSection from './components/sections/TeamSection'
import TestimonialsSection from './components/sections/TestimonialsSection'
import ContactSection from './components/sections/ContactSection'
import TermosDeUso from './pages/TermosDeUso'
import PoliticaPrivacidade from './pages/PoliticaPrivacidade'
import PoliticaCookies from './pages/PoliticaCookies'

function HomePage() {
  return (
    <main>
      <HeroSection />
      <SpecialtiesSection />
      <AboutSection />
      <DifferentialsSection />
      <TeamSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  )
}

export default function App() {
  return (
    <div className="font-sans text-neutral-dark antialiased">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/termos-de-uso" element={<TermosDeUso />} />
        <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
        <Route path="/politica-de-cookies" element={<PoliticaCookies />} />
      </Routes>
      <Footer />
    </div>
  )
}
