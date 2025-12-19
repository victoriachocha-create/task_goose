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
    useScrollAnimation();
    
    const solutions = [
      { title: 'Employee Assistance Programs', icon: 'users', desc: 'Support your team with lifestyle and wellness services' },
      { title: 'Facility Management', icon: 'building', desc: 'Comprehensive office and facility maintenance solutions' },
      { title: 'Admin Outsourcing', icon: 'file-text', desc: 'Delegate administrative tasks to focus on core business' },
      { title: 'Executive Concierge', icon: 'briefcase', desc: 'Premium services for leadership and VIP clients' },
      { title: 'Partner Integrations', icon: 'link', desc: 'Seamless integration with your existing systems' },
      { title: 'Custom Packages', icon: 'sparkles', desc: 'Tailored solutions for your unique business needs' }
    ];

    return (
      <div className="min-h-screen transition-colors duration-300" style={{backgroundColor: 'var(--background)'}}>
        <DarkModeToggle />
        <Header />
        
        <section className="pt-32 pb-16 px-6 transition-colors duration-300" style={{background: 'linear-gradient(to bottom right, rgba(168, 230, 207, 0.1), var(--background))'}}>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6" data-animate="animate-fadeInUp">Smart Solutions for Modern Workplaces</h1>
            <p className="text-xl text-[var(--text-secondary)] leading-relaxed" data-animate="animate-fadeInUp">
              TaskGoose supports businesses, teams, and executives with tailored productivity and concierge solutions
            </p>
            <div className="flex justify-center gap-4 mt-8" data-animate="animate-fadeInUp">
              <a href="https://tally.so/r/rj5ZKv" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 rounded-full font-medium hover-lift" style={{backgroundColor: 'var(--primary-color)', color: 'var(--accent-color)'}}>
                Request Corporate Package
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {solutions.map((solution, idx) => (
                <div key={idx} data-animate="animate-fadeInUp" style={{animationDelay: `${idx * 0.1}s`}} className="rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift group cursor-pointer" style={{background: 'linear-gradient(to bottom right, var(--hover-bg), var(--card-background))'}}>
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" style={{backgroundColor: 'var(--primary-color)'}}>
                    <div className={`icon-${solution.icon} text-2xl text-white`}></div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--primary-color)] transition-colors duration-300">{solution.title}</h3>
                  <p className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors duration-300">{solution.desc}</p>
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