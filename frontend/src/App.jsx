import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import MobileHeader from './components/mobile/MobileHeader'
import MobileFooter from './components/mobile/MobileFooter'
import Home from './pages/Home'
import MobileService from './pages/MobileService'
import TrailerRepair from './pages/TrailerRepair'
import ServiceCall from './pages/ServiceCall'
import './styles/desktop/desktop.css'
import './styles/mobile/mobile.css'

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {isMobile ? <MobileHeader /> : <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/request-24/7-emergency-service---towing" element={<MobileService />} />
          <Route path="/trailer-repair" element={<TrailerRepair />} />
          <Route path="/services" element={<ServiceCall />} />
        </Routes>
        {isMobile ? <MobileFooter /> : <Footer />}
      </div>
    </Router>
  )
}

export default App

