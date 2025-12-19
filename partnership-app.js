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

function PartnershipPage() {
  try {
    useScrollAnimation();
    
    const categories = [
      { icon: 'briefcase', title: 'Corporate & Institutional Alliances', desc: 'Partner with established corporations and institutions' },
      { icon: 'truck', title: 'Logistics & Last-Mile Collaborations', desc: 'Integrate delivery and logistics solutions' },
      { icon: 'cpu', title: 'Technology & Integration Partners', desc: 'Build technical integrations and platforms' },
      { icon: 'shopping-bag', title: 'Retail & Lifestyle Co-branding', desc: 'Create co-branded lifestyle experiences' },
      { icon: 'heart', title: 'Social Impact & CSR Programs', desc: 'Drive community empowerment initiatives' }
    ];

    const benefits = [
      'Access a growing user base of professionals and households',
      'Integrate into a trusted task fulfillment network',
      'Co-develop impactful products and pilot programs',
      'Build measurable value through technology and service delivery',
      'Contribute to job creation and community empowerment'
    ];

    return (
      <div className="min-h-screen transition-colors duration-300" style={{backgroundColor: 'var(--background)'}}>
        <DarkModeToggle />
        <Header />
        
        <section className="pt-32 pb-16 px-6 transition-colors duration-300" style={{background: 'linear-gradient(to bottom right, rgba(168, 230, 207, 0.1), var(--background))'}}>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6" data-animate="animate-fadeInUp">Partner with TaskGoose</h1>
            <p className="text-xl text-[var(--text-secondary)] leading-relaxed" data-animate="animate-fadeInUp">
              At TaskGoose, we believe collaboration powers impact. We partner with forward-thinking brands, institutions, and innovators to transform how individuals and businesses manage their daily operations.
            </p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12" data-animate="animate-fadeInUp">Partnership Categories</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {categories.map((cat, idx) => (
                <div key={idx} data-animate="animate-fadeInUp" style={{animationDelay: `${idx * 0.1}s`}} className="rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift group cursor-pointer" style={{background: 'linear-gradient(to bottom right, var(--hover-bg), var(--card-background))'}}>
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300" style={{backgroundColor: 'var(--primary-color)'}}>
                    <div className={`icon-${cat.icon} text-2xl text-white`}></div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--primary-color)] transition-colors duration-300">{cat.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors duration-300">{cat.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-[var(--primary-color)]/5 to-white rounded-3xl p-8 md:p-12 mb-16" data-animate="animate-fadeInUp">
              <h2 className="text-3xl font-bold mb-6">Why Partner with Us</h2>
              <ul className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="icon-check-circle text-xl mr-3 mt-1" style={{color: 'var(--primary-color)'}}></div>
                    <span className="text-lg text-[var(--text-secondary)]">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 transition-colors duration-300" style={{backgroundColor: 'var(--hover-bg)'}}>
          <div className="max-w-3xl mx-auto text-center">
            <div className="rounded-3xl p-12 shadow-xl transition-colors duration-300" style={{backgroundColor: 'var(--card-background)'}}>
              <h2 className="text-3xl font-bold mb-6">Ready to Partner with TaskGoose?</h2>
              <p className="text-lg text-[var(--text-secondary)] mb-8 leading-relaxed">
                Join forces with us to build the future of smart living. Submit your partnership proposal and let's create impact together.
              </p>
              <a href="https://tally.so/r/PdpQ8Q" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105" style={{backgroundColor: 'var(--primary-color)', color: 'var(--accent-color)'}}>
                <div className="icon-send text-xl mr-3"></div>
                Submit a Partnership Proposal
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  } catch (error) {
    console.error('PartnershipPage error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ErrorBoundary><PartnershipPage /></ErrorBoundary>);