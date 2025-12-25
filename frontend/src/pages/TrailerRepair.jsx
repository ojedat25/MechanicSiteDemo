function TrailerRepair() {
  return (
    <main className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white min-h-[calc(100vh-200px)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6 uppercase tracking-wider">
            Trailer Repair Services
          </h2>
          <hr className="w-24 h-1 bg-wine-red border-0 mx-auto my-6" />
          <p className="text-xl leading-relaxed text-gray-700 max-w-4xl mx-auto">
            Your trusted partner for fast, dependable trailer repairs and maintenance. We deliver quality workmanship, fair pricing, and 24/7 support to keep your equipment on the road and your business moving.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 mb-12">
          <div className="text-center mb-8">
            <div className="w-full h-80 rounded-lg mb-6 overflow-hidden bg-gray-100 relative">
              <img src="/truck.png" alt="Towing and Recovery" className="w-full h-full object-cover object-[center_70%]" />
            </div>
            <h3 className="text-3xl font-bold text-black uppercase">
              TOWING AND RECOVERY
            </h3>
          </div>

          <div className="grid gap-6">
            {[
              {
                title: 'Emergency Service:',
                items: [
                  'Full-service mobile trailer repair',
                  'Emergency roadside service',
                  '24-hour emergency services',
                  'Free local pickup and delivery',
                  'Free estimates'
                ]
              },
              {
                title: 'Inspections:',
                items: ['Certified MNDOT & FHWA inspections']
              },
              {
                title: 'Welding & Fabrication:',
                items: ['MIG & TIG welding (aluminum, steel & stainless)']
              },
              {
                title: 'Doors & Liftgates:',
                items: [
                  'Roll-up and swing door repair or replacement',
                  'Liftgate repair, replacement & installations'
                ]
              },
              {
                title: 'Suspension, Brakes & Diagnostics:',
                items: [
                  'Total suspension repair or replacement',
                  'Thorough brake repair & maintenance',
                  'Computerized ABS diagnostics & repair'
                ]
              },
              {
                title: 'Tarping Systems - Complete tarping systems for heavy-duty equipment including:',
                items: [
                  'Grain trailers & carts',
                  'Gravity wagons',
                  'Tenders & spreaders',
                  'Dump bodies',
                  'End dumps',
                  'Belly dumps',
                  'Side dumps',
                  'Van & transfer trailers',
                  'Flatbeds',
                  'Roll-off containers'
                ]
              },
              {
                title: 'Maintenance & Fleet Services:',
                items: [
                  'Preventative maintenance',
                  'Fleet service',
                  'Fleet management including tracking of preventive maintenance and DOT/FHWA schedules'
                ]
              },
              {
                title: 'In-Shop Services:',
                items: ['Complete in-shop service']
              }
            ].map((service, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-lg border-l-5 border-wine-red hover:translate-x-1 hover:shadow-md transition-all duration-300">
                <h4 className="text-xl font-bold text-black mb-4">{service.title}</h4>
                <ul className="list-none pl-0">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="py-2 pl-6 relative text-gray-700 leading-relaxed before:content-['•'] before:absolute before:left-0 before:text-wine-red before:text-xl before:font-bold">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 mb-12">
          <div className="w-full h-96 rounded-lg mb-8 overflow-hidden bg-gray-100 relative">
            <img src="/mainvan.png" alt="Repair Trailer Services" className="w-full h-full object-cover object-center" />
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-black mb-6 uppercase">
              REPAIR TRAILER SERVICES
            </h3>
            <p className="text-lg leading-relaxed text-gray-700 mb-8 max-w-4xl mx-auto">
              Your trusted partner for fast, dependable trailer repairs and maintenance. We deliver quality workmanship, fair pricing, and 24/7 support to keep your equipment on the road and your business moving.
            </p>
            <div className="w-full h-72 rounded-lg mb-6 overflow-hidden bg-gray-100 relative">
              <img src="/van.png" alt="Services" className="w-full h-full object-cover object-center" />
            </div>
            <h3 className="text-3xl font-bold text-black uppercase mt-8">
              SERVICES
            </h3>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold text-black mb-6 text-center uppercase">
            FAQs
          </h2>
          <hr className="w-24 h-1 bg-wine-red border-0 mx-auto my-6" />

          {[
            {
              question: 'In what areas do you provide service?',
              answer: 'We are currently serving the Greater MN Area & Twin Cities'
            },
            {
              question: 'What to Expect with Summit Diesel',
              answer: 'Summit Diesel guarantees you will be up and running'
            },
            {
              question: 'What are your business hours?',
              answer: 'We are open 24-hours a day, every day of the week.'
            },
            {
              question: 'What payment methods do you accept?',
              answer: 'You can pay using cash, debit/credit card, and Paypal.'
            }
          ].map((faq, index) => (
            <div key={index} className="py-6 border-b border-gray-300 last:border-b-0 hover:pl-4 transition-all duration-300">
              <h4 className="text-xl font-bold text-black mb-3">{faq.question}</h4>
              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default TrailerRepair
