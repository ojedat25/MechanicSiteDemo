import { Link } from 'react-router-dom'
import { useState } from 'react'

function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-black border-b-2 border-wine-red shadow-lg">
      <div className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <Link to="/" className="block hover:opacity-90 transition-opacity" onClick={closeMenu}>
                <img src="/logo.png" alt="Summit Diesel" className="h-16 w-auto object-contain" />
              </Link>
            </div>
            
            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMenu}
              className="flex flex-col justify-center items-center w-10 h-10 space-y-1.5 text-white hover:text-wine-red transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>

          {/* Mobile Menu */}
          <nav className={`overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
            <ul className="flex flex-col gap-2 py-4">
              <li>
                <Link 
                  to="/request-24/7-emergency-service---towing" 
                  className="block px-4 py-3 text-white font-semibold hover:text-wine-red hover:bg-gray-900 transition-colors rounded"
                  onClick={closeMenu}
                >
                  Mobile Service
                </Link>
              </li>
              <li>
                <Link 
                  to="/trailer-repair" 
                  className="block px-4 py-3 text-white font-semibold hover:text-wine-red hover:bg-gray-900 transition-colors rounded"
                  onClick={closeMenu}
                >
                  Trailer Repair
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="block px-4 py-3 text-white font-semibold hover:text-wine-red hover:bg-gray-900 transition-colors rounded"
                  onClick={closeMenu}
                >
                  Service Call
                </Link>
              </li>
              <li className="border-t border-gray-700 mt-2 pt-2">
                <Link 
                  to="/request-24/7-emergency-service---towing" 
                  className="flex items-center gap-2 px-4 py-3 text-white font-semibold hover:text-wine-red transition-colors"
                  onClick={closeMenu}
                >
                  <span className="text-xl">🕐</span>
                  <span>24-hour service | On Site Shop</span>
                </Link>
              </li>
              <li>
                <a 
                  href="tel:763-777-2135" 
                  className="flex items-center gap-2 px-4 py-3 text-white font-semibold hover:text-wine-red transition-colors"
                  onClick={closeMenu}
                >
                  <span className="text-xl">📞</span>
                  <span>763-777-2135</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default MobileHeader

