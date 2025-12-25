import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black border-b-2 border-wine-red shadow-lg">
      <div className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex-shrink-0">
              <Link to="/" className="block hover:opacity-90 transition-opacity">
                <img src="/logo.png" alt="Summit Diesel" className="h-20 w-auto object-contain" />
              </Link>
            </div>
            
            <nav className="flex-1 flex justify-center min-w-0">
              <ul className="flex items-center gap-2 flex-wrap justify-center">
                <li className="flex items-center">
                  <Link to="/request-24/7-emergency-service---towing" className="px-4 py-2 text-white font-semibold hover:text-wine-red transition-colors">
                    Mobile Service
                  </Link>
                  <span className="text-gray-500 mx-1">|</span>
                </li>
                <li className="flex items-center">
                  <Link to="/trailer-repair" className="px-4 py-2 text-white font-semibold hover:text-wine-red transition-colors">
                    Trailer Repair
                  </Link>
                  <span className="text-gray-500 mx-1">|</span>
                </li>
                <li>
                  <Link to="/copy-of-services" className="px-4 py-2 text-white font-semibold hover:text-wine-red transition-colors">
                    Service Call
                  </Link>
                </li>
              </ul>
            </nav>
            
            <div className="flex items-center gap-4 flex-shrink-0 flex-wrap whitespace-nowrap">
              <Link to="/request-24/7-emergency-service---towing" className="flex items-center gap-2 text-white font-semibold hover:text-wine-red transition-colors">
                <span className="text-xl">🕐</span>
                <span className="hidden sm:inline">24-hour service | On Site Shop</span>
              </Link>
              <a href="tel:763-777-2135" className="flex items-center gap-2 text-white font-semibold hover:text-wine-red transition-colors">
                <span className="text-xl">📞</span>
                <span>763-777-2135</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
