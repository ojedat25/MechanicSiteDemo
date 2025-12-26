import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { api } from '../api'

// Vehicle makes and models data
const vehicleMakes = {
  'Freightliner': ['Cascadia', 'Columbia', 'Century Class', 'Business Class', 'M2', 'SD', 'FLD', 'Argosy', 'Coronado'],
  'Peterbilt': ['579', '389', '379', '567', '520', '348', '337', '365', '367', '210', '220'],
  'Kenworth': ['T680', 'T880', 'W900', 'T800', 'T660', 'T470', 'T370', 'T270', 'T170'],
  'Volvo': ['VNL', 'VNR', 'VHD', 'VNM', 'VNX', 'VNL 860', 'VNL 780', 'VNL 760', 'VNL 670'],
  'Mack': ['Anthem', 'Pinnacle', 'Granite', 'TerraPro', 'MD', 'MP', 'CH', 'CX', 'RD'],
  'International': ['LT Series', 'HX Series', 'ProStar', 'WorkStar', 'TranStar', 'LoneStar', 'PayStar'],
  'Western Star': ['4700', '4900', '5700', '6900'],
  'Ford': ['F-750', 'F-650', 'F-550', 'F-450', 'F-350'],
  'Chevrolet': ['Silverado 3500HD', 'Silverado 4500HD', 'Silverado 5500HD', 'Silverado 6500HD'],
  'GMC': ['Sierra 3500HD', 'Sierra 4500HD', 'Sierra 5500HD'],
  'Dodge': ['Ram 3500', 'Ram 4500', 'Ram 5500'],
  'Isuzu': ['NPR', 'NQR', 'NMR', 'FTR', 'FVR', 'FVZ'],
  'Hino': ['195', '238', '258', '268', '338', '195h', '238h'],
  'Other': []
}

