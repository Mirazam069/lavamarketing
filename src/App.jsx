import { useState } from 'react'
import HeroPixora from './sections/HeroPixora/HeroPixora.jsx'
import './App.css'
import Navbar from '../src/sections/HeroPixora/Navbar.jsx'
import HeroSection from './sections/HeroSection/HeroSection.jsx'
import PortfolioShowcase from './sections/PortfolioShowcase/PortfolioShowcase.jsx'
import ServicesStack from './sections/ServicesStack/ServicesStack.jsx'
import ServicesSection from './sections/ServicesSection/ServicesSection.jsx'
import Footer from './sections/Footer/Footer.jsx'
import PartnersSection from './sections/PartnersSection/PartnersSection.jsx'
import FloatingAside from './components/FloatingAside.jsx'
import AuditModal from './components/AuditModal.jsx'

function App() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false)

  return (
    <>
      <Navbar/>
      <HeroPixora onOpenAudit={() => setIsAuditModalOpen(true)} />
      <PortfolioShowcase />
      <HeroSection/>
      <ServicesStack />
      <PartnersSection />
      <ServicesSection />
      <Footer onOpenAudit={() => setIsAuditModalOpen(true)} />
      <FloatingAside />
      <AuditModal isOpen={isAuditModalOpen} onClose={() => setIsAuditModalOpen(false)} />
    </>
  )
}

export default App
