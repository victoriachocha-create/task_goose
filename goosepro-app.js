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

function GooseProPage() {
  try {
    useScrollAnimation();
    
    const [signupModalOpen, setSignupModalOpen] = React.useState(false);
    
    const benefits = [
      { title: 'Access Paying Clients Daily', icon: 'users', desc: 'Connect with customers actively seeking your services' },
      { title: 'Secure Payments via Escrow', icon: 'shield-check', desc: 'Get paid safely and on time, every time' },
      { title: 'Professional Training', icon: 'graduation-cap', desc: 'Free certification and skill development programs' },
      { title: 'Partner Dashboard', icon: 'layout-dashboard', desc: 'Manage jobs, track earnings, and grow your business' },
      { title: 'Community Rewards', icon: 'gift', desc: 'Earn bonuses and incentives for excellent service' },
      { title: 'Marketing Support', icon: 'megaphone', desc: 'We promote your services to our growing user base' }
    ];

    return (
      <div className="min-h-screen transition-colors duration-300" style={{backgroundColor: 'var(--background)'}}>
        <DarkModeToggle />
        <Header />
        
        <section className="pt-32 pb-16 px-6 transition-colors duration-300" style={{background: 'linear-gradient(to bottom right, rgba(168, 230, 207, 0.1), var(--background))'}}>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6" data-animate="animate-fadeInUp" style={{letterSpacing: '-0.02em'}}>Join the GoosePro Network</h1>
            <p className="text-xl text-[var(--text-secondary)] leading-relaxed font-light" data-animate="animate-fadeInUp" style={{letterSpacing: '-0.01em'}}>
              Grow your business, increase bookings, and get verified visibility
            </p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4" data-animate="animate-fadeInUp" style={{letterSpacing: '-0.02em'}}>Why You Should Join the GoosePro Network</h2>
            <p className="text-xl text-center text-[var(--text-secondary)] mb-12 max-w-3xl mx-auto font-light" data-animate="animate-fadeInUp">Connect with customers actively seeking your services and grow your business with TaskGoose</p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {benefits.map((benefit, idx) => (
                <div key={idx} data-animate="animate-fadeInUp" style={{animationDelay: `${idx * 0.1}s`}} className="rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift group cursor-pointer" style={{background: 'linear-gradient(to bottom right, var(--hover-bg), var(--card-background))'}}>
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" style={{backgroundColor: 'var(--primary-color)'}}>
                    <div className={`icon-${benefit.icon} text-2xl text-[var(--accent-color)]`}></div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--primary-color)] transition-colors duration-300">{benefit.title}</h3>
                  <p className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors duration-300">{benefit.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-16" data-animate="animate-fadeInUp">
              <a href="https://tally.so/r/PdpWgQ" target="_blank" rel="noopener noreferrer" className="inline-block px-12 py-5 rounded-full font-medium text-xl shadow-lg hover:shadow-2xl transition-all hover:scale-105" style={{backgroundColor: 'var(--primary-color)', color: 'var(--accent-color)'}}>
                Become a GoosePro Today
              </a>
            </div>
          </div>
        </section>

        <Footer />
        <SignupModal isOpen={signupModalOpen} onClose={() => setSignupModalOpen(false)} defaultRole="GoosePro" />
      </div>
    );
  } catch (error) {
    console.error('GooseProPage error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ErrorBoundary><GooseProPage /></ErrorBoundary>);