function MobileService() {
  const [formData, setFormData] = useState({
    date: '',
    companyName: '',
    dotNumber: '',
    unitNumber: '',
    ownerName: '',
    ownerPhone: '',
    email: '',
    driverName: '',
    driverPhone: '',
    year: '',
    make: '',
    model: '',
    plateNumber: '',
    color: '',
    vin: '',
    location: '',
    description: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    
    // If make changes, reset model
    if (name === 'make') {
      setFormData(prev => ({
        ...prev,
        [name]: value,
        model: '' // Reset model when make changes
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  // Get available models for selected make
  const availableModels = formData.make && vehicleMakes[formData.make] 
    ? vehicleMakes[formData.make] 
    : []

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setShowSuccess(false)
    setShowError(false)
    setErrorMessage('')

    try {
      await api.submitEmailForm('mobile_service', formData)

      setShowSuccess(true)
      setFormData({
        date: '',
        companyName: '',
        dotNumber: '',
        unitNumber: '',
        ownerName: '',
        ownerPhone: '',
        email: '',
        driverName: '',
        driverPhone: '',
        year: '',
        make: '',
        model: '',
        plateNumber: '',
        color: '',
        vin: '',
        location: '',
        description: ''
      })
      
      setTimeout(() => {
        document.getElementById('success-message')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      }, 100)
    } catch (error) {
      console.error('Submission Error:', error)
      setShowError(true)
      setErrorMessage(error.message || 'Failed to send message. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const baseUrl = 'https://mechanicsitedemo-1.onrender.com'
  const pageUrl = `${baseUrl}/request-24/7-emergency-service---towing`
  
  return (
    <>
      <Helmet>
        <title>Mobile Service & 24/7 Emergency Towing | Summit Diesel Repair</title>
        <meta name="description" content="24/7 mobile diesel service and emergency towing. Request on-site repairs for trucks, trailers, and commercial vehicles. Fast response times." />
        <link rel="canonical" href={pageUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Mobile Service & 24/7 Emergency Towing | Summit Diesel Repair" />
        <meta property="og:description" content="24/7 mobile diesel service and emergency towing. Request on-site repairs for trucks, trailers, and commercial vehicles." />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${baseUrl}/logo.png`} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mobile Service & 24/7 Emergency Towing | Summit Diesel Repair" />
        <meta name="twitter:description" content="24/7 mobile diesel service and emergency towing. Request on-site repairs for trucks and commercial vehicles." />
        <meta name="twitter:image" content={`${baseUrl}/logo.png`} />
      </Helmet>
      <main className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white min-h-[calc(100vh-200px)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-black mb-6 uppercase tracking-wider">
            Mobile Service
          </h1>
          <hr className="w-24 h-1 bg-wine-red border-0 mx-auto my-6" />
          <a href="tel:763-777-2135" className="inline-flex items-center gap-3 bg-gradient-to-r from-wine-red to-dark-red text-white px-8 py-4 rounded-lg text-xl font-semibold mt-4 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            <span className="text-2xl">📞</span>
            Call Now
          </a>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 mb-12">
          <h3 className="text-3xl font-bold text-black mb-8 text-center uppercase tracking-wide">
            Service Call
          </h3>
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="date" className="font-semibold mb-2 text-gray-800">Date *</label>
                <input 
                  type="date" 
                  id="date" 
                  name="date" 
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 border-2 border-gray-300 rounded-lg text-base focus:outline-none focus:border-wine-red focus:ring-2 focus:ring-wine-red/20 transition-all"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="companyName" className="font-semibold mb-2 text-gray-800">Company Name *</label>
                <input 
                  type="text" 
                  id="companyName" 
                  name="companyName" 
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 border-2 border-gray-300 rounded-lg text-base focus:outline-none focus:border-wine-red focus:ring-2 focus:ring-wine-red/20 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="dotNumber" className="font-semibold mb-2 text-gray-800">US DOT #</label>
                <input 
                  type="text" 
                  id="dotNumber" 
                  name="dotNumber" 
                  value={formData.dotNumber}
                  onChange={handleChange}
                  className="px-4 py-3 border-2 border-gray-300 rounded-lg text-base focus:outline-none focus:border-wine-red focus:ring-2 focus:ring-wine-red/20 transition-all"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="unitNumber" className="font-semibold mb-2 text-gray-800">Unit #</label>
                <input 
                  type="text" 
                  id="unitNumber" 
                  name="unitNumber" 
                  value={formData.unitNumber}
                  onChange={handleChange}
                  className="px-4 py-3 border-2 border-gray-300 rounded-lg text-base focus:outline-none focus:border-wine-red focus:ring-2 focus:ring-wine-red/20 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="ownerName" className="font-semibold mb-2 text-gray-800">Owner Name *</label>
                <input 
                  type="text" 
                  id="ownerName" 
                  name="ownerName" 
                  value={formData.ownerName}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 border-2 border-gray-300 rounded-lg text-base focus:outline-none focus:border-wine-red focus:ring-2 focus:ring-wine-red/20 transition-all"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="ownerPhone" className="font-semibold mb-2 text-gray-800">Driver/Owner Phone # *</label>
                <input 
                  type="tel" 
                  id="ownerPhone" 
                  name="ownerPhone" 
                  value={formData.ownerPhone}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 border-2 border-gray-300 rounded-lg text-base focus:outline-none focus:border-wine-red focus:ring-2 focus:ring-wine-red/20 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="email" className="font-semibold mb-2 text-gray-800">E-mail *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 border-2 border-gray-300 rounded-lg text-base focus:outline-none focus:border-wine-red focus:ring-2 focus:ring-wine-red/20 transition-all"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="driverName" className="font-semibold mb-2 text-gray-800">Drivers Name</label>
                <input 
                  type="text" 
                  id="driverName" 
                  name="driverName" 
                  value={formData.driverName}
                  onChange={handleChange}
                  className="px-4 py-3 border-2 border-gray-300 rounded-lg text-base focus:outline-none focus:border-wine-red focus:ring-2 focus:ring-wine-red/20 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="driverPhone" className="font-semibold mb-2 text-gray-800">Drivers Phone #</label>
                <input 
                  type="tel" 
                  id="driverPhone" 
                  name="driverPhone" 
                  value={formData.driverPhone}
                  onChange={handleChange}
                  className="px-4 py-3 border-2 border-gray-300 rounded-lg text-base focus:outline-none focus:border-wine-red focus:ring-2 focus:ring-wine-red/20 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col">
                <label htmlFor="year" className="font-semibold mb-2 text-gray-800">Year</label>
                <input 
                  type="text" 
                  id="year" 
                  name="year" 
                  value={formData.year}
                  onChange={handleChange}
                  placeholder="e.g., 2020"
                  className="px-4 py-3 border-2 border-gray-300 rounded-lg text-base focus:outline-none focus:border-wine-red focus:ring-2 focus:ring-wine-red/20 transition-all"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="make" className="font-semibold mb-2 text-gray-800">Make</label>
                <select
                  id="make"
                  name="make"
                  value={formData.make}
                  onChange={handleChange}
                  className="px-4 py-3 border-2 border-gray-300 rounded-lg text-base focus:outline-none focus:border-wine-red focus:ring-2 focus:ring-wine-red/20 transition-all bg-white"
                >
                  <option value="">Select Make</option>
                  {Object.keys(vehicleMakes).map((make) => (
                    <option key={make} value={make}>
                      {make}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="model" className="font-semibold mb-2 text-gray-800">Model</label>
                <select
                  id="model"
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  disabled={!formData.make || availableModels.length === 0}
                  className="px-4 py-3 border-2 border-gray-300 rounded-lg text-base focus:outline-none focus:border-wine-red focus:ring-2 focus:ring-wine-red/20 transition-all bg-white disabled:bg-gray-100 disabled:cursor-not-allowed"
                >
                  <option value="">
                    {!formData.make ? 'Select Make First' : availableModels.length === 0 ? 'No models available' : 'Select Model'}
                  </option>
                  {availableModels.map((model) => (
                    <option key={model} value={model}>
                      {model}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col">
                <label htmlFor="plateNumber" className="font-semibold mb-2 text-gray-800">Plate #</label>
                <input 
                  type="text" 
                  id="plateNumber" 
                  name="plateNumber" 
                  value={formData.plateNumber}
                  onChange={handleChange}
                  className="px-4 py-3 border-2 border-gray-300 rounded-lg text-base focus:outline-none focus:border-wine-red focus:ring-2 focus:ring-wine-red/20 transition-all"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="color" className="font-semibold mb-2 text-gray-800">Color</label>
                <input 
                  type="text" 
                  id="color" 
                  name="color" 
                  value={formData.color}
                  onChange={handleChange}
                  className="px-4 py-3 border-2 border-gray-300 rounded-lg text-base focus:outline-none focus:border-wine-red focus:ring-2 focus:ring-wine-red/20 transition-all"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="vin" className="font-semibold mb-2 text-gray-800">Vin #</label>
                <input 
                  type="text" 
                  id="vin" 
                  name="vin" 
                  value={formData.vin}
                  onChange={handleChange}
                  className="px-4 py-3 border-2 border-gray-300 rounded-lg text-base focus:outline-none focus:border-wine-red focus:ring-2 focus:ring-wine-red/20 transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="location" className="font-semibold mb-2 text-gray-800">Location *</label>
              <input 
                type="text" 
                id="location" 
                name="location" 
                value={formData.location}
                onChange={handleChange}
                required
                className="px-4 py-3 border-2 border-gray-300 rounded-lg text-base focus:outline-none focus:border-wine-red focus:ring-2 focus:ring-wine-red/20 transition-all"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="description" className="font-semibold mb-2 text-gray-800">Description/Details *</label>
              <textarea 
                id="description" 
                name="description" 
                rows="5" 
                value={formData.description}
                onChange={handleChange}
                required
                className="px-4 py-3 border-2 border-gray-300 rounded-lg text-base focus:outline-none focus:border-wine-red focus:ring-2 focus:ring-wine-red/20 transition-all resize-y min-h-[120px]"
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-wine-red to-dark-red text-white px-8 py-4 rounded-lg text-lg font-semibold mt-4 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 min-w-[220px] mx-auto"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                'Submit Service Call'
              )}
            </button>
          </form>

          {showSuccess && (
            <div id="success-message" className="mt-6 p-5 rounded-lg bg-green-50 border-2 border-green-200 text-green-800 flex items-center gap-3 animate-slide-down">
              <span className="text-2xl font-bold">✓</span>
              <span>Thank you for contacting us. We will get back to you as soon as possible.</span>
            </div>
          )}
          
          {showError && (
            <div id="error-message" className="mt-6 p-5 rounded-lg bg-red-50 border-2 border-red-200 text-red-800 flex items-center gap-3 animate-slide-down">
              <span className="text-2xl font-bold">✕</span>
              <span>{errorMessage || 'Oops, there was an error sending your message. Please try again later.'}</span>
            </div>
          )}
        </div>

        <div className="mt-12">
          <section className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 mb-8">
            <h2 className="text-3xl font-bold text-black mb-6 uppercase tracking-wide">
              24/7 HOUR EMERGENCY ROADSIDE ASSISTANCE
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              At Summit Diesel, we know that every minute of downtime costs you money. That's why our Emergency Roadside Assistance and Heavy-Duty Recovery team is on call 24/7, delivering fast, reliable service wherever you need us. Whether you're stuck on the highway, at a job site, or miles from home base, our mission is to get you back on the road safely and efficiently.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                <img src="/van.png" alt="Fleet Service Van" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">Fleet Service</h3>
              <p className="text-gray-700 leading-relaxed">
                Summit Diesel Offers Mobile Service 24/7 Roadside emergency service, onsite repairs, towing & Recovery.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                <img src="/mainvan.png" alt="Quality Service" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">Quality Guaranteed</h3>
              <p className="text-gray-700 leading-relaxed">
                When you contact Summit Diesel you get the best Quality Service no matter what. Call us today.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                <img src="/truck.png" alt="Service Trucks" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">Service Trucks</h3>
              <p className="text-gray-700 leading-relaxed">
                We have trucks that can get to you quick. Whether it be onsite repairs or Emergency Roadside Services
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}

export default MobileService
