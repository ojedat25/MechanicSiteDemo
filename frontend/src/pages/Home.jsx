function Home() {
  return (
    <main className="flex-1 bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[60vh] relative">
      {/* Background Image - positioned relative to viewport */}
      <div 
        className="absolute top-0 right-0 w-screen h-full opacity-70 sm:opacity-70 pointer-events-none z-0 hero-background-image"
      ></div>
      
      <div className="max-w-5xl w-full relative z-10">
        <div className="mb-8 relative py-12 px-8 min-h-[500px] flex items-center justify-center">
          
          {/* Content Overlay */}
          <div className="relative z-10 text-center w-fit px-4 -mt-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-6 uppercase tracking-wider drop-shadow-lg w-fit">
              Under Maintenance
            </h1>
            <hr className="w-24 h-1 bg-wine-red border-0 mx-auto my-6" />
            <h3 className="text-xl sm:text-3xl text-gray-700 my-6 font-normal tracking-wide drop-shadow-md inline-block px-3 py-3 bg-white/90 rounded-lg shadow-md">
              Parts • Service • Towing
            </h3>
            <div className="mt-6">
              <a href="tel:763-777-2135" className="inline-flex items-center gap-3 bg-gradient-to-r from-wine-red to-dark-red text-white px-8 py-4 rounded-lg text-xl sm:text-2xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 opacity-100" style={{backgroundImage: 'linear-gradient(rgb(114, 47, 55) 0%, rgb(92, 31, 38) 100%)'}}>
                <span className="text-2xl sm:text-3xl">📞</span>
                Call Now
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black uppercase tracking-widest mb-4">
            24/7 EMERGENCY SERVICES
          </h2>
          <hr className="w-24 h-1 bg-wine-red border-0 mx-auto" />
        </div>
      </div>
    </main>
  )
}

export default Home
