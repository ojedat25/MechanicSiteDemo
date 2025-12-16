function ServiceCall() {
  const services = [
    { title: 'Full Mechanical', description: 'Summit Diesel Full Mechanical Services' },
    { title: 'Electrical', description: 'Full Electrical Services' },
    { title: 'Tire Services', description: 'All brands, including new, used and retread' },
    { title: 'Roadside Diagnostics', description: 'Know the problem before it becomes a bigger one' },
    { title: 'Breaks', description: 'Stronger stops and safer hauls, no matter what you drive.' },
    { title: 'Trailer Repairs', description: "Big jobs or small jobs but if it's your trailer, we will fix it!" },
    { title: 'Air Leaks', description: "Got an air leak? We'll seal it up and get you rolling fast!" },
    { title: 'Belts and Hoses', description: 'A strong haul starts with strong belts and hoses' },
    { title: 'Liftgates', description: "Heavy loads? No problem. We'll make sure your liftgate can handle it!" }
  ]

  const contentSections = [
    {
      title: 'Fleet Services',
      text: "If you manage a fleet, we'd love to work with you. We provide preventive maintenance and on-site truck and trailer washing to keep your equipment in top shape. With multiple accounts across the Twin Cities, we've built flexible programs that fit your needs.",
      imageFirst: true
    },
    {
      title: 'Mobile Fleet Service',
      text: "With our service, we bring the mechanic to you. No need to pay for towing or let your truck sit in a shop for days over a simple problem. One quick call and we'll send a technician to your location to get you back on the road. Not sure what's wrong? We include diagnostics upfront so you know exactly what you're paying for.",
      imageFirst: false
    },
    {
      title: 'Truck Washing',
      text: "Multiple truck wash units working around the clock to help enhance your public image while improving safety. We can extend vehicles' life by removing corrosive debri. Let Summit Diesel help you stay safe on the road while making an impression.",
      imageFirst: true
    }
  ]

  return (
    <main className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white min-h-[calc(100vh-200px)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6 uppercase tracking-wider">
            24/7 EMERGENCY SERVICES
          </h2>
          <hr className="w-24 h-1 bg-wine-red border-0 mx-auto my-6" />
          <h3 className="text-2xl text-gray-700 mt-4">
            Call us Today!
          </h3>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 mb-12">
          <h3 className="text-3xl font-bold text-black mb-8 text-center uppercase">
            List of Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const images = ['/truck.png', '/van.png', '/mainvan.png']
              const imageIndex = index % images.length
              return (
                <div key={index} className="bg-gray-50 p-6 rounded-xl text-center border border-gray-200 hover:shadow-xl hover:-translate-y-2 hover:border-wine-red transition-all duration-300">
                  <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                    <img src={images[imageIndex]} alt={service.title} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-xl font-bold text-black mb-3">{service.title}</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">{service.description}</p>
                  <a href="#" className="inline-block text-wine-red font-semibold hover:text-dark-red hover:underline transition-colors">
                    Item Link
                  </a>
                </div>
              )
            })}
          </div>
        </div>

        <div className="flex flex-col gap-8">
          {contentSections.map((section, index) => {
            const images = ['/mainvan.png', '/van.png', '/truck.png']
            const imageSrc = images[index % images.length]
            return (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${section.imageFirst ? '' : 'lg:grid-flow-dense'}`}>
                  {section.imageFirst && (
                    <div className="w-full h-72 rounded-lg overflow-hidden">
                      <img src={imageSrc} alt={section.title} className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div className={section.imageFirst ? '' : 'lg:col-start-1'}>
                    <h3 className="text-3xl font-bold text-black mb-4 uppercase">
                      {section.title}
                    </h3>
                    <p className="text-lg leading-relaxed text-gray-700">
                      {section.text}
                    </p>
                  </div>
                  {!section.imageFirst && (
                    <div className="w-full h-72 rounded-lg overflow-hidden lg:col-start-2">
                      <img src={imageSrc} alt={section.title} className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default ServiceCall
