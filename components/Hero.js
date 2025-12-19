function Hero({ onBookTask, onJoinGoosePro, onOpenGoosistant }) {
  try {
    useScrollAnimation();
    const [showAckModal, setShowAckModal] = React.useState(false);
    const [searchQuery, setSearchQuery] = React.useState('');

    const handleSearchSubmit = (query) => {
      if (query.trim()) {
        setShowAckModal(true);
      }
    };
    
    return (
      <>
      <section className="pt-32 pb-20 px-6 relative overflow-hidden transition-colors duration-300" style={{background: 'linear-gradient(to bottom right, rgba(168, 230, 207, 0.1), var(--background))'}} data-name="hero" data-file="components/Hero.js">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--primary-color)] rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16 text-reveal">
            <div className="flex items-center justify-center gap-4 mb-6">
              <AnimatedGoose onClick={onOpenGoosistant} />
              <h1 className="text-5xl md:text-7xl font-bold leading-tight" style={{letterSpacing: '-0.03em'}}>
                Task Smarter, <span className="text-[var(--primary-color)]">Zero Stress</span>
              </h1>
            </div>
            <p className="text-2xl text-[var(--text-secondary)] leading-relaxed font-light mb-6" style={{letterSpacing: '-0.01em'}}>
              Simplify your life. Task smarter, live better.
            </p>
            
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative group">
                <div className="icon-search text-xl absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-[var(--primary-color)] transition-colors"></div>
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearchSubmit(searchQuery)}
                  placeholder="What can we help with today?" 
                  className="w-full pl-14 pr-16 py-4 rounded-full border border-gray-200 focus:outline-none focus:border-[var(--primary-color)] text-base transition-all shadow-sm hover:shadow-md focus:shadow-lg"
                  style={{backgroundColor: 'var(--background)', color: 'var(--text-primary)'}}
                />
                <button 
                  onClick={() => handleSearchSubmit(searchQuery)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{backgroundColor: 'var(--primary-color)'}}
                >
                  <div className="icon-arrow-right text-lg text-white"></div>
                </button>
              </div>
              <div className="flex flex-wrap gap-2 mt-4 justify-center">
                {['Cleaning', 'Errands', 'Repairs', 'Caregiving'].map((service, idx) => (
                  <button 
                    key={idx}
                    onClick={() => { setSearchQuery(service); handleSearchSubmit(service); }}
                    className="px-3 py-1 rounded-full text-xs font-medium transition-all hover:scale-105 text-[var(--text-secondary)] hover:text-[var(--primary-color)]"
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>

            <p className="text-base italic font-light mb-8" style={{color: 'var(--primary-color)'}}>
              Tell us what you need — we'll handle it with care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative image-reveal order-2 md:order-1">
              <img src="https://app.trickle.so/storage/public/images/usr_1704f32f60000001/34366a62-f0bf-4aeb-ba9d-8d1255a4601d.jpeg" alt="TaskGoose Platform" className="w-full h-96 rounded-3xl shadow-2xl card-hover object-cover" />
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl animate-pulse-slow">
                <AnimatedGoose />
              </div>
            </div>

            <div className="space-y-4 order-1 md:order-2 text-reveal">
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed font-light">
                Join thousands saving hours weekly through stress-free task management.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a href="https://tally.so/r/vGM8QD" target="_blank" rel="noopener noreferrer" className="btn-primary relative overflow-hidden group inline-block text-center whitespace-nowrap">
                  <span className="relative z-10">Request a Task</span>
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-500"></span>
                </a>
                <a href="partnership.html" className="btn-secondary relative overflow-hidden group text-center whitespace-nowrap">
                  <span className="relative z-10">Partner with Us</span>
                  <span className="absolute inset-0 bg-[var(--primary-color)] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></span>
                </a>
                <a href="https://tally.so/r/PdpWgQ" target="_blank" rel="noopener noreferrer" className="btn-secondary relative overflow-hidden group inline-block text-center whitespace-nowrap">
                  <span className="relative z-10">Join as GoosePro</span>
                  <span className="absolute inset-0 bg-[var(--primary-color)] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showAckModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 animate-fadeIn" onClick={() => setShowAckModal(false)}>
          <div className="rounded-3xl max-w-lg w-full p-8 animate-fadeInUp transition-colors duration-300" style={{backgroundColor: 'var(--card-background)'}} onClick={(e) => e.stopPropagation()}>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 animate-bounce" style={{backgroundColor: 'var(--primary-color)'}} >
                <div className="icon-check text-4xl text-white"></div>
              </div>
              <h3 className="text-3xl font-bold mb-4">Great Choice!</h3>
              <p className="text-xl text-[var(--text-secondary)] mb-6 leading-relaxed">
                We see you're interested in <strong className="text-[var(--primary-color)]">"{searchQuery}"</strong>
              </p>
              <p className="text-lg text-[var(--text-secondary)] mb-8">
                To get matched with the perfect GoosePro for your task, please submit your request through our booking form. It only takes a minute!
              </p>
              <div className="space-y-3">
                <a 
                  href="https://tally.so/r/vGM8QD" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  style={{backgroundColor: 'var(--primary-color)', color: 'var(--accent-color)'}}
                >
                  Complete Booking Request
                </a>
                <a 
                  href="services.html"
                  className="block w-full px-8 py-3 rounded-full font-medium text-base transition-all hover:bg-gray-100 dark:hover:bg-gray-800 text-center"
                  style={{color: 'var(--text-secondary)'}}
                >
                  Browse More Services
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      </>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}
