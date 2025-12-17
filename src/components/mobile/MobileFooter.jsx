import { Link } from 'react-router-dom'

function MobileFooter() {
  return (
    <footer className="bg-black text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col gap-8 items-center text-center">
          <div className="flex flex-col gap-6 items-center">
            <div>
              <Link to="/" className="block hover:opacity-90 transition-opacity">
                <img src="/logo.png" alt="Summit Diesel" className="h-16 w-auto object-contain" />
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
          
          <div className="flex flex-col gap-6 items-center w-full">
            <div className="flex flex-col gap-3 items-center">
              <h4 className="text-lg font-semibold uppercase tracking-wider text-gray-400">AREA OF SERVICE</h4>
              <a href="https://maps.google.com/maps?q=4607+N+Humboldt+Ave%2C+Minneapolis%2C+MN%2C+United+States(Summit+Diesel)&sll=45.03902,-93.29912" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-wine-red transition-colors text-lg justify-center">
                4685 N Humboldt Ave N Minneapolis, MN 55412
              </a>
            </div>
            
            <div className="flex flex-col gap-3 items-center">
              <h4 className="text-lg font-semibold uppercase tracking-wider text-gray-400">PHONE</h4>
              <a href="tel:763-777-2135" className="flex items-center gap-2 text-white hover:text-wine-red transition-colors text-lg justify-center">
                763-777-2135
              </a>
            </div>
            
            <div className="flex flex-col gap-3 items-center">
              <h4 className="text-lg font-semibold uppercase tracking-wider text-gray-400">EMAIL</h4>
              <a href="mailto:service@summitdieselmn.com" className="flex items-center gap-2 text-white hover:text-wine-red transition-colors text-lg justify-center">
                service@summitdieselmn.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default MobileFooter

