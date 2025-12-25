import { useState } from 'react'

function Home() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    dob: '',
    address: ''
  })
  
  const [resumeFile, setResumeFile] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [fileError, setFileError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    setFileError('')
    
    if (file) {
      if (file.type !== 'application/pdf') {
        setFileError('Please upload a PDF file only.')
        setResumeFile(null)
        e.target.value = ''
        return
      }
      
      if (file.size > 5 * 1024 * 1024) {
        setFileError('File size must be less than 5MB.')
        setResumeFile(null)
        e.target.value = ''
        return
      }
      
      setResumeFile(file)
    } else {
      setResumeFile(null)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setShowSuccess(false)
    setShowError(false)
    setErrorMessage('')
    setFileError('')

    if (!resumeFile) {
      setFileError('Please upload your resume (PDF file required).')
      setIsSubmitting(false)
      return
    }

    try {
      const formDataToSend = new FormData()
      formDataToSend.append('fullName', formData.fullName)
      formDataToSend.append('phone', formData.phone)
      formDataToSend.append('dob', formData.dob)
      formDataToSend.append('address', formData.address)
      formDataToSend.append('resume', resumeFile)

      const response = await fetch('/email/', {
        method: 'POST',
        body: formDataToSend
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: 'Failed to send application' }))
        throw new Error(errorData.message || `Server error: ${response.status}`)
      }

      setShowSuccess(true)
      setFormData({
        fullName: '',
        phone: '',
        dob: '',
        address: ''
      })
      setResumeFile(null)
      
      const fileInput = document.getElementById('resume')
      if (fileInput) {
        fileInput.value = ''
      }
      
      setTimeout(() => {
        document.getElementById('success-message')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      }, 100)
    } catch (error) {
      console.error('Submission Error:', error)
      setShowError(true)
      setErrorMessage(error.message || 'Failed to submit application. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="flex-1 bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[60vh] relative">
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
      </section>

      {/* Hiring Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-black mb-6 uppercase tracking-wider">
              Join Our Team
            </h1>
            <hr className="w-24 h-1 bg-wine-red border-0 mx-auto my-6" />
            <p className="text-lg text-gray-700 mt-4">
              Submit your application and resume below
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 mb-12">
            <h3 className="text-3xl font-bold text-black mb-8 text-center uppercase tracking-wide">
              Job Application
            </h3>
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label htmlFor="fullName" className="font-semibold mb-2 text-gray-800">Full Name *</label>
                <input 
                  type="text" 
                  id="fullName" 
                  name="fullName" 
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 border-2 border-gray-300 rounded-lg text-base focus:outline-none focus:border-wine-red focus:ring-2 focus:ring-wine-red/20 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label htmlFor="phone" className="font-semibold mb-2 text-gray-800">Phone Number *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 border-2 border-gray-300 rounded-lg text-base focus:outline-none focus:border-wine-red focus:ring-2 focus:ring-wine-red/20 transition-all"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="dob" className="font-semibold mb-2 text-gray-800">Date of Birth *</label>
                  <input 
                    type="date" 
                    id="dob" 
                    name="dob" 
                    value={formData.dob}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 border-2 border-gray-300 rounded-lg text-base focus:outline-none focus:border-wine-red focus:ring-2 focus:ring-wine-red/20 transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="address" className="font-semibold mb-2 text-gray-800">Address *</label>
                <textarea 
                  id="address" 
                  name="address" 
                  rows="3" 
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 border-2 border-gray-300 rounded-lg text-base focus:outline-none focus:border-wine-red focus:ring-2 focus:ring-wine-red/20 transition-all resize-y min-h-[100px]"
                  placeholder="Street address, City, State, ZIP"
                ></textarea>
              </div>

              <div className="flex flex-col">
                <label htmlFor="resume" className="font-semibold mb-2 text-gray-800">Resume (PDF only) *</label>
                <input 
                  type="file" 
                  id="resume" 
                  name="resume" 
                  accept=".pdf,application/pdf"
                  onChange={handleFileChange}
                  required
                  className="px-4 py-3 border-2 border-gray-300 rounded-lg text-base focus:outline-none focus:border-wine-red focus:ring-2 focus:ring-wine-red/20 transition-all file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-wine-red file:text-white hover:file:bg-dark-red file:cursor-pointer"
                />
                {fileError && (
                  <p className="mt-2 text-sm text-red-600">{fileError}</p>
                )}
                {resumeFile && !fileError && (
                  <p className="mt-2 text-sm text-green-600">
                    ✓ {resumeFile.name} ({(resumeFile.size / 1024).toFixed(2)} KB)
                  </p>
                )}
                <p className="mt-1 text-sm text-gray-600">
                  Maximum file size: 5MB. PDF format only.
                </p>
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
                    Submitting...
                  </>
                ) : (
                  'Submit Application'
                )}
              </button>
            </form>

            {showSuccess && (
              <div id="success-message" className="mt-6 p-5 rounded-lg bg-green-50 border-2 border-green-200 text-green-800 flex items-center gap-3 animate-slide-down">
                <span className="text-2xl font-bold">✓</span>
                <span>Thank you for your application! We will review it and get back to you soon.</span>
              </div>
            )}
            
            {showError && (
              <div id="error-message" className="mt-6 p-5 rounded-lg bg-red-50 border-2 border-red-200 text-red-800 flex items-center gap-3 animate-slide-down">
                <span className="text-2xl font-bold">✕</span>
                <span>{errorMessage || 'Oops, there was an error submitting your application. Please try again later.'}</span>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
