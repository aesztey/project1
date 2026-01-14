'use client'

const plans = [
  {
    name: 'Alap',
    price: '5 990',
    description: 'Tökéletes alkalmi felhasználóknak.',
    features: [
      '5 GB adatforgalom',
      '100 perc beszélgetés',
      '100 SMS',
      'Alap sebesség: 10 Mbit/s',
    ],
    highlighted: false,
  },
  {
    name: 'Standard',
    price: '9 990',
    description: 'Ideális mindennapi internetezéshez.',
    features: [
      '20 GB adatforgalom',
      'Korlátlan beszélgetés',
      'Korlátlan SMS',
      'Sebesség: 50 Mbit/s',
      'EU roaming tartalmazza',
    ],
    highlighted: true,
  },
  {
    name: 'Prémium',
    price: '14 990',
    description: 'Korlátlan adat és prémium támogatás.',
    features: [
      'Korlátlan adatforgalom',
      'Korlátlan beszélgetés',
      'Korlátlan SMS',
      'Maximális sebesség: 100 Mbit/s',
      'EU roaming tartalmazza',
      'Prioritás ügyfélszolgálat',
    ],
    highlighted: false,
  },
]

export default function Plans() {
  return (
    <section id="csomagok" className="py-20 md:py-28 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/50 to-dark-950" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="text-white">Csomagjaink</span>
          </h2>
          <p className="section-subtitle">
            Válassz a személyre szabott csomagjaink közül, 
            amelyek megfelelnek az igényeidnek.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`card card-hover relative ${
                plan.highlighted
                  ? 'border-baby-blue-500 bg-gradient-to-b from-baby-blue-500/10 to-dark-800/50'
                  : ''
              }`}
            >
              {/* Popular badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-baby-blue-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
                    Legnépszerűbb
                  </span>
                </div>
              )}

              {/* Plan content */}
              <div className="text-center pt-4">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                
                {/* Price */}
                <div className="mb-8">
                  <span className="text-4xl md:text-5xl font-bold gradient-text">
                    {plan.price}
                  </span>
                  <span className="text-gray-400 ml-2">Ft/hó</span>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8 text-left">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <svg
                        className="w-5 h-5 text-baby-blue-400 mr-3 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.highlighted
                      ? 'btn-primary'
                      : 'bg-dark-700 hover:bg-dark-600 text-white'
                  }`}
                >
                  Kiválasztom
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
