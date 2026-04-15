import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import SpecialtiesSection from './components/sections/SpecialtiesSection'
import AboutSection from './components/sections/AboutSection'
import DifferentialsSection from './components/sections/DifferentialsSection'
import TeamSection from './components/sections/TeamSection'
import TestimonialsSection from './components/sections/TestimonialsSection'
import ContactSection from './components/sections/ContactSection'

export default function App() {
  return (
    <div className="font-sans text-neutral-dark antialiased">
      <Navbar />
      <main>
        <HeroSection />
        <SpecialtiesSection />
        <AboutSection />
        <DifferentialsSection />
        <TeamSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
