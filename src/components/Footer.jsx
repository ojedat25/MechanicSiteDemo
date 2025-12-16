import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-black text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="flex flex-col gap-6">
            <div>
              <Link to="/" className="block hover:opacity-90 transition-opacity">
                <img src="/logo.png" alt="Summit Diesel" className="h-20 w-auto object-contain" />
              </Link>
            </div>
            <div className="flex gap-4">
              <a href="https://facebook.com/@summitdieselmn" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-wine-red transition-colors">
                <span className="font-bold text-lg">f</span>
              </a>
              <a href="https://plus.google.com" aria-label="Google Plus" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-wine-red transition-colors">
                <span className="font-bold text-lg">g+</span>
              </a>
              <a href="https://twitter.com/" aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-wine-red transition-colors">
                <span className="font-bold text-lg">t</span>
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-6 lg:col-span-2">
            <div className="flex flex-col gap-3">
              <h4 className="text-base sm:text-sm font-semibold uppercase tracking-wider text-gray-400">AREA OF SERVICE</h4>
              <a href="https://maps.google.com/maps?q=4607+N+Humboldt+Ave%2C+Minneapolis%2C+MN%2C+United+States(Summit+Diesel)&sll=45.03902,-93.29912" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-wine-red transition-colors text-base sm:text-sm">
                <span>📍</span>
                4685 N Humboldt Ave N Minneapolis, MN 55412
              </a>
            </div>
            
            <div className="flex flex-col gap-3">
              <h4 className="text-base sm:text-sm font-semibold uppercase tracking-wider text-gray-400">PHONE</h4>
              <a href="tel:763-777-2135" className="flex items-center gap-2 text-white hover:text-wine-red transition-colors text-base sm:text-sm">
                <span>📞</span>
                763-777-2135
              </a>
            </div>
            
            <div className="flex flex-col gap-3">
              <h4 className="text-base sm:text-sm font-semibold uppercase tracking-wider text-gray-400">EMAIL</h4>
              <a href="mailto:service@summitdieselmn.com" className="flex items-center gap-2 text-white hover:text-wine-red transition-colors text-base sm:text-sm">
                <span>✉️</span>
                service@summitdieselmn.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
