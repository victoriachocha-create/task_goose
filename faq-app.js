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

function FAQPage() {
  try {
    React.useEffect(() => {
      const sections = document.querySelectorAll('.faq-section');
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
            }
          });
        },
        { threshold: 0.1 }
      );
      sections.forEach(section => observer.observe(section));
      return () => observer.disconnect();
    }, []);
    
    return (
      <div className="min-h-screen transition-colors duration-300" style={{backgroundColor: 'var(--background)'}}>
        <DarkModeToggle />
        <Header />
        
        <section className="pt-32 pb-16 px-6 transition-colors duration-300" style={{background: 'linear-gradient(to bottom right, rgba(245, 166, 35, 0.1), var(--background))'}}>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-[var(--text-secondary)]">
              Quick answers to everything you need to know about TaskGoose.
            </p>
          </div>
        </section>

        <FAQAccordion />

        <section className="py-16 px-6 transition-colors duration-300" style={{background: 'linear-gradient(to bottom right, rgba(168, 230, 207, 0.1), var(--background))'}}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-[var(--text-secondary)] mb-8">
              Let TaskGoose handle your tasks while you focus on what matters most.
            </p>
              <a href="https://tally.so/r/vGM8QD" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105" style={{backgroundColor: 'var(--primary-color)', color: 'var(--accent-color)'}}>
                Request a Task
              </a>
          </div>
        </section>

        <Footer />
      </div>
    );
  } catch (error) {
    console.error('FAQPage error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ErrorBoundary><FAQPage /></ErrorBoundary>);