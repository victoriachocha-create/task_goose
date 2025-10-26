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
    return (
      <div className="min-h-screen bg-white">
        <Header />
        
        <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-orange-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-[var(--text-secondary)]">
              Quick answers to everything you need to know about TaskGoose.
            </p>
          </div>
        </section>

        <FAQAccordion />

        <section className="py-16 px-6 bg-gradient-to-br from-[var(--primary-color)]/10 to-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-[var(--text-secondary)] mb-8">
              Let TaskGoose handle your tasks while you focus on what matters most.
            </p>
            <a href="index.html" className="inline-block px-8 py-4 rounded-full font-medium text-lg" style={{backgroundColor: 'var(--primary-color)', color: 'var(--accent-color)'}}>
              Book a Task
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