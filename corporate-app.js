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

function CorporatePage() {
  try {
    const solutions = [
      { title: 'Employee Assistance Programs', icon: 'users', desc: 'Support your team with lifestyle and wellness services' },
      { title: 'Facility Management', icon: 'building', desc: 'Comprehensive office and facility maintenance solutions' },
      { title: 'Admin Outsourcing', icon: 'file-text', desc: 'Delegate administrative tasks to focus on core business' },
      { title: 'Executive Concierge', icon: 'briefcase', desc: 'Premium services for leadership and VIP clients' },
      { title: 'Partner Integrations', icon: 'link', desc: 'Seamless integration with your existing systems' },
      { title: 'Custom Packages', icon: 'sparkles', desc: 'Tailored solutions for your unique business needs' }
    ];

    return (
      <div className="min-h-screen bg-white">
        <Header />
        
        <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-[var(--primary-color)]/10 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Smart Solutions for Modern Workplaces</h1>
            <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
              TaskGoose supports businesses, teams, and executives with tailored productivity and concierge solutions
            </p>
            <div className="flex justify-center gap-4 mt-8">
              <button className="px-8 py-4 rounded-full font-medium" style={{backgroundColor: 'var(--primary-color)', color: 'var(--accent-color)'}}>
                Request Corporate Package
              </button>
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {solutions.map((solution, idx) => (
                <div key={idx} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{backgroundColor: 'var(--primary-color)'}}>
                    <div className={`icon-${solution.icon} text-2xl text-[var(--accent-color)]`}></div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                  <p className="text-[var(--text-secondary)]">{solution.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  } catch (error) {
    console.error('CorporatePage error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ErrorBoundary><CorporatePage /></ErrorBoundary>);