class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return <div className="min-h-screen flex items-center justify-center">
        <button onClick={() => window.location.reload()} className="px-6 py-3 rounded-full" style={{backgroundColor: 'var(--primary-color)'}}>Reload</button>
      </div>;
    }
    return this.props.children;
  }
}

function FeaturesPage() {
  try {
    useScrollAnimation();
    const goosistantRef = React.useRef(null);
    
    const liveFeatures = [
      {
        icon: 'zap',
        title: 'Smart Task Matching',
        description: 'Get paired with trusted GoosePros that perfectly fit your needs — faster, safer, and smarter.',
        metric: 'Save 60% time on finding reliable help',
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80'
      },
      {
        icon: 'shield-check',
        title: 'Verified Professionals',
        description: 'Every GoosePro is verified, trained, and rated — giving you peace of mind before the first knock.',
        metric: '100% ID-verified taskers across categories',
        image: 'https://images.unsplash.com/photo-1556745753-b2904692b3cd?w=800&q=80'
      },
      {
        icon: 'smile',
        title: 'Zero Stress Guarantee',
        description: 'We handle the details — so you can focus on what truly matters.',
        metric: 'Reduce daily stress by up to 70%',
        image: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=800&q=80'
      },
      {
        icon: 'calendar-check',
        title: 'Adaptive Scheduling',
        description: 'Book instantly or plan ahead — our flexible system works on your time.',
        metric: 'Tasks completed 40% faster than traditional booking',
        image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80'
      },
      {
        icon: 'layers',
        title: 'Lifestyle Ecosystem',
        description: 'From home care to events, errands, and tech support — everything connects seamlessly.',
        metric: 'One platform. Infinite possibilities.',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80'
      }
    ];

    const preLaunchFeatures = [
      {
        icon: 'zap',
        title: 'TaskGoose SmartMatch',
        description: 'Our matching process is powered by the TaskGoose SmartMatch framework — a growing intelligence system that connects users with trusted professionals based on compatibility and need.',
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80'
      },
      {
        icon: 'wallet',
        title: 'GooseWallet',
        description: 'Secure, seamless payments with escrow protection. Your funds are safe until the job is done.',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80'
      },
      {
        icon: 'calculator',
        title: 'Real-Time Cost Estimator',
        description: 'Get instant price estimates for your tasks before booking. Transparent pricing powered by smart algorithms.',
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80'
      },
      {
        icon: 'map-pin',
        title: 'Real-Time Task Tracking',
        description: 'Track your GoosePro\'s journey and task progress in real-time. Stay informed every step of the way.',
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80'
      }
    ];

    return (
      <div className="min-h-screen transition-colors duration-300" style={{backgroundColor: 'var(--background)'}}>
        <DarkModeToggle />
        <Goosistant ref={goosistantRef} />
        <Header />
        
        <section className="pt-32 pb-16 px-6 transition-colors duration-300" style={{background: 'linear-gradient(to bottom right, rgba(168, 230, 207, 0.1), var(--background))'}}>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6" data-animate="animate-fadeInUp">What Makes TaskGoose Different</h1>
            <p className="text-2xl text-[var(--text-secondary)]" data-animate="animate-fadeInUp">
              Technology meets care — designed to simplify your world, one task at a time.
            </p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4" data-animate="animate-fadeInUp">Live Now</h2>
            <p className="text-xl text-center text-[var(--text-secondary)] mb-16" data-animate="animate-fadeInUp">Features available today</p>
            <div className="space-y-16">
            {liveFeatures.map((feature, idx) => (
              <div key={idx} data-animate="animate-fadeInUp" style={{animationDelay: `${idx * 0.1}s`}} className={`grid md:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                  <img src={feature.image} alt={feature.title} className="w-full h-80 object-cover rounded-3xl shadow-2xl hover-lift" />
                </div>
                <div className={idx % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{backgroundColor: 'var(--primary-color)'}}>
                    <div className={`icon-${feature.icon} text-2xl text-white`}></div>
                  </div>
                  <h2 className="text-4xl font-bold mb-4">{feature.title}</h2>
                  <p className="text-xl text-[var(--text-secondary)] leading-relaxed mb-6">{feature.description}</p>
                  <div className="inline-block px-6 py-3 rounded-full" style={{backgroundColor: 'var(--primary-color)', opacity: 0.1}}>
                    <p className="font-semibold" style={{color: 'var(--primary-color)', opacity: 1}}>➤ {feature.metric}</p>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 transition-colors duration-300" style={{background: 'linear-gradient(to bottom right, rgba(168, 230, 207, 0.1), var(--background))'}}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16" data-animate="animate-fadeInUp">
              <h2 className="text-4xl font-bold mb-4">Pre-Launch Features</h2>
              <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">Coming soon to make your TaskGoose experience even better</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8" data-stagger-container>
              {preLaunchFeatures.map((feature, idx) => (
                <div key={idx} className="stagger-item rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 card-hover border border-gray-200 dark:border-gray-700 relative" style={{backgroundColor: 'var(--background)'}}>
                  <div className="absolute top-4 right-4 px-4 py-2 rounded-full text-xs font-semibold bg-orange-100 text-orange-700 z-10">
                    Pre-Launch
                  </div>
                  <img src={feature.image} alt={feature.title} className="w-full h-56 object-cover" />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{backgroundColor: 'var(--primary-color)'}}>
                        <div className={`icon-${feature.icon} text-2xl text-white`}></div>
                      </div>
                      <h3 className="text-2xl font-bold">{feature.title}</h3>
                    </div>
                    <p className="text-lg text-[var(--text-secondary)] leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16" data-animate="animate-fadeInUp">
              <p className="text-xl text-[var(--text-secondary)] mb-6">
                Want to be the first to know when these features launch?
              </p>
              <a href="https://tally.so/r/44QDGO" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105" style={{backgroundColor: 'var(--primary-color)', color: 'var(--accent-color)'}}>
                <div className="icon-mail text-xl mr-3"></div>
                Subscribe to Gooseletter
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  } catch (error) {
    console.error('FeaturesPage error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ErrorBoundary><FeaturesPage /></ErrorBoundary>);