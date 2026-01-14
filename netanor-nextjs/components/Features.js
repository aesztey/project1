'use client'

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Szupergyors sebesség',
    description: 'Élvezd a villámgyors internetet bárhol is tartózkodsz az országban.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Széles lefedettség',
    description: 'Maradj kapcsolatban városokban és vidéki területeken egyaránt.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: '24/7 Ügyfélszolgálat',
    description: 'Szakértőink mindig készek segíteni, nappal és éjjel.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Biztonságos hálózat',
    description: 'Adataid védelme a legmagasabb szintű titkosítással biztosított.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Kedvező árak',
    description: 'Versenyképes árak a legjobb szolgáltatás mellett.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Modern készülékek',
    description: 'Válaszd ki a legújabb okostelefonokat kedvezményes áron.',
  },
]

export default function Features() {
  return (
    <section id="szolgaltatasok" className="py-20 md:py-28 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-900" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-baby-blue-500/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="text-white">Miért válaszd a </span>
            <span className="gradient-text">Netanort?</span>
          </h2>
          <p className="section-subtitle">
            Több mint 10 éve vagyunk jelen a piacon, és folyamatosan 
            a legmagasabb minőséget nyújtjuk ügyfeleinknek.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card card-hover group"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-baby-blue-500/10 rounded-xl flex items-center justify-center text-baby-blue-400 mb-5 group-hover:bg-baby-blue-500/20 transition-colors duration-300">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center p-8 bg-gradient-to-r from-baby-blue-500/10 via-dark-800/50 to-baby-blue-500/10 rounded-2xl border border-baby-blue-500/20">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold text-white mb-1">
                Készen állsz a váltásra?
              </h3>
              <p className="text-gray-400">
                Csatlakozz több millió elégedett ügyfelünkhöz még ma!
              </p>
            </div>
            <button className="btn-primary whitespace-nowrap">
              Ingyenes konzultáció
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
