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
    const benefits = [
      { title: 'Access Paying Clients Daily', icon: 'users', desc: 'Connect with customers actively seeking your services' },
      { title: 'Secure Payments via Escrow', icon: 'shield-check', desc: 'Get paid safely and on time, every time' },
      { title: 'Professional Training', icon: 'graduation-cap', desc: 'Free certification and skill development programs' },
      { title: 'Partner Dashboard', icon: 'layout-dashboard', desc: 'Manage jobs, track earnings, and grow your business' },
      { title: 'Community Rewards', icon: 'gift', desc: 'Earn bonuses and incentives for excellent service' },
      { title: 'Marketing Support', icon: 'megaphone', desc: 'We promote your services to our growing user base' }
    ];

    return (
      <div className="min-h-screen bg-white">
        <Header />
        
        <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-[var(--primary-color)]/10 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Join the GoosePro Network</h1>
            <p className="text-xl text-[var(--text-secondary)] leading-relaxed mb-8">
              Grow your business, increase bookings, and get verified visibility
            </p>
            <button className="px-8 py-4 rounded-full font-medium text-lg" style={{backgroundColor: 'var(--primary-color)', color: 'var(--accent-color)'}}>
              Become a GoosePro Today
            </button>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Why Join TaskGoose?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{backgroundColor: 'var(--primary-color)'}}>
                    <div className={`icon-${benefit.icon} text-2xl text-[var(--accent-color)]`}></div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-[var(--text-secondary)]">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  } catch (error) {
    console.error('GooseProPage error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ErrorBoundary><GooseProPage /></ErrorBoundary>);