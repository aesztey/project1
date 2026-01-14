'use client'

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-baby-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-baby-blue-400/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-baby-blue-500/10 border border-baby-blue-500/20 rounded-full mb-8">
            <span className="w-2 h-2 bg-baby-blue-400 rounded-full mr-2 animate-pulse" />
            <span className="text-baby-blue-300 text-sm font-medium">
              Magyarország #1 távközlési szolgáltatója
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">Gyors. Megbízható.</span>
            <br />
            <span className="gradient-text">Mindenhol elérhető.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto">
            A Netanor a legjobb mobil és internet élményt nyújtja, 
            bárhol is járj, összekötünk a világgal.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg">
              Kezdjük el
            </button>
            <button className="btn-secondary text-lg">
              Tudj meg többet
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-dark-800">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">2M+</div>
              <div className="text-gray-500 text-sm md:text-base">Elégedett ügyfél</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">99.9%</div>
              <div className="text-gray-500 text-sm md:text-base">Rendelkezésre állás</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-gray-500 text-sm md:text-base">Ügyfélszolgálat</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
